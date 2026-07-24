var fs = require('fs');
var s = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
// Check xhtml:link
console.log('xhtml:link occurrences:', (s.match(/xhtml:link/g) || []).length);
// Check for any hreflang-like content
var lines = s.split('\n').filter(function(l) { return l.indexOf('hreflang') !== -1 || l.indexOf('xhtml:link') !== -1; });
console.log('Lines with hreflang/xhtml:link:', lines.length);
lines.slice(0, 5).forEach(function(l) { console.log('  ' + l); });
// Show full first url
var urlStart = s.indexOf('<url>');
var urlEnd = s.indexOf('</url>') + 6;
if (urlStart > -1 && urlEnd > -1) {
  console.log('---');
  console.log('First URL full:');
  console.log(s.substring(urlStart, urlEnd));
}
