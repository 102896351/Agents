const fs = require('fs');
const t = fs.readFileSync('src/data/blog.ts', 'utf8');
const lines = t.split('\n');

// Find the Here's line
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("Here's what actually")) {
    const line = lines[i];
    console.log('Line', i + 1, ':', line.substring(0, 150));
    // Check the character before 's' in Here's
    const pos = line.indexOf("Here's");
    if (pos >= 0) {
      const charBefore = line[pos - 1];
      const charAt = line[pos];
      console.log("'Here's' at pos", pos, '- char before:', JSON.stringify(charBefore), '- char at:', JSON.stringify(charAt), '- char code:', charBefore.charCodeAt(0).toString(16));
    }
  }
}

// Check ALL non-ASCII chars in the entire file
let nonAsciiCount = 0;
let nonAsciiChars = new Set();
for (let i = 0; i < t.length; i++) {
  const c = t.charCodeAt(i);
  if (c > 127) {
    nonAsciiCount++;
    nonAsciiChars.add(c);
  }
}
console.log('\nTotal non-ASCII chars:', nonAsciiCount);
console.log('Unique non-ASCII codes:', [...nonAsciiChars].map(x => 'U+' + x.toString(16)).join(', '));
