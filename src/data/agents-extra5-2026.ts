// ============================================================
//  New agents batch 5 — added 2026-11-06
//  Source: hand-picked from GitHub (high-star, actively maintained
//  open-source AI agent projects). Live stars / license / push date
//  fetched via GitHub API on 2026-11-06. Spread into `agents` in agents.ts.
// ============================================================
import type { Agent } from './agents';

export const extraAgents2026e: Agent[] = [
  // ---------------- Coding ----------------
  {
    slug: 'crush',
    name: 'Crush',
    tagline: "A terminal-native coding agent with a genuinely good TUI and no single-model lock-in.",
    category: 'coding',
    license: 'open-source',
    licenseName: 'FSL-1.1-MIT (converts to MIT)',
    selfHost: true,
    difficulty: 2,
    website: 'https://github.com/charmbracelet/crush',
    github: 'https://github.com/charmbracelet/crush',
    stars: 28976,
    updated: '2026-11',
    tags: ['terminal', 'tui', 'coding-agent', 'model-agnostic', 'go'],
    pricing: 'Free to use under the Functional Source License 1.1 with an MIT future grant; the code becomes MIT-licensed after the stated change date. You pay only for the LLM API calls you configure.',
    verdict: "The most opinionated thing here is the interface: Crush treats the terminal as a real application, not a wrapper around a chat box. If you live in tmux, this is the coding agent that feels native.",
    description:
      "Crush is Charm's open-source agentic coding tool, written in Go and built around a polished terminal UI. It runs inside your existing repository, can read and edit files, shell out to your test suite, and works with a configurable mix of model providers instead of tying you to one vendor's subscription. The TUI is the differentiator: sessions, diffs, tool calls, and permission prompts are laid out as navigable panes rather than a scrolling transcript, which makes long multi-file tasks much easier to supervise. It ships with project-level configuration so teams can commit the model, prompts, and allowed tools alongside the code.",
    useCases: [
      'Work through a multi-file refactor from a terminal without leaving the repo',
      'Switch between frontier and local models depending on the task and budget',
      'Review agent-generated diffs and tool calls in a structured TUI',
      'Standardise an agent setup across a team via a committed config file',
    ],
    pros: [
      'Best-in-class terminal UX; diffs and tool calls stay readable on long sessions',
      'Model-agnostic configuration, including local and self-hosted endpoints',
      'Single Go binary with a light install footprint',
      'Project config can be version-controlled with the codebase',
    ],
    cons: [
      'FSL is source-available rather than OSI open source until the MIT conversion date',
      'Terminal-first by design; there is no full IDE integration or graphical editor',
      'Model quality and cost still depend entirely on the provider you configure',
    ],
    models: ['Claude', 'GPT', 'Gemini', 'Local models via Ollama', 'Any OpenAI-compatible endpoint'],
    alternatives: ['aider', 'cline', 'codex', 'opencode', 'gemini-cli'],
    quickStart: [
      'Install the binary from the repo releases or with the documented Go install command.',
      'Run `crush` inside the repository you want the agent to work on.',
      'Open the model settings and add an API key or point it at a local endpoint.',
      'Ask for a small, reviewable change first and inspect the diff in the TUI.',
      'Commit a project config file so your team shares the same models and tool permissions.',
    ],
    sampleInput:
      'Add a `--dry-run` flag to the import CLI, keep the existing output format, and add a test that asserts nothing is written when the flag is set.',
    sampleOutput:
      'Crush located the argument parser and the import writer, proposed a diff with the new flag and an early-return guard, and ran the test command in its shell tool. The TUI showed the diff and the failing/passing test output side by side, so the change could be accepted or reverted without leaving the terminal.',
    benchmarks: [
      { label: 'GitHub stars', value: '28,900+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'FSL-1.1-MIT, future MIT grant', source: 'github.com/charmbracelet/crush LICENSE' },
      { label: 'Implementation', value: 'Single Go binary, terminal UI', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You want a fast, scriptable coding agent that lives in the terminal, and you care about readable diffs and being able to swap model providers.',
      skipIf:
        'You need strict OSI-approved licensing today, deep IDE refactorings, or a browser-based workspace — look at Aider, Cline, or Bolt.diy instead.',
    },
  },

  {
    slug: 'bolt-diy',
    name: 'Bolt.diy',
    tagline: "The self-hostable, bring-your-own-LLM version of prompt-to-full-stack-app generation.",
    category: 'coding',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://stackblitz-labs.github.io/bolt.diy/',
    github: 'https://github.com/stackblitz-labs/bolt.diy',
    stars: 20036,
    updated: '2026-11',
    tags: ['app-generation', 'browser-ide', 'byo-llm', 'self-hosted'],
    pricing: 'Free and open-source (MIT). Self-host with Node/Docker; you provide the LLM API keys, so cost scales with your own usage.',
    verdict: "Useful less as a production app builder than as an open reference implementation of the in-browser agent loop: prompt, scaffold, run, edit, deploy — all with a model you choose.",
    description:
      "Bolt.diy is the community-run, open-source evolution of the Bolt full-stack app generator. You describe an application, and the agent scaffolds a project, writes files, installs dependencies, and runs it in an in-browser preview with a built-in terminal and editor. The defining difference from the hosted original is control: it supports a long list of LLM providers (including local ones), runs on your own machine or server, and keeps the whole toolchain inspectable. It is a TypeScript/React codebase with WebContainer-style execution, which makes it a popular starting point for teams experimenting with their own prompt-to-app loops.",
    useCases: [
      'Prototype a full-stack web app from a single prompt on your own infrastructure',
      'Compare how different LLMs perform on the same scaffolding task',
      'Fork the agent loop to build an internal, domain-specific app generator',
      'Run a browser IDE in a classroom or workshop without per-seat licences',
    ],
    pros: [
      'Bring your own model and API key; no mandatory hosted subscription',
      'Full source access to the generator, preview, and tool-calling loop',
      'MIT licensed and straightforward to self-host or fork',
      'Fast feedback cycle: generate, see the preview, edit, regenerate',
    ],
    cons: [
      'Generated apps are prototypes; production hardening is on you',
      'Browser-based execution constrains what runtimes and system tools are available',
      'LLM costs and rate limits are now your operational problem',
    ],
    models: ['Claude', 'GPT', 'Gemini', 'Mistral', 'Ollama / local models', 'OpenAI-compatible providers'],
    alternatives: ['replit-agent', 'windsurf', 'cursor', 'cline', 'codex'],
    quickStart: [
      'Clone the repo and install dependencies with `pnpm install` (Node 20+ recommended).',
      'Copy the example env file and add at least one LLM provider API key.',
      'Start the dev server and open the local URL in your browser.',
      'Describe a small app, for example a markdown notebook with local storage, and watch it scaffold and preview.',
      'Edit a generated file in the built-in editor and ask the agent to continue from your changes.',
    ],
    sampleInput:
      'Build a small recipe manager with a search field, a list view, and localStorage persistence. Use plain React and Tailwind.',
    sampleOutput:
      'The agent created a Vite/React project, wrote the component tree and a localStorage hook, installed Tailwind, and started the preview. The app rendered with searchable sample recipes; a follow-up prompt added delete confirmation without discarding the earlier files.',
    benchmarks: [
      { label: 'GitHub stars', value: '20,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/stackblitz-labs/bolt.diy' },
      { label: 'Deployment', value: 'Self-hosted Node app or Docker', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You want to own the whole prompt-to-app pipeline, swap models freely, or study and fork an in-browser coding agent.',
      skipIf:
        'You need a polished hosted builder with one-click production deploys, or you want an agent that works inside an existing large codebase.',
    },
  },

  // ---------------- Research ----------------
  {
    slug: 'graphrag',
    name: 'Microsoft GraphRAG',
    tagline: "RAG that builds a knowledge graph first, so it can answer questions about the whole corpus rather than just the nearest chunks.",
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://microsoft.github.io/graphrag/',
    github: 'https://github.com/microsoft/graphrag',
    stars: 36577,
    updated: '2026-11',
    tags: ['knowledge-graph', 'rag', 'entity-extraction', 'research'],
    pricing: 'Free and open-source (MIT). Indexing is LLM-intensive, so the real cost is the extraction calls required to build the graph from your documents.',
    verdict: "The right tool when the question is about themes, relationships, or the corpus as a whole. Overkill — and expensive — when simple vector lookup already answers it.",
    description:
      "GraphRAG is Microsoft's open-source pipeline for graph-based retrieval-augmented generation. Instead of only embedding text chunks, it uses an LLM to extract entities and relationships, clusters them into communities, and writes hierarchical community summaries. At query time it offers local search for questions about a specific entity and global search that aggregates across community summaries to answer corpus-wide questions such as what the main themes are or how two topics connect. The indexer is configurable but deliberately explicit: you control the extraction prompts, chunking, and model, which makes it a research platform as much as a drop-in library.",
    useCases: [
      'Answer questions about themes and trends across a large document collection',
      'Trace relationships between people, organisations, and events in a corpus',
      'Build an internal research assistant over reports, transcripts, or filings',
      'Compare graph-based retrieval against plain vector RAG on the same data',
    ],
    pros: [
      'Handles global, sense-making questions that vanilla vector RAG fails at',
      'Transparent, configurable indexing pipeline with inspectable graph artifacts',
      'MIT licensed and self-hostable; no mandatory cloud service',
      'Active Microsoft research project with documented methodology',
    ],
    cons: [
      'Indexing is slow and costly because it makes many LLM extraction calls',
      'Operationally heavier than a vector store: graph storage, prompts, and tuning',
      'Answer quality depends heavily on extraction prompt and domain fit',
    ],
    models: ['GPT-4 class models', 'Azure OpenAI', 'Any OpenAI-compatible endpoint', 'Local models via Ollama'],
    alternatives: ['llama-index', 'lightrag', 'ragflow', 'cognee', 'mem0'],
    quickStart: [
      'Install the package with `pip install graphrag` and create a working directory.',
      'Run `graphrag init` to generate the config and default prompts, then set your LLM and embedding API keys.',
      'Put a small set of plain-text documents in the input folder.',
      'Run `graphrag index` and inspect the generated entities, relationships, and community reports.',
      'Query with global search for corpus-wide themes and local search for entity-specific questions.',
    ],
    sampleInput:
      'Using 200 internal incident reports, what are the three recurring root-cause themes, and which teams appear most often in related incidents?',
    sampleOutput:
      'Global search aggregated the community summaries into three dominant themes, each with supporting report references; a follow-up local search on the top theme returned the named entities and the relationships linking two teams to repeated deployment-related incidents. Every claim pointed back to source document ids.',
    benchmarks: [
      { label: 'GitHub stars', value: '36,500+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/microsoft/graphrag' },
      { label: 'Query modes', value: 'Global / local / DRIFT / basic search', source: 'GraphRAG documentation' },
    ],
    decisionAid: {
      pickIf:
        'Your questions are about the corpus as a whole, its themes, or the relationships between entities — and you can afford an LLM-heavy indexing step.',
      skipIf:
        'You only need factual lookup from a handful of documents. Plain vector RAG with LlamaIndex or RAGFlow is cheaper and simpler.',
    },
  },

  {
    slug: 'openbb',
    name: 'OpenBB',
    tagline: "A normalised financial data layer that gives analysts — and their AI agents — one interface instead of twenty vendor SDKs.",
    category: 'research',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://openbb.co',
    github: 'https://github.com/openbq-org/OpenBB',
    stars: 75129,
    updated: '2026-11',
    tags: ['financial-data', 'quant', 'api', 'agent-tooling'],
    pricing: 'Core platform is Apache-2.0 and free to self-host. Individual data vendors still require their own credentials or subscriptions; commercial add-ons exist for enterprise support.',
    verdict: "Not an agent, but one of the most useful things you can hand an agent: consistent, typed access to market and fundamental data without writing a scraper per provider.",
    description:
      "OpenBB is an open data platform for analysts, quants, and increasingly AI agents. It wraps dozens of market data, fundamentals, economic, and news providers behind a consistent Python SDK, command surface, and REST API, so a workflow written once can switch data sources without rewriting every call. For agent builders it solves the unglamorous part of financial research: authentication, normalisation, rate limits, and output schemas. You can expose selected endpoints as tools, cache results locally, and keep the agent's reasoning separate from the plumbing of data retrieval. The repository is large and modular, with provider integrations contributed by both the core team and the community.",
    useCases: [
      'Give a research agent typed tools for prices, filings, estimates, and macro series',
      'Build reproducible screening or backtest workflows that survive vendor changes',
      'Combine licensed vendor data with free sources in one normalised schema',
      'Serve a controlled financial data API to an internal agent or dashboard',
    ],
    pros: [
      'Huge coverage of providers behind one consistent interface',
      'Apache-2.0 core, self-hostable, with an active contributor base',
      'Python SDK and REST surface both work well as agent tool definitions',
      'Normalised schemas reduce prompt and parsing hacks in agent pipelines',
    ],
    cons: [
      'You still need credentials and licences for many premium data sources',
      'Large modular codebase; setup and provider configuration take real effort',
      'Data quality and entitlements vary by provider, not by OpenBB',
    ],
    models: ['Any LLM with tool/function calling', 'GPT', 'Claude', 'Local models'],
    alternatives: ['trading-agents', 'ai-hedge-fund', 'vanna', 'consensus', 'composio'],
    quickStart: [
      'Install the platform packages with `pip install openbb` in a fresh virtual environment.',
      'Register the free data providers you need and add their API keys to your local config.',
      'Pull a familiar series such as daily prices for one ticker and inspect the returned schema.',
      'Wrap two or three endpoints as typed tools in your agent framework of choice.',
      'Add caching and explicit error handling before letting the agent run unattended queries.',
    ],
    sampleInput:
      'Compare revenue growth and gross margin for three semiconductor companies over the last eight quarters, then list the data sources used.',
    sampleOutput:
      'The agent called the fundamentals endpoint once per ticker, received a normalised quarterly schema, computed growth and margin consistently, and returned a comparison table with a source column listing the provider behind each figure instead of mixing incompatible vendor definitions.',
    benchmarks: [
      { label: 'GitHub stars', value: '75,100+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/openbq-org/OpenBB LICENSE' },
      { label: 'Access surfaces', value: 'Python SDK, REST API, CLI / workspace', source: 'OpenBB documentation' },
    ],
    decisionAid: {
      pickIf:
        'You are building research or quant agents that need reliable, multi-provider financial data and you want to own the data layer.',
      skipIf:
        'You need a ready-made trading strategy or a conversational research report with no engineering — see TradingAgents or AI Hedge Fund instead.',
    },
  },

  // ---------------- Browsing ----------------
  {
    slug: 'cua',
    name: 'Cua',
    tagline: "Open-source infrastructure for computer-use agents: sandboxes, drivers, and benchmarks instead of another closed browser bot.",
    category: 'browsing',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://cua.ai',
    github: 'https://github.com/trycua/cua',
    stars: 31855,
    updated: '2026-11',
    tags: ['computer-use', 'sandbox', 'gui-automation', 'benchmarks', 'rust'],
    pricing: 'Free and open-source (MIT). You supply the VMs or containers, the OS images, and the vision-language model calls. Some hosted conveniences are commercial.',
    verdict: "This is the layer most computer-use demos quietly skip. If you are training, evaluating, or shipping GUI agents, Cua is closer to a toolchain than a product — and that is a compliment.",
    description:
      "Cua is an open-source stack for building and evaluating computer-use agents. Rather than a single bot, it provides cross-OS sandboxes (macOS, Linux, Windows), low-level drivers for screenshots and input, and benchmark harnesses for training, evaluation, and data generation. That separation matters: the model that decides what to click can be swapped independently of the environment that executes the click. The project is written largely in Rust for the sandbox/driver layer with Python-facing tooling, and it is aimed at teams that need reproducible GUI environments and measurable results rather than a one-off browser automation script.",
    useCases: [
      'Run reproducible GUI-agent benchmarks across clean OS sandboxes',
      'Collect screenshot/action trajectories for training or fine-tuning',
      'Test a computer-use model against desktop apps, not just web pages',
      'Build an internal desktop automation agent on controlled VMs',
    ],
    pros: [
      'Rare open-source coverage of full desktop computer use, not only browsers',
      'Sandboxes make runs reproducible and keep risky actions isolated',
      'Benchmark and data-generation tooling included',
      'Model-agnostic: the decision model and the execution layer are decoupled',
    ],
    cons: [
      'Considerable setup: OS images, VMs, and display plumbing are your job',
      'Consumer GPUs and laptops are not enough for serious training workloads',
      'Agent reliability still depends on the vision-language model you bring',
    ],
    models: ['Any vision-language model', 'Claude computer use', 'GPT computer-using models', 'UI-TARS', 'ShowUI-class models'],
    alternatives: ['ui-tars', 'ufo', 'skyvern', 'browser-use', 'operator'],
    quickStart: [
      'Clone the repo and follow the platform-specific setup for the sandbox runtime you need.',
      'Start a clean OS sandbox and verify you can capture a screenshot and send a click.',
      'Run one of the bundled benchmark tasks to establish a baseline.',
      'Wire your own vision-language model to the observation/action loop.',
      'Record trajectories and iterate on prompting or fine-tuning with comparable runs.',
    ],
    sampleInput:
      'In a fresh Linux sandbox, open the file manager, create a folder named quarterly-report, and copy the two PDFs from Downloads into it.',
    sampleOutput:
      'The agent received a screenshot of the desktop, issued pointer and keyboard actions through the driver, and completed the file operations inside the sandbox. The run produced a timestamped action/screenshot trajectory that could be replayed and scored against the benchmark definition.',
    benchmarks: [
      { label: 'GitHub stars', value: '31,800+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/trycua/cua' },
      { label: 'Platform coverage', value: 'macOS / Linux / Windows sandboxes', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You need reproducible GUI environments, training data, or an evaluation harness for computer-use agents.',
      skipIf:
        'You only want to automate a few web forms with natural language — Stagehand, Browser Use, or Skyvern will get you there far faster.',
    },
  },

  {
    slug: 'magentic-ui',
    name: 'Magentic-UI',
    tagline: "Microsoft Research's human-in-the-loop agent that works across both the browser and your local files, with plans you can edit before it acts.",
    category: 'browsing',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://github.com/microsoft/magentic-ui',
    github: 'https://github.com/microsoft/magentic-ui',
    stars: 10109,
    updated: '2026-11',
    tags: ['browser-agent', 'human-in-the-loop', 'research-preview', 'filesystem'],
    pricing: 'Free and open-source (MIT), released as an experimental research preview. You provide model API keys and run the stack locally; expect rough edges.',
    verdict: "The interesting idea is not autonomy, it is negotiable autonomy: you can see the plan, amend it, and approve actions. A research preview, but a well-judged one.",
    description:
      "Magentic-UI is an experimental agent from Microsoft Research that operates a browser and the local file system from a single web interface. Its design centres on human supervision: the agent proposes a step-by-step plan you can edit, asks for approval before consequential actions, and can hand control back mid-task. Completed workflows can be saved and replayed, which turns a successful session into a reusable automation rather than a transcript. It grew out of the Magentic and AutoGen research lines and is explicitly a research preview, so it is best read as a well-documented exploration of how people and agents should share control, not a hardened RPA product.",
    useCases: [
      'Research a topic across several sites while keeping a human approval gate',
      'Automate a repetitive browser-plus-files workflow and replay it later',
      'Study human-in-the-loop interaction patterns for agentic systems',
      'Prototype an internal assistant that must not act without confirmation',
    ],
    pros: [
      'Editable plans and action approval make failures cheap and observable',
      'Spans both browser and local file operations in one session',
      'Saved workflows can be reused instead of re-prompted',
      'MIT licensed and runnable on your own machine',
    ],
    cons: [
      'Explicitly a research preview: expect breaking changes and incomplete features',
      'Needs a capable model and careful sandboxing before any real-world use',
      'Supervision overhead is the point, so it is slower than fully automatic tools',
    ],
    models: ['GPT-4 class models', 'Azure OpenAI', 'OpenAI-compatible endpoints', 'Small local models in recent research builds'],
    alternatives: ['browser-use', 'stagehand', 'skyvern', 'ui-tars', 'operator'],
    quickStart: [
      'Clone the repo and follow the README to install the Python stack and browser runtime.',
      'Set your model credentials in the environment config.',
      'Start the local web UI and give it a low-risk task on a harmless page.',
      'Edit the proposed plan before approving it and watch each action execute.',
      'Save a successful workflow and rerun it to see what generalises.',
    ],
    sampleInput:
      'Find the three most recent posts on a given blog, summarise each in one sentence, and save the summary as a markdown file in my Documents folder.',
    sampleOutput:
      'The agent proposed a five-step plan covering navigation, extraction, summarisation, and file writing. After the plan was approved, it executed the browser steps, showed the drafted summaries for review, and wrote the approved markdown file to the local folder. The run was saved as a reusable workflow.',
    benchmarks: [
      { label: 'GitHub stars', value: '10,100+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/microsoft/magentic-ui' },
      { label: 'Status', value: 'Experimental research preview', source: 'Microsoft Research / project README' },
    ],
    decisionAid: {
      pickIf:
        'You want to keep a person in the loop for browser tasks, or you are researching how agents should request approval and reuse workflows.',
      skipIf:
        'You need a production-grade unattended scraper or RPA runner — this is a preview and the supervision is deliberate.',
    },
  },

  // ---------------- Automation ----------------
  {
    slug: 'kestra',
    name: 'Kestra',
    tagline: "Declarative, event-driven orchestration that treats AI agents as one more task in a governed workflow.",
    category: 'automation',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://go.kestra.io/home',
    github: 'https://github.com/kestra-io/kestra',
    stars: 30158,
    updated: '2026-11',
    tags: ['orchestration', 'yaml', 'event-driven', 'data-pipelines', 'self-hosted'],
    pricing: 'Free and open-source (Apache-2.0) for self-hosting. An enterprise edition adds governance, SSO, and support; you pay for your own compute and any LLM calls.',
    verdict: "When an agent step has to run after an ETL job, retry on failure, and leave an audit trail, a workflow engine beats a pile of Python scripts. Kestra is that engine, YAML-first and unapologetically infrastructure-shaped.",
    description:
      "Kestra is an open-source orchestration platform built around declarative YAML flows. Tasks are composed into flows with retries, schedules, triggers, branching, and namespaced secrets, and everything is observable from a built-in UI with logs and execution history. The plugin ecosystem covers databases, cloud storage, messaging, scripts, and LLM/agent services, so an AI step can sit between a data ingestion job and a downstream notification without custom glue code. It is Java-based and designed for self-hosted, production operations, which makes it a better fit for platform teams than for someone wanting a quick visual chatbot builder.",
    useCases: [
      'Run an LLM enrichment step every night after a data pipeline finishes',
      'Schedule multi-step agent workflows with retries, timeouts, and alerting',
      'Replace cron-plus-scripts with version-controlled, auditable flows',
      'Give non-developers a UI to inspect and rerun failed AI tasks',
    ],
    pros: [
      'Declarative flows are versionable, reviewable, and easy to reproduce',
      'Mature scheduling, retry, and observability primitives',
      'Broad plugin ecosystem including AI and data integrations',
      'Apache-2.0 core with genuine self-hosting',
    ],
    cons: [
      'Heavier to deploy and operate than a lightweight automation tool',
      'YAML-first authoring has a learning curve for agent developers',
      'Java server footprint is overkill for a single simple agent loop',
    ],
    models: ['Any LLM via plugin or HTTP task', 'OpenAI-compatible APIs', 'Self-hosted models'],
    alternatives: ['n8n', 'activepieces', 'flowise', 'make', 'zapier-agents'],
    quickStart: [
      'Start Kestra with the provided Docker Compose file and open the UI on localhost.',
      'Create a namespace and a first flow from the built-in editor.',
      'Add a simple scheduled task and run it manually to inspect logs and outputs.',
      'Insert an HTTP or script task that calls your LLM or agent endpoint, passing previous task outputs as inputs.',
      'Add retries and a failure notification, then commit the flow YAML to version control.',
    ],
    sampleInput:
      'Every morning at 07:00, fetch new support tickets, classify urgency with an LLM, write results to the warehouse, and notify the on-call channel if anything is marked critical.',
    sampleOutput:
      'Kestra ran the flow on schedule, stored each task output in the execution context, retried one transient LLM timeout, and surfaced the full run in the UI with per-task logs. The warehouse table was updated and a single critical ticket triggered the notification branch.',
    benchmarks: [
      { label: 'GitHub stars', value: '30,100+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/kestra-io/kestra' },
      { label: 'Authoring model', value: 'Declarative YAML flows, plugin tasks', source: 'Kestra documentation' },
    ],
    decisionAid: {
      pickIf:
        'Agent steps need to live inside reliable, scheduled, observable data or business workflows with proper retries and auditability.',
      skipIf:
        'You want a quick drag-and-drop chatbot or a single ad-hoc automation — n8n or Activepieces is much lighter.',
    },
  },

  {
    slug: 'coze-studio',
    name: 'Coze Studio',
    tagline: "A visual agent-building platform you can actually self-host, with prompts, workflows, plugins, and knowledge in one UI.",
    category: 'automation',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://github.com/coze-dev/coze-studio',
    github: 'https://github.com/coze-dev/coze-studio',
    stars: 21807,
    updated: '2026-11',
    tags: ['visual-builder', 'workflows', 'plugins', 'self-hosted', 'typescript'],
    pricing: 'Free and open-source (Apache-2.0). Self-host with Docker; you supply model credentials and the infrastructure. A hosted commercial Coze service exists separately.',
    verdict: "The closest open-source equivalent to a hosted agent builder: good for teams that want a GUI for non-engineers but still need the data and model keys on their own side of the wall.",
    description:
      "Coze Studio is the open-source edition of the Coze agent development platform. It packages the pieces a product team usually assembles by hand — prompt editing, visual workflow graphs, plugin/tool registration, knowledge bases, memory, debugging traces, and publishing as an API or chat surface — into a single browser-based studio. The backend is TypeScript-heavy and designed to run via Docker Compose with your own model provider configuration. Compared with pure workflow tools, its strength is the agent abstraction: you define a persona, give it tools and knowledge, test it in a playground, and then publish a version without writing glue code for each integration.",
    useCases: [
      'Let non-engineers build and iterate on internal assistant personas',
      'Prototype a tool-using agent with a visual workflow and a knowledge base',
      'Inspect execution traces to debug why an agent chose the wrong tool',
      'Publish an agent as an API endpoint behind your own infrastructure',
    ],
    pros: [
      'Genuinely full-stack: prompt, workflow, tools, knowledge, debug, publish',
      'Apache-2.0 with a workable self-host path',
      'Visual builder lowers the barrier for non-developers',
      'Model provider configuration stays under your control',
    ],
    cons: [
      'The stack is substantial; Docker deployment and upgrades need ops attention',
      'Feature parity with the hosted commercial product is not guaranteed',
      'Visual workflows can become hard to maintain once logic gets complex',
    ],
    models: ['OpenAI / GPT', 'Claude', 'Gemini', 'Volcengine models', 'OpenAI-compatible endpoints'],
    alternatives: ['dify', 'flowise', 'langflow', 'n8n', 'activepieces'],
    quickStart: [
      'Clone the repo and start the stack with the documented Docker Compose setup.',
      'Open the studio UI and configure a model provider with your own API key.',
      'Create a simple agent: write a system prompt and add one built-in plugin.',
      'Test it in the playground and open a trace to see tool calls and intermediate steps.',
      'Add a knowledge base and publish the agent as an API endpoint.',
    ],
    sampleInput:
      'Build a support assistant that answers from our refund-policy PDF and escalates to a human when the customer mentions a chargeback.',
    sampleOutput:
      'In the studio the agent was given the PDF as a knowledge source and two tools: policy lookup and escalation. Playground traces showed retrieval before answering, and a chargeback message correctly took the escalation branch, producing a handoff record instead of a generated answer.',
    benchmarks: [
      { label: 'GitHub stars', value: '21,800+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/coze-dev/coze-studio LICENSE' },
      { label: 'Deployment', value: 'Docker Compose, self-hosted', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You want a hosted-builder-style visual agent studio but need it self-hosted, Apache-2.0, and usable by non-engineers.',
      skipIf:
        'You prefer code-first agent definitions in a repo, or you only need deterministic scheduled workflows with no chat surface.',
    },
  },

  // ---------------- Framework ----------------
  {
    slug: 'haystack',
    name: 'Haystack',
    tagline: "A production-minded framework for composing RAG pipelines and agents out of explicit, testable components.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://haystack.deepset.ai',
    github: 'https://github.com/deepset-ai/haystack',
    stars: 26935,
    updated: '2026-11',
    tags: ['rag', 'pipelines', 'components', 'evaluation', 'production'],
    pricing: 'Free and open-source (Apache-2.0). You pay for model APIs, vector databases, and your own hosting; deepset offers commercial enterprise tooling separately.',
    verdict: "Less magical than prompt-first frameworks, more dependable once the prototype has to become a service. The component graph is the feature.",
    description:
      "Haystack is deepset's open-source framework for building LLM applications as explicit pipelines. You wire together typed components — retrievers, rankers, prompt builders, generators, converters, routers — into a graph where data flow is visible and each component can be swapped or tested independently. The 2.x line added first-class agent and tool support, but kept the same philosophy: retrieval quality, evaluation, and deployment are engineering problems, not prompt tricks. It ships document stores, indexing pipelines, evaluation tooling, and integration packages for common vector databases and model providers, with deployment examples for REST services and containers.",
    useCases: [
      'Build a RAG system where each retrieval and ranking step can be evaluated',
      'Swap embedding models or vector stores without rewriting the application',
      'Add tool-calling agents to an existing document pipeline',
      'Serve a versioned, containerised question-answering API in production',
    ],
    pros: [
      'Typed, composable components make pipelines debuggable and testable',
      'Strong retrieval and evaluation tooling, not just chat abstractions',
      'Apache-2.0, mature project, active maintenance',
      'Broad integration catalog for stores and model providers',
    ],
    cons: [
      'More concepts and boilerplate than minimal agent libraries',
      'Not the fastest way to hack together a two-tool demo',
      'Some integrations lag behind the newest provider APIs',
    ],
    models: ['GPT', 'Claude', 'Gemini', 'Hugging Face models', 'Local models via Ollama'],
    alternatives: ['langchain', 'llama-index', 'ragflow', 'langflow', 'pydantic-ai'],
    quickStart: [
      'Install with `pip install haystack-ai` and pick a document store integration.',
      'Build an indexing pipeline that converts, splits, embeds, and writes documents.',
      'Build a query pipeline with a retriever, prompt builder, and generator.',
      'Run a small evaluation set to measure retrieval quality before adding an agent.',
      'Wrap the pipeline in a REST service and containerise it for deployment.',
    ],
    sampleInput:
      'Given 500 product manuals, answer a question about warranty exclusions and cite the exact manual section used.',
    sampleOutput:
      'The indexing pipeline produced embedded chunks with document metadata; the query pipeline retrieved and reranked candidates, then generated an answer with section-level citations. Because each component exposed its own outputs, the team could confirm a wrong answer came from retrieval rather than generation.',
    benchmarks: [
      { label: 'GitHub stars', value: '26,900+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/deepset-ai/haystack' },
      { label: 'Architecture', value: 'Typed component pipeline graph (Haystack 2.x)', source: 'Haystack documentation' },
    ],
    decisionAid: {
      pickIf:
        'You are shipping a RAG or agent service where retrieval quality, evaluation, and component-level debugging matter more than a five-line demo.',
      skipIf:
        'You want the smallest possible agent loop for a weekend prototype — Smolagents or Pydantic AI will feel lighter.',
    },
  },

  {
    slug: 'eliza',
    name: 'ElizaOS',
    tagline: "An agentic operating system for persistent, multi-platform autonomous personas with pluggable memory and actions.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://elizaresearch.ai/',
    github: 'https://github.com/elizaOS/eliza',
    stars: 19775,
    updated: '2026-11',
    tags: ['autonomous-agents', 'persona', 'memory', 'plugins', 'multi-platform'],
    pricing: 'Free and open-source (MIT). You host the runtime and pay for model APIs and any platform accounts you connect; the surrounding ecosystem includes optional commercial services.',
    verdict: "The most complete open-source answer to 'an agent that keeps running and has a character', though the ecosystem around it moves fast enough that you should pin versions and read the code.",
    description:
      "ElizaOS is a TypeScript framework for autonomous agents that persist across sessions and act on multiple platforms. An agent is described by a character file (identity, tone, knowledge), extended with plugins for platform clients and actions, and given memory so it can carry context between interactions. The runtime handles message ingestion, action selection, and state, while connectors let the same agent appear in chat apps, social platforms, or a local CLI. It became well known in the crypto-adjacent autonomous-agent scene, but the underlying architecture — character, plugins, memory, actions, providers — is general-purpose and useful for anyone building long-lived social or assistant agents.",
    useCases: [
      'Run a persistent community assistant across Discord, Telegram, and the web',
      'Prototype autonomous personas with distinct knowledge and behaviour',
      'Experiment with long-term memory and action selection in a live setting',
      'Build a plugin that gives an existing agent a new platform or capability',
    ],
    pros: [
      'Character-file abstraction makes persona and behaviour easy to version',
      'Genuinely multi-platform through plugins and clients',
      'Built-in memory and action/provider model for long-running agents',
      'MIT licensed with a large, active contributor ecosystem',
    ],
    cons: [
      'Fast-moving project; APIs and package structure have changed repeatedly',
      'Autonomous always-on agents need careful guardrails and budget limits',
      'Ecosystem noise around tokens can obscure the engineering substance',
    ],
    models: ['GPT', 'Claude', 'Llama / local models', 'OpenAI-compatible endpoints'],
    alternatives: ['autogen', 'crewai', 'camel', 'chatdev', 'openmanus'],
    quickStart: [
      'Clone the repo, install dependencies with the documented package manager, and copy the example env file.',
      'Add a model provider key and start the runtime in local CLI mode first.',
      'Create a minimal character file with a name, tone, and one short bio.',
      'Add a single plugin and verify the agent can call one action safely.',
      'Only then connect a live platform client and set explicit spend and rate limits.',
    ],
    sampleInput:
      'Create a community assistant that answers setup questions from a pinned FAQ, keeps a friendly tone, and refuses to discuss account balances.',
    sampleOutput:
      'The character file defined tone and boundaries, a knowledge plugin loaded the FAQ, and the runtime routed incoming messages through memory and action selection. Setup questions were answered from the FAQ while balance requests were declined, with both interactions stored as memory for consistent follow-ups.',
    benchmarks: [
      { label: 'GitHub stars', value: '19,700+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/elizaOS/eliza LICENSE' },
      { label: 'Core abstractions', value: 'Character, plugin, action, provider, memory', source: 'ElizaOS documentation' },
    ],
    decisionAid: {
      pickIf:
        'You need a long-lived, multi-platform agent with a defined persona and persistent memory, and you are comfortable with a fast-moving TypeScript codebase.',
      skipIf:
        'You want a deterministic, single-run task pipeline — CrewAI, AutoGen, or Haystack are easier to reason about and test.',
    },
  },

  // ---------------- Creative ----------------
  {
    slug: 'livekit-agents',
    name: 'LiveKit Agents',
    tagline: "A realtime voice-agent framework built on WebRTC infrastructure, so latency and interruptions are handled as first-class problems.",
    category: 'creative',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 4,
    website: 'https://docs.livekit.io/agents',
    github: 'https://github.com/livekit/agents',
    stars: 15109,
    updated: '2026-11',
    tags: ['voice-ai', 'realtime', 'webrtc', 'telephony', 'multimodal'],
    pricing: 'Free and open-source (Apache-2.0). Self-host the agent and optionally the media server; LiveKit Cloud and third-party STT/TTS/LLM providers are paid services.',
    verdict: "If the experience is a live conversation rather than a text chat with TTS bolted on, start here. The hard part of voice agents is transport and turn-taking, and that is exactly what this solves.",
    description:
      "LiveKit Agents is an open-source framework for building realtime voice and multimodal agents. It sits on top of LiveKit's WebRTC media stack and models a conversation as a pipeline of speech-to-text, LLM, and text-to-speech stages, with explicit handling for turn detection, interruptions, and latency budgets. Agents join rooms as participants, can be exposed through web, mobile, or telephony (SIP), and can hand off between sub-agents or escalate to a human. Because the media layer is real infrastructure rather than a browser hack, it supports production constraints such as noise suppression, echo cancellation, and horizontal scaling of agent workers.",
    useCases: [
      'Build a customer-support voice bot that can be interrupted naturally',
      'Add a realtime conversational agent to a web or mobile app',
      'Route inbound phone calls to an AI agent with human handoff',
      'Prototype multimodal agents that see video and speak back',
    ],
    pros: [
      'Realtime transport and turn-taking are solved at the framework level',
      'Works across web, mobile, and telephony from one agent model',
      'Provider-agnostic STT/TTS/LLM choices with swappable plugins',
      'Apache-2.0 and self-hostable, with a clear path to production scaling',
    ],
    cons: [
      'More moving parts than a text agent: media server, keys, and provider accounts',
      'Debugging latency and audio issues requires new operational skills',
      'Per-minute costs from speech providers add up quickly at scale',
    ],
    models: ['GPT-4o / Realtime', 'Claude', 'Gemini', 'Deepgram STT', 'ElevenLabs TTS', 'Cartesia', 'Local models'],
    alternatives: ['vapi', 'retell', 'pipecat', 'elevenlabs', 'airi'],
    quickStart: [
      'Install the Python agents package and its plugins, then create a LiveKit project or run a local server.',
      'Set credentials for your media server plus one STT, one LLM, and one TTS provider.',
      'Run the sample voice agent and join the test room from the browser playground.',
      'Speak and interrupt mid-sentence to check turn detection behaviour.',
      'Customise the system prompt and add one tool call, then deploy the worker separately from your app.',
    ],
    sampleInput:
      'Build a booking assistant that answers questions about opening hours and can create a reservation, while letting the caller interrupt at any point.',
    sampleOutput:
      'The agent joined the room, streamed audio through STT, and responded with low-latency synthesised speech. When the caller interrupted with a different question, the current TTS playback stopped, context was retained, and the booking tool was only invoked after the required details were confirmed verbally.',
    benchmarks: [
      { label: 'GitHub stars', value: '15,100+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/livekit/agents' },
      { label: 'Transport', value: 'WebRTC rooms, SIP/telephony support', source: 'LiveKit Agents documentation' },
    ],
    decisionAid: {
      pickIf:
        'You are shipping a realtime voice or multimodal experience where interruption handling, telephony, or production media infrastructure matters.',
      skipIf:
        'You only need text-to-speech playback of written answers, or a no-code hosted voice bot — Vapi or Retell will be faster.',
    },
  },

  {
    slug: 'pipecat',
    name: 'Pipecat',
    tagline: "A composable pipeline framework for voice and multimodal agents where every stage is a swappable processor.",
    category: 'creative',
    license: 'open-source',
    licenseName: 'BSD-2-Clause',
    selfHost: true,
    difficulty: 3,
    website: 'https://pipecat.ai',
    github: 'https://github.com/pipecat-ai/pipecat',
    stars: 17089,
    updated: '2026-11',
    tags: ['voice-ai', 'pipeline', 'realtime', 'multimodal', 'python'],
    pricing: 'Free and open-source (BSD-2-Clause), maintained by Daily and the community. You pay for the STT/TTS/LLM services and any transport or hosting you choose.',
    verdict: "The friendliest way to understand a voice agent: a pipeline of small processors you can inspect, replace, and reorder. Less batteries-included than LiveKit, more transparent.",
    description:
      "Pipecat is an open-source Python framework for realtime voice and multimodal agents. Its core idea is a frame-based pipeline: audio, transcripts, LLM tokens, and control events flow through a chain of processors, each doing one job — VAD, transcription, context aggregation, LLM inference, TTS, transport, logging. Because every stage is explicit, you can insert a guardrail, a translation step, or a custom analytics processor without rewriting the whole agent. Transports cover WebRTC, WebSockets, telephony, and local audio, and the integration catalog includes most mainstream speech and model providers. It is maintained by Daily with an active community and is frequently used for research prototypes as well as production assistants.",
    useCases: [
      'Build a voice assistant with a fully custom turn-taking or safety stage',
      'Insert translation, redaction, or logging into a live audio pipeline',
      'Prototype multimodal agents that combine camera input and speech',
      'Compare STT/TTS vendors by swapping one processor at a time',
    ],
    pros: [
      'Pipeline model makes every stage inspectable and replaceable',
      'Transport-agnostic: WebRTC, WebSocket, telephony, local audio',
      'Very broad provider integration catalog',
      'BSD-2-Clause, permissive and easy to embed in other products',
    ],
    cons: [
      'You assemble more of the system yourself, including deployment patterns',
      'Frame/concurrency model takes some getting used to',
      'Production scaling and telephony require additional infrastructure work',
    ],
    models: ['GPT', 'Claude', 'Gemini', 'Deepgram', 'ElevenLabs', 'Cartesia', 'Local models'],
    alternatives: ['vapi', 'retell', 'livekit-agents', 'elevenlabs', 'airi'],
    quickStart: [
      'Install `pipecat-ai` with the extras for your chosen transport and speech providers.',
      'Add API keys for STT, LLM, and TTS to your environment file.',
      'Run the included example bot and connect through the browser playground.',
      'Add one custom processor, for example a filter that redacts numbers from transcripts.',
      'Swap one provider and compare latency and transcript quality on the same scripted call.',
    ],
    sampleInput:
      'Create a voice intake assistant that asks three questions, redacts any phone number before it reaches the LLM, and logs each pipeline stage timing.',
    sampleOutput:
      'The pipeline streamed audio through VAD and STT, passed the transcript through the custom redaction processor, and then into the LLM and TTS stages. Timing frames from each processor produced a per-stage latency breakdown, and the LLM context contained a masked phone number rather than the original digits.',
    benchmarks: [
      { label: 'GitHub stars', value: '17,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'BSD-2-Clause', source: 'github.com/pipecat-ai/pipecat' },
      { label: 'Architecture', value: 'Frame-based processor pipeline', source: 'Pipecat documentation' },
    ],
    decisionAid: {
      pickIf:
        'You want fine-grained control over every stage of a voice or multimodal agent, or you are researching pipeline behaviour and vendor trade-offs.',
      skipIf:
        'You want a managed, batteries-included voice platform with telephony and scaling handled for you — LiveKit Agents, Vapi, or Retell fit better.',
    },
  },
];
