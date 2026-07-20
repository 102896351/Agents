var sharp = require('sharp');
var path = require('path');
var fs = require('fs');

var base = 'C:/Users/dell/ZCodeProject/ai-agents-hub/public/blog';
var files = [
  'voice-ai-2026-comparison.jpg',
  'voice-ai-2026-elevenlabs.jpg',
  'voice-ai-2026-hero.jpg',
  'voice-ai-2026-retell.jpg',
  'voice-ai-2026-thumb.jpg',
  'voice-ai-2026-vapi.jpg',
  'windsurf-vs-cursor-vs-cline-2026-cline.jpg',
  'windsurf-vs-cursor-vs-cline-2026-comparison.jpg',
  'windsurf-vs-cursor-vs-cline-2026-cursor.jpg',
  'windsurf-vs-cursor-vs-cline-2026-hero.jpg',
  'windsurf-vs-cursor-vs-cline-2026-thumb.jpg',
  'windsurf-vs-cursor-vs-cline-2026-windsurf.jpg',
  'ai-productivity-tools-2026-comparison.jpg',
  'ai-productivity-tools-2026-grammarly.jpg',
  'ai-productivity-tools-2026-hero.jpg',
  'ai-productivity-tools-2026-meetings.jpg',
  'ai-productivity-tools-2026-notion.jpg',
  'ai-productivity-tools-2026-thumb.jpg',
];

var isThumb = function(f) { return f.includes('-thumb'); };
var maxW = function(f) { return isThumb(f) ? 600 : 1200; };

var total = files.length;
var done = 0;

files.forEach(function(file) {
  var input = path.join(base, file);
  var w = maxW(file);
  sharp(input)
    .resize(w, null, { withoutEnlargement: true, fit: 'inside' })
    .jpeg({ quality: 80, progressive: true })
    .toFile(input + '.tmp', function(err) {
      if (err) {
        console.error('ERROR ' + file + ': ' + err.message);
      } else {
        var origSize = fs.statSync(input).size;
        fs.renameSync(input + '.tmp', input);
        var newSize = fs.statSync(input).size;
        var pct = ((origSize - newSize) / origSize * 100).toFixed(1);
        console.log('OK ' + file + ' (' + (newSize / 1024).toFixed(0) + 'KB, saved ' + pct + '%)');
      }
      done++;
      if (done === total) console.log('All done');
    });
});
