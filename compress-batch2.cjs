var sharp = require('sharp');
var path = require('path');
var fs = require('fs');
var base = 'C:/Users/dell/ZCodeProject/ai-agents-hub/public/blog';
var files = [
  'ai-video-2026-comparison.jpg',
  'ai-video-2026-hero.jpg',
  'ai-video-2026-pika.jpg',
  'ai-video-2026-runway.jpg',
  'ai-video-2026-sora.jpg',
  'ai-video-2026-thumb.jpg',
  'autonomous-coding-2026-comparison.jpg',
  'autonomous-coding-2026-devin.jpg',
  'autonomous-coding-2026-hero.jpg',
  'autonomous-coding-2026-manus.jpg',
  'autonomous-coding-2026-replit.jpg',
  'autonomous-coding-2026-thumb.jpg',
  'agent-frameworks-2026-autogen.jpg',
  'agent-frameworks-2026-comparison.jpg',
  'agent-frameworks-2026-crewai.jpg',
  'agent-frameworks-2026-hero.jpg',
  'agent-frameworks-2026-langgraph.jpg',
  'agent-frameworks-2026-thumb.jpg'
];
var done = 0;
var total = files.length;
files.forEach(function(file) {
  var input = path.join(base, file);
  if (!fs.existsSync(input)) {
    console.log('SKIP (missing): ' + file);
    done++;
    if (done === total) console.log('All done');
    return;
  }
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
      if (done === total) console.log('All done (' + total + ' files)');
    });
});
