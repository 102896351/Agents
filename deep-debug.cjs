const fs = require('fs');

// Read the blog chunk
const t = fs.readFileSync('dist/chunks/blog_CNIubj7S.mjs', 'utf8');

// Extract the blogPosts array by tracking brace depth
const startIdx = t.indexOf('const blogPosts = [') + 19;
let depth = 0;
let endIdx = startIdx;

for (let i = startIdx; i < t.length; i++) {
  if (t[i] === '[') depth++;
  else if (t[i] === ']') {
    depth--;
    if (depth === 0) { endIdx = i; break; }
  }
}

const arrayStr = t.substring(startIdx, endIdx + 1);
console.log('Array string length:', arrayStr.length);

// Count objects
let objDepth = 0;
let objects = [];
let currentObj = '';
let braceStart = -1;

for (let i = 0; i < arrayStr.length; i++) {
  const c = arrayStr[i];
  if (c === '{') {
    if (braceStart === -1) braceStart = i;
    objDepth++;
    currentObj += c;
  } else if (c === '}') {
    objDepth--;
    currentObj += c;
    if (objDepth === 0) {
      objects.push(currentObj);
      currentObj = '';
      braceStart = -1;
    }
  } else if (braceStart !== -1) {
    currentObj += c;
  }
}

console.log('Objects found:', objects.length);
objects.forEach((obj, i) => {
  const slugMatch = obj.match(/slug:\s*"([^"]+)"/);
  console.log(`Object ${i+1}: slug=${slugMatch ? slugMatch[1] : 'NO SLUG'}`);
});

// Check for trailing undefined
const trailing = arrayStr.slice(-20);
console.log('\nLast 20 chars of array:', JSON.stringify(trailing));
