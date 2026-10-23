#!/usr/bin/env node
/**
 * 校验 public/ 下的图片是合法二进制（未被文本化损坏）。
 * 背景：历史上 jpg 曾被以文本方式读写，JPEG 头 FFD8 被替换成 EF BF BD，
 * 线上所有博客图片变成白块。本脚本在 CI 中充当守卫。
 * 用法：node scripts/check-image-binary.cjs [dir]
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const target = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(root, 'public');

const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (EXT.has(path.extname(e.name).toLowerCase())) out.push(p);
  }
  return out;
}

function isValidImage(buf, ext) {
  if (ext === '.png') return buf.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  if (ext === '.gif') return buf.slice(0, 3).toString('latin1') === 'GIF';
  if (ext === '.webp') return buf.slice(0, 4).toString('latin1') === 'RIFF' && buf.slice(8, 12).toString('latin1') === 'WEBP';
  // jpeg / jpeg 变体
  return buf[0] === 0xff && buf[1] === 0xd8;
}

const files = walk(target);
const bad = [];

for (const f of files) {
  const buf = fs.readFileSync(f);
  const ext = path.extname(f).toLowerCase();
  if (!isValidImage(buf, ext)) {
    bad.push({ file: path.relative(root, f), head: buf.slice(0, 6).toString('hex') });
  }
}

console.log(`checked ${files.length} image(s) under ${path.relative(root, target)}`);
if (bad.length) {
  console.error(`\n::error::${bad.length} image(s) are corrupted (not valid binary headers):`);
  for (const b of bad) console.error(`  ${b.file}  head=${b.head}`);
  process.exit(1);
}
console.log('all images have valid binary headers');
