// ============================================================
//  New agents batch 4 — added 2026-11-05
//  Source: hand-picked from GitHub (high-star, actively maintained
//  open-source AI agent projects). Live stars / license / push date
//  fetched via GitHub API on 2026-11-05. Spread into `agents` in agents.ts.
// ============================================================
import type { Agent } from './agents';

export const extraAgents2026d: Agent[] = [
  // ---------------- Coding ----------------
  {
    slug: 'archon',
    name: 'Archon',
    tagline: "An open-source harness builder that turns AI coding from a one-off prompt into a repeatable workflow.",
    category: 'coding',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://archon.diy',
    github: 'https://github.com/coleam00/Archon',
    stars: 23828,
    updated: '2026-11',
    tags: ['context-engineering', 'mcp', 'workflow', 'self-hosted'],
    pricing: 'Free and open-source (MIT). Self-host with Docker; you pay only for the LLM calls your coding agent makes.',
    verdict: "The missing layer between 'I have a PRD' and 'my coding agent did something sensible'. It is infrastructure, not an agent, and that is exactly the point.",
    description:
      "Archon is an open-source harness builder for AI coding. Instead of being another IDE agent, it supplies the scaffolding around one: structured project requirements, task and milestone tracking, reusable rules, and curated documentation, all exposed to coding agents over MCP. The pitch is deterministic, repeatable AI coding — the same context and the same rules every run, rather than whatever happens to be in the chat window. It works alongside tools like Claude Code, Codex, and Cline, so it fits an existing workflow instead of replacing it.",
    useCases: [
      'Turn a rough PRD into a structured task list a coding agent can execute against',
      'Keep project rules and architecture decisions consistent across long agent sessions',
      'Feed curated library docs into the agent so it stops guessing at APIs',
      'Share one source of truth across several agents or several developers',
    ],
    pros: [
      'Tackles the real failure mode of coding agents: missing or drifting context',
      'Model- and editor-agnostic via MCP; no lock-in to one IDE',
      'Self-hosted, so specs and internal docs stay on your infrastructure',
      'Rules and tasks are reviewable artifacts, not invisible prompt magic',
    ],
    cons: [
      'Requires setup and discipline; it is a workflow system, not a one-command tool',
      'You still need a capable coding agent and an LLM budget on top of it',
      'Moves fast as an early project, so expect breaking changes between releases',
    ],
    models: ['Any MCP-compatible coding agent', 'Claude Code', 'Codex', 'Cline', 'Gemini CLI'],
    alternatives: ['open-swe', 'openhands', 'cline', 'codex', 'aider'],
    quickStart: [
      'Clone the repo and start the stack with `docker compose up -d` (requires Docker).',
      'Open the web UI at http://localhost:3737 and create your first project.',
      'Paste in a PRD or a loose feature description and let it generate structured tasks and rules.',
      'Add the Archon MCP server to your coding agent config and verify the tools appear.',
      'Ask your agent to implement a task, then watch it pull context from Archon instead of re-deriving it.',
    ],
    sampleInput:
      'We need a CSV import endpoint with validation, duplicate detection, and a dry-run mode. Set this up as a project and have the coding agent work the first task.',
    sampleOutput:
      'Archon split the request into 6 tasks (schema, parser, validation rules, duplicate keys, dry-run flag, tests), attached the team rule "no ORM migrations without review", and indexed the project docs. The connected coding agent picked task 1, read the rules and docs through MCP, and produced a diff matching the repo conventions without being re-briefed.',
    benchmarks: [
      { label: 'GitHub stars', value: '23,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/coleam00/Archon' },
      { label: 'Integration surface', value: 'MCP server + web UI + Docker', source: 'Archon docs' },
    ],
    decisionAid: {
      pickIf:
        'You run multi-session coding agent work, keep losing context between runs, or want specs, rules, and docs to be shared infrastructure rather than chat history.',
      skipIf:
        'You just want a quick one-file edit from an IDE assistant — the setup overhead will not pay off. Use Cline or Cursor instead.',
    },
  },

  {
    slug: 'open-swe',
    name: 'Open SWE',
    tagline: "LangChain's open-source asynchronous coding agent for long-running, human-supervised software work.",
    category: 'coding',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://www.langchain.com/blog/open-swe-an-open-source-framework-for-internal-coding-agents',
    github: 'https://github.com/langchain-ai/open-swe',
    stars: 11175,
    updated: '2026-11',
    tags: ['langgraph', 'async', 'github-issues', 'human-in-the-loop'],
    pricing: 'Free and open-source (MIT). You supply the LLM API key and the compute to run the agent.',
    verdict: "A credible blueprint for the agent you would build internally if you had a platform team — which also means you need a platform team to run it well.",
    description:
      "Open SWE is LangChain's open-source framework for internal coding agents, built on LangGraph. Its defining choice is asynchrony: the agent takes a GitHub issue, works in the background over minutes or hours, and can be interrupted, redirected, or approved by a human mid-run rather than blocking a terminal. It ships the pieces production agent teams usually rebuild themselves — sandboxed execution, persistent thread state, sub-agent delegation, and checkpoint-based resumption — and is explicitly designed to be forked and adapted to a company's own repos, CI, and review rules.",
    useCases: [
      'Assign a GitHub issue to an agent and get back a draft pull request',
      'Run several independent repo tasks concurrently in the background',
      'Insert human approval before an agent pushes or opens a PR',
      'Study or fork a reference architecture for an internal engineering agent',
    ],
    pros: [
      'Async-by-default with durable state, so long tasks survive restarts and interruptions',
      'Human-in-the-loop is a first-class control, not an afterthought',
      'LangGraph foundation makes the control flow inspectable and customisable',
      'Backed by an actively maintained upstream team',
    ],
    cons: [
      'This is a framework to operate, not a polished out-of-the-box product',
      'Requires LangGraph familiarity, sandbox setup, and API budget',
      'Narrower in scope than a full IDE assistant; no editor integration',
    ],
    models: ['Claude', 'GPT-4o / GPT-5 family', 'Gemini', 'Any LangChain-supported model'],
    alternatives: ['archon', 'swe-agent', 'openhands', 'cline', 'codex'],
    quickStart: [
      'Clone `langchain-ai/open-swe` and install dependencies with your Python package manager.',
      'Set the LLM provider key and GitHub credentials in the environment file.',
      'Configure the sandbox or execution backend the agent will use for shell commands.',
      'Point it at a test repository and submit a small issue, e.g. "add a missing unit test for utils.parse_date".',
      'Inspect the LangGraph trace, then add an approval checkpoint before the PR is opened.',
    ],
    sampleInput:
      'Issue #214: the /export endpoint times out on accounts with more than 10k rows. Investigate, add streaming, and open a PR with a regression test.',
    sampleOutput:
      'The agent reproduced the timeout against a seeded fixture, traced it to an unbounded in-memory list, replaced it with a generator-based streaming response, and added a test covering 25k rows. It paused at the configured approval checkpoint before pushing; a reviewer approved and the PR was opened with a summary of the three changed files.',
    benchmarks: [
      { label: 'GitHub stars', value: '11,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/langchain-ai/open-swe' },
      { label: 'Orchestration runtime', value: 'LangGraph (durable, async)', source: 'LangChain Open SWE announcement' },
    ],
    decisionAid: {
      pickIf:
        'You want to own and customise a background coding agent, need human approval gates, or are evaluating how to build an internal SWE agent properly.',
      skipIf:
        'You want something installed and useful in ten minutes. Pick a terminal or IDE agent like Cline, Aider, or Claude Code.',
    },
  },

  // ---------------- Research ----------------
  {
    slug: 'anything-llm',
    name: 'AnythingLLM',
    tagline: "A self-hosted, all-in-one workspace that turns your documents into a private RAG agent.",
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://anythingllm.com',
    github: 'https://github.com/Mintplex-Labs/anything-llm',
    stars: 67945,
    updated: '2026-11',
    tags: ['rag', 'self-hosted', 'private', 'documents'],
    pricing: 'Free and open-source (MIT) for Desktop and Docker. No hosted seat fee; you pay only for whichever LLM and embedding provider you configure, including local models.',
    verdict: "The least painful way to get a private, document-grounded assistant running on your own machine. It is a product, not a library — refreshing, as long as you do not need to bend the architecture.",
    description:
      "AnythingLLM packages the whole private-RAG stack into one application: document ingestion, embeddings, a vector database, workspaces with separate context, chat, and a growing set of agent skills such as web search, chart generation, and SQL queries. It runs as a one-click desktop app or a Docker deployment with multi-user access controls, and it talks to anything from Ollama on your laptop to hosted GPT or Claude endpoints. The design goal is ownership — your files, your vectors, your model keys — which makes it a common first stop for teams that cannot send documents to a hosted assistant.",
    useCases: [
      'Ask questions across a private library of PDFs, contracts, or internal handbooks',
      'Give a team separate workspaces with their own documents and permissions',
      'Build a fully offline research assistant using Ollama and local embeddings',
      'Expose a document Q&A endpoint to other tools through its API',
    ],
    pros: [
      'Genuinely easy to install — desktop app or one Docker command',
      'Broad provider support, including fully local and offline configurations',
      'Multi-user, workspaces, and permissions included in the open-source build',
      'Large, active community and frequent releases',
    ],
    cons: [
      'Opinionated product architecture; deep customisation means forking',
      'RAG quality still depends on chunking, embeddings, and the model you choose',
      'Agent skills are convenient but less flexible than a hand-built pipeline',
    ],
    models: ['Ollama / local models', 'GPT-4o / GPT-5', 'Claude', 'Gemini', 'Any OpenAI-compatible endpoint'],
    alternatives: ['ragflow', 'lightrag', 'gpt-researcher', 'notebooklm', 'perplexity'],
    quickStart: [
      'Install the desktop app from anythingllm.com, or run the Docker image for a shared server.',
      'Pick an LLM provider and an embedder — Ollama is the fully local option.',
      'Create a workspace and drop in PDFs, DOCX, spreadsheets, or paste a web link.',
      'Wait for embedding to finish, then ask a question that only those documents can answer.',
      'For team use, add users under the admin panel and set workspace permissions.',
    ],
    sampleInput:
      'Across these 40 vendor contracts, which ones auto-renew with less than 30 days notice, and what is the total annual value?',
    sampleOutput:
      'The assistant cited 6 contracts with auto-renew clauses ranging from 15 to 30 days, quoted the relevant clause text for each, and summed the annual value. Two documents were flagged as having no explicit notice period so the total was presented as a lower bound with a note to review them manually.',
    benchmarks: [
      { label: 'GitHub stars', value: '67,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/Mintplex-Labs/anything-llm' },
      { label: 'Deployment modes', value: 'Desktop app + Docker server + API', source: 'AnythingLLM docs' },
    ],
    decisionAid: {
      pickIf:
        'You want private document Q&A working today, need multi-user workspaces, or must keep data entirely on your own hardware.',
      skipIf:
        'You are building a bespoke retrieval pipeline with custom ranking and evaluation — start from a framework like Haystack or LlamaIndex instead.',
    },
  },

  {
    slug: 'ai-hedge-fund',
    name: 'AI Hedge Fund',
    tagline: "An educational multi-agent simulation where famous investing styles debate a ticker before a decision is made.",
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://github.com/virattt/ai-hedge-fund',
    github: 'https://github.com/virattt/ai-hedge-fund',
    stars: 64495,
    updated: '2026-11',
    tags: ['multi-agent', 'finance', 'educational', 'backtesting'],
    pricing: 'Free and open-source (MIT). You supply LLM and market-data API keys; some data sources have their own free tiers.',
    verdict: "The clearest open-source demonstration of how specialist agents can disagree productively. It is explicitly an educational experiment, not a trading system — treat any signal accordingly.",
    description:
      "AI Hedge Fund models an investment committee as a set of LLM agents with distinct mandates: value investors in the style of Buffett and Munger, a growth-oriented Cathie Wood-style agent, plus fundamentals, technicals, sentiment, and valuation analysts. Each agent produces a signal with reasoning, a portfolio manager aggregates them, and a risk manager constrains the final decision. The project ships a backtesting mode and a web interface. Its authors state plainly that it exists for education and research, not for making real trades — an important distinction that a surprising number of finance-agent repos blur.",
    useCases: [
      'Learn how multi-agent debate and signal aggregation work on a concrete domain',
      'Compare value, growth, technical, and sentiment reasoning on the same ticker',
      'Prototype your own analyst agent and plug it into the committee',
      'Run historical backtests to study how agent voting behaves over time',
    ],
    pros: [
      'Exceptionally readable codebase for learning agent orchestration',
      'Each persona exposes its reasoning, so disagreements are inspectable',
      'Active project with a large community and regular updates',
      'Honest about being educational rather than promising alpha',
    ],
    cons: [
      'Not investment advice and not a production trading system',
      'LLM outputs on financial data are prone to confident but shallow reasoning',
      'Backtests can look impressive without accounting for execution, slippage, or regime change',
    ],
    models: ['GPT-4o / GPT-5', 'Claude', 'Gemini', 'Ollama / local models', 'Any OpenAI-compatible endpoint'],
    alternatives: ['trading-agents', 'gpt-researcher', 'storm', 'consensus'],
    quickStart: [
      'Clone `virattt/ai-hedge-fund` and install the Python dependencies.',
      'Copy the example env file and add your LLM API key plus a market-data key.',
      'Run the CLI against a single ticker with a date range to see each agent signal.',
      'Add `--show-reasoning` (or the equivalent flag) to read why each agent voted.',
      'Try the backtester on historical dates before you trust any part of the output.',
    ],
    sampleInput:
      'Analyse NVDA as of 2026-09-30. Show each analyst agent signal and the final portfolio decision.',
    sampleOutput:
      'The fundamentals agent returned bullish with revenue-growth citations, the valuation agent flagged a stretched multiple and voted bearish, the sentiment agent was neutral, and the technicals agent was mildly bullish. The portfolio manager aggregated to a small long with a reduced position size after the risk manager capped exposure. Every signal carried a written rationale and a confidence score.',
    benchmarks: [
      { label: 'GitHub stars', value: '64,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/virattt/ai-hedge-fund' },
      { label: 'Stated purpose', value: 'Educational / research only', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You want to study multi-agent orchestration, persona design, and signal aggregation in a domain where the outputs are easy to interrogate.',
      skipIf:
        'You are looking for a system to trade real money, or you need auditable, deterministic financial models. This is a teaching codebase.',
    },
  },

  // ---------------- Browsing ----------------
  {
    slug: 'stagehand',
    name: 'Stagehand',
    tagline: "A browser automation SDK that mixes natural-language intent with cacheable Playwright code.",
    category: 'browsing',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://stagehand.dev',
    github: 'https://github.com/browserbase/stagehand',
    stars: 25950,
    updated: '2026-11',
    tags: ['playwright', 'extraction', 'browser-sdk', 'typescript'],
    pricing: 'Free and open-source (MIT) and usable with a local browser. Optional Browserbase cloud browsers are a paid service, billed separately.',
    verdict: "The pragmatic middle ground between brittle CSS selectors and an agent that wanders off. Its best trick is remembering what worked so the model only pays for the ambiguous parts.",
    description:
      "Stagehand is a TypeScript SDK for controlling a browser with three primitives: `act` to perform an action, `extract` to pull structured data, and `observe` to inspect what is possible on a page. Rather than asking an LLM to drive every click, it generates and caches Playwright-level code for steps it has already solved, so repeat runs are deterministic and cheap while genuinely new layouts still get model reasoning. It works against a local browser or Browserbase's remote browser infrastructure, and it drops cleanly into an existing Playwright or agent stack.",
    useCases: [
      'Scrape structured product or listing data from sites with shifting markup',
      'Automate a multi-step web form or checkout-flow test',
      'Give a larger agent a reliable browser tool instead of raw screenshots',
      'Run the same workflow nightly without paying for re-inference on stable steps',
    ],
    pros: [
      'Caching makes repeat runs fast, cheap, and far less flaky',
      'Granular primitives give you control over where the model is allowed to guess',
      'Schema-based extraction returns typed data instead of raw page text',
      'Works locally with your own browser; cloud backend is optional',
    ],
    cons: [
      'TypeScript-first; Python support is not the primary path',
      'Sites with heavy anti-bot measures still need a proper browser infrastructure',
      'Cached actions can go stale after a redesign and need re-observation',
    ],
    models: ['GPT-4o / GPT-5', 'Claude', 'Gemini', 'Any OpenAI-compatible endpoint'],
    alternatives: ['browser-use', 'playwright-mcp', 'skyvern', 'ui-tars', 'firecrawl'],
    quickStart: [
      'Install with `npm install @browserbasehq/stagehand` in a Node project.',
      'Set an LLM API key; add Browserbase credentials only if you want remote browsers.',
      'Initialise Stagehand with a local or remote browser and open a page.',
      'Call `page.act("click the pricing link")` and `page.extract()` with a zod schema for the fields you want.',
      'Re-run the script and note that solved steps replay from cache instead of calling the model.',
    ],
    sampleInput:
      "Go to a job board, search for 'remote data engineer', and return the title, company, location, and posted date for the first 10 results.",
    sampleOutput:
      'Stagehand observed the search form, generated an action for the query, cached it, then extracted 10 typed objects matching the supplied schema. On the second run the navigation and search steps replayed deterministically and only the extraction touched the model, cutting the run from 14 model calls to 1.',
    benchmarks: [
      { label: 'GitHub stars', value: '25,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/browserbase/stagehand' },
      { label: 'Core API', value: 'act / extract / observe + action caching', source: 'Stagehand docs' },
    ],
    decisionAid: {
      pickIf:
        'You need repeatable browser automation in TypeScript and want the model involved only where selectors cannot be trusted.',
      skipIf:
        'You want a fully autonomous goal-driven browser agent, or you work primarily in Python — look at Browser Use instead.',
    },
  },

  {
    slug: 'ufo',
    name: 'UFO',
    tagline: "Microsoft Research's Windows-native GUI agent that orchestrates actions across desktop applications.",
    category: 'browsing',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://microsoft.github.io/UFO/',
    github: 'https://github.com/microsoft/UFO',
    stars: 10169,
    updated: '2026-11',
    tags: ['windows', 'gui-agent', 'computer-use', 'research'],
    pricing: 'Free and open-source (MIT). Runs locally on Windows; you supply the LLM or vision-model API key.',
    verdict: "One of the few serious attempts at a Windows desktop agent, where the real work is not the browser but Excel, Outlook, and a dozen legacy apps that have no API.",
    description:
      "UFO is a research project from Microsoft that turns natural-language requests into actions across Windows applications. It reads the accessibility tree and screen visuals, decides which application owns the next step, and executes through GUI interactions or native APIs where available — a hybrid that matters far more on the desktop than on the web. The UFO³ line extends this into a 'digital agent galaxy' that decomposes a task across multiple applications and devices. It ships with research papers and evaluation harnesses, so it is as useful for studying GUI-agent reliability as for automating your own workflows.",
    useCases: [
      'Automate a cross-application chore such as pulling a figure from Excel into an Outlook draft',
      'Drive legacy Windows software that exposes no automation API',
      'Benchmark GUI-agent planning and grounding on real desktop tasks',
      'Prototype human-in-the-loop desktop assistance with screenshots and logs',
    ],
    pros: [
      'Targets Windows desktops, an area most browser-centric agents ignore',
      'Hybrid GUI + native API execution improves reliability on supported apps',
      'Backed by published research and an explicit evaluation setup',
      'Full traces and screenshots make failures debuggable',
    ],
    cons: [
      'Windows-only and comparatively heavy to set up',
      'Research code: expect rough edges and less hand-holding than commercial tools',
      'Vision-model calls make long tasks slow and costly',
    ],
    models: ['GPT-4o / GPT-5 (vision)', 'Claude (vision)', 'Gemini (vision)', 'Azure OpenAI'],
    alternatives: ['ui-tars', 'playwright-mcp', 'operator', 'browser-use', 'skyvern'],
    quickStart: [
      'Clone `microsoft/UFO` on a Windows machine and install the Python requirements.',
      'Configure an OpenAI or Azure OpenAI endpoint with a vision-capable model in the config file.',
      'Launch the UFO host and confirm it can enumerate open windows and their controls.',
      'Submit a small single-app task, e.g. "rename the Sheet1 tab in the open workbook to Q3".',
      'Inspect the generated action trace and screenshot log before attempting a multi-app task.',
    ],
    sampleInput:
      'From the open quarterly workbook, copy the total revenue cell and draft an email to the finance list with that number in the subject.',
    sampleOutput:
      'UFO identified the Excel window, read the target cell through the native API, switched to Outlook, created a draft with the value in the subject line, and paused before sending. The trace recorded 7 steps with a screenshot per step; the two GUI-only steps were flagged as lower confidence.',
    benchmarks: [
      { label: 'GitHub stars', value: '10,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/microsoft/UFO' },
      { label: 'Target platform', value: 'Windows desktop, GUI + native APIs', source: 'Microsoft UFO documentation' },
    ],
    decisionAid: {
      pickIf:
        'Your automation lives in Windows desktop applications, or you are researching GUI-agent grounding and want a published baseline.',
      skipIf:
        'Your task is entirely in a browser, or you are on macOS/Linux — a browser agent will be simpler and more reliable.',
    },
  },

  // ---------------- Automation ----------------
  {
    slug: 'flowise',
    name: 'Flowise',
    tagline: "A drag-and-drop canvas for building LLM chains and agents, with an embeddable API on the other end.",
    category: 'automation',
    license: 'open-source',
    licenseName: 'Apache-2.0 (open-core)',
    selfHost: true,
    difficulty: 2,
    website: 'https://flowiseai.com',
    github: 'https://github.com/FlowiseAI/Flowise',
    stars: 55547,
    updated: '2026-11',
    tags: ['visual-builder', 'langchain', 'self-hosted', 'low-code'],
    pricing: 'Self-host the open-source build free (Apache-2.0 for the core; enterprise modules under a separate commercial license). Flowise Cloud is a paid hosted tier.',
    verdict: "Still the fastest way to show a non-engineer what an agent pipeline actually looks like. The ceiling arrives when your workflow needs logic the canvas cannot express.",
    description:
      "Flowise is a visual builder for LLM applications: you drag nodes for models, prompts, vector stores, tools, and memory onto a canvas, wire them together, and immediately test the result in a chat panel. Chatflows cover straightforward RAG and chains, while Agentflows add tool-calling loops and conditional routing. Every flow can be exposed as an API or an embeddable widget, which is why it became a common choice for internal prototypes and client demos. The core repository is Apache-2.0, with a separately licensed enterprise directory for SSO and organisation features.",
    useCases: [
      'Prototype a document Q&A assistant without writing orchestration code',
      'Let a non-technical teammate edit prompts and swap models safely',
      'Expose a working agent as a REST endpoint for an existing product',
      'Start from a marketplace template and adapt it to internal data',
    ],
    pros: [
      'Very low barrier to entry; a working RAG chat in minutes',
      'Large node library and an active template marketplace',
      'Self-hostable with straightforward Docker deployment',
      'Built-in API and embed widget shorten the path to a demo',
    ],
    cons: [
      'Complex branching and error handling become unwieldy on a canvas',
      'Version control and testing of flows are weaker than code-first frameworks',
      'Enterprise features (SSO, advanced org controls) sit behind a commercial license',
    ],
    models: ['OpenAI / GPT-4o', 'Claude', 'Gemini', 'Ollama / local models', 'Hugging Face', 'Any LangChain-supported model'],
    alternatives: ['sim', 'langflow', 'dify', 'n8n', 'activepieces'],
    quickStart: [
      'Run `npx flowise start` locally, or deploy the Docker image for a shared instance.',
      'Open the canvas, add a Chat Model node and a Prompt node, and connect them.',
      'Add a document loader plus a vector store node to build a minimal RAG chatflow.',
      'Test in the built-in chat panel, adjusting the system prompt until the answers are grounded.',
      'Use the API endpoint view to copy the curl snippet into your application.',
    ],
    sampleInput:
      'Build a support assistant that answers from our 30-page refund policy PDF and escalates anything about chargebacks to a human.',
    sampleOutput:
      'The flow ingested the PDF into a vector store, retrieved the top 4 chunks per question, and answered with citations to the policy sections. A condition node detected chargeback-related queries and returned a fixed escalation message instead of generating an answer. The whole flow was exported as a REST endpoint.',
    benchmarks: [
      { label: 'GitHub stars', value: '55,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0 core (enterprise modules commercial)', source: 'github.com/FlowiseAI/Flowise LICENSE' },
      { label: 'Output surface', value: 'Canvas chatflow + REST API + embed widget', source: 'Flowise docs' },
    ],
    decisionAid: {
      pickIf:
        'You need a visual, quickly demoable agent builder, you work with non-engineers, or you want a self-hosted low-code RAG app.',
      skipIf:
        'Your workflow has intricate branching, strict testing requirements, or needs to live in Git as reviewable code — use LangGraph or a code-first framework.',
    },
  },

  {
    slug: 'sim',
    name: 'Sim',
    tagline: "A collaborative, open-source workspace to build, deploy, and monitor agent workflows.",
    category: 'automation',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://www.sim.ai',
    github: 'https://github.com/simstudioai/sim',
    stars: 29986,
    updated: '2026-11',
    tags: ['visual-builder', 'observability', 'collaboration', 'self-hosted'],
    pricing: 'Free and open-source (Apache-2.0) with self-hosting via Docker. A hosted cloud workspace is available with paid tiers.',
    verdict: "Like a visual agent builder that took observability and teamwork seriously from day one — the execution logs are the feature, not an afterthought.",
    description:
      "Sim is a workspace for designing and running AI agent workflows on a visual canvas. Blocks cover models, tools, conditions, API calls, and human approval steps; workflows can be deployed on a schedule, triggered by a webhook, or called as an API. What separates it from earlier canvas tools is the operational layer: per-block execution traces, logs, cost visibility, and shared editing with teammates. It is Apache-2.0 licensed and self-hostable, with a hosted option for teams that would rather not run the infrastructure.",
    useCases: [
      'Build a lead-enrichment workflow that calls an LLM, a CRM, and a webhook',
      'Run scheduled research or summarisation jobs with visible per-step logs',
      'Collaborate with a teammate on the same agent flow without emailing JSON around',
      'Self-host a visual automation platform for an internal team',
    ],
    pros: [
      'Execution traces and cost visibility per block make debugging far easier',
      'Clean, modern canvas with real collaboration features',
      'Apache-2.0 and genuinely self-hostable',
      'Fast release cadence with an active builder community',
    ],
    cons: [
      'Younger ecosystem than n8n or Flowise, so fewer third-party integrations',
      'Advanced logic still eventually hits the limits of a visual canvas',
      'Self-hosting the full stack is more involved than a single-container tool',
    ],
    models: ['OpenAI / GPT-4o', 'Claude', 'Gemini', 'Ollama / local models', 'Any OpenAI-compatible endpoint'],
    alternatives: ['flowise', 'n8n', 'activepieces', 'langflow', 'dify'],
    quickStart: [
      'Deploy with the provided Docker Compose file, or start with the hosted workspace.',
      'Create a new workflow and add a trigger block (manual, schedule, or webhook).',
      'Add an Agent block, choose a model, and give it a small tool such as an HTTP request.',
      'Run the workflow once and open the execution trace to inspect each block input and output.',
      'Invite a teammate, then deploy the workflow on a schedule.',
    ],
    sampleInput:
      'Every morning at 8am, summarise new entries in our support inbox, tag each by urgency, and post a digest to a Slack webhook.',
    sampleOutput:
      'The scheduled workflow fetched 23 new tickets, classified 4 as urgent, produced a short digest, and delivered it to Slack. The trace showed each block with its token count and latency; one ticket failed schema validation and was logged with its raw payload rather than silently dropped.',
    benchmarks: [
      { label: 'GitHub stars', value: '29,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/simstudioai/sim' },
      { label: 'Reported builders', value: '100,000+', source: 'Project README / sim.ai' },
    ],
    decisionAid: {
      pickIf:
        'You want a visual agent builder with proper logs, cost visibility, and shared editing, and you are happy with a younger integration ecosystem.',
      skipIf:
        'You need hundreds of mature SaaS connectors or a battle-tested enterprise automation platform — n8n is the safer choice.',
    },
  },

  // ---------------- Framework ----------------
  {
    slug: 'openmanus',
    name: 'OpenManus',
    tagline: "The community-built open reproduction of a general-purpose agent: plan, browse, write files, and run code.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://openmanus.github.io/',
    github: 'https://github.com/FoundationAgents/OpenManus',
    stars: 58875,
    updated: '2026-11',
    tags: ['general-agent', 'tool-use', 'browser', 'open-source'],
    pricing: 'Free and open-source (MIT). You supply the LLM API key and any browser or search service credentials.',
    verdict: "A remarkably fast community answer to the closed agent demos of 2025. Useful as a transparent, forkable general agent — but do not confuse a rapid reproduction with a hardened platform.",
    description:
      "OpenManus is an open-source general-purpose agent built by the FoundationAgents community as a reproducible counterpart to the closed Manus agent. It combines a planning loop with a toolset that includes browser navigation, file operations, shell or Python execution, and web search, so a single prompt can turn into a multi-step deliverable such as a researched report or a working script. The codebase is deliberately compact and readable, which made it a popular starting point for experiments, and the organisation has since spun out related research efforts including reinforcement-learning variants.",
    useCases: [
      'Study the anatomy of a general-purpose agent without wading through a huge framework',
      'Run a research-and-write task that needs browsing and file output',
      'Fork the tool layer to add your own internal APIs',
      'Compare planning strategies on a reproducible open baseline',
    ],
    pros: [
      'Small, legible codebase — easy to modify and instrument',
      'No commercial gate: every component is inspectable and self-hostable',
      'Broad built-in toolset covering browser, files, code, and search',
      'Very active community with frequent contributions',
    ],
    cons: [
      'Reliability on long, open-ended tasks is below specialised commercial agents',
      'Tool and browser setup still needs care, especially around credentials',
      'Rapid development means APIs and defaults change between versions',
    ],
    models: ['GPT-4o / GPT-5', 'Claude', 'Gemini', 'Qwen', 'Any OpenAI-compatible endpoint'],
    alternatives: ['manus', 'autogpt', 'babyagi', 'smolagents', 'openhands'],
    quickStart: [
      'Clone `FoundationAgents/OpenManus` and create a Python virtual environment.',
      'Install requirements, then copy the example config and add your LLM API key.',
      'Configure browser and search tool credentials if your task needs the web.',
      'Run the main entry point with a bounded task, e.g. "summarise three pages about MCP and write report.md".',
      'Inspect the generated plan and tool calls in the log before trying anything open-ended.',
    ],
    sampleInput:
      'Research the last two years of small open-source coding agents, compare them in a table, and save the result as a Markdown file.',
    sampleOutput:
      'The agent decomposed the task into 9 steps, browsed 11 pages, wrote a comparison table to comparison.md, and printed a summary of the sources used. Two pages were blocked and were skipped with a warning in the log rather than causing the run to fail.',
    benchmarks: [
      { label: 'GitHub stars', value: '58,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/FoundationAgents/OpenManus' },
      { label: 'Built-in tools', value: 'Browser, file I/O, code execution, web search', source: 'OpenManus docs' },
    ],
    decisionAid: {
      pickIf:
        'You want a compact, fully open general agent to learn from, fork, or run on your own infrastructure.',
      skipIf:
        'You need dependable completion of long business-critical tasks; a scoped workflow or a managed agent will waste less of your time.',
    },
  },

  {
    slug: 'copilotkit',
    name: 'CopilotKit',
    tagline: "The frontend stack for agents: React UI, shared state, generative interfaces, and the AG-UI protocol.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://docs.copilotkit.ai',
    github: 'https://github.com/CopilotKit/CopilotKit',
    stars: 38519,
    updated: '2026-11',
    tags: ['react', 'generative-ui', 'ag-ui', 'human-in-the-loop'],
    pricing: 'Free and open-source (MIT). You host the UI and supply your own agent backend and LLM keys; a hosted cloud offering is optional.',
    verdict: "The piece most agent projects forget: a decent interface. It solves the awkward boundary where a backend agent needs to show progress, ask a question, and render real UI inside your app.",
    description:
      "CopilotKit is a frontend framework for putting agents inside applications rather than inside a chat window. It provides drop-in React components for chat and sidebars, hooks that expose your application state to the agent and let the agent propose changes to it, and generative UI so a tool result can render as a real component. The team also created AG-UI, an open protocol standardising how agent backends stream events to frontends, with adapters for LangGraph, CrewAI, Mastra, and others. It is backend-agnostic: the value is entirely in the last mile to the user.",
    useCases: [
      'Add an in-app copilot that can read and modify the current page state',
      'Render agent tool output as interactive cards, tables, or forms',
      'Build a human-in-the-loop approval step inside your product UI',
      'Connect a LangGraph or CrewAI backend to a React app over a standard protocol',
    ],
    pros: [
      'Solves agent-to-UI streaming instead of leaving every team to reinvent it',
      'AG-UI gives a vendor-neutral contract between frontend and agent backend',
      'Strong React ergonomics with hooks and composable components',
      'Works with several major agent frameworks out of the box',
    ],
    cons: [
      'React-first; other stacks have thinner support',
      'You still need to design the agent logic and backend yourself',
      'Abstractions add a layer to debug when a streamed event does not render',
    ],
    models: ['Any backend model (OpenAI, Claude, Gemini, local) — CopilotKit is model-agnostic'],
    alternatives: ['langgraph', 'crewai', 'mastra', 'agno', 'openai-agents-sdk'],
    quickStart: [
      'Create or open a Next.js app and install `@copilotkit/react-core` and `@copilotkit/react-ui`.',
      'Wrap your app in the CopilotKit provider and point it at your agent runtime endpoint.',
      'Use `useCopilotReadable` to expose the relevant page state to the agent.',
      'Add `useCopilotAction` for one concrete action, such as creating a task in the UI.',
      'Drop in the CopilotChat component and confirm the agent can both read state and render an action result.',
    ],
    sampleInput:
      'In our project dashboard, let the user ask "show the overdue tasks as a table" and have the answer appear as a real sortable table, not plain text.',
    sampleOutput:
      'The agent received the readable dashboard state, called the registered `renderTasks` action with a filter for overdue items, and CopilotKit streamed it into the registered table component. The user could sort and click rows, and a change made in the table was reflected back into the shared state on the next agent turn.',
    benchmarks: [
      { label: 'GitHub stars', value: '38,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/CopilotKit/CopilotKit' },
      { label: 'Protocol', value: 'AG-UI (agent–user interaction protocol)', source: 'CopilotKit docs' },
    ],
    decisionAid: {
      pickIf:
        'You are building a product where an agent lives inside your UI, needs shared state, or should render components rather than chat text.',
      skipIf:
        'You only need a headless backend agent or a standalone chat page — this layer adds nothing for that case.',
    },
  },

  // ---------------- Creative ----------------
  {
    slug: 'moneyprinterturbo',
    name: 'MoneyPrinterTurbo',
    tagline: "Turn a single topic into a finished, captioned short video with an automated AI pipeline.",
    category: 'creative',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://github.com/harry0703/MoneyPrinterTurbo',
    github: 'https://github.com/harry0703/MoneyPrinterTurbo',
    stars: 138983,
    updated: '2026-11',
    tags: ['video-generation', 'tts', 'shorts', 'automation'],
    pricing: 'Free and open-source (MIT). You supply LLM / TTS / stock-footage API keys or use the bundled local options; many configurations cost nothing beyond compute.',
    verdict: "The most-starred project in this batch for a reason: it takes an idea to a rendered MP4 with no timeline editing. Just be realistic — it produces competent template-driven shorts, not original films.",
    description:
      "MoneyPrinterTurbo is an automated short-video pipeline. Give it a topic or keyword and it generates a script with an LLM, sources matching footage from stock providers or local files, synthesises a voice-over, burns in subtitles, adds background music, and renders a vertical or horizontal MP4. It ships both a web UI and an API, supports batch generation, and lets you swap nearly every stage — LLM provider, TTS voice, footage source, aspect ratio, and subtitle style. Originally a Chinese-language project, it now supports multiple languages and has become the default reference for open-source short-form video automation.",
    useCases: [
      'Produce a batch of vertical explainer shorts from a list of topics',
      'Generate a first cut with captions and voice-over before hand-editing',
      'A/B test hooks and scripts without re-editing footage each time',
      'Automate daily content for a faceless channel or internal comms',
    ],
    pros: [
      'Truly end-to-end: prompt in, MP4 out, no manual timeline work',
      'Every stage is swappable, including fully local TTS and stock-footage options',
      'Web UI plus API makes batch generation straightforward',
      'Huge community with many configuration guides and forks',
    ],
    cons: [
      'Output is template-driven and can look generic without curation',
      'Quality depends heavily on footage availability and the chosen TTS voice',
      'Stock-media licensing and platform monetisation rules are your responsibility',
    ],
    models: ['GPT-4o / GPT-5', 'Claude', 'Gemini', 'Qwen', 'DeepSeek', 'Any OpenAI-compatible endpoint', 'Local / edge TTS'],
    alternatives: ['heygen', 'synthesia', 'runway', 'pika', 'elevenlabs'],
    quickStart: [
      'Clone `harry0703/MoneyPrinterTurbo` and install the Python dependencies.',
      'Copy the example config and add an LLM API key; choose a TTS provider (several free options exist).',
      'Configure a footage source — Pexels/Pixabay keys or a local media folder.',
      'Start the web UI and submit a topic such as "three surprising facts about octopuses" in vertical 9:16.',
      'Review the generated script before rendering, then find the MP4 in the output directory.',
    ],
    sampleInput:
      'Create a 45-second vertical short about why the sky is blue, in English, with subtitles and a calm male narration.',
    sampleOutput:
      'The pipeline produced a 46-second script split into 7 scenes, selected 7 matching stock clips, generated a narration track, burned in timed subtitles, and rendered a 1080x1920 MP4 with background music at -18 dB. The web UI showed per-stage timings; the script was editable before the final render.',
    benchmarks: [
      { label: 'GitHub stars', value: '138,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/harry0703/MoneyPrinterTurbo' },
      { label: 'Output', value: 'Rendered MP4 (vertical/horizontal) via Web UI or API', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You need volume: many caption-and-voiceover shorts from topics, with full control over providers and no per-video SaaS fee.',
      skipIf:
        'You need brand-specific visuals, precise art direction, or cinematic originality — a human editor or a generative video tool fits better.',
    },
  },

  {
    slug: 'airi',
    name: 'AIRI',
    tagline: "A self-hosted container for an AI companion you own: voice, memory, and a live 2D/3D avatar.",
    category: 'creative',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://airi.moeru.ai/docs/',
    github: 'https://github.com/moeru-ai/airi',
    stars: 51110,
    updated: '2026-11',
    tags: ['virtual-avatar', 'voice', 'live2d', 'companion'],
    pricing: 'Free and open-source (MIT). You supply LLM, TTS, and STT keys or run local models; no hosted subscription is required.',
    verdict: "Ambitious, slightly chaotic, and genuinely open: it assembles a character that can talk, listen, remember, and appear on screen without handing your data to a character-chat service.",
    description:
      "AIRI is an open-source project for building a self-hosted AI character or companion. It combines a chat-capable LLM with speech recognition and synthesis, long-term memory, and a rendered Live2D or VRM avatar that reacts in real time. Beyond the browser and desktop app, integrations reach into Discord, Telegram, Minecraft, and VTuber toolchains, so the same character can appear in several places. It is TypeScript-first and explicitly positioned as user-owned infrastructure: you pick the model, the voice, and where the memory is stored.",
    useCases: [
      'Run a private VTuber-style avatar for streaming with local voice models',
      'Build a persistent character for a community Discord or Telegram server',
      'Experiment with real-time voice interruption and avatar lip-sync',
      'Prototype an embodied assistant without a hosted character platform',
    ],
    pros: [
      'Unusually complete: voice, memory, and animated avatar in one project',
      'Fully self-hostable with local model support',
      'Multiple surfaces — web, desktop, chat platforms, and games',
      'Active, fast-moving community with frequent feature work',
    ],
    cons: [
      'Many moving parts; setup is more involved than a chat UI',
      'Real-time voice and rendering demand decent hardware and low-latency APIs',
      'Experimental feel — features and configuration change quickly',
    ],
    models: ['GPT-4o / GPT-5', 'Claude', 'Gemini', 'Ollama / local models', 'Any OpenAI-compatible endpoint', 'Local TTS/STT'],
    alternatives: ['elevenlabs', 'heygen', 'suno', 'synthesia', 'vapi'],
    quickStart: [
      'Clone `moeru-ai/airi` and install dependencies with the project package manager (pnpm).',
      'Add an LLM key and choose a speech provider, or configure local TTS/STT.',
      'Start the dev server and open the web UI to see the default avatar.',
      'Set a character name, personality prompt, and voice, then enable microphone input.',
      'Optionally connect a Discord or Telegram bot token to take the same character to your server.',
    ],
    sampleInput:
      'Set up a bilingual assistant named Mio with a calm personality, a Live2D avatar, voice input, and memory of past conversations.',
    sampleOutput:
      'The avatar loaded and lip-synced to a synthesised greeting, recognised a spoken question through the microphone, answered in the configured voice, and recalled a detail from the previous session. The character config, voice settings, and memory store all remained in local files.',
    benchmarks: [
      { label: 'GitHub stars', value: '51,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/moeru-ai/airi' },
      { label: 'Avatar formats', value: 'Live2D / VRM with voice and memory', source: 'AIRI docs' },
    ],
    decisionAid: {
      pickIf:
        'You want an embodied, voice-enabled character you fully control, or you are building a self-hosted VTuber or community bot.',
      skipIf:
        'You only need text chat, or you want a turnkey hosted service with no infrastructure work — a hosted character platform is simpler.',
    },
  },
];
