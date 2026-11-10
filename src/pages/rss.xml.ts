// Static RSS 2.0 feed. Written by hand instead of pulling in @astrojs/rss so
// the build keeps its current dependency set (CI runs plain `npm install`).
// Astro prerenders this endpoint to /rss.xml at build time.
import type { APIRoute } from 'astro';
import { getBlogSorted } from '../data/blog';

const esc = (s: string) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export const GET: APIRoute = ({ site }) => {
  const root = (site ?? new URL('https://gonglue.xyz')).toString().replace(/\/$/, '');
  const posts = getBlogSorted().slice(0, 30);

  const items = posts
    .map((p) => {
      const url = `${root}/blog/${p.slug}/`;
      const pubDate = new Date(`${p.date}T00:00:00Z`).toUTCString();
      return `
    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${esc(p.excerpt)}</description>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Agents Hub — comparison guides</title>
    <link>${root}/</link>
    <description>Comparison guides and agent profiles from an independent, open-source AI agent directory.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${root}/rss.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
