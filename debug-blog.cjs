const fs = require('fs');
const vm = require('vm');

// Try to evaluate the blog.ts as a module
const base = 'C:/Users/dell/ZCodeProject/ai-agents-hub';
const blogTs = fs.readFileSync(base + '/src/data/blog.ts', 'utf-8');

// Find the blogPosts array definition
const startMatch = blogTs.match(/^export const blogPosts: BlogPost\[\] = \[/m);
const endMatch = blogTs.match(/^\];\s*\n\nexport function getBlogSorted/m);

if (!startMatch || !endMatch) {
  console.log('Could not find array boundaries');
  console.log('startMatch:', startMatch);
  console.log('endMatch:', endMatch ? 'found' : 'NOT FOUND');
} else {
  const startIdx = startMatch.index + startMatch[0].length;
  const endIdx = endMatch.index;
  console.log('Array content length:', endIdx - startIdx);
  
  // Extract and check
  const arrayContent = blogTs.substring(startIdx, endIdx);
  const postCount = (arrayContent.match(/^\s*\{/gm) || []).length;
  console.log('Post count from braces:', postCount);
  
  // Check for problematic patterns
  const issues = [];
  
  // Check for unescaped backticks in template literals
  const backtickCount = (arrayContent.match(/`/g) || []).length;
  console.log('Backtick count:', backtickCount);
  
  // Check for missing closing braces
  const openBraces = (arrayContent.match(/\{/g) || []).length;
  const closeBraces = (arrayContent.match(/\}/g) || []).length;
  console.log('Braces open/close:', openBraces, '/', closeBraces);
  
  // Check for trailing comma on last post
  const lastFew = arrayContent.slice(-200);
  console.log('\nLast 200 chars of array:');
  console.log(lastFew);
}
