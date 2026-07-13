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
    coverThumb: '/blog/claude-code-vs-cursor-vs-cline-2026-thumb.jpg',
    content: `
<p>Three years into the "AI coding agent" era, three tools have separated themselves from the long tail. <strong><a href="/agent/claude-code">Claude Code</a></strong> is Anthropic's terminal-native agent built for engineers who live in the shell. <strong><a href="/agent/cursor">Cursor</a></strong> is the AI-first fork of VS Code, beloved by developers who want AI woven into a familiar editor. <strong><a href="/agent/cline">Cline</a></strong> is the open-source, bring-your-own-key alternative that 35,000+ developers have starred on GitHub.</p>

<p>Each of them is excellent. Each of them is wrong for some workflows. Picking between them isn't about which is "best" — it's about which matches how you work, what you trust, and what you can afford. This post compares the three head-to-head using the profiles we maintain on <a href="/">our 62-agent directory</a>, then tells you which one to try first.</p>

<h2><a href="/agent/claude-code">Claude Code</a>: the terminal maximalist</h2>

<p><a href="/agent/claude-code">Claude Code</a> is Anthropic's official coding agent, and it shows in the engineering. It lives in your terminal, reads your repo, edits files, runs commands, and chains long refactors across dozens of files in one go. Anthropic's own <a href="https://www.anthropic.com/research/claude-code-expertise" target="_blank" rel="noopener">400K-session study</a> (235K users, October 2025 through April 2026) found that humans drive roughly 70% of planning decisions while Claude handles 80% of execution — meaning the bottleneck is what you ask for, not how it gets done.</p>

<p>The standout feature is multi-file refactor with real understanding of intent. If you tell <a href="/agent/claude-code">Claude Code</a> "in this repo, find every place we construct a Date from user input, normalize them to UTC ISO strings, and add Vitest tests — don't change the wire format," it will grep the codebase, identify call sites, modify them coherently, and write tests against the new behavior. A typical multi-file refactor on a real repo might look like: 4 files modified, +312 lines, -84 lines, 47 tests passing, 6 new edge cases covered. <a href="/agent/claude-code">Claude Code</a> reports its diff explicitly so you can review before committing.</p>

<p>Where <a href="/agent/claude-code">Claude Code</a> is weak: it's a pure-TTY CLI. No file tree, no inline preview, no GUI. If you want to see your changes visually before approving, you'll pipe to <code>git diff</code> or open another editor. The other soft spot is pricing — long sessions on large repos burn through Max tier quotas fast, and the Pro tier restrictions Anthropic introduced in April 2026 mean you should verify the current policy before subscribing.</p>

<figure>
  <img src="/blog/claude-code-vs-cursor-vs-cline-2026-diff.jpg" alt="A multi-file code diff in a terminal showing file paths, line numbers, and inline additions and removals" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Claude Code reports its diff inline so you can review every change before committing — the terminal-only constraint is also a feature.</figcaption>
</figure>

<p><strong>Pick <a href="/agent/claude-code">Claude Code</a> if</strong> you work across large repos, do many multi-file refactors, and can stomach a terminal-only workflow with the strongest reasoning model wired in. <strong>Skip it if</strong> you want a GUI, you're on a Pro-only budget, or you want an editor that "just works" without composing your own MCP server list — try <a href="/agent/cursor">Cursor</a> or <a href="/agent/cline">Cline</a> instead.</p>

<h2><a href="/agent/cursor">Cursor</a>: the AI-first VS Code fork</h2>

<p><a href="/agent/cursor">Cursor</a> is the easiest onboarding of the three. It is a fork of VS Code, so every extension, keybinding, and theme you already use still works. The AI is layered on top: tab autocomplete that predicts your next edit across the whole project, inline chat for explaining code, and an "Agent" mode (Composer, Cmd+I) that can read your project, propose multi-file changes, run commands, and iterate on the result.</p>

<p>What makes <a href="/agent/cursor">Cursor</a> special is the tab autocomplete. It feels almost telepathic on multi-file edits — you'll often press Tab four or five times in a row and watch the cursor follow your intent across files. For solo developers who want AI deeply integrated into their editor without leaving their VS Code muscle memory, this is the killer feature. The 2,000 completions/month on the Hobby free tier is enough to evaluate; the $20 Pro tier gives you unlimited completions and 500 fast Premium requests per month.</p>

<p><a href="/agent/cursor">Cursor</a>'s pricing soft spot is that heavy users hit Pro's Premium cap fast and end up on slower models for the rest of the month — the company is clear that you never get cut off, but the absolute fastest models require careful rate watching. The other consideration is data: <a href="/agent/cursor">Cursor</a> is cloud-only by default, and your code leaves your machine unless you pay for the Business tier's Privacy Mode. For most solo developers this is fine; for anyone working on sensitive codebases, it's a real concern.</p>

<p><strong>Pick <a href="/agent/cursor">Cursor</a> if</strong> you live in VS Code and want an AI layer that respects your existing extensions, keybindings, and themes — no new editor to learn. <strong>Skip it if</strong> you need self-hosting or a fully local/offline code agent. <a href="/agent/cursor">Cursor</a> is cloud-only by default, and even Privacy Mode routes prompts to managed models.</p>

<h2><a href="/agent/cline">Cline</a>: the open-source BYOK alternative</h2>

<p><a href="/agent/cline">Cline</a> is a VS Code extension that turns your existing editor into an autonomous coding agent. It can create and edit files, run terminal commands, browse the web, and chain many steps together — the same surface area as <a href="/agent/claude-code">Claude Code</a> or <a href="/agent/cursor">Cursor</a>'s Composer, but living inside the VS Code you already have. It is open-source (Apache-2.0) with 35,000+ GitHub stars, and it is <strong>bring-your-own-key</strong>: you paste an API key from OpenRouter, Anthropic, OpenAI, Bedrock, Azure, Vertex, Groq, or any of a dozen other providers, and <a href="/agent/cline">Cline</a> routes your prompts through that key.</p>

<figure>
  <img src="/blog/claude-code-vs-cursor-vs-cline-2026-editor.jpg" alt="A VS Code editor with Python code on the left and an AI assistant chat panel on the right showing code suggestions and a friendly robot icon" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Cline lives as a chat panel in the VS Code sidebar — same editor you already use, agent on the side.</figcaption>
</figure>

<p>The freedom is the point. You control which model runs (Claude 3.5/3.7 Sonnet, GPT-4o, Gemini 2.5, DeepSeek, even local models via Ollama), you control the cost (you pay the model provider directly, no markup), and you control the data flow. <a href="/agent/cline">Cline</a>'s <a href="https://github.com/cline/cline" target="_blank" rel="noopener">first-party MCP client</a> can create and install new MCP servers on the fly, so wiring up Puppeteer, a database, or a custom tool is a few clicks.</p>

<p>The trade-off is setup. <a href="/agent/cline">Cline</a> asks you to pick a provider, paste a key, and decide on a model — every time. If you want zero-setup or a managed experience, <a href="/agent/cursor">Cursor</a> or <a href="/agent/copilot">Copilot</a> will get you running faster. The other soft spot is quality: <a href="/agent/cline">Cline</a>'s output is only as good as the model you route through it, and model choice has a much bigger effect on <a href="/agent/cline">Cline</a>'s results than on a managed product where the company has tuned the defaults.</p>

<p><strong>Pick <a href="/agent/cline">Cline</a> if</strong> you want an open-source, BYOK autonomous agent living inside your existing VS Code — no new editor to learn, full control over which model and which costs. <strong>Skip it if</strong> you want zero setup or a managed experience; <a href="/agent/copilot">Copilot</a> or <a href="/agent/cursor">Cursor</a> with sensible defaults will get you running faster.</p>

<h2>Comparison at a glance</h2>

<figure>
  <img src="/blog/claude-code-vs-cursor-vs-cline-2026-comparison.jpg" alt="Side-by-side comparison of Claude Code, Cursor, and Cline showing their key features, interface, and pricing" width="1200" height="670" loading="lazy" decoding="async" />
  <figcaption>Claude Code vs Cursor vs Cline at a glance — same goal, three different trade-offs.</figcaption>
</figure>

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
  {
    slug: 'perplexity-vs-consensus-vs-elicit-2026',
    title: 'Perplexity vs Consensus vs Elicit: Which AI Research Tool Should You Use in 2026?',
    excerpt:
      "Three AI research tools have carved out distinct lanes: Perplexity's cited web search, Consensus's science-of-everything meta-analysis, and Elicit's deep academic paper workflow. Here's the honest comparison.",
    date: '2026-07-13',
    author: 'Mavis · AI Agents Hub',
    readingTime: 8,
    tags: ['research', 'comparison', 'perplexity', 'consensus', 'elicit'],
    relatedAgents: ['perplexity', 'consensus', 'elicit'],
    coverThumb: '/blog/perplexity-vs-consensus-vs-elicit-2026-thumb.jpg',
    content: `
<p>If you search the web, summarize scientific papers, or read academic research, three AI tools have become the default starting points in 2026. <strong><a href="/agent/perplexity">Perplexity</a></strong> is the cited answer engine — ask a question, get a written answer with numbered citations to live web sources. <strong><a href="/agent/consensus">Consensus</a></strong> is the science meta-search — ask a yes/no question, get a count of how many peer-reviewed studies say yes, no, or are undecided. <strong><a href="/agent/elicit">Elicit</a></strong> is the academic research assistant — load a paper, extract the findings, build a citation graph.</p>

<p>Each does one job exceptionally well. None of them is a substitute for the others. Picking the wrong one costs you hours of friction; picking the right one compounds. This post compares the three head-to-head using the profiles we maintain on <a href="/">our 62-agent directory</a>, then tells you which one to use for which kind of question.</p>

<h2><a href="/agent/perplexity">Perplexity</a>: the cited answer engine</h2>

<p><a href="/agent/perplexity">Perplexity</a> is the closest thing on the market to "Google + GPT + footnotes." You type a question — anything from "what changed in GPT-5.6's pricing" to "best 3-agent stack for code migration" — and Perplexity returns a written answer with numbered citations to the sources it pulled from. Click any number and you land on the source page. Every claim is traceable. Every claim is current. The free tier is enough for casual research; Pro ($20/month) unlocks the GPT-5.6-class models, file uploads, and a research mode that runs multiple searches and synthesises them.</p>

<p>The killer feature is the citation model. Most AI tools will hallucinate a URL if you ask for one; Perplexity cannot, because every URL in the answer was actually visited to produce the citation. That single design choice is why Perplexity is the default for journalists, analysts, and anyone who needs an answer they can stand behind. The other under-appreciated strength is the breadth of sources — Perplexity indexes the live web (not a 2024 snapshot), so a question about last week's news returns last week's news.</p>

<figure>
  <img src="/blog/perplexity-vs-consensus-vs-elicit-2026-search.jpg" alt="An AI search interface showing a question at the top with multiple web source citation cards below, each with a small favicon, title, and excerpt" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Perplexity's UI: question at the top, answer in the middle, numbered citations to live sources at the bottom.</figcaption>
</figure>

<p>Where Perplexity is weak: it is not a science tool. If you ask it a question that requires reading 20 papers and synthesising a meta-analysis, it will search the web and return a blog-post-shaped answer, not a peer-reviewed-paper-shaped answer. For that you need the next two.</p>

<p><strong>Pick <a href="/agent/perplexity">Perplexity</a> if</strong> you need a current, cited answer to any general question and trust matters more than depth. <strong>Skip it if</strong> your question is specifically about scientific evidence — the next two tools are better.</p>

<h2><a href="/agent/consensus">Consensus</a>: the science of everything</h2>

<p><a href="/agent/consensus">Consensus</a> does one thing the other AI tools cannot: it searches the peer-reviewed scientific literature and tells you what the evidence says. Type a yes/no question like "does creatine improve cognitive performance" or "is intermittent fasting effective for weight loss" and Consensus returns a meta-answer with a count of studies supporting each position, the sample sizes, and a confidence score. The Premium tier ($9/month) unlocks the full-text of papers, study-level detail, and a custom mode that filters by study type, sample size, and year.</p>

<p>The use case is narrower than Perplexity, but the answers are more authoritative. If you need to know "is X scientifically supported", Consensus will give you a defensible yes/no/maybe with citations to actual papers — not blog posts or marketing copy. This is why it's the default tool for health journalists, medical writers, and researchers doing literature reviews on tight deadlines. The other under-appreciated strength is the consistency of the answer format: you always get the same yes/no/maybe/unknown structure, so it's easy to compare across questions.</p>

<p>Where Consensus is weak: it only searches peer-reviewed papers. If the question is about something not yet studied (a new model, a new company, a new product), Consensus will return "not enough evidence" — even if there is plenty of useful information on blogs, X, or the company's docs. For that you need Perplexity. The other soft spot is that Consensus is optimised for natural-science questions; if you're in the humanities or social sciences, the paper coverage is thinner.</p>

<p><strong>Pick <a href="/agent/consensus">Consensus</a> if</strong> you need a defensible, peer-reviewed-backed answer to a science question. <strong>Skip it if</strong> the topic hasn't been studied yet, or if you need to synthesise non-paper sources.</p>

<h2><a href="/agent/elicit">Elicit</a>: the academic research assistant</h2>

<p><a href="/agent/elicit">Elicit</a> is the most academic of the three. It is built for researchers, grad students, and anyone doing a serious literature review. You give Elicit a research question and it returns a table of relevant papers with the key findings extracted — sample size, methodology, outcome, significance. The Plus tier ($12/month) unlocks unlimited paper uploads, custom extraction templates, and the ability to ask Elicit to read a paper and answer specific questions about it.</p>

<p>The strength is depth. Elicit is the only one of the three that can actually read a 30-page paper and answer "what was the sample size of the treatment group" or "did the authors find a statistically significant effect". It can also build a citation graph — given a seed paper, find the most-cited follow-ups. For a researcher writing a literature review, Elicit replaces 3-4 days of skimming PDFs with an afternoon of structured extraction. The other under-appreciated strength is the audit trail: every claim Elicit extracts from a paper is linked back to the exact page and sentence, so you can verify and cite correctly.</p>

<figure>
  <img src="/blog/perplexity-vs-consensus-vs-elicit-2026-papers.jpg" alt="A research paper analysis interface showing a paper PDF on the left and an extracted findings column with a data table on the right" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Elicit's UI: paper on the left, extracted findings and structured data on the right — every claim linked to source.</figcaption>
</figure>

<p>Where Elicit is weak: it is optimised for natural-science and biomedical research. If you ask it about a history question, a marketing question, or a question about a recent product launch, Elicit will not have good answers because its index is academic papers, not the web. The other soft spot is the learning curve — Elicit assumes you know what extraction columns you want, and the interface rewards a researcher mindset over a casual one.</p>

<p><strong>Pick <a href="/agent/elicit">Elicit</a> if</strong> you are doing a real literature review and need to extract structured data from many papers. <strong>Skip it if</strong> you need a quick answer to a current question — <a href="/agent/perplexity">Perplexity</a> is faster.</p>

<h2>Comparison at a glance</h2>

<figure>
  <img src="/blog/perplexity-vs-consensus-vs-elicit-2026-comparison.jpg" alt="Side-by-side 3-column comparison of Perplexity, Consensus, and Elicit showing their key features, source type, and ideal use case" width="1200" height="670" loading="lazy" decoding="async" />
  <figcaption>Perplexity vs Consensus vs Elicit — same goal (answer with evidence), three different depths of source.</figcaption>
</figure>

<table>
<thead><tr><th></th><th>Perplexity</th><th>Consensus</th><th>Elicit</th></tr></thead>
<tbody>
<tr><td><strong>Source</strong></td><td>Live web</td><td>Peer-reviewed papers</td><td>Peer-reviewed papers (deep)</td></tr>
<tr><td><strong>Best for</strong></td><td>Current questions, any topic</td><td>Yes/no science questions</td><td>Literature reviews, structured extraction</td></tr>
<tr><td><strong>Answer format</strong></td><td>Written + numbered citations</td><td>Yes/No/Unknown count</td><td>Structured table of findings</td></tr>
<tr><td><strong>Citations</strong></td><td>Every claim, live URLs</td><td>Every study, paper-level</td><td>Every extraction, page-level</td></tr>
<tr><td><strong>Free tier</strong></td><td>Yes, generous</td><td>Yes, limited</td><td>Yes, limited</td></tr>
<tr><td><strong>Paid</strong></td><td>Pro $20/mo</td><td>Premium $9/mo</td><td>Plus $12/mo</td></tr>
<tr><td><strong>Limitation</strong></td><td>Not a science tool</td><td>Only peer-reviewed sources</td><td>Slowest, most academic</td></tr>
</tbody>
</table>

<h2>Verdict by use case</h2>

<p><strong>If you need a quick, current, cited answer to any general question:</strong> <a href="/agent/perplexity">Perplexity</a>. The default starting point for journalists, analysts, and anyone who needs to be right and to be quick.</p>

<p><strong>If you need to know what the scientific evidence says about a yes/no question:</strong> <a href="/agent/consensus">Consensus</a>. The right tool when the question is "is X effective / safe / correlated with Y" and the answer needs to be defensible against peer review.</p>

<p><strong>If you are doing a real literature review and need to extract structured findings from many papers:</strong> <a href="/agent/elicit">Elicit</a>. The only one of the three that will replace 3-4 days of skimming PDFs with an afternoon of structured extraction.</p>

<p><strong>For most research workflows, you end up using all three.</strong> Start with <a href="/agent/perplexity">Perplexity</a> to scope the question, move to <a href="/agent/consensus">Consensus</a> to validate with peer-reviewed evidence, and use <a href="/agent/elicit">Elicit</a> when you need to extract structured data from the specific papers that Consensus surfaces. The three compose well — they each do one job and they do not fight each other.</p>

<h2>What to try first</h2>

<p>If you've never used an AI research tool, start with the free tier of <strong><a href="/agent/perplexity">Perplexity</a></strong>. Ask it three questions you already know the answer to, and see if its citations check out. Once you trust it, upgrade to Pro for the GPT-5.6-class models. From there, add <strong><a href="/agent/consensus">Consensus</a></strong> the first time you have a yes/no science question, and <strong><a href="/agent/elicit">Elicit</a></strong> the first time you need to read 10+ papers in a sitting. The free tiers of each are good enough to evaluate; the paid tiers pay for themselves in saved hours.</p>

<h2>Bottom line</h2>

<p>Perplexity is the default for any current question, Consensus is the right tool for science yes/no questions, and Elicit is the right tool for serious literature reviews. None of them is a substitute for the others. The question is which one matches the question you actually have right now — and once you have all three in your workflow, you stop reaching for a single tool and start reaching for the right one.</p>

<p>See the full profiles for all three — and 59 other AI agents — in our <a href="/">directory</a>.</p>
`,
  },
  {
    slug: 'mcp-explained-2026',
    title: 'MCP Explained: What It Is and 6 AI Tools That Use It Well',
    excerpt:
      "The Model Context Protocol is the closest thing the AI agent ecosystem has to a standard plug. We explain what MCP actually does, why it matters, and profile 6 tools in our directory that ship with first-class MCP support.",
    date: '2026-07-13',
    author: 'Mavis · AI Agents Hub',
    readingTime: 10,
    tags: ['mcp', 'protocol', 'claude-code', 'cline', 'cursor', 'continue', 'cody', 'mastra'],
    relatedAgents: ['claude-code', 'cline', 'cursor', 'continue', 'cody', 'mastra'],
    coverThumb: '/blog/mcp-explained-2026-thumb.jpg',
    content: `
<p>For two years, every AI tool that needed to "do something" in the real world — read a file, query a database, hit an API — built the integration itself. The result was a thousand bespoke connectors, each slightly different, each maintained by a different team, each breaking when the underlying tool changed. The <strong>Model Context Protocol</strong> (MCP) is the closest thing the AI agent ecosystem has to a standard plug: a single protocol that any model can use to talk to any tool, with the tool author and the model author both writing to the same spec.</p>

<p>Two years after Anthropic open-sourced the spec, MCP is the default way to extend a coding agent. If you have a tool that does something useful, the answer to "how does my AI agent use it" is "wrap it in an MCP server" — and the answer to "which AI agents can use it" is "any of them". This post explains what MCP actually does, why it matters more than it sounds, and walks through 6 tools in our directory that ship with first-class MCP support.</p>

<h2>What MCP actually is</h2>

<p>MCP is a protocol — a contract — between an AI model (or an agent that uses one) and a tool that the model wants to call. The protocol defines three things: how the model discovers what tools are available, how the model invokes a tool, and how the tool returns its result. The model speaks JSON-RPC; the tool registers itself as a server; the model acts as a client.</p>

<figure>
  <img src="/blog/mcp-explained-2026-architecture.jpg" alt="An MCP architecture diagram showing a model at the top, an MCP layer in the middle, and three tool blocks (Database, Filesystem, Browser) at the bottom with bidirectional arrows" width="1200" height="670" loading="lazy" decoding="async" />
  <figcaption>MCP architecture: a model on top, an MCP layer in the middle, tools at the bottom — and the same protocol works for any tool.</figcaption>
</figure>

<p>The practical consequence: if you write an MCP server for your tool once, every MCP-compatible agent (and there are now many) can use it without you touching the agent's code. The reverse is also true — if you are building an agent, you ship MCP support once and your agent can use any MCP server in the ecosystem. This is the part that matters: it converts a million-point integration graph (every agent × every tool) into a 1+1+N graph (one protocol + the agent + the tools).</p>

<p>You can think of MCP as the USB-C of AI agent integrations. Before USB-C, every device had its own connector. After USB-C, every device speaks the same protocol and the connector count collapses. The same thing is happening with MCP — the agent ecosystem is moving from "every agent integrates with every tool" to "every agent implements MCP, every tool ships an MCP server".</p>

<h2>Why it matters more than it sounds</h2>

<p>Three practical consequences of MCP that are easy to underestimate.</p>

<p><strong>First, the build-vs-buy decision flips.</strong> Before MCP, if you needed an agent to read your database, you had to build that integration yourself, in the agent's specific API. With MCP, you either find an existing MCP server for your database (most major databases have one) or wrap your database in 100 lines of code that follow the MCP spec. The agent stays unchanged. This makes "use the agent I already have" the obvious choice in a lot of cases where "build a custom agent" used to be the only option.</p>

<p><strong>Second, the agent lock-in weakens.</strong> If you standardise on MCP, switching agents becomes a configuration change, not a rewrite. The integrations live in MCP servers, not in the agent. This is good for users (less lock-in) and good for the ecosystem (agents compete on quality, not on which integrations they ship).</p>

<p><strong>Third, the security story becomes tractable.</strong> Before MCP, every agent implemented its own permission system. After MCP, the permission system can live in the MCP server itself — a database MCP server knows what queries are read-only and which can mutate, and the agent doesn't need to encode that domain knowledge. The result is more granular, more auditable, and less error-prone than per-agent permission systems.</p>

<h2>6 tools that use MCP well</h2>

<p>Here are six tools in our directory that ship with first-class MCP support, in the rough order of how central MCP is to the product.</p>

<h3>1. <a href="/agent/claude-code">Claude Code</a> — terminal-native agent with first-class MCP</h3>

<p><a href="/agent/claude-code">Claude Code</a> ships with MCP as a core primitive, not an add-on. The <code>claude mcp add</code> command lets you wire up any MCP server in one line — filesystems, Puppeteer, databases, custom internal tools. The agent discovers available tools at session start, calls them via the standard protocol, and uses the results in the next reasoning step. If you are running Claude Code against a real codebase, you are almost certainly running it against at least one MCP server.</p>

<figure>
  <img src="/blog/mcp-explained-2026-claude-code.jpg" alt="A terminal window showing MCP tool calls in action with structured invocations and results" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Claude Code's MCP story: one command to register a server, then the agent uses it like any other tool.</figcaption>
</figure>

<h3>2. <a href="/agent/cline">Cline</a> — open-source agent that can create MCP servers on the fly</h3>

<p><a href="/agent/cline">Cline</a> is the open-source alternative to Claude Code that pushes MCP one step further: it can <em>create and install</em> new MCP servers as part of its workflow. If you ask Cline to "add a tool that talks to my CRM", it can write the MCP server code, register it, and use it in the same session. This makes Cline the most MCP-extensible tool in the directory — the only limit is what its BYOK model can write.</p>

<h3>3. <a href="/agent/cursor">Cursor</a> — AI-first editor with MCP via Composer</h3>

<p><a href="/agent/cursor">Cursor</a>'s Composer (Agent mode, Cmd+I) supports MCP servers registered through the project's <code>.cursor/mcp.json</code> file. Once a server is registered, Composer can invoke its tools as part of any multi-step task. The setup is less interactive than Claude Code or Cline, but the same MCP servers work the same way — which is the whole point of the protocol.</p>

<figure>
  <img src="/blog/mcp-explained-2026-cursor.jpg" alt="A VS Code editor with a side panel showing MCP tool configuration with toggle switches and tool names" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Cursor's MCP story: register in .cursor/mcp.json, then Composer uses the tools as part of multi-step tasks.</figcaption>
</figure>

<h3>4. <a href="/agent/continue">Continue</a> — open-source VS Code AI extension</h3>

<p><a href="/agent/continue">Continue</a> supports MCP through its <code>config.json</code> file. You register an MCP server, Continue discovers its tools, and your custom assistants and slash commands can call those tools. The use case is similar to Cline (open-source, BYOK) but the configuration is more "devs assemble their own stack" — you bring the model, the tools, and the integrations, Continue wires them together.</p>

<h3>5. <a href="/agent/cody">Cody</a> — Sourcegraph's enterprise code AI</h3>

<p><a href="/agent/cody">Cody</a> from Sourcegraph supports MCP through its enterprise configuration. The pitch is "Cody knows your entire codebase (because Sourcegraph indexes it), and with MCP it can also know your internal tools". For enterprise users, the combination of codebase context + MCP access to internal systems (Jira, Linear, custom APIs) is the most useful MCP workflow available today.</p>

<h3>6. <a href="/agent/mastra">Mastra</a> — TypeScript framework for building MCP servers</h3>

<p><a href="/agent/mastra">Mastra</a> is the framework side of MCP. If you want to <em>build</em> an MCP server (so other agents can use your tool), Mastra gives you a TypeScript-first framework with batteries-included primitives for tools, workflows, and integrations. Mastra is the most meta entry on this list — it is a tool for building the tools that the other tools consume.</p>

<h2>Comparison at a glance</h2>

<table>
<thead><tr><th></th><th>MCP role</th><th>Setup</th><th>Best for</th></tr></thead>
<tbody>
<tr><td><a href="/agent/claude-code">Claude Code</a></td><td>Native client + server</td><td>CLI command</td><td>Terminal workflows, production use</td></tr>
<tr><td><a href="/agent/cline">Cline</a></td><td>Native client + can create servers</td><td>VS Code extension + API key</td><td>Open-source flexibility, ad-hoc tools</td></tr>
<tr><td><a href="/agent/cursor">Cursor</a></td><td>Native client</td><td>JSON config</td><td>Editor workflows, code-first teams</td></tr>
<tr><td><a href="/agent/continue">Continue</a></td><td>Native client</td><td>JSON config</td><td>Assemble-your-own-stack</td></tr>
<tr><td><a href="/agent/cody">Cody</a></td><td>Native client</td><td>Enterprise config</td><td>Codebase context + internal tools</td></tr>
<tr><td><a href="/agent/mastra">Mastra</a></td><td>Server framework</td><td>TypeScript package</td><td>Building MCP servers</td></tr>
</tbody>
</table>

<h2>Verdict: which to pick</h2>

<p><strong>If you want the deepest MCP story as a user of an agent:</strong> <a href="/agent/claude-code">Claude Code</a>. The protocol is a first-class primitive, the CLI is one line, and every tool you can think of has either an MCP server or a wrapper that ships with the agent.</p>

<p><strong>If you want the most flexibility to invent new tools on the fly:</strong> <a href="/agent/cline">Cline</a>. The "create an MCP server as part of the workflow" pattern is unique to Cline, and for one-off internal tools it's the fastest way to go from "we need an agent that can do X" to "the agent can do X".</p>

<p><strong>If you want the most polished editor experience with MCP:</strong> <a href="/agent/cursor">Cursor</a>. The integration is quieter than Claude Code or Cline, but if your team already lives in Cursor, the MCP support is there and it works.</p>

<p><strong>If you want to build an MCP server:</strong> <a href="/agent/mastra">Mastra</a>. The framework is the most direct path from "TypeScript codebase" to "MCP server that any agent can use".</p>

<p><strong>If you are an enterprise with a real codebase and real internal systems:</strong> <a href="/agent/cody">Cody</a>. The combination of Sourcegraph's codebase indexing + MCP access to internal tools is the strongest enterprise story in the directory.</p>

<h2>What to try first</h2>

<p>If you have never used MCP, the fastest on-ramp is to install <strong><a href="/agent/claude-code">Claude Code</a></strong> and add the filesystem MCP server with one command. You'll see the protocol in action — the model discovers the tool, calls it, and uses the result — in under five minutes. From there, the obvious next step is to find an MCP server for the tool you actually use most (a database, an API, a file system you don't normally access) and add that. Once you have two MCP servers running, you stop thinking of the agent as a "chat with a model" and start thinking of it as a "front-end to your tools" — which is the whole point.</p>

<h2>Bottom line</h2>

<p>MCP is the standard that makes the AI agent ecosystem possible. Six tools in our directory ship with first-class support today: <a href="/agent/claude-code">Claude Code</a>, <a href="/agent/cline">Cline</a>, <a href="/agent/cursor">Cursor</a>, <a href="/agent/continue">Continue</a>, <a href="/agent/cody">Cody</a>, and <a href="/agent/mastra">Mastra</a> as the build side. The protocol is still young, the ecosystem is still small, and the right time to standardise on it is now — before your integrations ossify around per-agent conventions.</p>

<p>See the full profiles for all six — and 56 other AI agents — in our <a href="/">directory</a>.</p>
`,
  },
  {
    slug: 'operator-vs-browser-use-2026',
    title: 'Operator vs Browser-Use: Which AI Browser Agent Should You Use in 2026?',
    excerpt:
      "OpenAI's Operator is a hosted browser agent that clicks and fills forms. Browser-Use is the open-source Python library that lets any LLM drive a real Chromium browser. They look similar from the outside; they target very different users.",
    date: '2026-07-13',
    author: 'Mavis · AI Agents Hub',
    readingTime: 8,
    tags: ['browsing', 'comparison', 'operator', 'browser-use', 'automation'],
    relatedAgents: ['operator', 'browser-use'],
    coverThumb: '/blog/operator-vs-browser-use-2026-thumb.jpg',
    content: `
<p>For two years, "AI that uses a browser" was a demo. In 2026, it is a real product category with two very different answers. <strong><a href="/agent/operator">Operator</a></strong> (now folded into ChatGPT Agent) is OpenAI's hosted service: a managed virtual browser that clicks, types, and fills forms on your behalf, accessed through your ChatGPT Pro subscription. <strong><a href="/agent/browser-use">Browser-Use</a></strong> is the open-source Python library that lets any LLM drive a real Chromium browser via Playwright, popular with developers who want to build their own web agents.</p>

<p>Both are "AI browser agents." Both can navigate a website, fill a form, and complete a task. But they target very different users, and picking the wrong one for your situation will cost you either $200/month in subscription fees you don't need, or a week of Python work you don't have time for. This post compares the two head-to-head using the profiles in <a href="/">our 62-agent directory</a>, and tells you which to pick.</p>

<h2><a href="/agent/operator">Operator</a>: the hosted browser agent</h2>

<p><a href="/agent/operator">Operator</a> is OpenAI's browser agent. You describe a task in plain English ("find the cheapest direct flight from SFO to Tokyo between Nov 10 and Nov 17"), and Operator opens a remote virtual browser, navigates with mouse and keyboard, fills forms, and returns the result. As of July 2026, Operator has been rolled into "ChatGPT Agent" — a unified tool that combines Operator, Deep Research, and ChatGPT, with the model picking the right tool for each step.</p>

<p>The pitch is simple: no setup, no code, no infrastructure. You describe the task, OpenAI runs the browser in their cloud, you get the answer. The model is the Computer-Using Agent (CUA) — an o3-class vision-action model that sees the screen and decides what to click. The benchmarks are real: 41.6% on Humanity's Last Exam (single pass), 68.9% on BrowseComp (SOTA), and in a July 2026 demo, Operator + Deep Research matched or beat junior investment-banking analysts (1-3 years experience) on real research tasks.</p>

<figure>
  <img src="/blog/operator-vs-browser-use-2026-operator.jpg" alt="A remote browser session interface showing a hotel booking website with a small chat panel on the right side where an AI agent's reasoning and actions are shown" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Operator in action: a remote browser, a chat panel showing the agent's reasoning, and you in the loop on sensitive steps.</figcaption>
</figure>

<p>Where Operator is weak: it is slow, it is expensive, and it is closed. The speed is the fundamental cost of the approach — the model thinks in steps, not seconds, and a 10-minute task on Operator is a 10-minute task. The price is $200/month for ChatGPT Pro, which only makes sense if you use Operator frequently enough to amortise that. The closed-source part is the biggest strategic concern: your browser sessions run in OpenAI's cloud, and you cannot inspect, customise, or host the model yourself. If you need a self-hosted, programmable, or cheap solution, Operator is the wrong answer.</p>

<p><strong>Pick <a href="/agent/operator">Operator</a> if</strong> you already pay for ChatGPT Pro, want a no-code browser agent, and the tasks you run are worth $200/month of subscription. <strong>Skip it if</strong> you want self-hosting, fine-grained control, a programmatic API, or a one-off agent for a small task.</p>

<h2><a href="/agent/browser-use">Browser-Use</a>: the open-source library</h2>

<p><a href="/agent/browser-use">Browser-Use</a> is the de-facto open standard for browser automation with LLMs. It is a Python library that wraps Playwright (the browser automation tool), gives any LLM a high-level interface to "see the page" and "click element X", and lets you build your own web agent in a few dozen lines of code. The library is MIT-licensed, has 55,000+ GitHub stars, and is the underlying engine behind many "AI agent" demos you have seen online.</p>

<p>The pitch is the opposite of Operator's: bring your own model (Claude, GPT-4o, Gemini, a local Ollama model), write your own orchestration (Python), and run it in your own environment. The default install is <code>pip install browser-use</code> + <code>playwright install</code> + a one-line <code>.env</code> with your API key. From there you can build a custom agent for any task — and because you own the code, you can customise the prompts, the tool selection, the retry logic, the error handling, and the deployment.</p>

<figure>
  <img src="/blog/operator-vs-browser-use-2026-code.jpg" alt="A split view showing a Python code editor on the left with browser automation code and a live browser preview on the right showing the automation in action" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Browser-Use in action: Python on the left, real Chromium on the right, the model decides what to click and you see every step.</figcaption>
</figure>

<p>Where Browser-Use is weak: it is code-first, and "code-first" means you write the orchestration. You also manage the browser, the sessions, the cookies, the localStorage, the error recovery, and the deployment yourself. For a developer this is fine — it is the work they would do anyway, with a better tool. For a non-developer, Browser-Use is not the right answer. The other soft spot is the per-step cost: every step is an LLM call, and a long agentic run can rack up tokens. A complex task that would cost $0.50 on Operator might cost $2 on Browser-Use with a frontier model — though the BYOK flexibility means you can drop to a smaller model if you want.</p>

<p><strong>Pick <a href="/agent/browser-use">Browser-Use</a> if</strong> you want to build a custom web agent in Python with full control over the model, the orchestration, and the data. <strong>Skip it if</strong> you want a no-code experience or you do not have a Python developer to maintain the agent.</p>

<h2>Comparison at a glance</h2>

<figure>
  <img src="/blog/operator-vs-browser-use-2026-comparison.jpg" alt="Side-by-side 2-column comparison of Operator and Browser-Use showing their key features, hosting model, and pricing" width="1200" height="670" loading="lazy" decoding="async" />
  <figcaption>Operator vs Browser-Use — same outcome (an AI that uses the web), two completely different product shapes.</figcaption>
</figure>

<table>
<thead><tr><th></th><th><a href="/agent/operator">Operator</a></th><th><a href="/agent/browser-use">Browser-Use</a></th></tr></thead>
<tbody>
<tr><td><strong>Type</strong></td><td>Hosted service</td><td>Open-source library</td></tr>
<tr><td><strong>Setup</strong></td><td>None — describe task, run</td><td>Python + Playwright + LLM key</td></tr>
<tr><td><strong>Model</strong></td><td>CUA (o3 vision-action)</td><td>Any LLM (BYOK)</td></tr>
<tr><td><strong>Hosting</strong></td><td>OpenAI's cloud</td><td>Your machine / your server</td></tr>
<tr><td><strong>Data</strong></td><td>Goes to OpenAI</td><td>Stays with you</td></tr>
<tr><td><strong>Speed</strong></td><td>Slow (vision-driven steps)</td><td>Slow (same — vision-driven)</td></tr>
<tr><td><strong>Cost</strong></td><td>$200/mo (ChatGPT Pro)</td><td>Free lib + per-step LLM cost</td></tr>
<tr><td><strong>Customisation</strong></td><td>None</td><td>Full control (code)</td></tr>
<tr><td><strong>Browser</strong></td><td>Remote virtual browser</td><td>Real Chromium on your machine</td></tr>
<tr><td><strong>Best for</strong></td><td>One-off, high-value tasks</td><td>Programmatic, repeatable workflows</td></tr>
</tbody>
</table>

<h2>Verdict by use case</h2>

<p><strong>If you are a knowledge worker with a high-value one-off task ("plan a two-week trip with hotels and a CSV of every leg"):</strong> <a href="/agent/operator">Operator</a>. The $200/month is worth it if you would otherwise spend 3-4 hours on the task. The model is best-in-class and the UX is good.</p>

<p><strong>If you are a developer building a repeatable workflow ("every Monday morning, scrape these 30 pages and email me a summary"):</strong> <a href="/agent/browser-use">Browser-Use</a>. The cost is per-step LLM usage, the model is your choice, and the agent runs in your environment. You can version-control it, schedule it, debug it, and deploy it the way you would any other software.</p>

<p><strong>If you are an enterprise with a sensitive workflow that cannot send data to OpenAI's cloud:</strong> <a href="/agent/browser-use">Browser-Use</a>. Self-hosting, data staying on your servers, and the option to drop in a smaller model for cost reasons is the only path that meets a real compliance bar.</p>

<p><strong>If you are evaluating the category and want the fastest "is this real" answer:</strong> <a href="/agent/operator">Operator</a>. Subscribe to ChatGPT Pro for one month, run a few real tasks, see what works. If you find yourself wanting programmatic control, cost transparency, or data residency, you'll have a clear reason to switch to <a href="/agent/browser-use">Browser-Use</a> when you cancel.</p>

<p><strong>If you are building a product and need a browser agent as a component:</strong> <a href="/agent/browser-use">Browser-Use</a>. Operator is a product, not a library — you cannot embed it in your own application. <a href="/agent/browser-use">Browser-Use</a> is the only one of the two that lets you build on top of it. For a scraping-first product, you might also consider <a href="/agent/firecrawl">Firecrawl</a> as a complement — it is a cleaner read-the-page API when you do not need to interact with the page.</p>

<h2>What to try first</h2>

<p>If you have never used an AI browser agent, the fastest on-ramp is to subscribe to <strong>ChatGPT Pro</strong> for one month and run a few real tasks on <a href="/agent/operator">Operator</a>. You'll see the category working in under an hour. From there, the natural next step is to install <a href="/agent/browser-use">Browser-Use</a> (<code>pip install browser-use</code> + <code>playwright install</code>) and run one of the example scripts. If you can write Python, you'll have your own custom agent in an afternoon. If you cannot, Operator is the answer and the $200/month is the only honest cost.</p>

<h2>Bottom line</h2>

<p><a href="/agent/operator">Operator</a> is the right answer if you want a no-code, hosted, hands-off browser agent and you already pay for ChatGPT Pro. <a href="/agent/browser-use">Browser-Use</a> is the right answer if you want full control, self-hosting, programmatic workflows, and a lower cost-per-task. The two don't fight each other — most people who use Operator seriously end up with Browser-Use in their stack for the workflows that need code. Pick the one that matches the question you actually have right now, and remember the two are not mutually exclusive.</p>

<p>See the full profiles for both — and 60 other AI agents — in our <a href="/">directory</a>.</p>
`,
  },
  {
    slug: 'n8n-vs-make-vs-zapier-agents-2026',
    title: 'n8n vs Make vs Zapier Agents: Which AI Workflow Tool Should You Use in 2026?',
    excerpt:
      "Three workflow automation tools have become the default for AI-powered tasks: n8n's open-source node editor, Make's visual scenarios, and Zapier's 7,000-app Agents. Different shapes for different jobs.",
    date: '2026-07-13',
    author: 'Mavis · AI Agents Hub',
    readingTime: 9,
    tags: ['automation', 'comparison', 'n8n', 'make', 'zapier-agents', 'workflows'],
    relatedAgents: ['n8n', 'make', 'zapier-agents', 'lindy', 'agentforce'],
    coverThumb: '/blog/n8n-vs-make-vs-zapier-agents-2026-thumb.jpg',
    content: `
<p>"I need to connect 5 SaaS tools and have an AI make a decision and route the result somewhere" used to be a custom engineering project. In 2026, it is a one-day setup with one of three tools. <strong><a href="/agent/n8n">n8n</a></strong> is the open-source, self-hostable node editor (186K+ GitHub stars). <strong><a href="/agent/make">Make</a></strong> is the visual cloud platform with the most powerful branching UI. <strong><a href="/agent/zapier-agents">Zapier Agents</a></strong> is the easiest on-ramp, with the largest integration ecosystem (7,000+ apps) and per-task pricing.</p>

<p>All three do "AI-powered workflow automation." None of them is a substitute for the others. Picking the wrong one for your situation means either a 3-day setup that should have taken 3 hours, or a $200/month bill that should have been $0. This post compares the three using the profiles in <a href="/">our 62-agent directory</a>, and tells you which to pick for which kind of workflow.</p>

<h2><a href="/agent/n8n">n8n</a>: the open-source node editor</h2>

<p><a href="/agent/n8n">n8n</a> is the closest thing in the workflow-automation world to "Zapier, but you own it." It is a node-based visual editor where you drag trigger nodes (Webhook, Schedule, Email) and action nodes (HTTP, Slack, Database) onto a canvas, draw lines between them, and the workflow runs. It is open-source (with a "Sustainable Use" license — free self-host, with some restrictions on SaaS resale), ships with 400+ pre-built integrations, and now has first-class AI Agent nodes for building LLM-powered steps inside a workflow.</p>

<p>The pitch is straightforward: self-hostable, so your data never leaves your server; cheaper than Zapier at scale (free self-host or $24/month cloud); powerful enough for complex, branching logic. The GitHub star count (186,000+) and the 900+ ready-made workflow templates are the proof that the community has stress-tested every use case. For a technical team with compliance or cost concerns, n8n is the obvious default.</p>

<figure>
  <img src="/blog/n8n-vs-make-vs-zapier-agents-2026-canvas.jpg" alt="A self-hosted workflow editor with a visual node-based canvas showing multiple nodes connected by lines in a complex multi-step workflow" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>n8n in action: node-based canvas, your data, your server, your custom code right inside the workflow.</figcaption>
</figure>

<p>Where n8n is weak: the license is "Sustainable Use" — not pure OSS — and the learning curve is steeper than Zapier or Make. The setup that takes 10 minutes on Make can take 45 minutes on n8n if you are not familiar with the model. The other soft spot is the ecosystem: Zapier has 7,000+ apps, Make has 1,500+, n8n has 400+. For the long-tail SaaS tool your team uses, you may need to build a custom HTTP node yourself.</p>

<p><strong>Pick <a href="/agent/n8n">n8n</a> if</strong> you want to self-host for compliance or cost, your data cannot leave your server, and your team is technical enough to write JavaScript or Python in a Code node. <strong>Skip it if</strong> you want a managed cloud experience with the broadest catalog — <a href="/agent/zapier-agents">Zapier Agents</a> or <a href="/agent/make">Make</a> are friendlier.</p>

<h2><a href="/agent/make">Make</a>: the visual cloud platform</h2>

<p><a href="/agent/make">Make</a> (formerly Integromat) is the platform for complex, branching, multi-step workflows that would be hard to express in Zapier's linear step list. You build "scenarios" by dragging modules onto a visual canvas, drawing bubbles and lines between them. Branching, looping, error handling, aggregators, iterators, routers — all are first-class primitives in Make, not bolt-ons. With 1,500+ app integrations and a powerful HTTP module, Make can connect to anything with an API.</p>

<p>The pitch: more powerful than Zapier for complex workflows, cheaper than Zapier for high-volume automation, no code required. The free tier gives 1,000 ops/month; Core is $9/month for 10,000 ops; Pro is $16 for 10,000+ ops; Teams is $29 for higher volumes and shared workspaces. For a 12-module scenario that runs monthly (Stripe-to-NetSuite close, say), Make is the right price. The visual canvas also makes scenarios easy to read and explain to non-developers — useful for cross-team buy-in.</p>

<p>Where Make is weak: it is cloud-only, so no self-host. The visual editor, while powerful, can feel complex to first-time users — the learning curve is steeper than Zapier but easier than n8n. The other soft spot is the per-step cost model: a complex scenario uses 10+ ops per run, and high-volume workflows can outgrow the Pro tier. Make also does not have first-class AI nodes — you call an LLM via the HTTP module or the OpenAI module, which is fine but more setup than n8n's AI Agent node.</p>

<p><strong>Pick <a href="/agent/make">Make</a> if</strong> you build complex multi-step automations with branching, loops, and error handling, and you prefer a visual canvas over linear Zaps. <strong>Skip it if</strong> your automations are simple one-shots (Zapier wins for non-technical setup), or you need self-hosting (n8n is the default).</p>

<h2><a href="/agent/zapier-agents">Zapier Agents</a>: the easiest on-ramp with the largest ecosystem</h2>

<p><a href="/agent/zapier-agents">Zapier Agents</a> is Zapier's take on AI agents. You describe a goal in plain English ("when a new lead is added to HubSpot, enrich with Clearbit, score by company size, send a personalized Slack DM"), connect the apps, and the agent uses Zapier's 7,000+ app integrations to do the work. It is the easiest on-ramp for non-developers who already have Zaps running — you add an agent on top of your existing Zaps, and the agent uses the same actions you already trust.</p>

<figure>
  <img src="/blog/n8n-vs-make-vs-zapier-agents-2026-ecosystem.jpg" alt="A 7,000+ app integration grid view showing many small app icons with a central app connected to dozens of others via dotted lines, with a small chat agent overlay" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Zapier Agents: 7,000+ apps, plain English goals, and an agent that decides which apps to call.</figcaption>
</figure>

<p>The pitch is the largest integration ecosystem in the industry and the lowest setup friction. If your team is already on Zapier (you have hundreds of Zaps), the agent reuses the same connectors, the same authentication, and the same task model — so the learning curve is "describe what you want in English", not "learn a new platform." Pricing: Free / Starter $20/month (750 tasks) / Professional $49/month (2k tasks) / Team $99/month (10k+ tasks and shared agents). The per-task model is the trade-off: easy budgeting for predictable workflows, but expensive at scale for AI-heavy agents.</p>

<p>Where Zapier Agents is weak: no self-host (vendor lock-in), per-task pricing can get expensive for agents that run many times, and the AI decision-making is less transparent than n8n or Make (you can see the calls the agent made, but debugging complex agent logic is harder). The other soft spot is the lack of complex branching — Zapier's linear step model is its strength for one-shots, but a 12-step branching workflow is much easier to express in Make or n8n.</p>

<p><strong>Pick <a href="/agent/zapier-agents">Zapier Agents</a> if</strong> your existing automation already runs on Zapier and you want to layer AI on top without learning a new platform. <strong>Skip it if</strong> you need complex branching or self-hosting (<a href="/agent/n8n">n8n</a> or <a href="/agent/make">Make</a> are stronger), or per-task pricing is too expensive for your volume.</p>

<h2>Comparison at a glance</h2>

<figure>
  <img src="/blog/n8n-vs-make-vs-zapier-agents-2026-comparison.jpg" alt="Side-by-side 3-column comparison of n8n, Make, and Zapier Agents showing their key features, hosting model, and ideal use case" width="1200" height="670" loading="lazy" decoding="async" />
  <figcaption>n8n vs Make vs Zapier Agents — three shapes for the same job: AI-powered workflow automation.</figcaption>
</figure>

<table>
<thead><tr><th></th><th><a href="/agent/n8n">n8n</a></th><th><a href="/agent/make">Make</a></th><th><a href="/agent/zapier-agents">Zapier Agents</a></th></tr></thead>
<tbody>
<tr><td><strong>Hosting</strong></td><td>Self-host or cloud</td><td>Cloud only</td><td>Cloud only</td></tr>
<tr><td><strong>License</strong></td><td>Open-source (Sustainable Use)</td><td>Commercial</td><td>Commercial</td></tr>
<tr><td><strong>Editor</strong></td><td>Node-based visual canvas</td><td>Visual scenarios (branching)</td><td>Plain English + Tools list</td></tr>
<tr><td><strong>Integrations</strong></td><td>400+</td><td>1,500+</td><td>7,000+</td></tr>
<tr><td><strong>AI support</strong></td><td>First-class AI Agent node</td><td>HTTP / OpenAI module</td><td>Built-in agent runtime</td></tr>
<tr><td><strong>Free tier</strong></td><td>Self-host (unlimited)</td><td>1,000 ops/month</td><td>100 tasks/month</td></tr>
<tr><td><strong>Paid</strong></td><td>Cloud $24/mo</td><td>Core $9/mo</td><td>Starter $20/mo</td></tr>
<tr><td><strong>Best for</strong></td><td>Technical teams, compliance, custom code</td><td>Complex branching workflows, visual thinkers</td><td>Existing Zapier users, quick setup</td></tr>
<tr><td><strong>Limit</strong></td><td>Steeper learning curve, smaller integration catalog</td><td>No self-host, per-op cost adds up</td><td>Vendor lock-in, per-task pricing</td></tr>
</tbody>
</table>

<h2>Verdict by use case</h2>

<p><strong>If you are a technical team with compliance, cost, or data-residency requirements:</strong> <a href="/agent/n8n">n8n</a>. Self-host on your own infrastructure, write JavaScript or Python in a Code node when the integration is custom, and you own every byte that flows through the system. The 186K GitHub stars and 900+ templates are evidence that the ecosystem has matured.</p>

<p><strong>If you build complex, branching, multi-step workflows and prefer a visual canvas:</strong> <a href="/agent/make">Make</a>. The visual scenario editor is the most powerful of the three for non-linear logic. The 1,500+ integrations and the cheap paid tiers make it the right answer for high-volume visual workflows.</p>

<p><strong>If you are already on Zapier and want to add AI to your existing Zaps:</strong> <a href="/agent/zapier-agents">Zapier Agents</a>. The 7,000+ app ecosystem and the plain-English setup mean the agent reuses everything you already have, and you are productive in an afternoon.</p>

<p><strong>If you are a solo founder or non-developer who wants a personal AI employee for inbox and calendar:</strong> <a href="/agent/lindy">Lindy</a> is the friendlier pick — it is purpose-built for "describe a Lindy in English, give it Gmail and Calendar, watch it work." Lindy is not in this head-to-head because its scope is narrower (personal-assistant-first), but if you do not need a general automation platform, Lindy is faster to value.</p>

<p><strong>If your data and workflows already live in Salesforce:</strong> <a href="/agent/agentforce">Agentforce</a>. The integration tax disappears, and you inherit Salesforce's security and audit story. Outside the Salesforce ecosystem, Agentforce is the wrong answer.</p>

<p><strong>For most serious automation work, you end up using two of the three.</strong> <a href="/agent/n8n">n8n</a> for the workflows that need self-hosting or custom code, <a href="/agent/make">Make</a> for the visual branching workflows, and <a href="/agent/zapier-agents">Zapier Agents</a> for the long-tail SaaS apps. The three compose well — Zapier actions can call n8n webhooks, n8n can call Make webhooks, and Make can call Zapier webhooks. The tool that wins is the one that matches the workflow you are building today.</p>

<h2>What to try first</h2>

<p>If you have never used any of these, start with the free tier of <strong><a href="/agent/zapier-agents">Zapier Agents</a></strong>. The 100-task free tier is enough to evaluate the category, the setup is plain English, and you will have a working agent in under an hour. From there, add <strong><a href="/agent/make">Make</a></strong> the first time you need a branching workflow Zapier cannot express, and add <strong><a href="/agent/n8n">n8n</a></strong> the first time you hit a self-hosting, compliance, or custom-code requirement. The three are not mutually exclusive — most serious automation shops use all three.</p>

<h2>Bottom line</h2>

<p><a href="/agent/n8n">n8n</a> is the right answer if you need self-hosting, custom code, and the lowest cost. <a href="/agent/make">Make</a> is the right answer if you build complex branching workflows and prefer a visual canvas. <a href="/agent/zapier-agents">Zapier Agents</a> is the right answer if you are already on Zapier and want the easiest on-ramp. All three are excellent. The one to pick depends on whether your bottleneck is compliance (n8n), complexity (Make), or speed-of-setup (Zapier).</p>

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
