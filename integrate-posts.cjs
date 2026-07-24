const fs = require('fs');
const path = require('path');
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';

let blogTs = fs.readFileSync(path.join(base, 'src/data/blog.ts'), 'utf-8');

const endMarker = 'export function getBlogSorted';
const endIdx = blogTs.indexOf(endMarker);
if (endIdx === -1) { console.error('Could not find end marker'); process.exit(1); }

const newPosts = [
  {
    slug: 'ai-chat-claude-vs-chatgpt-vs-deepseek-2026',
    title: "AI Chat Models in 2026: Claude vs ChatGPT vs DeepSeek",
    excerpt: "Three AI chat products dominate 2026. Claude leads on reasoning and safety. ChatGPT leads on ecosystem and multimodal. DeepSeek leads on cost and open weights. Here's how to pick the right one.",
    date: '2026-07-24',
    tags: ['chat', 'llm', 'comparison', 'claude', 'chatgpt', 'deepseek'],
    relatedAgents: ['claude', 'chatgpt', 'deepseek'],
    coverThumb: '/blog/ai-chat-2026-thumb.jpg',
    readingTime: 10,
    file: 'temp-post13.md'
  },
  {
    slug: 'ai-data-vanna-vs-notebooklm-2026',
    title: "AI for Data Analysis in 2026: Vanna vs NotebookLM",
    excerpt: "Two AI tools have become the default for working with data in 2026. Vanna is the AI SQL agent for structured data. NotebookLM is the AI research notebook for documents. They compose, not compete.",
    date: '2026-07-24',
    tags: ['data', 'analysis', 'sql', 'research', 'comparison', 'vanna', 'notebooklm'],
    relatedAgents: ['notebooklm', 'vanna'],
    coverThumb: '/blog/ai-data-2026-thumb.jpg',
    readingTime: 9,
    file: 'temp-post14.md'
  },
  {
    slug: 'open-source-coding-aider-vs-cody-vs-continue-2026',
    title: "Open-Source AI Coding in 2026: Aider vs Cody vs Continue",
    excerpt: "Three open-source AI coding tools have carved out distinct positions in 2026. Aider is the terminal-native git-integrated pair programmer. Cody is the codebase-aware enterprise assistant. Continue is the assemble-your-own-stack extension.",
    date: '2026-07-24',
    tags: ['coding', 'open-source', 'comparison', 'aider', 'cody', 'continue'],
    relatedAgents: ['cody', 'continue'],
    coverThumb: '/blog/open-source-coding-2026-thumb.jpg',
    readingTime: 10,
    file: 'temp-post15.md'
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

const before = blogTs.substring(0, endIdx).trimEnd().replace(/\n];\s*$/, '');
const newBlogTs = before + ',\n\n' + entries + '\n];\n\n' + blogTs.substring(endIdx);

fs.writeFileSync(path.join(base, 'src/data/blog.ts'), newBlogTs, 'utf-8');
console.log('Done! Added', newPosts.length, 'posts. Total size:', newBlogTs.length, 'chars');
