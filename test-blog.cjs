const fs = require('fs');
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';
const blogTs = fs.readFileSync(base + '/src/data/blog.ts', 'utf-8');

// Count posts
const postCount = (blogTs.match(/^\s+slug:/gm) || []).length;
console.log('Total posts with slug:', postCount);

// Check each post for slug field
const slugMatches = [...blogTs.matchAll(/^\s+slug:\s*'([^']+)'/gm)];
console.log('\nPosts:');
slugMatches.forEach((m, i) => {
  console.log(i + 1, m[1]);
});

// Check for malformed entries (look for undefined)
if (blogTs.includes('undefined')) {
  console.log('\nWARNING: Contains "undefined"');
}
