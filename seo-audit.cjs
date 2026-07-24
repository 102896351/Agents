var fs = require('fs');
var path = require('path');

// Load key files
var home = fs.readFileSync('dist/index.html', 'utf8');
var about = fs.readFileSync('dist/about/index.html', 'utf8');
var blogIndex = fs.readFileSync('dist/blog/index.html', 'utf8');
var blogPost = fs.readFileSync('dist/blog/claude-code-vs-cursor-vs-cline-2026/index.html', 'utf8');
var agentPage = fs.readFileSync('dist/agent/claude-code/index.html', 'utf8');
var robots = fs.readFileSync('public/robots.txt', 'utf8');
var sitemap = fs.readFileSync('dist/sitemap-index.xml', 'utf8');

function check(label, ok, detail) {
  console.log('  ' + (ok ? '[OK] ' : '[!!] ') + label + (detail ? ' - ' + detail : ''));
}

console.log('=== 1. Technical SEO ===');
check('HTTPS (canonical)', home.includes('https://gonglue.xyz'),
  home.match(/<link rel="canonical" href="([^"]+)"/)?.[1] || 'NO CANONICAL');
check('robots.txt present', fs.existsSync('public/robots.txt'));
check('sitemap-index.xml present', fs.existsSync('dist/sitemap-index.xml'));
check('sitemap-0.xml present', fs.existsSync('dist/sitemap-0.xml'));
var sitemapUrls = (fs.readFileSync('dist/sitemap-0.xml','utf8').match(/<loc>/g) || []).length;
check('sitemap URLs', sitemapUrls > 50, sitemapUrls + ' URLs');
check('noindex directives', !home.includes('noindex'), 'should be indexable');
check('404 page exists', fs.existsSync('dist/404.html'));

console.log('');
console.log('=== 2. On-Page SEO ===');
check('Title tag (homepage)', /<title>[^<]+<\/title>/.test(home),
  (home.match(/<title>([^<]+)<\/title>/)?.[1] || 'none').substring(0, 60));
check('Meta description (homepage)', /<meta name="description" content="[^"]+"/.test(home));
check('H1 on homepage', (home.match(/<h1/g) || []).length === 1,
  (home.match(/<h1/g) || []).length + ' h1s (should be 1)');
check('H1 on blog post', (blogPost.match(/<h1/g) || []).length === 1);
check('Canonical link on blog', blogPost.includes('rel="canonical"'));
check('Open Graph on blog', blogPost.includes('property="og:title"'));
check('Twitter card on blog', blogPost.includes('name="twitter:card"'));

console.log('');
console.log('=== 3. Schema / Structured Data ===');
var homeJsonLd = (home.match(/application\/ld\+json/g) || []).length;
var postJsonLd = (blogPost.match(/application\/ld\+json/g) || []).length;
var agentJsonLd = (agentPage.match(/application\/ld\+json/g) || []).length;
check('Homepage JSON-LD', homeJsonLd > 0, homeJsonLd + ' blocks');
check('Blog post JSON-LD', postJsonLd > 0, postJsonLd + ' blocks');
check('Agent page JSON-LD', agentJsonLd > 0, agentJsonLd + ' blocks');
check('BlogPosting schema', blogPost.includes('"@type":"BlogPosting"'));
check('Person schema (author)', blogPost.includes('"@type":"Person"'));
check('hreflang on blog post', blogPost.includes('hreflang="en"'));
check('hreflang count', (blogPost.match(/hreflang=/g) || []).length + ' languages');

console.log('');
console.log('=== 4. Performance & Mobile ===');
var htmlSize = (home.length / 1024).toFixed(1);
check('Homepage HTML size', home.length < 100000, htmlSize + 'KB');
check('Viewport meta', home.includes('name="viewport"'));
check('Lazy loading images', blogPost.includes('loading="lazy"'));
check('Theme color', home.includes('theme-color'));

console.log('');
console.log('=== 5. Content Quality ===');
check('Long-form blog content', blogPost.length > 25000, (blogPost.length / 1024).toFixed(1) + 'KB');
check('Editorial intro on home', home.includes('AI Agents Hub is an independent editorial project'));
check('Author bio on blog', blogPost.includes('class="author-bio"'));
check('About page with team', about.includes('id="editorial-team"'));
check('Privacy policy', fs.existsSync('dist/privacy/index.html'));
check('Contact page', fs.existsSync('dist/contact/index.html'));
check('Disclaimer', fs.existsSync('dist/disclaimer/index.html'));

console.log('');
console.log('=== 6. Internal Linking ===');
var blogInternalLinks = (blogPost.match(/href="\/agent\//g) || []).length;
var blogPostLinks = (blogPost.match(/href="\/blog\//g) || []).length;
check('Internal links to agents', blogInternalLinks > 5, blogInternalLinks + ' agent links');
check('Internal links to other blog', blogPostLinks > 0, blogPostLinks + ' blog links');
check('Related posts section', blogPost.includes('class="related"'));
check('Breadcrumb / back link', blogPost.includes('class="back-link"'));

console.log('');
console.log('=== 7. Image SEO ===');
check('Images have alt text', blogPost.includes('alt="') && !blogPost.includes('alt=""'));
check('Images have width/height', blogPost.includes('width="1000"'));
check('Image format (jpg)', (blogPost.match(/\.jpg/g) || []).length > 0);
var lazyImgs = (blogPost.match(/loading="lazy"/g) || []).length;
check('Lazy-loaded images', lazyImgs > 0, lazyImgs + ' images');
var inlineImgs = (blogPost.match(/<figure>/g) || []).length;
check('Figure with figcaption', inlineImgs > 0, inlineImgs + ' figures');

console.log('');
console.log('=== 8. Crawlability ===');
check('robots.txt allows all', robots.includes('User-agent: *\nAllow: /'));
check('Sitemap in robots.txt', robots.includes('Sitemap:'));
check('No blocking meta on home', !home.includes('noindex, nofollow'));
check('404 returns proper status (assumed)', fs.existsSync('dist/404.html'));
