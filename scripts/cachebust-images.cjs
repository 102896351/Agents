// scripts/cachebust-images.cjs
//
// Append ?v=2 (or any version) to local /news/... imageUrl values in
//   src/data/news.ts        (auto-generated list)
//   src/data/news-seeds.ts  (manually maintained seeds)
// so Cloudflare's edge cache serves the freshly-deployed image files
// instead of older (potentially broken/placeholder) versions.
//
// Usage:
//   node scripts/cachebust-images.cjs            # append ?v=2 to all
//   node scripts/cachebust-images.cjs --v=3      # bump to ?v=3 etc.
//
// Safety:
//   - Skips URLs that already have a ?v=... query param
//   - Leaves non-/news/ URLs untouched (external fallbacks)
//   - Idempotent: running twice with same --v is a no-op
//   - Only matches lines inside the data files (no global replace surprises)

const fs = require('fs');
const path = require('path');

const versionArg = process.argv.find((a) => a.startsWith('--v='));
const VERSION = versionArg ? versionArg.slice(4) : '2';

const TARGETS = [
  path.join(__dirname, '..', 'src', 'data', 'news.ts'),
  path.join(__dirname, '..', 'src', 'data', 'news-seeds.ts'),
];

// Match: imageUrl: '/news/anything.jpg'(no ?v= yet)
// Capture group 1 = path+ext, group 2 = closing quote
const RE = /(imageUrl:\s*'(\/news\/[^']+?))(\?v=[^']*)?'/g;

let totalChanged = 0;
let totalSkipped = 0;

for (const file of TARGETS) {
  if (!fs.existsSync(file)) {
    console.log(`skip: ${file} (not found)`);
    continue;
  }
  const original = fs.readFileSync(file, 'utf8');
  let changed = 0;
  let skipped = 0;

  const next = original.replace(RE, (match, prefix /* , _hadV, _quote */) => {
    changed++;
    return `${prefix}?v=${VERSION}'`;
  });

  if (changed === 0) {
    console.log(`no match: ${path.relative(process.cwd(), file)} (already at ?v=${VERSION} or no /news/ urls)`);
    continue;
  }

  // Count how many imageUrl entries we actually saw
  const matches = original.match(/imageUrl:\s*'(\/news\/[^']+)'/g) || [];
  skipped = matches.length - changed;

  fs.writeFileSync(file, next, 'utf8');
  console.log(
    `ok:   ${path.relative(process.cwd(), file)}  ` +
      `(${changed} updated${skipped ? `, ${skipped} already had ?v=` : ''}) -> ?v=${VERSION}`
  );
  totalChanged += changed;
  totalSkipped += skipped;
}

console.log(`\n=== Total: ${totalChanged} updated, ${totalSkipped} already had ?v= ===`);