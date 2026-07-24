var fs = require('fs');
// Check agent page
var agent = fs.readFileSync('dist/agent/claude-code/index.html', 'utf8');
console.log('Agent hreflang count:', (agent.match(/hreflang=/g) || []).length);
// Show all
var langs = [...new Set([...agent.matchAll(/hreflang="([^"]+)"/g)].map(function(m) { return m[1]; }))];
console.log('Agent languages:', langs.join(','));
// Check blog post
var post = fs.readFileSync('dist/blog/claude-code-vs-cursor-vs-cline-2026/index.html', 'utf8');
console.log('Post hreflang count:', (post.match(/hreflang=/g) || []).length);
var postLangs = [...new Set([...post.matchAll(/hreflang="([^"]+)"/g)].map(function(m) { return m[1]; }))];
console.log('Post languages:', postLangs.join(','));
