// ============================================================
//  New agents batch 2 — added 2026-10-28
//  Source: hand-picked from GitHub (high-star, actively maintained
//  open-source AI agent projects). Live stats fetched via GitHub API
//  on 2026-10-28. Spread into `agents` in agents.ts.
// ============================================================
import type { Agent } from './agents';

export const extraAgents2026b: Agent[] = [
  // ---------------- Framework ----------------
  {
    slug: 'google-adk',
    name: 'Google ADK',
    tagline: "Google's code-first Python toolkit for building, evaluating, and deploying agentic apps on Vertex AI.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://google.github.io/adk-docs',
    github: 'https://github.com/google/adk-python',
    stars: 22026,
    updated: '2026-10',
    tags: ['google', 'vertex-ai', 'code-first', 'multi-agent'],
    pricing: 'Open-source (Apache-2.0). Runs anywhere; first-class deployment to Google Cloud Vertex AI (billed by Google).',
    verdict: 'The most "Google-native" way to ship agents — clean primitives, great Gemini integration, and a deployment path that does not end at your laptop.',
    description:
      "Google ADK (Agent Development Kit) is a code-first Python toolkit for building, evaluating, and deploying agentic applications. It gives you composable agents and tools, built-in evaluation harnesses, and a direct path to run on Google Cloud's Vertex AI. If you are already in the Google ecosystem or want Gemini as a first-class citizen, ADK removes a lot of glue code that general-purpose frameworks leave to you.",
    useCases: [
      'Build a tool-using agent wired to Gemini and Google services',
      'Compose multi-agent pipelines with clear hand-offs',
      'Evaluate agent quality with built-in eval tooling before shipping',
      'Deploy an agent to Vertex AI without re-architecting',
    ],
    pros: [
      'Clean, opinionated primitives — less boilerplate than general frameworks',
      'Best-in-class Gemini and Vertex AI integration',
      'Evaluation and deployment are part of the toolkit, not an afterthought',
      'Apache-2.0 and runnable fully offline',
    ],
    cons: [
      'Deepest value shows up inside Google Cloud — weaker fit if you are all-in on Azure/OpenAI',
      'Younger community than LangChain; fewer third-party recipes',
      'Mostly Python-first (the name says it)',
    ],
    models: ['Gemini 2.5', 'Vertex AI hosted models', 'Any OpenAI-compatible endpoint'],
    alternatives: ['langchain', 'agno', 'llama-index', 'openai-agents-sdk', 'crewai', 'mastra'],
    quickStart: [
      'Install: `pip install google-adk`.',
      'Create an agent: define a class with `@agent` and register tools as plain Python functions.',
      'Run locally with the ADK dev server to chat with your agent in the browser.',
      'Write an eval set and run `adk eval` to measure quality before deploying.',
      'Ship to Vertex AI with the bundled deployment command.',
    ],
    sampleInput:
      'Build an agent that takes a natural-language analytics question, queries BigQuery, and returns a chart plus a plain-English explanation.',
    sampleOutput:
      'ADK agent parsed the question, called a BigQuery tool with a generated SQL query, rendered the result as a chart, and wrote a one-paragraph summary. The eval harness scored the SQL correctness at 0.94 across the test set.',
    benchmarks: [
      { label: 'GitHub stars', value: '22,000+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/google/adk-python' },
      { label: 'Primary runtime', value: 'Python → Vertex AI', source: 'Google ADK docs' },
    ],
    decisionAid: {
      pickIf:
        'You build on Google Cloud / Gemini and want evaluation and deployment built in, not bolted on.',
      skipIf:
        'You are committed to another cloud or want the largest third-party plugin ecosystem — LangChain is a safer default there.',
    },
    videos: [
      { src: "https://www.youtube.com/embed/TEjqk0eeNy8", kind: "youtube", title: "Google ADK — official demo", caption: "Official demo video published by the project.", sourceUrl: "https://youtu.be/TEjqk0eeNy8" },
    ],
  },

  {
    slug: 'camel',
    name: 'CAMEL',
    tagline: 'A research-grade multi-agent framework where role-playing agents collaborate to solve tasks.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://www.camel-ai.org',
    github: 'https://github.com/camel-ai/camel',
    stars: 17986,
    updated: '2026-10',
    tags: ['multi-agent', 'role-play', 'research', 'society'],
    pricing: 'Free and open-source (Apache-2.0). Bring your own LLM API keys.',
    verdict: 'The cleanest "agents talking to each other" framework — the one to study if you care about multi-agent collaboration theory, not just shipping a bot.',
    description:
      "CAMEL (Communicative Agents for Model Exploration of Large Language Model Society) is one of the original multi-agent frameworks. Its core idea is role-playing: you assign agents roles (e.g. an AI user and an AI assistant) and let them drive a task forward through structured dialogue. It ships toolkits, data generation utilities, and a society of specialized agents for research and automation.",
    useCases: [
      'Prototype a multi-agent society that debates and refines a plan',
      'Auto-generate synthetic data and task trajectories',
      'Explore agent collaboration patterns for a research paper',
      'Coordinate specialized agents (researcher, coder, critic) on one goal',
    ],
    pros: [
      'Pioneering, well-documented multi-agent role-play design',
      'Rich toolkit ecosystem (search, code, UI, etc.)',
      'Strong for research and synthetic-data generation',
      'Apache-2.0 and easy to self-host',
    ],
    cons: [
      'More research-flavored than production-flavored',
      'Role-play loops can wander without tight constraints',
      'Smaller commercial footprint than LangChain / CrewAI',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Ollama', 'Any OpenAI-compatible endpoint'],
    alternatives: ['langchain', 'autogen', 'metagpt', 'crewai', 'agno'],
    quickStart: [
      'Install: `pip install camel-ai`.',
      'Define a `RolePlaying` session with an assistant and a user agent plus a task prompt.',
      'Run the loop and stream the two agents\' conversation.',
      'Attach toolkits (e.g. SearchToolkit, CodeToolkit) so agents can act, not just talk.',
    ],
    sampleInput:
      'Simulate a startup co-founder (AI user) and an engineer (AI assistant) designing a CLI todo app, iterating until they agree on a spec.',
    sampleOutput:
      'The user agent proposed features; the assistant agent pushed back on scope and proposed a minimal spec; after 12 turns they converged on a 5-command CLI design with a data model. Transcript saved for review.',
    benchmarks: [
      { label: 'GitHub stars', value: '18,000+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/camel-ai/camel' },
      { label: 'Focus', value: 'Multi-agent role-play', source: 'CAMEL docs' },
    ],
    decisionAid: {
      pickIf:
        'You want to experiment with or productionize role-playing multi-agent systems and value a research-grade design.',
      skipIf:
        'You need the broadest enterprise/plugin ecosystem or a managed control plane — reach for LangChain or CrewAI.',
    },
  },

  {
    slug: 'chatdev',
    name: 'ChatDev',
    tagline: 'A virtual software company where role-playing agents collaboratively build software.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://github.com/OpenBMB/ChatDev',
    github: 'https://github.com/OpenBMB/ChatDev',
    stars: 34599,
    updated: '2026-10',
    tags: ['multi-agent', 'software-dev', 'role-play', 'automation'],
    pricing: 'Free and open-source (Apache-2.0). Bring your own LLM API keys.',
    verdict: 'The most visceral demo of "agents that build software together" — a whole company in a process, not just a coding bot.',
    description:
      "ChatDev frames software development as a virtual company. A pipeline of role-playing agents — CEO, CTO, programmer, reviewer, tester — passes a product idea through design, coding, and testing phases, producing a runnable project. It is both a research artifact on agent collaboration and a surprisingly practical way to scaffold small apps from a one-line prompt.",
    useCases: [
      'Generate a small app (game, util, web service) from a text spec',
      'Study multi-phase agent orchestration and hand-offs',
      'Prototype a product idea in minutes, then refine by hand',
      'Teach agent collaboration patterns with a concrete pipeline',
    ],
    pros: [
      'End-to-end: spec in, runnable project out',
      'Clear phase-based orchestration (design → code → test)',
      'Great for demos and education on multi-agent systems',
      'Apache-2.0 and self-hostable',
    ],
    cons: [
      'Output quality is bounded by the underlying model and prompt',
      'Less suited to large, existing codebases than OpenHands',
      'Phase overhead makes it slower than a direct coding agent',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Any OpenAI-compatible endpoint'],
    alternatives: ['metagpt', 'autogen', 'langchain', 'crewai', 'openhands'],
    quickStart: [
      'Install: `pip install chatdev` and set your model API key.',
      'Run: `python run.py --task "design a 2048 game in Python" --config config/Default.json`.',
      'Watch the phase pipeline (CEO → CTO → programmer → tester) execute.',
      'Open the generated project under `WareHouse/` and run it.',
    ],
    sampleInput:
      'Build a terminal-based flashcard app that quizzes the user and tracks a score, persisting decks to a local file.',
    sampleOutput:
      'ChatDev produced a multi-file Python project: a CLI entry point, a deck loader/saver, and a quiz loop. The tester agent ran it and confirmed no import errors. Delivered under WareHouse/FlashcardApp.',
    benchmarks: [
      { label: 'GitHub stars', value: '34,600+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/OpenBMB/ChatDev' },
      { label: 'Style', value: 'Phase-based multi-agent', source: 'ChatDev 2.0' },
    ],
    decisionAid: {
      pickIf:
        'You want a self-contained, demoable pipeline that turns a sentence into a small working app.',
      skipIf:
        'You need to modify a large existing codebase — OpenHands or a coding agent is a better fit.',
    },
  },

  {
    slug: 'semantic-kernel',
    name: 'Microsoft Semantic Kernel',
    tagline: "Microsoft's SDK for weaving LLM skills, plugins, and planners into existing apps.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://learn.microsoft.com/semantic-kernel',
    github: 'https://github.com/microsoft/semantic-kernel',
    stars: 28709,
    updated: '2026-10',
    tags: ['microsoft', 'plugins', 'enterprise', 'multi-language'],
    pricing: 'Free and open-source (MIT). Runs anywhere; integrates with Azure OpenAI.',
    verdict: 'The enterprise-default when you already write C#/Java/Python and want LLMs as a first-class, typed capability — not a separate app.',
    description:
      "Semantic Kernel is Microsoft's SDK for adding AI to apps you already have. Instead of building a chat product from scratch, you compose plugins (functions the model can call), planners (which sequence those functions), and memory, then let the kernel orchestrate them. It is multi-language (C#, Python, Java) and leans hard into enterprise patterns: dependency injection, telemetry, and Azure integration.",
    useCases: [
      'Add tool-calling and planning to an existing C#/Python service',
      'Compose enterprise plugins (CRM, calendar, search) the model can orchestrate',
      'Build a copilot inside an existing Microsoft-stack product',
      'Add memory and planners without leaving your language of choice',
    ],
    pros: [
      'First-class C# / Java / Python support — rare among agent SDKs',
      'Enterprise-friendly: DI, logging, Azure OpenAI integration',
      'Stable, versioned API backed by Microsoft',
      'MIT licensed and self-hostable',
    ],
    cons: [
      'More "SDK to extend your app" than "framework to build an agent from zero"',
      'Concepts (plugins, planners, functions) take a moment to internalize',
      'Less flashy community content than LangChain',
    ],
    models: ['Azure OpenAI', 'OpenAI', 'Anthropic', 'Hugging Face', 'Ollama'],
    alternatives: ['langchain', 'agno', 'pydantic-ai', 'mastra', 'openai-agents-sdk'],
    quickStart: [
      'Install: `pip install semantic-kernel` (or the NuGet / Maven package for C# / Java).',
      'Define a plugin as a class with `[KernelFunction]` methods.',
      'Build a `Kernel` with a chat completion service and add the plugin.',
      'Call `kernel.invoke` or let the planner chain functions toward a goal.',
    ],
    sampleInput:
      'In an existing HR app, let the model book time off by calling the calendar plugin and notifying the manager plugin.',
    sampleOutput:
      'Semantic Kernel routed the request through a planner that called `CheckBalance`, `CreateEvent`, and `SendNotification` in order, returning a confirmation. All calls were logged via the app telemetry.',
    benchmarks: [
      { label: 'GitHub stars', value: '28,700+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/microsoft/semantic-kernel' },
      { label: 'Languages', value: 'C#, Python, Java', source: 'Semantic Kernel docs' },
    ],
    decisionAid: {
      pickIf:
        'You are extending an existing enterprise app in C#/Java/Python and want typed, integrable AI skills.',
      skipIf:
        'You are building a greenfield, Python-first agent product and want the largest open ecosystem — LangChain or Agno.',
    },
  },

  // ---------------- Coding ----------------
  {
    slug: 'e2b',
    name: 'E2B',
    tagline: 'A secure cloud sandbox that gives AI agents a real computer to run code in.',
    category: 'coding',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://e2b.dev',
    github: 'https://github.com/e2b-dev/e2b',
    stars: 14582,
    updated: '2026-10',
    tags: ['sandbox', 'code-execution', 'security', 'cloud'],
    pricing: 'Open-source (Apache-2.0). Hosted sandboxes on e2b.dev (usage-billed); self-host the open infra.',
    verdict: 'The "give the agent a safe machine" layer — if your agent writes code, this is how you run it without frying your host.',
    description:
      "E2B provides secure, ephemeral sandboxes (Firecracker microVMs) where AI agents can execute code, install packages, and use a real filesystem and network in isolation. Rather than a coding agent itself, it is the runtime underneath one: OpenHands, Smolagents, and many custom agents run untrusted model-generated code inside E2B so a bad script cannot touch your laptop or production.",
    useCases: [
      'Run model-generated Python/JS safely in isolation',
      'Give a coding agent a full filesystem and shell without host risk',
      'Spin up per-task sandboxes for parallel agent workloads',
      'Self-host a code-execution backend for your own agent product',
    ],
    pros: [
      'Hard isolation (microVM) — generated code cannot escape',
      'Fast startup, short-lived sandboxes ideal for agents',
      'Open-source and self-hostable; also a managed cloud',
      'SDKs for Python and JS; framework-agnostic',
    ],
    cons: [
      'It is a runtime, not an agent — you still need an agent/orchestrator',
      'Self-hosting the infra has operational overhead',
      'Network egress from sandboxes needs policy if data is sensitive',
    ],
    models: ['Model-agnostic — runs any agent that emits code'],
    alternatives: ['openhands', 'claude-code', 'cursor', 'aider', 'replit-agent'],
    quickStart: [
      'Get an API key at e2b.dev and `pip install e2b-code-interpreter`.',
      'Open a sandbox: `with Sandbox() as s:` and run `s.commands.run("pip install pandas")`.',
      'Stream code execution results back to your agent loop.',
      'For self-hosting, deploy the open E2B infrastructure (see the repo).',
    ],
    sampleInput:
      'Agent wants to compute a correlation matrix over a 2GB CSV and plot it — without touching the host.',
    sampleOutput:
      'E2B spun a sandbox, installed pandas, ran the analysis, saved a PNG to the sandbox FS, and returned the figure bytes to the agent. Host machine was untouched; sandbox destroyed on exit.',
    benchmarks: [
      { label: 'GitHub stars', value: '14,600+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/e2b-dev/e2b' },
      { label: 'Isolation', value: 'Firecracker microVM', source: 'E2B docs' },
    ],
    decisionAid: {
      pickIf:
        'You are building or running a coding agent and need safe, isolated code execution as a substrate.',
      skipIf:
        'You want an end-to-end coding agent — pair E2B with OpenHands or Smolagents instead.',
    },
  },

  // ---------------- Research ----------------
  {
    slug: 'lightrag',
    name: 'LightRAG',
    tagline: 'A graph-based RAG framework that is simple, fast, and token-efficient.',
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://lightrag.github.io',
    github: 'https://github.com/HKUDS/LightRAG',
    stars: 40372,
    updated: '2026-10',
    tags: ['rag', 'graph', 'knowledge', 'retrieval'],
    pricing: 'Free and open-source (MIT). Runs locally with your own vector DB and LLM.',
    verdict: 'The RAG framework to beat on simplicity and cost — graph extraction that actually lowers token spend instead of inflating it.',
    description:
      "LightRAG is an open-source retrieval-augmented generation framework from HKUDS that uses a graph structure to index entities and relations, then retrieves with both low-level and high-level queries. Its pitch is simplicity and efficiency: fewer tokens, faster indexing, and drop-in support for many vector databases and LLM providers compared with heavier RAG stacks.",
    useCases: [
      'Build a knowledge assistant over private documents',
      'Query both specific facts and high-level themes in one index',
      'Self-host RAG without standing up a heavy platform',
      'Swap LLM / vector DB freely (provider-agnostic)',
    ],
    pros: [
      'Graph-based retrieval improves multi-hop and global questions',
      'Lower token cost than many full-text + reranker stacks',
      'Provider-agnostic (many LLMs and vector stores)',
      'MIT licensed and easy to self-host',
    ],
    cons: [
      'Graph extraction adds an indexing step you must tune',
      'Less of a full "agent platform" — it is RAG, not orchestration',
      'Newer than LlamaIndex; smaller third-party content',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Ollama', 'Any OpenAI-compatible endpoint'],
    alternatives: ['llama-index', 'gpt-researcher', 'vanna'],
    quickStart: [
      'Install: `pip install lightrag-hku`.',
      'Index docs: `LightRAG.from_docs("./docs", llm=..., embedding=...)`.',
      'Query: `rag.query("Summarize the main risks discussed across all reports", mode="global")`.',
      'Point it at your own vector DB and LLM via the provider configs.',
    ],
    sampleInput:
      'Index 200 internal PDF reports and ask: "What risks are mentioned most often, and in which reports?"',
    sampleOutput:
      'LightRAG used global-mode retrieval over its entity graph, returned the top recurring risk themes with citations to specific reports, and answered in one call without re-reading every document.',
    benchmarks: [
      { label: 'GitHub stars', value: '40,400+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/HKUDS/LightRAG' },
      { label: 'Retrieval', value: 'Graph + local/global modes', source: 'LightRAG paper' },
    ],
    decisionAid: {
      pickIf:
        'You want a lean, self-hosted RAG layer that is cheaper to run and better at thematic queries than naive chunking.',
      skipIf:
        'You need a full agent orchestration framework — LlamaIndex or a framework is the better base.',
    },
    videos: [
      { src: "https://www.youtube.com/embed/g21royNJ4fw", kind: "youtube", title: "LightRAG — official demo 1", caption: "Demo video published by the LightRAG project.", sourceUrl: "https://www.youtube.com/watch?v=g21royNJ4fw" },
      { src: "https://www.youtube.com/embed/oageL-1I0GE", kind: "youtube", title: "LightRAG — official demo 2", caption: "Demo video published by the LightRAG project.", sourceUrl: "https://youtu.be/oageL-1I0GE" },
    ],
  },

  {
    slug: 'storm',
    name: 'STORM',
    tagline: 'An LLM system that researches a topic and writes a Wikipedia-style article with citations.',
    category: 'research',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://storm.genie.stanford.edu',
    github: 'https://github.com/stanford-oval/storm',
    stars: 31721,
    updated: '2025-09',
    tags: ['research', 'writing', 'citations', 'survey'],
    pricing: 'Free and open-source (MIT). Bring your own LLM + search API keys.',
    verdict: 'The reference implementation for "agentic literature review" — it shows its work with real citations, not hallucinations.',
    description:
      "STORM (Synthesis of Topic Outlines through Retrieval and Multi-perspective question asking) is a Stanford system that automates long-form research writing. It first surveys the web from multiple perspectives to build an outline, then writes a Wikipedia-style article grounded in retrieved sources with citations. It is a strong blueprint for any product that must produce cited, well-structured reports rather than a chat answer.",
    useCases: [
      'Generate a cited overview article on any topic',
      'Bootstrap a literature review with multiple viewpoints',
      'Power a "deep research" feature with real references',
      'Teach retrieval-then-write agent pipelines',
    ],
    pros: [
      'Multi-perspective outline generation improves coverage',
      'Grounded in retrieved sources with citations (less hallucination)',
      'MIT licensed and reproducible research artifact',
      'Clear, modular pipeline you can adapt',
    ],
    cons: [
      'Needs web/search API access and several LLM calls per article',
      'Output is a structured report, not an interactive agent',
      'Less actively updated than some production tools',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Any OpenAI-compatible endpoint'],
    alternatives: ['gpt-researcher', 'perplexity', 'notebooklm', 'consensus'],
    quickStart: [
      'Install: `pip install knowledge-storm` and set LLM + search keys.',
      'Run: `python examples/run_storm_wiki.py --topic "Quantum computing" --output_dir ./results`.',
      'Review the generated outline, then the cited article under results.',
      'Swap the retriever or LLM via the engine configs.',
    ],
    sampleInput:
      'Write a citation-backed overview of solid-state batteries: status, key players, and remaining challenges.',
    sampleOutput:
      'STORM surfaced perspectives (materials, manufacturing,商业化), drafted an outline, retrieved sources for each section, and produced a multi-section article with numbered citations to papers and news. Hallucinated claims were minimal because every sentence traced to a source.',
    benchmarks: [
      { label: 'GitHub stars', value: '31,700+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/stanford-oval/storm' },
      { label: 'Output', value: 'Cited long-form article', source: 'STORM paper' },
    ],
    decisionAid: {
      pickIf:
        'You want an agentic research writer that shows citations and handles broad topics methodically.',
      skipIf:
        'You need conversational or tool-using research rather than a one-shot long article — GPT Researcher or Perplexity.',
    },
  },

  // ---------------- Framework (memory) ----------------
  {
    slug: 'mem0',
    name: 'Mem0',
    tagline: "The memory layer for AI agents — drop-in, adaptive, and far cheaper than stuffing context.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://mem0.ai',
    github: 'https://github.com/mem0ai/mem0',
    stars: 67949,
    updated: '2026-10',
    tags: ['memory', 'stateful', 'context', 'personalization'],
    pricing: 'Open-source (Apache-2.0). Managed platform on mem0.ai (usage-billed) optional.',
    verdict: 'The de-facto memory layer — if your agent forgets between turns, this is the fix that does not blow up your token bill.',
    description:
      "Mem0 is a memory layer for AI agents and apps. Instead of dumping the entire conversation back into context every turn, Mem0 extracts, stores, and retrieves salient facts (and updates them as they change), so agents stay stateful and personalized while using far fewer tokens. It works as a drop-in alongside any LLM or framework and offers a managed cloud as well as a self-hosted open core.",
    useCases: [
      'Give a chatbot persistent user preferences across sessions',
      'Let an agent recall prior decisions without re-sending history',
      'Personalize an assistant from accumulated interactions',
      'Cut context-token cost on long-running conversations',
    ],
    pros: [
      'Adaptive memory that updates facts instead of appending noise',
      'Big token savings vs. full-history context',
      'Drop-in with most LLMs and frameworks',
      'Apache-2.0 core; optional managed cloud',
    ],
    cons: [
      'An added component to operate if you self-host at scale',
      'Memory quality depends on extraction tuning',
      'Best value shows in stateful/multi-session apps, not one-shot calls',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Ollama', 'Any OpenAI-compatible endpoint'],
    alternatives: ['langchain', 'agno', 'pydantic-ai'],
    quickStart: [
      'Install: `pip install mem0ai` and set your LLM key.',
      'Create memory: `m = Memory.from_config(...); m.add("User prefers concise answers", user_id="u1")`.',
      'Retrieve each turn: `m.search("what does this user prefer?", user_id="u1")` and feed results to the LLM.',
      'Optionally enable the managed platform for hosting and evals.',
    ],
    sampleInput:
      'A user says: "I am vegetarian and allergic to nuts." Later they ask for a recipe idea.',
    sampleOutput:
      'Mem0 stored the preference, updated it on any later contradiction, and on the recipe question surfaced "vegetarian + nut allergy" to the LLM — without re-sending the whole chat. Token usage dropped versus full-history context.',
    benchmarks: [
      { label: 'GitHub stars', value: '68,000+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/mem0ai/mem0' },
      { label: 'Claimed', value: 'Up to 26x fewer tokens vs full context', source: 'Mem0 benchmarks' },
    ],
    decisionAid: {
      pickIf:
        'Your agent or assistant needs durable, personalized memory across sessions without exploding context cost.',
      skipIf:
        'Your use case is single-turn or you already hand-roll memory in your framework — then it is redundant.',
    },
  },

  {
    slug: 'langflow',
    name: 'Langflow',
    tagline: 'A visual, drag-and-drop builder for LLM and agent flows — and a deployable backend.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 1,
    website: 'https://langflow.org',
    github: 'https://github.com/langflow-ai/langflow',
    stars: 156075,
    updated: '2026-10',
    tags: ['visual', 'no-code', 'rag', 'low-code'],
    pricing: 'Open-source (MIT). Langflow cloud available; self-host the server.',
    verdict: 'The fastest on-ramp from "idea" to "working agent" if you think in boxes and wires, not code.',
    description:
      "Langflow is a visual builder for LLM and agent applications. You drag components — models, prompts, tools, retrievers, agents — onto a canvas and wire them together, then run or deploy the flow as an API. Built on LangChain under the hood, it gives non-engineers and rapid prototypers a way to ship agent workflows without writing the plumbing, while still exposing a full Python API for when you outgrow the canvas.",
    useCases: [
      'Prototype an agent or RAG flow visually, no code',
      'Let non-engineers build and tweak LLM workflows',
      'Deploy a flow as an API endpoint in minutes',
      'Teach LLM/agent concepts with a tangible canvas',
    ],
    pros: [
      'Visual canvas dramatically lowers the prototyping barrier',
      'Runs/deploys as a real backend, not just a diagram',
      'Powered by LangChain — export to code when needed',
      'MIT licensed; huge, active community (150k+ stars)',
    ],
    cons: [
      'Complex logic is easier in code than on a canvas',
      'Visual spaghetti at scale; version control is clunkier than code',
      'Abstractions can hide what LangChain is doing underneath',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Hugging Face', 'Ollama', 'Many more'],
    alternatives: ['dify', 'n8n', 'crewai', 'langgraph', 'mastra'],
    quickStart: [
      'Install: `pip install langflow` then `langflow run` (or use the cloud).',
      'Open the canvas, drag an LLM + prompt + tool components, and connect them.',
      'Click Play to test the flow interactively.',
      'Export to an API endpoint or Python code for production.',
    ],
    sampleInput:
      'A marketer wants a flow that takes a product URL, summarizes it, and drafts three tweet variants.',
    sampleOutput:
      'On the canvas: a URL loader → summarizer LLM → a branching prompt that emits three tweets. The marketer ran it live, tweaked the prompt box, and exported it as an API without writing code.',
    benchmarks: [
      { label: 'GitHub stars', value: '156,000+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/langflow-ai/langflow' },
      { label: 'Backend', value: 'LangChain + FastAPI', source: 'Langflow docs' },
    ],
    decisionAid: {
      pickIf:
        'You want to build or let others build agent/RAG flows visually and deploy them fast.',
      skipIf:
        'You are a code-first team building complex, version-controlled agent logic — use LangChain/CrewAI directly.',
    },
  },

  {
    slug: 'ragflow',
    name: 'RAGFlow',
    tagline: 'An open-source RAG engine built on deep document understanding.',
    category: 'research',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://ragflow.io',
    github: 'https://github.com/infiniflow/ragflow',
    stars: 92982,
    updated: '2026-10',
    tags: ['rag', 'doc-understanding', 'enterprise', 'knowledge'],
    pricing: 'Free and open-source (Apache-2.0). Self-host; optional enterprise support.',
    verdict: 'The open RAG engine to pick when messy, real-world documents (PDFs, scans, tables) are the whole problem.',
    description:
      "RAGFlow is an open-source Retrieval-Augmented Generation engine from InfiniFlow that emphasizes deep document understanding. It parses complex, layout-heavy files — PDFs, scanned docs, tables, embedded figures — into structured, citation-friendly chunks, then answers with references. It ships a chat/agent UI and APIs, making it a self-hostable alternative to managed knowledge assistants for document-heavy teams.",
    useCases: [
      'Build a Q&A assistant over messy PDFs and scanned docs',
      'Ground answers in citations from source files',
      'Self-host a knowledge base with a chat UI for a team',
      'Parse tables and figures that naive chunkers mangle',
    ],
    pros: [
      'Strong document parsing (layout, tables, scans) vs. naive chunking',
      'Citation-grounded answers from source files',
      'Batteries-included chat/agent UI and APIs',
      'Apache-2.0; 90k+ stars and active development',
    ],
    cons: [
      'Heavier to deploy than a library (it is a platform)',
      'Deep parsing trades some speed for accuracy',
      'Tuning chunking/retrieval still needed for best results',
    ],
    models: ['Many LLM providers', 'Ollama', 'OpenAI', 'Anthropic', 'Local models'],
    alternatives: ['llama-index', 'vanna', 'gpt-researcher'],
    quickStart: [
      'Deploy via Docker: follow the repo quickstart (`docker compose up`).',
      'Open the UI, create a knowledge base, and upload documents.',
      'Let RAGFlow parse and index them with deep-doc understanding.',
      'Chat or call the API; answers cite source spans.',
    ],
    sampleInput:
      'Upload a 300-page scanned annual report and ask: "What was revenue by segment, and what footnotes mention risk?"',
    sampleOutput:
      'RAGFlow parsed the scanned pages (including tables), answered with per-segment revenue and pulled the relevant risk footnotes as citations, rather than guessing from a broken text extraction.',
    benchmarks: [
      { label: 'GitHub stars', value: '93,000+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/infiniflow/ragflow' },
      { label: 'Strength', value: 'Deep document understanding', source: 'RAGFlow docs' },
    ],
    decisionAid: {
      pickIf:
        'You need self-hosted, citation-grounded Q&A over complex, real-world documents.',
      skipIf:
        'You want a lightweight RAG library to embed in code — LlamaIndex or LightRAG.',
    },
  },

  {
    slug: 'letta',
    name: 'Letta (formerly MemGPT)',
    tagline: 'A stateful-agent platform built around long-term, self-managing memory.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 3,
    website: 'https://www.letta.com',
    github: 'https://github.com/letta-ai/letta',
    stars: 25270,
    updated: '2026-10',
    tags: ['memory', 'stateful', 'agents', 'platform'],
    pricing: 'Open-source (Apache-2.0). Managed Letta Cloud optional.',
    verdict: 'The platform that took the MemGPT memory idea and turned it into a real, stateful agent runtime.',
    description:
      "Letta (formerly MemGPT) is an agent platform centered on the idea that agents should manage their own memory across a hierarchy (working, recall, archival). Agents persist between sessions, expose tool-calling, and can be versioned and served via API. It grew out of the influential MemGPT research and is now a practical way to run stateful agents with explicit, inspectable memory blocks rather than opaque context stuffing.",
    useCases: [
      'Run stateful agents that remember across long sessions',
      'Build memory-block-based agent logic you can inspect/edit',
      'Serve versioned agents over an API for a product',
      'Prototype memory-management patterns from MemGPT research',
    ],
    pros: [
      'Explicit, editable memory hierarchy (not black-box context)',
      'Agents persist and are versioned/servable via API',
      'Born from MemGPT research; strong memory design',
      'Apache-2.0 and self-hostable',
    ],
    cons: [
      'More concepts to learn (memory blocks, agents, tools)',
      'Heavier than a single-file agent script',
      'Smaller ecosystem than LangChain',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Ollama', 'Any OpenAI-compatible endpoint'],
    alternatives: ['mem0', 'langchain', 'autogen'],
    quickStart: [
      'Install: `pip install letta` and run `letta server` (or use Letta Cloud).',
      'Create an agent via the CLI/UI, attaching tools and memory blocks.',
      'Chat with it; inspect and edit its memory blocks as it learns.',
      'Call it over the REST API from your app.',
    ],
    sampleInput:
      'An agent assists a returning user who, three sessions ago, said they were migrating from AWS to GCP.',
    sampleOutput:
      'Letta recalled the migration context from its archival memory block, acknowledged the progress since last time, and tailored suggestions to GCP — without the user restating anything. The memory block was visible and editable in the UI.',
    benchmarks: [
      { label: 'GitHub stars', value: '25,300+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/letta-ai/letta' },
      { label: 'Origin', value: 'MemGPT research', source: 'Letta docs' },
    ],
    decisionAid: {
      pickIf:
        'You want a stateful agent runtime with transparent, editable long-term memory as a first-class concept.',
      skipIf:
        'You just need a lightweight memory add-on for an existing agent — Mem0 is simpler to drop in.',
    },
  },
];
