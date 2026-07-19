const fs = require('fs');

// Try to evaluate the blog chunk as a module
const chunkContent = fs.readFileSync('dist/chunks/blog_CNIubj7S.mjs', 'utf8');

// Extract the blogPosts array and getBlogSorted function
const evalCode = `
const blogPosts = ${chunkContent.match(/const blogPosts = (\[[\s\S]*?\];)/)[1]}
function getBlogSorted() {
  return [...blogPosts].sort((a, b) => a.date < b.date ? 1 : -1);
}
const posts = getBlogSorted();
console.log('Posts count:', posts.length);
posts.forEach((p, i) => {
  if (p === undefined) {
    console.log('UNDEFINED at index', i);
  } else {
    console.log(i+1, p.slug, '|', p.date);
  }
});
`;

try {
  const fn = new Function(evalCode);
  fn();
} catch(e) {
  console.log('Error:', e.message);
}
