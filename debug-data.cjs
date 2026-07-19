const fs = require('fs');

// Read the blog.ts file
const t = fs.readFileSync('src/data/blog.ts', 'utf8');

// Extract each post by finding slug/date/title triplets
const slugMatches = [...t.matchAll(/^\s+slug:\s*'([^']+)'\s*,\s*\n\s+title:\s*"([^"]+)"/gm)];
console.log('Posts found:', slugMatches.length);
slugMatches.forEach((m, i) => {
  console.log(i + 1, m[1], '|', m[2].substring(0, 40));
});

// Check for template literal issues
// Look for any line that starts with content: but doesn't end properly
const contentLines = t.split('\n');
let inContent = false;
let issues = [];
contentLines.forEach((line, i) => {
  if (line.trim().startsWith('content: `')) {
    inContent = true;
  }
  if (inContent && line.trim() === '`,' || line.trim() === '`,') {
    inContent = false;
  }
  if (inContent && line.includes('`') && !line.trim().startsWith('`')) {
    issues.push(`Line ${i+1}: ${line.trim().substring(0, 80)}`);
  }
});
if (issues.length > 0) {
  console.log('\nBacktick issues:');
  issues.forEach(x => console.log(x));
} else {
  console.log('\nNo backtick issues found');
}

// Check for template literal substitution patterns
const subPatterns = t.match(/content: `[^`]*\$\{[^}]+\}[^`]*`/g);
if (subPatterns) {
  console.log('\nTemplate substitutions found in content:');
  subPatterns.forEach(x => console.log(x.substring(0, 100)));
} else {
  console.log('\nNo template substitutions in content');
}
