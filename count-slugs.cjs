var fs = require('fs');
var c = fs.readFileSync('dist/chunks/blog_CNIubj7S.mjs', 'utf8');
// Find getBlogSorted
var gsIdx = c.indexOf('getBlogSorted');
if (gsIdx > -1) {
  console.log('getBlogSorted function:');
  console.log(c.substring(gsIdx, gsIdx + 500));
}
// Find the export
var expIdx = c.indexOf('export');
if (expIdx > -1) {
  console.log('\nExports:');
  console.log(c.substring(expIdx, expIdx + 300));
}
// Look for the blog array boundary
var arrMatch = c.match(/blogPosts = \[([\s\S]*?)\]\s*;/);
if (arrMatch) {
  var inner = arrMatch[1];
  // Count objects
  var objs = inner.match(/\{[\s\S]*?\}/g);
  console.log('\nObject count in blogPosts:', objs ? objs.length : 0);
  // Check for empty objects
  if (objs) {
    objs.forEach(function(o, i) {
      if (o === '{}') console.log('  Empty object at index', i);
    });
  }
}
