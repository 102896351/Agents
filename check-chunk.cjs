const fs = require('fs');
const t = fs.readFileSync('dist/chunks/blog_CNIubj7S.mjs', 'utf8');
const m = t.match(/slug:\s+"([^"]+)"/g);
console.log('Chunk posts:', m ? m.length : 0);
if (m) m.forEach((x, i) => console.log(i + 1, x));
