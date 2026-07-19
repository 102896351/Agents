const fs = require('fs');
const vm = require('vm');

// Read the blog chunk
const chunkContent = fs.readFileSync('dist/chunks/blog_CNIubj7S.mjs', 'utf8');

// Try to create a sandboxed module context
const context = { console, module: {}, exports: {} };
context.module.exports = context.exports;

// Try to require the module
try {
  const fn = new vm.Script(chunkContent, 'blog.mjs');
  const sandbox = vm.createContext({
    console: { log: (...args) => console.log('[LOG]', ...args) },
    exports: {},
    module: { exports: {} },
  });
  fn.runInContext(sandbox);
  const blogPosts = sandbox.module.exports.blogPosts;
  const getBlogSorted = sandbox.module.exports.getBlogSorted;
  
  if (getBlogSorted) {
    const posts = getBlogSorted();
    console.log('getBlogSorted() returned:', posts.length, 'posts');
    posts.forEach((p, i) => {
      if (p === undefined) console.log('UNDEFINED at index', i);
      else console.log(i + 1, p.slug, p.date);
    });
  } else {
    console.log('getBlogSorted not found in exports');
    console.log('module.exports keys:', Object.keys(sandbox.module.exports));
  }
} catch(e) {
  console.log('Error:', e.message);
}
