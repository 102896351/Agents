var fs = require('fs');
var path = require('path');

// Check Base.astro for ad-related code
var base = fs.readFileSync('src/layouts/Base.astro', 'utf8');
console.log('=== Base.astro ad-related ===');
var adLines = base.split('\n').filter(function(l) { return l.toLowerCase().indexOf('ads') !== -1 || l.toLowerCase().indexOf('ad ') !== -1; });
adLines.forEach(function(l) { console.log('  ' + l.trim()); });

// Check all pages for ad slots
console.log('');
console.log('=== Pages with ad-slot / adsbygoogle ===');
var srcFiles = [];
function walk(dir) {
  var files = fs.readdirSync(dir);
  files.forEach(function(f) {
    var p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.astro')) srcFiles.push(p);
  });
}
walk('src/pages');
srcFiles.forEach(function(f) {
  var c = fs.readFileSync(f, 'utf8');
  if (c.indexOf('adsbygoogle') !== -1 || c.indexOf('ad-slot') !== -1 || c.indexOf('<ins') !== -1) {
    console.log('  ' + f);
  }
});

// Check 404 content
console.log('');
console.log('=== 404 page word count ===');
var p404 = fs.readFileSync('dist/404.html', 'utf8');
var text404 = p404.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
console.log('  ' + text404.split(' ').length + ' words');
console.log('  Content: ' + text404.substring(0, 200));
