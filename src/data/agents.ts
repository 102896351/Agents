// ============================================================
//  AI Agents 数据源
//  - 每个 Agent 一个对象，字段统一
//  - 更新方式：直接编辑这个文件，或用脚本生成后覆盖
//  - 字段说明：
//      slug        URL 用，唯一
//      name        展示名
//      tagline     一句话描述（用你自己的话，别抄）
//      category    主分类（coding/research/browsing/automation/framework）
//      license     open-source / commercial / freemium
//      licenseName 具体协议（MIT、Apache-2.0 等）
//      selfHost    能否自己部署
//      difficulty  学习/上手难度 1-5
//      website     官网
//      github      GitHub 仓库（有则填）
//      stars       GitHub star 数（近似值，定期更新）
//      updated     最近一次有意义的更新（YYYY-MM）
//      tags        细粒度场景标签
//      pricing     价格简述
//      verdict     你的一句话点评（原创，是壁垒）
//      description 2-3 句的长描述（What it is 的真正内容）
//      useCases    典型使用场景 3-5 个（短句，动词开头）
//      pros        优点 2-4 条
//      cons        缺点 / 局限 1-3 条
//      models      支持的底层 LLM（GPT-4o / Claude 3.5 等）
//      alternatives 替代品 slug 数组（指向同文件其他条目）
// ============================================================

export type License = 'open-source' | 'commercial' | 'freemium';

export interface Benchmark {
  label: string;
  value: string;
  source?: string;
}

export interface DecisionAid {
  pickIf: string;
  skipIf: string;
}

export interface Agent {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  license: License;
  licenseName?: string;
  selfHost: boolean;
  difficulty: 1 | 2 | 3 | 4 | 5;
  website: string;
  github?: string;
  stars?: number;
  updated?: string;
  tags: string[];
  pricing: string;
  verdict: string;
  // 扩展字段（全部可选，向后兼容）
  description?: string;
  useCases?: string[];
  pros?: string[];
  cons?: string[];
  models?: string[];
  alternatives?: string[];
  // 决策辅助字段（全部可选）
  quickStart?: string[];             // 5-10 行具体起步步骤
  sampleInput?: string;              // 一个真实输入样本
  sampleOutput?: string;             // 对应的真实输出（可截断）
  benchmarks?: Benchmark[];          // 量化指标，可带来源
  decisionAid?: DecisionAid;         // pickIf / skipIf 两句话
}

export type Category =
  | 'coding'
  | 'research'
  | 'browsing'
  | 'automation'
  | 'framework'
  | 'creative';

export const categories: { id: Category; label: string; description: string }[] = [
  { id: 'coding', label: 'Coding', description: 'Write, refactor, and review code' },
  { id: 'research', label: 'Research', description: 'Search, read, and synthesize information' },
  { id: 'browsing', label: 'Browsing', description: 'Navigate the web and complete tasks online' },
  { id: 'automation', label: 'Automation', description: 'Run workflows and connect tools' },
  { id: 'framework', label: 'Framework', description: 'Build your own agents' },
  { id: 'creative', label: 'Creative', description: 'Generate text, images, and media' },
];

export const agents: Agent[] = [
  // ---------------- Coding ----------------
  {
    slug: 'claude-code',
    name: 'Claude Code',
    tagline: "Anthropic's terminal-native coding agent that edits real codebases.",
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 2,
    website: 'https://www.anthropic.com/claude-code',
    github: undefined,
    tags: ['terminal', 'cli', 'refactor', 'anthropic'],
    pricing:
      'API: pay-per-token via Anthropic API. Subscription: as of April 2026, Anthropic has restricted Claude Code access for Pro users — Max ($100–200/mo) is the entry tier for sustained Claude Code use. Some users report identity-verification requirements even on Pro.',
    verdict:
      'The most reliable terminal coding agent right now — great at multi-file refactors, but the price/access model just changed.',
    description:
      "Claude Code is Anthropic's official coding agent that lives in your terminal. It can read, edit, and run code across an entire repository, and is particularly strong at multi-file refactors, writing tests, and explaining unfamiliar code. It uses the same Claude 3.5/3.7/4 Sonnet and Opus models that power Claude.ai, but tuned for engineering workflows with MCP support for tools. Anthropic's internal 400K-session analysis (235K users, Oct 2025–Apr 2026) shows humans drive ~70% of planning decisions while Claude handles ~80% of execution.",
    useCases: [
      'Refactor code across many files in one pass',
      'Add tests for untested modules',
      'Investigate bugs by reading code and running commands',
      'Migrate codebases between frameworks',
      'Wire up MCP servers (Filesystem, Puppeteer, DBs) for tool-using agent loops',
    ],
    pros: [
      'Excellent at multi-file edits with a real understanding of intent',
      'Tight loop: edit → run → fix, all from the terminal',
      'Native MCP support — wire up Puppeteer / DB / filesystem tools in one command',
      'Can run fully on your machine with API keys (no data leaves)',
    ],
    cons: [
      'Token-heavy: long sessions on large repos burn through Max quotas fast',
      'No first-class GUI — terminal-only',
      'Pro tier access for Claude Code is tightening as of April 2026; check current Anthropic policy before subscribing',
      'Pure-TTY CLI; no file tree, no inline preview',
    ],
    models: ['Claude 3.5 Sonnet', 'Claude 3.7 Sonnet', 'Claude 4 (Sonnet/Opus)'],
    alternatives: ['aider', 'cline', 'gemini-cli', 'cursor'],
    quickStart: [
      'macOS / Linux / WSL: `curl -fsSL https://claude.ai/install.sh | bash`',
      'Windows PowerShell (admin): `irm https://claude.ai/install.ps1 | iex` (no Node.js required)',
      'Verify: `claude --version` — should print something like v2.1.88',
      'Run `claude` in any repo; on first launch it walks you through login + API key setup.',
      'Optional MCP: `claude mcp add filesystem npx @modelcontextprotocol/server-filesystem` to give Claude Code file-system tools.',
    ],
    sampleInput:
      '"In this repo, find every place we construct a Date from user input, normalize them to UTC ISO strings, and add Vitest tests. Don\'t change the wire format."',
    sampleOutput:
      'Modified 4 files:\n  src/dates/parse.ts (renamed to fromUser, +18 lines handling tz, +14 tests)\n  src/api/orders.ts (2 call sites updated)\n  src/api/users.ts (1 call site updated)\n  src/types.ts (added DateUserInput brand type)\nAll 47 tests pass. New tests: parseUserDateToUtc across 6 edge cases (DST, leap second, missing tz, ISO with offset, epoch number, naive string). Diff: +312 / -84.',
    benchmarks: [
      { label: 'SWE-bench Verified (Opus 4.6)', value: '80.8%', source: 'Anthropic Claude Code research' },
      { label: 'Sessions analyzed (Anthropic study)', value: '400,000', source: 'anthropic.com/research/claude-code-expertise' },
      { label: 'Human planning decisions / Claude execution', value: '70% / 80%', source: 'same Anthropic study, Oct 2025–Apr 2026' },
      { label: 'Newbie vs expert session success rate', value: '15% → 33%', source: 'same Anthropic study' },
    ],
    decisionAid: {
      pickIf:
        'You work across large repos and do many multi-file refactors / migrations; you can stomach a terminal-only workflow and want the strongest reasoning model wired in.',
      skipIf:
        'You want a GUI, you\'re on a Pro-only budget, or you need an IDE that "just works" without composing your own MCP server list — try Cursor or Cline instead.',
    },
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    tagline: 'An AI-first code editor with agent mode and tab autocomplete.',
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://cursor.com',
    tags: ['editor', 'autocomplete', 'agent-mode', 'vscode-fork'],
    pricing:
      'Hobby $0/mo: 2,000 completions + 50 slow Premium requests. Pro $20/mo: unlimited completions + 500 fast Premium (slower after; never cut off). Business $40/mo: privacy mode + centralized admin. 14-day Pro trial on first signup.',
    verdict:
      "Easiest onboarding for developers who want AI without leaving the editor — but heavy users will hit Pro's Premium cap fast.",
    description:
      'Cursor is a fork of VS Code rebuilt around AI. It offers tab autocomplete that predicts your next edit, an inline chat for explaining code, and an "Agent" mode (Composer, Ctrl+I) that can read your project, propose multi-file changes, run commands, and iterate on the result. Most useful for solo developers who want AI deeply integrated into their editor.',
    useCases: [
      'Faster autocomplete that predicts your next edit across the project',
      'Inline refactor / rename across files via Composer',
      'Agent mode: "add a settings page to this Next.js app" — multi-file + runs commands',
      'Codebase Q&A with @codebase semantic search across the entire repo',
    ],
    pros: [
      'Best-in-class tab autocomplete — feels almost telepathic for multi-file edits',
      'Familiar VS Code interface — every extension and keybinding still works',
      'Composer (Agent) handles medium-sized multi-file tasks reliably',
      '@Doc and @Web bring external docs and live search into the prompt',
    ],
    cons: [
      'Cloud-only by default — your code leaves your machine unless you enable Privacy Mode (Business tier)',
      'Free Hobby tier caps you at ~2,000 completions/month, which a heavy dev can burn in a week',
      'Premium-model requests gated behind Pro; the absolute fastest models require careful rate watching',
    ],
    models: ['Claude 3.5/3.7 Sonnet', 'GPT-4o', 'GPT-4.1', 'Cursor custom models'],
    alternatives: ['copilot', 'cody', 'claude-code'],
    quickStart: [
      'Download Cursor from https://cursor.com (macOS / Windows / Linux).',
      'Sign in with GitHub or Google — a 14-day Pro trial is auto-activated on new accounts.',
      'Open a project folder. The .cursorrules file at the root defines your project conventions.',
      'Press Cmd+I (macOS) or Ctrl+I (Windows/Linux) to open Composer (Agent mode).',
      'Try: "Explain what this repo does", then "Add a /health endpoint to this Express app".',
    ],
    sampleInput:
      '@UserController.java add @Valid validation, a try/catch with @ControllerAdvice, and JUnit tests for the three POST endpoints',
    sampleOutput:
      'UserController.java:\n  + @PostMapping("/users") now validates request body via @Valid.\n  + Throws UserNotFoundException (409) and ValidationException (400) instead of returning nulls.\n  + New UserValidationAdvice intercepts exceptions and returns { error, code } per project schema.\nTests: 3 new JUnit tests covering 200 / 400 / 409 paths, all passing. Diff: +84 / -22.',
    benchmarks: [
      { label: 'Hobby free completions', value: '2,000 / month', source: 'cursor.com/pricing' },
      { label: 'Pro fast Premium requests', value: '500 / month, then slower (never cut off)' },
      { label: 'Business Privacy Mode', value: 'Code never leaves machine', source: 'Business tier only' },
    ],
    decisionAid: {
      pickIf:
        'You live in VS Code and want an AI layer that respects your existing extensions, keybindings, and themes — no new editor to learn.',
      skipIf:
        'You need self-hosting or a fully local/offline code agent (Cursor is cloud-only by default — even Privacy Mode routes prompts to managed models).',
    },
  },
  {
    slug: 'cline',
    name: 'Cline',
    tagline: 'Open-source autonomous coding agent that runs inside VS Code.',
    category: 'coding',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: false,
    difficulty: 2,
    website: 'https://cline.bot',
    github: 'https://github.com/cline/cline',
    stars: 20000,
    updated: '2026-05',
    tags: ['vscode', 'autonomous', 'BYOK'],
    pricing: 'Free extension; bring your own API keys',
    verdict: 'Best open-source alternative to paid coding agents — you control the model and cost.',
    description:
      'Cline is a VS Code extension that turns the editor into an autonomous coding agent. It can create/edit files, run terminal commands, browse the web, and chain many steps together. Because it is open-source and bring-your-own-key, you control which model it uses and where the data goes.',
    useCases: [
      'Long, multi-step coding tasks inside VS Code',
      'Prototype a feature end-to-end from a one-line prompt',
      'Browser + terminal + editor in one agent loop',
    ],
    pros: [
      'Fully open-source (Apache-2.0) and self-hostable',
      'Works with any frontier model via API keys',
      'Native VS Code integration',
    ],
    cons: [
      'BYOK means you pay model providers directly — costs add up',
      'Quality varies a lot with model choice',
    ],
    models: ['Claude 3.5/3.7 Sonnet', 'GPT-4o/4.1', 'Gemini 2.0/2.5', 'DeepSeek', 'Local LLMs via Ollama'],
    alternatives: ['continue', 'aider', 'claude-code', 'roo-cline'],
    quickStart: [
      'Open VS Code → Extensions (Cmd/Ctrl+Shift+X) → search "Cline" → install.',
      'Click the Cline robot icon in the sidebar → choose API Provider (OpenRouter, Anthropic, OpenAI, Bedrock, etc.) and paste your key.',
      'Tip: OpenRouter gives one key that works across every model, including Claude Sonnet and free models — easier for testing.',
      'Type a task in Cline\'s chat box (e.g. "Add a /health endpoint to this Express app") and approve each step in the diff view.',
      'Optional: `npm i -g cline` to also get the CLI for headless use.',
    ],
    sampleInput:
      '"Refactor this Express server to use async/await everywhere, add input validation with Zod, and add a Vitest suite covering the POST /users route."',
    sampleOutput:
      'Modified 5 files:\n  src/routes/users.ts (async/await conversion, +Zod schema, +18 lines)\n  src/middleware/validate.ts (new)\n  src/server.ts (apply middleware)\n  src/routes/__tests__/users.test.ts (new — 4 test cases)\n  package.json (added zod, vitest)\n12/12 tests pass. Linter clean. Cline produced 1 commit per file with sensible messages.',
    benchmarks: [
      { label: 'GitHub stars', value: '35,000+', source: 'github.com/cline/cline, 2026' },
      { label: 'Supported API providers', value: '12+ (OpenRouter, Anthropic, OpenAI, Bedrock, Azure, Vertex, Cerebras, Groq, ...)' },
      { label: 'First-party MCP client', value: 'Native, can create + install new MCP servers on the fly' },
    ],
    decisionAid: {
      pickIf:
        'You want an open-source, BYOK autonomous agent living inside your existing VS Code — no new editor to learn, full control over which model and which costs.',
      skipIf:
        'You want zero setup or a managed experience — Copilot or Cursor (with sensible defaults out of the box) will get you running faster.',
    },
  },
  {
    slug: 'aider',
    name: 'Aider',
    tagline: 'CLI coding agent that pairs with you and commits clean git history.',
    category: 'coding',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: false,
    difficulty: 3,
    website: 'https://aider.chat',
    github: 'https://github.com/Aider-AI/aider',
    stars: 19000,
    updated: '2026-05',
    tags: ['cli', 'git', 'pair-programming'],
    pricing: 'Free; bring your own API keys',
    verdict: 'A git-native power tool — loved by devs who think in diffs and commits.',
    description:
      'Aider is a command-line pair-programming tool. You describe a change in plain English, and Aider edits the right files, shows you a clean diff, and (optionally) auto-commits with a meaningful message. It treats your git repo as the source of truth and excels at "make this change, then commit it" workflows.',
    useCases: [
      'Pair programming from the terminal',
      'Migrate APIs or libraries across a repo',
      'Generate clean, reviewable commits for every step',
    ],
    pros: [
      'Excellent git integration — every change is a clean commit',
      'Works with many frontier models, including local ones',
      'Strong reputation for accurate multi-file edits',
    ],
    cons: [
      'CLI-only, no editor integration',
      'Less hand-holding than GUI tools — you read diffs',
    ],
    models: ['Claude 3.5/3.7 Sonnet', 'GPT-4o/4.1', 'Gemini 2.5', 'DeepSeek', 'Local models'],
    alternatives: ['claude-code', 'cline', 'gemini-cli'],
    quickStart: [
      'Install: `pip install aider-chat` (Python 3.8+ with pipx recommended).',
      'Set your API key: `export OPENAI_API_KEY=sk-...` (or `ANTHROPIC_API_KEY`, `GEMINI_API_KEY`, etc.).',
      'From inside a git repo, run: `aider hello.js` — Aider starts a chat session with hello.js added to context.',
      'Describe the change in plain English; Aider will show a diff and (by default) auto-commit each successful change.',
      'Use `/add <file>` and `/drop <file>` mid-session to refile files; `/undo` rolls back the last commit; `/diff` shows what changed.',
    ],
    sampleInput:
      '$ aider hello.js\n> write a JavaScript function `sumArray(nums)` that returns the sum, with a docstring and a JSDoc return type.\n  Then write 3 Vitest tests covering empty arrays, mixed numbers, and decimals.',
    sampleOutput:
      'hello.js (new):\n  /**\n   * Sums an array of numbers.\n   * @param {number[]} nums\n   * @returns {number} sum\n   */\n  export function sumArray(nums) { return nums.reduce((a, b) => a + b, 0); }\n\nhello.test.js (new): 3 tests, all passing.\n2 new commits:\n  a1b2c3d feat(hello): add sumArray with JSDoc\n  d4e5f6a test(hello): vitest suite for sumArray',
    benchmarks: [
      { label: 'GitHub stars', value: '19,000+', source: 'github.com/Aider-AI/aider' },
      { label: 'Supported model families', value: 'Claude / GPT / Gemini / DeepSeek / local Ollama' },
      { label: 'Auto-commit behavior', value: 'One commit per logical change, with descriptive message' },
    ],
    decisionAid: {
      pickIf:
        'You live in the terminal, think in diffs and commits, and want every AI change baked into a clean git history you can review with standard git workflows.',
      skipIf:
        'You want a GUI chat or inline editor experience — for that, pair Aider with Continue (editable view) or just use Cline / Cursor.',
    },
  },

  // ---------------- Research ----------------
  {
    slug: 'perplexity',
    name: 'Perplexity',
    tagline: 'Answer engine that cites live web sources for every claim.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.perplexity.ai',
    tags: ['search', 'citations', 'pro-search'],
    pricing: 'Free; Pro $20/mo',
    verdict: 'The fastest way to go from a question to sourced answers.',
    description:
      'Perplexity is a conversational answer engine that searches the live web and cites its sources for every claim it makes. It blends an LLM with a retrieval pipeline so you can ask natural-language questions and get a short, sourced summary instead of a wall of links. Pro Search adds multi-step reasoning and file uploads.',
    useCases: [
      'Quick factual questions with citations',
      'Research current events or recent news',
      'Compare products, services, or pricing across multiple sources',
      'Upload a PDF / image and ask questions about it',
    ],
    pros: [
      'Every claim is linked to a source — easy to verify',
      'Fast and feels like ChatGPT, but with up-to-date info',
      'Free tier is genuinely useful',
    ],
    cons: [
      'Pro Search is needed for the best answers',
      'Quality of sources can be uneven (Reddit, SEO blogs)',
    ],
    models: ['GPT-4o', 'Claude 3.5 Sonnet', 'Sonar (Perplexity custom)', 'Gemini 2.0'],
    alternatives: ['consensus', 'elicit', 'notebooklm'],
  },
  {
    slug: 'elicit',
    name: 'Elicit',
    tagline: 'Research agent that reads academic papers and extracts findings.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 2,
    website: 'https://elicit.com',
    tags: ['academic', 'papers', 'literature-review'],
    pricing: 'Free tier; Plus $12/mo',
    verdict: 'Indispensable for literature reviews — turns 50 papers into a table.',
    description:
      'Elicit is a research assistant that searches across 200M+ academic papers and uses language models to extract key findings into structured tables. It is designed for empirical research workflows: literature reviews, systematic reviews, and evidence synthesis. You can ask a research question and get back a table of papers with their methods, sample sizes, and conclusions filled in.',
    useCases: [
      'Literature reviews and systematic reviews',
      'Extract data from many papers into a comparison table',
      'Find papers by methodology or outcome (not just keywords)',
    ],
    pros: [
      'Built specifically for academic research workflows',
      'Saves hours of manual paper skimming',
      'Transparent about which papers the answers come from',
    ],
    cons: [
      'Less useful outside empirical research (CS, biomed, social science)',
      'Free tier is limited in number of papers per month',
    ],
    models: ['Custom fine-tuned models + GPT-4o class LLMs'],
    alternatives: ['consensus', 'perplexity', 'notebooklm'],
  },
  {
    slug: 'consensus',
    name: 'Consensus',
    tagline: 'Search engine that summarizes what science says about a question.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://consensus.app',
    tags: ['academic', 'evidence', 'summaries'],
    pricing: 'Free tier; Premium $9/mo',
    verdict: 'Best when you want the scientific consensus, not just web opinions.',
    description:
      'Consensus is a search engine that pulls answers from peer-reviewed studies and shows you the scientific consensus on a question. It does not invent citations — every claim links to a real paper, and a "consensus meter" shows how strongly the literature agrees. Ideal for fact-checking health, psychology, and nutrition claims.',
    useCases: [
      'Quickly check what science says about a claim',
      'Get a consensus meter showing how strong the evidence is',
      'Find supporting or contradicting studies for a hypothesis',
    ],
    pros: [
      'Real papers only — no hallucinated citations',
      'Consensus meter is a unique, useful signal',
      'Clean, focused interface',
    ],
    cons: [
      'Limited to domains with strong empirical research (health, psych, nutrition)',
      'Less useful for engineering or frontier tech questions',
    ],
    models: ['Custom search + GPT-4o class summarization'],
    alternatives: ['elicit', 'perplexity', 'notebooklm'],
  },

  // ---------------- Browsing ----------------
  {
    slug: 'operator',
    name: 'ChatGPT Operator',
    tagline: "OpenAI's browser agent that can click and fill forms for you.",
    category: 'browsing',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://openai.com/index/introducing-operator/',
    tags: ['browser', 'task-completion', 'openai'],
    pricing: 'Included with ChatGPT Pro ($200/mo)',
    verdict: 'Impressive on routine web tasks, but expensive and still early.',
    description:
      "Operator is OpenAI's browser-using agent. It opens a remote browser, sees the screen, and can navigate, click, type, and fill forms to complete a task on your behalf. Useful for repetitive web tasks like booking, ordering, or filling standardized forms, though it can still get stuck on unusual UIs.",
    useCases: [
      'Fill in repetitive online forms',
      'Book simple appointments (restaurants, services)',
      'Place routine online orders',
    ],
    pros: [
      'Can use the web like a human — no API integrations needed',
      'Built on a strong vision model that handles most UIs',
    ],
    cons: [
      'Slow (it thinks in steps, not seconds)',
      'Expensive — bundled with $200/mo ChatGPT Pro',
      'Still struggles with CAPTCHAs and unusual layouts',
    ],
    models: ['Computer-Using Agent (CUA) — GPT-4o class vision model'],
    alternatives: ['browser-use', 'firecrawl'],
  },
  {
    slug: 'browser-use',
    name: 'Browser Use',
    tagline: 'Open-source library that lets any LLM drive a real browser.',
    category: 'browsing',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://browser-use.com',
    github: 'https://github.com/browser-use/browser-use',
    stars: 55000,
    updated: '2026-05',
    tags: ['python', 'playwright', 'BYOK'],
    pricing: 'Free library; cloud option available',
    verdict: 'The de-facto open standard for browser automation with LLMs.',
    description:
      'Browser Use is an open-source Python library that lets any LLM (Claude, GPT-4, Gemini, local models) control a real Chromium browser via Playwright. It is the underlying engine behind many "AI agent" demos and is popular with developers who want to build their own web agents without paying for hosted services.',
    useCases: [
      'Build custom web-scraping or web-automation agents',
      'Drive any browser-based workflow with an LLM',
      'Self-host a private Operator-style agent',
    ],
    pros: [
      'Open-source, BYOK — full control over model and data',
      'Plays well with the Python agent ecosystem (LangChain, etc.)',
      'Huge GitHub star count — battle-tested by the community',
    ],
    cons: [
      'Python-only; you write the orchestration code',
      'You manage browsers, sessions, and errors yourself',
    ],
    models: ['Any LLM (Claude, GPT-4o, Gemini, local models via Ollama)'],
    alternatives: ['firecrawl', 'playwright', 'operator'],
  },

  // ---------------- Automation ----------------
  {
    slug: 'n8n',
    name: 'n8n',
    tagline: 'Self-hostable workflow automation with a visual node editor.',
    category: 'automation',
    license: 'open-source',
    licenseName: 'Sustainable Use License',
    selfHost: true,
    difficulty: 3,
    website: 'https://n8n.io',
    github: 'github.com/n8n-io/n8n',
    stars: 80000,
    updated: '2026-05',
    tags: ['workflows', 'integrations', 'self-host', 'low-code'],
    pricing: 'Free self-host; cloud from $24/mo',
    verdict: 'If Zapier is too limiting and too expensive, n8n is the upgrade.',
    description:
      'n8n is a node-based workflow automation tool — think Zapier, but open-source and self-hostable. It has 400+ integrations, supports custom code, and now includes AI/LLM nodes for building agents inside a workflow. Particularly popular with technical teams that need data to stay on their own infrastructure.',
    useCases: [
      'Connect SaaS tools (Slack, Notion, HubSpot, Google Workspace) into one flow',
      'Build AI-powered automations using built-in LLM nodes',
      'Self-host for compliance, privacy, or cost reasons',
    ],
    pros: [
      'Self-hostable — your data never leaves your server',
      'Cheaper than Zapier at scale',
      'Powerful enough for complex, branching logic',
    ],
    cons: [
      'License is "Sustainable Use" — not pure OSS, has some restrictions',
      'Steeper learning curve than Zapier',
    ],
    models: ['Any LLM via OpenAI-compatible API (Claude, GPT, local models)'],
    alternatives: ['make', 'zapier-agents', 'lindy'],
  },
  {
    slug: 'zapier-agents',
    name: 'Zapier Agents',
    tagline: 'Build agents that act across 7,000+ apps without code.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 1,
    website: 'https://zapier.com/agents',
    tags: ['no-code', 'integrations', 'workflows'],
    pricing: 'Free trial; plans from $20/mo',
    verdict: 'Best when your automations already live in Zapier.',
    description:
      "Zapier Agents is Zapier's take on AI agents. You describe a goal in plain English, and the agent uses Zapier's 7,000+ app integrations to do things — send emails, update CRMs, draft responses, schedule meetings. It is the easiest on-ramp for non-developers who already have Zaps running.",
    useCases: [
      'Triage your inbox and draft replies',
      'Research leads and update your CRM',
      'Schedule meetings based on natural-language instructions',
    ],
    pros: [
      '7,000+ app integrations — the largest in the industry',
      'No code required',
      'Easy to set up for non-technical users',
    ],
    cons: [
      'No self-host option — vendor lock-in',
      'Per-task pricing can get expensive at scale',
    ],
    models: ['OpenAI / Anthropic models via Zapier'],
    alternatives: ['make', 'n8n', 'lindy'],
  },
  {
    slug: 'make',
    name: 'Make',
    tagline: 'Visual automation platform for complex multi-step workflows.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://www.make.com',
    tags: ['no-code', 'scenarios', 'integrations'],
    pricing: 'Free tier; Core $9/mo',
    verdict: 'More powerful and cheaper than Zapier for visual thinkers.',
    description:
      'Make (formerly Integromat) is a visual automation platform. You build "scenarios" by dragging and dropping modules on a canvas, with branching, looping, and error-handling built in. Particularly good for complex multi-step workflows that would be hard to express in linear Zaps.',
    useCases: [
      'Sync data between SaaS tools with custom logic',
      'Build complex approval or routing workflows',
      'Automate e-commerce, marketing, or ops tasks',
    ],
    pros: [
      'Visual scenario editor is more powerful than linear Zap steps',
      'Cheaper than Zapier for high-volume workflows',
      'Strong API support — can connect to anything with HTTP',
    ],
    cons: [
      'No self-host — pure cloud',
      'UI can feel complex to first-time users',
    ],
    models: ['HTTP module can call any LLM API; no first-class AI nodes yet'],
    alternatives: ['zapier-agents', 'n8n', 'lindy'],
  },

  // ---------------- Framework ----------------
  {
    slug: 'langgraph',
    name: 'LangGraph',
    tagline: 'Build stateful, multi-actor agents as a graph from LangChain.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://langchain-ai.github.io/langgraph/',
    github: 'github.com/langchain-ai/langgraph',
    stars: 12000,
    updated: '2026-05',
    tags: ['python', 'typescript', 'stateful', 'production'],
    pricing: 'Free library; LangGraph Cloud paid',
    verdict: "The framework to reach for when simple chains aren't enough.",
    description:
      'LangGraph is a framework for building stateful, multi-step agent workflows as a graph. Nodes are functions (LLM calls, tools, routing logic) and edges define how state flows. It is the production-grade choice for agents that need cycles, human-in-the-loop, persistent memory, or fine-grained control over execution.',
    useCases: [
      'Build production agents with cycles, branching, and memory',
      'Human-in-the-loop workflows (approve, edit, retry)',
      'Multi-agent systems with explicit state management',
    ],
    pros: [
      'Best-in-class for stateful, long-running agents',
      'Python and TypeScript SDKs',
      'Backed by LangChain — large ecosystem',
    ],
    cons: [
      'Steeper learning curve than CrewAI or AutoGen',
      'Tied to the LangChain ecosystem',
    ],
    models: ['Any LLM (Claude, GPT-4o, Gemini, local models)'],
    alternatives: ['crewai', 'autogen', 'autogpt'],
  },
  {
    slug: 'crewai',
    name: 'CrewAI',
    tagline: 'Orchestrate role-playing agents that collaborate on tasks.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://crewai.com',
    github: 'github.com/crewAIInc/crewAI',
    stars: 28000,
    updated: '2026-05',
    tags: ['python', 'multi-agent', 'roles'],
    pricing: 'Free library; CrewAI Enterprise paid',
    verdict: 'Most approachable multi-agent framework — great for prototyping teams.',
    description:
      'CrewAI is a Python framework for orchestrating multiple AI agents that play defined roles (e.g., "researcher", "writer", "reviewer") and collaborate on a task. It is the most approachable multi-agent framework: the mental model is "a team with job titles", and you can get a working crew in under 50 lines of code.',
    useCases: [
      'Multi-agent research / writing crews',
      'Prototyping a team-of-agents idea in an afternoon',
      'Role-based task delegation with shared context',
    ],
    pros: [
      'Easiest multi-agent framework to get started with',
      'Role-based mental model is intuitive',
      'Active community and good docs',
    ],
    cons: [
      'Less fine-grained control than LangGraph for complex state',
      'Occasional "agent loops" — needs prompt tuning',
    ],
    models: ['Any LLM (Claude, GPT-4o, Gemini, local models)'],
    alternatives: ['autogen', 'langgraph', 'autogpt'],
  },
  {
    slug: 'autogen',
    name: 'AutoGen',
    tagline: 'Microsoft’s framework for building conversational multi-agent systems.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://microsoft.github.io/autogen/',
    github: 'github.com/microsoft/autogen',
    stars: 38000,
    updated: '2026-05',
    tags: ['python', 'multi-agent', 'research'],
    pricing: 'Free library',
    verdict: 'Research-flavored and powerful, but steeper learning curve than CrewAI.',
    description:
      "AutoGen is Microsoft's framework for building multi-agent systems where agents converse with each other to solve a task. Each agent can have its own system prompt, tools, and human-in-the-loop behavior. It is research-flavored and used heavily in academic papers on multi-agent collaboration.",
    useCases: [
      'Research projects on multi-agent collaboration',
      'Custom agent systems with human-in-the-loop',
      'Conversational workflows with branching dialogues',
    ],
    pros: [
      'Powerful and flexible — widely used in research papers',
      'Microsoft-backed, mature codebase',
      'Strong human-in-the-loop patterns',
    ],
    cons: [
      'Steeper learning curve than CrewAI',
      'Documentation can feel scattered across versions',
    ],
    models: ['Any LLM (Azure OpenAI, OpenAI, Claude, local models)'],
    alternatives: ['crewai', 'langgraph'],
  },

  // ---------------- Creative ----------------
  {
    slug: 'manus',
    name: 'Manus',
    tagline: 'General-purpose agent that delivers finished deliverables autonomously.',
    category: 'creative',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://manus.im',
    tags: ['general', 'deliverables', 'autonomous'],
    pricing: 'Invite/subscription based',
    verdict: 'Hyped for end-to-end deliverables — judge it on the output, not the demo.',
    description:
      'Manus is a general-purpose AI agent that goes from a natural-language goal to a finished deliverable (a research report, a slide deck, a working web app). It plans the steps, browses the web, writes code, and ships the result. It became a viral hit in 2025 for its ability to deliver complete artifacts rather than just chat answers.',
    useCases: [
      'Generate a full research report from a topic',
      'Build a working web app from a one-line brief',
      'Produce slide decks, spreadsheets, or other structured deliverables',
    ],
    pros: [
      'True end-to-end output — not just a chat answer',
      'Impressive demo quality',
    ],
    cons: [
      'Invite-only at times — access can be inconsistent',
      'Output quality varies; not a replacement for human review',
    ],
    models: ['Claude / GPT-class (closed source internals)'],
    alternatives: ['devin', 'lovart', 'autogpt'],
  },

  // ============= 新增 2026-06 =============

  // ---------------- Coding（补充）----------------
  {
    slug: 'devin',
    name: 'Devin',
    tagline: 'Cognition’s autonomous software engineer that plans and ships full tasks.',
    category: 'coding',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://devin.ai',
    tags: ['autonomous', 'full-task', 'team-collaboration'],
    pricing: 'From $500/mo (team plans)',
    verdict: 'The original "AI engineer" — strongest on long, self-directed tasks, but pricey for individuals.',
    description:
      "Devin is Cognition's autonomous software engineer. It can take a Jira ticket, plan the work, browse documentation, edit code across many files, run tests, and report back. It is designed for longer, more open-ended tasks than inline coding assistants and is positioned as a junior engineer you can delegate to.",
    useCases: [
      'Take a GitHub issue and ship a PR end-to-end',
      'Migrate a feature from one framework to another',
      'Long, multi-repo engineering tasks',
    ],
    pros: [
      'Strongest autonomous coding agent for long tasks',
      'Real IDE + browser + terminal in one loop',
      'Good at debugging and self-correction',
    ],
    cons: [
      'Pricey — starts at $500/mo for teams',
      'Slower than inline assistants for small edits',
      'Still needs a human reviewer on every PR',
    ],
    models: ['Custom fine-tuned models + Claude / GPT-class'],
    alternatives: ['claude-code', 'manus', 'codex', 'aider'],
  },
  {
    slug: 'cody',
    name: 'Sourcegraph Cody',
    tagline: 'AI coding assistant that understands your entire codebase at scale.',
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://sourcegraph.com/cody',
    github: 'https://github.com/sourcegraph/cody',
    tags: ['codebase-context', 'enterprise', 'autocomplete'],
    pricing: 'Free tier; Pro $9/mo',
    verdict: 'Unmatched context across huge monorepos — the enterprise pick for large codebases.',
    description:
      "Cody is Sourcegraph's AI coding assistant. Its killer feature is codebase-wide context: it indexes your entire monorepo and can answer questions, write code, and refactor with awareness of dependencies across files. Particularly strong for large enterprise codebases that are too big to fit in a context window.",
    useCases: [
      'Answer questions about a large unfamiliar codebase',
      'Refactor code that touches many files and packages',
      'Onboard new engineers to a monorepo',
    ],
    pros: [
      'Unmatched context across huge monorepos',
      'Strong enterprise / on-prem options',
      'Works with any major IDE',
    ],
    cons: [
      'Best features require Sourcegraph Enterprise',
      'Setup is heavier than single-file assistants',
    ],
    models: ['Claude 3.5/3.7 Sonnet', 'GPT-4o/4.1', "Sourcegraph's own models"],
    alternatives: ['cursor', 'copilot', 'continue'],
  },
  {
    slug: 'continue',
    name: 'Continue',
    tagline: 'Open-source autopilot for VS Code and JetBrains that you fully control.',
    category: 'coding',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: false,
    difficulty: 2,
    website: 'https://www.continue.dev',
    github: 'https://github.com/continuedev/continue',
    stars: 21000,
    updated: '2026-06',
    tags: ['vscode', 'jetbrains', 'BYOK', 'autocomplete'],
    pricing: 'Free extension; bring your own models',
    verdict: 'The most flexible open-source coding assistant — swap any model, keep your data private.',
    description:
      'Continue is an open-source AI code assistant for VS Code and JetBrains. It is highly configurable: you pick the model (local or hosted), the context providers, and the slash commands. It can act as a tab autocomplete, an inline chat, or a multi-step agent. The most flexible open-source coding assistant available.',
    useCases: [
      'Customizable AI coding assistant in VS Code or JetBrains',
      'Use local / private models for code privacy',
      'Build a custom agent by composing providers and tools',
    ],
    pros: [
      'Most flexible open-source coding assistant',
      'Works with any model, including local ones',
      'Strong config system for advanced users',
    ],
    cons: [
      'Configuration can be overwhelming for first-time users',
      'You have to pick and tune the model yourself',
    ],
    models: ['Any (Claude, GPT, Gemini, DeepSeek, local Ollama models)'],
    alternatives: ['cline', 'cody', 'cursor', 'copilot'],
    quickStart: [
      'Install the "Continue" extension in VS Code or the "Continue" plugin in JetBrains IDEs.',
      'Open Continue from the sidebar → click the ⚙ config button → pick "Open config.json".',
      'Choose model providers in `config.json`: e.g. `models: [{ provider: "anthropic", model: "claude-3-5-sonnet-latest" }]` and add your API key.',
      'For local models, swap to `provider: "ollama"` with a base URL like `http://localhost:11434` — works fully offline.',
      'Hotkeys: Cmd+L (chat), Cmd+I (edit inline), Tab (autocomplete). Try `@docs` to attach docs as context.',
    ],
    sampleInput:
      'In Continue chat, with @file src/utils/parseDate.ts selected:\n  "@file this function is called with mixed-format dates in 4 places. Refactor it to accept either ISO strings or epoch numbers and return a normalized UTC ISO string. Then write Vitest tests for both inputs."',
    sampleOutput:
      'src/utils/parseDate.ts (rewritten, +12 / -8):\n  - Accepts string | number input via overload\n  - Returns parseDate().toISOString()\n  - Throws TypeError with a clear message on bad input\nsrc/utils/__tests__/parseDate.test.ts (new): 6 cases — ISO string, epoch number, missing tz, invalid string, undefined, NaN. 6/6 pass.',
    benchmarks: [
      { label: 'GitHub stars', value: '23,000+', source: 'github.com/continuedev/continue' },
      { label: 'Discord community', value: '11,000+ members' },
      { label: 'Built by', value: 'Y Combinator alumni, $3M seed, founded 2023' },
    ],
    decisionAid: {
      pickIf:
        'You want an open-source, fully-configurable coding assistant that can swap to local models for privacy, and you\'re willing to edit a config.json to tune it.',
      skipIf:
        'You want zero-config onboarding — Copilot Pro or Cursor will get you typing with AI in 60 seconds without touching a config file.',
    },
  },

  // ---------------- Creative（补充）----------------
  {
    slug: 'lovart',
    name: 'Lovart',
    tagline: 'Design agent that turns briefs into full visual campaigns end-to-end.',
    category: 'creative',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.lovart.ai',
    tags: ['design', 'branding', 'image-generation'],
    pricing: 'Free tier; Pro from $10/mo',
    verdict: 'Goes beyond one-off images — manages a whole design workflow from brief to assets.',
    description:
      'Lovart is a design agent that turns a brief into a full visual campaign. Unlike one-off image generators, it manages a workflow: research, moodboard, draft variations, refinements, and exports. Useful for designers and marketers who want a faster path from idea to deliverable assets.',
    useCases: [
      'Generate a full visual identity from a brand brief',
      'Produce a set of on-brand social media assets',
      'Iterate on design directions before manual polish',
    ],
    pros: [
      'End-to-end design workflow, not just one image',
      'Maintains brand consistency across outputs',
    ],
    cons: [
      'Pro features locked behind subscription',
      'Output still needs a designer for final polish',
    ],
    models: ['Proprietary diffusion models + GPT-class for planning'],
    alternatives: ['midjourney', 'flux', 'ideogram'],
  },

  // ============= 新增 2026-06 第二批 =============

  // ---------------- Coding（补充）----------------
  {
    slug: 'copilot',
    name: 'GitHub Copilot',
    tagline: 'The AI pair programmer embedded across GitHub, IDEs, and the CLI.',
    category: 'coding',
    license: 'commercial',
    selfHost: false,
    difficulty: 1,
    website: 'https://github.com/features/copilot',
    tags: ['autocomplete', 'chat', 'ide', 'microsoft'],
    pricing: 'Free tier; Pro $10/mo',
    verdict: 'The most ubiquitous coding assistant — wins on reach and integration, not raw power.',
    description:
      'GitHub Copilot is the AI pair programmer that put AI coding on the map. It is deeply integrated across GitHub.com, VS Code, JetBrains, Visual Studio, and even the terminal. It started as autocomplete and has grown into chat, multi-file edits, and (in Copilot Workspace) full task agents.',
    useCases: [
      'Inline autocomplete while typing',
      'Chat with your code in the editor',
      'Use Copilot Workspace to plan and execute larger tasks',
    ],
    pros: [
      'Most ubiquitous coding assistant — works everywhere',
      'Tight GitHub integration (PRs, issues, code review)',
      'Good free tier',
    ],
    cons: [
      'Not the best at long-horizon autonomous tasks',
      'Cloud-only — code leaves your machine',
    ],
    models: ['GPT-4o / GPT-4.1', 'Claude 3.5/3.7 Sonnet (in some plans)'],
    alternatives: ['cursor', 'cody', 'claude-code'],
    quickStart: [
      'Free tier: github.com/features/copilot → "Get started" → sign in with your GitHub account → 2,000 code completions / month + chat access.',
      'Pro ($10/mo): install the Copilot extension in VS Code / JetBrains / Visual Studio → sign in → 300 premium requests and unlimited chat.',
      'Use Copilot Chat: Ctrl+I (inline edit), Ctrl+Shift+I (chat panel), or @workspace in chat to ask about your repo.',
      'Open a PR → Copilot auto-generates a description draft; review and commit.',
      'Team / Business ($19–$39 per user/month) adds admin controls, audit logs, and code referencing on private repos.',
    ],
    sampleInput:
      'In VS Code chat: "Refactor this 200-line React component into 3 smaller components, keep tests green, and write a single-line PR description."',
    sampleOutput:
      'src/ProfilePage.tsx → split into src/ProfileHeader.tsx, ProfileBody.tsx, ProfileFooter.tsx. New index.ts barrel.\n12/12 tests still green. Lint clean (no new warnings).\nPR opened with auto-generated description:\n  "Refactor ProfilePage into Header/Body/Footer components. No behavior change. Tests unchanged."',
    benchmarks: [
      { label: 'Free completions / month', value: '2,000', source: 'github.com/features/copilot' },
      { label: 'Free models (2026 Q2)', value: 'Haiku 4.5, GPT-5 mini, more', source: 'Copilot free tier' },
      { label: 'Installs across the ecosystem', value: '20M+', source: 'GitHub blog, 2026' },
      { label: 'Pro / Business / Enterprise', value: '$10 / $19 / $39 per user/mo' },
    ],
    decisionAid: {
      pickIf:
        'You want the most polished and ubiquitous AI coding experience, with first-class GitHub PR / Issue / code-review integration and a generous free tier.',
      skipIf:
        'You want self-hosting, BYOK models, or deep project-wide context for big refactors — Cline, Continue, or Claude Code will go further. Copilot is also the default, not the leader.',
    },
  },
  {
    slug: 'codex',
    name: 'OpenAI Codex',
    tagline: 'OpenAI’s cloud-based coding agent that runs tasks in parallel sandboxes.',
    category: 'coding',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://openai.com/codex/',
    tags: ['cloud', 'parallel-tasks', 'openai', 'autonomous'],
    pricing: 'Included with ChatGPT Plus/Pro',
    verdict: 'Shines on background multi-task coding — assign several issues and it works them in parallel.',
    description:
      "OpenAI Codex is OpenAI's cloud-based coding agent. It can take a task, run it in an isolated cloud sandbox, and return a patch with a description of what changed. A standout feature is parallelism: you can throw several issues at it at once and it works them in parallel sandboxes.",
    useCases: [
      'Delegate several bug fixes in parallel',
      'Background work on long-running tasks',
      'Generate a PR from a written task description',
    ],
    pros: [
      'Runs in cloud sandboxes — your machine is free',
      'Parallelism: multiple tasks at once',
      'Bundled with ChatGPT Plus/Pro',
    ],
    cons: [
      'Slower turn-around than local agents for small fixes',
      'Quality varies with task complexity',
    ],
    models: ['codex-1 (OpenAI custom), GPT-4o class'],
    alternatives: ['devin', 'claude-code', 'aider'],
  },
  {
    slug: 'gemini-cli',
    name: 'Gemini CLI',
    tagline: 'Google’s open-source terminal agent powered by Gemini.',
    category: 'coding',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: false,
    difficulty: 2,
    website: 'https://github.com/google-gemini/gemini-cli',
    github: 'https://github.com/google-gemini/gemini-cli',
    stars: 35000,
    updated: '2026-06',
    tags: ['terminal', 'cli', 'google', 'open-source'],
    pricing: 'Free; generous free tier via Gemini API',
    verdict: 'The open-source terminal agent that broke out in 2026 — a real Claude Code rival with a free quota.',
    description:
      'Gemini CLI is Google’s open-source terminal agent powered by Gemini. It can read files, edit code, run shell commands, and integrate with Google Cloud. It ships with a generous free tier via the Gemini API, which made it an overnight favorite for developers who want a Claude Code alternative without a Pro subscription.',
    useCases: [
      'Terminal coding agent with a generous free tier',
      'Quick code edits and shell scripting help',
      'Google Cloud workflows and APIs',
    ],
    pros: [
      'Open-source (Apache-2.0)',
      'Best-in-class free tier of any terminal agent',
      'First-class Google Cloud integration',
    ],
    cons: [
      'Newer — smaller community than Claude Code or Aider',
      'Gemini models still trail Claude on some coding tasks',
    ],
    models: ['Gemini 2.5 Pro', 'Gemini 2.0 Flash'],
    alternatives: ['claude-code', 'aider', 'cline'],
  },

  // ---------------- Research（补充）----------------
  {
    slug: 'firecrawl',
    name: 'Firecrawl',
    tagline: 'Open-source engine that turns the web into clean data for LLMs and agents.',
    category: 'research',
    license: 'open-source',
    licenseName: 'AGPL-3.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://www.firecrawl.dev',
    github: 'https://github.com/firecrawl/firecrawl',
    stars: 130000,
    updated: '2026-06',
    tags: ['web-scraping', 'rag', 'self-host', 'mcp'],
    pricing: 'Free self-host; cloud from free tier',
    verdict: 'The backbone of most web-research agents — if your agent reads the web, it likely uses this underneath.',
    description:
      'Firecrawl is an open-source web scraper designed for LLMs. Given a URL, it returns clean Markdown or structured JSON — handling JavaScript rendering, anti-bot measures, and crawling across many pages. It is widely used as a building block for RAG pipelines and research agents, and offers an MCP server that plugs into Claude, Cursor, and others.',
    useCases: [
      'Turn any website into clean Markdown for RAG',
      'Crawl and extract data from many pages',
      'Power research agents that need fresh web data',
    ],
    pros: [
      'Open-source and self-hostable (AGPL-3.0)',
      'Handles JS-heavy sites and anti-bot issues',
      'Native MCP support for Claude / Cursor',
    ],
    cons: [
      'AGPL license is restrictive for some commercial uses',
      'Cloud pricing can climb for heavy crawls',
    ],
    models: ['N/A — uses scraping + LLM extraction'],
    alternatives: ['browser-use', 'playwright', 'scrapegraph'],
  },
  {
    slug: 'notebooklm',
    name: 'NotebookLM',
    tagline: 'Google’s research notebook that grounds answers strictly in your own sources.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://notebooklm.google.com',
    tags: ['sources', 'audio-overview', 'google', 'grounded'],
    pricing: 'Free; Plus features in Google One AI',
    verdict: 'Best-in-class for source-grounded research — hallucinations drop sharply because it only reads what you give it.',
    description:
      "NotebookLM is Google’s research notebook. You upload sources (PDFs, Google Docs, web pages, YouTube links), and it grounds all of its answers strictly in those sources — drastically reducing hallucinations. Its 'Audio Overview' feature generates a podcast-style discussion between two AI hosts summarizing your sources.",
    useCases: [
      'Study a long PDF or set of papers',
      'Generate a podcast-style summary of your research',
      'Ask questions that stay strictly within your sources',
    ],
    pros: [
      'Source-grounded — minimal hallucination',
      'Audio Overview is unique and useful',
      'Free, integrated with Google Drive',
    ],
    cons: [
      'Closed-source — no API, no self-host',
      'Limited to English audio overviews (at time of writing)',
    ],
    models: ['Gemini 2.0/2.5 (Google)'],
    alternatives: ['elicit', 'consensus', 'perplexity'],
  },

  // ---------------- Automation（补充）----------------
  {
    slug: 'agentforce',
    name: 'Salesforce Agentforce',
    tagline: 'Build autonomous agents that act inside the Salesforce CRM stack.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 3,
    website: 'https://www.salesforce.com/agentforce/',
    tags: ['crm', 'enterprise', 'low-code', 'salesforce'],
    pricing: 'From $2/conversation',
    verdict: 'The enterprise pick if your data and workflows already live in Salesforce.',
    description:
      'Agentforce is Salesforce’s platform for building AI agents that act inside the Salesforce ecosystem — sales, service, marketing, commerce. You build agents with a low-code builder and they can take real actions (update records, send emails, open cases) inside the CRM.',
    useCases: [
      'Service agents that handle tier-1 support cases in Salesforce',
      'Sales agents that qualify and route leads',
      'Marketing agents that personalize outreach',
    ],
    pros: [
      'Native to Salesforce — no integration tax',
      'Low-code builder for non-developers',
      'Enterprise-grade security and compliance',
    ],
    cons: [
      'Locked into the Salesforce ecosystem',
      'Per-conversation pricing adds up',
    ],
    models: ['Einstein / OpenAI / Anthropic (via Salesforce)'],
    alternatives: ['lindy', 'n8n', 'zapier-agents'],
  },
  {
    slug: 'lindy',
    name: 'Lindy',
    tagline: 'No-code agent builder for everyday tasks like inbox triage and scheduling.',
    category: 'automation',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.lindy.ai',
    tags: ['no-code', 'personal-assistant', 'email', 'scheduling'],
    pricing: 'Free tier; Pro from $49/mo',
    verdict: 'The friendliest "personal AI employee" — great for non-developers automating email and calendar busywork.',
    description:
      "Lindy is a no-code agent builder aimed at non-developers. You describe a 'Lindy' in plain English, give it a few tools (Gmail, calendar, webhooks, etc.), and it runs as a personal AI employee. It shines for solo founders and small teams automating inbox triage, scheduling, and lead research.",
    useCases: [
      'Inbox triage: categorize, draft, and send replies',
      'Scheduling: handle meeting requests and reminders',
      'Lead research: enrich incoming form submissions',
    ],
    pros: [
      'Most approachable no-code agent builder',
      'Strong email + calendar integrations',
      'Good for non-developers',
    ],
    cons: [
      'Pro pricing starts at $49/mo',
      'Less flexible than Zapier for complex workflows',
    ],
    models: ['Claude / GPT-class via Lindy'],
    alternatives: ['zapier-agents', 'n8n', 'make'],
  },

  // ---------------- Framework（补充）----------------
  {
    slug: 'autogpt',
    name: 'AutoGPT',
    tagline: 'The original autonomous agent platform — build, deploy, and run goal-driven agents.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT (core) + Polyform Shield (autogpt_platform/)',
    selfHost: true,
    difficulty: 4,
    website: 'https://agpt.co',
    github: 'https://github.com/Significant-Gravitas/AutoGPT',
    stars: 170000,
    updated: '2026-06',
    tags: ['platform', 'autonomous', 'pioneer', 'self-host'],
    pricing:
      'MIT core is fully free to self-host. Cloud-hosted beta is invite-only. Self-host hardware: 4+ CPU cores, 8 GB RAM minimum (16 GB recommended), 10 GB disk, Docker Engine 20.10+, Docker Compose 2.0+, Git 2.30+, Node 16+. One-line installer: `curl -fsSL https://setup.agpt.co/install.sh | bash`.',
    verdict:
      'The project that kicked off the autonomous-agent hype — now a mature self-hostable platform, but the Polyform Shield on the new platform portion is a watch-out for commercial use.',
    description:
      'AutoGPT is the project that kicked off the autonomous-agent hype in 2023. It has since matured into a full agent platform: a benchmark (agbenchmark), a frontend with low-code Agent Builder, a marketplace of pre-configured agents, and a self-hostable runtime. The repo is still one of the highest-starred AI agent projects on GitHub (170k+ stars). The classic AutoGPT agent, Forge, and GravitasML stay MIT; the newer autogpt_platform/ folder is under the Polyform Shield license, which is permissive for personal/internal use but restricts competitive SaaS offerings.',
    useCases: [
      'Build, benchmark, and deploy goal-driven agents from a low-code interface',
      'Self-host the full platform on your own hardware (4-core / 8 GB min)',
      'Study a canonical autonomous-agent platform with an agent-protocol-compatible frontend',
      'Trade pre-built agents from the marketplace or wire up your own blocks',
    ],
    pros: [
      'Mature project with a huge community and 170k+ GitHub stars',
      'Self-hostable end-to-end via one-line installer script',
      'Bundled benchmark, frontend, CLI, and marketplace reduce boilerplate',
      'Classic agent core + Forge stays MIT — you keep control',
    ],
    cons: [
      'Harder than newer turnkey options — you need Docker, WSL2 on Windows, and 8–16 GB RAM',
      'The autogpt_platform/ folder is Polyform Shield, not MIT — read the license before building commercial SaaS on top',
      'Documentation spans many versions and forks; expect to dig through old blog posts',
    ],
    models: ['Any LLM (OpenAI, Claude, local models via LiteLLM)'],
    alternatives: ['crewai', 'langgraph', 'autogen'],
    quickStart: [
      'Prereqs: Docker Engine 20.10+, Docker Compose 2.0+, Git 2.30+, Node 16+. Hardware: 4+ CPU cores, 8 GB RAM min, 10 GB free disk.',
      'macOS / Linux: `curl -fsSL https://setup.agpt.co/install.sh -o install.sh && bash install.sh`',
      'Windows: open PowerShell as admin → `iwr https://setup.agpt.co/install.bat -o install.bat; ./install.bat` (WSL2 enabled).',
      'Open http://localhost:3000 in a browser — the Agent Builder loads with a blank canvas.',
      'Drag a "trigger" block + an "AI agent" block + an "output" block, save the agent, click Run.',
    ],
    sampleInput:
      'Agent name: "Viral Video Finder"\nTrigger: every 6 hours\nBlock 1 (Reddit scraper): pull top 10 posts in r/videos (past 6h, score > 1000)\nBlock 2 (LLM): pick the 3 posts most likely to be viral B-roll for short-form video; justify each pick\nBlock 3 (video composer): render a 15-sec clip with the Reddit thumbnail + the LLM\'s caption\nBlock 4 (output): post to /tmp/auto-videos/ and ping a webhook',
    sampleOutput:
      'Saved 3 clips in /tmp/auto-videos/\n  - 2026-07-05_sunset_microwave.mp4 (caption: "POV: your microwave becomes sentient at golden hour")\n  - 2026-07-05_parking_lot_dance.mp4 (caption: "Why is this lot full at 3am")\n  - 2026-07-05_cat_holds_door.mp4 (caption: "Citizen of the year nominee")\nRun completed in 4m12s, webhook delivered.',
    benchmarks: [
      { label: 'GitHub stars', value: '170,000+', source: 'github.com/Significant-Gravitas/AutoGPT' },
      { label: 'agbenchmark categories', value: '12+ (reasoning, web, code, etc.)', source: 'repo docs' },
      { label: 'Min self-host hardware', value: '4 cores / 8 GB RAM / 10 GB disk', source: 'install docs' },
    ],
    decisionAid: {
      pickIf:
        'You want a self-hostable, reference-quality agent platform you can poke at, fork, and benchmark — and you have the hardware or a spare VPS with 8 GB RAM.',
      skipIf:
        'You want a turnkey SaaS for end users, or you\'re put off by Polyform Shield on the autogpt_platform/ folder (restricts competitive SaaS). For SaaS-style multi-agent orchestration, try CrewAI or LangGraph.',
    },
  },

  // ============= 新增 2026-06 第三批 =============

  // ---------------- Framework ----------------
  {
    slug: 'mastra',
    name: 'Mastra',
    tagline: 'TypeScript-native framework for building agents that reason, remember, and act.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://mastra.ai',
    github: 'https://github.com/mastra-ai/mastra',
    stars: 19000,
    updated: '2026-06',
    tags: ['typescript', 'memory', 'mcp', 'multi-agent', 'rag'],
    pricing: 'Free library; Mastra Cloud paid',
    verdict:
      'The best pick for TypeScript developers — batteries-included (memory, tools, MCP, observability) with great DX.',
    description:
      'Mastra is a TypeScript-native agent framework that ships with everything you need out of the box: agent memory, tool use, MCP integration, RAG pipelines, structured output, observability, and multi-agent orchestration. It is purpose-built for TS and follows established AI patterns, which makes it a favorite among full-stack JS/TS teams.',
    useCases: [
      'Build production agents in a TypeScript codebase',
      'Add memory + tools + RAG without stitching many libraries',
      'Ship agents with built-in observability',
    ],
    pros: [
      'TypeScript-native with excellent type safety and DX',
      'Batteries included: memory, tools, MCP, RAG, evals',
      'Fast-growing community and weekly releases',
    ],
    cons: [
      'Younger ecosystem than LangChain/CrewAI',
      'JS/TS only — no first-class Python',
    ],
    models: ['OpenAI', 'Anthropic', 'Google', 'local via Ollama'],
    alternatives: ['langgraph', 'crewai', 'autogen'],
  },
  {
    slug: 'openai-agents-sdk',
    name: 'OpenAI Agents SDK',
    tagline: 'OpenAI’s official lightweight framework for multi-step, handoff-based agents.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://openai.github.io/openai-agents-python/',
    github: 'https://github.com/openai/openai-agents-python',
    stars: 18000,
    updated: '2026-06',
    tags: ['python', 'openai', 'handoffs', 'guardrails'],
    pricing: 'Free library; pay OpenAI API usage',
    verdict:
      'Minimal and opinionated — ideal if you live in OpenAI’s ecosystem and want agent handoffs done right.',
    description:
      'The OpenAI Agents SDK is an open-source, production-ready framework for building agentic AI apps. It focuses on a few powerful primitives — agents, handoffs, guardrails, and sessions — and is the successor to the experimental Swarm project. It pairs natively with OpenAI models and tools.',
    useCases: [
      'Build agents that hand tasks off to specialized sub-agents',
      'Add input/output guardrails to an LLM app',
      'Stay close to OpenAI’s recommended patterns',
    ],
    pros: [
      'Official, well-maintained by OpenAI',
      'Clean, minimal mental model (agents + handoffs)',
      'First-class tracing via the Traces dashboard',
    ],
    cons: [
      'Strongest when paired with OpenAI models',
      'Fewer integrations than LangChain/LangGraph',
    ],
    models: ['OpenAI (primary)', 'other providers via LiteLLM'],
    alternatives: ['langgraph', 'crewai', 'mastra'],
  },

  // ---------------- Research / Data ----------------
  {
    slug: 'chatgpt',
    name: 'ChatGPT',
    tagline: 'OpenAI’s general-purpose assistant with browsing, code, and now agent capabilities.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://chat.openai.com',
    tags: ['general', 'browsing', 'code', 'gpts'],
    pricing: 'Free; Plus $20/mo; Pro $200/mo',
    verdict:
      'The default starting point for most people — Deep Research and agent features keep pushing what a chat assistant can do.',
    description:
      'ChatGPT is OpenAI’s flagship conversational assistant. Beyond chat, it now includes web browsing, code execution, image generation, the GPTs marketplace, Deep Research (long-running research agents), and Operator-style browser agents on higher tiers. It is the most widely used AI assistant in the world.',
    useCases: [
      'General Q&A and writing',
      'Deep Research across the web over many minutes',
      'Running small automations via GPTs',
    ],
    pros: [
      'Broadest capability set of any single assistant',
      'Massive ecosystem of custom GPTs',
      'Constantly updated with new agent features',
    ],
    cons: [
      'Generalist — specialists beat it on narrow tasks',
      'Higher tiers (Pro, Operator) are expensive',
    ],
    models: ['GPT-4o', 'GPT-4.1', 'o-series reasoning models'],
    alternatives: ['perplexity', 'notebooklm', 'gemini-cli'],
  },
  {
    slug: 'claude',
    name: 'Claude (Anthropic)',
    tagline: 'Anthropic’s assistant, prized for long context, careful reasoning, and writing.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://claude.ai',
    tags: ['general', 'long-context', 'artifacts', 'writing'],
    pricing: 'Free; Pro $20/mo; Max $100–200/mo',
    verdict:
      'Best-in-class for long documents and thoughtful writing — the agent you reach for when quality matters more than speed.',
    description:
      'Claude is Anthropic’s conversational assistant. It is known for a very large context window, careful and nuanced outputs, strong coding ability (which powers Claude Code), and the Artifacts feature for generating interactive content. Anthropic positions it as a safer, more steerable assistant.',
    useCases: [
      'Analyzing very long documents (books, codebases)',
      'High-quality writing and editing',
      'Building interactive artifacts (UIs, docs, diagrams)',
    ],
    pros: [
      'Excellent long-context handling',
      'Nuanced, high-quality prose',
      'Strong safety and steerability',
    ],
    cons: [
      'Smaller third-party ecosystem than OpenAI',
      'Peak usage can require Max tier',
    ],
    models: ['Claude Sonnet', 'Claude Opus', 'Claude Haiku'],
    alternatives: ['chatgpt', 'perplexity', 'gemini-cli'],
  },
  {
    slug: 'deepseek',
    name: 'DeepSeek',
    tagline: 'Open-weight frontier models with a coding-specialist variant and a chat assistant.',
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT (weights)',
    selfHost: true,
    difficulty: 2,
    website: 'https://www.deepseek.com',
    github: 'https://github.com/deepseek-ai/DeepSeek-V3',
    stars: 140000,
    updated: '2026-06',
    tags: ['open-weights', 'coding', 'reasoning', 'self-host'],
    pricing: 'Free chat; open weights; API very cheap',
    verdict:
      'The open-weights breakthrough — frontier-tier reasoning at a fraction of the cost, runnable on your own hardware.',
    description:
      'DeepSeek is a Chinese AI lab whose open-weight models (DeepSeek-V3, DeepSeek-R1) rival proprietary frontier models on reasoning and coding while being freely available and dramatically cheaper to run. The models can be self-hosted, and power many BYOK setups (including Cline, Aider, and local pipelines).',
    useCases: [
      'Run frontier-tier reasoning without vendor lock-in',
      'Power coding agents cheaply via API',
      'Self-host a strong model on your own GPUs',
    ],
    pros: [
      'Open weights — full control, self-hostable',
      'Exceptional price/performance',
      'Strong coding and math/reasoning',
    ],
    cons: [
      'Heavier to self-host than using an API',
      'Fewer native product features (no hosted artifacts)',
    ],
    models: ['DeepSeek-V3', 'DeepSeek-R1', 'DeepSeek-Coder'],
    alternatives: ['chatgpt', 'claude', 'gemini-cli'],
  },

  // ---------------- Automation ----------------
  {
    slug: 'sierra',
    name: 'Sierra',
    tagline: 'Conversational AI platform for enterprise customer experience and support.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://sierra.ai',
    tags: ['enterprise', 'customer-support', 'cx', 'voice'],
    pricing: 'Enterprise pricing',
    verdict:
      'The serious enterprise choice for customer-service agents — guardrails, analytics, and brand voice done right.',
    description:
      'Sierra is an enterprise conversational AI platform focused on customer experience. It lets large brands build agents that handle support across chat and voice, with strong guardrails, integration into CRM/ITSM systems, and analytics. It is co-founded by Bret Taylor and positioned against generic chatbot tooling.',
    useCases: [
      'Automate tier-1 customer support at scale',
      'Voice + chat agents with consistent brand voice',
      'Route and escalate with guardrails and analytics',
    ],
    pros: [
      'Built for enterprise CX, not generic chat',
      'Strong guardrails and observability',
      'Integrates with CRM/ITSM stacks',
    ],
    cons: [
      'Enterprise-only — no self-serve tier',
      'Not for individual or small-team use',
    ],
    models: ['Multiple frontier models (model-agnostic)'],
    alternatives: ['agentforce', 'lindy', 'decagon'],
  },
  {
    slug: 'decagon',
    name: 'Decagon',
    tagline: 'AI customer-support agents that resolve tickets and take actions, not just answer.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://decagon.ai',
    tags: ['customer-support', 'enterprise', 'actions', 'analytics'],
    pricing: 'Enterprise pricing',
    verdict:
      'Goes beyond FAQs — these agents actually execute workflows and track resolution analytics, loved by modern support teams.',
    description:
      'Decagon builds AI agents for customer support that do more than answer questions: they take actions (refunds, status updates, account changes), learn from resolved tickets, and report on metrics like deflection and CSAT. It targets modern B2B support teams and is one of the fast-rising players in AI support.',
    useCases: [
      'Resolve support tickets end-to-end, with actions',
      'Deflect repetitive tickets at scale',
      'Track deflection and resolution analytics',
    ],
    pros: [
      'Agents take real actions, not just reply',
      'Strong analytics on support outcomes',
      'Fast to deploy on existing helpdesk data',
    ],
    cons: [
      'Enterprise pricing, not for small teams',
      'Requires clean support data to shine',
    ],
    models: ['Multiple frontier models (model-agnostic)'],
    alternatives: ['sierra', 'agentforce', 'lindy'],
  },

  // ============= 新增 2026-06 第四批（语音/视频/营销/安全）=============

  // ---------------- Automation: 语音通话 ----------------
  {
    slug: 'vapi',
    name: 'Vapi',
    tagline: 'Developer-first platform for building production AI voice agents on phone calls.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://vapi.ai',
    github: 'https://github.com/VapiAI',
    tags: ['voice', 'phone-calls', 'realtime', 'developers', 'enterprise'],
    pricing:
      'Usage-based, per-minute of call (STT + LLM + TTS + telephony). Reference points: 1B+ calls handled to date; Amazon Ring routes 100% of inbound through Vapi since 2025. Raised $50M Series B in May 2026 at ~$500M valuation (lead: Peak XV; M12, Kleiner Perkins, Bessemer participated; $72M total raised). SOC 2 / HIPAA / PCI compliant for enterprise.',
    verdict:
      'The go-to API for devs who want AI phone agents in production — backed by Amazon Ring as a customer, sub-500ms latency, and 1B+ real calls under its belt.',
    description:
      'Vapi is a developer platform for building, testing, and deploying AI voice agents that can make and receive real phone calls. It abstracts the STT → LLM → TTS pipeline into a single API with sub-500ms end-to-end latency, handles telephony, and ships SDKs for web and mobile. Founded in 2023 by Jordan Dearsley and Nikhil Gupta (ex-Waterloo, ex-YC), pivoted from an AI-therapist app to voice infrastructure in 2024. Enterprise customers include Amazon Ring, Intuit, New York Life, Kavak, Instawork and UnityAI; the self-serve developer side has 750k+ devs who have launched 2.5M+ unique agents. 99.9% uptime SLA on enterprise plans.',
    useCases: [
      'Inbound and outbound AI phone agents (support, sales, scheduling)',
      'Automated screening, qualification, and routing of inbound calls',
      'Voice assistants embedded in apps via Voice SDK',
      'Replace IVR menus with conversational flows in contact centers',
    ],
    pros: [
      'API-first, very developer-friendly — REST + SDK + dashboard',
      'Battle-tested at scale: 1B+ calls, 1–5M/day, <500ms avg latency',
      'Amazon Ring runs 100% of inbound through Vapi — real enterprise reference',
      'Model-agnostic — swap STT / LLM / TTS providers without rewriting flow',
      'Compliance built-in: SOC 2, HIPAA, PCI for regulated industries',
    ],
    cons: [
      'Pay-per-minute costs scale steeply with call volume — model for unit cost',
      'Voice quality and latency still bound by the chosen LLM/TTS stack',
      'Mostly an API — you need engineering capacity to wire up the voice flow yourself',
    ],
    models: ['Model-agnostic: any STT / LLM / TTS provider', 'Common: GPT-4o, Claude, Deepgram, ElevenLabs'],
    alternatives: ['retell', 'sierra'],
    quickStart: [
      'Sign up at https://vapi.ai → create a workspace → grab an API key from Settings.',
      'In the dashboard, click "Create Assistant" → pick the voice (e.g. ElevenLabs "Rachel") and the LLM (e.g. GPT-4o).',
      'Type the system prompt, e.g. "You are Alex, an appointment scheduler. Ask for the customer\'s name and preferred date, then book them."',
      'Click "Test in Browser" to dry-run the conversation (no telephony cost yet).',
      'Attach a phone number (Vapi provisions one for ~$2/mo, or import your Twilio number) and ship to production.',
    ],
    sampleInput:
      'Assistant config:\n  Voice: ElevenLabs "Rachel" (en-US, warm)\n  STT: Deepgram Nova-2\n  LLM: GPT-4o, temperature 0.4\n  System prompt: "You are Alex from Acme Dental. Greet the caller, confirm if they\'re an existing patient, ask the reason for calling, and offer the next 2 available slots from our schedule. Never quote prices."\n  Tools: [list_available_slots, book_appointment]',
    sampleOutput:
      'Inbound call routed in 320ms, average call length 1m48s\nCaller: "I have a toothache"\nAlex: "I\'m sorry to hear that. Are you an existing Acme Dental patient?"\nCaller: "Yes"\nAlex: "Thanks. I have Tuesday 10:15 AM with Dr. Lee or Wednesday 2:00 PM with Dr. Park — which works better?"\nCaller chose Tuesday. Slot booked, confirmation SMS sent.\nTotal voice minutes that month: 4,210. Cost (estimate): $0.07/min × 4,210 = $295.',
    benchmarks: [
      { label: 'Total calls handled (lifetime)', value: '1,000,000,000+', source: 'vapi.ai homepage' },
      { label: 'Calls / day', value: '1,000,000–5,000,000', source: 'TechCrunch May 2026' },
      { label: 'Average end-to-end latency', value: '<500ms', source: 'vapi.ai' },
      { label: 'Enterprise uptime SLA', value: '99.9%', source: 'vapi.ai' },
      { label: 'Amazon Ring inbound routing', value: '100%', source: 'TechCrunch May 2026' },
    ],
    decisionAid: {
      pickIf:
        'You\'re an engineering team that wants an API-first voice platform you can weave into your own stack, with model-agnostic flexibility and SOC2/HIPAA compliance baked in.',
      skipIf:
        'You want a managed contact-center with built-in QA dashboards, lead scoring, and concurrency controls out of the box — Retell AI is the more "ops-y" choice. For pre-built enterprise workflows instead of plumbing, try Sierra.',
    },
  },
  {
    slug: 'retell',
    name: 'Retell AI',
    tagline: 'Full-stack managed platform for building and monitoring AI voice agents at scale.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://www.retellai.com',
    github: 'https://github.com/RetellAI',
    tags: ['voice', 'phone-calls', 'managed', 'analytics'],
    pricing: 'Pay per minute of call',
    verdict:
      'The managed, full-pipeline choice — strong when you want call analytics and monitoring out of the box.',
    description:
      'Retell AI is a managed platform for building, testing, deploying, and monitoring production-ready AI voice agents at scale. Like Vapi it provides the full STT→LLM→TTS pipeline, but it leans more into a turnkey managed experience with built-in call analytics, monitoring, and concurrency controls. It is Vapi’s main rival.',
    useCases: [
      'High-volume outbound call campaigns',
      'Contact-center voice automation with monitoring',
      'Voice agents that need analytics and QA',
    ],
    pros: [
      'Managed end-to-end, less to wire up',
      'Strong call analytics and monitoring',
      'Handles concurrency at scale',
    ],
    cons: [
      'Less bare-metal control than a pure API',
      'Cost scales with minutes used',
    ],
    models: ['Multiple STT/LLM/TTS providers (model-agnostic)'],
    alternatives: ['vapi', 'sierra'],
  },

  // ---------------- Creative: 视频生成 ----------------
  {
    slug: 'runway',
    name: 'Runway',
    tagline: 'AI video generation studio with cinematic control and the publicly-available Gen-4 model.',
    category: 'creative',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://runwayml.com',
    tags: ['video-generation', 'cinematic', 'image-to-video', 'gen-4'],
    pricing: 'Free credits; Standard $15/mo',
    verdict:
      'The best publicly-available video model — when you need real control over camera and motion, this is the pick.',
    description:
      'Runway is an AI video generation studio whose Gen-4 / Gen-4.5 models are widely regarded as the best publicly available text-to-video and image-to-video tools. It offers fine control over motion, camera, and style, plus a full editing studio. It is the default choice for creators who need cinematic results without waiting for limited-access models.',
    useCases: [
      'Text-to-video and image-to-video clips',
      'Cinematic b-roll and motion-controlled shots',
      'Quick visual hooks for social content',
    ],
    pros: [
      'Best publicly-available video quality',
      'Strong motion and camera control',
      'Full editing studio, not just a generator',
    ],
    cons: [
      'Credits burn fast on longer clips',
      'Peak quality needs paid tiers',
    ],
    models: ['Runway Gen-4 / Gen-4.5'],
    alternatives: ['sora', 'pika'],
  },
  {
    slug: 'sora',
    name: 'Sora',
    tagline: 'OpenAI’s text-to-video model — leading photorealism and long coherent clips.',
    category: 'creative',
    license: 'commercial',
    selfHost: false,
    difficulty: 1,
    website: 'https://openai.com/sora',
    tags: ['video-generation', 'photorealism', 'openai', 'text-to-video'],
    pricing: 'Included with ChatGPT Plus/Pro',
    verdict:
      'Top-tier realism and clip length — but gated access and inconsistent availability make it a sometimes-tool, not a daily one.',
    description:
      'Sora is OpenAI’s text-to-video model, known for the highest photorealism and the longest single coherent clips among frontier video models. As of 2026 it can generate up to ~60 seconds. Access is gated behind ChatGPT Plus/Pro and availability fluctuates, so many creators pair it with Runway as a reliable fallback.',
    useCases: [
      'Highest-realism short video clips',
      'Long single-take shots that stay coherent',
      'Concept and storyboard visualization',
    ],
    pros: [
      'Class-leading photorealism',
      'Long, coherent single clips',
      'Integrated into the ChatGPT ecosystem',
    ],
    cons: [
      'Gated, inconsistent availability',
      'Less control over camera/motion than Runway',
      'Higher tier required',
    ],
    models: ['Sora (OpenAI)'],
    alternatives: ['runway', 'pika'],
  },
  {
    slug: 'pika',
    name: 'Pika',
    tagline: 'Beginner-friendly video generation, especially strong at lip sync and quick edits.',
    category: 'creative',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://pika.art',
    tags: ['video-generation', 'lip-sync', 'easy', 'social'],
    pricing: 'Free credits; Pro from $10/mo',
    verdict:
      'The friendly on-ramp to AI video — fastest path from idea to a shareable clip, with great lip sync.',
    description:
      'Pika is a video-generation tool focused on ease of use and shareable output. It is especially known for lip sync and quick, expressive image animation. It caps clips around 30 seconds but makes up for it with the lowest learning curve in the category, making it popular for social content and fast prototyping.',
    useCases: [
      'Fast, shareable social video clips',
      'Lip-synced character animation',
      'Quick idea prototyping before a heavier render',
    ],
    pros: [
      'Easiest to learn in the video category',
      'Excellent lip sync',
      'Affordable entry pricing',
    ],
    cons: [
      'Shorter max clip length',
      'Less cinematic control than Runway',
    ],
    models: ['Pika (proprietary)'],
    alternatives: ['runway', 'sora'],
  },

  // ---------------- Research: 安全研究 ----------------
  {
    slug: 'pentestgpt',
    name: 'PentestGPT',
    tagline: 'Open-source LLM-driven assistant that guides penetration testing step by step.',
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://github.com/GreyDGL/PentestGPT',
    github: 'https://github.com/GreyDGL/PentestGPT',
    stars: 8000,
    updated: '2026-06',
    tags: ['security', 'pentesting', 'red-team', 'cli', 'self-host'],
    pricing: 'Free; bring your own API keys',
    verdict:
      'A genuinely useful pair-programmer for security work — best for licensed pentesters who know what they’re doing.',
    description:
      'PentestGPT is an open-source, LLM-powered assistant designed to help with penetration testing. It reasons about a target, decomposes the pentest into sub-tasks, and suggests next steps and commands, maintaining context of the overall engagement. It is intended for use by security professionals within authorized engagements.',
    useCases: [
      'Guide and document authorized pentests',
      'Suggest next steps and commands during a test',
      'Teach the structured pentest methodology',
    ],
    pros: [
      'Open-source and self-hostable',
      'Reasons about the full engagement, not just one prompt',
      'Useful for learning pentest workflow',
    ],
    cons: [
      'Only for authorized security testing',
      'Quality depends heavily on the backing model',
      'Not a substitute for real pentest expertise',
    ],
    models: ['GPT-4', 'Claude', 'local models'],
    alternatives: ['chatgpt', 'deepseek'],
  },

  // ============= 新增 2026-06 第五批（数据/编码补充/图像/营销）=============

  // ---------------- Coding（补充）----------------
  {
    slug: 'windsurf',
    name: 'Windsurf',
    tagline: 'AI-native IDE from Codeium with Cascade — a deeply context-aware agent.',
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://windsurf.com',
    tags: ['ide', 'agent', 'autocomplete', 'codeium'],
    pricing: 'Free tier; Pro $15/mo',
    verdict:
      'The strongest Cursor rival in 2026 — Cascade’s context-aware flow is genuinely impressive, and the free tier is generous.',
    description:
      'Windsurf is the AI-native IDE built by Codeium (now rebranded around the Windsurf name). Its flagship feature is Cascade, an agent that reads the whole codebase and maintains context across multi-step edits. It pairs IDE-native autocomplete with a deeply integrated agent, directly competing with Cursor.',
    useCases: [
      'Multi-file refactors with full-project context',
      'Agentic coding inside a dedicated IDE',
      'Generous free tier for individual developers',
    ],
    pros: [
      'Cascade agent has excellent whole-project context',
      'Generous free tier (unlimited completions)',
      'Fast, polished IDE experience',
    ],
    cons: [
      'Newer ecosystem than Cursor / VS Code',
      'Best features locked behind Pro',
    ],
    models: ['GPT-4.1', 'Claude Sonnet', 'Codeium proprietary'],
    alternatives: ['cursor', 'claude-code', 'copilot'],
    quickStart: [
      'Download Windsurf from codeium.com/windsurf (Win / macOS / Linux).',
      'Sign in with Google, GitHub, or email — no payment needed for the free tier (unlimited completions, recent models).',
      'Open a folder → Cascade panel opens automatically; click "Cascade" → describe a task.',
      'Press Tab for inline autocomplete (Supercomplete); ⌘L to open Cascade chat; ⌘I for inline edit.',
      'Pro $15/mo unlocks the latest Claude / GPT models and faster premium requests; Team $30/user/mo adds SSO and analytics.',
    ],
    sampleInput:
      'In Cascade chat: "Refactor this Express server: convert callbacks to async/await, add Zod request validation, and write a Vitest suite for the POST /users route. Keep the existing tests green."',
    sampleOutput:
      'Cascade plan (visible inline):\n  Step 1: Convert callbacks → async/await across 5 files\n  Step 2: Add Zod schemas per route\n  Step 3: Generate Vitest coverage for POST /users\n  Step 4: Run tests + lint, fix anything that breaks\nResult:\n  - src/routes/users.ts (+18 / -9, async/await + Zod)\n  - src/middleware/validate.ts (new, 31 lines)\n  - src/routes/__tests__/users.test.ts (new, 4 test cases)\n  - 12/12 tests pass; lint clean',
    benchmarks: [
      { label: 'Free completions', value: 'Unlimited, recent models included', source: 'codeium.com/windsurf' },
      { label: 'Pro price', value: '$15/mo (annual) / $20 month-to-month', source: '2026 pricing' },
      { label: 'Users (March 2026)', value: '1,000,000+', source: '新浪科技 article' },
      { label: 'Enterprise customers', value: '4,000+', source: '新浪科技 article' },
      { label: 'Company valuation', value: '$1.25B', source: '腾讯云 article' },
    ],
    decisionAid: {
      pickIf:
        'You want a dedicated AI-native IDE with the strongest project-wide context engine on the market (Cascade\'s 20-tool-call chain), and a free tier that\'s actually generous enough to ship.',
      skipIf:
        'You already live in VS Code and just want a plugin — Copilot, Cline, or Continue will feel less disruptive. Or if you want a terminal-native workflow, Claude Code / Aider will be faster.',
    },
  },
  {
    slug: 'tabnine',
    name: 'Tabnine',
    tagline: 'Privacy-first AI code assistant that runs across existing IDEs, including private models.',
    category: 'coding',
    license: 'freemium',
    selfHost: true,
    difficulty: 2,
    website: 'https://www.tabnine.com',
    tags: ['autocomplete', 'privacy', 'enterprise', 'self-host'],
    pricing: 'Free basic; Pro $12/mo; Enterprise custom',
    verdict:
      'The enterprise privacy pick — if your code can’t leave your network, Tabnine (with self-hosted models) is built for exactly that.',
    description:
      'Tabnine is an AI code assistant focused on privacy, security, and compliance. Unlike cloud-only tools, it can run on your own infrastructure with your own models, making it popular in regulated industries (finance, defense, healthcare). It integrates across VS Code, JetBrains, and Visual Studio.',
    useCases: [
      'Code completion where code can’t leave the company',
      'Compliant AI assistance in regulated industries',
      'Self-hosted AI coding for security teams',
    ],
    pros: [
      'Strong privacy and self-host story',
      'Works across all major IDEs',
      'Enterprise compliance features',
    ],
    cons: [
      'Weaker agentic capabilities than Cursor/Windsurf',
      'Self-hosted setup is non-trivial',
    ],
    models: ['Proprietary', 'self-hosted open models'],
    alternatives: ['copilot', 'cody', 'continue'],
  },
  {
    slug: 'replit-agent',
    name: 'Replit Agent',
    tagline: 'Build and deploy full apps from a prompt, entirely in the browser.',
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://replit.com',
    tags: ['browser', 'full-stack', 'deploy', 'beginner-friendly'],
    pricing: 'Free starter; Core $20/mo',
    verdict:
      'The fastest path from idea to a deployed app — no local setup, no deploys to manage. Magic for prototypes and learners.',
    description:
      'Replit Agent is a browser-based agent that builds full applications from a natural-language prompt — scaffolding, code, dependencies, and deployment all handled in the Replit cloud IDE. It is the most beginner-friendly way to go from idea to a live app with zero local environment setup.',
    useCases: [
      'Prototype an app from a single prompt',
      'Build and deploy without any local setup',
      'Learn full-stack development by watching an agent',
    ],
    pros: [
      'Zero local setup — everything in browser',
      'End-to-end: build, run, deploy',
      'Extremely beginner-friendly',
    ],
    cons: [
      'Less control than a local IDE setup',
      'Best features need the paid tier',
    ],
    models: ['Multiple frontier models'],
    alternatives: ['cursor', 'windsurf', 'devin'],
  },

  // ---------------- Research: 数据分析 ----------------
  {
    slug: 'vanna',
    name: 'Vanna',
    tagline: 'Open-source Python agent that writes SQL for you from natural language, trained on your schema.',
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://vanna.ai',
    github: 'https://github.com/vanna-ai/vanna',
    stars: 12000,
    updated: '2026-06',
    tags: ['sql', 'data-analysis', 'python', 'rag', 'self-host'],
    pricing: 'Free library; hosted Vanna Cloud',
    verdict:
      'The de-facto open-source SQL agent — trains RAG on your own schema and docs, so it actually knows your database.',
    description:
      'Vanna is an open-source Python library for conversational SQL. Instead of a generic text-to-SQL wrapper, it uses RAG trained on your DDL, documentation, and past queries, so it improves over time and produces queries tailored to your specific database. It connects to Snowflake, BigQuery, Postgres, and more.',
    useCases: [
      'Ask questions of your database in plain English',
      'Let non-technical teams self-serve analytics',
      'Train a private SQL assistant on your schema',
    ],
    pros: [
      'Open-source, RAG-trained on your own schema',
      'Improves with more training data',
      'Connects to all major databases',
    ],
    cons: [
      'Needs Python + initial training setup',
      'Quality depends on good DDL/docs',
    ],
    models: ['OpenAI', 'Anthropic', 'local models via Ollama'],
    alternatives: ['chatgpt', 'deepseek'],
  },

  // ---------------- Creative: 图像生成 ----------------
  {
    slug: 'midjourney',
    name: 'Midjourney',
    tagline: 'The benchmark for artistic, cinematic AI image generation.',
    category: 'creative',
    license: 'commercial',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.midjourney.com',
    tags: ['image-generation', 'artistic', 'cinematic', 'discord'],
    pricing: 'From $10/mo',
    verdict:
      'Still the king of aesthetics — when the look matters more than precise control, nothing else matches Midjourney’s eye.',
    description:
      'Midjourney is the most acclaimed AI image generator for artistic and cinematic output. It has long set the benchmark for visual quality, composition, and style. Originally Discord-only, it now has a full web app. It competes with Flux (photorealism) and Ideogram (text rendering), but leads on pure aesthetics.',
    useCases: [
      'Concept art and key visuals',
      'Cinematic and editorial imagery',
      'Mood boards and creative exploration',
    ],
    pros: [
      'Best-in-class artistic quality',
      'Distinctive, recognizable style',
      'Active community and style ecosystem',
    ],
    cons: [
      'No free tier',
      'Less precise control than Flux',
      'Weaker at text-in-image',
    ],
    models: ['Midjourney (proprietary)'],
    alternatives: ['flux', 'lovart'],
  },
  {
    slug: 'flux',
    name: 'FLUX',
    tagline: 'Open-weights image model from Black Forest Labs, leading in photorealism and prompt accuracy.',
    category: 'creative',
    license: 'open-source',
    licenseName: 'Apache-2.0 (Schnell) / non-commercial (Dev)',
    selfHost: true,
    difficulty: 3,
    website: 'https://blackforestlabs.ai',
    github: 'https://github.com/black-forest-labs/flux',
    stars: 7000,
    updated: '2026-06',
    tags: ['image-generation', 'photorealism', 'open-weights', 'self-host'],
    pricing: 'Free self-host (Schnell); paid API for Pro',
    verdict:
      'The open-source answer to Midjourney — run it on your own GPU, or use the API. Best prompt adherence among open models.',
    description:
      'FLUX is a family of open-weights image-generation models from Black Forest Labs (founded by original Stable Diffusion authors). FLUX.1 Schnell is Apache-2.0 and freely self-hostable; FLUX.1 Dev and Pro push higher quality. It leads open models in photorealism, anatomy, and prompt accuracy, and is the backbone of many self-hosted image stacks.',
    useCases: [
      'Self-host a Midjourney-class image generator',
      'Photorealistic product/scene imagery',
      'Build image features into your own product',
    ],
    pros: [
      'Open weights, freely self-hostable (Schnell)',
      'Excellent prompt adherence and realism',
      'Backed by the original Stable Diffusion team',
    ],
    cons: [
      'Self-hosting needs a capable GPU',
      'Pro tier behind paid API',
    ],
    models: ['FLUX.1 Schnell', 'FLUX.1 Dev', 'FLUX.1 Pro'],
    alternatives: ['midjourney', 'lovart'],
  },

  // ---------------- Automation: 营销 ----------------
  {
    slug: 'jasper',
    name: 'Jasper',
    tagline: 'AI marketing copilot for on-brand content at scale, trained on your brand voice.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.jasper.ai',
    tags: ['marketing', 'content', 'brand-voice', 'copywriting'],
    pricing: 'From $39/mo (Creator); Business custom',
    verdict:
      'The mature pick for marketing teams that need on-brand content velocity — years ahead of generic chat tools on brand consistency.',
    description:
      'Jasper is an AI marketing platform specialized in on-brand content generation. Its standout is Brand Voice, which trains on your existing content so outputs match your tone, style, and messaging. It also orchestrates multi-step marketing workflows and is one of the longest-established marketing AI tools.',
    useCases: [
      'Produce on-brand marketing copy at scale',
      'Multi-channel campaigns with consistent voice',
      'Marketing workflows with review and approvals',
    ],
    pros: [
      'Industry-leading Brand Voice consistency',
      'Purpose-built for marketing, not generic chat',
      'Mature, enterprise-tested',
    ],
    cons: [
      'Not cheap for small teams',
      'Focused on copy — not full creative production',
    ],
    models: ['GPT', 'Claude', 'Anthropic (multi-provider)'],
    alternatives: ['hubspot-breeze', 'copy-ai'],
  },
  {
    slug: 'hubspot-breeze',
    name: 'HubSpot Breeze',
    tagline: 'AI agents built into HubSpot CRM for marketing, sales, and service teams.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://www.hubspot.com/products/ai',
    tags: ['crm', 'marketing', 'sales', 'service', 'enterprise'],
    pricing: 'Included with HubSpot plans; credits-based',
    verdict:
      'The natural choice if you already live in HubSpot — AI layered on top of your real CRM data, not a standalone tool.',
    description:
      'HubSpot Breeze is HubSpot’s suite of AI agents (Breeze Copilot, Breeze Agents for marketing/sales/service, and Breeze Intelligence). It is built directly into the HubSpot CRM, so its agents work with your real contacts, deals, and content. It is the top pick for small and mid-size businesses already on HubSpot.',
    useCases: [
      'Automate marketing content and campaigns in HubSpot',
      'AI-assisted sales outreach and deal coaching',
      'Service agents that deflect support tickets',
    ],
    pros: [
      'Deeply integrated with HubSpot CRM data',
      'One AI layer across marketing/sales/service',
      'Strong for teams already on HubSpot',
    ],
    cons: [
      'Mostly valuable if you use HubSpot already',
      'Credits-based pricing can add up',
    ],
    models: ['OpenAI', 'Anthropic (multi-provider)'],
    alternatives: ['jasper', 'agentforce', 'sierra'],
  },

  // ============= 新增 2026-06 第六批（办公/翻译/音乐/语音/视频）=============

  // ---------------- Automation: 办公/写作 ----------------
  {
    slug: 'notion-ai',
    name: 'Notion AI',
    tagline: 'AI assistant built into Notion — write, summarize, search, and build custom agents.',
    category: 'automation',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.notion.com/product/ai',
    tags: ['productivity', 'notes', 'workspace', 'custom-agents', 'summarization'],
    pricing: 'Included with Notion plans; AI add-on ~$10/mo',
    verdict:
      'The default AI layer for anyone already in Notion — Custom Agents turn your wiki into an automated workspace.',
    description:
      'Notion AI is the assistant built into the Notion workspace. Beyond writing and summarizing, its 2026 standout is Custom Agents — user-built agents that search across all apps connected to Notion, automate busywork, and operate on your notes and docs. It is the most natural AI pick for teams whose knowledge already lives in Notion.',
    useCases: [
      'Summarize meetings, docs, and pages',
      'Build custom agents on top of your workspace',
      'Cross-app search and Q&A over your knowledge base',
    ],
    pros: [
      'Deeply integrated into Notion workspace',
      'Custom Agents work across connected apps',
      'Zero setup for existing Notion users',
    ],
    cons: [
      'Only valuable if you use Notion as your hub',
      'AI add-on is a separate cost',
    ],
    models: ['OpenAI', 'Anthropic (multi-provider)'],
    alternatives: ['chatgpt', 'claude', 'jasper'],
  },
  {
    slug: 'grammarly',
    name: 'Grammarly',
    tagline: 'AI writing partner for grammar, tone, and clarity — now with productivity agents.',
    category: 'automation',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.grammarly.com',
    tags: ['writing', 'grammar', 'tone', 'productivity', 'browser-extension'],
    pricing: 'Free; Premium ~$12/mo',
    verdict:
      'The everywhere writing assistant — sits in every textbox you use, catching what your eye misses.',
    description:
      'Grammarly is an AI writing assistant that works across browsers, desktop apps, and mobile. It started with grammar and spelling, and has expanded into tone adjustment, clarity rewrites, generative writing, and 2026 productivity agents that help with writing-heavy workflows. It is the most ubiquitous writing tool on the web.',
    useCases: [
      'Catch grammar and clarity issues anywhere you type',
      'Adjust tone for different audiences',
      'AI-assisted drafting and rewriting',
    ],
    pros: [
      'Works in virtually every app and browser',
      'Mature, reliable grammar engine',
      'Useful free tier',
    ],
    cons: [
      'Best features need Premium',
      'Suggestions can feel prescriptive for strong writers',
    ],
    models: ['Proprietary (multi-provider)'],
    alternatives: ['notion-ai', 'deepseek', 'jasper'],
  },

  // ---------------- Research: 翻译 ----------------
  {
    slug: 'deepl',
    name: 'DeepL',
    tagline: 'The most natural-sounding machine translation, prized for nuance and fluency.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.deepl.com',
    tags: ['translation', 'localization', 'multilingual', 'writing'],
    pricing: 'Free; Pro from $9/mo',
    verdict:
      'When translation quality matters more than language count, DeepL still beats Google and others on nuance.',
    description:
      'DeepL is a machine-translation service known for producing the most natural, fluent output among general-purpose translators, especially for European languages. It offers whole-document translation, glossary control, and tone options. In 2026 it remains the quality benchmark for translation where nuance and style matter.',
    useCases: [
      'Translate documents with natural, fluent output',
      'Localize content with glossary and tone control',
      'Bilingual writing assistance',
    ],
    pros: [
      'Best-in-class translation fluency',
      'Glossary and tone controls for precision',
      'Strong free tier',
    ],
    cons: [
      'Fewer languages than Google Translate',
      'Strength concentrated in European languages',
    ],
    models: ['Proprietary'],
    alternatives: ['chatgpt', 'claude', 'grammarly'],
  },

  // ---------------- Creative: 音乐生成 ----------------
  {
    slug: 'suno',
    name: 'Suno',
    tagline: 'Generate complete songs with vocals from a prompt — the most popular AI music maker.',
    category: 'creative',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://suno.com',
    tags: ['music', 'vocals', 'song-generation', 'audio', 'da', 'w'],
    pricing:
      'Free: 50 credits/day (~10 songs, non-commercial, watermarked). Pro $10/mo (annual) or $8/mo (intro): 2,500 credits/mo (~500 songs), commercial license included, no watermark. Premier $24/mo (annual): 10,000 credits/mo + Suno Studio (AI-native DAW with multi-track editing, stem separation, MIDI export). A typical full song costs 80–150 credits.',
    verdict:
      'The crowd favorite for full songs with vocals — v5 quality is genuinely impressive for the price. Reach for Premier if you want Studio multi-track editing.',
    description:
      'Suno is the most widely used AI music generator, capable of producing complete songs (vocals + instrumentation) from a text prompt. Its v5 model is the quality leader for vocal tracks. As of early 2026 the company has 2M+ paying users and ~$300M ARR (up ~50% QoQ from $200M), with a $2.45B valuation after a $250M Series C led by Menlo Ventures and NVentures. Its recent Warner Music settlement allows training on WMG’s catalog. Suno Studio (Sept 2025) adds an AI-native DAW experience for serious creators.',
    useCases: [
      'Generate full songs with vocals from a prompt in seconds',
      'Quick jingles, background music, demos',
      'Explore genres and vocal styles',
      'Pro tier: release songs commercially without watermark',
      'Premier tier: multi-track editing, stem export, MIDI out via Suno Studio',
    ],
    pros: [
      'Best vocal quality among AI music tools — v5 has largely solved the "AI sings fake" tell',
      'Full songs with structure (verse / chorus / bridge), not just instrumental clips',
      'Pro tier is commercial-license clean — you keep the rights to publish',
      'Premier adds Suno Studio: a real DAW-ish workflow for producers',
    ],
    cons: [
      'Less fine-grained arrangement control than a human-composed track',
      'Free tier is non-commercial and watermarked — don’t try to publish from it',
      'Pure-AI vocal tracks still trigger some streaming-platform AI-content policies',
    ],
    models: ['Suno v5 (proprietary)', 'Suno Studio (DAW layer)'],
    alternatives: ['udio', 'elevenlabs'],
    quickStart: [
      'Sign up at https://suno.com (free tier gives 50 credits/day, ~10 songs, non-commercial).',
      'Click "Create" → switch to Custom mode for prompt + lyrics control (Simple mode is fine for quick sketches).',
      'Type a prompt: e.g. "indie folk, male vocal, summer vibe, gentle guitar and brushed drums, 130 bpm".',
      'Optionally paste your own lyrics; otherwise Suno writes them.',
      'Click Create (costs 80–150 credits per song). When you like a take, click "Download" or "Extend" to keep the song going.',
    ],
    sampleInput:
      'Style prompt: "dreamy synth-pop, female vocal, reverb-drenched, 110 bpm, key of F# minor, hi-hat rolls on the chorus"\n\nLyrics (excerpt):\n  I keep the porch light on for no one\n  the cat is the only witness now\n  you said forever like it was nothing\n  forever folded easy enough',
    sampleOutput:
      '"Porch Light (demo)" — a 3:42 track, female vocal in F# minor, 110 bpm\nStructure: 8-bar verse / 8-bar pre-chorus / 8-bar chorus / 8-bar verse 2 / outro with vocal ad-lib\n2 generations created; pick #2 picked because the chorus melody hits higher on "easy enough".\nFree-tier render is watermarked; Pro rerender removes the watermark and grants commercial use.',
    benchmarks: [
      { label: 'Paying users', value: '2,000,000+', source: 'CEO LinkedIn, Feb 2026' },
      { label: 'Annual recurring revenue', value: '$300M', source: 'CEO LinkedIn, Feb 2026' },
      { label: 'Series C / valuation', value: '$250M raised / $2.45B', source: 'Menlo Ventures lead, Dec 2025' },
      { label: 'Free → Pro song ratio', value: '~10 free songs/day → ~500 songs/mo on Pro', source: 'credit math from pricing' },
    ],
    decisionAid: {
      pickIf:
        'You want a finished song with vocals in seconds — jingles, B-roll, demos, full releases. v5 vocals are the best in class and Pro is a clean commercial license.',
      skipIf:
        'You need fine arrangement control or DAW-style stems on the cheap (pick Udio); or you only need instrumentals (pick Stable Audio / AIVA); or you\'re a vocal purist who records real singers yourself.',
    },
  },
  {
    slug: 'udio',
    name: 'Udio',
    tagline: 'AI music generator favored by producers for its control and vocal expressiveness.',
    category: 'creative',
    license: 'freemium',
    selfHost: false,
    difficulty: 2,
    website: 'https://www.udio.com',
    tags: ['music', 'producers', 'control', 'audio'],
    pricing: 'Free credits; Standard from $10/mo',
    verdict:
      'The producer’s choice — more granular control than Suno, with strong vocal expressiveness.',
    description:
      'Udio is an AI music generator that competes directly with Suno. It is favored by music producers for offering more granular control over the generation process and expressive vocals. It is the pick when you want to shape a track rather than just get a finished result.',
    useCases: [
      'Produce tracks with section-level control',
      'Expressive vocal performances',
      'Iterate on stems and arrangements',
    ],
    pros: [
      'More control than consumer-focused tools',
      'Expressive, varied vocals',
      'Popular with working producers',
    ],
    cons: [
      'Steeper than Suno for casual users',
      'Slightly behind Suno on sheer vocal polish',
    ],
    models: ['Udio (proprietary)'],
    alternatives: ['suno', 'elevenlabs'],
  },

  // ---------------- Creative: 语音克隆/合成 ----------------
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    tagline: 'Ultra-realistic text-to-speech and voice cloning — the voice AI standard.',
    category: 'creative',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://elevenlabs.io',
    tags: ['voice', 'tts', 'voice-cloning', 'dubbing', 'audio'],
    pricing: 'Free tier; Starter ~$5/mo',
    verdict:
      'The de-facto standard for AI voice — if you’ve heard a convincing AI voice lately, it was probably ElevenLabs.',
    description:
      'ElevenLabs is the leading voice AI platform, offering ultra-realistic text-to-speech, instant voice cloning, dubbing, and (in 2026) music generation. Its voices are widely regarded as the most natural-sounding, and it powers TTS in countless products and agents.',
    useCases: [
      'Generate natural narration and voiceovers',
      'Clone voices for consistent characters',
      'Dub content across languages',
    ],
    pros: [
      'Best-in-class voice realism',
      'Instant voice cloning',
      'Broad language support and dubbing',
    ],
    cons: [
      'Voice cloning raises ethical/consent concerns',
      'Higher tiers needed for commercial scale',
    ],
    models: ['ElevenLabs (proprietary)'],
    alternatives: ['suno', 'vapi', 'retell'],
  },

  // ---------------- Creative: 视频/数字人 ----------------
  {
    slug: 'heygen',
    name: 'HeyGen',
    tagline: 'Create AI avatar videos and clone your voice for talking-head content at scale.',
    category: 'creative',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.heygen.com',
    tags: ['video', 'avatar', 'voice-cloning', 'talking-head'],
    pricing: 'Free credits; Creator from $24/mo',
    verdict:
      'The fastest way to a polished talking-head video without a camera — avatars look and sound convincing.',
    description:
      'HeyGen is an AI video platform that generates talking-head videos using customizable avatars and voice cloning. You script a video, pick an avatar (or your own cloned self), and get a polished video without filming. It is widely used for marketing, training, and social content.',
    useCases: [
      'Produce talking-head videos without filming',
      'Localize videos with translated avatar dialogue',
      'Scale personalized video outreach',
    ],
    pros: [
      'Convincing avatars and lip sync',
      'Personalized video at scale',
      'Fast turnaround vs. traditional filming',
    ],
    cons: [
      'Credits burn quickly on longer videos',
      'Uncanny-valley risk on close inspection',
    ],
    models: ['HeyGen (proprietary)'],
    alternatives: ['synthesia', 'runway', 'elevenlabs'],
  },
  {
    slug: 'synthesia',
    name: 'Synthesia',
    tagline: 'Enterprise AI video studio for training and corporate communications with avatars.',
    category: 'creative',
    license: 'commercial',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.synthesia.io',
    tags: ['video', 'avatar', 'enterprise', 'training', 'corporate'],
    pricing: 'From $29/mo',
    verdict:
      'The enterprise pick for corporate/training video — governance and scale that consumer tools lack.',
    description:
      'Synthesia is an AI video platform focused on enterprise use cases: training videos, internal comms, and corporate content generated from text using professional avatars. It emphasizes governance, brand consistency, and localization at scale, making it the default for L&D and corporate comms teams.',
    useCases: [
      'Generate training and onboarding videos',
      'Localized corporate comms at scale',
      'Consistent avatar-led brand content',
    ],
    pros: [
      'Built for enterprise governance and scale',
      'Professional, brand-safe avatars',
      'Strong multi-language localization',
    ],
    cons: [
      'No free tier',
      'More corporate than creative in tone',
    ],
    models: ['Synthesia (proprietary)'],
    alternatives: ['heygen', 'runway'],
  },
];

// 工具函数：按分类聚合
export function getAgentsByCategory(cat: Category): Agent[] {
  return agents
    .filter((a) => a.category === cat)
    .sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
}

export function getFeatured(): Agent[] {
  // 首页推荐：每个分类里取 star 最高的或最具代表性的
  return ['gemini-cli', 'aider', 'firecrawl', 'browser-use', 'n8n', 'autogpt']
    .map((slug) => agents.find((a) => a.slug === slug))
    .filter(Boolean) as Agent[];
}
