const fs = require('fs');
const path = require('path');
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';

let blogTs = fs.readFileSync(path.join(base, 'src/data/blog.ts'), 'utf-8');

const endMarker = 'export function getBlogSorted';
const endIdx = blogTs.indexOf(endMarker);
if (endIdx === -1) { console.error('Could not find end marker'); process.exit(1); }

const newPosts = [
  {
    slug: 'voice-ai-vapi-vs-retell-vs-elevenlabs-2026',
    title: "Voice AI Platforms in 2026: VAPI vs Retell vs ElevenLabs",
    excerpt: "Three voice AI infrastructure providers have taken different paths in 2026: VAPI gives developers full control, Retell owns the phone call use case, and ElevenLabs sets the voice quality standard. Here's how to pick.",
    date: '2026-07-19',
    tags: ['voice', 'ai', 'comparison', 'vapi', 'retell', 'elevenlabs'],
    relatedAgents: ['vapi', 'retell', 'elevenlabs'],
    coverThumb: '/blog/voice-ai-2026-thumb.jpg',
    readingTime: 9,
    file: 'temp-post4.md'
  },
  {
    slug: 'windsurf-vs-cursor-vs-cline-2026',
    title: "Windsurf vs Cursor vs Cline: The VS Code AI Extension Battle in 2026",
    excerpt: "Three AI coding tools live inside VS Code: Windsurf's Cascade context tracking, Cursor's best-in-class tab autocomplete, and Cline's open-source BYOK flexibility. Here's how to pick the right one.",
    date: '2026-07-19',
    tags: ['coding', 'comparison', 'windsurf', 'cursor', 'cline', 'vscode'],
    relatedAgents: ['windsurf', 'cursor', 'cline'],
    coverThumb: '/blog/windsurf-vs-cursor-vs-cline-2026-thumb.jpg',
    readingTime: 8,
    file: 'temp-post5.md'
  },
  {
    slug: 'ai-productivity-tools-2026',
    title: "The AI Productivity Stack in 2026: Meeting AI, Document AI, and Communication AI",
    excerpt: "Three categories of AI productivity tools are earning permanent spots in knowledge worker workflows: Fireflies and Otter for meeting capture, Notion AI for document drafting, and Grammarly for communication polish. Here's how they compose.",
    date: '2026-07-19',
    tags: ['productivity', 'ai', 'meetings', 'notion', 'grammarly', 'comparison'],
    relatedAgents: ['notion-ai', 'grammarly'],
    coverThumb: '/blog/ai-productivity-tools-2026-thumb.jpg',
    readingTime: 8,
    file: 'temp-post6.md'
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

// Remove old ]; and append new entries
const before = blogTs.substring(0, endIdx).trimEnd().replace(/\n];\s*$/, '');
const newBlogTs = before + ',\n\n' + entries + '\n];\n\n' + blogTs.substring(endIdx);

fs.writeFileSync(path.join(base, 'src/data/blog.ts'), newBlogTs, 'utf-8');
console.log('Done! Added', newPosts.length, 'posts. Total size:', newBlogTs.length, 'chars');
