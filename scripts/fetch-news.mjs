// ============================================================
//  fetch-news.mjs — AI 新闻自动抓取脚本
//  用法：node scripts/fetch-news.mjs
//  功能：从多个 RSS 源抓取 AI 新闻，过滤/去重，生成 src/data/news.ts
//  设计：纯 Node（无外部依赖），可在 GitHub Actions 直接运行
// ============================================================

import { promises as fs } from 'node:fs';
import path from 'node:path';

// ---------- 配置：RSS 源 ----------
// 多源聚合，覆盖广义 AI 新闻。每个源带关键字过滤。
const SOURCES = [
  {
    name: 'TechCrunch AI',
    url: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    keywords: ['ai', 'ai ', 'gpt', 'claude', 'gemini', 'agent', 'llm', 'model', 'anthropic', 'openai'],
  },
  {
    name: 'The Verge AI',
    url: 'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
    keywords: ['ai', 'gpt', 'claude', 'gemini', 'agent', 'llm', 'model', 'anthropic', 'openai'],
  },
  {
    name: 'VentureBeat AI',
    url: 'https://venturebeat.com/category/ai/feed/',
    keywords: ['ai', 'gpt', 'claude', 'gemini', 'agent', 'llm', 'model', 'anthropic', 'openai'],
  },
];

// ---------- 配置：保留条数 ----------
const MAX_ITEMS = 30; // 总共保留多少条
const MAX_DAYS_OLD = 30; // 只保留多少天内的新闻

// ---------- 工具函数 ----------
// 从 RSS XML 里粗糙地提取 item（避免依赖 xml 解析库）
function parseRss(xml, sourceName) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = itemRegex.exec(xml)) !== null) {
    const block = m[1];
    const title = block.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1]
      || block.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '';
    const link = block.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() || '';
    const pubDate = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() || '';
    const desc = block.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1]
      || block.match(/<description>([\s\S]*?)<\/description>/)?.[1] || '';
    items.push({ title: decodeEntities(title), link, pubDate, desc: stripHtml(desc), source: sourceName });
  }
  return items;
}

function decodeEntities(s) {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

function stripHtml(s) {
  return decodeEntities(s.replace(/<[^>]+>/g, '')).trim();
}

function slugify(title, sourceName) {
  const base = title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 6)
    .join('-');
  const src = sourceName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 6);
  return `${base}-${src}`.slice(0, 80);
}

// 把 pubDate (RFC822) 转成 YYYY-MM-DD
function toDateStr(pubDate) {
  const d = new Date(pubDate);
  if (isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

// 关键词过滤：标题或描述里命中任一关键词
function matchKeywords(text, keywords) {
  const lower = text.toLowerCase();
  return keywords.some((k) => lower.includes(k));
}

// 分类推断：根据标题内容给一个粗略分类
function inferCategory(title) {
  const t = title.toLowerCase();
  if (/\braise|funding|series [a-z]|valuation|invests?\b/.test(t)) return 'funding';
  if (/\bpaper|research|benchmark|arxiv\b/.test(t)) return 'research';
  if (/\bregulat|ban|lawsuit|act|compliance|senate|eu\b/.test(t)) return 'regulation';
  if (/\breleas|launch|rolls? out|ships?|debuts?|announces?\b/.test(t)) return 'release';
  return 'industry';
}

// ---------- 主流程 ----------
async function main() {
  console.log('=== Fetching AI news from RSS sources ===');
  const allItems = [];
  const seenLinks = new Set();

  for (const src of SOURCES) {
    try {
      console.log(`Fetching: ${src.name} ...`);
      const res = await fetch(src.url, {
        signal: AbortSignal.timeout(20000),
        headers: { 'User-Agent': 'AI-Agents-Hub-NewsBot/1.0' },
      });
      if (!res.ok) {
        console.log(`  HTTP ${res.status}, skip`);
        continue;
      }
      const xml = await res.text();
      const items = parseRss(xml, src.name);
      console.log(`  parsed ${items.length} items`);

      for (const it of items) {
        // 关键词过滤
        if (!matchKeywords(it.title + ' ' + it.desc, src.keywords)) continue;
        // 去重（按 link）
        if (seenLinks.has(it.link)) continue;
        seenLinks.add(it.link);
        // 日期处理
        const dateStr = toDateStr(it.pubDate);
        if (!dateStr) continue;
        allItems.push({ ...it, dateStr });
      }
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
    }
  }

  // 按日期过滤：只保留 N 天内
  const cutoff = new Date(Date.now() - MAX_DAYS_OLD * 86400000).toISOString().slice(0, 10);
  const fresh = allItems.filter((it) => it.dateStr >= cutoff);

  // 按日期倒序，取前 MAX_ITEMS 条
  fresh.sort((a, b) => (a.dateStr < b.dateStr ? 1 : -1));
  const picked = fresh.slice(0, MAX_ITEMS);

  console.log(`\n=== Picked ${picked.length} items (from ${allItems.length} candidates) ===`);

  if (picked.length === 0) {
    console.log('No items fetched, keeping existing news.ts unchanged.');
    return;
  }

  // 生成 news.ts 内容
  const output = generateNewsFile(picked);
  const outPath = path.join(process.cwd(), 'src', 'data', 'news.ts');
  await fs.writeFile(outPath, output, 'utf8');
  console.log(`\n=== Wrote ${picked.length} news items to ${outPath} ===`);
}

function generateNewsFile(items) {
  const data = items.map((it) => {
    const slug = slugify(it.title, it.source);
    const category = inferCategory(it.title);
    const summary = (it.desc || it.title).slice(0, 200).trim();
    const safeTitle = it.title.replace(/'/g, "\\'");
    const safeSummary = summary.replace(/'/g, "\\'");
    const safeSource = it.source.replace(/'/g, "\\'");
    const tags = inferTags(it.title);
    return `  {
    slug: '${slug}',
    title: '${safeTitle}',
    summary: '${safeSummary}',
    source: '${safeSource}',
    sourceUrl: '${it.link}',
    date: '${it.dateStr}',
    category: '${category}',
    tags: ${JSON.stringify(tags)},
  },`;
  }).join('\n');

  return `// ============================================================
//  AI News 数据源 —— 由 scripts/fetch-news.mjs 自动生成
//  最后更新：${new Date().toISOString()}
//  请勿手动编辑（会被下次抓取覆盖）；手动精选请放种子文件
// ============================================================

export type NewsCategory =
  | 'release'
  | 'funding'
  | 'research'
  | 'industry'
  | 'regulation';

export const newsCategories: { id: NewsCategory; label: string }[] = [
  { id: 'release', label: 'Releases' },
  { id: 'funding', label: 'Funding' },
  { id: 'research', label: 'Research' },
  { id: 'industry', label: 'Industry' },
  { id: 'regulation', label: 'Regulation' },
];

export interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: NewsCategory;
  tags: string[];
}

export const categoryAccent: Record<NewsCategory, string> = {
  release: 'linear-gradient(135deg, #6366f1, #818cf8)',
  funding: 'linear-gradient(135deg, #22c55e, #4ade80)',
  research: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
  industry: 'linear-gradient(135deg, #ec4899, #f472b6)',
  regulation: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
};

export const news: NewsItem[] = [
${data}
];

export function getNewsSorted(): NewsItem[] {
  return [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsByCategory(cat: NewsCategory): NewsItem[] {
  return news
    .filter((n) => n.category === cat)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
`;
}

function inferTags(title) {
  const tags = [];
  const t = title.toLowerCase();
  const known = ['openai', 'anthropic', 'claude', 'gpt', 'gemini', 'google', 'meta', 'llama',
    'mistral', 'perplexity', 'microsoft', 'agent', 'llm', 'coding', 'image', 'video'];
  for (const k of known) {
    if (t.includes(k)) tags.push(k);
  }
  if (tags.length === 0) tags.push('ai');
  return tags;
}

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});
