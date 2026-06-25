import { defineConfig } from 'astro/config';

// GitHub Pages 部署配置
// 1) site 改成你的最终访问地址（username.github.io 或自定义域名）
// 2) base：仓库名。项目仓库就是 '/仓库名'；username.github.io 根仓库就改成 '/'
export default defineConfig({
  site: 'https://102896351.github.io',
  base: '/Agents',
  build: {
    format: 'directory',
  },
});
