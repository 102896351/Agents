const fs = require('fs');
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';
let blog = fs.readFileSync(base + '/src/data/blog.ts', 'utf-8');

const updates = {
  'claude-code-2026-updates': '/blog/claude-code-2026-updates-thumb.jpg',
  'midjourney-vs-flux-vs-lovart-2026': '/blog/midjourney-vs-flux-vs-lovart-2026-thumb.jpg',
  'build-first-ai-coding-agent-2026': '/blog/build-first-ai-coding-agent-2026-thumb.jpg',
};

Object.entries(updates).forEach(([slug, newThumb]) => {
  const re = new RegExp("(slug: '" + slug + "'[\\s\\S]*?coverThumb: ')([^']+)(')");
  const m = blog.match(re);
  if (m) {
    console.log(slug + ': ' + m[2] + ' -> ' + newThumb);
    blog = blog.replace(re, "$1" + newThumb + "$3");
  } else {
    console.log(slug + ': NOT FOUND');
  }
});

fs.writeFileSync(base + '/src/data/blog.ts', blog, 'utf-8');
console.log('Updated coverThumb paths');
