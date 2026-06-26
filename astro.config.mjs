import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages 部署配置
// ⚠️ 绑定自定义域名后，域名走根路径，base 必须是 '/'
//    （此时原始地址 102896351.github.io/Agents 会样式错乱，属正常，用域名访问即可）
export default defineConfig({
  site: 'https://agent.gonglue.xyz',
  base: '/',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // 把所有静态页面（首页、4 个信息页、28 个 agent 详情页）都加入 sitemap
      // changefreq / priority 让 Google 知道哪些页面更新更频繁
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // 排除 404 页面（如果有的话）
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
