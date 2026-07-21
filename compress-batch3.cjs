var sharp = require('sharp');
var path = require('path');
var fs = require('fs');
var base = 'C:/Users/dell/ZCodeProject/ai-agents-hub/public/blog';
var files = [
  'ai-music-2026-comparison.jpg',
  'ai-music-2026-hero.jpg',
  'ai-music-2026-suno.jpg',
  'ai-music-2026-thumb.jpg',
  'ai-music-2026-udio.jpg',
  'ai-avatar-2026-comparison.jpg',
  'ai-avatar-2026-hero.jpg',
  'ai-avatar-2026-heygen.jpg',
  'ai-avatar-2026-synthesia.jpg',
  'ai-avatar-2026-thumb.jpg',
  'ai-customer-service-2026-comparison.jpg',
  'ai-customer-service-2026-decagon.jpg',
  'ai-customer-service-2026-hero.jpg',
  'ai-customer-service-2026-sierra.jpg',
  'ai-customer-service-2026-thumb.jpg'
];
var done = 0;
var total = files.length;
files.forEach(function(file) {
  var input = path.join(base, file);
  if (!fs.existsSync(input)) { console.log('SKIP: ' + file); done++; return; }
  var maxW = file.includes('-thumb') ? 600 : 1200;
  sharp(input)
    .resize(maxW, null, { withoutEnlargement: true, fit: 'inside' })
    .jpeg({ quality: 80, progressive: true })
    .toFile(input + '.tmp', function(err) {
      if (err) { console.error('ERR ' + file + ': ' + err.message); done++; return; }
      var orig = fs.statSync(input).size;
      fs.renameSync(input + '.tmp', input);
      var now = fs.statSync(input).size;
      console.log('OK ' + file + ' (' + (now/1024).toFixed(0) + 'KB)');
      done++;
      if (done === total) console.log('All done (' + total + ')');
    });
});
