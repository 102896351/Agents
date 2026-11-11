// ============================================================
//  New agents batch 3 — added 2026-11-04
//  Source: hand-picked from GitHub (high-star, actively maintained
//  open-source AI agent projects). Live stars / license fetched via
//  GitHub API on 2026-11-04. Spread into `agents` in agents.ts.
// ============================================================
import type { Agent } from './agents';

export const extraAgents2026c: Agent[] = [
  // ---------------- Coding ----------------
  {
    slug: 'open-interpreter',
    name: 'Open Interpreter',
    tagline: "A local agent that writes and runs code on your own machine, with you approving each step.",
    category: 'coding',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://openinterpreter.com',
    github: 'https://github.com/openinterpreter/openinterpreter',
    stars: 68791,
    updated: '2026-11',
    tags: ['local', 'code-execution', 'cli', 'computer-use'],
    pricing: 'Free and open-source (Apache-2.0). You pay only for the LLM you point it at, including local models through Ollama.',
    verdict: "The shortest path from a plain sentence to something actually happening on your laptop. It is also the one that will happily delete a directory if you stop reading the confirmations.",
    description:
      "Open Interpreter gives an LLM a real shell on your machine. It writes Python, JavaScript, and shell code, executes it locally, reads the output, and iterates, with a confirmation prompt before each command unless you turn that off. Unlike a cloud sandbox, it can touch your actual files, installed packages, and (in computer-use mode) the screen. The project has leaned increasingly toward local and open models, which makes the privacy story unusually coherent for an agent this permissive.",
    useCases: [
      'Clean and reshape a folder of CSVs without hand-writing a script',
      'Install dependencies and scaffold a small project from one request',
      'Analyse local files that should never leave the machine',
      'Drive a desktop app through computer-use mode for a repetitive chore',
    ],
    pros: [
      'Operates on real local state, with no upload and no sandbox gap',
      'Model-agnostic and fully offline-capable via Ollama',
      'Streams and explains every command before it executes',
      'Mature project with years of hard-won edge-case handling',
    ],
    cons: [
      'Running arbitrary generated code on your host is a genuine safety risk',
      'Long tasks can drift; quality tracks the model you supply, not the tool',
      'Computer-use mode remains less reliable than a proper API integration',
    ],
    models: ['GPT-4o', 'Claude', 'Gemini', 'Kimi K2', 'GLM-4.6', 'Ollama / local models', 'Any OpenAI-compatible endpoint'],
    alternatives: ['goose', 'aider', 'claude-code', 'e2b', 'openhands'],
    quickStart: [
      'Install: `pip install open-interpreter`.',
      'Run `interpreter` and pick a model, or set a local Ollama endpoint with `interpreter --api_base http://localhost:11434`.',
      'Ask for something concrete: "plot the sales column in ~/data/q3.csv and save the PNG".',
      'Review each proposed command and confirm with `y`; only use `-y` once you trust the workflow.',
      'For GUI work, try computer-use mode with `interpreter --os`.',
    ],
    sampleInput:
      'I have 14 CSV files in ./exports with inconsistent date formats. Merge them, normalise dates to ISO, drop duplicate order IDs, and write one clean.csv.',
    sampleOutput:
      'The agent listed the files, sampled their headers, generated a pandas script, printed a preview of the merged frame for approval, then wrote clean.csv with 48,210 rows and reported that 311 duplicate order IDs were removed. No file left the machine.',
    benchmarks: [
      { label: 'GitHub stars', value: '68,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/openinterpreter/openinterpreter' },
      { label: 'Execution target', value: 'Local host (no sandbox by default)', source: 'Open Interpreter docs' },
    ],
    decisionAid: {
      pickIf:
        'You want an agent that acts on your real files right now, you are comfortable reviewing shell commands, or you need everything to stay offline.',
      skipIf:
        'You need isolated multi-tenant execution or a managed audit trail — use a sandboxed coding agent such as OpenHands or a hosted IDE agent.',
    },
  },

  {
    slug: 'goose',
    name: 'Goose',
    tagline: "An open-source, extensible coding agent that installs, executes, edits, and tests code with any LLM.",
    category: 'coding',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://goose-docs.ai',
    github: 'https://github.com/aaif-goose/goose',
    stars: 56219,
    updated: '2026-11',
    tags: ['mcp', 'cli', 'desktop', 'extensible'],
    pricing: 'Free and open-source (Apache-2.0). Bring your own LLM key or run a local model; no hosted tier is required for any feature.',
    verdict: "What a terminal coding agent looks like when extensibility is the point: MCP is a first-class citizen, not a plugin someone bolted on later.",
    description:
      "Goose is an open-source general-purpose coding agent that runs as a CLI or desktop app. It goes past suggestions: it installs packages, edits files, executes code, runs tests, and debugs failures in a loop. Its defining bet is MCP-native extensibility, so adding a new tool usually means pointing it at a server rather than rewriting the agent. Now stewarded under the AAIF umbrella, it is one of the few serious agent projects with no commercial gate on the core experience.",
    useCases: [
      'Fix a failing test suite by letting the agent reproduce and patch it',
      'Wire a GitHub, database, or internal MCP server into a coding workflow',
      'Scaffold a service, run it locally, and iterate on startup errors',
      'Run a fully local agent stack with an open model and no vendor lock-in',
    ],
    pros: [
      'MCP-first extension model with a growing extension catalogue',
      'CLI and desktop clients, both fully usable offline with local models',
      'Real execution loop: edit, run, read errors, try again',
      'Apache-2.0 with no feature paywall',
    ],
    cons: [
      'Extension quality varies by MCP server; setup is more work than a bundled IDE agent',
      'Docs and project home moved during the AAIF transition, so older links can mislead',
      'Fewer polished guardrails than commercial coding agents',
    ],
    models: ['Claude', 'GPT-4o', 'Gemini', 'DeepSeek', 'Ollama / local models', 'Any OpenAI-compatible endpoint'],
    alternatives: ['claude-code', 'aider', 'open-interpreter', 'cline', 'opencode'],
    quickStart: [
      'Install the CLI or desktop app from the Goose docs.',
      'Configure a provider (API key or a local Ollama / LM Studio endpoint).',
      'Enable an extension such as the developer or GitHub MCP server.',
      'Start a session in your repo: "reproduce the failing test in tests/api and fix it".',
      'Let it run the tests, then review the diff before committing.',
    ],
    sampleInput:
      'Our pytest suite fails on Python 3.12 with a datetime deprecation warning treated as an error. Reproduce it, fix the root cause, and confirm the suite is green.',
    sampleOutput:
      'Goose ran pytest, isolated 6 failures to a shared helper using naive datetimes, replaced them with timezone-aware UTC values in 3 files, re-ran the suite (214 passed), and printed the diff for review.',
    benchmarks: [
      { label: 'GitHub stars', value: '56,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/aaif-goose/goose' },
      { label: 'Extension model', value: 'MCP-native', source: 'Goose docs' },
    ],
    decisionAid: {
      pickIf:
        'You want an un-gated, self-hostable coding agent whose tool surface you control through MCP.',
      skipIf:
        'You prefer a zero-config IDE experience with vendor-managed safety defaults — Cursor or Claude Code get you there faster.',
    },
  },

  {
    slug: 'swe-agent',
    name: 'SWE-agent',
    tagline: "A research agent that turns a GitHub issue into a real patch through a purpose-built agent-computer interface.",
    category: 'coding',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://swe-agent.com',
    github: 'https://github.com/SWE-agent/SWE-agent',
    stars: 20721,
    updated: '2026-11',
    tags: ['swe-bench', 'issue-to-patch', 'research', 'benchmark'],
    pricing: 'Free and open-source (MIT). You supply the LLM API credits; typical issue runs cost from cents to a few dollars.',
    verdict: "The project that proved the interface matters as much as the model. Its real contribution is not the agent loop, it is designing what the agent is allowed to see and do in a repo.",
    description:
      "SWE-agent, from Princeton, takes a GitHub issue and tries to produce a working patch. Its central idea is the Agent-Computer Interface: instead of dumping a whole codebase at an LLM, it gives the model a small, deliberate set of commands for searching, viewing, editing, and testing files. That design produced landmark SWE-bench results and made the project a reference implementation for anyone studying or benchmarking coding agents. It is a research tool first, and the docs assume you are comfortable with containers and evaluation harnesses.",
    useCases: [
      'Benchmark a new LLM on real issue-resolution tasks with SWE-bench',
      'Generate a first-draft patch for a well-specified bug report',
      'Study how tool and interface design changes agent success rates',
      'Run reproducible experiments on agent trajectories and cost',
    ],
    pros: [
      'Rigorous, reproducible evaluation culture with published trajectories',
      'The ACI design transfers to any custom coding-agent project',
      'Model-agnostic and containerised for safe execution',
      'MIT licensed with an active research community',
    ],
    cons: [
      'Setup and configuration are noticeably heavier than a plug-and-play IDE agent',
      'Tuned for benchmark-style issues, not open-ended feature work',
      'Success still depends heavily on the underlying model and budget',
    ],
    models: ['Claude', 'GPT-4o', 'Gemini', 'DeepSeek', 'Any LiteLLM-supported model'],
    alternatives: ['openhands', 'devin', 'aider', 'claude-code', 'codex'],
    quickStart: [
      'Install from source and make sure Docker is available.',
      'Set your model credentials (LiteLLM provider config).',
      'Run `sweagent run` with a GitHub issue URL or a local problem statement and target repo.',
      'Inspect the trajectory: every search, edit, and test run is logged.',
      'Collect the generated patch and validate it against the repo test suite.',
    ],
    sampleInput:
      'Issue #1842: "CSV exporter doubles quotes when a field contains a comma". Repo attached, tests included.',
    sampleOutput:
      'The agent located the writer in 4 search steps, reproduced the fault with a new test, changed the quoting branch in 2 files, ran the suite, and emitted a 19-line patch with a passing test in 11 tool calls.',
    benchmarks: [
      { label: 'GitHub stars', value: '20,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/SWE-agent/SWE-agent' },
      { label: 'Origin', value: 'Princeton / SWE-bench research', source: 'swe-agent.com' },
    ],
    decisionAid: {
      pickIf:
        'You are evaluating models, studying agent interfaces, or want a reproducible issue-to-patch baseline.',
      skipIf:
        'You just want a colleague-like agent to help ship features today — aider, Cursor, or Claude Code have far less friction.',
    },
    videos: [
      { src: "https://www.youtube.com/embed/fcr8WzeEXyk", kind: "youtube", title: "SWE-agent — official demo", caption: "Official demo video published by the project.", sourceUrl: "https://www.youtube.com/watch?v=fcr8WzeEXyk" },
    ],
  },

  // ---------------- Research ----------------
  {
    slug: 'deer-flow',
    name: 'DeerFlow',
    tagline: "ByteDance's open-source long-horizon SuperAgent harness that researches, codes, and creates with sandboxes and sub-agents.",
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://deerflow.tech',
    github: 'https://github.com/bytedance/deer-flow',
    stars: 84984,
    updated: '2026-11',
    tags: ['deep-research', 'multi-agent', 'sandbox', 'bytedance'],
    pricing: 'Free and open-source (MIT). Self-host with your own LLM and search API keys; optional hosted sandbox providers may bill separately.',
    verdict: "One of the few deep-research frameworks that treats the long run as the normal case: planner, researcher, coder, and a sandbox that survives until the report is done.",
    description:
      "DeerFlow is a long-horizon agent harness from ByteDance built on a multi-agent graph. A planner decomposes a broad question, researcher and coder sub-agents work in parallel, and a shared sandbox lets them run code and inspect artefacts before a reporter agent assembles the output. It ships with a web UI, human-in-the-loop plan editing, and support for generated reports, slides, and even podcast-style audio. Where most research agents stop at search-and-summarise, DeerFlow is designed to keep working for dozens of steps without losing the thread.",
    useCases: [
      'Produce a sourced, multi-section market or technology report',
      'Research a topic, run the numbers in Python, and embed real charts',
      'Generate a research-backed slide deck or audio briefing',
      'Edit the plan mid-run so the agent chases the interesting branch',
    ],
    pros: [
      'Genuine long-horizon orchestration rather than a single retrieval loop',
      'Sandbox plus sub-agents means claims can be checked with executed code',
      'Human-in-the-loop plan editing before the expensive work starts',
      'MIT licensed with a usable web UI out of the box',
    ],
    cons: [
      'More infrastructure to run than a lightweight research script',
      'Long runs can be slow and token-hungry on complex questions',
      'Output quality still leans on your search provider and model',
    ],
    models: ['Claude', 'GPT-4o', 'Gemini', 'DeepSeek', 'Qwen', 'Any OpenAI-compatible endpoint'],
    alternatives: ['gpt-researcher', 'storm', 'manus', 'langgraph', 'perplexity'],
    quickStart: [
      'Clone the repo and copy `.env.example` to `.env` with your LLM and search keys.',
      'Install dependencies (Python + Node for the web UI) and start the services with the bundled Docker setup or `make` targets.',
      'Open the web UI and submit a broad question.',
      'Review and edit the generated plan before letting the sub-agents run.',
      'Export the final report, slides, or audio from the result view.',
    ],
    sampleInput:
      'Compare the 2026 open-source agent frameworks on licensing, deployment model, and community size, then give me a recommendation for a 5-person team.',
    sampleOutput:
      'DeerFlow produced a 12-section report with a comparison table built from live GitHub data, a Python-generated chart of star growth, and a one-page recommendation. The plan was revised once by the user to add licensing, which the researcher agent picked up without restarting.',
    benchmarks: [
      { label: 'GitHub stars', value: '84,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/bytedance/deer-flow' },
      { label: 'Architecture', value: 'Planner + sub-agents + sandbox', source: 'DeerFlow docs' },
    ],
    decisionAid: {
      pickIf:
        'You need deep, multi-step research with executable evidence and are willing to host a slightly heavier stack.',
      skipIf:
        'You need a quick answer in under a minute — Perplexity or a single-loop GPT Researcher run is a better fit.',
    },
  },

  {
    slug: 'crawl4ai',
    name: 'Crawl4AI',
    tagline: "An open-source web crawler built for LLMs, turning messy pages into clean structured Markdown your agents can reason over.",
    category: 'research',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://crawl4ai.com',
    github: 'https://github.com/unclecode/crawl4ai',
    stars: 86890,
    updated: '2026-11',
    tags: ['scraping', 'markdown', 'rag', 'extraction'],
    pricing: 'Free and open-source (Apache-2.0) for self-hosting. A hosted Crawl4AI Cloud API is available separately with a free tier.',
    verdict: "The unglamorous layer almost every RAG pipeline needs and almost nobody wants to write. It solves the boring part — getting clean, LLM-readable text — unusually well.",
    description:
      "Crawl4AI is a crawler designed from the ground up for AI ingestion rather than SEO or archiving. It renders JavaScript-heavy pages, strips boilerplate, and emits clean Markdown or structured JSON with fit-for-LLM chunking and schema-based extraction. It supports browser pooling, proxies, deep-crawl strategies, and an async pipeline, so you can feed a whole documentation site into a vector store in one run. The project also offers a hosted API, but the self-hosted library is complete on its own.",
    useCases: [
      'Build a fresh corpus from a documentation site for a RAG assistant',
      'Extract product specs or prices into structured JSON with a schema',
      'Refresh a knowledge base on a schedule without maintaining selectors',
      'Feed clean Markdown to a research agent instead of raw HTML',
    ],
    pros: [
      'Output is genuinely clean Markdown, which cuts token waste downstream',
      'No vendor lock-in; the open-source library covers the full pipeline',
      'Strong on JS-rendered pages, proxies, and deep crawling',
      'Active project with frequent releases and a large community',
    ],
    cons: [
      'Respecting robots.txt, rate limits, and site terms is on you',
      'Heavy anti-bot sites still need browser/stealth tuning',
      'Some advanced extraction recipes assume familiarity with its config model',
    ],
    models: ['Any LLM via extraction strategies', 'Local models via Ollama', 'Any OpenAI-compatible endpoint'],
    alternatives: ['firecrawl', 'gpt-researcher', 'llama-index', 'ragflow', 'browser-use'],
    quickStart: [
      'Install: `pip install crawl4ai`, then run `crawl4ai-setup` to install the browser runtime.',
      'Run a first crawl with `AsyncWebCrawler` and print `result.markdown`.',
      'Add a `JsonCssExtractionStrategy` or LLM extraction strategy for structured fields.',
      'Use `arun_many` with a browser pool for a batch of URLs.',
      'Wire the Markdown into your embedding or RAG pipeline.',
    ],
    sampleInput:
      'Crawl the 60 pages under docs.example.com/sdk, keep only main content, and return clean Markdown plus the H2 headings for each page.',
    sampleOutput:
      'Crawl4AI rendered all 60 pages in 41 seconds, removed nav and footer boilerplate, and produced 60 Markdown documents averaging 2,100 tokens each with a heading index. Total input to the embedding step dropped by roughly 38% versus raw HTML.',
    benchmarks: [
      { label: 'GitHub stars', value: '86,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/unclecode/crawl4ai' },
      { label: 'Primary output', value: 'Clean Markdown / structured JSON', source: 'Crawl4AI docs' },
    ],
    decisionAid: {
      pickIf:
        'You own your ingestion pipeline and want clean, controllable, self-hosted web data without per-page fees.',
      skipIf:
        'You want crawling plus interaction in one tool (form filling, logins, multi-step tasks) — a browser agent such as Browser Use or Skyvern is the right layer.',
    },
  },

  {
    slug: 'trading-agents',
    name: 'TradingAgents',
    tagline: "A multi-agent LLM framework that models a whole analyst team — fundamentals, sentiment, technicals, risk — before a trade decision.",
    category: 'research',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 4,
    website: 'https://arxiv.org/abs/2412.20138',
    github: 'https://github.com/TauricResearch/TradingAgents',
    stars: 120566,
    updated: '2026-11',
    tags: ['finance', 'multi-agent', 'backtesting', 'research'],
    pricing: 'Free and open-source (Apache-2.0). You supply LLM API credits and whatever market data feed you choose.',
    verdict: "The most credible open-source attempt at treating a trade as a debate rather than a prediction. Worth reading for the architecture even if you never place an order from it.",
    description:
      "TradingAgents structures market analysis as a simulated trading firm. Specialist agents cover fundamentals, news and social sentiment, technical indicators, and a research debate between bull and bear analysts; a trader agent decides, and a risk-management team challenges the position. The point is not that an LLM can predict prices — it is that explicit disagreement and a separate risk desk produce more inspectable decisions than a single prompt. The repo is a research framework with a companion paper, and it is widely used as a starting point for experiments in multi-agent finance.",
    useCases: [
      'Study how structured debate changes agent decisions under uncertainty',
      'Prototype a research pipeline that logs every analyst rationale',
      'Backtest alternative debate and risk-gating rules',
      'Generate an explainable daily briefing on a watchlist',
    ],
    pros: [
      'Clean separation of analyst, trader, and risk roles with full traces',
      'Easy to swap data sources, models, and debate rules',
      'Backed by a published paper and a very active community',
      'Well suited to ablation studies on multi-agent design',
    ],
    cons: [
      'Research and educational use only — nothing here is an investment signal or advice',
      'Backtests are highly sensitive to data quality, costs, and look-ahead bias',
      'LLM API costs add up quickly when several agents run per ticker per day',
    ],
    models: ['GPT-4o', 'Claude', 'Gemini', 'DeepSeek', 'Ollama / local models', 'Any OpenAI-compatible endpoint'],
    alternatives: ['autogen', 'crewai', 'langgraph', 'camel', 'metagpt'],
    quickStart: [
      'Clone the repo and install dependencies; set your LLM provider key.',
      'Configure a market data source (the bundled adapters or your own feed).',
      'Run the CLI for a ticker and a date, choosing the analyst set and debate rounds.',
      'Inspect the agent transcripts, not just the final BUY/HOLD/SELL label.',
      'Modify one variable at a time and evaluate with a proper walk-forward backtest.',
    ],
    sampleInput:
      'Analyse NVDA as of a given date with all four analyst teams, two bull/bear debate rounds, and the risk desk enabled. Return the decision plus each agent rationale.',
    sampleOutput:
      'The fundamentals and sentiment analysts leaned bullish, the technicals agent flagged an overbought signal, and the bear researcher challenged margin assumptions. The risk desk capped position size; final output was a conditional HOLD with a logged rationale for every agent and no execution.',
    benchmarks: [
      { label: 'GitHub stars', value: '120,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/TauricResearch/TradingAgents' },
      { label: 'Companion paper', value: 'arXiv:2412.20138', source: 'arXiv' },
    ],
    decisionAid: {
      pickIf:
        'You are researching multi-agent decision structures, explainability, or evaluation methodology in a finance setting.',
      skipIf:
        'You want a production execution system or a signal to trade on — this is a research framework and should stay in the lab.',
    },
    videos: [
      { src: "https://www.youtube.com/embed/90gr5lwjIho", kind: "youtube", title: "TradingAgents — official demo", caption: "Official demo video published by the project.", sourceUrl: "https://www.youtube.com/watch?v=90gr5lwjIho" },
    ],
  },

  // ---------------- Browsing ----------------
  {
    slug: 'skyvern',
    name: 'Skyvern',
    tagline: "Automate browser-based workflows with vision and an LLM instead of brittle CSS selectors.",
    category: 'browsing',
    license: 'open-source',
    licenseName: 'AGPL-3.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://www.skyvern.com',
    github: 'https://github.com/Skyvern-AI/skyvern',
    stars: 23340,
    updated: '2026-11',
    tags: ['rpa', 'browser', 'vision', 'workflow'],
    pricing: 'Open-source under AGPL-3.0 for self-hosting (LLM/vision calls billed by your provider). A managed Skyvern Cloud is available with usage-based pricing.',
    verdict: "The interesting claim is not AI clicking buttons, it is that the automation survives a site redesign. For ugly enterprise portals with no API, that is the whole game.",
    description:
      "Skyvern replaces selector-based RPA with a vision-language loop: it looks at the page, decides the next action in plain terms, and executes it through a real browser. Because it reasons over what is visible rather than a hard-coded XPath, a workflow written for one insurance portal or supplier site often keeps working after the layout changes. It includes task orchestration, credential and 2FA handling helpers, form filling, data extraction, and an API for running workflows from your own systems.",
    useCases: [
      'Fill and submit forms on legacy portals that expose no API',
      'Automate invoice downloads or claims status checks across vendor sites',
      'Extract structured data from multi-step, JavaScript-heavy workflows',
      'Replace a fragile Selenium script suite with a resilient task definition',
    ],
    pros: [
      'Layout changes are far less likely to break a workflow',
      'Handles auth, 2FA, and form-heavy enterprise flows pragmatically',
      'Self-hostable with an API and workflow builder',
      'Strong fit for long-tail B2B sites nobody maintains integrations for',
    ],
    cons: [
      'AGPL-3.0 has real obligations if you embed it in a commercial product',
      'Slower and pricier per run than a direct API or a plain HTTP script',
      'Vision-based decisions still need guardrails on high-stakes actions',
    ],
    models: ['GPT-4o', 'Claude', 'Gemini', 'Any OpenAI-compatible vision model'],
    alternatives: ['browser-use', 'playwright-mcp', 'ui-tars', 'operator', 'n8n'],
    quickStart: [
      'Start with Docker Compose (or the cloud trial) and set an LLM API key.',
      'Open the UI and create a task in natural language, e.g. "download last month invoice from the billing portal".',
      'Provide credentials through the built-in vault and run the task once interactively.',
      'Inspect the step-by-step recording and tighten the goal or add constraints.',
      'Call the workflow from your app via the Skyvern API and monitor runs.',
    ],
    sampleInput:
      'Log into the supplier portal, open Orders, filter to last 30 days, and download every PDF invoice, saving them with the order number as filename.',
    sampleOutput:
      'Skyvern authenticated including a TOTP prompt, applied the date filter, identified 23 invoice rows visually, downloaded each PDF, and renamed them from the on-screen order numbers. One ambiguous row was flagged for review rather than guessed.',
    benchmarks: [
      { label: 'GitHub stars', value: '23,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'AGPL-3.0', source: 'github.com/Skyvern-AI/skyvern' },
      { label: 'Approach', value: 'Vision + LLM instead of selectors', source: 'Skyvern docs' },
    ],
    decisionAid: {
      pickIf:
        'You automate third-party web UIs with no API, especially form-heavy portals whose layouts change.',
      skipIf:
        'An official API exists, or you are building a proprietary product where AGPL obligations are a problem — check the licence first.',
    },
  },

  {
    slug: 'playwright-mcp',
    name: 'Playwright MCP',
    tagline: "Microsoft's MCP server that hands any compatible agent a real browser driven by the accessibility tree.",
    category: 'browsing',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://www.npmjs.com/package/@playwright/mcp',
    github: 'https://github.com/microsoft/playwright-mcp',
    stars: 39171,
    updated: '2026-11',
    tags: ['mcp', 'browser', 'testing', 'microsoft'],
    pricing: 'Free and open-source (Apache-2.0). Runs locally with no service fee; you pay only for the LLM driving it.',
    verdict: "Boring in the best way: instead of teaching models to parse screenshots, it gives them a structured, deterministic view of the page. The de facto default browser tool for MCP agents.",
    description:
      "Playwright MCP exposes browser automation as a Model Context Protocol server. Rather than sending screenshots, it returns a compact accessibility-tree snapshot of the page, so an agent can find a button by role and name and act on it deterministically. It supports navigation, clicks, typing, form filling, screenshots, network inspection, and PDF generation, with both headed and headless modes. Because it is MCP, the same browser works from VS Code, Claude, Cursor, or any custom agent without writing glue code for each client.",
    useCases: [
      'Give a coding agent a browser to verify the UI it just changed',
      'Run repeatable end-to-end checks described in natural language',
      'Let an agent fill a web form or walk through a signup flow',
      'Capture page state, console errors, and network traces during debugging',
    ],
    pros: [
      'Accessibility-tree snapshots are cheaper and more reliable than pixels',
      'Works with any MCP client, no custom integration per tool',
      'Backed by Microsoft and the mature Playwright engine',
      'Runs locally; nothing is sent to a third-party browser service',
    ],
    cons: [
      'Very dynamic canvas-heavy or shadow-DOM pages can still confuse the tree',
      'The agent is only as good as the LLM interpreting the snapshot',
      'Not an autonomous long-running agent, it is a tool you compose into one',
    ],
    models: ['Any MCP-capable client', 'Claude', 'GPT-4o', 'Gemini', 'Local models via MCP hosts'],
    alternatives: ['browser-use', 'skyvern', 'ui-tars', 'composio', 'e2b'],
    quickStart: [
      'Install with `npx @playwright/mcp@latest` (no manual browser download needed in most setups).',
      'Add the server to your MCP client config, e.g. `{"command": "npx", "args": ["@playwright/mcp@latest"]}`.',
      'Start a session and ask the agent to navigate to a URL.',
      'Have it read the snapshot and act by element references rather than coordinates.',
      'Use the screenshot and console tools when a step fails.',
    ],
    sampleInput:
      'Go to the staging login page, sign in with the test account, and confirm the dashboard shows three widgets.',
    sampleOutput:
      'The agent received a 4KB accessibility snapshot, filled the two labelled inputs, submitted, and read back the widget list from the resulting tree. It reported three widgets and attached a screenshot as evidence in 6 tool calls.',
    benchmarks: [
      { label: 'GitHub stars', value: '39,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/microsoft/playwright-mcp' },
      { label: 'Page representation', value: 'Accessibility tree snapshot', source: 'Playwright MCP docs' },
    ],
    decisionAid: {
      pickIf:
        'You already use an MCP-capable agent and want a dependable, local browser tool with structured state.',
      skipIf:
        'You need a standalone autonomous browser agent with its own planner, or you mostly work with image-only interfaces where a vision agent wins.',
    },
  },

  {
    slug: 'ui-tars',
    name: 'UI-TARS / Agent TARS',
    tagline: "ByteDance's open-source multimodal agent stack that sees the screen and drives it like a human.",
    category: 'browsing',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://agent-tars.com',
    github: 'https://github.com/bytedance/UI-TARS-desktop',
    stars: 39542,
    updated: '2026-11',
    tags: ['gui', 'vision', 'computer-use', 'multimodal'],
    pricing: 'Free and open-source (Apache-2.0). Desktop app is free; you supply model API keys or run the open UI-TARS weights locally.',
    verdict: "The strongest open answer to proprietary computer-use models. Pure-vision control is fragile on dense enterprise UIs, but when it works it handles apps no DOM-based tool can touch.",
    description:
      "UI-TARS is a family of native GUI agent models from ByteDance, and this repo is the desktop stack that puts them to work: Agent TARS for browser and computer tasks, plus tooling for model serving, evaluation, and MCP integration. Instead of relying on HTML or accessibility trees, it reads screenshots and emits mouse and keyboard actions, which means the same agent can drive a web app, a desktop client, or a settings panel. Open weights make it possible to run the whole loop on your own hardware.",
    useCases: [
      'Automate a desktop application that has no automation API at all',
      'Run cross-application tasks that span browser, file manager, and settings',
      'Benchmark vision-based computer-use agents on your own UI',
      'Build a local, private computer-use assistant with the open model weights',
    ],
    pros: [
      'Works on arbitrary GUIs, including native desktop apps',
      'Open model weights and an Apache-2.0 stack you can self-host',
      'Active research lineage with published benchmarks and evaluation tools',
      'MCP support lets it combine GUI actions with conventional tools',
    ],
    cons: [
      'Vision-only control is slower and less precise than DOM-based automation',
      'Small UI changes, popups, or unusual DPI settings can derail a run',
      'Running the model locally needs serious GPU memory for best results',
    ],
    models: ['UI-TARS (open weights)', 'GPT-4o', 'Claude', 'Gemini', 'Any vision-capable OpenAI-compatible endpoint'],
    alternatives: ['operator', 'browser-use', 'skyvern', 'playwright-mcp', 'manus'],
    quickStart: [
      'Download the Agent TARS desktop app or clone the repo for a source build.',
      'Configure a vision-capable model, either an API key or a local UI-TARS endpoint.',
      'Grant the required screen-recording and accessibility permissions on macOS/Windows.',
      'Give a bounded task, e.g. "export the current spreadsheet as PDF to Desktop".',
      'Review the recorded action trace before trusting it on anything destructive.',
    ],
    sampleInput:
      'Open the CRM desktop client, find the Acme account, and copy its renewal date into a new calendar event.',
    sampleOutput:
      'The agent located the CRM window from a screenshot, used search to surface Acme, read the renewal date on screen, switched to the calendar app, and created the event. It paused for confirmation before saving because the task was marked as an external side effect.',
    benchmarks: [
      { label: 'GitHub stars', value: '39,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/bytedance/UI-TARS-desktop' },
      { label: 'Control modality', value: 'Screenshot in, mouse/keyboard out', source: 'Agent TARS docs' },
    ],
    decisionAid: {
      pickIf:
        'Your task involves native apps, canvas-heavy UIs, or you specifically want an open, self-hostable computer-use model.',
      skipIf:
        'The target is a normal website — Playwright MCP or Browser Use will be faster, cheaper, and far more reliable.',
    },
  },

  // ---------------- Automation ----------------
  {
    slug: 'activepieces',
    name: 'Activepieces',
    tagline: "An open-core automation platform with hundreds of MCP pieces and AI agents you can genuinely self-host.",
    category: 'automation',
    license: 'open-source',
    licenseName: 'MIT (open-core)',
    selfHost: true,
    difficulty: 2,
    website: 'https://www.activepieces.com',
    github: 'https://github.com/activepieces/activepieces',
    stars: 25367,
    updated: '2026-11',
    tags: ['workflow', 'mcp', 'no-code', 'self-host'],
    pricing: 'Core is free and open-source (MIT, with enterprise directories under a separate commercial licence). Self-host at infrastructure cost; a managed cloud plan is optional.',
    verdict: "The most credible open-source answer to Zapier-style automation now that agents are part of the picture. Typed pieces and a real visual builder beat a pile of glue scripts.",
    description:
      "Activepieces is a workflow automation platform with a visual builder, roughly 400 typed integrations called pieces, and first-class support for AI agents and MCP servers. A flow can be triggered by a webhook, ask an agent to classify an incoming request, call a CRM, and post to Slack, with each step's inputs and outputs visible. It is TypeScript-based, Docker-deployable, and designed so adding an integration means writing a small typed piece rather than forking the platform. The open-core split keeps the automation engine free while some enterprise governance features sit in a commercial directory.",
    useCases: [
      'Route and triage inbound support emails with an agent step',
      'Sync CRM records to a database on a schedule without custom scripts',
      'Expose an internal API as an MCP tool an agent can call',
      'Replace a paid Zapier/Make bill with a self-hosted equivalent',
    ],
    pros: [
      'Large, typed integration catalogue that is pleasant to extend',
      'Visual builder with real per-step debugging and run history',
      'MCP and agent steps are native, not an afterthought',
      'Straightforward Docker self-hosting with no mandatory vendor account',
    ],
    cons: [
      'Some enterprise features (SSO, advanced governance) live behind a commercial licence',
      'Self-hosting means you own upgrades, scaling, and secret management',
      'Complex branching flows can get harder to read than plain code',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Any OpenAI-compatible endpoint', 'MCP tool servers'],
    alternatives: ['n8n', 'make', 'zapier-agents', 'langflow', 'dify'],
    quickStart: [
      'Run the Docker Compose file and open the local dashboard.',
      'Create a flow with a trigger (webhook, schedule, or app event).',
      'Add an AI or agent step and supply a model key.',
      'Connect a piece, for example Slack or Postgres, and map the typed fields.',
      'Publish the flow and inspect a test run in the execution history.',
    ],
    sampleInput:
      'When a new row appears in the leads sheet, classify the enquiry as sales/support/spam, create the matching CRM record, and notify the right Slack channel.',
    sampleOutput:
      'The flow fired on 12 new rows; the agent classified 7 as sales, 4 as support, 1 as spam, created 11 CRM records, and posted 2 summarised Slack messages. The spam row was logged and skipped with its reasoning attached.',
    benchmarks: [
      { label: 'GitHub stars', value: '25,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT (open-core)', source: 'github.com/activepieces/activepieces' },
      { label: 'Integration pieces', value: '~400 incl. MCP', source: 'Activepieces docs' },
    ],
    decisionAid: {
      pickIf:
        'You want a self-hostable, no-code automation hub with agents and MCP wired in and a clean extension model.',
      skipIf:
        'You need enterprise SSO/audit features out of the box under a permissive licence, or you prefer workflows expressed as code (n8n or a plain script).',
    },
  },

  // ---------------- Framework ----------------
  {
    slug: 'agentscope',
    name: 'AgentScope',
    tagline: "Alibaba's multi-agent framework built around observability: build and run agents you can see, understand, and trust.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://doc.agentscope.io',
    github: 'https://github.com/agentscope-ai/agentscope',
    stars: 35371,
    updated: '2026-11',
    tags: ['multi-agent', 'observability', 'alibaba', 'python'],
    pricing: 'Free and open-source (Apache-2.0). Bring your own LLM keys; the companion AgentScope Studio tracing UI is also open-source.',
    verdict: "Its pitch is not another agent loop, it is being able to answer 'what the hell just happened' after a 40-step multi-agent run. That is the part most frameworks still leave to you.",
    description:
      "AgentScope is a Python framework from Alibaba for building multi-agent applications with explicit message passing, structured pipelines, and built-in tracing. Agents are first-class objects with hooks at every stage, and the companion Studio visualises the full run: prompts, tool calls, token costs, and message flow. It includes ReAct agents, tool and MCP support, long-term memory, evaluation utilities, and a distribution layer for running agents across processes. The emphasis on debuggability makes it a strong fit for teams moving a multi-agent prototype toward something they can actually operate.",
    useCases: [
      'Build a multi-agent workflow with explicit, inspectable message passing',
      'Debug a failing agent run with a visual trace of prompts and tool calls',
      'Evaluate agent quality and token cost across model swaps',
      'Run distributed agents across processes for heavier workloads',
    ],
    pros: [
      'Tracing and observability are designed in, not bolted on',
      'Clear programming model for explicit multi-agent orchestration',
      'Good Chinese and English ecosystem support, plus MCP and memory modules',
      'Apache-2.0 with regular releases from an active team',
    ],
    cons: [
      'Smaller third-party plugin ecosystem than LangChain or LangGraph',
      'The abstraction set takes longer to learn than a minimal ReAct loop',
      'Docs have moved between versions; older tutorials may not match the current API',
    ],
    models: ['Qwen', 'DeepSeek', 'OpenAI', 'Claude', 'Gemini', 'Ollama / local models', 'Any OpenAI-compatible endpoint'],
    alternatives: ['langgraph', 'autogen', 'crewai', 'agno', 'camel'],
    quickStart: [
      'Install: `pip install agentscope`.',
      'Initialise the runtime with `agentscope.init()` and set your model config.',
      'Create a ReActAgent with a name, system prompt, and model, then attach a toolkit.',
      'Compose agents with a pipeline or explicit message exchange, and run the flow.',
      'Open AgentScope Studio to inspect the trace, token usage, and tool calls.',
    ],
    sampleInput:
      'Build two agents, a researcher and a critic, that iterate three rounds on a product brief and output the agreed version plus a change log.',
    sampleOutput:
      'The pipeline ran 3 rounds with 12 messages; Studio showed each prompt, both tool calls, and per-agent token spend. Final brief plus a 7-item change log was produced, with the critic objections that were rejected preserved in the trace.',
    benchmarks: [
      { label: 'GitHub stars', value: '35,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/agentscope-ai/agentscope' },
      { label: 'Companion tooling', value: 'AgentScope Studio (tracing)', source: 'AgentScope docs' },
    ],
    decisionAid: {
      pickIf:
        'You are building multi-agent systems where traceability, evaluation, and cost visibility matter as much as the happy path.',
      skipIf:
        'You need the widest plugin ecosystem or the fastest path to a single simple agent — LangGraph or Agno will move quicker.',
    },
  },

  {
    slug: 'cognee',
    name: 'Cognee',
    tagline: "An open-source AI memory platform that turns your data into a knowledge graph agents can actually recall.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://www.cognee.ai',
    github: 'https://github.com/topoteretes/cognee',
    stars: 33059,
    updated: '2026-11',
    tags: ['memory', 'knowledge-graph', 'rag', 'vector'],
    pricing: 'Free and open-source (Apache-2.0) for self-hosting. A managed Cognee cloud tier is available for teams that do not want to run graph and vector stores.',
    verdict: "Vector search answers 'what is similar'. Cognee is for the harder question: 'what does this connect to, and how did we get here'. The graph is the product.",
    description:
      "Cognee is an AI memory engine that ingests documents, conversations, and structured data, then builds a graph-backed representation combining vector search, entity relationships, and temporal context. Instead of hand-rolling chunking, embeddings, and a retrieval strategy, you add data and ask questions through a small API; the pipeline handles extraction, linking, and index updates. It is framework-agnostic, so the same memory layer can serve a LangChain agent, a custom loop, or an MCP server. For agents that need to remember across sessions or reason over relationships, it replaces a lot of bespoke plumbing.",
    useCases: [
      'Give an agent persistent long-term memory across sessions',
      'Answer questions that require joining facts across multiple documents',
      'Build a personal or team knowledge graph from chat history and files',
      'Replace a hand-rolled RAG pipeline with a managed memory API',
    ],
    pros: [
      'Graph plus vector retrieval handles relational questions plain RAG misses',
      'Small, clean API that works with any agent framework',
      'Self-hostable with Apache-2.0 and pluggable storage backends',
      'Active development with frequent memory-quality improvements',
    ],
    cons: [
      'Running graph and vector stores adds operational surface',
      'Ingestion cost and latency are higher than a simple vector upsert',
      'Graph construction quality depends on the extraction model you choose',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Ollama / local models', 'Any OpenAI-compatible endpoint'],
    alternatives: ['mem0', 'letta', 'lightrag', 'ragflow', 'llama-index'],
    quickStart: [
      'Install: `pip install cognee`.',
      'Configure an LLM key and a storage backend (defaults work locally).',
      'Call `cognee.add(data)` with text, files, or conversation history.',
      'Run `cognee.cognify()` to build the graph and indexes.',
      'Query with `cognee.search()` from your agent and inspect the returned context.',
    ],
    sampleInput:
      'Ingest six months of project meeting notes, then answer: "which decisions about the billing migration were later reversed, and who raised the concern first?"',
    sampleOutput:
      'Cognee linked 214 entities and 480 relationships from the notes, surfaced two reversed decisions, and traced the first objection to a March design review, citing the source note for each hop. A plain vector search on the same corpus returned only the most recent summary.',
    benchmarks: [
      { label: 'GitHub stars', value: '33,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/topoteretes/cognee' },
      { label: 'Storage model', value: 'Knowledge graph + vector index', source: 'Cognee docs' },
    ],
    decisionAid: {
      pickIf:
        'Your agent needs durable memory or multi-hop reasoning over connected facts, and you would rather not build that layer yourself.',
      skipIf:
        'You only need simple similarity search over a few static documents — a plain vector store is cheaper and easier to operate.',
    },
    videos: [
      { src: "https://www.youtube.com/embed/8hmqS2Y5RVQ", kind: "youtube", title: "Cognee — official demo", caption: "Official demo video published by the project.", sourceUrl: "https://www.youtube.com/watch?v=8hmqS2Y5RVQ" },
    ],
  },
];
