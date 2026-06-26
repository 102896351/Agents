import { defineConfig } from 'astro/config';

// GitHub Pages 部署配置
// ⚠️ 绑定自定义域名后，域名走根路径，base 必须是 '/'
//    （此时原始地址 102896351.github.io/Agents 会样式错乱，属正常，用域名访问即可）
export default defineConfig({
  site: 'https://agent.gonglue.xyz',
  base: '/',
  build: {
    format: 'directory',
  },
});
