# AI Agents Hub

A static directory website of AI agents, built with **Astro** and deployable free on **GitHub Pages**.
Zero backend, zero runtime dependencies — builds to plain HTML/CSS.

## ✨ Features

- **Static** — outputs only HTML/css, perfect for GitHub Pages
- **Fast** — Astro ships near-zero JavaScript by default
- **SEO-ready** — semantic HTML, meta tags, Open Graph, JSON-LD structured data
- **Searchable** — client-side search, no backend needed
- **Filterable** — filter by category (Coding, Research, Browsing, etc.)
- **Per-agent pages** — each agent gets its own static detail page
- **Responsive** — works on mobile and desktop

## 🚀 Local development

```bash
npm install
npm run dev      # 开发服务器 http://localhost:4321
```

## 📦 Build (生成静态文件)

```bash
npm run build    # 输出到 dist/
npm run preview  # 本地预览构建结果
```

## 🔧 How to add / edit an agent

All agents live in **one file**: [`src/data/agents.ts`](src/data/agents.ts).

To add a new agent, copy any existing entry and edit the fields:

```ts
{
  slug: 'my-agent',              // URL 用，唯一，小写带横线
  name: 'My Agent',
  tagline: 'One-line description in your own words.',
  category: 'coding',            // coding | research | browsing | automation | framework | creative
  license: 'open-source',        // open-source | commercial | freemium
  licenseName: 'MIT',            // 可选，具体协议
  selfHost: true,                // 能否自己部署
  difficulty: 2,                 // 1(very easy) ~ 5(expert)
  website: 'https://...',
  github: 'https://github.com/...',  // 可选
  stars: 12000,                  // 可选，GitHub star 数
  updated: '2026-05',            // 可选，最近更新年月
  tags: ['cli', 'refactor'],
  pricing: 'Free; bring your own API keys',
  verdict: 'Your honest one-line take.',  // 原创，这是壁垒
}
```

Save → the new page is auto-generated on the next build. No other files to touch.

## 🌐 Deploy to GitHub Pages

### One-time setup

1. Push this folder to a GitHub repository (e.g. `ai-agents-hub`).
2. In the repo, go to **Settings → Pages → Build and deployment → Source**,
   choose **GitHub Actions**.

### Edit `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://<your-username>.github.io',
  base: '/ai-agents-hub',   // 仓库名。若用 <username>.github.io 根仓库，改成 '/'
});
```

### Use the included workflow

This repo ships with `.github/workflows/deploy.yml` — push to `main` and
GitHub Actions builds + deploys automatically. Your site appears at:

```
https://<your-username>.github.io/ai-agents-hub/
```

## 🤖 Automated updates (optional, advanced)

If you want agent data (star counts, last-updated) to refresh automatically
without manual work, you can add a scheduled workflow that:

1. Reads `src/data/agents.ts`
2. Calls the GitHub API to refresh `stars` / `updated` fields
3. Commits the file and triggers a redeploy

This keeps the *existing* list fresh. Discovering *new* agents is a
curation decision — best done by hand or with review.

## 📁 Project structure

```
ai-agents-hub/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── AgentCard.astro      # 卡片组件
│   ├── data/
│   │   └── agents.ts            # ⭐ 所有 Agent 数据（改这一个文件即可）
│   ├── layouts/
│   │   └── Base.astro           # 全站布局 + SEO
│   ├── pages/
│   │   ├── index.astro          # 首页
│   │   ├── about.astro          # 关于页
│   │   ├── 404.astro            # 404
│   │   └── agent/
│   │       └── [slug].astro     # 动态详情页（每个 agent 一个）
│   ├── styles/
│   │   └── global.css           # 全局样式
│   └── utils/
│       └── labels.ts            # 文案工具函数
├── astro.config.mjs             # ⭐ Pages 部署配置
├── package.json
└── README.md
```

## ⚖️ Notes

- All agent descriptions are written independently — don't copy marketing copy verbatim.
- Trademarks belong to their owners; this is an independent directory.
