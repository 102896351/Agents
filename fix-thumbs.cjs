const fs = require('fs');
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';
let blog = fs.readFileSync(base + '/src/data/blog.ts', 'utf-8');

const updates = [
  { slug: 'claude-code-2026-updates', hero: '/blog/claude-code-2026-updates-hero.jpg', thumb: '/blog/claude-code-2026-updates-thumb.jpg' },
  { slug: 'midjourney-vs-flux-vs-lovart-2026', hero: '/blog/midjourney-vs-flux-vs-lovart-comparison.jpg', thumb: '/blog/midjourney-vs-flux-vs-lovart-2026-thumb.jpg' },
  { slug: 'build-first-ai-coding-agent-2026', hero: '/blog/build-first-ai-coding-agent-loop.jpg', thumb: '/blog/build-first-ai-coding-agent-2026-thumb.jpg' },
];

updates.forEach(({ slug, hero, thumb }) => {
  // Find this post and update coverThumb
  const idx = blog.indexOf("slug: '" + slug + "'");
  if (idx === -1) { console.log('NOT FOUND: ' + slug); return; }
  
  const segment = blog.substring(idx, idx + 500);
  const oldMatch = segment.match(/coverThumb: '([^']+)'/);
  if (oldMatch) {
    console.log(slug + ': ' + oldMatch[1] + ' -> ' + thumb);
    blog = blog.replace(oldMatch[0], "coverThumb: '" + thumb + "'");
  } else {
    console.log('No coverThumb found for: ' + slug);
  }
});

fs.writeFileSync(base + '/src/data/blog.ts', blog, 'utf-8');
console.log('Done');
