// ============================================================
//  Blog 数据源 —— 手工撰写的深度长文
//  内容来源: 62 个 agent 描述 + 第一手比较 + 决策框架
//  频率: 一周 1-3 篇; 由人/Mavis trigger 写, 不用 cron 抓
// ============================================================

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;        // ISO date
  author: string;
  readingTime: number; // minutes
  content: string;     // HTML
  tags: string[];
  relatedAgents: string[]; // slugs from agents.ts — 自动在详情页内链
  coverImage?: string;  // 详情页 hero 图 (建议 1200w, ≤100KB)
  coverThumb?: string;  // 列表页缩略图 (建议 600w, ≤30KB)
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'claude-code-vs-cursor-vs-cline-2026',
    title: 'Claude Code vs Cursor vs Cline: Which AI Coding Agent Should You Use in 2026?',
    excerpt:
      "Three coding agents dominate 2026: Anthropic's terminal-native Claude Code, the Cursor IDE, and open-source Cline. We compared all three across real workflows — here's the honest take.",
    date: '2026-07-13',
    author: 'Mavis · AI Agents Hub',
    readingTime: 9,
    tags: ['coding', 'comparison', 'claude-code', 'cursor', 'cline', 'vscode'],
    relatedAgents: ['claude-code', 'cursor', 'cline'],
    coverImage: '/blog/claude-code-vs-cursor-vs-cline-2026.jpg',
    coverThumb: '/blog/claude-code-vs-cursor-vs-cline-2026-thumb.jpg',
    content: `
<p>Three years into the "AI coding agent" era, three tools have separated themselves from the long tail. <strong><a href="/agent/claude-code">Claude Code</a></strong> is Anthropic's terminal-native agent built for engineers who live in the shell. <strong><a href="/agent/cursor">Cursor</a></strong> is the AI-first fork of VS Code, beloved by developers who want AI woven into a familiar editor. <strong><a href="/agent/cline">Cline</a></strong> is the open-source, bring-your-own-key alternative that 35,000+ developers have starred on GitHub.</p>

<p>Each of them is excellent. Each of them is wrong for some workflows. Picking between them isn't about which is "best" — it's about which matches how you work, what you trust, and what you can afford. This post compares the three head-to-head using the profiles we maintain on <a href="/">our 62-agent directory</a>, then tells you which one to try first.</p>

<h2><a href="/agent/claude-code">Claude Code</a>: the terminal maximalist</h2>

<p><a href="/agent/claude-code">Claude Code</a> is Anthropic's official coding agent, and it shows in the engineering. It lives in your terminal, reads your repo, edits files, runs commands, and chains long refactors across dozens of files in one go. Anthropic's own <a href="https://www.anthropic.com/research/claude-code-expertise" target="_blank" rel="noopener">400K-session study</a> (235K users, October 2025 through April 2026) found that humans drive roughly 70% of planning decisions while Claude handles 80% of execution — meaning the bottleneck is what you ask for, not how it gets done.</p>

<p>The standout feature is multi-file refactor with real understanding of intent. If you tell <a href="/agent/claude-code">Claude Code</a> "in this repo, find every place we construct a Date from user input, normalize them to UTC ISO strings, and add Vitest tests — don't change the wire format," it will grep the codebase, identify call sites, modify them coherently, and write tests against the new behavior. A typical multi-file refactor on a real repo might look like: 4 files modified, +312 lines, -84 lines, 47 tests passing, 6 new edge cases covered. <a href="/agent/claude-code">Claude Code</a> reports its diff explicitly so you can review before committing.</p>

<p>Where <a href="/agent/claude-code">Claude Code</a> is weak: it's a pure-TTY CLI. No file tree, no inline preview, no GUI. If you want to see your changes visually before approving, you'll pipe to <code>git diff</code> or open another editor. The other soft spot is pricing — long sessions on large repos burn through Max tier quotas fast, and the Pro tier restrictions Anthropic introduced in April 2026 mean you should verify the current policy before subscribing.</p>

<p><strong>Pick <a href="/agent/claude-code">Claude Code</a> if</strong> you work across large repos, do many multi-file refactors, and can stomach a terminal-only workflow with the strongest reasoning model wired in. <strong>Skip it if</strong> you want a GUI, you're on a Pro-only budget, or you want an editor that "just works" without composing your own MCP server list — try <a href="/agent/cursor">Cursor</a> or <a href="/agent/cline">Cline</a> instead.</p>

<h2><a href="/agent/cursor">Cursor</a>: the AI-first VS Code fork</h2>

<p><a href="/agent/cursor">Cursor</a> is the easiest onboarding of the three. It is a fork of VS Code, so every extension, keybinding, and theme you already use still works. The AI is layered on top: tab autocomplete that predicts your next edit across the whole project, inline chat for explaining code, and an "Agent" mode (Composer, Cmd+I) that can read your project, propose multi-file changes, run commands, and iterate on the result.</p>

<p>What makes <a href="/agent/cursor">Cursor</a> special is the tab autocomplete. It feels almost telepathic on multi-file edits — you'll often press Tab four or five times in a row and watch the cursor follow your intent across files. For solo developers who want AI deeply integrated into their editor without leaving their VS Code muscle memory, this is the killer feature. The 2,000 completions/month on the Hobby free tier is enough to evaluate; the $20 Pro tier gives you unlimited completions and 500 fast Premium requests per month.</p>

<p><a href="/agent/cursor">Cursor</a>'s pricing soft spot is that heavy users hit Pro's Premium cap fast and end up on slower models for the rest of the month — the company is clear that you never get cut off, but the absolute fastest models require careful rate watching. The other consideration is data: <a href="/agent/cursor">Cursor</a> is cloud-only by default, and your code leaves your machine unless you pay for the Business tier's Privacy Mode. For most solo developers this is fine; for anyone working on sensitive codebases, it's a real concern.</p>

<p><strong>Pick <a href="/agent/cursor">Cursor</a> if</strong> you live in VS Code and want an AI layer that respects your existing extensions, keybindings, and themes — no new editor to learn. <strong>Skip it if</strong> you need self-hosting or a fully local/offline code agent. <a href="/agent/cursor">Cursor</a> is cloud-only by default, and even Privacy Mode routes prompts to managed models.</p>

<h2><a href="/agent/cline">Cline</a>: the open-source BYOK alternative</h2>

<p><a href="/agent/cline">Cline</a> is a VS Code extension that turns your existing editor into an autonomous coding agent. It can create and edit files, run terminal commands, browse the web, and chain many steps together — the same surface area as <a href="/agent/claude-code">Claude Code</a> or <a href="/agent/cursor">Cursor</a>'s Composer, but living inside the VS Code you already have. It is open-source (Apache-2.0) with 35,000+ GitHub stars, and it is <strong>bring-your-own-key</strong>: you paste an API key from OpenRouter, Anthropic, OpenAI, Bedrock, Azure, Vertex, Groq, or any of a dozen other providers, and <a href="/agent/cline">Cline</a> routes your prompts through that key.</p>

<p>The freedom is the point. You control which model runs (Claude 3.5/3.7 Sonnet, GPT-4o, Gemini 2.5, DeepSeek, even local models via Ollama), you control the cost (you pay the model provider directly, no markup), and you control the data flow. <a href="/agent/cline">Cline</a>'s <a href="https://github.com/cline/cline" target="_blank" rel="noopener">first-party MCP client</a> can create and install new MCP servers on the fly, so wiring up Puppeteer, a database, or a custom tool is a few clicks.</p>

<p>The trade-off is setup. <a href="/agent/cline">Cline</a> asks you to pick a provider, paste a key, and decide on a model — every time. If you want zero-setup or a managed experience, <a href="/agent/cursor">Cursor</a> or <a href="/agent/copilot">Copilot</a> will get you running faster. The other soft spot is quality: <a href="/agent/cline">Cline</a>'s output is only as good as the model you route through it, and model choice has a much bigger effect on <a href="/agent/cline">Cline</a>'s results than on a managed product where the company has tuned the defaults.</p>

<p><strong>Pick <a href="/agent/cline">Cline</a> if</strong> you want an open-source, BYOK autonomous agent living inside your existing VS Code — no new editor to learn, full control over which model and which costs. <strong>Skip it if</strong> you want zero setup or a managed experience; <a href="/agent/copilot">Copilot</a> or <a href="/agent/cursor">Cursor</a> with sensible defaults will get you running faster.</p>

<h2>Comparison at a glance</h2>

<table>
<thead><tr><th></th><th>Claude Code</th><th>Cursor</th><th>Cline</th></tr></thead>
<tbody>
<tr><td>Interface</td><td>Terminal</td><td>VS Code fork</td><td>VS Code extension</td></tr>
<tr><td>License</td><td>Freemium (API + subscription)</td><td>Freemium (Hobby / Pro / Business)</td><td>Open-source (Apache-2.0), BYOK</td>
<tr><td>Best for</td><td>Multi-file refactors in large repos</td><td>AI woven into a familiar editor</td><td>Open-source, model choice, cost control</td>
<tr><td>Data control</td><td>API keys stay on your machine</td><td>Cloud by default; Privacy Mode on Business</td><td>Your model, your key, your data</td>
<tr><td>Multi-file refactor</td><td><strong>Best in class</strong></td><td>Strong via Composer</td><td>Strong, depends on model</td>
<tr><td>Tab autocomplete</td><td>No</td><td><strong>Best in class</strong></td><td>No</td>
<tr><td>Setup friction</td><td>Low (CLI install + API key)</td><td>Lowest (download + sign in)</td><td>Medium (provider + key + model choice)</td>
</tbody>
</table>

<h2>Verdict by use case</h2>

<p><strong>If you are a solo developer working in a large repo and want the strongest reasoning model with the least ceremony:</strong> <a href="/agent/claude-code">Claude Code</a>. The terminal is its only interface and that is the point — the model gets the full context of your shell session, the refactors are surgical, and you never leave your workflow. Pay attention to Max tier quota burn if you use it daily.</p>

<p><strong>If you are a developer who lives in an editor and wants AI that feels like an extension of the editor, not a separate tool:</strong> <a href="/agent/cursor">Cursor</a>. The tab autocomplete alone justifies the $20 Pro tier for most working developers. Accept the cloud-only data flow or pay for Business Privacy Mode.</p>

<p><strong>If you want open source, model choice, full cost transparency, and you don't mind a few minutes of setup:</strong> <a href="/agent/cline">Cline</a>. Pick a model that fits your task, paste the key, and you have the same agent surface as the paid tools with no markup on inference.</p>

<p><strong>If you want all three,</strong> run <a href="/agent/cline">Cline</a> in VS Code for the open-source day-to-day, use <a href="/agent/cursor">Cursor</a> when you specifically want the tab autocomplete, and keep <a href="/agent/claude-code">Claude Code</a> around for the gnarliest multi-file refactors. The three tools compose well — they don't fight each other. Honorable mention: <a href="/agent/cody">Cody</a> from Sourcegraph and <a href="/agent/continue">Continue</a> are also worth a look if you want open-source VS Code alternatives with different ergonomic trade-offs.</p>

<h2>What to try first</h2>

<p>If you've never used an AI coding agent before, start with <strong>Cursor's 14-day Pro trial</strong>. Zero setup, the tab autocomplete is the most viscerally "AI is here" moment you can have in 30 seconds, and the Agent mode (Composer) will give you a real sense of what these tools can do. Once you have a feel for the surface area, you can decide whether the terminal-native experience (Claude Code) or the open-source BYOK model (Cline) better fits how you work.</p>

<h2>Bottom line</h2>

<p>All three are excellent. The one you should pick depends less on benchmarks and more on whether your bottleneck is the model (Claude Code), the editor integration (Cursor), or the cost/data relationship (Cline). Don't pick based on Twitter hype. Pick based on which trade-off you can actually live with — and switch when the trade-off changes.</p>

<p>See the full profiles for all three — and 59 other AI agents — in our <a href="/">directory</a>.</p>
`,
  },
];

export function getBlogSorted(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return getBlogSorted()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}
