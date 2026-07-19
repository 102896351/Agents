const fs = require('fs');
const t = fs.readFileSync('dist/chunks/blog_CNIubj7S.mjs', 'utf8');

// Find all slug fields to count posts
const slugMatches = [...t.matchAll(/slug:\s+"([^"]+)"/g)];
console.log('Total slug fields:', slugMatches.length);
console.log('Slugs:');
slugMatches.forEach((m, i) => console.log(i + 1, m[1]));

// Now check: is there an extra slug or an extra array element?
// Look for the const blogPosts = pattern
const start = t.indexOf('const blogPosts = [');
const semi = t.indexOf('];', start);
const arrayContent = t.substring(start + 19, semi);
console.log('\nArray content length:', arrayContent.length);

// Count comma-separated objects
// Each post starts with "  {\n    slug:"
const postStarts = [...arrayContent.matchAll(/  \{\n    slug:/g)];
console.log('Post starts found:', postStarts.length);

// Check if there's an extra trailing comma in the array
const lastFewChars = arrayContent.slice(-50);
console.log('\nLast 50 chars of array content:');
console.log(JSON.stringify(lastFewChars));
