// ============================================================
//  New agents batch 6 — added 2026-11-08
//  Source: hand-picked from GitHub (high-star, actively maintained
//  open-source AI agent projects). Live stars / license / push date
//  fetched via GitHub API on 2026-11-08.
//
//  This batch is the first to carry an `image` field: each picture is
//  an official product screenshot taken from the project's own README
//  or repository assets, downloaded and re-encoded as a local JPEG.
//  `image.sourceUrl` links back to the upstream repository so the
//  attribution is visible on the page.
//
//  Naming notes verified against the GitHub API:
//   - ItzCrazyKns/Perplexica now resolves to ItzCrazyKns/Vane (renamed).
//   - frdel/agent-zero now resolves to agent0ai/agent-zero (transferred).
// ============================================================
import type { Agent } from './agents';

export const extraAgents2026f: Agent[] = [
  // ---------------- Research ----------------
  {
    slug: 'perplexica',
    name: 'Vane (formerly Perplexica)',
    tagline: 'A privacy-first AI answer engine you run on your own hardware, with cited sources and local model support.',
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://github.com/ItzCrazyKns/Vane',
    github: 'https://github.com/ItzCrazyKns/Vane',
    stars: 38068,
    updated: '2026-09',
    tags: ['ai-search', 'self-hosted', 'searxng', 'citations', 'local-llm'],
    pricing: 'Free and open-source under MIT. Self-host with Docker or run it locally; you bring either an Ollama model (no per-query cost) or your own API keys for OpenAI, Anthropic, Gemini, Groq and other providers.',
    verdict: 'The interesting bet here is that search infrastructure should be owned, not rented: Vane puts the indexer, the model and the query log on your machine. The trade-off is that answer quality tracks whatever model and SearxNG instance you are willing to maintain.',
    description:
      'Vane is the 2026 rename of Perplexica, the open-source answer engine that combines a SearxNG meta-search backend with an LLM and returns answers with inline source citations. It can route queries to local models through Ollama or to hosted providers, and it offers Speed, Balanced and Quality modes that change how deeply it searches before answering. Beyond web results it can search discussions and academic papers, surface widgets for weather, calculations and stock prices, search images and video, and answer questions over files you upload. Everything runs on your own hardware, so queries and documents never have to leave your network.',
    useCases: [
      'Run a private team search engine without sending queries to a commercial AI provider',
      'Answer questions over uploaded documents alongside live web sources',
      'Compare answer quality between a local Ollama model and a frontier hosted model',
      'Search academic papers or forum discussions with cited, inspectable results',
    ],
    pros: [
      'Fully self-hostable MIT codebase; SearxNG keeps the search layer private too',
      'Model-agnostic: local Ollama models and most major hosted providers',
      'Inline citations plus file uploads, image/video search and contextual widgets',
      'Three search-depth modes make the cost and latency trade-off explicit',
    ],
    cons: [
      'Renamed from Perplexica to Vane, so older tutorials, images and integration guides now point at stale names',
      'You operate the SearxNG instance yourself, including rate limits and flaky upstream engines',
      'Answer quality depends on the model you configure; small local models lag well behind hosted search products',
    ],
    models: ['Ollama local models', 'OpenAI', 'Anthropic Claude', 'Google Gemini', 'Groq', 'OpenAI-compatible endpoints'],
    alternatives: ['perplexity', 'gpt-researcher', 'ragflow', 'lightrag', 'storm'],
    quickStart: [
      'Clone the repository and start it with the provided Docker Compose file.',
      'Open the settings panel and choose a chat model provider, adding an API key or pointing it at a local Ollama endpoint.',
      'Configure the SearxNG instance the app should use for web searches.',
      'Start with a Balanced Mode query and inspect the cited sources before trusting the summary.',
      'Switch to Quality Mode for deeper research, or Speed Mode when latency matters more.',
    ],
    sampleInput:
      'What changed in the EU AI Act transparency obligations for general-purpose models in 2026? Include primary sources and note the effective dates.',
    sampleOutput:
      'Vane ran several SearxNG queries, kept six results (two official EU publications, a law firm summary, a standards body note and two news pieces), and produced a short synthesis with numbered citations after each claim. The UI showed the source cards beside the answer, plus an academic-papers tab with two working papers. Switching to Quality Mode added a second retrieval round but roughly tripled the response time.',
    benchmarks: [
      { label: 'GitHub stars', value: '38,000+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/ItzCrazyKns/Vane LICENSE' },
      { label: 'Search backend', value: 'Self-hosted SearxNG meta-search', source: 'Project README' },
      { label: 'Search modes', value: 'Speed / Balanced / Quality', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You want a private, self-hosted alternative to Perplexity, are comfortable running Docker and SearxNG, and care about being able to swap in a local model.',
      skipIf:
        'You want a zero-maintenance hosted answer engine with a built-in index, or you need enterprise connectors and permission-aware search — look at Perplexity or Onyx instead.',
    },
    image: {
      src: '/agents/perplexica-vane.jpg',
      alt: 'Vane answer engine showing a sourced answer with tabs for sources, answer and key capabilities, on an orange gradient background',
      width: 1200,
      height: 675,
      credit: 'Official screenshot from the Vane (formerly Perplexica) repository',
      sourceUrl: 'https://github.com/ItzCrazyKns/Vane',
    },
  },

  {
    slug: 'onyx',
    name: 'Onyx',
    tagline: 'An open-source context layer that indexes 50+ workplace apps so any LLM can answer questions with your team data.',
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT (core) + Onyx Enterprise License (ee/)',
    selfHost: true,
    difficulty: 3,
    website: 'https://www.onyx.app',
    github: 'https://github.com/onyx-dot-app/onyx',
    stars: 33282,
    updated: '2026-11',
    tags: ['enterprise-rag', 'connectors', 'deep-research', 'permissions', 'self-hosted'],
    pricing: 'Core is MIT-licensed and self-hostable; the ee/ directories are under the Onyx Enterprise License and require a commercial licence. Hosted and dedicated instances are sold by Onyx. LLM cost is yours via API keys or local models.',
    verdict: 'Onyx is less a chatbot than a permission-aware index with a chat UI attached. Its argument against MCP-style tool calling is a good one: pre-index the context once, then answer from ground truth instead of burning thousands of tokens having an agent poke at 50 connectors.',
    description:
      'Onyx connects to more than 50 workplace systems such as Slack, Notion, Google Drive, Confluence, GitHub and Jira, then indexes documents together with their metadata and access permissions. On top of that index it runs an agentic RAG pipeline that combines hybrid search with a retrieval-tuned agent harness, plus a Deep Research mode that produces multi-step reports. It also supports custom agents, web search, sandboxes and skills, and works with any LLM. Because permissions are ingested with the content, answers respect who is allowed to see what — the part most do-it-yourself RAG stacks get wrong.',
    useCases: [
      'Give a team one search box across Slack, Drive, Confluence, Notion and GitHub',
      'Build internal Q&A that honours each source system document-level permissions',
      'Run multi-step research reports over private company knowledge plus the web',
      'Expose the same indexed context to custom agents without wiring dozens of MCP servers',
    ],
    pros: [
      'Broad connector catalog with permission-aware indexing built in',
      'Agentic RAG and Deep Research on top of a persistent hybrid index',
      'Model-agnostic: works with hosted APIs and self-hosted models',
      'Single-command install and a fully self-hostable deployment path',
    ],
    cons: [
      'Mixed licensing: the enterprise features in ee/ directories are not open source',
      'A real deployment means running Postgres, a vector store, workers and the web app',
      'Connector auth, sync schedules and stale-document handling need ongoing ownership',
    ],
    models: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Azure OpenAI', 'Ollama and self-hosted models', 'Any OpenAI-compatible endpoint'],
    alternatives: ['ragflow', 'dify', 'llama-index', 'lightrag', 'firecrawl'],
    quickStart: [
      'Deploy the stack with the documented one-line installer or Docker Compose.',
      'Connect one source first (Google Drive or Slack is the usual starting point) and complete its OAuth flow.',
      'Choose an LLM provider and add the API key, or point Onyx at a local model server.',
      'Wait for the initial index to finish, then ask a question whose answer exists in exactly one document.',
      'Verify permission behaviour with a second user account before rolling it out to the team.',
    ],
    sampleInput:
      'Summarise why the Q3 checkout migration was rolled back, and link the decision to the incident review and the release notes.',
    sampleOutput:
      'Onyx retrieved a Slack thread from the payments channel, the incident review in Confluence and the v3.8 release notes, then produced a dated summary with a citation for each claim. The Deep Research mode expanded it into a longer report with a timeline and an open-questions section. A user without access to the incident review saw only the two public sources referenced.',
    benchmarks: [
      { label: 'GitHub stars', value: '33,200+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT core / enterprise licence for ee/', source: 'github.com/onyx-dot-app/onyx LICENSE' },
      { label: 'Connectors', value: '50+ workplace applications', source: 'Project README' },
      { label: 'Retrieval', value: 'Hybrid index + agentic RAG harness', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You need company-wide search with real permission inheritance, want to choose your own LLM, and can own a self-hosted stack.',
      skipIf:
        'You only need a single-document Q&A demo, you require every feature to be OSI open source, or you would rather buy a fully hosted answer engine.',
    },
    image: {
      src: '/agents/onyx.jpg',
      alt: 'Onyx chat interface with a cited answer and bullet summary in the centre, a connector sidebar on the left and a follow-up input at the bottom',
      width: 1200,
      height: 605,
      credit: 'Official screenshot from the Onyx repository assets',
      sourceUrl: 'https://github.com/onyx-dot-app/onyx',
    },
  },

  // ---------------- Automation ----------------
  {
    slug: 'windmill',
    name: 'Windmill',
    tagline: 'A code-first workflow, app and AI agent platform where scripts in 20+ languages turn into UIs, APIs and cron jobs.',
    category: 'automation',
    license: 'open-source',
    licenseName: 'AGPL-3.0 (core) / Apache-2.0 / Enterprise',
    selfHost: true,
    difficulty: 3,
    website: 'https://www.windmill.dev',
    github: 'https://github.com/windmill-labs/windmill',
    stars: 18467,
    updated: '2026-11',
    tags: ['workflow-engine', 'code-first', 'git-sync', 'orchestration', 'self-hosted'],
    pricing: 'The core is AGPLv3 and fully self-hostable; parts of the repository are Apache-2.0 and some enterprise features use a commercial licence. Windmill Labs sells dedicated instances, support and commercial licences. Cloud pricing is separate.',
    verdict: 'Windmill is what you get when engineers refuse to choose between a workflow builder and a codebase: every node is a real script you can review, version and test. That makes it a better fit for production automation than a pure drag-and-drop canvas, at the cost of a steeper first hour.',
    description:
      'Windmill is a self-hostable orchestration platform where scripts written in Python, TypeScript, Go, Bash, SQL, Rust, PowerShell and other languages are automatically exposed as shareable UIs, HTTP endpoints and scheduled jobs. Those scripts compose into flows, data pipelines, AI agents and full-code React or Svelte apps. Everything can be synced with Git, while review workflows, environment promotion and isolated workers keep control with the engineering team. The project publishes benchmarks against Airflow, Prefect and Temporal, and positions itself as an open alternative to n8n, Retool and Lovable.',
    useCases: [
      'Turn an existing Python or SQL script into a scheduled job with an audit trail',
      'Build internal tools where business users get a UI but engineers own the code',
      'Compose multi-step AI agent flows from individually testable scripts',
      'Sync automation definitions to Git and promote them through dev and production',
    ],
    pros: [
      'Scripts remain real, versionable code rather than opaque canvas nodes',
      'Broad language support plus auto-generated UIs, APIs and cron triggers',
      'Git sync, review flows, environment promotion and isolated workers',
      'Published performance benchmarks against established orchestrators',
    ],
    cons: [
      'Mixed licensing (AGPLv3 core, Apache-2.0 parts, proprietary enterprise features) needs legal review for some uses',
      'More setup and concepts than a hosted no-code builder',
      'The breadth — scripts, flows, apps, data tables, agents — makes the first project feel large',
    ],
    models: ['Bring your own LLM API keys', 'OpenAI', 'Anthropic Claude', 'Local and self-hosted models', 'Any HTTP-callable model endpoint'],
    alternatives: ['n8n', 'activepieces', 'kestra', 'make', 'flowise'],
    quickStart: [
      'Start a self-hosted instance with the provided Docker Compose file, or use the cloud trial.',
      'Create a single Python or TypeScript script and define its typed parameters.',
      'Run it once; Windmill generates a UI and an API endpoint from those parameters.',
      'Add a schedule or chain two scripts into a flow, then connect a Git repository for versioning.',
      'Move the flow through environments and inspect the run logs before exposing it to the team.',
    ],
    sampleInput:
      'Script parameters: customer_id (string), since (date). Body: query the orders table, group weekly totals, and return a CSV plus a markdown summary.',
    sampleOutput:
      'Windmill generated a parameter form for customer_id and since, ran the script in an isolated worker, and exposed both an HTTP endpoint and a downloadable CSV. A second script consuming that output was connected into a flow, with the run duration, logs and inputs visible per step. Deploying the same definition to the production workspace required a review approval.',
    benchmarks: [
      { label: 'GitHub stars', value: '18,400+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'AGPL-3.0 core / Apache-2.0 / Enterprise', source: 'github.com/windmill-labs/windmill LICENSE' },
      { label: 'Languages', value: '20+ supported runtimes', source: 'Project README' },
      { label: 'Positioning', value: 'Benchmarked vs Airflow, Prefect, Temporal', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You want production automation that lives in Git, with typed scripts you can test, and you need a self-hostable alternative to n8n or Retool.',
      skipIf:
        'Non-technical teammates need to build everything without code, or AGPL deployment terms are a blocker — consider a hosted builder or an Apache-licensed engine.',
    },
    image: {
      src: '/agents/windmill.jpg',
      alt: 'Windmill script editor showing TypeScript code, a run and deploy toolbar at the top and a result output panel on the right',
      width: 1200,
      height: 748,
      credit: 'Official screenshot from the Windmill repository image assets',
      sourceUrl: 'https://github.com/windmill-labs/windmill',
    },
  },

  // ---------------- Framework ----------------
  {
    slug: 'agent-zero',
    name: 'Agent Zero',
    tagline: 'An open-source autonomous agent that gets its own sandboxed Linux computer with a terminal, browser and desktop apps.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://agent-zero.ai',
    github: 'https://github.com/agent0ai/agent-zero',
    stars: 19794,
    updated: '2026-11',
    tags: ['autonomous-agent', 'computer-use', 'sandbox', 'docker', 'terminal'],
    pricing: 'Free and open-source under MIT. Runs in a Docker sandbox on your own machine or server; you supply an AI provider API key or a local model server. A desktop launcher is available for Windows, macOS and Linux.',
    verdict: 'The whole design hinges on one decision: give the agent a real computer instead of a fixed tool list. That makes it unusually capable on messy, multi-application work, but it also means the blast radius is a whole machine — the sandbox and human-in-the-loop controls are not optional extras.',
    description:
      'Agent Zero is an open-source agent framework that runs each agent inside its own Linux workspace. It can research, write and execute code, create documents and operate a browser and desktop applications from a terminal, all inside a Docker sandbox. A human can step into the session at any point, and the workspace can be connected to local files when needed. The project ships a desktop launcher that handles Docker setup and opens the web UI, plus a server installation path for headless environments. It is model-agnostic and supports hosted providers as well as local model servers.',
    useCases: [
      'Delegate a multi-step task that needs a browser, a shell and a document editor',
      'Prototype computer-use agents without building a sandbox from scratch',
      'Run a private agent against local files with a human approving key steps',
      'Experiment with tool-using agent loops on a self-hosted model',
    ],
    pros: [
      'Full Linux workspace: terminal, browser and desktop apps instead of a narrow tool list',
      'Human-in-the-loop intervention and optional access to local files',
      'MIT licensed, model-agnostic and self-hostable in Docker',
      'Desktop launcher makes the first run approachable on Windows and macOS',
    ],
    cons: [
      'A whole-computer sandbox needs careful isolation and resource limits',
      'Long autonomous runs can be slow and expensive with frontier models',
      'Behaviour is less predictable than a narrowly scoped, deterministic workflow',
    ],
    models: ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'Groq', 'Ollama and local model servers', 'OpenAI-compatible endpoints'],
    alternatives: ['openhands', 'open-interpreter', 'autogpt', 'manus', 'browser-use'],
    quickStart: [
      'Install Docker, then download the A0 Launcher for your operating system.',
      'Let the launcher create the Agent Zero instance and open the web UI.',
      'Add an API key for a supported provider, or point it at a local model server.',
      'Start with a bounded task and watch the terminal and browser activity in the UI.',
      'Review the sandbox settings before connecting local files or granting broader access.',
    ],
    sampleInput:
      'Research the three most-cited open-source agent frameworks of 2026, put the comparison in a markdown table, and save it to /workspace/frameworks.md.',
    sampleOutput:
      'Agent Zero opened a browser, collected star counts and release dates from several sources, wrote a Python snippet to normalise the numbers, and saved the markdown table to the workspace. The Web UI showed the shell commands and browser steps as they happened, and the run paused for confirmation before the file write. The final table carried a note where two sources disagreed on a release date.',
    benchmarks: [
      { label: 'GitHub stars', value: '19,700+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/agent0ai/agent-zero LICENSE' },
      { label: 'Runtime', value: 'Dockerised Linux workspace with terminal and browser', source: 'Project README' },
      { label: 'Install paths', value: 'Desktop launcher or server/shell install', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You want a general-purpose computer-use agent you can inspect and self-host, and you are comfortable managing a sandbox.',
      skipIf:
        'You need deterministic, auditable steps, cannot run Docker, or want a hosted agent with no infrastructure to maintain.',
    },
    image: {
      src: '/agents/agent-zero.jpg',
      alt: 'Agent Zero running a Linux desktop session with Blender open on the right, an agent reasoning log and chat input on the left',
      width: 1200,
      height: 675,
      credit: 'Official screenshot from the Agent Zero documentation assets',
      sourceUrl: 'https://github.com/agent0ai/agent-zero',
    },
  },

  // ---------------- Browsing ----------------
  {
    slug: 'steel-browser',
    name: 'Steel Browser',
    tagline: 'An open-source browser sandbox and API that gives AI agents a real Chrome session without the infrastructure work.',
    category: 'browsing',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://steel.dev',
    github: 'https://github.com/steel-dev/steel-browser',
    stars: 7938,
    updated: '2026-11',
    tags: ['browser-api', 'cdp', 'session-management', 'stealth', 'automation'],
    pricing: 'Free and open-source under Apache-2.0, self-hosted with Docker. The commercial Steel cloud offers managed sessions and has its own pricing; the self-hosted API has no licence fee beyond your infrastructure.',
    verdict: 'Steel is plumbing rather than an agent, and that is exactly its value: it owns sessions, fingerprints, proxies and cleanup so the agent code can stay small. If you have ever lost a day to stale cookies or zombie Chrome processes, this is the layer you wanted.',
    description:
      'Steel Browser is a batteries-included browser API for AI agents and applications. It manages Chrome processes, pages and sessions over Puppeteer and CDP, so clients can connect with Puppeteer, Playwright or Selenium instead of running their own browser fleet. Sessions keep cookies and local storage across requests, and the service includes proxy chain management, custom Chrome extension loading, stealth plugins and fingerprint controls, request logging and a UI for inspecting live sessions. Helper endpoints convert pages into markdown, readability text, screenshots or PDFs, and automatic cleanup handles the browser lifecycle.',
    useCases: [
      'Give a browser-use agent a persistent, inspectable Chrome session',
      'Run scraping or QA automation without maintaining a browser fleet',
      'Keep cookies and local storage across multi-step agent tasks',
      'Convert pages to clean markdown or PDF before handing them to an LLM',
    ],
    pros: [
      'Session state, proxy rotation, extensions and stealth handled in one service',
      'Works with existing Puppeteer, Playwright and Selenium clients over CDP',
      'Built-in session viewer and request logs make agent failures debuggable',
      'Apache-2.0 and self-hostable, with page-to-markdown/screenshot/PDF helpers',
    ],
    cons: [
      'Infrastructure, not a ready-made agent — you still write the agent logic',
      'Self-hosting Chrome at scale needs real CPU, memory and proxy capacity',
      'Stealth and anti-detection features carry compliance responsibilities on third-party sites',
    ],
    models: ['Model-agnostic infrastructure', 'Pairs with any LLM-driven browser agent', 'OpenAI', 'Anthropic Claude', 'Local models'],
    alternatives: ['browser-use', 'stagehand', 'playwright-mcp', 'skyvern', 'cua'],
    quickStart: [
      'Start the service with the documented Docker Compose setup.',
      'Create a session through the REST API and connect to it with Playwright or Puppeteer over CDP.',
      'Navigate to a page and use the markdown or screenshot helper to inspect what the agent will see.',
      'Open the session viewer UI to check the live page, cookies and request log.',
      'Let the service handle cleanup, then add proxy or extension settings only if the task needs them.',
    ],
    sampleInput:
      'Create a session, go to a documentation site, follow the getting started link, and return the main article as markdown with the final URL.',
    sampleOutput:
      'Steel returned a session id and a CDP endpoint; the client navigated and clicked through, then called the content endpoint to get clean markdown with the navigation chrome stripped. The session viewer showed the two page loads and the set cookies, and the browser process was reclaimed automatically when the session expired.',
    benchmarks: [
      { label: 'GitHub stars', value: '7,900+', source: 'GitHub (Nov 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/steel-dev/steel-browser LICENSE' },
      { label: 'Control protocol', value: 'Puppeteer / CDP (Playwright, Selenium compatible)', source: 'Project README' },
      { label: 'Session features', value: 'Cookies, local storage, proxy chain, extensions, session UI', source: 'Project README' },
    ],
    decisionAid: {
      pickIf:
        'You are building a browser agent and would rather own the session/proxy/cleanup layer than reimplement it, with an Apache-2.0 self-hosted option.',
      skipIf:
        'You want a complete out-of-the-box agent, only need a one-off headless scrape, or prefer a fully managed browser service with no ops work.',
    },
    image: {
      src: '/agents/steel-browser.jpg',
      alt: 'Steel Browser session viewer showing a live Chrome window on a blue grid background with a session details panel and request log',
      width: 1200,
      height: 821,
      credit: 'Official demo screenshot from the Steel Browser repository',
      sourceUrl: 'https://github.com/steel-dev/steel-browser',
    },
  },
];
