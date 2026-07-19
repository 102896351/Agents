const fs = require('fs');
const t = fs.readFileSync('src/data/blog.ts', 'utf8');

// Find all posts and check each field
const postMatches = [...t.matchAll(/^\s+slug:\s*'([^']+)'\s*,\s*\n\s+title:\s*"([^"]+)"/gm)];
console.log('Total posts found:', postMatches.length);

postMatches.forEach((m, i) => {
  const slug = m[1];
  const title = m[2];
  console.log(`Post ${i+1}: slug="${slug}", title="${title.substring(0, 40)}..."`);
});

// Now find where each post ends (look for the closing }, before the next slug:)
const nextSlugMatches = [...t.matchAll(/\},\n\s*\n\s+slug:\s*'([^']+)'/g)];
console.log('\nPost boundaries found:', nextSlugMatches.length);

// Check for posts that don't have proper closing
// Look for any posts that end with `,\n  }` followed by `];` (last post)
// vs `},\n  }` followed by `,\n  {` (middle posts)
