const fs = require('fs');
const t = fs.readFileSync('src/data/blog.ts', 'utf8');
const idx = t.indexOf("Here's what");
console.log('ASCII apostrophe index:', idx);
if (idx >= 0) {
  const substr = t.substring(idx - 30, idx + 60);
  console.log('Context:', JSON.stringify(substr));
} else {
  // Try smart quote
  const curly = '\u2019';
  const idx2 = t.indexOf(curry + "s what");
  console.log('Smart quote index:', idx2);
  if (idx2 >= 0) {
    const substr = t.substring(idx2 - 30, idx2 + 60);
    console.log('Context:', JSON.stringify(substr));
  }
}

// Also check for all non-ASCII chars in JS string fields
let nonAscii = [];
for (let i = 0; i < t.length; i++) {
  const c = t.charCodeAt(i);
  if (c > 127 && c < 256) {
    nonAscii.push({ pos: i, char: t[i], code: c });
  }
}
console.log('\nNon-ASCII chars found:', nonAscii.length);
nonAscii.slice(0, 10).forEach(x => console.log('Pos', x.pos, JSON.stringify(x.char), 'U+' + x.code.toString(16)));
