var fs = require('fs');
var c = fs.readFileSync('src/data/blog.ts', 'utf8');
var base = 'public/blog';
var blogFiles = fs.readdirSync(base);

// Extract all /blog/...jpg references
var refs = [...c.matchAll(/\/blog\/([a-z0-9_-]+\.jpg)/g)].map(function(m) { return m[1]; });
var uniqueRefs = [...new Set(refs)];

console.log('Total image references in posts:', refs.length);
console.log('Unique references:', uniqueRefs.length);
console.log('');
uniqueRefs.forEach(function(f) {
  var exists = blogFiles.includes(f);
  console.log((exists ? 'OK ' : 'MISSING ') + f);
});

console.log('');
console.log('Total files in public/blog:', blogFiles.length);
