var fs = require('fs');

// Check current dist for /news/
function walk(dir, results) {
  results = results || [];
  var files = fs.readdirSync(dir);
  files.forEach(function(f) {
    var p = require('path').join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, results);
    else if (f.endsWith('.html')) results.push(p);
  });
  return results;
}

var htmlFiles = walk('dist', []);
var newsFiles = htmlFiles.filter(function(f) { return f.indexOf('\\news\\') !== -1 || f.indexOf('/news/') !== -1; });
console.log('HTML files in dist:', htmlFiles.length);
console.log('News HTML files in dist:', newsFiles.length);

// Check sitemap
var sitemap = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
var newsInSitemap = (sitemap.match(/<loc>[^<]*\/news\//g) || []).length;
console.log('News URLs in sitemap:', newsInSitemap);

// Check robots.txt
var robots = fs.readFileSync('public/robots.txt', 'utf8');
console.log('robots.txt blocks /news/:', robots.indexOf('Disallow: /news/') !== -1);
