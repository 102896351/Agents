var sharp = require('sharp');
var path = require('path');
var fs = require('fs');
var files = [
  'build-first-ai-coding-agent-hero.jpg',
  'voice-ai-2026-stack.jpg'
];
var base = 'C:/Users/dell/ZCodeProject/ai-agents-hub/public/blog';
files.forEach(function(file) {
  var input = path.join(base, file);
  var maxW = file.includes('-thumb') ? 600 : 1200;
  sharp(input)
    .resize(maxW, null, { withoutEnlargement: true, fit: 'inside' })
    .jpeg({ quality: 80, progressive: true })
    .toFile(input + '.tmp', function(err) {
      if (err) { console.error('ERR ' + file + ': ' + err.message); return; }
      var orig = fs.statSync(input).size;
      fs.renameSync(input + '.tmp', input);
      var now = fs.statSync(input).size;
      console.log('OK ' + file + ' (' + (now/1024).toFixed(0) + 'KB)');
    });
});
