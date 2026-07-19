const fs = require('fs');
const t = fs.readFileSync('dist/chunks/blog_CNIubj7S.mjs', 'utf8');
const lines = t.split('\n');
const arrayEndLine = lines.findIndex((l, i) => i > 800 && l.trim() === '];');
console.log('Array ends at line:', arrayEndLine + 1);
console.log('Lines around end:');
for (let i = Math.max(0, arrayEndLine - 5); i <= arrayEndLine + 5; i++) {
  console.log('Line', i + 1, ':', JSON.stringify(lines[i]).substring(0, 100));
}

// Now extract and evaluate the blogPosts array
const constMatch = t.match(/const blogPosts = (\[[\s\S]*?\];)/);
if (constMatch) {
  const arrayStr = constMatch[1];
  console.log('\nArray literal length:', arrayStr.length, 'chars');
  // Count objects
  const objCount = (arrayStr.match(/\{/g) || []).length;
  console.log('Object count:', objCount);
  
  // Try evaluating
  try {
    const posts = eval('(' + arrayStr + ')');
    console.log('Evaluated posts count:', posts.length);
    posts.forEach((p, i) => {
      if (p === undefined) console.log('UNDEFINED at index', i);
      else console.log(i + 1, p.slug);
    });
  } catch(e) {
    console.log('Eval error:', e.message);
  }
}
