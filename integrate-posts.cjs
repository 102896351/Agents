const fs = require('fs');
const path = require('path');
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';

let blogTs = fs.readFileSync(path.join(base, 'src/data/blog.ts'), 'utf-8');

const endMarker = 'export function getBlogSorted';
const endIdx = blogTs.indexOf(endMarker);
if (endIdx === -1) { console.error('Could not find end marker'); process.exit(1); }

const newPosts = [
  {
    slug: 'ai-video-runway-vs-sora-vs-pika-2026',
    title: "AI Video Generation in 2026: Runway vs Sora vs Pika",
    excerpt: "Three AI video platforms have separated from the pack in 2026: Runway is the film industry standard, Sora set the new physics realism bar, and Pika is the creator-friendly speed platform. Here's how to pick.",
    date: '2026-07-20',
    tags: ['video', 'creative', 'comparison', 'runway', 'sora', 'pika'],
    relatedAgents: ['runway', 'sora', 'pika'],
    coverThumb: '/blog/ai-video-2026-thumb.jpg',
    readingTime: 9,
    file: 'temp-post7.md'
  },
  {
    slug: 'autonomous-coding-devin-vs-manus-vs-replit-2026',
    title: "Autonomous AI Coding Agents in 2026: Devin vs Manus vs Replit Agent",
    excerpt: "Three AI products claim to do autonomous software engineering in 2026. Devin is the benchmarked leader for production teams, Manus is the general-purpose agent, and Replit Agent is the in-IDE full-stack builder. Here's how to pick.",
    date: '2026-07-20',
    tags: ['coding', 'agents', 'comparison', 'devin', 'manus', 'replit'],
    relatedAgents: ['devin', 'manus', 'replit-agent'],
    coverThumb: '/blog/autonomous-coding-2026-thumb.jpg',
    readingTime: 10,
    file: 'temp-post8.md'
  },
  {
    slug: 'agent-frameworks-langgraph-vs-crewai-vs-autogen-2026',
    title: "AI Agent Frameworks in 2026: LangGraph vs CrewAI vs AutoGen",
    excerpt: "Three open-source Python frameworks have become the default way to build production AI agent systems in 2026. LangGraph is graph-based, CrewAI is role-based, and AutoGen is conversation-based. Here's how to pick the right one.",
    date: '2026-07-20',
    tags: ['agents', 'frameworks', 'comparison', 'langgraph', 'crewai', 'autogen'],
    relatedAgents: ['langgraph', 'autogen'],
    coverThumb: '/blog/agent-frameworks-2026-thumb.jpg',
    readingTime: 11,
    file: 'temp-post9.md'
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
