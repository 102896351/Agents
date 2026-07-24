var fs = require('fs');
var pages = ['index.html','about/index.html','blog/index.html','blog/claude-code-vs-cursor-vs-cline-2026/index.html','agent/claude-code/index.html'];
pages.forEach(function(f) {
  var p = fs.readFileSync('dist/' + f, 'utf8');
  var langs = [...new Set([...p.matchAll(/hreflang="([^"]+)"/g)].map(function(m) { return m[1]; }))];
  console.log(f + ': ' + (langs.length ? langs.join(',') : 'NONE'));
});
