var fs = require('fs');

// Verify 404 page no longer has AdSense but has content
var p404 = fs.readFileSync('dist/404.html', 'utf8');
console.log('=== 404 page ===');
console.log('  Has AdSense script:', p404.includes('pagead2.googlesyndication.com') ? 'YES (BAD)' : 'NO (GOOD)');
console.log('  Has GA4 script:', p404.includes('googletagmanager.com') ? 'YES' : 'NO');
var text404 = p404.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
console.log('  Word count:', text404.split(' ').length);
console.log('  Has featured agents:', p404.includes('Featured') || p404.includes('card-name') ? 'YES' : 'NO');
console.log('  Has blog links:', p404.includes('blog/') ? 'YES' : 'NO');
console.log('  Has nav links:', p404.includes('href="/about"') ? 'YES' : 'NO');

// Verify normal pages still have AdSense
var home = fs.readFileSync('dist/index.html', 'utf8');
console.log('');
console.log('=== Homepage ===');
console.log('  Has AdSense script:', home.includes('pagead2.googlesyndication.com') ? 'YES (GOOD)' : 'NO (BAD)');
console.log('  Word count:', home.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length);
