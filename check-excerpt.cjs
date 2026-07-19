const fs = require('fs');
const t = fs.readFileSync('src/data/blog.ts', 'utf8');

// Find the excerpt line for claude-code-2026-updates
const lines = t.split('\n');
lines.forEach((line, i) => {
  if (line.includes("Claude 2026. Artifacts")) {
    console.log('Line', i + 1, ':', JSON.stringify(line.substring(0, 150)));
    // Check each character
    for (let j = 0; j < line.length; j++) {
      const c = line.charCodeAt(j);
      if (c > 127) {
        console.log('  Non-ASCII at pos', j, ': U+' + c.toString(16), JSON.stringify(line[j]));
      }
    }
  }
});
