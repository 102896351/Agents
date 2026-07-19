const fs = require('fs');
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';
const blogTs = fs.readFileSync(base + '/src/data/blog.ts', 'utf8');

// Find all posts and check their dates
const slugMatches = [...blogTs.matchAll(/slug:\s*'([^']+)'/g)];
const dateMatches = [...blogTs.matchAll(/date:\s*'([^']+)'/g)];
console.log('Slugs:', slugMatches.length);
console.log('Dates:', dateMatches.length);

// Check if each slug has a corresponding date
let issues = [];
for (let i = 0; i < slugMatches.length; i++) {
  const s = slugMatches[i][1];
  const d = dateMatches[i] ? dateMatches[i][1] : 'MISSING';
  if (!dateMatches[i]) {
    issues.push(`Post ${i+1} (${s}) has NO date field!`);
  }
  console.log(`Post ${i+1}: ${s} -> date: ${d}`);
}
if (issues.length > 0) {
  console.log('\nISSUES FOUND:');
  issues.forEach(x => console.log(x));
} else {
  console.log('\nAll posts have dates');
}
