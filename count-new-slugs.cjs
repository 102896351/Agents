var fs = require('fs');
var c = fs.readFileSync('src/data/blog.ts', 'utf8');
var lines = c.split('\n');
var count = 0;
lines.forEach(function(l, i) {
  var m = l.match(/^\s+slug:\s/);
  if (m) {
    count++;
    console.log(count + ': line ' + (i + 1) + ' - ' + l.trim().substring(0, 60));
  }
});
console.log('Total slug entries:', count);
