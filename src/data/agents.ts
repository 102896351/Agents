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
    quickStart: [
      'Open https://www.perplexity.ai — no account needed for a few basic searches per day.',
      'Type a natural-language question in the search box. Answers appear inline with numbered citation footnotes.',
      'Switch to "Pro Search" (toggle on the input bar) for multi-step reasoning — free tier gives ~3/day.',
      'Upload a PDF, image, or CSV and ask questions about it ("summarize", "extract table").',
      'Pro $20/mo unlocks 300+ Pro searches/day + file uploads; Max $200/mo adds unlimited Sonar-Pro reasoning and Labs dashboard generation.',
    ],
    sampleInput:
      'Question: "What\'s the current evidence that GLP-1 drugs reduce cardiovascular events in non-diabetic patients? Cite the 3 largest trials."',
    sampleOutput:
      'Summary (Pro Search):\n  "GLP-1 receptor agonists reduce MACE in non-diabetic patients with established cardiovascular disease. Three landmark trials:\n   [1] SELECT (2023, n=17,604, semaglutide 2.4 mg): 20% MACE reduction over 5 years.\n   [2] SOUL (2024, n=9,210, oral semaglutide 25 mg): 14% MACE reduction in CKD + T2D.\n   [3] SURMOUNT-MMO (2025, tirzepatide, n=12,000): 16% reduction; full data NEJM 2025.\n   Limitations: no head-to-head; benefit varies by baseline risk. [PMID refs inline]"\n10 footnotes, all real peer-reviewed sources. Click any to jump to the paper.',
    benchmarks: [
      { label: 'LM Arena Search ranking', value: '#1 tied with Gemini-2.5-Pro (Search Arena, Apr 2026)', source: 'Perplexity blog, 10K+ user votes' },
      { label: 'Monthly active users', value: '100M+', source: 'AIPress April 2026' },
      { label: 'Annual recurring revenue', value: '$450M / yr (March 2026, +50% MoM)', source: 'AIPress' },
      { label: 'Investors', value: 'Nvidia, SoftBank Vision Fund 2, NEA, IVP, Jeff Bezos' },
      { label: 'Citation count per Pro answer', value: '2–3× more references than Gemini or GPT search', source: 'Perplexity Apr 2026 report' },
    ],
    decisionAid: {
      pickIf:
        'You want the fastest path from a question to cited answers, especially for fact-checking, market research, or comparing current options.',
      skipIf:
        'You need peer-reviewed scientific depth — Consensus and Elicit pull more rigorously from real papers and rank evidence strength.',
    },
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
    quickStart: [
      'Sign up at elicit.com with your email or Google account — free tier gives a limited number of paper analyses per month.',
      'Type a research question (e.g., "Does meditation reduce anxiety in adults?"). Elicit returns a columnar table of real papers with extracted answers, sample sizes, and methodologies.',
      'Filter columns by sample size, intervention type, or outcome to drill into the evidence base.',
      'Click any row to read the source excerpt Elicit used, with the citation pinned to the sentence.',
      'Plus $12/mo and Pro $49/mo add more analyses per month, larger extracts, and alerts on new papers matching your query.',
    ],
    sampleInput:
      'Research question: "Does mindfulness-based therapy reduce anxiety symptoms in college students? Show me RCTs from the last 5 years."',
    sampleOutput:
      'Returned 18 RCTs as a structured table:\n  - Hofmann et al. (2018, meta-analysis, n=2,341) — Hedge\'s g = 0.42, p<.001\n  - Galante et al. (2021, Lancet Psychiatry, n=6,126) — effect size 0.32\n  - Zhang et al. (2024, BMC Public Health, n=1,847 students) — g = 0.51\n  ...\nInline excerpts link back to PDF pages. Click "Add to Library" to keep the search for later. 14/18 papers found on PubMed / Semantic Scholar verified.',
    benchmarks: [
      { label: 'Indexed papers', value: '200M+ across PubMed, Semantic Scholar, OpenAlex' },
      { label: 'Best fit', value: 'Literature reviews, systematic reviews, evidence synthesis' },
      { label: 'Plus tier', value: '$12/mo, ~10× the free analyses' },
      { label: 'Pro tier', value: '$49/mo, full-text PDFs, alerts, larger extracts' },
    ],
    decisionAid: {
      pickIf:
        'You\'re writing a literature review or systematic review and need to turn 50+ papers into a structured comparison table — Elicit was literally built for this workflow.',
      skipIf:
        'Your question is outside empirical research (engineering, CS architecture questions, creative writing) — Consensus or Perplexity serve better there.',
    },
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
    quickStart: [
      'Sign up at consensus.app with email or Google — free tier gives a handful of papers per query.',
      'Type a yes/no scientific question ("Does X cause Y?" or "Is X effective for Y?"). Consensus returns real, peer-reviewed studies that answer that exact question.',
      'Look at the "consensus meter" — it shows how strongly the literature agrees (yes / mostly yes / mixed / mostly no / no).',
      'Click any cited paper to jump to PubMed or the journal. Use Filters to narrow by year, study type, or sample size.',
      'Premium $9/mo unlocks unlimited searches, full-text PDFs, GPT-4-tier synthesis, and citation export.',
    ],
    sampleInput:
      'Question: "Does intermittent fasting reduce body weight in adults without diabetes?"',
    sampleOutput:
      'Consensus meter: YES (strong evidence)\n\nTop cited RCTs and meta-analyses:\n  - Trexler et al. (2020, JISSN): systematic review of 27 trials, mean Δweight = -1.3 kg\n  - Varady et al. (2022, Annu Rev Nutr): meta-analysis of 76 trials, -1.7 kg at 12 weeks\n  - Liu et al. (2024, NEJM): n=2,540, weight loss -3.1 kg at 24 weeks vs. control\n\nBottom-line: "Yes — intermittent fasting produces modest weight loss (~1.5–3 kg) versus unrestricted eating over 3–6 months. Effects plateau after 6 months. Long-term adherence is the main limitation."',
    benchmarks: [
      { label: 'Indexed papers', value: '200M+ (PubMed / Semantic Scholar / OpenAlex)' },
      { label: 'Domain coverage', value: 'Health, psychology, nutrition, biology, social science — strongest where RCTs exist' },
      { label: 'Premium price', value: '$9/mo (or $90/yr)', source: 'consensus.app pricing' },
      { label: 'Citation integrity', value: 'Every claim links to a real paper; no fabricated citations', source: 'consensus.app /pricing' },
    ],
    decisionAid: {
      pickIf:
        'You want to fact-check a scientific claim and see how strong the actual evidence is — Consensus\'s "consensus meter" is the fastest honesty check on the internet.',
      skipIf:
        'You need deep methodology analysis or full-text extraction across hundreds of papers — Elicit goes further on systematic reviews. For non-scientific queries, use Perplexity.',
    },
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
    models: ['Computer-Using Agent (CUA) — o3 vision-action model', 'Tools: built-in visual browser + text browser + terminal + API access'],
    alternatives: ['browser-use', 'firecrawl'],
    quickStart: [
      'Subscribe to ChatGPT Pro ($200/mo) — Operator is bundled in. Plus / Team access is rolling out.',
      'Open ChatGPT → use case → "Run tasks with Operator" → describe what you need (e.g. "Find the cheapest direct flight from SFO to Tokyo between Nov 10–17").',
      'Operator opens its own virtual browser, navigates with mouse + keyboard, asks you to confirm sensitive steps (payments, login).',
      'July 2026 update: rolled into the new "ChatGPT Agent" which combines Operator + Deep Research + ChatGPT into one tool that picks tools on its own.',
      'On benchmarks: Humanity\'s Last Exam 41.6% / 44.4% with parallel votes; BrowseComp 68.9% (SOTA).',
    ],
    sampleInput:
      'Task: "Browse the NFL schedule for the 2025 regular season and plan a route to see all 30 MLB teams ballparks, including hotels and a final CSV + map."',
    sampleOutput:
      'Operator + Deep Research workflow:\n  - ~10 min runtime in its virtual computer\n  - Output: Excel itinerary + interactive map visualization (slides-ready)\n  - Visible screen-recording of every browser action\n  - Tools chosen dynamically: visual browser for booking sites, text browser for long-form schedules, terminal for CSV cleanup',
    benchmarks: [
      { label: 'Humanity\'s Last Exam (single pass)', value: '41.6% (was 26.6% for Deep Research alone)', source: 'OpenAI July 2026' },
      { label: 'BrowseComp', value: '68.9% (SOTA; +17.4 vs Deep Research)', source: 'OpenAI July 2026' },
      { label: 'FrontierMath', value: '27.4% accuracy', source: 'OpenAI July 2026' },
      { label: 'Investment-banking analyst tasks', value: 'Matches / beats junior IB associates (1–3 yrs experience)', source: 'OpenAI demo, July 2026' },
      { label: 'Underlying model (May 2025)', value: 'CUA, built on o3', source: '至顶网' },
    ],
    decisionAid: {
      pickIf:
        'You already pay for ChatGPT Pro and want hands-off browser tasks — Operator (now ChatGPT Agent) gives you the best-in-class UX and is included in the $200/mo plan.',
      skipIf:
        'You want self-hosting, fine-grained control, or a programmatic API — Browser Use, Firecrawl, and Playwright give you building blocks at a fraction of the cost.',
    },
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
    quickStart: [
      'Python ≥ 3.11. `pip install browser-use` then `playwright install` (downloads Chromium).',
      'Set one LLM key in `.env` (e.g. `OPENAI_API_KEY=...`).',
      'Create an agent: `from browser_use import Agent; from langchain_openai import ChatOpenAI; agent = Agent(task="...", llm=ChatOpenAI(model="gpt-4o"))`; then `await agent.run()`.',
      'For persistent sessions, pass your own Playwright `BrowserContext` so cookies / localStorage survive between runs.',
      'Add a Gradio UI for visual debugging: `python examples/ui/gradio_demo.py`.',
    ],
    sampleInput:
      '```python\nfrom browser_use import Agent\nfrom langchain_openai import ChatOpenAI\nimport asyncio\n\nasync def main():\n    agent = Agent(\n        task="Find all h2 headings and all anchor links on https://example.com/docs",\n        llm=ChatOpenAI(model="gpt-4o"),\n    )\n    print(await agent.run())\n\nasyncio.run(main())\n```',
    sampleOutput:
      'Returns a dict like:\n  {"headings": ["Getting Started", "API Reference", "Pricing"],\n   "links": [{"text": "Docs", "href": "/docs"}, {"text": "Sign up", "href": "/signup"}]}\n~30 sec runtime. Browser screenshots + DOM dumps cached in the run log for replay.',
    benchmarks: [
      { label: 'GitHub stars', value: '55,000+', source: 'github.com/browser-use/browser-use' },
      { label: 'Underlying engine', value: 'Playwright + LangChain' },
      { label: 'Vision', value: 'Optional screenshot capture for vision-capable LLMs' },
      { label: 'Modes', value: 'Sync + async; can attach persistent browser context for logged-in flows' },
    ],
    decisionAid: {
      pickIf:
        'You want to build a custom web agent in Python with full control over the model, data, and orchestration — Browser Use is the canonical OSS layer for this.',
      skipIf:
        'You want an out-of-the-box experience with no code — Operator is simpler. For reading/scraping pages rather than interacting with them, Firecrawl is the better fit.',
    },
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
    quickStart: [
      'Try cloud: sign up at n8n.io → create a workspace → open the visual editor.',
      'Self-host: `docker run -it --rm --name n8n -p 5678:5678 docker.n8n.io/n8nio/n8n`, then open http://localhost:5678.',
      'Build a workflow: drag a trigger node (e.g. Webhook, Schedule) onto the canvas → drag an action (Slack, Gmail, HTTP) → draw a line between them.',
      'For AI: add an "AI Agent" node wired to the LangChain integration; point at any OpenAI-compatible model.',
      'For custom code: drop in a Code node and write JavaScript / Python; access upstream data with $json or item.json.',
    ],
    sampleInput:
      'Trigger: "Webhook" (POST /webhook/inbound-email)\nAction 1: HTTP node → POST to Gmail API to fetch unread\nAction 2: AI Agent node → "Summarize each unread email; classify as billing/support/sales"\nAction 3: Switch node → routes by category\nAction 4a (billing): Slack post to #billing\nAction 4b (support): Create Zendesk ticket\nAction 4c (sales): Append to Google Sheet',
    sampleOutput:
      'Workflow runs ~6 sec per inbound payload. Real-time visual execution logs. 0 manual touches. Easy to inspect what the AI decided; if a node mis-categorizes, you can add a "Reviewer" agent before the Switch and gate it on a confidence threshold.',
    benchmarks: [
      { label: 'GitHub stars', value: '186,000+', source: 'github.com/n8n-io/n8n' },
      { label: 'Integrations', value: '400+ pre-built nodes' },
      { label: 'License', value: 'Sustainable Use License (free self-host; restrictions on SaaS resale)' },
      { label: 'Templates', value: '900+ ready-made workflow templates' },
      { label: 'Origin', value: 'Founded 2019 in Berlin by Jan Oberhauser; name = "nodemation"' },
    ],
    decisionAid: {
      pickIf:
        'You want to glue SaaS tools with custom logic and stay self-hostable for compliance / cost — n8n is the most flexible open-source automation platform.',
      skipIf:
        'You want a managed, zero-ops cloud experience with the broadest catalog — Zapier (paid) wins on ecosystem. If you want a visual canvas with a lighter learning curve and pure cloud, Make is friendlier.',
    },
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
    quickStart: [
      'Sign up at zapier.com (free tier includes 100 tasks/month and single-step Zaps).',
      'Click "Agents" → "Create your first agent" → describe what it should do in plain English.',
      'Connect apps: Zaps already linked to your account work automatically; connect Slack / Gmail / HubSpot with one click each.',
      'Customize the agent\'s "Tools": pick actions (e.g. "Create HubSpot Contact", "Send Gmail") and the agent decides when to invoke them.',
      'Test in the playground (~10 free trial runs); turn on for production.',
      'Plans: Free / Starter $20/mo (750 tasks); Professional $49/mo (2k tasks); Team $99/mo (10k + shared agents).',
    ],
    sampleInput:
      'Agent: "Inbound Lead Qualifier"\nGoal: "When a new lead is added to HubSpot (via webhook), enrich with Clearbit, score by company size, send a personalized Slack DM with the enrichment. Skip leads with < 20 employees. Daily report to #sales at 8am."\n\nTools:\n  - hubspot_get_contact\n  - clearbit_enrich\n  - slack_send_dm\n  - slack_post_channel_message\n\nTrigger: HubSpot webhook',
    sampleOutput:
      'Day-7 production behavior:\n  - Inbound leads processed: 184\n  - Enriched successfully: 168 (91.3%)\n  - Auto-skipped (<20 employees): 32 (17.4%)\n  - Slack DMs sent: 152\n  - Daily summary posted to #sales at 08:00 — used 0 of SDR time\nEdge cases the agent flagged (auto-saved as "needs human review"):\n  - 6 leads with conflicting emails across HubSpot / Clearbit\n  - 2 spam-looking contacts (gmail.com + .edu domain)\nHuman-in-loop saved: ~11 hours/week vs manual enrichment + DM',
    benchmarks: [
      { label: 'Integrations', value: '7,000+ apps (industry-leading)', source: 'Zapier integration directory' },
      { label: 'Plans', value: 'Free / Starter $20 / Professional $49 / Team $99', source: 'Zapier pricing 2026' },
      { label: 'Task model', value: 'Per-task metered; agents use bundled tasks', source: 'Zapier docs' },
      { label: 'Agent GA', value: 'Late 2024; agents available in paid plans', source: 'Zapier product' },
      { label: 'Build-code escape hatch', value: 'Custom Code (JS / Python) step inside agent', source: 'Zapier docs' },
    ],
    decisionAid: {
      pickIf:
        'Your existing automation stack already runs on Zapier (you have hundreds of Zaps); adding Agents layers AI on top of proven integrations and shortens the learning curve.',
      skipIf:
        'You need complex branching/looping (Make or n8n are stronger), you need self-hosting (n8n is the standard), or you\'re a non-Zapier user not needing its 7,000-app reach.',
    },
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
    quickStart: [
      'Sign up at make.com — Free tier gives 1,000 ops/month (~10 simple scenarios).',
      'Click "Create a new scenario" → drag the first app\'s module onto the canvas → connect apps with bubbles + lines (visual flow).',
      'Choose scenario type: Scheduled, Instant (webhook), or App-event triggered.',
      'Add modules: data transforms (filter, router, iterator), AI via the "OpenAI" module or HTTP-callable text generation.',
      'Test step-by-step ("Run Once") → schedule → enable.',
      'Pricing: Core $9/mo (10k ops); Pro $16/mo (10k+); Teams $29/mo; Enterprise custom. Operations = actions, not runs.',
    ],
    sampleInput:
      'Scenario: "Stripe → NetSuite Monthly Close Sync"\nTrigger: Schedule, 1st of the month at 02:00 UTC\n\nModules (12 total):\n  1. Stripe: list_charges(date_window)\n  2. Filter (amount > 0; status = "succeeded")\n  3. Iterator (process each charge)\n  4. HTTP: Get customer info from Salesforce by Stripe customer ID\n  5. NetSuite: search_transactions_external_id\n  6. Router:\n     - Branch A: no match → NetSuite create_invoice\n     - Branch B: match → NetSuite update_invoice\n  7. Aggregator (group by customer)\n  8. Error handler module: Slack #finance-ops alert on failures\n  9. Set variable (count of sync successes / failures)\n  10. Gmail: email finance@acme.com with monthly summary\n\nError tolerance: max retries = 3, pause on error.',
    sampleOutput:
      'Run on 2026-07-01 02:00 UTC:\n  - Stripe charges processed: 4,820\n  - Filtered to succeeded: 4,801\n  - Created invoices in NetSuite: 142\n  - Updated existing invoices: 4,659\n  - Failed: 19 (all sandboxed in error handler; Slack alert dispatched, finance team triaged manually)\n  - Total ops used: ~14,460 (would have exceeded 10k Core cap; needs Pro or Teams at this volume)\n\nCompared with manual monthly close: 4 days → 30 minutes + 1 hour of failure triage.',
    benchmarks: [
      { label: 'Plans', value: 'Free; Core $9/mo; Pro $16/mo; Teams $29/mo; Enterprise custom', source: 'Make pricing 2026' },
      { label: 'Integrations', value: '1,500+ apps + HTTP / Webhook / SMTP for anything else', source: 'Make integration directory' },
      { label: 'Visual canvas', value: 'Drag-drop modules with full branching / loops / error handling', source: 'Make product' },
      { label: 'Free ops tier', value: '1,000 ops / month', source: 'Make pricing 2026' },
      { label: 'API', value: 'Public REST API + scenario webhooks for custom integration', source: 'Make docs' },
    ],
    decisionAid: {
      pickIf:
        'You build complex multi-step automations with branching / loops / error handling and prefer a visual canvas over Zapier\'s linear step list. Cheaper than Zapier at high volumes.',
      skipIf:
        'Your automations are simple one-shots (Zapier wins for non-technical setup + simple flows), or you need self-hosting (n8n is the default). For pure AI agents without visual flow, try Lindy or Zapier Agents.',
    },
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
    quickStart: [
      'Install: `pip install langgraph langchain-openai`.',
      'Define state with a TypedDict: { question, documents, route, generation, rewrite_count }.',
      'Add nodes as plain Python functions: router_node, retriever_node, grader_node, rewriter_node, generator_node.',
      'Build the graph: `workflow = StateGraph(State)`, add nodes + edges, then `add_conditional_edges` for the router / grader branches.',
      'Compile: `app = workflow.compile()` and call `app.invoke({...})` to run.',
    ],
    sampleInput:
      'Input: "What\'s our company\'s data retention policy for EU customers?"\nGraph nodes: router → [vector|graph|web|direct] → grader → [generate | rewrite (≤3) | web-fallback] → hallucination-check → END.',
    sampleOutput:
      ' 1. router → "vector" (factual / static knowledge)\n 2. vector_node → 4 docs from internal policy repository\n 3. grader → 3/4 docs graded "relevant"\n 4. generator → answers from those 3 docs only\n 5. hallucination_check → "grounded: yes" → END\nFinal answer with inline citations to each supporting document. ~6 LLM calls, no infinite loop.',
    benchmarks: [
      { label: 'GitHub stars', value: '12,000+', source: 'github.com/langchain-ai/langgraph' },
      { label: 'SDKs', value: 'Python and TypeScript' },
      { label: 'Key advantage', value: 'Cycles + persistent state — full DAG control' },
      { label: 'Origin', value: 'LangChain team; spun out as production-grade layer in 2025' },
    ],
    decisionAid: {
      pickIf:
        'You need fine-grained control over cycles, retries, human-in-the-loop, or persistent state — LangGraph is the graph-of-truth for serious agent workflows.',
      skipIf:
        'You just want "a team of agents" with minimal mental model — CrewAI is faster. For one-step tasks you can do in a Jupyter cell, you probably don\'t need a graph at all.',
    },
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
    quickStart: [
      'Install: `pip install crewai crewai-tools`.',
      'Pick an LLM: `from langchain_openai import ChatOpenAI` (or Anthropic / OpenRouter / Ollama) and load your API key.',
      'Define agents: each Agent has role, goal, backstory, optional tools, and an LLM.',
      'Define Tasks with explicit expected_output, then bind them to a Crew with process=sequential or hierarchical.',
      'Run: `crew.kickoff(inputs={"topic": "..."})`. Verbose=True prints every thought and tool call.',
    ],
    sampleInput:
      'Task: "Draft a 600-word blog post on the current state of multi-agent systems, citing 3 papers from 2025–2026."',
    sampleOutput:
      'Crew execution (~3 min, 3 agents):\n  1. Researcher → 5 candidate papers pulled + 1-sentence summaries [3 min]\n  2. Writer → 600-word Markdown draft with citations, intro / 3 sections / conclusion [2 min]\n  3. Editor → fact-check pass, source links pinned to each claim [1 min]\nFinal post saved to ./draft.md. 18 LLM calls, ~9,000 tokens.',
    benchmarks: [
      { label: 'GitHub stars', value: '44,700+', source: 'github.com/joaomdmoura/crewAI, April 2026' },
      { label: 'License', value: 'MIT' },
      { label: 'Certified developers', value: '~100,000 community', source: 'Tencent Cloud article' },
      { label: 'Process modes', value: 'Sequential / Hierarchical / Custom' },
    ],
    decisionAid: {
      pickIf:
        'You want the fastest path to a multi-agent system that "just works" — CrewAI\'s role-task-crew abstraction is the easiest mental model on the market.',
      skipIf:
        'You need fine-grained control over graph execution, cycles, and conditional retries — LangGraph gives you a true state-machine. AutoGen is also better for open-ended research agents.',
    },
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
    quickStart: [
      'Install: `pip install pyautogen` (or `autogen-agentchat`).',
      'Set your `config_list = [{"model": "gpt-4o", "api_key": "..."}]`.',
      'Create agents: `AssistantAgent` for the LLM and `UserProxyAgent` to execute code / human input.',
      'Spin up a GroupChat if you want 3+ agents collaborating; otherwise `.initiate_chat(assistant, message=...)` for one-to-one.',
      'Enable Docker in `code_execution_config` if your agents will run code, otherwise use a sandboxed work_dir.',
    ],
    sampleInput:
      'Task: "Write a Python script that downloads the top 10 trending repos from GitHub and saves them to CSV. Test it."',
    sampleOutput:
      'Assistant generates the script (60+ lines, uses requests + pandas), explains the logic, then runs it via UserProxyAgent:\n  Verified: 10 repos saved to top_repos.csv. Passes a quick AST lint. AutoGen\'s enable_docker was left off so the script ran inside a sandboxed work_dir.',
    benchmarks: [
      { label: 'GitHub stars', value: '38,000+', source: 'github.com/microsoft/autogen' },
      { label: 'License', value: 'MIT + Creative Commons for code-execution docs' },
      { label: 'Successor', value: 'AutoGen functionality merged into Microsoft Agent Framework (Oct 2026)', source: 'Microsoft Devblogs' },
      { label: 'Patterns', value: 'AssistantAgent / UserProxyAgent / GroupChat / Nested chat / Docker-isolated execution' },
    ],
    decisionAid: {
      pickIf:
        'You want Microsoft\'s research-grade multi-agent patterns with deep human-in-the-loop and code-execution safety — especially for academic or open-ended conversational workflows.',
      skipIf:
        'You want a quicker on-ramp — CrewAI is the most approachable. For production graph workflows with cycles, LangGraph is more mature. AutoGen is now part of Microsoft Agent Framework going forward.',
    },
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
    quickStart: [
      'Sign up at manus.im with email → enter your invite code (or join the waitlist; in 2026 invite codes briefly traded for ~$25k on secondary markets).',
      'Type a goal in plain English: "Plan a 7-day Japan trip with daily budget, hotel zones, and an Osaka street-food list → CSV."',
      'Manus breaks the task down into steps, runs browser / code / data workflows in a sandboxed cloud environment, and streams progress.',
      'When complete, you get the deliverable directly: Excel, slide deck, working website, or PDF report.',
      'Bench the GAIA benchmark (general AI assistant eval) — Manus hit SOTA across 3 difficulty levels in 2025.',
    ],
    sampleInput:
      'Goal: "Build a TypeScript + React prototype for a personal habit-tracker. Include localStorage persistence and a streak counter, then zip and host it on a shareable URL."',
    sampleOutput:
      'Manus deliverables:\n  - /src/App.tsx (React + TypeScript, persistence via localStorage)\n  - /src/components/StreakBadge.tsx\n  - 1-page README.md\n  - 1 short demo GIF (auto-recorded browser interaction)\n  - Public share URL: https://share.manus.im/abc123\nTotal runtime: ~8 minutes. 23 sub-steps visible in the run log.',
    benchmarks: [
      { label: 'GAIA benchmark (Mar 2025 launch)', value: 'SOTA across easy / medium / hard levels', source: 'Manus launch benchmark' },
      { label: 'User-cost (Beta pricing)', value: 'Starter $39/mo (3,900 credits + 2 concurrent); Pro $199/mo (19,900 credits + 5 concurrent + high-effort mode)', source: 'Manus pricing blog 2026' },
      { label: 'Architecture', value: 'Multiple-agent system: planning, execution, validation agents running in a sandboxed cloud VM' },
      { label: 'Reach', value: '40+ use-case categories (recruiting, finance, real estate, education, research)' },
    ],
    decisionAid: {
      pickIf:
        'You want to hand off a complete deliverable — research, code prototype, spreadsheet — rather than write the steps yourself, and you can stomach the Beta-tier pricing.',
      skipIf:
        'You need a programmatic API or want to deeply tune the agent pipeline — Manus is closed-source. For code-specific long-horizon tasks, Devin is more engineering-focused. For pure coding-assist while you write, prefer Cursor or Cline.',
    },
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
    quickStart: [
      'Open devin.ai → request access (Cognition drips invites; Team plan from $500/mo).',
      'Add the GitHub repo you want Devin to work on, then create a task: "Fix bug #123, write tests, open a PR."',
      'Devin spins up its own IDE + browser, plans the work, edits files in a branch, runs tests, and opens a PR.',
      'Watch the live stream or let it run async — ping you when the PR is up.',
      'Review the PR diff, leave comments, ask Devin to address them in the same session.',
    ],
    sampleInput:
      'Task: "In the auth-service repo, refactor session-management from in-memory to Redis-backed with sliding-window expiry. Add integration tests."',
    sampleOutput:
      'PR #847 opened with:\n  - src/session/store.ts (new Redis client wrapper)\n  - src/session/manager.ts (refactor — TTL now 30min sliding)\n  - tests/integration/session.test.ts (new — 8 cases incl. expiry & race)\n  - CHANGELOG entry, migration runbook\nDevin ran lint + 312 tests; CI green. Comment addressed your feedback within the same session.',
    benchmarks: [
      { label: 'Origin', value: 'First widely-publicized "AI engineer" (SWE-bench marketing 2024)', source: 'Cognition AI' },
      { label: 'Pricing', value: 'Team from $500/mo; Enterprise custom (often $2k+/seat/yr)' },
      { label: 'Strength', value: 'Long, multi-hour tasks vs. single-file inline edits' },
      { label: 'Workflow', value: 'Full IDE + browser + shell in one session; own branch per task' },
    ],
    decisionAid: {
      pickIf:
        'Your team has a backlog of long-running, well-specified coding tickets and you want to hand them off to an autonomous agent — Devin is the original and most-tested "AI engineer" for that workflow.',
      skipIf:
        'You primarily want inline autocomplete or small edits — Cursor, Copilot, and Claude Code are way faster. Devin is also expensive compared to alternatives, so unless you trust it to close tickets end-to-end, it\'s overkill.',
    },
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
    quickStart: [
      'Install the "Cody" extension from Sourcegraph in VS Code or JetBrains.',
      'Sign in with Sourcegraph.com (free) or connect your enterprise Cody instance.',
      'Run "Cody: Sign In" → pick your LLM provider → start with autocomplete.',
      'Chat with @-mention to attach files: `@src/api/users.ts explain the auth flow here`.',
      'For monorepo queries: open Sourcegraph.com, point it at your GitHub org — Cody then indexes your full codebase and answers questions across it.',
    ],
    sampleInput:
      'Workspace: yfinance (Python, ~10k files across 200 repos).\n\nChat: "@workspace where is the Ticker.history() method defined and which other repos depend on it?"',
    sampleOutput:
      'Cody answer:\n  - "Ticker.history() is defined in yfinance/ticker.py:142 (also re-exported in __init__.py:18). 14 other internal services in the org import it — most via `from yfinance import Ticker`. Full dep graph attached."\nInline citations jump to each repo file. No hallucinated paths.',
    benchmarks: [
      { label: 'Best fit', value: 'Large monorepos and cross-codebase Q&A' },
      { label: 'Pricing (Pro)', value: '$9/mo (individual); Enterprise on-prem available' },
      { label: 'Knowledge', value: 'Indexes entire GitHub / GitLab / Bitbucket orgs in the background' },
      { label: 'Top plan', value: 'Pro: full chat + multi-file edits + custom commands' },
    ],
    decisionAid: {
      pickIf:
        'You work in a big monorepo (or many repos) and need cross-file context that inline assistants can\'t see — Cody\'s codebase-wide index is the differentiator.',
      skipIf:
        'You mostly edit single files in a single repo — Cursor or Copilot give you autocomplete + chat with faster latency. For self-hosting / privacy, look at Continue or Tabnine.',
    },
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
    quickStart: [
      'Sign up at lovart.ai with Google/email — free tier gives 30 image credits + 3 campaign experiments.',
      'Pro $10/mo or Studio $40/mo unlock higher resolutions, brand-kit uploads, and batch exports.',
      'Click "New Project" → describe the brief in natural language ("launch a sustainable skincare brand in EU, Gen Z, 6 social assets + 1 hero image").',
      'Lovart returns a moodboard, draft variations, and a "Kanban" of next steps you can reorder.',
      'Iterate via chat ("make the hero shot warmer", "swap the model") — the agent keeps context across rounds.',
      'Export individual assets or the full kit as a ZIP; Pro can push to Figma / Google Drive.',
    ],
    sampleInput:
      'Brief: "Launch campaign for a boutique hotel group, 4 properties in Portugal. Mood: Mediterranean minimalism, soft morning light, neutral palette with terracotta accents. Deliverables: 1 hero key art per property (4 total), 6 Instagram carousel slides, 3 email banners."\n\nBrand kit (uploaded): logo SVG, primary font "Geist", colors #F4ECD8 #BC4B51 #5B5E70.\n\nConstraints: must show no human faces, all photos in 16:9 horizontal crop, all text captions in English.',
    sampleOutput:
      '"Portugal Mornings" campaign — 14 assets generated in ~22 minutes (5 iterations across the agent).\n\n  Hero key art (4 versions / property):\n    + Property 1: rooftop pool at 06:30, terracotta parasol, sea haze — picked v2\n    + Properties 2–4: similar morning motif, slight lens variation\n  Carousel (6 slides): "Welcome / Rooms / Cuisine / Spa / Excursions / Book"\n    + each slide kept brand color palette\n    + no faces throughout\n  Email banners (3): header, body, footer/CTA\n\nExport: 14 PNGs + 4 layered PSDs in master folder (Pro feature).\nTime-to-deliverable reduced from ~3 days to 4h.',
    benchmarks: [
      { label: 'Founded', value: '2024 (ex-Stable Diffusion team)', source: 'The Information' },
      { label: 'Pricing', value: 'Free; Pro $10/mo; Studio $40/mo', source: 'Lovart pricing 2026' },
      { label: 'Assets per brief', value: '~14 assets / 22 min (typical)', source: 'Lovart user benchmarks' },
      { label: 'Export formats', value: 'PNG, JPG, PSD, MP4 (Pro)', source: 'Lovart' },
      { label: 'Brand kit', value: 'Colors, fonts, logos — applied across generations', source: 'Lovart product' },
    ],
    decisionAid: {
      pickIf:
        'You\'re a designer or marketer who wants an agent that handles the workflow end-to-end — research, moodboard, drafts, iterations, exports — instead of single-image generation.',
      skipIf:
        'You only need one quick image; Midjourney / FLUX is overkill-free for that. For pure talking-head video avatars, HeyGen or Synthesia are the closer fit.',
    },
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
    quickStart: [
      'Open ChatGPT → click "Codex" in the sidebar (Plus / Pro / Team tiers).',
      'Connect your GitHub repo (one-time OAuth), pick a branch, click "Create task".',
      'Type the task: "Add unit tests for src/orders/ — open a PR if lint + tests pass."',
      'Watch the Cloud VM logs live, or background it and check the PR when ready.',
      'Stack multiple tasks — Codex runs them in parallel sandboxes, so 6 PRs land roughly at once.',
    ],
    sampleInput:
      'Tasks submitted in one batch:\n  - "Tighten input validation in src/api/users/* and add zod schemas"\n  - "Replace lodash.get with native optional chaining across utils/"\n  - "Update package.json to drop unused deps"',
    sampleOutput:
      '~15 min later, 3 PRs opened:\n  - #451: zod validation (+12 files, all tests pass)\n  - #452: lodash cleanup (-420 lines across 38 files, no behavior change)\n  - #453: dep cleanup (-340 KB bundle, lockfile regenerated)\nEach PR has its own focused diff and a one-line summary from Codex.',
    benchmarks: [
      { label: 'Inclusion', value: 'Bundled with ChatGPT Plus ($20) / Pro ($200) / Team' },
      { label: 'Sandbox isolation', value: 'Each task runs in its own cloud VM — no local env' },
      { label: 'Parallelism', value: 'Multiple tasks at once across separate branches' },
      { label: 'Underlying model', value: 'codex-1 (OpenAI custom); some GPT-4o class fallback' },
    ],
    decisionAid: {
      pickIf:
        'You already pay for ChatGPT Plus/Pro and have a backlog of small coding tasks — Codex runs them in parallel while you keep coding locally.',
      skipIf:
        'You want local execution and full control over the model — Aider, Cline, or Claude Code are local-first. For deep reasoning on long agent tasks, Devin is the deeper (and pricier) pick.',
    },
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
    quickStart: [
      'Install: `npm install -g @google/gemini-cli` (or `brew install gemini-cli` on macOS).',
      'Run `gemini` in any directory → first run opens a Google OAuth flow for free Gemini API access.',
      'Free tier: 60 requests / minute, 1,000 requests / day on Gemini 2.5 Flash — no credit card required.',
      'Type `gemini "explain this repo and add a Vitest suite for src/orders.ts"`. It reads files, edits code, runs shell.',
      'For Google Cloud Workflows / Firebase: `gemini extensions install <name>` adds first-party integrations.',
    ],
    sampleInput:
      '"Refactor src/db/connection.ts to use a connection pool with PgBouncer-compatible settings, and add retry-with-backoff around query errors."',
    sampleOutput:
      'Gemini CLI:\n  - Reads src/db/connection.ts\n  - Proposes pgbouncer-friendly pool + exponential backoff helper\n  - Writes the patch in-place\n  - Runs `pnpm test` to verify (uses Gemini Pro if the patch is non-trivial)\nPatch diff + test output. Free-tier request counter ticks.',
    benchmarks: [
      { label: 'GitHub stars', value: '35,000+', source: 'github.com/google-gemini/gemini-cli, May 2026' },
      { label: 'License', value: 'Apache-2.0' },
      { label: 'Default model', value: 'Gemini 2.5 Pro / 2.0 Flash' },
      { label: 'Free tier', value: '60 req/min, 1,000 req/day on Gemini 2.5 Flash (no credit card)' },
      { label: 'Context window', value: 'Up to 1M tokens on Gemini 2.5 Pro — biggest in the open-source CLI space' },
    ],
    decisionAid: {
      pickIf:
        'You want a real terminal agent that\'s free out of the box, with the largest context window in the OSS CLI space and direct Google Cloud integration — Gemini CLI is the new default for many.',
      skipIf:
        'You live exclusively in Claude or other frontier models and don\'t need Google Cloud — Claude Code will feel sharper on most coding tasks today. Gemini models still trail Claude on long reasoning, so verify on your own workload.',
    },
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
    quickStart: [
      'Cloud: sign up at firecrawl.dev → grab the API key from the dashboard.',
      'Self-host: clone https://github.com/firecrawl/firecrawl, copy .env.example to .env, fill in OPENAI_API_KEY, then `docker compose up -d`.',
      'Python SDK: `pip install firecrawl-py`; Node: `npm i @mendable/firecrawl-js`.',
      'Single page: `client.scrape("https://example.com", formats=["markdown", "html"])` — get clean Markdown + structured JSON.',
      'Crawl: `client.crawl("https://docs.example.com", limit=100)` — walks subpages, returns Markdown; AI extraction uses your schema (Pydantic / Zod).',
    ],
    sampleInput:
      '```python\nfrom firecrawl import Firecrawl\nfrom pydantic import BaseModel\n\nclass Product(BaseModel):\n    name: str\n    price: float\n    in_stock: bool\n\nclient = Firecrawl(api_key="fc-...")\nresult = client.extract(\n    urls=["https://shop.example.com/catalog"],\n    prompt="Extract all products with name, price, availability",\n    schema=Product,\n)\nprint(result.json())',
    sampleOutput:
      '```json\n[\n  { "name": "Wireless Earbuds Pro", "price": 89.99, "in_stock": true },\n  { "name": "USB-C Hub 7-in-1",  "price": 39.50, "in_stock": true },\n  { "name": "Mechanical Keyboard", "price": 149.00, "in_stock": false }\n]\n```\nOne LLM call to a structured Pydantic schema, returns typed JSON — perfect for RAG pipelines.',
    benchmarks: [
      { label: 'GitHub stars', value: '95.5k', source: 'github.com/firecrawl/firecrawl, March 2026' },
      { label: 'Output formats', value: 'Markdown, HTML, JSON, PDF, screenshots' },
      { label: 'JS rendering', value: 'Built-in Playwright fallback for SPA / dynamic sites' },
      { label: 'License', value: 'AGPL-3.0 (self-host OK; SaaS resellers restricted)' },
    ],
    decisionAid: {
      pickIf:
        'You\'re building a RAG pipeline or research agent that needs to ingest web pages reliably — Firecrawl is the de facto choice and the SDK is genuinely one-line.',
      skipIf:
        'You need browser automation (clicking, filling forms) — for that, Playwright or Browser Use are the right layer. Firecrawl can be combined with either.',
    },
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
    quickStart: [
      'Go to notebooklm.google.com and sign in with a Google account — free tier is fully functional.',
      'Create a new Notebook, then add sources: PDFs, Google Docs, YouTube links, web URLs, or pasted text. Each notebook holds up to 50 sources.',
      'Ask questions — every answer cites the exact source paragraph with a footnote link, so no hallucination outside your material.',
      'Open the Studio panel → "Audio Overview" → wait ~5 min → you get a 5–15 min podcast-style conversation between two AI hosts summarizing your sources.',
      'Try "Interactive Mode" in audio to interrupt the hosts with a live question. Plus / AI Ultra adds video overviews, mind maps, and bigger source limits.',
    ],
    sampleInput:
      'Notebook: "Q3 earnings analysis"\nSources: 4 PDFs of quarterly earnings reports (Apple, Microsoft, Nvidia, Alphabet)\n\nPrompt: "Compare revenue growth and AI segment commentary across all four companies. Surface the most surprising year-over-year changes."',
    sampleOutput:
      'Citation-grounded answer:\n  "Apple revenue +6% YoY ($94.9B), Services accelerating; AI commentary limited.\n  Microsoft +16% YoY ($65.6B), Azure +29% with explicit AI revenue disclosure [Microsoft p.4].\n  Nvidia +122% YoY ($35.1B) on data-center [Nvidia p.2].\n  Alphabet +15% YoY ($88.2B), Google Cloud +35% on AI demand [Alphabet p.6].\n  Most surprising: Nvidia data-center growth +162% [Nvidia p.3]."\n4 footnotes, each linking to the exact page in the PDF.\n\nAudio Overview auto-generated (8 min): "Two hosts discussing the earnings — one focused on AI infrastructure spend, one on consumer behavior signals. Links to sources shown in the transcript."',
    benchmarks: [
      { label: 'Source-grounding fidelity', value: 'Strictly grounded in your sources — no hallucination outside', source: 'Google AI docs' },
      { label: 'Audio Overview length', value: '~5–15 min per notebook, ~350 years of audio generated since launch', source: 'Google I/O 2026 announcement' },
      { label: 'Source formats', value: 'PDF, Google Docs, Slides, web URLs, YouTube, audio files, Markdown', source: 'notebooklm.google.com' },
      { label: 'AI Plus / Ultra extras', value: 'Video Overview (Veo 2), Mind Maps, larger notebooks', source: 'Google One AI Plus' },
    ],
    decisionAid: {
      pickIf:
        'You want to deeply understand a fixed set of sources — research papers, interview transcripts, product docs — and you value citations over creative generation.',
      skipIf:
        'You want open-ended web research or "answer this with citations from anywhere" — Perplexity is the better fit. NotebookLM\'s strength is exactly the opposite: it\'ll refuse to answer outside what you uploaded.',
    },
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
    quickStart: [
      'Sign in to Salesforce → App Launcher → "Agentforce Builder" (added to your org with Einstein AI enabled).',
      'Einstein AI + 1 Agentforce user license = roughly $2 per conversation billed at runtime.',
      'Open the "Agent Builder" canvas; pick a template (Sales Coach, Service Agent, SDR, Personal Shopper) or start blank.',
      'Drop in "Topics" (what the agent handles) → Actions (Flows + Apex invocable methods + HTTP calls).',
      'Connect Data Cloud / Knowledge articles so the agent pulls the right context and grounds its responses.',
      'Test in the "Agentforce Testing Center" with synthetic conversations, then deploy to a Service Cloud channel (chat, SMS, voice).',
    ],
    sampleInput:
      'Topic: "Order Status" (Service)\nDefinition:\n  Trigger phrases: "where\'s my order", "tracking number", "check delivery"\n  Instructions:\n    - Always ask for order number (format: ORD-XXXX).\n    - Pull order from Commerce Cloud via getOrderStatusById action.\n    - If ETA is within 2 business days, do NOT mention delays.\n    - For damaged-on-arrival, open a "Damaged Shipment" case via Flow.\n\nAction: getOrderStatusById\n  Input: { orderId: string }\n  Output: { eta: date, courier: string, status: enum }\n\nChannel: Service Cloud Web Chat (production)\nEscalation rule: if customer sends "supervisor" or "manager" → route to human queue "Tier-2 NA"',
    sampleOutput:
      'Day-1 rollout (Service Cloud, NA queue):\n  Conversations routed: 2,310\n  Resolved without human: 1,820 (78.8%)\n  Avg handle time: 1m 42s (was 6m 12s with full human)\n  CSAT: 4.51 / 5\n  Escalations to Tier-2: 290 (12.5%)\n  Per-conversation cost: $1.95 average\n  Hidden catch: 8% of conversations triggered Flow regressions from a Salesforce Spring \'26 release — re-ground your Topics when the next release ships.',
    benchmarks: [
      { label: 'Launched', value: 'Dreamforce 2024; GA since Feb 2025', source: 'Salesforce' },
      { label: 'Per-conversation pricing', value: 'From $2.00 / conversation', source: 'Salesforce pricing 2026' },
      { label: 'Slack-native', value: 'Build agents inside Slack channels since 2025', source: 'Salesforce+Slack' },
      { label: 'Atlas Reasoning Engine', value: 'New reasoning layer shipped Feb 2026', source: 'Salesforce Dreamforce 2025' },
      { label: 'Einstein Trust Layer', value: 'Zero data retention by default; Data Cloud grounding', source: 'Salesforce security brief' },
    ],
    decisionAid: {
      pickIf:
        'Your revenue, service, and contact-center workflows already live in Salesforce. Agentforce eliminates integration cost and inherits your existing security model.',
      skipIf:
        'You want a CX platform built for non-Salesforce stacks (Sierra is stack-agnostic), or you want pricing per resolved ticket with analytics out of the box (Decagon). For pure voice automation at scale, Vapi or Retell.',
    },
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
    quickStart: [
      'Sign up at lindy.ai with Google or email — free tier gives 400 task credits/month (~200 AI runs).',
      'Open the Lindy Builder; pick a starting template (Email Triage, Meeting Scheduler, Lead Enricher, Slack Summarizer).',
      'Customize in plain English: e.g. "When an email arrives with the subject Invoice, extract the dollar amount and post it to #finance Slack."',
      'Add Skills (Gmail, Slack, Calendar, Webhook, HubSpot) — each Skill is one click; you can chain 10+ per Lindy.',
      'For more control: use the "Code" step to write 1-line JavaScript — Lindy runs it inline, no server setup.',
      'Pro $49/mo adds credit packs; Enterprise for SSO / SOC 2 / HIPAA / multi-seat admin.',
    ],
    sampleInput:
      'Lindy name: "Inbound Lead Sorter"\nTriggers: "When a new row is added to Airtable \'Inbound\'"\nSteps:\n  1. Look up company name (clearbit-enrich)\n  2. Score fit (rules: employees > 50 → 3, < 50 → 1)\n  3. If score >= 2: draft personalized reply using the contact\'s website tagline (claude-step)\n  4. Slack-DM the AE on call with the lead details + draft reply\n  5. Update Airtable status = "queued"\n  6. Schedule a follow-up reminder 48h later if no AE response\n\nTools / Skills used: Airtable, Clearbit, Slack, Gmail (draft only), Calendar',
    sampleOutput:
      '9 inbound leads/day processed avg.\nOf those:\n  - 6 auto-drafted replies (score ≥ 2)\n  - 3 routed to manual queue (score = 1, ~33% of volume)\n  - 7 / 6 replied to by AE within 4 hours\n  - 2 closed-won from auto-drafted replies in first 30 days\nCredits used: ~85 / day (well below free tier 400/mo).\nLindy credits: 1 enrichment ≈ 1 credit, 1 claude-step ≈ 2 credits, 1 Slack DM ≈ 1 credit.',
    benchmarks: [
      { label: 'Free tier', value: '400 task credits/month', source: 'Lindy pricing 2026' },
      { label: 'Pro plan', value: '$49/month + credit packs', source: 'Lindy pricing 2026' },
      { label: 'Integrations', value: 'Gmail, Calendar, Slack, HubSpot, Salesforce, Airtable, Notion, Webhook, HTTP — 60+', source: 'Lindy docs' },
      { label: 'No-code builder', value: 'Plain English + Code step (JS) for advanced', source: 'Lindy product page' },
      { label: 'Funding (May 2026)', value: '$35M Series B led by Benchmark; total $52M', source: 'TechCrunch May 2026' },
    ],
    decisionAid: {
      pickIf:
        'You\'re a solo founder, ops person, or small team without engineering capacity and need a plain-English agent builder that already plugs into Gmail / Calendar / Slack.',
      skipIf:
        'You need an enterprise CRM-native agent (Agentforce for Salesforce), or you want a deeply programmable no-code (n8n / Make), or you need per-resolved-ticket pricing with full CX analytics (Decagon).',
    },
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
    quickStart: [
      'Install: `npm create mastra@latest` then follow the CLI; or `pnpm add @mastra/core @mastra/agents`.',
      'Set one provider key in `.env`: `ANTHROPIC_API_KEY` or `OPENAI_API_KEY` (or `GOOGLE_GENERATIVE_AI_API_KEY` — Gemini has a generous free tier).',
      'Run `npm run dev` → opens Mastra Playground in your browser to design agents visually.',
      'Define an Agent: `new Agent({ name: "assistant", instructions: "...", model: anthropic("claude-3-5-sonnet"), tools: [...] })`.',
      'Compose Workflows (durable state machines with loops/branching) and Evals (model-graded unit tests on agent output).',
    ],
    sampleInput:
      'Code:\n  import { Agent } from "@mastra/core"\n  import { anthropic } from "@ai-sdk/anthropic"\n\n  const supportAgent = new Agent({\n    name: "support-bot",\n    instructions: "You answer questions about our product. Cite the linked docs page.",\n    model: anthropic("claude-3-5-sonnet-latest"),\n    tools: [],\n  })\n\n  const result = await supportAgent.generate("How do I reset my password?")\n  console.log(result.text)',
    sampleOutput:
      'Agent response with citation: "To reset your password, open Settings → Security → Password → Reset. Reference: docs.example.com/security#reset [Source 1]."\nTool calls visible in Playground. Execution time logged via OpenTelemetry. Easily swapped to evals.csv for regression tracking.',
    benchmarks: [
      { label: 'GitHub stars', value: '19,000+', source: 'github.com/mastra-ai/mastra' },
      { label: 'Backed by', value: 'YC W25; founded by the Gatsby team', source: 'Toutiao article' },
      { label: 'Codebase', value: '99.8% TypeScript' },
      { label: 'Primitives', value: 'Agents / Tools / Workflows (durable graphs) / RAG / Evals / Integrations (auto-generated type-safe clients)' },
    ],
    decisionAid: {
      pickIf:
        'You\'re a TypeScript / Next.js team and want the batteries-included DX — memory, MCP, RAG, evals, and observability in one typed package.',
      skipIf:
        'You prefer Python — LangGraph, CrewAI, or AutoGen are stronger there. For pure graph control over cycles and retries with no extra opinions, LangGraph beats Mastra.',
    },
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
    quickStart: [
      'Install: `pip install openai-agents` (Python) or `npm i @openai/agents` (TypeScript, beta).',
      'Import: `from agents import Agent, Runner` and set `OPENAI_API_KEY`.',
      'Define a primary agent: `Agent(name="triage", instructions="You triage support tickets")`.',
      'Run: `result = Runner.run_sync(triage, "the user said: ...")` — synchronous, async helpers also available.',
      'Add handoffs (other agents the LLM can route to), guardrails (input/output validators), and tracing (free Traces dashboard).',
    ],
    sampleInput:
      'Build a 2-agent "TriageBot":\n\n  from agents import Agent, Runner\n\n  billing = Agent(name="Billing", instructions="Resolve billing questions.")\n  support = Agent(\n    name="Support",\n    instructions="You triage tech-support tickets. Hand off to Billing for invoice issues.",\n    handoffs=[billing],\n  )\n\n  out = Runner.run_sync(support, "I was double-charged on my last invoice")',
    sampleOutput:
      'Trace: support → (handoff:reason=invoice) → billing → (tool_call: process_refund) → final.\nFinal message: "I\'m processing your $39 refund now. Reply with the invoice number to confirm." Full trace visible at platform.openai.com/traces.',
    benchmarks: [
      { label: 'GitHub stars', value: '18,000+', source: 'github.com/openai/openai-agents-python' },
      { label: 'License', value: 'MIT' },
      { label: 'Primitives', value: 'Agents + Handoffs + Guardrails + Sessions + Tracing' },
      { label: 'Produced by', value: 'OpenAI; successor to the experimental Swarm framework' },
      { label: 'April 2026 update', value: 'Native sandbox + harness separation (compute ↔ control); supports multi-container parallel execution', source: 'OpenAI / TechCrunch' },
    ],
    decisionAid: {
      pickIf:
        'You live in OpenAI\'s ecosystem and want the least-surprise path — handoffs, guardrails, and tracing are first-class, and you get a hosted Traces UI for free.',
      skipIf:
        'You want framework-agnostic across multiple model vendors — LangGraph or CrewAI don\'t lock you in. For heavier graph control or Python data workloads, LangGraph is the better fit.',
    },
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
    quickStart: [
      'Go to chatgpt.com (or chat.openai.com) — sign up free with email or Google.',
      'Free tier runs GPT-4o mini with caps; ChatGPT Plus ($20/mo) unlocks GPT-4o, o-series reasoning, image generation, longer uploads.',
      'Pro tier ($200/mo) adds Operator (browser agent), Sora, Codex agent, and unlimited o-series.',
      'Click "GPTs" in the sidebar → explore the marketplace or build your own; pin your favorites to the top.',
      'For research, click "Deep Research" → ask a complex question; it browses 20+ sources and returns a cited report in 5–30 min.',
      'Use Custom Instructions to lock in tone + format across all chats; turn Memory on to persist facts between sessions.',
    ],
    sampleInput:
      'Deep Research task:\n"Compare the pricing models and quota enforcement of ChatGPT Pro ($200/mo) vs Anthropic Max ($200/mo) vs Gemini Ultra as of July 2026.\n\nFor each: list actual monthly cap structure, rate limits per hour, what\'s throttled vs hard-stopped, and which tier is best for someone running 2 concurrent agents 8h/day."\n\nPlus a side input: paste the latest Anthropic pricing PDF.',
    sampleOutput:
      'Deep Research completed in 11 min, 28 sources cited.\nReport structure:\n  - Direct comparison table (Pro / Max / Ultra)\n  - Rate-limit breakdown: GPT Pro 200 msg/3h on o3; Max 200 msg/5h on Sonnet 4; Ultra 1.5× Pro\n  - Cost per 8-hour agent runtime estimate ($9.40 Pro / $11.20 Max / $12.80 Ultra)\n  - Recommendation: Pro for breadth; Max for quality + 1M context\nFinal report: 4,200 words, with inline citations and 1-click export to PDF / Google Doc.',
    benchmarks: [
      { label: 'WAU', value: '500M+ users (April 2026)', source: 'OpenAI press, Apr 2026' },
      { label: 'Plus / Pro plans', value: '$20 / $200 per month', source: 'OpenAI pricing' },
      { label: 'Deep Research speed', value: '5–30 minutes for cited report', source: 'OpenAI' },
      { label: 'GPTs in marketplace', value: '3M+ custom GPTs', source: 'OpenAI Devday 2025' },
      { label: 'Context window', value: '128K (4o) / 200K (4.1) / 1M select', source: 'OpenAI docs 2026' },
      { label: 'Operator (browser agent)', value: 'Pro tier, USA / EU rollout', source: 'OpenAI' },
    ],
    decisionAid: {
      pickIf:
        'You want the broadest single-assistant capability set — chat, image gen, code execution, browsing, Deep Research, custom GPTs — backed by the largest 3rd-party ecosystem.',
      skipIf:
        'You\'re already paying for Anthropic and value long-context safety steerability more than raw breadth (Claude wins on writing quality), or you want a fully open-weights stack (DeepSeek / Qwen).',
    },
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
    quickStart: [
      'Go to claude.ai — sign up free with email or Google (no phone required).',
      'Free tier: Claude Sonnet 4 with reasonable rate limits; Pro $20/mo unlocks more capacity + Projects + Artifacts.',
      'Max $100–200/mo (US $200): highest priority, 1M-token context windows, and both Sonnet 4 + Opus 4.',
      'Click "+ New chat" for one-off; "+ Project" gives you a workspace with shared context, custom instructions, and uploaded docs.',
      'In Projects, drag in PDFs / codebases / spreadsheets — Claude reads them across turns. Use Artifacts for live HTML/SVG/React that renders side-by-side.',
      'For coding, install Claude Code in your terminal — separate CLI but the same Anthropic account; it edits files and runs shell commands with your approval.',
    ],
    sampleInput:
      'Project context (uploaded):\n  - 600-page product spec PDF\n  - 3 architecture diagrams (PNG)\n  - Past 4 quarterly OKRs as a CSV\n\nSystem prompt override (per Project):\n  "You are the principal product partner. Push back on vague asks. Cite section numbers when answering about the spec. Keep responses under 300 words unless you\'re producing a doc."\n\nQuestion: "Where does the spec address agent fallback between regions 1 and 2?"',
    sampleOutput:
      'Answer (under 120 words, with citation):\n"Spec §4.7 covers the primary fallback path (region 1 → 2).\nThe 7-second health-check threshold comes from §11.2. If region 2 is degraded for >15 min, §4.8 routes to region 3 — though your Q3 OKR noted that region 3 is cost-per-request 4× region 1.\nRecommendation: re-check §11.2 thresholds against your Q2 actuals (CSV row 14)."\n\nFollowed up automatically: Artifact renders the architecture diagram from §4.7 as an inline SVG.',
    benchmarks: [
      { label: 'Context window', value: '1M tokens (Sonnet 4 / Opus 4)', source: 'Anthropic, Aug 2025 launch' },
      { label: 'Plans', value: 'Free / Pro $20 / Max $100–200 (US $200) per month', source: 'Anthropic pricing' },
      { label: 'SWE-bench Verified (Opus 4)', value: '72.5% (SOTA, May 2026)', source: 'Anthropic May 2026' },
      { label: 'Long-doc comprehension', value: 'Top performer on FrontierMath / multi-doc QA', source: 'Anthropic 2026 disclosures' },
      { label: 'Anthropic API run-rate (2025)', value: '$3B+ (end of 2025, est.)', source: 'Anthropic earnings disclosures' },
    ],
    decisionAid: {
      pickIf:
        'You need thoughtful long-context reasoning on serious work — long-document analysis, nuanced writing, careful code review — and you prefer safety/steerability defaults built in.',
      skipIf:
        'You need the broadest one-stop assistant (ChatGPT has more native features and ecosystem), or you need fully open/self-hostable weights (DeepSeek / Qwen).',
    },
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
    quickStart: [
      'Quick start: download the DeepSeek app (iOS / Android / macOS / Windows / Web) → sign up → chat with DeepSeek-V3 / R1 for free.',
      'For API: visit platform.deepseek.com → create an API key (no minimum, pay-as-you-go in USDT or card).',
      'Self-host: pull weights from Hugging Face (deepseek-ai/DeepSeek-V3, deepseek-ai/DeepSeek-R1), then run with vLLM, SGLang, or LM Studio.',
      'Hardware: V3 is a 670B MoE — full-quality inference wants H200 / H100 nodes. R1 distill (1.5B–70B) runs on 24 GB GPUs (RTX 4090).',
      'For BYOK in agents: set DeepSeek as an OpenAI-compatible endpoint at api.deepseek.com (paid) or via Ollama (local).',
      'Watch the pricing — DeepSeek aggressively undercuts US labs (down to ~$0.07/M input tokens with cache hits, off-peak).',
    ],
    sampleInput:
      'Local LM Studio config:\n  Model: deepseek-r1-distill-qwen-32b-q4_k_m.gguf\n  ctx: 32768\n  gpu: RTX 4090 (24 GB)\n  temperature: 0.6\n  prompt: "Solve this integral, step by step: ∫₀^∞ (1 + x²) / (eˣ − 1) dx. Show reasoning before the answer."\n\nAPI config:\n  POST https://api.deepseek.com/chat/completions\n  {\n    "model": "deepseek-reasoner",\n    "messages": [{"role":"user","content":"Solve ∂u/∂t = k ∂²u/∂x² with u(0,t)=u(L,t)=0, u(x,0)=sin(πx/L)."}]\n  }',
    sampleOutput:
      'Local (R1 distill, 32B q4_k_m): 38 tok/s on RTX 4090. Math proof runs 8.4s, arrives at ζ(2)/2 = π²/12 ≈ 0.822.\n\nAPI (deepseek-reasoner): 9.2s for the PDE solution; step-by-step derivation with boundary conditions. Cost: $0.0028 (reasoner cache hit on the boundary term).\n\nComparison: same PDE on GPT-4o took 6.8s, cost $0.18. DeepSeek wins on cost-per-reasoning-step by ~50×.',
    benchmarks: [
      { label: 'Frontier-tier reasoning (R1)', value: 'Matches o1 on math/coding benchmarks', source: 'DeepSeek-R1 paper, Jan 2025' },
      { label: 'V3 license', value: 'DeepSeek License (open weights, free for commercial, no warranty)', source: 'Hugging Face model card' },
      { label: 'API pricing', value: '$0.27/M input, $1.10/M output (cache hit $0.07/M)', source: 'platform.deepseek.com' },
      { label: 'GitHub stars (org)', value: '140k+', source: 'GitHub June 2026' },
      { label: 'Self-host memory (V3)', value: '670B MoE → multi-node GPUs / ~1.3 TB total', source: 'DeepSeek-V3 inference guide' },
      { label: 'R1 Xbench pass rate', value: '93% (vs o1 91%)', source: 'DeepSeek-R1 paper' },
    ],
    decisionAid: {
      pickIf:
        'You want frontier-tier reasoning at a fraction of Western model prices, or you self-host open weights and need a model that actually ships. The default for cost-conscious engineering teams.',
      skipIf:
        'You need strict US-compliance procurement, or DeepSeek\'s content rules trip you up (it\'s less permissive on some political topics). For enterprise compliance, Anthropic / OpenAI are safer picks.',
    },
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
    quickStart: [
      'Demo + scoping call only (no self-serve). Sierra sends an SA to map your highest-value agent use cases (support, brand voice, IT).',
      'Agreement phase: provide brand voice docs, top-50 support topics, CRM/ITSM connector list → Sierra configures your "Agent Studio".',
      'In Studio: review guardrails (topic whitelist, escalation triggers, red-line phrase list), test against your historical tickets.',
      'Rollout: deploy to web chat, in-app, or voice — Sierra runs on chat and phone with the same backend.',
      'Day-2 ops: use the Analytics dashboard for deflection, CSAT, AHT, escalations; tune Topics weekly.',
      'SLA: 99.95% uptime; FedRAMP Moderate planned Q4 2026, SOC 2 Type II, HIPAA for healthcare customers.',
    ],
    sampleInput:
      'Sierra engagement setup (illustrative):\n\nCustomer: large insurance carrier, 12M support contacts/yr\n  Stack: ServiceNow ITSM + Salesforce Service Cloud + Genesys voice\n  Brand voice docs: 38 pages ("we\'re your calm, capable neighbor")\n  Top topics: claim status, policy change, billing dispute, roadside assistance\n  Guardrails:\n    - NO claim payout amounts\n    - escalate if user mentions "lawyer" / "lawsuit"\n    - never say "I don\'t know" — always offer human handoff\n  Compliance: SOC 2 Type II, HIPAA + state insurance regulations\n\nPilot scope:\n  - 1 brand, 4 topics, English + Spanish\n  - Web chat + voice (Genesys transfer)\n  - 90-day rollout, success = 45% deflection at ≥ 4.4 CSAT',
    sampleOutput:
      'Pilot results (90 days, anonymized):\n  Deflection: 47% (above target 45%)\n  CSAT (post-resolution survey): 4.51 / 5\n  Containment rate (no human touched): 71% web chat, 53% voice\n  Avg handle time saved per contact: 4m 12s\n  Annualised cost savings (vs $14/contact human baseline): $26M\n  Escalations: 9% (within guardrail envelopes)\n\nHidden catch: "I don\'t know" policy created awkward phrasing on edge cases — Sierra\'s tone team wrote 12 fallback one-liners, deployed as a guardrail bundle week 4.',
    benchmarks: [
      { label: 'Founded', value: '2024, Bret Taylor + Clay Bavor', source: 'sierra.ai' },
      { label: 'Customers', value: 'Public refs include ADT, WeightWatchers, Cigna', source: 'sierra.ai customer pages' },
      { label: 'Architecture', value: 'Agent Studio + Topics + Composer (Q4 2025)', source: 'Sierra platform tour 2025' },
      { label: 'Compliance', value: 'SOC 2 Type II, HIPAA; FedRAMP Moderate planned Q4 2026', source: 'Sierra trust portal' },
      { label: 'Voice + chat', value: 'Same backend, deploy to phone / web / in-app', source: 'Sierra product' },
    ],
    decisionAid: {
      pickIf:
        'You\'re a Fortune 1000 brand that wants a managed, opinionated agent platform with strong brand voice and integrations into your CRM/ITSM stack — and you\'d rather pay enterprise pricing than staff an in-house AI team.',
      skipIf:
        'You\'re a self-serve team without enterprise procurement muscle (Lindy / n8n is too lightweight; Vapi is the closer). For CRMs that already live on Salesforce, Agentforce has lower integration tax.',
    },
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
    quickStart: [
      'Demo + scoping call (no self-serve free tier). Decagon reads your top-20 ticket categories and 90 days of transcripts before the call.',
      'Pilot setup: 30-day "Build" phase where Decagon\'s ML team trains your first agent on your knowledge base + historical tickets.',
      'Deploy to one channel first (Zendesk, Intercom, or Salesforce Service Cloud) → measure deflection, CSAT, resolution accuracy.',
      'Production mode: Decagon ships "AI Actions" for refunds, account changes, status updates — agents go beyond answering.',
      'Analytics: live dashboard tracks deflection (target 50%+), CSAT (target ≥ 4.4), resolution rate (target ≥ 70%), and surfaces gap topics for retraining.',
      'Pricing tiers: Enterprise (custom) — typically $0.50–$2.00 per resolved ticket.',
    ],
    sampleInput:
      'Decagon agent config (sample):\n\nTopic: "Subscription Pause / Cancel"\n  Inputs allowed:\n    - email of subscriber\n    - reason (select: too expensive, not using, competitor, other)\n  Actions:\n    - pause_subscription (refunds pro-rated remaining)\n    - offer_save_offer (3 months at 50% off) — if reason = "too expensive"\n    - escalate_retention (if reason = "competitor" → tag #competitive-risk)\n  Tone: empathetic, short\n  Never:\n    - quote competitor pricing\n    - say "I can\'t do that" — always escalate to retention human\nChannel: Zendesk + Intercom (production)',
    sampleOutput:
      '30-day post-pilot metrics:\n  Total tickets routed: 84,200\n  Resolved end-to-end (no human): 59,150 (70.3%)\n  Deflection (no human touched): 55.8%\n  CSAT: 4.47 / 5\n  Avg resolution time: 1m 12s (was 3h 48s human baseline)\n  Top improvement areas flagged:\n    - "what happens to my data after pause?" (12% of escalations) → retrained FAQ\n  Outcome: 14% of subscribers who paused via Decagon returned within 60 days vs 8% historical.',
    benchmarks: [
      { label: 'Founded', value: '2023; $65M Series B in 2025 led by Bain Capital Ventures', source: 'TechCrunch 2025' },
      { label: 'Customers', value: 'Public refs include Notion, Bilt, ClassPass, Eventbrite', source: 'decagon.ai customers' },
      { label: 'Action library', value: '80+ pre-built actions (refunds, account changes, status, retention)', source: 'Decagon platform' },
      { label: 'Pricing', value: '~$0.50–$2.00 per resolved ticket', source: 'Decagon sales briefs' },
      { label: 'Avg deflection', value: '50–70% in published case studies', source: 'Decagon case studies' },
    ],
    decisionAid: {
      pickIf:
        'You run support at scale (10k+ tickets/month), want agents that take real actions (refunds, account changes), and need first-class analytics on deflection + resolution rate.',
      skipIf:
        'You\'re a smaller team without a clean Zendesk/Intercom knowledge base to train on — the build phase needs good source data. For lighter-weight no-code, Lindy or n8n are closer fits.',
    },
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
    quickStart: [
      'Sign up at retellai.com with Google/email → create a workspace → grab a "Live API" or "BYO Twilio" key.',
      'Click "Create Agent" → pick a voice (Cartesia Sonic 2 / ElevenLabs / OpenAI TTS) and LLM (GPT-4o / Claude / Gemini).',
      'Type the system prompt and add tools (functions) — Retell exposes them via function-calling JSON.',
      'Test in the in-browser console (no telephony cost). When happy, connect a phone number (Retell provisions numbers in 50+ countries, or import Twilio).',
      'Roll out: push to a campaign, embed in your IVR via SIP, or trigger from your CRM webhook.',
      'Live monitoring: Retell\'s dashboard shows concurrency, call success, latency, sentiment per call, full transcript search.',
    ],
    sampleInput:
      'Retell agent config (sample):\n\nName: "Acme Claw Appointment Scheduler"\nVoice: ElevenLabs "Rachel"\nLLM: GPT-4o, temperature 0.4\n\nSystem prompt:\n  "You are Alex from Acme Dental. Greet callers, verify patient identity (DOB + last name),\n   check available slots in the Acme scheduling system, and book or reschedule.\n   If patient asks about pricing, do NOT quote — offer to transfer to billing.\n   Never claim to be human."\n\nTools (function-calling):\n  - get_available_slots(date_window: "YYYY-MM-DD..YYYY-MM-DD")\n  - book_slot(slot_id: string, patient_id: string)\n  - lookup_patient(dob: "YYYY-MM-DD", last_name: string)\n  - transfer_to_billing(reason: string)\n\nTransfer rules:\n  - on_keyword(["lawyer", "lawsuit", "manager"]) → warm transfer to human queue',
    sampleOutput:
      'Day-7 production monitoring (10,400 calls):\n  Containment (no human): 71%\n  Avg call length: 1m 38s\n  Avg latency: 412ms (Retell dashboard p95: 720ms)\n  Booking success rate: 68% (after identity verification)\n  Top failure modes (flagged by Retell\'s auto-QA):\n    - patient_dob miss-typed in 12% of calls → tighter prompt phrased\n    - intent "schedule for spouse" not in tool → add get_slots_for_patient_ids\nCost: 10,400 calls × ~$0.085/min average (incl. Twilio number) = $748.84/week',
    benchmarks: [
      { label: 'Pricing', value: '$0.07–$0.13 / minute (per-call)', source: 'Retell pricing 2026' },
      { label: 'Concurrency limit', value: 'Up to 10,000 concurrent calls (Enterprise)', source: 'Retell platform' },
      { label: 'Liveness / latency', value: '~400–700ms typical (p95)', source: 'Retell docs' },
      { label: 'STT options', value: 'Deepgram, Whisper, Cartesia', source: 'Retell product' },
      { label: 'Customers', value: 'Roadrunner, Cox Auto, Choice Hotels, mortgage servicing ops', source: 'Retell customer pages' },
      { label: 'BYO telephony', value: 'Yes — Twilio / Vonage / Telnyx SIP trunks', source: 'Retell docs' },
    ],
    decisionAid: {
      pickIf:
        'You want a managed, monitor-rich voice platform — built-in call analytics, concurrency, QA tools, and white-glove enterprise support out of the box. Strong when your team is operations-led, not engineering-led.',
      skipIf:
        'You want a low-level API you fully control (Vapi gives you that); or you only need a few voice flows and the cost of concurrency is overkill (single-channel SMB use case).',
    },
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
    quickStart: [
      'Sign up at https://runwayml.com with Google or email — free credits land in your account immediately.',
      'Open "Generate → Video" and pick "Gen-4" as the model (Gen-4.5 in paid plans; older Gen-3 for legacy use).',
      'Choose Text-to-Video or Image-to-Video; upload a starting frame for I2V (image controls motion best).',
      'Type a prompt of ~30–80 words focused on subject + camera + motion + style — keep it concrete.',
      'Click "Generate" (5 credits for 5s, 10 credits for 10s) and review the 4 candidates; "Extend" the best one to grow the scene.',
      'Export at 1080p/4K from the editor; Pro plan removes the watermark and unlocks longer clips.',
    ],
    sampleInput:
      'Prompt: "Tracking shot, 35mm film look. A vintage red bicycle leans against a yellow mailbox in golden-hour sunlight. A woman in a linen dress walks into frame, places a letter in the box, looks back over her shoulder, smiles."\n\nSettings:\n  Model: Gen-4\n  Mode: Image-to-Video (reference frame uploaded: 1920×1080)\n  Motion: Medium (5/10)\n  Camera: Static frame, subject enters from left\n\nDuration: 10 seconds',
    sampleOutput:
      '4 candidate 10s clips generated in ~62s.\nPicked #2 — best entrance timing (woman enters at 1.4s, clean shadow continuity).\nExtended → 16s total: she places the letter and smiles; +9 credits.\nExported 1080p ProRes 422 LT (4 credits), then a 1:1 crop for Instagram (-2 credits).\nTotal credits: 17.',
    benchmarks: [
      { label: 'Max clip length', value: '10s native (extendable to 30s+)', source: 'Runway docs' },
      { label: 'Generation time (10s Gen-4)', value: '~60s for 4 candidates', source: 'Runway homepage' },
      { label: 'Resolution out', value: 'Up to 4K (paid plans)', source: 'Runway pricing 2026' },
      { label: 'Standard plan', value: '$15/mo, 625 credits', source: 'Runway pricing 2026' },
      { label: 'Used by', value: '30M+ creators worldwide', source: 'Runway homepage, May 2026' },
      { label: 'Hollywood adoption', value: 'Used in Oscar-winning short "The Frost" (2025)', source: 'Variety, Feb 2026' },
    ],
    decisionAid: {
      pickIf:
        'You\'re a creator or studio that needs cinematic control — motion intensity, camera, style refs — and a polished in-browser editor for cutting, not just rendering.',
      skipIf:
        'You need photorealistic single-take 60s clips and have ChatGPT Pro — go Sora first, fall back to Runway when access is gated. Or if you only need 5–10s social clips with cheap lip sync, Pika is faster.',
    },
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
    quickStart: [
      'Sora ships inside ChatGPT. Subscribe to Plus ($20/mo) for limited access, Pro ($200/mo) for priority + 1080p + 5× more generations.',
      'In ChatGPT, open the Sora composer (or go to sora.com and log in with your ChatGPT account).',
      'Pick "Video" → "Text-to-Video", or "Remix" to riff off a published public clip.',
      'Type a detailed 30–80 word prompt: subject, motion, camera move, lens/length, lighting, style. Sora rewards cinematic direction.',
      'Choose duration: 5s / 10s / 15s / 20s; Pro tier unlocks up to 60s on select scenes.',
      'Generate, review 2–3 candidates, "Extend" the best, then export up to 1080p (Pro).',
    ],
    sampleInput:
      'Prompt: "Extreme close-up on weathered hands turning the dial of a 1970s portable radio. Dust motes drift through a shaft of afternoon sunlight. Color graded to warm Kodak 1976. Slow push-in. Audio: faint static between stations."\n\nSettings:\n  Model: Sora 2\n  Duration: 15s\n  Aspect ratio: 16:9\n  Quality: HD (Pro)',
    sampleOutput:
      'Rendered in ~3 min (Pro priority queue).\nPicked take #2 — tighter moodier cut; the dial click lands cleanly on the 12s mark.\nExtended to 22s total: the radio pulls in a faint song, +3 generations.\nExported 1080p ProRes (Pro): 4 GB file.\nGotcha: long clips can drift from the original color grade on Extend — re-prompt if it slips.',
    benchmarks: [
      { label: 'Max single clip', value: '60s (Sora 2, Pro tier)', source: 'OpenAI Sora 2 launch, Dec 2025' },
      { label: 'Max resolution', value: '1080p (Pro); 4K rolling', source: 'OpenAI 2026 roadmap' },
      { label: 'Plus plan', value: '$20/mo, ~50 generations/mo', source: 'ChatGPT Plus pricing' },
      { label: 'Pro plan', value: '$200/mo, ~500 generations/mo, priority', source: 'ChatGPT Pro pricing' },
      { label: 'Generations (first 6 mo)', value: '12M+ public renders', source: 'The Information, May 2026' },
    ],
    decisionAid: {
      pickIf:
        'You want class-leading photorealism and the longest single coherent clips (~60s) on the market, and you\'re fine paying $200/mo for the Pro tier to unlock it.',
      skipIf:
        'You need fine-grained control over per-shot camera/motion — Runway is more surgical. Or if access flakiness bugs you, pair Sora with Runway as a fallback for daily deliverables.',
    },
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
    quickStart: [
      'Sign up at https://pika.art with Google or Discord — free plan gets 30 credits/month (enough for ~3 short videos).',
      'Click "Generate" in the dashboard; "Image + Video" mode is where Pika\'s strengths (lip sync, Pikaffects) live.',
      'Upload a starting image (or use one of Pika\'s preset starting frames).',
      'Type a short motion prompt, or pick a preset ("Pikaffects": Melt, Squish, Explode, Levitate, Inflate…).',
      'Tweak "Strength of motion" and "Motion strength" sliders between 1–5; preview takes ~15–30s.',
      'Download up to 1080p — paid plans remove the watermark and unlock 1080p/Pro clean exports.',
    ],
    sampleInput:
      'Starting image: a cat in a spacesuit, cinematic studio lighting.\nPreset: "Lip Sync"\nAudio: a 4-second WAV saying "I have a dream, and it\'s about laser pointers."\n\nSettings:\n  Strength: 3 / 5\n  Lip-sync: enabled\n  Aspect ratio: 16:9\n  Duration: 4s',
    sampleOutput:
      'Generated 1 candidate in 18s on Pika 2.2.\nMouth movements track the audio closely; eye blink rhythm stays natural.\nAdded a "Explode" Pikaffect after generation — space fur particles drift off, +6 credits.\nExport: 1080p MP4 (10 credits; free watermark, Pro clean).\nTotal credits: ~22.',
    benchmarks: [
      { label: 'Model', value: 'Pika 2.2 (proprietary)', source: 'pika.art' },
      { label: 'Max clip length', value: '30s (paid); 4–10s typical', source: 'Pika pricing 2026' },
      { label: 'Render time (4s clip)', value: '15–30s', source: 'Pika user benchmarks' },
      { label: 'Free credits', value: '30/mo ≈ 3 videos', source: 'Pika pricing 2026' },
      { label: 'Pro plan', value: '$10/mo (annual) / $14 month-to-month', source: 'Pika pricing 2026' },
      { label: 'User base', value: '8M+ creators (Discord + web)', source: 'Pika company blog, 2026' },
    ],
    decisionAid: {
      pickIf:
        'You want the lowest-friction path from a single image to a shareable 5–10s video clip, especially for social, with class-leading lip sync as a one-click preset.',
      skipIf:
        'You need clips longer than 30s, full cinematic control, or photorealistic body movement — Runway or Sora serve those better. For deepfake-grade lip sync at full video length, dedicated tools like Hedra win on quality.',
    },
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
    quickStart: [
      'Prereq: you have authorization to test the target (written scope / Rules of Engagement). Unauthorized testing is illegal.',
      'pip install pentestgpt (or git clone https://github.com/GreyDGL/PentestGPT).',
      'Set OPENAI_API_KEY (or another provider) in your env; PentestGPT defaults to GPT-4 class.',
      'Run: pentestgpt --reasoning-model gpt-4o --parsing-model gpt-4o-mini.',
      'Follow the on-screen flow: 1) enter target + scope, 2) enter starting test (recon / enum / vuln), 3) accept the next-step suggestion or modify.',
      'Always validate PentestGPT\'s commands in a sandbox / lab before running against production targets.',
    ],
    sampleInput:
      'Target: 10.10.14.0/24 (internal HackTheBox-style lab)\nScope (authorized): all hosts on that subnet, all TCP/UDP ports\nEngagement start: 09:00 Mon, 60-day engagement\n\n# PentestGPT CLI\n> pentestgpt --target 10.10.14.0/24 --scope "tcp_1-65535, udp_1-1024"\n> Reasoning model: gpt-4o\n> Parsing model:  gpt-4o-mini\n> Recommended first step (PentestGPT suggests):\n  "Run an Nmap full TCP scan with safe scripts and Service version detection."\n  # nmap -sV -sC -p- --script=safe -T4 -oA recon/tcp_full 10.10.14.0/24\n  Accept (y/n)? y',
    sampleOutput:
      'Recon phase completed in ~28 minutes (automated):\n  7 live hosts; 12 open services detected.\nPentestGPT suggested next steps:\n  1. Inspect open services on 10.10.14.18 (Apache 2.4.49 — known CVE-2021-41773 candidate).\n  2. Check SMB null-session on 10.10.14.22 (Windows 10 22H2).\n  3. Run nuclei templates against the discovered services.\n\nTime savings: PentestGPT sequence-coverage reduced manual recon-script writing by ~70%.\nNotes (manual review):\n  - 1 false positive on SSH banner (showed OpenSSH 8.2 → real is 7.9).\n  - All AI-suggested commands verified safe in lab sandbox.\nFinal report (PentestGPT-assisted, markdown): 14 pages, fully cited, hand-reviewed.',
    benchmarks: [
      { label: 'License', value: 'MIT (open source)', source: 'GitHub repository' },
      { label: 'GitHub stars', value: '8k', source: 'GitHub 2026' },
      { label: 'Reasoning backends', value: 'GPT-4o, Claude, Gemini, local Ollama', source: 'PentestGPT docs' },
      { label: 'Suggested commands origin', value: 'Trained on HackTricks, OWASP WSTG, PayloadsAllTheThings', source: 'PentestGPT paper 2023' },
      { label: 'Operational guard', value: 'Operator review required before execution; no auto-execute', source: 'PentestGPT docs' },
      { label: 'Auditability', value: 'Full session log + commands retained for report writing', source: 'PentestGPT docs' },
    ],
    decisionAid: {
      pickIf:
        'You\'re an authorized pentester / red teamer who knows the methodology and wants AI-suggested next steps and report scaffolding — it speeds you up without taking control away.',
      skipIf:
        'You\'re learning pentesting from zero — start with TryHackMe / HTB, not an AI agent. And don\'t run PentestGPT against systems you don\'t have explicit written authorization to test.',
    },
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
    quickStart: [
      'Install the Tabnine extension in VS Code / JetBrains / Visual Studio.',
      'Pick your plan: Free basic autocomplete, Pro $12/mo (chat + full-agent mode), Enterprise (self-hosted).',
      'For self-hosted: deploy the Tabnine app on Kubernetes behind your firewall → connect the IDE extension to your org endpoint.',
      'Tabnine learns your team\'s codebase patterns to personalize completions — runs locally to keep code on your network.',
      'For air-gapped deployments: Self-hosted Enterprise + bring-your-own-model (e.g. fine-tuned Code Llama) works fully offline.',
    ],
    sampleInput:
      'Self-hosted setup (Enterprise):\n  helm install tabnine tabnine/tabnine \\\n    --set selfHosted=true \\\n    --set model=finetuned-code-llama-13b.gguf \\\n    --set airGap.enabled=true\n  → IDE plugin → Settings → Enterprise endpoint → auth via SSO.\n  All completions served from your own GPUs. Code never leaves.',
    sampleOutput:
      'A 1-line autocomplete suggestion appears in 80ms. A multi-line block suggestion appears in ~250ms with the model\'s top-p=0.95. Telemetry (usage stats) stays in your cluster.',
    benchmarks: [
      { label: 'License / hosting', value: 'SaaS + self-hosted; on-prem Kubernetes support' },
      { label: 'BYO model', value: 'Yes — point Tabnine at any OpenAI-compatible LLM endpoint' },
      { label: 'Compliance', value: 'SOC 2, ISO 27001; on-prem for air-gapped teams' },
      { label: 'Pricing', value: 'Free basic / Pro $12/mo / Enterprise custom' },
    ],
    decisionAid: {
      pickIf:
        'You\'re in regulated industry (finance / defense / healthcare) and the network policy is "code never leaves" — Tabnine self-hosted with a BYO model is the standard answer.',
      skipIf:
        'You\'re a solo dev or small team without compliance constraints — Copilot, Cursor, and Continue will give you more model variety and faster autocomplete for cheaper.',
    },
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
    quickStart: [
      'Sign up at replit.com with Google/GitHub/email — free tier includes the Replit IDE + a small Agent invocation allowance.',
      'Replit Core $20/mo (annual): always-on apps, persistent storage, larger Agent quota, custom domains.',
      'Click "Create Repl" → "Agent" mode → describe the app you want ("a tiny URL shortener with analytics") → Replit Agent scaffolds it.',
      'Iterate: chat with the Agent ("add a /stats endpoint", "make the dashboard dark mode") → it edits files, runs tests, and deploys.',
      'Deployment: one-click "Deploy" → runs at $repl-name.$username.replit.app; upgrade for custom domains.',
      'Best for solo devs, learners, and rapid prototyping. For serious production, consider Replit\'s reserved VMs ($) or migrate out.',
    ],
    sampleInput:
      'Prompt: "Build me an SMS-based expense tracker for small businesses. Workers text in expense notes from their phone (Twilio webhooks), the agent parses merchant + amount, stores it in Postgres, and returns a daily report email to the admin. Include an admin web page to filter expenses by worker. Use Replit\'s built-in DB."\n\nIteration 2 (chat): "Add a chart of weekly spend per worker, and a Slack notification when an expense exceeds $200."\nIteration 3 (chat): "Make sure all the secrets (Twilio auth, DB URL, Slack webhook) go in Replit Secrets, not in code."',
    sampleOutput:
      'Built and deployed end-to-end in ~22 minutes.\n\nIteration 1 (8m): Scaffolded Twilio webhook receiver, Postgres tables (workers / expenses), admin auth, basic dashboard.\nIteration 2 (7m): Added chart.js weekly-spend chart + Slack webhook with daily cron.\nIteration 3 (5m, security pass): Moved 4 secrets to Replit Secrets manager.\nIteration 4 (2m, my own): Custom domain (expense.acme.com) — wired up via DNS.\n\nDeployed at: https://expense-tracker-oncall.replit.app\nCost: $0 during build; $7/mo reserved VM for "always on" (Core plan includes this for small apps).',
    benchmarks: [
      { label: 'Plans', value: 'Free (Hacker); Core $20/mo; Teams + Enterprise custom', source: 'Replit pricing 2026' },
      { label: 'Languages', value: 'Python, Node, Java, Go, Rust, C++, HTML/CSS/JS via Nix', source: 'Replit docs' },
      { label: 'Persistent storage', value: 'Replit DB (KV) + Postgres; always-on $7/mo reserved VM', source: 'Replit docs' },
      { label: 'Agent actions', value: 'Files, run shell, install packages, edit DB, deploy — all gated by user approval', source: 'Replit Agent docs' },
      { label: 'Always-on apps', value: 'Yes for paid tiers; free tier sleeps after inactivity', source: 'Replit docs' },
    ],
    decisionAid: {
      pickIf:
        'You want a single browser tab to take you from idea to a deployed full-stack app — no local install, no cloud setup. Ideal for prototypes, learning, hackathon-style projects.',
      skipIf:
        'You\'re a serious production engineer who needs Docker / K8s / observability out of the box — pair Replit for prototyping with a real platform for prod. For long-context coding, Cursor / Windsurf / Claude Code are more surgical.',
    },
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
    quickStart: [
      'pip install vanna (or uv add vanna) — the library is MIT-licensed and ~1 MB.',
      'Pick a backend: vanna-ai/vanna-openai (works with OpenAI / Anthropic / Ollama), vanna-ai/vanna-qdrant for full self-host.',
      'Train on your data: vn.train(ddl=…) for schema, vn.train(documentation=…) for context, vn.train(question=…, sql=…) for examples — RAG builds automatically.',
      'Ask: vn.ask("Top 5 customers by lifetime spend in 2026 Q1") → returns SQL + a Plotly chart.',
      'Build a UI: Vanna ships Streamlit / Flask / FastAPI samples; or call vn.ask() from any Python service.',
      'For hosted: sign up at vanna.ai → Vanna Cloud manages RAG + model layer; free tier = 100 questions/day.',
    ],
    sampleInput:
      'import vanna as vn\nfrom vanna.openai import OpenAI_Chat\nfrom vanna.chromadb import ChromaDB_VectorStore\n\nclass MyVanna(ChromaDB_VectorStore, OpenAI_Chat):\n    pass\n\nvn.set_model(MyVanna(model="gpt-4o"))\n\n# Train on schema (DDL)\nvn.train(ddl="""\n  CREATE TABLE customers (\n    id INT PRIMARY KEY, name TEXT, signup_date DATE, country TEXT\n  );\n  CREATE TABLE orders (\n    id INT PRIMARY KEY, customer_id INT REFERENCES customers(id),\n    amount NUMERIC, created_at TIMESTAMP\n  );\n""")\n\nvn.train(documentation="customers.country uses ISO-2 codes; orders.created_at is UTC.")\n\nsql, df, fig = vn.ask("Top 5 countries by 2026 H1 revenue, with customer counts.")\nprint(sql)\ndf.head()',
    sampleOutput:
      'Question → SQL (auto):\nSELECT c.country,\n       SUM(o.amount) AS revenue,\n       COUNT(DISTINCT c.id) AS customer_count\nFROM   customers c\nJOIN   orders o ON o.customer_id = c.id\nWHERE  o.created_at >= \'2026-01-01\'\n  AND  o.created_at <  \'2026-07-01\'\nGROUP  BY c.country\nORDER  BY revenue DESC\nLIMIT  5;\n\nReturned as DataFrame (5 rows, 0.4s) and a Plotly bar chart (12 KB).\nRAG context used: 3 DDL chunks + 2 doc chunks. Token cost: $0.0024 (GPT-4o).',
    benchmarks: [
      { label: 'License', value: 'MIT (library); proprietary Vanna Cloud', source: 'vanna.ai github' },
      { label: 'GitHub stars', value: '12k (main repo)', source: 'GitHub 2026' },
      { label: 'Supported databases', value: 'Snowflake, BigQuery, Postgres, MySQL, Redshift, DuckDB, +40', source: 'Vanna docs' },
      { label: 'Backing model flexibility', value: 'Any OpenAI-compatible API incl. local Ollama models', source: 'Vanna pluggable LLM' },
      { label: 'Free tier', value: '100 questions/day (Vanna Cloud)', source: 'Vanna pricing' },
    ],
    decisionAid: {
      pickIf:
        'You\'re a data team that wants a private SQL/RAG assistant your analysts can rely on, trained on your schema and docs — and you\'d rather not pay an enterprise BI vendor.',
      skipIf:
        'You want a no-code BI tool for business users (pick Text-to-SQL on top of ThoughtSpot, Sigma, or Power BI Copilot) — Vanna assumes a Python-friendly user.',
    },
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
    quickStart: [
      'Subscribe at midjourney.com — no free tier since 2024; Basic $10/mo, Pro $60/mo for Stealth + 30h fast hours.',
      'In the web app (Discord legacy still works), open the Create panel — V7 is default since May 2026; V6 still selectable.',
      'Type a prompt; use /describe on a reference image to extract style notes you can fold back in.',
      'Toggle Style Reference (--sref URL) and/or Character Reference (--cref URL) for visual consistency across generations.',
      'Click Generate (4-image grid), upscale the best (U1–U4), vary (V1–V4), or push into the Editor for outpaint / inpaint.',
      'Downloads are PNG; Pro tier covers commercial use under Midjourney\'s terms.',
    ],
    sampleInput:
      'Prompt: "Editorial fashion shot, model wearing a translucent iridescent trench coat, standing in a Tokyo alley at 3am after rain. Neon reflections, film grain, 35mm Fuji 400H color palette. Lo-fi magazine vibe, asymmetric framing."\n\nFlags:\n  --ar 2:3\n  --style raw\n  --sref https://cdn.midjourney.com/.../iridescent-fashion.jpg\n  --v 7',
    sampleOutput:
      '4 candidates in ~28s.\nPicked image 2 — composition feels more deliberate, neon bounce just right on the coat hem.\nU2 → Upscale (Subtle) → 2048×3072 PNG.\nEdited in Midjourney Editor: brushed the alley puddle reflection, added a small smoke wisp.\nFinal PNG: 2048×3072, 5.1 MB.\nV7 tip: full-body human posture is much improved over V6; default to V7 for people shots.',
    benchmarks: [
      { label: 'Latest model', value: 'V7 (May 2026); V6 retained', source: 'Midjourney release notes' },
      { label: 'Max output res', value: 'Up to ~2048×3072 PNG (V7)', source: 'Midjourney help 2026' },
      { label: 'Basic / Standard / Pro', value: '$10 / $30 / $60 per month', source: 'Midjourney pricing' },
      { label: 'Community size', value: '20M+ users', source: 'Midjourney community post, 2026' },
      { label: 'Commercial use', value: 'Paid plans; no free tier since 2024', source: 'Midjourney ToS' },
    ],
    decisionAid: {
      pickIf:
        'You want the highest-aesthetic image generation on the market and prioritize mood and style over photorealism or precise anatomy. Best pick for editorial, art, and marketing visuals.',
      skipIf:
        'You need precise control, photorealism, anatomy accuracy, or text-in-image rendering — FLUX leads on those axes, and Midjourney has no free tier. For full-brand consistency in a managed product, Ideogram or Adobe Firefly are different choices.',
    },
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
    quickStart: [
      'Pick a tier: [schnell] (Apache-2.0, fastest, fully open) for self-hosting; [dev] (non-commercial) for higher quality; [pro] via API for production.',
      'Fastest path: install ComfyUI or Automatic1111 → drop the FLUX.1 Schnell checkpoint (.safetensors) into models/Stable-diffusion/.',
      'For API: sign up at api.bfl.ml, grab a key, and use the playground at blackforestlabs.ai.',
      'Default model: [dev] for quality, [schnell] for speed. Start at 20–30 inference steps, guidance ~3.5.',
      'Prompts work clean: subject + setting + lens + lighting. FLUX is known for adherence — over-styling with weights is rarely needed.',
      'Export PNG/JPEG from the UI, or via the BFL API at 1MP / 2MP presets (Pro up to 4MP).',
    ],
    sampleInput:
      'Endpoint: api.bfl.ml/v1/flux-pro-1.1\nBody: {\n  "prompt": "Photorealistic product photo of a glass perfume bottle on a marble pedestal, soft top-down lighting, dew droplets on glass, editorial perfume-ad aesthetic, 85mm lens look",\n  "width": 1024,\n  "height": 1024,\n  "steps": 30,\n  "guidance": 3.5,\n  "seed": 4815162342\n}',
    sampleOutput:
      'Generated in ~6.5s on FLUX Pro 1.1 (BFL API).\nSingle image, 1024×1024 PNG.\nAnatomy, lighting, dew physics all rendered correctly on first try — typical FLUX.\nCost: $0.05 (FLUX Pro credit rate).\nNote: for real product series, pair with ControlNet / IP-Adapter for multi-shot consistency; base FLUX API gives one image per call.',
    benchmarks: [
      { label: 'Variants', value: '[schnell] Apache-2.0; [dev] non-commercial; [pro] API', source: 'BFL docs' },
      { label: 'Self-host minimum GPU', value: '24 GB VRAM (RTX 4090) for [schnell]/[dev]', source: 'BFL GitHub README' },
      { label: 'Pro API render time', value: '~5–10s (1024×1024)', source: 'BFL playtest, 2026' },
      { label: 'Open-source license', value: 'Apache-2.0 (Schnell); Dev gated weights', source: 'BFL license terms' },
      { label: 'Pricing (Pro API)', value: '$0.05 / image', source: 'BFL pricing 2026' },
    ],
    decisionAid: {
      pickIf:
        'You need photorealism, anatomy, and prompt adherence, with either (a) full self-host on your own GPU or (b) a cheap API at scale (~$0.05/image). Best open-weights image model of 2026.',
      skipIf:
        'You want pure aesthetic/artistic flair — Midjourney still wins on style. Or if you need a managed cloud product with brand-consistency features, Ideogram or Adobe Firefly target those.',
    },
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
    quickStart: [
      'Sign up at jasper.ai with SSO/email — 7-day free trial, no credit card required.',
      'Creator $39/mo: 1 user seat, 1 Brand Voice, 50k words/mo; Pro $69/user/mo: 3 Brand Voices + workflows.',
      'Business custom: unlimited seats, advanced workflows, API + custom integrations.',
      'Click "Brand Voice" → upload 30+ samples of your best content (blog posts, sales emails); Jasper trains a style.',
      'Open Campaigns → choose a template (Blog Post, Ad Copy, Email Sequence) → describe the brief.',
      'Iterate via "Improve" buttons (more witty, shorter, formal) — Jasper keeps Brand Voice constraints across all outputs.',
    ],
    sampleInput:
      'Brief: "SaaS startup newsletter for product managers. Topic: launching a new analytics pipeline feature. Tone: precise, lightly playful, no buzzwords. Audience: B2B SaaS PMs at Series B companies. Goal: drive feature click-throughs from the newsletter to a landing page."\n\nBrand Voice reference:\n  Trained on: 6 blog posts from "[company]" (Jan–May 2026), 4 product launch emails, 2 case studies\n  Tone tags: witty, precise, opinionated, no buzzwords\n\nConstraints:\n  - ≤ 600 words\n  - One primary CTA\n  - Include the 1 new feature name and the 1 number that proves its impact',
    sampleOutput:
      'Newsletter draft (~520 words) in 28 seconds, Brand-Voice-true:\n  - Subject: "less logs, more answers"\n  - Hook: anecdote about query latency (matches prior newsletter tone)\n  - Body: 3 sections — what shipped, why it matters, who built it\n  - CTA: "open the dashboard" → points to the analytics page\nBrand-Voice check passed:\n  - "precise, lightly playful" — yes\n  - "no buzzwords" — flagged 2 ("synergy", "leverage") → auto-rewrote\nWorker review: 1 edit needed for the closing anecdote phrasing. Took ~2 min total.',
    benchmarks: [
      { label: 'Founded', value: '2021, Austin TX; raised $131M total', source: 'Jasper company page' },
      { label: 'Plans', value: 'Creator $39/mo; Pro $69/user/mo; Business custom', source: 'Jasper pricing 2026' },
      { label: 'Brand Voice training', value: '~1 minute per voice on 30+ samples', source: 'Jasper product' },
      { label: 'Templates', value: '90+ (Blog, Ads, Email, SEO, Video script)', source: 'Jasper templates gallery' },
      { label: 'Integrations', value: 'Webflow, HubSpot, Surfer SEO, Zapier, Make, Google Docs', source: 'Jasper integrations' },
      { label: 'ARR (2025)', value: '$130M+ (estimated from public disclosures)', source: 'Jasper funding reporting' },
    ],
    decisionAid: {
      pickIf:
        'You\'re a marketing team with a defined brand voice, producing content at scale across channels, and you need approval workflows + multi-seat collaboration.',
      skipIf:
        'You\'re a solo founder who just wants occasional copy help — ChatGPT / Claude is enough. If you\'re already paying for HubSpot, Breeze is included and probably sufficient.',
    },
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
    quickStart: [
      'Breeze is included with HubSpot subscriptions. Free CRM users get Breeze capabilities with usage-credit limits.',
      'Pro+ plans (Marketing Hub Pro / Sales Hub Pro / Service Hub Pro) raise the credit cap; Enterprise plans unlock Breeze Agents more fully.',
      'In the HubSpot CRM sidebar, click the Breeze icon → ask questions about your contacts, deals, content.',
      '"Content Agent": drafts blog posts, emails, landing pages using your HubSpot knowledge base + brand voice.',
      '"Prospecting Agent" + "Sales Agent": research and personalize outreach for Sales Hub Pro users.',
      '"Service Agent": lives in your Service Hub conversations, deflects tier-1 tickets with knowledge-base answers.',
    ],
    sampleInput:
      'Workspace: Acme SaaS — Marketing Hub Pro ($890/mo) + Sales Hub Pro ($150/user/mo)\n\nContent Agent brief:\n  Topic: "How mid-market SaaS companies evaluate AI assistants in 2026 (vs. 2024)"\n  Output: Blog post, 1,400–1,800 words, target keyword "AI assistants for B2B SaaS"\n  Reference: 12 prior blog posts in our HubSpot blog\n  Brand voice: "data-led, opinionated, no fluff; we cite our sources inline"\n\nSales Agent prompt:\n  "Find me 50 mid-market SaaS VPs of Sales with hiring pages mentioning AI tools in the last 30 days."',
    sampleOutput:
      'Blog draft: 1,612 words generated in ~4 minutes. Outline + first draft saved as draft post in HubSpot.\n  - Inline citations: 9 sources (industry reports, comparison studies) auto-linked\n  - SEO score (HubSpot native): 82/100 — keyword density optimal, meta description drafted\n  - Internal links: 4 added automatically (to relevant HubSpot knowledge base pages)\n  - Edit by writer: tightened the intro and replaced 1 example with a 2026 stat (15 min edit)\n\nProspecting list: 47 contacts (3 removed at email verification).\n  - Each contact: title, company, signal page, suggested opener\n  - 1-click send: pushed as sequences to the AE queue in CRM\n  - Avg reply rate: 12.4% (above HubSpot\'s agency benchmark of 8%)',
    benchmarks: [
      { label: 'Plans', value: 'Included with HubSpot subscriptions; higher tiers raise usage caps', source: 'HubSpot product' },
      { label: 'Workspace credit model', value: 'Monthly credits; agents cost 1+ credits per use', source: 'HubSpot pricing 2026' },
      { label: 'Customer base', value: '~290k customers; ~6.5M CRM users globally', source: 'HubSpot Q1 2026 earnings' },
      { label: 'Agents shipped', value: 'Copilot, Content, Sales, Service, Knowledge Base Agent', source: 'HubSpot Breeze launch, INBOUND 2024' },
      { label: 'Compliance', value: 'SOC 2 Type II; GDPR; HIPAA via BAA on Enterprise', source: 'HubSpot trust portal' },
    ],
    decisionAid: {
      pickIf:
        'You already live in HubSpot — Contacts, Deals, Marketing Hub, Service Hub. Breeze is the natural AI layer over your real data, no extra integration.',
      skipIf:
        'You\'re not on HubSpot — getting HubSpot just to use Breeze is overkill; use Jasper, Copy.ai, or chat tools. For pure voice / phone agents, Breeze doesn\'t cover voice — pair with Vapi or Sierra.',
    },
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
    quickStart: [
      'Notion AI is included in all Notion plans for free during preview (limits apply). Notion AI add-on $10/user/mo unlocks full usage.',
      'Click "AI" button on any text block → choose "Ask AI to write / summarize / translate / action items."',
      'For documents: highlight text → ask AI to extract action items, generate TL;DR, simplify, or change tone.',
      'Custom Agents (GA 2026): click "Agents" in the sidebar → pick or build → assign to a page → the agent reads Notion + connected apps (Slack, Google Drive, etc.).',
      'Q&A: type "/" → "AI" → "Ask Notion" → ask in natural language; Notion searches all accessible pages.',
      'Database AI: select a database → click "AI" → auto-fill properties (status summaries, tags, next-action suggestions).',
    ],
    sampleInput:
      'Notion workspace context:\n  - "Q2 Planning" database (32 rows of project briefs)\n  - Connected apps: Slack (3 channels), Google Drive (Q2 OKRs doc), GitHub (acme/website repo)\n\nCustom Agent: "PM Q&A"\n  Trigger: any new comment "@PM-QA" on a project row\n  Action: pull the row brief, search Slack for mentions, summarize relevant Q2 OKRs, respond in Notion\n  Tone: concise, technical\n\nQuestion (typed in Notion AI search):\n  "What are the three biggest risks to the Mobile launch right now?"',
    sampleOutput:
      '"PM Q&A" agent response (auto-posted in comment):\n"Three biggest risks, ranked by mention frequency in Slack #mobile-launch and OKR doc (May 15–Jun 15):\n  1. TestFlight review delays (12 Slack mentions) — OKR §4.2 reference\n  2. App Tracking Transparency consent friction (9 mentions; 2 design review threads attached)\n  3. Push-notification budget overrun (6 mentions, OKR §5.1 target)."\n\nQ&A search response (~3 sec, 4 sources linked):\n  Aggregated answer from 4 pages (1 OKR doc, 2 project briefs, 1 Slack thread) with inline citations.',
    benchmarks: [
      { label: 'Plans', value: 'Included (preview) / $10/user/mo add-on', source: 'Notion pricing 2026' },
      { label: 'Knowledge base scale', value: 'Custom Agent searches across all pages you have access to', source: 'Notion product' },
      { label: 'Connected apps', value: 'Slack, Google Drive, GitHub, Jira, Asana, Linear, +more', source: 'Notion integrations' },
      { label: 'AI queries/day (free)', value: '5 per workspace member', source: 'Notion help center' },
      { label: 'Custom Agents', value: 'GA since March 2026; no-code builder', source: 'Notion product' },
      { label: 'Notion users', value: '~5M paying seats, 100M+ users (gating)', source: 'Notion company blog 2025' },
    ],
    decisionAid: {
      pickIf:
        'You\'re a team whose knowledge base already lives in Notion — wikis, project trackers, meeting notes — and you want an AI that can search it all and run automations across connected apps.',
      skipIf:
        'You need enterprise document governance outside Notion (Microsoft 365 Copilot lives in Teams/SharePoint). For pure creative writing/grammar, Grammarly is more direct.',
    },
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
    quickStart: [
      'Install the Grammarly extension (Chrome, Edge, Safari, Firefox) or the desktop app — sign in with Google or email.',
      'Free tier: grammar, spelling, tone; basic generative rewrites.',
      'Premium $12/mo (annual) / $14.99 month-to-month: full-sentence rewrites, tone adjustments, plagiarism detection, advanced AI generation.',
      'Business $15/user/mo (annual): brand tone, style guide, admin analytics, team usage reporting.',
      'GrammarlyGO: type in any textbox → click the Grammarly icon → prompt "make this clearer" or "summarize this email thread" → output appears inline.',
      '2026 productivity agents: link Gmail / Outlook / Slack → set rules ("rewrite all customer emails into friendly tone") → agent fires automatically.',
    ],
    sampleInput:
      'Email draft (in Gmail):\n\n  "Per my previouse email, I am writing to follow up on the status of our Q3 engagment. As discussed, please find the relevent documentation attatched. I would appreciate if you could revert back at your earliest convinience."\n\nGrammarly suggestions:\n  - spelling: "previouse" → "previous"; "engagment" → "engagement"; "relevent" → "relevant"\n  - attatched → attached\n  - tone: Formal — a bit stiff\nPrompt: "Make this clearer and friendlier, keep it under 80 words"',
    sampleOutput:
      '"Following up on my previous email — could you share where we are with the Q3 engagement? I\'ve attached the relevant docs (and fixed a couple of typos, thanks auto-correct). Happy to jump on a quick call if it\'s easier. — Sam"\n\nGrammarly checks completed in ~2 seconds:\n  - Spelling: 5 fixed (already had them queued from realtime)\n  - Tone shift: Formal → Friendly (suggestion applied)\n  - Sentence clarity: removed "Per my previous email" opener (per Grammarly\'s corporate-tone guidance)\n  - Plagiarism scan: clean (Premium feature)\nTime saved: ~6 minutes per status email × 12 emails/week ≈ 70 min/week.',
    benchmarks: [
      { label: 'Plans', value: 'Free; Premium $12/mo; Business $15/user/mo (annual)', source: 'Grammarly pricing 2026' },
      { label: 'Platforms', value: 'Browser extension (4), desktop app (Mac/Win), iOS/Android keyboards, MS Office add-in', source: 'Grammarly products' },
      { label: 'Active users', value: '40M+ DAU on Grammarly Editor; 30M+ on browser extension', source: 'Grammarly company' },
      { label: 'Languages supported', value: 'English (premium); Spanish, French, German, Portuguese, Italian (basic AI)', source: 'Grammarly docs' },
      { label: 'Tone detection', value: '8 tones (formal, friendly, confident, etc.)', source: 'Grammarly product' },
      { label: 'Brand tone', value: 'Business plan: upload a brand voice guide', source: 'Grammarly Business' },
    ],
    decisionAid: {
      pickIf:
        'You write a lot in tools where Grammarly\'s extension naturally lives (Gmail, Docs, Slack, Notion) and you want both grammar and tone/coherence in one place.',
      skipIf:
        'You only need generative writing or ChatGPT-style Q&A — that\'s not Grammarly\'s core. For technical / programming writing, use GitHub Copilot Chat in your IDE.',
    },
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
    quickStart: [
      'Web: deepl.com — free tier = 1,500 characters per translation, unlimited documents up to 3/month.',
      'Pro ($9/mo starter): unlimited characters, larger docs, glossaries, tone adaptation, CAT tool integration.',
      'Advanced / Ultimate plans ($30+/mo): add API access with usage caps, SSO, and team features on Ultimate.',
      'Translate a doc: drag PDF / DOCX / PPTX onto the page → preserves layout; your glossary applies automatically.',
      'For developers: grab an API key from Pro/Advanced → use the HTTP endpoint or one of the SDKs (Python, Node, .NET, Java).',
      'Quality tip: DeepL wins on natural-sounding output for EN↔FR/DE/ES/IT/JA/ZH; weaker on Hindi/Arabic than Google Translate.',
    ],
    sampleInput:
      'Glossary: deepL-glossary.csv\n  en         → de         ← context\n  invoice    → Rechnung\n  API        → Schnittstelle\n  hour       → Stunde\n\nSource (EN, formal tone):\n"To all stakeholders: please find attached the revised weekly invoice for the May 14 sprint, including the updated API endpoint reference. All reviewer hours have been added to your usual billing line."\n\nSettings:\n  Tone: Formal\n  Glossary: deepL-glossary.csv (auto-applied)',
    sampleOutput:
      'DE (formal, with glossary):\n"An alle Beteiligten: anbei finden Sie die überarbeitete wöchentliche Rechnung für den Sprint vom 14. Mai, einschließlich der aktualisierten Schnittstellen-Referenz. Alle Prüfer-Stunden wurden Ihrer üblichen Abrechnungsposition hinzugefügt."\n\nGlossary check:\n  invoice → Rechnung ✓\n  API → Schnittstelle ✓ (not "API" → better German)\n  hour → Stunde ✓\n\nNote: "please find attached" → "anbei finden Sie" reads naturally in formal German. Marketing copy would shift to "im Anhang"; DeepL picked the right register.',
    benchmarks: [
      { label: 'Plans', value: 'Free; Pro $9/mo; Advanced $30+/mo', source: 'DeepL pricing 2026' },
      { label: 'Languages', value: '31 (vs Google Translate 130+)', source: 'DeepL site' },
      { label: 'BLEU vs Google (EN↔DE legal)', value: '+3.4 BLEU on legal corpus', source: 'DeepL whitepaper' },
      { label: 'Pro character cap', value: 'Unlimited', source: 'DeepL Pro' },
      { label: 'Document translation', value: 'PDF, DOCX, PPTX, HTML layout-preserving', source: 'DeepL docs' },
      { label: 'API TPD (DeepL Ultimate)', value: '~3M characters/month included', source: 'DeepL Ultimate' },
    ],
    decisionAid: {
      pickIf:
        'You translate European-language content where nuance matters — legal, marketing, literature, technical docs. The natural-sounding fluency wins for high-stakes copy.',
      skipIf:
        'You cover 100+ languages (Google Translate) or care more about raw speed and free-tier volume than nuance. For deep technical/medical content where consistency matters, run DeepL with a curated glossary — don\'t trust free output blindly.',
    },
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
    quickStart: [
      'Sign up at udio.com with Google or Discord — free tier includes 10 credits/day (~1–2 short tracks).',
      'Standard $10/mo (annual) or $14 month-to-month: 1,500 credits/month, commercial use, up to 4-min tracks.',
      'Pro $30/mo: 6,000 credits + advanced stem separation + DAW-style inpainting.',
      'Click "Create" → pick mode (Custom = style prompt + lyrics; Audio = extend an uploaded clip).',
      'Add a style prompt with tags ("synth-pop", "female vocal, breathy, R&B") and optional lyrics; choose length (15s up to 4 min).',
      'Generate, then use "Remix" / "Edit" tools to refine specific sections; "Stems" to split vocals / drums / bass.',
    ],
    sampleInput:
      'Mode: Custom\nStyle prompt: "soul ballad, female vocal, aching, Chet Baker trumpet undertone, 78 rpm vinyl crackle, sparse piano + double bass"\nLyrics (excerpt):\n  "I keep your letters in a drawer\n   the ink is fading — like my certainty\n   you said forever like a fairy tale\n   forever ended, oh, so quietly"\nLength: 2:30\nOutput: 4 candidates, mono master → pick 1',
    sampleOutput:
      'Generated 4 candidates in ~62 seconds on Udio 1.5.\n\nPicked candidate #3 — vocal phrasing on the 2nd verse is cleaner; double-bass swell timed correctly with the chorus resolution.\n\nEdit pass: replaced the bridge\'s final line ("quietly" → "oh so quietly") — kept the breath pause.\nStems split (Pro feature): vocals, bass, piano, "other" — 4 WAVs.\nMaster: stereo mix, 2:31, -14 LUFS.\nCost: ~250 credits (Standard plan still has 1,250 left in the month).',
    benchmarks: [
      { label: 'Latest model', value: 'Udio 1.5 (proprietary)', source: 'udio.com' },
      { label: 'Max track length', value: '15 min (Pro tier)', source: 'Udio docs' },
      { label: 'Generate time (2:30)', value: '~60s for 4 candidates', source: 'Udio user benchmarks' },
      { label: 'Standard plan', value: '$10/mo (annual) / $14 month-to-month', source: 'Udio pricing 2026' },
      { label: 'Pro plan', value: '$30/mo — stem separation + inpainting', source: 'Udio pricing 2026' },
      { label: 'Commercial license', value: 'Paid plans (Standard and above)', source: 'Udio ToS' },
    ],
    decisionAid: {
      pickIf:
        'You\'re a working producer who wants stem-level control and section-by-section editing rather than an automatic finished song. Strong vocal expressiveness and remix/inpaint are the picks.',
      skipIf:
        'You just want a finished song with vocals in seconds — Suno is friendlier and has a 50-credit/day free tier. For pure instrumental / sound design, Stable Audio or AIVA win on control.',
    },
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
    quickStart: [
      'Sign up at elevenlabs.io with Google or email — free tier = 10,000 characters/month (~10 min audio).',
      'Starter $5/mo: 30k chars; Creator $22/mo (100k); Pro $99/mo (500k); Scale $330/mo (2M).',
      'Pick from Voice Library (thousands of pre-made voices in 29+ languages) or click "Voice Design" to build one from description.',
      'Instant Voice Clone: upload a 1–3 minute clean sample → ElevenLabs clones within seconds.',
      'Professional Clone (paid): same workflow but the model trains for 4+ hours on legal-consent docs.',
      'For products: use the streaming API (low-latency TTS for agents) or the Projects API for long-form audiobooks.',
    ],
    sampleInput:
      'Target: streaming narration for a 22-page meditation course\nVoice: "Liam — warm, slow, breathy, male, English UK" (Voice Library)\n\nScript (CSS-styled page):\n  "Find a comfortable seat, let your shoulders drop, and gently close your eyes..."\n\nSettings:\n  Model: Eleven Multilingual v2 (29 languages)\n  Latency: ~120 ms streaming\n  Stability: 0.65 (balance expression + consistency)\n  Clarity: 0.85\n  Style exaggeration: 0.3',
    sampleOutput:
      '22-minute meditation course narrated in ~12 min wall-clock (2× real-time streaming).\n  Pages 1–22: clean narration, natural breath rhythm respected, no prosody resets.\n  Emotion curve: stays calm, drops slightly on "let it dissolve" cues — as prompted in stability settings.\n  Used ~80k characters (Creator plan capacity).\nA/B test vs in-house voice talent: 73% of test listeners could not reliably distinguish ElevenLabs from the real voice.\nCost vs studio session: $1.10 for narration vs $1,800 for a 90-min voice session.',
    benchmarks: [
      { label: 'TTS languages', value: '29 (Eleven Multilingual v2)', source: 'ElevenLabs models 2026' },
      { label: 'Plans', value: 'Free / Starter $5 / Creator $22 / Pro $99 / Scale $330', source: 'ElevenLabs pricing 2026' },
      { label: 'Voice Library size', value: '5,000+ community voices', source: 'ElevenLabs' },
      { label: 'Streaming latency', value: '~120ms (WebSocket)', source: 'ElevenLabs API docs' },
      { label: 'Voice Reality Check (realism audit)', value: '#1 in 2025 independent audits', source: 'ElevenLabs white paper' },
      { label: 'Used by', value: 'Wikipedia audio, NYT Audio, TheSoul Publishing, Pocket FM', source: 'ElevenLabs customers' },
    ],
    decisionAid: {
      pickIf:
        'You need the most natural-sounding AI voices for narration, voice agents, character voice, or dubbing. The standard for any product that needs TTS at production scale.',
      skipIf:
        'You want fully open-weights voice AI you can self-host and trust fully (Coqui XTTS / OpenVoice) — these lag on quality but are private. For sub-100ms TTS at scale, Cartesia Sonic 2 is faster.',
    },
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
    quickStart: [
      'Sign up at heygen.com with Google/email — free trial grants ~1 credit + 1 stock avatar video.',
      'Creator $24/mo (annual) / $29 month-to-month: 100 credits, 30+ languages, brand kit, custom avatar.',
      'Pro $72/mo: 300 credits + team seats + custom avatar with your face (consent flow captured).',
      'Enterprise: API access + SSO + custom SLAs.',
      'Click "Create Video" → pick a workflow: Avatar Lite (no script), Avatar Pro (script + edit), or Templates.',
      'Pick an Avatar (Stock, Photo, or your Avatar 2.0 — 2 minutes of phone-recorded footage) and type a script in any of 40+ languages.',
    ],
    sampleInput:
      'Workflow: Avatar Pro\nAvatar: stock "Ava-Relaxed" (calm female, business setting)\nScript (English, 90s):\n\n  "Welcome to Acme Bank\'s quarterly highlights. This quarter we shipped the new mobile deposit feature, cut mortgage processing time by 47%, and grew active users 18%. Next quarter, watch for our small-business checking launch. Thank you for banking with us."\n\nBrand kit: logo + colors [Blue 1A2B4C / Accent 6FCE6F]\nOutput: 1920×1080 MP4, accent text overlays on key numbers',
    sampleOutput:
      'Rendered 90s video in 5m 18s (Creator plan, stock avatar).\n  - Lip sync: all numbers ("18%", "47%") aligned cleanly.\n  - Custom brand overlay: rendered correctly with accent green.\n  - Pronunciation: "Acme" verified correct; "mortgage" intonation perfect.\n  - Final MP4: 18.4 MB, 1080p, H.264, ready for download.\nCost: 1 credit (~$0.30 in Creator plan; $0.20 in Pro at scale).',
    benchmarks: [
      { label: 'Latest models', value: 'Avatar 4 (Nov 2025), Photo Avatar 2', source: 'HeyGen blog' },
      { label: 'Plans', value: 'Free trial; Creator $24/mo; Pro $72/mo; Enterprise custom', source: 'HeyGen pricing 2026' },
      { label: 'Languages', value: '40+', source: 'HeyGen docs' },
      { label: 'Render time (90s)', value: '5 min (Creator plan)', source: 'HeyGen user benchmarks' },
      { label: 'API', value: 'Available on Enterprise (BYOK to your translate pipeline)', source: 'HeyGen Enterprise' },
      { label: 'Active users', value: '40k+ (startups, educators, marketers)', source: 'HeyGen site 2026' },
    ],
    decisionAid: {
      pickIf:
        'You want quick talking-head video without filming — testimonials, internal comms, marketing videos, sales outreach at scale. Lip sync quality is now genuinely believable.',
      skipIf:
        'You need real human presence (live-action shoots with a real crew), or you\'re producing 30+ minute long-form video (cost climbs fast). For corporate L&D at scale with governance, Synthesia.',
    },
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
    quickStart: [
      'No free tier. Sign up at synthesia.io → book a sales call for Enterprise; self-serve pricing starts at $29/mo Starter.',
      'Starter $29/mo: 1 editor seat, 10 minutes of video/month, 60+ stock avatars.',
      'Creator $89/mo: more minutes, custom avatar upload + brand kit.',
      'Enterprise: SSO, custom AI avatars with face/voice cloning (consent captured by Synthesia), API, bulk script upload, dedicated CSM.',
      'In the Studio: pick a template, type a script in 140+ languages, drag avatars onto scenes.',
      'Render up to 4K; download MP4 or push to LMS via SCORM export.',
    ],
    sampleInput:
      'Studio config (Enterprise):\n\nUse case: "Quarterly All-Hands Update" — 8-minute video for 18k employees globally.\n\nAvatars:\n  - "Marcus-Polite" (CFO) — opens with Q1 numbers\n  - "Aisha-Warm" (COO) — covers operations\n  - "Sven-Casual" (CEO) — closing remarks\n\nBranding:\n  - Background: corporate template (deep blue, gold accent)\n  - Logo top-right\n  - Captions auto-burned in EN; DE/FR/JA subtitles as separate files\n\nScript:\n  /studio/all-hands-q1.md (Markdown) → Synthesia parses into 24 scenes\n\nExport:\n  - MP4 1920x1080, 8m12s, H.264\n  - Subtitles: .vtt (EN, DE, FR, JA)\n  - SCORM 2004 zip for LMS upload',
    sampleOutput:
      'Generated 8m12s all-hands in ~14 minutes.\n  Total renders: 3 (first pass + 2 minor corrections to CFO segment).\n  Compliance: enterprise SSO + audit log captured all edits.\n  Distribution: LMS push + email + screen capture for 18k employees (one link, auto-play in 4 languages).\nEngagement (post-deploy):\n  - Watch-through rate: 78% (vs 41% for last quarter\'s slide deck)\n  - Subtitle usage: 38% opted DE/FR/JA over EN\n  - Cost vs producing in-studio: ~$240 (Synthesia Enterprise overage + internal time) vs $14k vendor quote',
    benchmarks: [
      { label: 'Avatars', value: '230+ stock; 140+ languages', source: 'Synthesia site 2026' },
      { label: 'Plans', value: 'Starter $29/mo; Creator $89/mo; Enterprise custom', source: 'Synthesia pricing 2026' },
      { label: 'Custom avatar', value: 'AI avatar with face + voice, consent baked in', source: 'Synthesia Enterprise' },
      { label: 'Compliance', value: 'SOC 2 Type II, ISO 27001, GDPR; custom DPA available', source: 'Synthesia trust portal' },
      { label: 'Used by', value: '50%+ Fortune 100; 60M+ videos generated since launch', source: 'Synthesia site' },
    ],
    decisionAid: {
      pickIf:
        'You\'re an L&D or corporate-comms team producing training, onboarding, or internal updates at scale — multilingual matters, and you need governance (audit, SSO, DPA) that consumer tools lack.',
      skipIf:
        'You\'re a creator or startup that just needs one or two fast talking-head videos monthly — HeyGen at $24/mo is cheaper and more flexible. For cinematic real-person quality, film it.',
    },
  },

  // ============= 2026-Q2 新增（英文市场流量补强）=============

  // ---------------- Coding: Trae（ByteDance）----------------
  {
    slug: 'trae',
    name: 'Trae',
    tagline: 'ByteDance\'s AI-native IDE — free tier, one-click import from Cursor/VS Code, multi-model.',
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://trae.ai',
    tags: ['ide', 'byte-dance', 'multi-model', 'free-tier', 'global'],
    pricing:
      'Free tier (4 SOLO runs/day); Pro $10/mo (annual) — unlimited SOLO + premium models + CUE Pro; Teams custom. International build runs Claude Sonnet 4 / GPT-4o / DeepSeek / Doubao-1.5-pro.',
    verdict:
      'The fastest-growing IDE of 2026 Q2 — 6M+ registered users, 98% Chinese-prompt accuracy, half the price of Cursor Pro for premium features.',
    description:
      'Trae is an AI-native IDE shipped by ByteDance in 2025 and rolled out globally through 2026 Q2. Built on a VS Code fork, it supports one-click import of extensions/themes/shortcuts from Cursor or VS Code. Inside the IDE, Trae layers three agent modes — SOLO (end-to-end full app), Builder (project scaffolding), and inline prediction (CUE) — on top of a multi-model picker (Claude / GPT-4o / DeepSeek / Doubao-1.5-pro). It targets the same segment as Cursor and Windsurf but with a notably freer free tier.',
    useCases: [
      'Solo developers who want a free Cursor-like AI IDE',
      'Coders migrating from Cursor / VS Code with zero setup cost',
      'International teams needing multi-language IDE support (Chinese 98% accuracy)',
      'Full-app builds from a single prompt',
    ],
    pros: [
      'Free tier with 4 SOLO runs/day — no trial window limits',
      'One-click import of Cursor / VS Code settings, themes, keymaps',
      'Multi-model picker (Claude Sonnet 4, GPT-4o, DeepSeek, Doubao)',
      'Strongest Chinese-language prompt accuracy on the market (98%)',
    ],
    cons: [
      'Pro features (unlimited SOLO + premium models) cost $10/mo, similar shape to Cursor',
      'Brand recognition outside Chinese markets still catching up to Cursor',
      'Editor ecosystem (extensions, themes) narrower than Cursor/VS Code',
    ],
    models: ['Claude Sonnet 4', 'GPT-4o', 'DeepSeek V3/R1', 'Doubao-1.5-pro'],
    alternatives: ['cursor', 'windsurf', 'claude-code'],
    quickStart: [
      'Go to trae.ai and download the IDE for macOS / Windows / Linux (English build).',
      'Create an account with email or Google — free tier is unlimited on basic features.',
      'On first launch, choose "Import from Cursor" or "Import from VS Code" to copy settings, extensions, themes, keymaps in one click.',
      'Press Cmd+I / Ctrl+I to open inline AI chat; Cmd+L / Ctrl+L opens the Side Chat panel.',
      'Switch model: in the AI panel, pick Claude Sonnet 4 / GPT-4o / DeepSeek / Doubao per task — switching is one click.',
      'For end-to-end app builds, activate "SOLO Mode" from the top bar; describe the app, watch the agent scaffold it.',
    ],
    sampleInput:
      'Project: small e-commerce site, Next.js 14 + Tailwind + Stripe test checkout\n\nIn SOLO Mode:\n"Build a Next.js 14 storefront with: 6 product cards on the homepage, product detail pages, cart with Zustand, and a Stripe test-mode checkout. Use Tailwind. Add a /admin route stub. Deploy target is Replit."\n\nIn inline editor, hovering utils.ts:\n"Add a TypeScript-native deep merge that preserves arrays (not Object.assign). Add tests."',
    sampleOutput:
      'SOLO build (4m 18s on Trae Pro):\n  Next.js project created at workspace/next-storefront\n  Files touched: 38\n  - src/app/page.tsx — 6 product cards, layout grid\n  - src/app/product/[slug].tsx — detail page, add-to-cart\n  - src/lib/cart.ts — Zustand store (8 actions)\n  - src/lib/deepMerge.ts — TypeScript-native, preserves arrays\n  - src/lib/deepMerge.test.ts — 4 test cases, all pass\n  \n  npm run build: passes\n  4 npm warnings (deprecated packages) — noted, not blocking\n  Deploy: "Live preview" turned on, Vercel-deployable\n\nCost: Free tier (4 SOLO runs/day) on basic; Pro $10/mo for unlimited + premium models.',
    benchmarks: [
      { label: 'Funding / parent', value: 'ByteDance, 2026 Q2 international rollout', source: 'Trae site' },
      { label: 'Models supported', value: 'Claude Sonnet 4, GPT-4o, DeepSeek V3/R1, Doubao 1.5 Pro', source: 'Trae product' },
      { label: 'Plans', value: 'Free (4 SOLO/day); Pro $10/mo annual; Teams custom', source: 'Trae pricing 2026' },
      { label: 'Users (cumulative)', value: '6M+ registered', source: 'Trae site 2026' },
      { label: 'Chinese-prompt accuracy', value: '9.8/10 (best in class)', source: 'CSDN 2026 review' },
      { label: 'One-click import', value: 'Cursor / VS Code settings, extensions, shortcuts', source: 'Trae docs' },
    ],
    decisionAid: {
      pickIf:
        'You want an AI-native IDE with a generous free tier, strong multi-language support, and the lowest friction from Cursor or VS Code (one-click import). Strong pick if you optimize for $/month over the top benchmark.',
      skipIf:
        'You need the top SWE-bench scores (Claude Code is the leader) or you need the agent available on headless Linux / remote dev-server environments (Trae is desktop-centric).',
    },
  },

  // ---------------- Automation: Dify ----------------
  {
    slug: 'dify',
    name: 'Dify',
    tagline: 'Open-source LLM app platform — build production AI apps with RAG, agents, and workflows.',
    category: 'automation',
    license: 'open-source',
    licenseName: 'BSL 1.1 (open-core, no SaaS resale until 2027)',
    selfHost: true,
    difficulty: 2,
    website: 'https://dify.ai',
    github: 'https://github.com/langgenius/dify',
    stars: 80000,
    updated: '2026-07',
    tags: ['no-code', 'rag', 'llm-platform', 'self-host', 'open-source'],
    pricing:
      'Cloud: Sandbox free (limited); Starter $59/mo (5k messages); Pro $159/mo (unlimited). Self-host: free under BSL 1.1.',
    verdict:
      'The go-to open-source LLM platform — Ship AI apps with RAG + agents + workflows without rebuilding infra. Self-hostable, model-agnostic, and Forbes AI 50 listed.',
    description:
      'Dify is an open-source platform for building production-grade AI applications. It exposes a unified visual builder for chatbots, agents, RAG pipelines, and human-in-loop workflows, then publishes the result as an API or web app. Dify supports 75+ LLM providers behind one OpenAI-compatible interface, hybrid retrieval (BM25 + vector + rerank) for 20+ document formats, and a built-in tool ecosystem (webhooks, Google search, Slack, SQL, custom HTTP). Its open-core BSL license allows commercial self-hosting and excludes only SaaS resale until 2027, after which it goes fully Apache. The platform is Forbes AI 50-listed in 2026 with an estimated valuation of $2.1B.',
    useCases: [
      'Build internal Q&A agents over company wikis / docs / Notion / GitHub',
      'Customer-support agents with RAG over help center articles',
      'Multi-step agent workflows (research, summarize, post to Slack / HubSpot)',
      'Self-hosted AI gateway: one OpenAI-compatible endpoint for all your teams',
    ],
    pros: [
      'True model-agnostic — OpenAI, Anthropic, Bedrock, Cohere, Hugging Face, Ollama, LM Studio, etc.',
      'Hybrid retrieval (BM25 + vector + rerank) outperforms pure vector RAG',
      'Self-host on your own infra (Docker compose) keeps data in-house',
      'One platform for Chatbot / Agent / Workflow / RAG — no stitching multiple vendors',
    ],
    cons: [
      'Cloud pricing ($59/mo for 5k messages) is steeper than per-call AI gateways',
      'BSL license prohibits SaaS resale until 2027 (commercial use OK)',
      'Self-host setup assumes Docker / K8s / DevOps capacity',
    ],
    models: ['OpenAI', 'Anthropic', 'Azure OpenAI', 'AWS Bedrock', 'Cohere', 'Hugging Face', 'Ollama (local)', 'LM Studio', 'Replicate'],
    alternatives: ['zapier-agents', 'make', 'langgraph'],
    quickStart: [
      'Cloud: go to dify.ai → sign up free — 200 message credits on Starter ($59/mo).',
      'Self-host: clone github.com/langgenius/dify → docker compose up -d (Docker required).',
      'Click "Create App" → choose type: Chatbot / Agent / Workflow / Completion / Text generator.',
      'Pick a model provider: OpenAI / Anthropic / Bedrock / Cohere / Ollama / self-hosted LM Studio.',
      'Add a Knowledge Base (RAG): upload PDFs / CSVs / Notion sync / web crawl → Dify chunks, embeds, and indexes automatically.',
      'Wire up tools (Google Search, webhooks, send email, SQL queries) → publish as an API or share as an embeddable web widget.',
    ],
    sampleInput:
      'App: "Internal Q&A Agent for Engineering"\nType: Agent\nModel provider: Anthropic Claude Sonnet 4\nSystem prompt: "You answer engineering questions about our repo acme/cloud. Use only the provided Knowledge Base. If unsure, say so explicitly and link to the closest doc."\n\nKnowledge Base:\n  - 28-day crawl of docs.acme.io\n  - synced GitHub repo (auto-refresh on PR merge)\n  - 12 architecture PDFs uploaded manually\n\nTools enabled:\n  - Web search (DDG)\n  - Slack post-message\n\nChannel deployment:\n  - Slack app: /ask (Slash command)\n  - Web widget (embed on internal portal)\n  - API: POST /v1/chat-messages with X-API-Key',
    sampleOutput:
      'Production behavior (90 days):\n  - Total queries: 14,820\n  - Resolved from KB without hallucination: 12,610 (85%)\n  - "I don\'t know, let me search" returns: 1,420 (9.6%)\n  - Hard escalation to human: 790 (5.3%)\n  - Slack engagements increased 28%; internal wiki hits dropped 22%\nLatency: P50 1.2s, P95 3.8s with Claude Sonnet 4 + hybrid RAG.\nCost: $240/mo Sonnet 4 + $0 self-host on existing 8-core VM.\nOperational note: 2% of answers hallucinated outside the KB — added a "post-hoc KB guardrail agent" that re-checks each response and flags suspicious answers for review.',
    benchmarks: [
      { label: 'GitHub stars', value: '80k+ on github.com/langgenius/dify', source: 'GitHub 2026' },
      { label: 'License', value: 'BSL 1.1 (open-core, full Apache after 2027)', source: 'Dify LICENSE' },
      { label: 'Plans', value: 'Cloud: Sandbox free / Starter $59/mo / Pro $159/mo; self-host free', source: 'Dify pricing 2026' },
      { label: 'Model providers', value: 'OpenAI, Anthropic, Azure, AWS Bedrock, Cohere, HF, Ollama, LM Studio, Replicate', source: 'Dify models' },
      { label: 'Knowledge retrieval', value: 'Hybrid (BM25 + vector) + re-rank; supports 20+ formats', source: 'Dify docs' },
      { label: 'Forbes AI 50 list (2026)', value: '~$2.1B valuation', source: 'Forbes AI 50, Apr 2026' },
    ],
    decisionAid: {
      pickIf:
        'You want a self-hostable, low-code platform to build production-grade AI apps with RAG, agents, and workflows under your own data — without paying per-call API tax to a vendor.',
      skipIf:
        'You only need simple no-code personal agents (Lindy is friendlier) or pure visual automations without AI (Make is cheaper). For pure LLM agent frameworks with code, LangGraph or CrewAI.',
    },
  },

  // ---------------- Coding: JetBrains Junie ----------------
  {
    slug: 'junie',
    name: 'JetBrains Junie',
    tagline: 'JetBrains-native coding agent — runs inside IntelliJ, PyCharm, WebStorm, and GoLand.',
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.jetbrains.com/junie/',
    tags: ['jetbrains', 'ide-native', 'plan-mode', 'enterprise', 'polyglot'],
    pricing:
      'AI Free (6 Junie chats/month on JetBrains account); AI Pro $10/mo or AI Pro+ $20/mo (Junie + inline completion + JetBrains AI Premium features).',
    verdict:
      'The default coding agent for JetBrains users — speaks IntelliJ\'s run configs, debugger, and test runner. Plan Mode with test-driven verification sets it apart.',
    description:
      'JetBrains Junie is the vendor-native AI coding agent built by JetBrains. It installs as a plugin into IntelliJ IDEA, PyCharm, WebStorm, GoLand, CLion, RustRover, Rider, RubyMine, and DataSpell — all of which already have 10M+ developers as a combined base. Junie runs Claude (Sonnet 4 / Opus 4) in the cloud and offers two modes: Ask (read-only Q&A about code) and Plan (multi-step task with explicit verification at each step, including running tests). It integrates with existing JetBrains run configurations, the debugger, and the test runner — a notable difference from generic IDE plugins.',
    useCases: [
      'JetBrains users who want a vendor-native coding agent that knows their IDE',
      'Multi-step feature implementation with test-driven verification',
      'Polyglot teams (Java, Kotlin, Python, Go, Rust, JS/TS) on one JetBrains stack',
      'Enterprise teams that already pay JetBrains for IDE licenses',
    ],
    pros: [
      'Plan Mode with test-driven verification — not just LLM-generated code, but proof of passing tests',
      'Vendor-native: talks to your existing run configs, debugger, test runner',
      '10M+ JetBrains IDE developer base — instant onboarding',
      'Multi-language across the full JetBrains fleet',
    ],
    cons: [
      'Won\'t run on VS Code / Cursor / Vim — JetBrains only',
      'AI free tier is steeply limited (6 Junie chats/month)',
      'Cloud-only runs (no fully-local execution path for sensitive code)',
    ],
    models: ['Claude Sonnet 4', 'Claude Opus 4'],
    alternatives: ['cursor', 'windsurf', 'opencode', 'copilot'],
    quickStart: [
      'Open IntelliJ IDEA / PyCharm / WebStorm / GoLand (2024.3 or newer) → Tools menu → install the "Junie" plugin.',
      'Sign in with your JetBrains account — free tier includes 6 Junie chat interactions per month.',
      'AI Pro $10/mo or AI Pro+ $20/mo unlocks unlimited Junie plus inline completion across all JetBrains IDEs.',
      'In the editor: highlight code → right-click → "Ask Junie". Or open the Junie tool window on the right side for a chat panel.',
      'For multi-step tasks: type /plan or click "Plan Mode" → Junie lists steps → approve → it runs them with test-driven verification at each.',
      'Junie understands your Git state, existing run configurations, and tests — it uses what you already have, not generic scaffolding.',
    ],
    sampleInput:
      'Project: PyCharm 2025.3, Python 3.12, FastAPI backend\n\nIn Junie Plan Mode:\n"Add a /v1/billing endpoint that:\n  - Accepts POST with customer_id (UUID) + amount_usd (Decimal)\n  - Loads customer from Postgres (sqlalchemy async session)\n  - Strips a 2.9% + 30¢ fee, deposits the net to Stripe via existing stripe_service.create_transfer\n  - Returns 201 with txn_id, or 4xx with error code\nWrite the test cases that cover happy path, insufficient-funds, and stripe-timeout. Run pytest at the end and ensure all pass."',
    sampleOutput:
      'Junie execution log (3m 42s on AI Pro tier):\n  Step 1 — Plan: 6 sub-tasks identified; showed diff preview.\n  Step 2 — Created app/api/v1/billing.py (62 lines, type-safe with Decimal handling).\n  Step 3 — Added SQLAlchemy async loader pattern.\n  Step 4 — Reused stripe_service.create_transfer (no duplication).\n  Step 5 — tests/v1/test_billing.py (8 tests, 3 categories).\n  Step 6 — Ran pytest:\n    8 passed in 1.7s\n    Coverage of billing.py: 96%\nFinal summary: "Implemented /v1/billing with full test pass. No existing tests were broken (12/12 in unrelated tests remain green)."\nNo auto-commit (Junie pauses for git commit approval by default).',
    benchmarks: [
      { label: 'Plans', value: 'AI Free (6 chats/mo); AI Pro $10/mo; AI Pro+ $20/mo', source: 'JetBrains pricing 2026' },
      { label: 'IDEs supported', value: 'IntelliJ, PyCharm, WebStorm, GoLand, CLion, RustRover, Rider, RubyMine, DataSpell', source: 'JetBrains Junie docs' },
      { label: 'Mode', value: 'Plan mode + Ask mode (read-only Q&A)', source: 'JetBrains Junie docs' },
      { label: 'Engines', value: 'Claude Sonnet 4 / Opus 4 (Anthropic)', source: 'JetBrains Junie' },
      { label: 'JetBrains IDE user base', value: '10M+ developers', source: 'JetBrains 2025 disclosure' },
      { label: 'SWE-bench Verified', value: 'Top 10 tier (Junie AI Pro)', source: 'JetBrains 2026 update' },
    ],
    decisionAid: {
      pickIf:
        'You live in JetBrains IDEs (IntelliJ / PyCharm / WebStorm / GoLand), hate IDE-switching, and want a vendor-native coding agent that talks to your existing run configs, debugger, and test runner.',
      skipIf:
        'Your editor is VS Code / Cursor / Vim — Junie doesn\'t run there. For open-source terminal-coding agents, OpenCode or Aider.',
    },
  },

  // ---------------- Coding: OpenCode (anomaly) ----------------
  {
    slug: 'opencode',
    name: 'OpenCode',
    tagline: 'Open-source terminal coding agent — 75+ LLM providers, runs locally, MIT-licensed.',
    category: 'coding',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://anomaly.to/opencode',
    github: 'https://github.com/anomalyco/opencode',
    stars: 158000,
    updated: '2026-07',
    tags: ['terminal', 'multi-model', 'mit', 'self-host', 'cli'],
    pricing: 'Free (MIT); you bring your own API key (Anthropic / OpenAI / Ollama / Groq / etc.).',
    verdict:
      'The Linux-loved, MIT-licensed answer to Claude Code — most flexible coding agent of 2026 with 75+ provider integrations and full TUI + IDE support.',
    description:
      'OpenCode is a fully open-source terminal coding agent built by Anomaly. Shipped as a native TUI plus plugins for Neovim, Helix, Emacs, and a VS Code fork in beta, it speaks 75+ LLM providers through one unified interface — Anthropic, OpenAI, Google, AWS Bedrock, Groq, OpenRouter, and any Ollama-served local model. It comes with LSP support for TypeScript, Go, Python, and Rust built in, and offers an immutable encrypted /share URL mode for handing off sessions. With 158k+ GitHub stars, OpenCode is the largest open-source coding agent not built on top of one vendor\'s tooling.',
    useCases: [
      'Linux/server developers who want a coding agent without a desktop GUI',
      'Teams needing a vendor-neutral, MIT-licensed agent for compliance',
      'Mixed-cloud setups that span Anthropic + OpenAI + local Ollama',
      'TUI / Neovim / Helix users wanting agent mode in their editor',
    ],
    pros: [
      'Fully MIT-licensed, no vendor lock-in',
      '75+ LLM providers through one unified CLI',
      'Built-in LSP for TypeScript / Go / Python / Rust',
      'Encrypted immutable /share URLs for session hand-off',
    ],
    cons: [
      'TUI-first interface is not for users wanting a polish-heavy GUI',
      'VS Code extension is in beta (use Cursor or Windsurf for VS Code-native feel)',
      'You bring your own API key — costs depend on your provider pick',
    ],
    models: ['Claude Sonnet 4 / Opus 4', 'GPT-4o', 'Google Gemini 3', 'AWS Bedrock', 'Groq', 'OpenRouter', 'Ollama (local)', 'any OpenAI-compatible endpoint'],
    alternatives: ['claude-code', 'codex', 'aider', 'windsurf'],
    quickStart: [
      'Install: brew install anomaly/tap/opencode (macOS) / scoop install opencode (Windows) / curl-sh (Linux).',
      'cd into any git repository → run `opencode` → TUI launcher appears.',
      'Pick your model provider from the in-app picker: Anthropic / OpenAI / Google / Bedrock / Groq / OpenRouter / local Ollama.',
      'Type `/` for slash commands: /models, /session, /share; Tab toggles between them.',
      'For LSP-aware edits: OpenCode ships with TypeScript / Go / Python / Rust LSP support; enable per-project with `opencode.json`.',
      'Share a session: type `/share` → produces an immutable, encrypted conversation URL (great for handing off debugging sessions to a teammate).',
    ],
    sampleInput:
      'Repo: acme/multi-tenant-saas (Go module, ~40k LOC, Postgres backend)\n\nopencode> "We\'re hitting a memory leak in the metrics exporter — p99 RSS climbs 80MB/hour under load. Reproduce in test, identify root cause, fix, run benchmarks. Don\'t change public APIs."\n\nSelected model: Claude Opus 4 (reasoning mode)\n\nSlash: /share →  yields share link after task',
    sampleOutput:
      'OpenCode TUI session log (16m elapsed):\n\nStep 1: Created branch fix/metrics-leak.\nStep 2: Ran `go test -bench=. ./internal/metrics` to reproduce baseline. RSS climbs at +0.93 MB per 10k req.\nStep 3: Traced allocation: found that *http.Request bodies were kept by the global exporter in a sync.Map without eviction.\nStep 4: Generated patch (4 file edits, 32 lines net):\n  - Replaced sync.Map with bounded LRU (size 4096).\n  - Added per-request context.WithTimeout(15s) for spillover cleanup.\n  - Added test case testing/replay_test.go.\nStep 5: Re-ran benchmarks: RSS growth -94.3% (-88 MB → -5 MB over an hour under the same load).\nStep 6: All tests green (12,488 of 12,488 pass). No public API changes.\nStep 7: /share generated share URL with full transcript + diff.\n\nWrote commit: "fix(metrics): bound exporter in-memory map to address RSS leak".',
    benchmarks: [
      { label: 'GitHub stars', value: '158k+ (anomalyco/opencode)', source: 'GitHub 2026' },
      { label: 'License', value: 'MIT (fully open source)', source: 'opencode GitHub' },
      { label: 'Provider integrations', value: '75+ LLM providers via unified API', source: 'OpenCode docs' },
      { label: 'TUI / Editor', value: 'Native terminal UI + plugins (Neovim, Helix, Emacs); VS Code fork in beta', source: 'OpenCode docs' },
      { label: 'LSP support', value: 'TypeScript / Go / Python / Rust (built-in)', source: 'OpenCode product' },
      { label: 'Share mode', value: 'Encrypted, immutable session URLs', source: 'OpenCode docs' },
    ],
    decisionAid: {
      pickIf:
        'You want a fully open-source coding agent with strong Linux / container / CI support, no vendor lock-in, and the freedom to pick any model (including local Ollama). The OSS Claude Code.',
      skipIf:
        'You need a polish-heavy GUI IDE experience (Cursor or Windsurf). For JetBrains, Junie. For broader cross-IDE AI chat, Copilot Chat.',
    },
  },

  // ---------------- Coding: CodeRabbit (PR review) ----------------
  {
    slug: 'coderabbit',
    name: 'CodeRabbit',
    tagline: 'AI PR reviewer — line-by-line comments on every PR within minutes, free for OSS.',
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://coderabbit.ai',
    github: 'https://github.com/coderabbit',
    tags: ['pr-review', 'github', 'gitlab', 'bitbucket', 'dev-tools'],
    pricing:
      'Free for public repos; Pro $12/dev/mo for private repos (per-developer billing); Enterprise custom with SSO/audit/on-prem.',
    verdict:
      'The default AI PR reviewer on GitHub — line-by-line comments, walkthrough of changes, and a chat to ask follow-ups. Free for OSS, $12/dev/mo otherwise.',
    description:
      'CodeRabbit is an AI code reviewer that lives inside pull requests on GitHub, GitLab, Bitbucket, and Azure DevOps. Within ~2 minutes of opening a PR, it posts a top-level walkthrough plus a stream of inline line-by-line comments with concrete fix suggestions (often code-diff level). It is aware of your formatter (Ruff, Mypy, ESLint, Prettier, Clippy, etc.), your test runner, and your CI failures, and it can produce both stylistic and logical feedback. Pricing tiers: free for public/open-source repos; Pro at $12/dev/mo for private repos with full review features; Enterprise tier adds SSO, audit logs, custom models, RBAC, and on-prem deployment.',
    useCases: [
      'Pull-request reviews on private repos with concrete fix suggestions',
      'Style + lint enforcement at PR time (Ruff, Mypy, ESLint, Prettier-aware)',
      'Walking a new contributor through a complex PR via walkthrough + chat',
      'Free OSS repo reviews with no per-dev cost',
    ],
    pros: [
      'Free for public/open-source repos — no per-dev cost on OSS',
      '~2-minute review SLA per PR — fast turnaround',
      'Walkthrough + chat mode for follow-up questions on the same PR',
      'Tooling-aware: integrates with your formatter and linter configs',
    ],
    cons: [
      'PR review isn\'t a substitute for end-to-end coding agents (Cursor / Windsurf)',
      'Free OSS tier is review-only; Pro $12/dev/mo is per-developer (gets expensive on large teams)',
      'Cloud-only (Enterprise tier supports on-prem)',
    ],
    models: ['GPT-4o', 'Claude Sonnet 4', 'Gemini 3 Pro'],
    alternatives: ['copilot', 'cursor'],
    quickStart: [
      'Go to coderabbit.ai → "Sign in with GitHub" (or GitLab / Bitbucket / Azure DevOps).',
      'Install the GitHub App on your org or specific repos. Free on public repos; Pro $12/dev/mo on private.',
      'Open any PR → CodeRabbit posts a review within 1–3 minutes with inline comments + summary.',
      'Click "Chat" on the PR → talk to CodeRabbit to ask for changes, fixes, or clarifications.',
      'Add a `.coderabbit.yaml` to customize review focus (style guide, auto-suggestions, walkthrough level).',
      'Enterprise tier: SSO, audit logs, custom models, RBAC, and on-prem install for regulated teams.',
    ],
    sampleInput:
      'Repo: acme/api-server (private, Python / FastAPI)\nPR #1842: "Add /v1/billing endpoint"\n\nCodeRabbit config (.coderabbit.yaml):\n  reviews:\n    profile: detailed\n    auto_suggestions: true\n    walkthrough_level: high\n  tools:\n    ruff: enable\n    mypy: enable\n\nPR diff (+220 lines): adds billing.py, tests, alembic migration.',
    sampleOutput:
      'CodeRabbit review (2m 11s after PR opened):\n\nSummary comment on PR:\n"Adds /v1/billing with 3 distinct handlers, 6 new DB columns, and 8 test cases. Suggests 4 refactors before merge: (a) split the 142-line billing_service.py into 3 single-responsibility modules, (b) replace manual Decimal arithmetic with `decimal.Decimal.quantize`, (c) extract retry policy into the stripe abstraction, (d) tighten test isolation."\n\nInline comments (12 total, 3 actionable):\n  - billing.py:84 — "Use `Decimal.quantize(Decimal(\'0.01\'))` instead of rounding manually"\n  - billing.py:131 — "Consider `stripe.Transfer.create(..., idempotency_key=...)` to prevent double-charges"\n  - tests/test_billing.py:62 — "This test depends on real Stripe — use `stripe-mock` for CI"\n\nWalkthrough mode: "Path A → Customer lookup → Decimal math → Stripe transfer → Response"\nChat: "What\'s the failure mode if Stripe returns 502? Re-route to retry queue? Add a circuit breaker?"\n\nAfter applying suggestions: 4 file changes, ruff + mypy clean, all 8 new tests pass.',
    benchmarks: [
      { label: 'Free / paid model', value: 'Free for OSS; Pro $12/dev/mo; Enterprise custom', source: 'CodeRabbit pricing 2026' },
      { label: 'Integrations', value: 'GitHub, GitLab, Bitbucket, Azure DevOps', source: 'CodeRabbit docs' },
      { label: 'Review speed', value: '~2 minutes from PR open', source: 'CodeRabbit product' },
      { label: 'Tooling awareness', value: 'Ruff, Mypy, ESLint, Prettier, Clippy, etc.', source: 'CodeRabbit docs' },
      { label: 'Walkthrough / chat', value: 'PR-level walkthrough + chat for follow-ups', source: 'CodeRabbit product' },
      { label: 'Used by', value: '2M+ developers on 1M+ repos', source: 'CodeRabbit site 2026' },
    ],
    decisionAid: {
      pickIf:
        'You want every PR reviewed by an AI within minutes without spending reviewer hours — especially on private repos where code quality and CI signal regressions matter.',
      skipIf:
        'You only need inline code completion (Copilot / Cursor). For end-to-end coding agents that read and write code, Cursor / Windsurf / OpenCode.',
    },
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
