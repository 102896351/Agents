const fs = require('fs');
const path = require('path');
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';

let blogTs = fs.readFileSync(path.join(base, 'src/data/blog.ts'), 'utf-8');

const endMarker = 'export function getBlogSorted';
const endIdx = blogTs.indexOf(endMarker);
if (endIdx === -1) { console.error('Could not find end marker'); process.exit(1); }

const newPosts = [
  {
    slug: 'claude-code-2026-updates',
    title: 'Claude Code 2026 Major Updates: What Actually Changed',
    excerpt: "Claude Code had its most significant update in years at Code w/ Claude 2026. Artifacts, Advisor Tool, Managed Agents, rate limit doubles. Here's what actually matters for working developers.",
    date: '2026-07-19',
    tags: ['coding', 'news', 'claude-code', 'anthropic', 'agents'],
    relatedAgents: ['claude-code', 'cursor', 'cline'],
    coverThumb: '/blog/claude-code-2026-updates-thumb.jpg',
    readingTime: 9,
    file: 'temp-post1.md'
  },
  {
    slug: 'midjourney-vs-flux-vs-lovart-2026',
    title: 'Midjourney vs Flux vs Lovart: Which AI Image Tool Should You Use in 2026?',
    excerpt: 'Midjourney owns editorial photorealism. Flux is the open-source challenger. Lovart converts a brief into finished brand assets. Three tools, three very different shapes.',
    date: '2026-07-19',
    tags: ['creative', 'image', 'comparison', 'midjourney', 'flux', 'lovart'],
    relatedAgents: ['midjourney', 'flux', 'lovart'],
    coverThumb: '/blog/midjourney-vs-flux-vs-lovart-2026-thumb.jpg',
    readingTime: 8,
    file: 'temp-post2.md'
  },
  {
    slug: 'build-first-ai-coding-agent-2026',
    title: 'How to Build Your First AI Coding Agent in 2026',
    excerpt: "A practical guide to building your first AI coding agent using Cline, Claude Code, and LangGraph. From zero to a working autonomous coding assistant in 30 minutes.",
    date: '2026-07-19',
    tags: ['coding', 'how-to', 'cline', 'claude-code', 'langgraph', 'agents'],
    relatedAgents: ['cline', 'claude-code', 'langgraph', 'cursor'],
    coverThumb: '/blog/build-first-ai-coding-agent-2026-thumb.jpg',
    readingTime: 8,
    file: 'temp-post3.md'
  }
];

function escapeJs(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

const entries = newPosts.map(p => {
  let raw = fs.readFileSync(path.join(base, p.file), 'utf-8').trim();
  let content = escapeJs(raw);

  return `  {
    slug: '${p.slug}',
    title: "${p.title.replace(/"/g, '\\"')}",
    excerpt: "${p.excerpt.replace(/"/g, '\\"')}",
    date: '${p.date}',
    author: 'Mavis · AI Agents Hub',
    readingTime: ${p.readingTime},
    tags: [${p.tags.map(t => "'" + t + "'").join(', ')}],
    relatedAgents: [${p.relatedAgents.map(a => "'" + a + "'").join(', ')}],
    coverThumb: '${p.coverThumb}',
    content: \`
${content}
\`,
  }`;
}).join(',\n\n');

// The old array closes with },\n];  — extract everything BEFORE the ];
// so we add the new entries and re-close with ];\nconst oldClosing = '];\n\n' + blogTs.substring(endIdx).trimStart();
const before = blogTs.substring(0, endIdx).trimEnd().replace(/\n];\s*$/, ''); // remove old ];
const newBlogTs = before + ',\n\n' + entries + '\n];\n\n' + blogTs.substring(endIdx);

fs.writeFileSync(path.join(base, 'src/data/blog.ts'), newBlogTs, 'utf-8');
console.log('Done! Added', newPosts.length, 'posts. Total size:', newBlogTs.length, 'chars');
