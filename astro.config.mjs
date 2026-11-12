import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages 部署配置
// ⚠️ 绑定自定义域名后，域名走根路径，base 必须是 '/'
//    （此时原始地址 102896351.github.io/Agents 会样式错乱，属正常，用域名访问即可）
export default defineConfig({
  site: 'https://gonglue.xyz',
  base: '/',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Google Search Central：sitemap 只是「提示」，不保证抓取或收录；
      // 官方会忽略 priority / changefreq；lastmod 只有在持续准确时才有用。
      // 之前把全站 lastmod 统一写成构建时刻，等于所有 URL 都「刚刚改过」，
      // 属于刷 lastmod，Google 发现日期不可信可能整份忽略 —— 因此一律不写。
      // 只放规范、可索引、返回 200 的 URL；排除 404 与 RSS（订阅源，非着陆页）。
      filter: (page) => !page.includes('/404') && !page.includes('/rss.xml'),
    }),
  ],
});
