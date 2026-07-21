const fs = require('fs');
const path = require('path');
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';

let blogTs = fs.readFileSync(path.join(base, 'src/data/blog.ts'), 'utf-8');

const endMarker = 'export function getBlogSorted';
const endIdx = blogTs.indexOf(endMarker);
if (endIdx === -1) { console.error('Could not find end marker'); process.exit(1); }

const newPosts = [
  {
    slug: 'ai-music-suno-vs-udio-2026',
    title: "AI Music Generation in 2026: Suno vs Udio",
    excerpt: "Two AI music platforms dominate in 2026. Suno is the accessible text-to-music platform that made AI music mainstream. Udio is the high-fidelity platform built for musicians and producers. Here's how to pick.",
    date: '2026-07-21',
    tags: ['music', 'creative', 'comparison', 'suno', 'udio'],
    relatedAgents: ['suno', 'udio'],
    coverThumb: '/blog/ai-music-2026-thumb.jpg',
    readingTime: 9,
    file: 'temp-post10.md'
  },
  {
    slug: 'ai-avatar-heygen-vs-synthesia-2026',
    title: "AI Avatar Video in 2026: Heygen vs Synthesia",
    excerpt: "Two AI avatar video platforms dominate the enterprise market. Heygen is the creator-friendly platform with 300+ avatars and 175+ languages. Synthesia is the enterprise compliance platform with deep governance. Here's how to pick.",
    date: '2026-07-21',
    tags: ['video', 'avatar', 'enterprise', 'comparison', 'heygen', 'synthesia'],
    relatedAgents: ['heygen', 'synthesia'],
    coverThumb: '/blog/ai-avatar-2026-thumb.jpg',
    readingTime: 9,
    file: 'temp-post11.md'
  },
  {
    slug: 'ai-customer-service-sierra-vs-decagon-2026',
    title: "AI Customer Service in 2026: Sierra vs Decagon",
    excerpt: "Two AI customer service platforms dominate the enterprise market. Sierra is the brand-voice platform that prioritizes customer experience. Decagon is the resolution-efficiency platform built for high-volume support operations. Here's how to pick.",
    date: '2026-07-21',
    tags: ['customer-service', 'enterprise', 'comparison', 'sierra', 'decagon'],
    relatedAgents: ['sierra', 'decagon'],
    coverThumb: '/blog/ai-customer-service-2026-thumb.jpg',
    readingTime: 9,
    file: 'temp-post12.md'
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
