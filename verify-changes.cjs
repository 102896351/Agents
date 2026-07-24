var fs = require('fs');

// Homepage
var home = fs.readFileSync('dist/index.html', 'utf8');
console.log('=== HOMEPAGE ===');
console.log('  editorial intro:', home.includes('AI Agents Hub is an independent editorial project') ? 'YES' : 'NO');
console.log('  last-updated date:', home.includes('2026-07-21') ? 'YES' : 'NO');
console.log('  link to editorial team:', home.includes('href="/about#editorial-team"') ? 'YES' : 'NO');

// About
var about = fs.readFileSync('dist/about/index.html', 'utf8');
console.log('=== ABOUT ===');
console.log('  editorial-team anchor:', about.includes('id="editorial-team"') ? 'YES' : 'NO');
console.log('  Mavis bio:', about.includes('Mavis has spent the last six years') ? 'YES' : 'NO');
console.log('  editorial process:', about.includes('Editorial process') ? 'YES' : 'NO');
console.log('  corrections policy:', about.includes('Corrections policy') ? 'YES' : 'NO');
console.log('  team grid:', about.includes('team-grid') ? 'YES' : 'NO');

// Blog post
var post = fs.readFileSync('dist/blog/claude-code-vs-cursor-vs-cline-2026/index.html', 'utf8');
console.log('=== BLOG POST ===');
console.log('  author-bio section:', post.includes('class="author-bio"') ? 'YES' : 'NO');
console.log('  JSON-LD Person schema:', post.includes('"@type":"Person"') ? 'YES' : 'NO');
console.log('  author name Mavis:', post.includes('Mavis has spent the last six years') ? 'YES' : 'NO');
console.log('  link to about#editorial-team:', post.includes('/about#editorial-team') ? 'YES' : 'NO');
