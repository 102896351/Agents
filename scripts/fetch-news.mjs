// ============================================================
//  fetch-news.mjs — AI 新闻自动抓取脚本 (v2)
//  用法：node scripts/fetch-news.mjs
//  功能：
//    - 从多个 RSS 源抓取 AI 新闻
//    - 自动抓正文（og:image + 段落）
//    - 下载主图到 public/news/<slug>.<ext>
//    - 种子文件机制：src/data/news-seeds.ts 里的条目不会被覆盖
//    - 写完整字段：slug, title, summary, content, imageUrl, source, sourceUrl, date, category, tags
//  设计：纯 Node（无外部依赖），可在 GitHub Actions 直接运行
// ============================================================

import { promises as fs } from 'node:fs';
import path from 'node:path';
import https from 'node:https';

// ---------- 配置：RSS 源 ----------
const SOURCES = [
  {
    name: 'TechCrunch AI',
    url: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    keywords: ['ai', 'gpt', 'claude', 'gemini', 'agent', 'llm', 'model', 'anthropic', 'openai'],
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

const MAX_ITEMS = 30;
const MAX_DAYS_OLD = 30;
const PARAGRAPH_MIN_LEN = 60;       // 段落最小长度（过滤掉短小噪声）
const CONTENT_MAX_PARAGRAPHS = 6;   // 抓多少段作为正文
const CONTENT_MAX_CHARS = 2400;     // 截断上限
const IMG_DOWNLOAD_TIMEOUT = 30000;

// ---------- 工具函数 ----------
function decodeEntities(s) {
  return s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '-').replace(/&#8212;/g, '-')
    .replace(/&#160;/g, ' ').replace(/&nbsp;/g, ' ')
    .replace(/&#8230;/g, '...');
}

function stripHtml(s) {
  return decodeEntities(s.replace(/<[^>]+>/g, '')).trim();
}

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

function toDateStr(pubDate) {
  const d = new Date(pubDate);
  if (isNaN(d.getTime())) return null;
  return d.toISOString().slice(0, 10);
}

function matchKeywords(text, keywords) {
  return keywords.some((k) => text.toLowerCase().includes(k));
}

function inferCategory(title) {
  const t = title.toLowerCase();
  if (/\braise|funding|series [a-z]|valuation|invests?\b/.test(t)) return 'funding';
  if (/\bpaper|research|benchmark|arxiv\b/.test(t)) return 'research';
  if (/\bregulat|ban|lawsuit|act|compliance|senate|eu\b/.test(t)) return 'regulation';
  if (/\breleas|launch|rolls? out|ships?|debuts?|announces?\b/.test(t)) return 'release';
  return 'industry';
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

// ---------- HTTP 抓取 ----------
// text: true → 返回 UTF-8 字符串（用于 HTML/RSS）
// text: false → 返回 Buffer（用于图片二进制）
function fetchUrl(url, { timeout = 20000, headers = {}, text = true } = {}) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { 'User-Agent': 'AI-Agents-Hub-NewsBot/1.0', ...headers },
      timeout,
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location, { timeout, headers, text }).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const chunks = [];
      // 始终按 binary 收集，最后再决定怎么解码 → 避免 utf8 解码破坏 binary
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        resolve(text ? buf.toString('utf8') : buf);
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

// 从文章 HTML 抽取 og:image + 段落正文
function extractArticle(html) {
  // og:image
  let ogImage = null;
  const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
  if (ogMatch) ogImage = ogMatch[1];
  if (!ogImage) {
    const twMatch = html.match(/<meta\s+name="twitter:image"\s+content="([^"]+)"/);
    if (twMatch) ogImage = twMatch[1];
  }

  // 段落正文（从 entry-content 容器里取）
  const entryStart = html.indexOf('entry-content wp-block-post-content');
  let paragraphs = [];
  if (entryStart > 0) {
    const content = html.substring(entryStart);
    const paraMatches = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
    for (const m of paraMatches) {
      let p = m[1].replace(/<[^>]+>/g, '');
      p = decodeEntities(p).trim().replace(/\s+/g, ' ');
      // 过滤掉太短的、广告、推广链接、署名等
      if (p.length < PARAGRAPH_MIN_LEN) continue;
      if (/^When you purchase/.test(p)) break;  // 推广声明后通常是 footer
      if (/^You can contact/.test(p)) break;
      if (/^November\s+\d+/.test(p)) break;
      if (/^Most Popular/i.test(p)) break;
      if (/^[\w\s]+ is a (senior|freelance|staff)/.test(p)) break;
      paragraphs.push(p);
      if (paragraphs.length >= CONTENT_MAX_PARAGRAPHS) break;
    }
  }

  // 截断总长度
  let total = 0;
  const trimmed = [];
  for (const p of paragraphs) {
    if (total + p.length > CONTENT_MAX_CHARS) break;
    trimmed.push(p);
    total += p.length;
  }

  return { ogImage, content: trimmed.join('\n\n') };
}

// 下载图片到 public/news/<slug>.<ext>，返回本地路径（如 "/news/xxx.jpg"）
async function downloadImage(imageUrl, slug, outDir) {
  if (!imageUrl) return '';
  try {
    const extMatch = imageUrl.match(/\.(jpg|jpeg|png|webp|gif)(\?|$)/i);
    const ext = extMatch ? '.' + extMatch[1].toLowerCase() : '.jpg';
    const filename = `${slug}${ext}`;
    const dest = path.join(outDir, filename);

    // 关键：text: false 返回 Buffer，原样写盘
    const data = await fetchUrl(imageUrl, { timeout: IMG_DOWNLOAD_TIMEOUT, text: false });
    await fs.writeFile(dest, data);

    return `/news/${filename}`;
  } catch (e) {
    console.log(`    ! image download failed: ${e.message}`);
    return imageUrl;  // fallback: 保留原 URL
  }
}

// ---------- 种子文件机制 ----------
// 从 src/data/news-seeds.ts 读取手工精选条目（不会被自动覆盖）
async function loadSeeds() {
  const seedsPath = path.join(process.cwd(), 'src', 'data', 'news-seeds.ts');
  try {
    const seedsSrc = await fs.readFile(seedsPath, 'utf8');
    // 提取 export const newsSeeds: NewsItem[] = [ ... ] 之间的数组字面量
    const match = seedsSrc.match(/export\s+const\s+newsSeeds[^=]*=\s*(\[[\s\S]*?\n\]);/);
    if (!match) return [];
    // 用 Function 把数组字面量求值（生产环境用 vm.runInNewContext 更安全）
    const arr = new Function(`return (${match[1]});`)();
    return arr;
  } catch (e) {
    if (e.code !== 'ENOENT') console.log(`  WARN: failed to load seeds: ${e.message}`);
    return [];
  }
}

// ---------- 主流程 ----------
async function main() {
  console.log('=== Fetching AI news from RSS sources ===');
  const allItems = [];
  const seenLinks = new Set();

  for (const src of SOURCES) {
    try {
      console.log(`Fetching: ${src.name} ...`);
      const xml = await fetchUrl(src.url);
      const items = parseRss(xml, src.name);
      console.log(`  parsed ${items.length} items`);
      for (const it of items) {
        if (!matchKeywords(it.title + ' ' + it.desc, src.keywords)) continue;
        if (seenLinks.has(it.link)) continue;
        seenLinks.add(it.link);
        const dateStr = toDateStr(it.pubDate);
        if (!dateStr) continue;
        allItems.push({ ...it, dateStr });
      }
    } catch (e) {
      console.log(`  ERROR: ${e.message}`);
    }
  }

  // 时间窗口
  const cutoff = new Date(Date.now() - MAX_DAYS_OLD * 86400000).toISOString().slice(0, 10);
  let fresh = allItems.filter((it) => it.dateStr >= cutoff);
  fresh.sort((a, b) => (a.dateStr < b.dateStr ? 1 : -1));
  let picked = fresh.slice(0, MAX_ITEMS);
  console.log(`\n=== Picked ${picked.length} candidates ===`);

  // 加载种子（手工精选）
  const seeds = await loadSeeds();
  console.log(`Loaded ${seeds.length} manual seeds`);
  const seedSlugs = new Set(seeds.map((s) => s.slug));
  const seedLinks = new Set(seeds.map((s) => s.sourceUrl));

  // 从候选里剔除已在种子里的（避免重复 + 保护手工）
  picked = picked.filter((it) => !seedLinks.has(it.link));

  // 对每个候选抓全文 + 下载图片
  const outDir = path.join(process.cwd(), 'public', 'news');
  await fs.mkdir(outDir, { recursive: true });

  console.log(`\n=== Fetching full content + images for ${picked.length} items ===`);
  const enriched = [];
  for (let i = 0; i < picked.length; i++) {
    const it = picked[i];
    const slug = slugify(it.title, it.source);
    process.stdout.write(`  [${i + 1}/${picked.length}] ${slug} ... `);
    try {
      const html = await fetchUrl(it.link);
      const { ogImage, content } = extractArticle(html);
      const imageUrl = await downloadImage(ogImage, slug, outDir);
      enriched.push({
        slug, title: it.title, source: it.source, sourceUrl: it.link,
        date: it.dateStr, summary: (it.desc || it.title).slice(0, 200).trim(),
        content, imageUrl,
        category: inferCategory(it.title),
        tags: inferTags(it.title),
      });
      console.log(`ok (img:${imageUrl ? 'y' : 'n'}, p:${content ? content.split('\n\n').length : 0})`);
    } catch (e) {
      console.log(`WARN: ${e.message}`);
      // 失败也保留条目，但 content/image 留空
      enriched.push({
        slug, title: it.title, source: it.source, sourceUrl: it.link,
        date: it.dateStr, summary: (it.desc || it.title).slice(0, 200).trim(),
        content: '', imageUrl: '',
        category: inferCategory(it.title),
        tags: inferTags(it.title),
      });
    }
  }

  if (enriched.length === 0 && seeds.length === 0) {
    console.log('No items + no seeds, aborting.');
    return;
  }

  // 生成 news.ts：种子在前，自动抓的按时间倒序在后
  const seedsSorted = [...seeds].sort((a, b) => (a.date < b.date ? 1 : -1));
  const finalItems = [...seedsSorted, ...enriched];
  const output = generateNewsFile(finalItems, seedSlugs);
  const outPath = path.join(process.cwd(), 'src', 'data', 'news.ts');
  await fs.writeFile(outPath, output, 'utf8');
  console.log(`\n=== Wrote ${finalItems.length} items (${seeds.length} seeds + ${enriched.length} fresh) to ${outPath} ===`);
}

function tsEscape(s) {
  // TypeScript template literal escape: backticks and ${ need escaping
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

function tsString(s) {
  // For single-quoted TS string: escape backslashes and single quotes
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function generateNewsFile(items, seedSlugs) {
  const data = items.map((it) => {
    const seedTag = seedSlugs.has(it.slug) ? '  // [seed]' : '';
    const safeTitle = tsString(it.title);
    const safeSummary = tsString(it.summary || '');
    const safeSource = tsString(it.source);
    const safeImage = tsString(it.imageUrl || '');
    const safeContent = tsEscape(it.content || '');
    const safeTags = JSON.stringify(it.tags || ['ai']);
    return `  {${seedTag}
    slug: '${tsString(it.slug)}',
    title: '${safeTitle}',
    summary: '${safeSummary}',
    content: \`${safeContent}\`,
    imageUrl: '${safeImage}',
    source: '${safeSource}',
    sourceUrl: '${tsString(it.sourceUrl)}',
    date: '${it.date}',
    category: '${it.category}',
    tags: ${safeTags},
  },`;
  }).join('\n');

  return `// ============================================================
//  AI News 数据源 —— 由 scripts/fetch-news.mjs 自动生成
//  最后更新：${new Date().toISOString()}
//  标 [seed] 的条目来自 src/data/news-seeds.ts（手工精选，不会被覆盖）
//  标 [seed] 的 content / imageUrl 由人工维护；其余由脚本自动抓取
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
  content: string;
  imageUrl: string;
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

main().catch((e) => {
  console.error('Fatal:', e);
  process.exit(1);
});