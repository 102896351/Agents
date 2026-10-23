// ============================================================
//  New agents batch — added 2026-10-23
//  Source: hand-picked from GitHub (high-star, actively maintained
//  open-source AI agent projects). Live stats fetched via GitHub API
//  on 2026-10-23. Spread into `agents` in agents.ts.
// ============================================================
import type { Agent } from './agents';

export const extraAgents2026: Agent[] = [
  // ---------------- Coding ----------------
  {
    slug: 'openhands',
    name: 'OpenHands',
    tagline: "A platform for autonomous software-engineering agents that write, run, and fix code.",
    category: 'coding',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://docs.all-hands.dev',
    github: 'https://github.com/All-Hands-AI/OpenHands',
    stars: 91600,
    updated: '2026-10',
    tags: ['autonomous', 'sw-engineer', 'self-host', 'litellm'],
    pricing: 'Free and open-source (MIT). Bring your own LLM key (Claude, GPT-4o, Gemini, or any LiteLLM-backed model). Optional hosted cloud tier at all-hands.dev.',
    verdict: 'The most complete open-source answer to Devin — a real IDE-in-a-loop agent you can self-host, not a demo.',
    description:
      "OpenHands (formerly OpenDevin) is an open-source platform for autonomous software engineering. It gives an LLM agent a full workspace: a bash shell, a code editor, a web browser, and API-calling tools, then lets it plan and execute multi-step engineering tasks. It is model-agnostic through LiteLLM, so you can run it on Claude, GPT-4o, Gemini, or a local model, entirely on your own machine.",
    useCases: [
      'Implement a feature end-to-end from a GitHub issue',
      'Fix a bug with a failing test and open a PR',
      'Refactor or migrate a module across many files',
      'Write and run a test suite, then iterate on failures',
      'Self-host a coding agent with your own model and data',
    ],
    pros: [
      'Fully open-source (MIT) and self-hostable — your code never leaves your infra',
      'Rich toolset: shell, editor, browser, and API calls in one agent loop',
      'Model-agnostic via LiteLLM (cloud or local)',
      'Large, active community (90k+ stars) with frequent releases',
    ],
    cons: [
      'Heavier to set up than a CLI agent — needs a runtime/container',
      'Agent autonomy means you must review generated diffs carefully',
      'Quality tracks the underlying model; weak models produce weak PRs',
    ],
    models: ['Claude 3.5/3.7/4', 'GPT-4o', 'Gemini 2.5', 'Local models via LiteLLM/Ollama'],
    alternatives: ['devin', 'claude-code', 'aider', 'cursor'],
    quickStart: [
      'Fastest path: `docker pull docker.all-hands.dev/all-hands-ai/openhands` then run the container with your LLM API key.',
      'Or run locally: clone https://github.com/All-Hands-AI/OpenHands and follow the README dev setup (requires Python + Node).',
      'Set your model provider in the UI (e.g. Anthropic / OpenAI) and paste the API key.',
      'Open a repo or paste a task like "Fix the failing login test in tests/auth.test.ts".',
      'Review the agent\'s proposed changes in the diff viewer, then merge or export a PR.',
    ],
    sampleInput:
      'Repository: my-org/payments-service. Task: "The /charge endpoint returns 500 when amount is 0. Add an input validation that rejects zero/negative amounts with a 400 and a test covering it."',
    sampleOutput:
      'OpenHands opened a shell, ran the test suite to reproduce the 500, edited src/routes/charge.ts to add validation, added tests/test_charge_validation.py (3 cases: 0, -1, valid), and re-ran tests (all green). Proposed PR #218 with a 1-line summary and a link to the failing run.',
    benchmarks: [
      { label: 'GitHub stars', value: '91,600+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT (self-hostable)', source: 'github.com/All-Hands-AI/OpenHands' },
      { label: 'SWE-bench style evals', value: 'Competitive with closed coding agents', source: 'OpenHands docs' },
    ],
    decisionAid: {
      pickIf:
        'You want a self-hosted, open-source coding agent with a real workspace (shell + browser + editor) and you are comfortable running a container.',
      skipIf:
        'You just want a lightweight terminal CLI coding assistant — try Aider or Claude Code instead. Or you need a managed, zero-setup product — Devin.',
    },
  },

  // ---------------- Framework ----------------
  {
    slug: 'agno',
    name: 'Agno',
    tagline: 'A high-performance framework for building, deploying, and monitoring agent systems.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://www.agno.com',
    github: 'https://github.com/agno-agi/agno',
    stars: 42869,
    updated: '2026-10',
    tags: ['multi-agent', 'memory', 'knowledge', 'reasoning'],
    pricing: 'Open-source (Apache-2.0). Optional Agno cloud for agent monitoring/deployment.',
    verdict: 'The fastest path from "I have a model" to "I have a monitored multi-agent system" — with memory and knowledge baked in.',
    description:
      "Agno (formerly Phidata) is an open-source framework for building agentic systems. It focuses on performance and production: agents get built-in memory, knowledge (RAG) stores, reasoning loops, and structured output, and you can compose multiple agents into teams. Agno also ships an optional cloud control plane for tracing, evaluation, and deployment.",
    useCases: [
      'Build a single tool-using agent with memory and RAG',
      'Compose multi-agent teams that hand off sub-tasks',
      'Add reasoning + knowledge retrieval to an existing LLM app',
      'Monitor and evaluate agents in production via Agno cloud',
    ],
    pros: [
      'First-class memory and knowledge (RAG) primitives',
      'Multi-agent "teams" with clear role hand-off',
      'Strong performance focus (fast agent instantiation)',
      'Optional managed observability and deployment',
    ],
    cons: [
      'Younger ecosystem than LangChain; fewer third-party examples',
      'Best-in-class features (monitoring) push toward the paid cloud',
      'API still evolving between majors',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Ollama', 'Any OpenAI-compatible endpoint'],
    alternatives: ['langchain', 'crewai', 'langgraph', 'mastra'],
    quickStart: [
      'Install: `pip install -U agno` (or `pnpm add agno` for the TS SDK).',
      'Create an agent: `from agno.agent import Agent; Agent(model=OpenAIChat(id="gpt-4o"), tools=[DuckDuckGo()], markdown=True)`.',
      'Run `agent.print_response("What is the latest on agent frameworks?")`.',
      'Add memory with `Memory` and knowledge with `Knowledge` (vector store) for stateful agents.',
      'Optionally connect Agno cloud to trace and evaluate runs.',
    ],
    sampleInput:
      'Build an agent that, given a company name, researches its recent news, summarizes in 3 bullets, and saves the result to a knowledge base.',
    sampleOutput:
      'Agent used a web tool to fetch recent news, summarized 3 bullets, then wrote the structured record into the knowledge store. Subsequent queries about that company hit the knowledge base first (no re-search).',
    benchmarks: [
      { label: 'GitHub stars', value: '42,800+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/agno-agi/agno' },
      { label: 'Agent startup latency', value: 'Sub-millisecond instantiation claim', source: 'Agno benchmarks' },
    ],
    decisionAid: {
      pickIf:
        'You want production-minded agents with memory + RAG + monitoring out of the box, and you like a batteries-included framework.',
      skipIf:
        'You need the absolute largest integration ecosystem and community — LangChain still wins there.',
    },
  },
  {
    slug: 'smolagents',
    name: 'smolagents',
    tagline: "Hugging Face's tiny library for agents that write their actions as Python code.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://huggingface.co/docs/smolagents',
    github: 'https://github.com/huggingface/smolagents',
    stars: 29996,
    updated: '2026-10',
    tags: ['code-agent', 'minimal', 'huggingface', 'tool-calling'],
    pricing: 'Free and open-source (Apache-2.0).',
    verdict: 'The smallest sensible agent library — ~thousand lines, and its code-agent approach beats verbose JSON tool-calling.',
    description:
      "smolagents is Hugging Face's minimal agent library. Its headline idea is the 'code agent': instead of emitting rigid JSON tool calls, the agent writes Python code that is executed to act. This makes multi-step tool use far more expressive. The library is intentionally tiny (roughly a thousand lines), with first-class Hub and local-model support.",
    useCases: [
      'Prototype a tool-using agent in a few lines',
      'Let an agent call your Python functions by writing code',
      'Run a code agent on a local/HF model, not just OpenAI',
      'Teach or learn agent internals without framework bloat',
    ],
    pros: [
      'Tiny and readable — easy to understand and extend',
      'Code-agent paradigm is more flexible than JSON tool schemas',
      'Native Hugging Face Hub + local model support',
      'No heavy dependencies',
    ],
    cons: [
      'Executing agent-written code needs a sandbox you must provide',
      'Fewer built-in integrations than LangChain/Agno',
      'Best for builders, not a turnkey product',
    ],
    models: ['Hugging Face models', 'OpenAI', 'Anthropic', 'Any HF Inference endpoint'],
    alternatives: ['langchain', 'agno', 'langgraph'],
    quickStart: [
      'Install: `pip install smolagents`.',
      'Run a managed agent: `from smolagents import CodeAgent, HfApiModel; agent = CodeAgent(tools=[...], model=HfApiModel())`.',
      'Call `agent.run("Plot the population of capital cities in Europe")`.',
      'Add a tool by writing a Python function and passing it in `tools=[...]`.',
      'For safety, run inside a sandboxed environment before giving it real side effects.',
    ],
    sampleInput:
      'Agent, fetch the current GitHub stars of the huggingface/smolagents repo and write the number to stars.txt.',
    sampleOutput:
      'The code agent wrote: `import requests; r = requests.get("https://api.github.com/repos/huggingface/smolagents").json(); open("stars.txt","w").write(str(r["stargazers_count"]))`. Executed successfully; stars.txt written.',
    benchmarks: [
      { label: 'GitHub stars', value: '30,000+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/huggingface/smolagents' },
      { label: 'Code size', value: '~1,000 lines', source: 'smolagents README' },
    ],
    decisionAid: {
      pickIf:
        'You want the simplest possible agent library and like the idea of agents that act by writing Python.',
      skipIf:
        'You need a large built-in connector/integration catalog — reach for LangChain or Agno.',
    },
  },
  {
    slug: 'llama-index',
    name: 'LlamaIndex',
    tagline: 'The data framework for LLM applications — ingestion, indexing, and RAG at scale.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://docs.llamaindex.ai',
    github: 'https://github.com/run-llama/llama_index',
    stars: 52629,
    updated: '2026-10',
    tags: ['rag', 'data', 'indexing', 'ingestion'],
    pricing: 'Free and open-source (MIT). Optional LlamaCloud for managed ingestion/parsing.',
    verdict: 'Still the default choice when your agent needs to actually read your private data — RAG is its whole identity.',
    description:
      "LlamaIndex is a data framework for LLM and agent applications. It specializes in connecting models to your own data: ingestion from hundreds of sources, chunking, indexing (vector, tree, keyword), and retrieval-augmented generation. It also provides agent patterns (ReAct, router, sub-question) and an observability layer, in both Python (llama-index) and TypeScript (llamaindex).",
    useCases: [
      'Build a RAG chatbot over your docs, PDFs, or Slack history',
      'Index structured + unstructured data for semantic search',
      'Compose agents that retrieve then reason over private data',
      'Use LlamaCloud for messy parsing (tables, slides)',
    ],
    pros: [
      'Best-in-class data connectors and indexing strategies',
      'Mature RAG primitives (rerankers, routers, query engines)',
      'Python + TypeScript with a large community',
      'Optional managed parsing via LlamaCloud',
    ],
    cons: [
      'RAG-specific — not a general agent orchestrator',
      'API surface is large and has shifted across versions',
      'Production RAG quality depends on chunking/reranking tuning',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Local embeddings/models', 'Any LLM'],
    alternatives: ['langchain', 'dify', 'vanna'],
    quickStart: [
      'Install: `pip install llama-index` (Python) or `npm install llamaindex` (TS).',
      'Load data: `from llama_index.core import SimpleDirectoryReader; docs = SimpleDirectoryReader("./data").load_data()`.',
      'Build an index: `from llama_index.core import VectorStoreIndex; index = VectorStoreIndex.from_documents(docs)`.',
      'Query: `query_engine = index.as_query_engine(); print(query_engine.query("What does the doc say about X?"))`.',
      'Add a reranker or switch to a managed vector store as you scale.',
    ],
    sampleInput:
      'Index the ./contracts folder (PDFs) and answer: "Which contracts allow termination with 30 days notice?"',
    sampleOutput:
      'LlamaIndex parsed the PDFs, embedded chunks, retrieved the 5 most relevant passages, and answered with citations to 3 specific contracts, quoting the notice clauses.',
    benchmarks: [
      { label: 'GitHub stars', value: '52,600+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/run-llama/llama_index' },
      { label: 'Connectors', value: 'Hundreds of data sources', source: 'LlamaIndex docs' },
    ],
    decisionAid: {
      pickIf:
        'Your core problem is "make an LLM answer from my private data" — retrieval, indexing, and RAG.',
      skipIf:
        'You need general multi-agent orchestration with lots of third-party tools — LangChain fits broader.',
    },
  },
  {
    slug: 'langchain',
    name: 'LangChain',
    tagline: 'The agent and LLM-application framework with the largest tool ecosystem.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://www.langchain.com',
    github: 'https://github.com/langchain-ai/langchain',
    stars: 148302,
    updated: '2026-10',
    tags: ['orchestration', 'chains', 'tools', 'ecosystem'],
    pricing: 'Open-source (MIT) core. LangSmith (observability) and LangGraph platform are commercial.',
    verdict: 'The 800-pound gorilla — unmatched integrations and community, with LangGraph handling the agent loops.',
    description:
      "LangChain is the most widely adopted framework for building LLM and agent applications. It provides chains, tool-calling, retrievers, and a huge connector catalog across Python and JS/TS. For stateful agent workflows it defers to LangGraph (its sibling project), while LangSmith adds tracing and evaluation. If a model or a SaaS has an API, LangChain almost certainly has a wrapper.",
    useCases: [
      'Wire an LLM to dozens of tools and data sources',
      'Build retrieval-augmented apps with managed retrievers',
      'Prototype agents quickly with the broadest integration set',
      'Trace and evaluate runs with LangSmith',
    ],
    pros: [
      'Largest ecosystem and community by far (148k+ stars)',
      'Connectors for nearly every model, vector store, and SaaS',
      'LangGraph gives robust stateful agent orchestration',
      'LangSmith for production observability',
    ],
    cons: [
      'Abstraction layers can feel heavy for simple tasks',
      'API has churned across major versions',
      'Best observability/eval is behind LangSmith (paid)',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Cohere', 'Local', 'Any provider'],
    alternatives: ['langgraph', 'crewai', 'autogen', 'agno'],
    quickStart: [
      'Install: `pip install langchain langchain-openai` (Python) or `npm i @langchain/core @langchain/openai`.',
      'Call a model: `from langchain_openai import ChatOpenAI; llm = ChatOpenAI(); llm.invoke("hi")`.',
      'Add tools via `@tool` decorators and bind them: `llm.bind_tools([my_tool])`.',
      'For agents, use LangGraph: `from langgraph.prebuilt import create_react_agent`.',
      'Turn on LangSmith tracing to debug prompts and tool calls.',
    ],
    sampleInput:
      'Build an agent that can search the web and query a Postgres database, then summarize findings.',
    sampleOutput:
      'LangChain bound a web-search tool and a SQL tool to the LLM; the agent decided to query the DB for recent orders, searched the web for shipping delays, and returned a combined summary with both sources cited.',
    benchmarks: [
      { label: 'GitHub stars', value: '148,300+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/langchain-ai/langchain' },
      { label: 'Integrations', value: 'Hundreds of model/tool connectors', source: 'LangChain docs' },
    ],
    decisionAid: {
      pickIf:
        'You want the broadest possible integration surface and a massive community, and you will use LangGraph for agent control flow.',
      skipIf:
        'You want a minimal, lightweight library — smolagents or Pydantic AI will feel lighter.',
    },
  },
  {
    slug: 'pydantic-ai',
    name: 'Pydantic AI',
    tagline: "Type-safe agent framework from the makers of Pydantic — Pythonic, typed agents.",
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://ai.pydantic.dev',
    github: 'https://github.com/pydantic/pydantic-ai',
    stars: 20803,
    updated: '2026-10',
    tags: ['type-safe', 'pythonic', 'structured-output', 'pydantic'],
    pricing: 'Free and open-source (MIT).',
    verdict: 'The framework for engineers who live in typed Python — agents that feel like FastAPI for LLMs.',
    description:
      "Pydantic AI is a type-safe agent framework built by the Pydantic team. It brings the same ergonomics Pydantic users love — typed inputs/outputs, dependency injection, validation — to LLM agents. Agents return structured Pydantic models, support multiple model providers, tool calling, and a built-in agent-runner with logging and testing utilities.",
    useCases: [
      'Build agents whose outputs are validated Pydantic models',
      'Add type-safe tool calling to a Python service',
      'Unit-test agent behavior with the built-in test harness',
      'Compose multi-agent workflows with DI and graphs',
    ],
    pros: [
      'First-class type safety and validation via Pydantic',
      'Feels native to Python/FastAPI developers',
      'Multi-provider (OpenAI, Anthropic, Gemini, Groq, Ollama, Bedrock)',
      'Built-in logging, testing, and dependency injection',
    ],
    cons: [
      'Smaller ecosystem than LangChain',
      'Python-only (no official TS SDK)',
      'Newer project — fewer third-party examples',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Groq', 'Ollama', 'Bedrock'],
    alternatives: ['langchain', 'agno', 'openai-agents-sdk'],
    quickStart: [
      'Install: `pip install pydantic-ai`.',
      'Define an agent: `from pydantic_ai import Agent; agent = Agent("openai:gpt-4o", system_prompt="...")`.',
      'Run: `result = await agent.run("Summarize this invoice")`.',
      'Return structured data by passing a Pydantic model to `output_type=`.',
      'Add tools with the `@agent.tool` decorator and test with the agent runner.',
    ],
    sampleInput:
      'Agent, extract from this email the sender, intent, and due date as a typed object.',
    sampleOutput:
      'Returns a validated `EmailExtract(sender="x@y.com", intent="invoice", due_date=date(2026,11,1))` object — rejected automatically if a field fails validation.',
    benchmarks: [
      { label: 'GitHub stars', value: '20,800+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/pydantic/pydantic-ai' },
      { label: 'Providers', value: 'OpenAI/Anthropic/Gemini/Groq/Ollama/Bedrock', source: 'Pydantic AI docs' },
    ],
    decisionAid: {
      pickIf:
        'You are a Python engineer who wants typed, validated agent I/O and FastAPI-like ergonomics.',
      skipIf:
        'You need the biggest connector catalog or a TypeScript-first stack — LangChain or Agno.',
    },
  },
  {
    slug: 'metagpt',
    name: 'MetaGPT',
    tagline: 'A multi-agent "software company" that turns one line of requirement into a full project.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://www.deepwisdom.ai',
    github: 'https://github.com/geekan/MetaGPT',
    stars: 70973,
    updated: '2026-01',
    tags: ['multi-agent', 'sdlc', 'roles', 'automation'],
    pricing: 'Free and open-source (MIT).',
    verdict: 'The most vivid demo of role-based multi-agent orchestration — PM, architect, engineer, all collaborating.',
    description:
      "MetaGPT assigns software-company roles to LLM agents — Product Manager, Architect, Engineer, QA — and has them collaborate to turn a single natural-language requirement into user stories, designs, APIs, and code. It is a research-grade demonstration of multi-agent orchestration with shared standards (SOPs) between roles, and supports many LLM backends.",
    useCases: [
      'Generate a whole project scaffold from one sentence',
      'Experiment with role-based multi-agent collaboration',
      'Produce design docs + code for a small feature',
      'Benchmark multi-agent coordination patterns',
    ],
    pros: [
      'Compelling role-based multi-agent design',
      'Outputs docs AND code from a one-line spec',
      'Large open-source following (70k+ stars)',
      'Model-agnostic (OpenAI, Anthropic, local)',
    ],
    cons: [
      'Generated projects are demos, not production-ready apps',
      'Token-heavy: many role agents talking costs a lot',
      'Slower release cadence lately (pushed 2026-01)',
    ],
    models: ['OpenAI', 'Anthropic', 'Local models via LiteLLM'],
    alternatives: ['crewai', 'autogen', 'langgraph'],
    quickStart: [
      'Install: `pip install metagpt` and `metagpt --init` to set your API key.',
      'Run: `metagpt "Design a Flask app that shortens URLs and tracks clicks"`.',
      'Inspect the generated repo under `workspace/<project>`.',
      'Tune roles/SOPs in the config to change how agents collaborate.',
      'Swap the model provider in the config (OpenAI/Anthropic/local).',
    ],
    sampleInput:
      'Build a CLI tool that converts CSV to JSON and validates schema.',
    sampleOutput:
      'MetaGPT emitted a PRD, an API design, a data-schema doc, and a Python project (cli.py + tests) implementing the converter with validation — each artifact authored by a different role agent.',
    benchmarks: [
      { label: 'GitHub stars', value: '70,900+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/geekan/MetaGPT' },
      { label: 'Roles', value: 'PM / Architect / Engineer / QA', source: 'MetaGPT docs' },
    ],
    decisionAid: {
      pickIf:
        'You want to see or build role-based multi-agent systems that mimic a software team.',
      skipIf:
        'You need a reliable, production coding agent for real repos — OpenHands or Claude Code.',
    },
  },
  {
    slug: 'babyagi',
    name: 'BabyAGI',
    tagline: 'The tiny task-driven autonomous agent that sparked the modern agent wave.',
    category: 'framework',
    license: 'open-source',
    selfHost: true,
    difficulty: 2,
    website: 'https://github.com/yoheinakajima/babyagi',
    github: 'https://github.com/yoheinakajima/babyagi',
    stars: 22354,
    updated: '2026-01',
    tags: ['task-list', 'autonomous', 'minimal', 'inspiration'],
    pricing: 'Free and open-source (no explicit license file — check before redistribution).',
    verdict: 'More history lesson than tool, but the cleanest ~100-line sketch of an autonomous loop.',
    description:
      "BabyAGI is a minimal autonomous-agent script that maintains a task list: it picks the top task, uses an LLM to execute it, stores the result in a vector DB, and derives new tasks from the outcome. It is the conceptual ancestor of many production agent frameworks. It is intentionally small (around 100 lines) and best read as a learning artifact rather than a finished product — note it ships without an explicit LICENSE file.",
    useCases: [
      'Learn how an autonomous task-loop works in ~100 lines',
      'Bootstrap a custom task-driven agent',
      'Prototype goal decomposition before adopting a framework',
      'Teach agent fundamentals without framework overhead',
    ],
    pros: [
      'Extremely small and readable',
      'Clear illustration of task-creation/execution/prioritization',
      'Easy to fork and extend',
    ],
    cons: [
      'No license file — unclear redistribution terms',
      'Not maintained as a product (pushed 2026-01)',
      'No safety rails, memory, or tool ecosystem',
    ],
    models: ['OpenAI', 'Any LLM with a chat completion API'],
    alternatives: ['autogpt', 'crewai', 'langgraph'],
    quickStart: [
      'Clone: `git clone https://github.com/yoheinakajima/babyagi`.',
      'Set `OPENAI_API_KEY` and install deps (`pip install openai` + a vector store).',
      'Open `babyagi.py` and read the task loop (execute → store → create → reprioritize).',
      'Replace the LLM/vector calls to point at your own stack.',
      'Add safety limits (max iterations, guardrails) before any real use.',
    ],
    sampleInput:
      'Objective: "Create a plan to learn Python in 30 days."',
    sampleOutput:
      'BabyAGI created sub-tasks (Day 1-5 basics, projects, etc.), executed each via the LLM, stored results, and reprioritized the list — producing a rolling 30-day learning plan.',
    benchmarks: [
      { label: 'GitHub stars', value: '22,300+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'None declared', source: 'github.com/yoheinakajima/babyagi' },
      { label: 'Code size', value: '~100 lines', source: 'babyagi.py' },
    ],
    decisionAid: {
      pickIf:
        'You want to understand or fork the canonical autonomous task-loop in the fewest lines.',
      skipIf:
        'You need a maintained, production-grade agent framework — use LangGraph, Agno, or CrewAI.',
    },
  },

  // ---------------- Automation ----------------
  {
    slug: 'composio',
    name: 'Composio',
    tagline: "The tool layer for AI agents — 1000+ app integrations (GitHub, Slack, Salesforce).",
    category: 'automation',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 2,
    website: 'https://composio.dev',
    github: 'https://github.com/ComposioHQ/composio',
    stars: 30692,
    updated: '2026-10',
    tags: ['tools', 'integrations', 'actions', 'triggers'],
    pricing: 'Open-source (MIT) core with a hosted managed layer; free tier for personal use.',
    verdict: 'Stop hand-writing API wrappers — Composio is the "integration bus" that lets any agent act on real apps.',
    description:
      "Composio is an integration platform for AI agents. Instead of coding OAuth, pagination, and rate limits for every SaaS, you connect an agent to 1000+ tools (GitHub, Slack, Google Sheets, Salesforce, Notion, and more) through one layer. It handles auth, managed execution, and triggers, and plugs into LangChain, CrewAI, Agno, and OpenAI agents via adapters.",
    useCases: [
      'Give an agent the ability to act on GitHub/Slack/Sheets',
      'Centralize OAuth and tool auth for many agents',
      'Wire triggers (new email, PR opened) into agent workflows',
      'Add managed tool execution without building connectors',
    ],
    pros: [
      '1000+ prebuilt app integrations with auth handled',
      'Adapters for LangChain, CrewAI, Agno, OpenAI agents',
      'Managed execution + triggers beyond pure actions',
      'Open-source core (MIT)',
    ],
    cons: [
      'Abstraction over many APIs — edge cases may need raw calls',
      'Best experience leans on the hosted/managed tier',
      'Another dependency in your agent stack',
    ],
    models: ['Model-agnostic (it is a tool layer, not an LLM)'],
    alternatives: ['zapier-agents', 'make', 'n8n'],
    quickStart: [
      'Install: `pip install composio-core` (or `npm i composio-core`).',
      'Login/connect: `composio login` then `composio add github` (OAuth flow).',
      'List tools: `composio tools --app github`.',
      'Use in an agent: import the Composio toolkit for LangChain/CrewAI/Agno.',
      'Execute: agent calls a GitHub action; Composio runs it with your stored auth.',
    ],
    sampleInput:
      'Agent, when a PR is opened in my repo, summarize the diff and post it to Slack #reviews.',
    sampleOutput:
      'Composio registered a GitHub trigger, captured the PR event, the agent summarized the diff via an LLM, and Composio executed the Slack message action to #reviews — auth handled entirely by Composio.',
    benchmarks: [
      { label: 'GitHub stars', value: '30,600+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'MIT', source: 'github.com/ComposioHQ/composio' },
      { label: 'Integrations', value: '1000+ toolkits', source: 'Composio docs' },
    ],
    decisionAid: {
      pickIf:
        'Your agents need to actually act on real SaaS apps and you do not want to build OAuth/connectors yourself.',
      skipIf:
        'You only need simple internal workflow automation — Zapier/Make/n8n may be enough without code.',
    },
  },

  // ---------------- Research ----------------
  {
    slug: 'gpt-researcher',
    name: 'GPT Researcher',
    tagline: 'An autonomous agent that runs deep web research and writes citation-backed reports.',
    category: 'research',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: true,
    difficulty: 2,
    website: 'https://gptr.dev',
    github: 'https://github.com/assafelovic/gpt-researcher',
    stars: 30250,
    updated: '2026-10',
    tags: ['deep-research', 'web', 'reports', 'citations'],
    pricing: 'Free and open-source (Apache-2.0). Bring your own LLM + search key.',
    verdict: 'The open-source "Deep Research" — point it at a question and get a sourced report, not a summary.',
    description:
      "GPT Researcher is an autonomous research agent. Given a question, it plans sub-queries, browses the web in parallel, scrapes and filters sources, and assembles a structured, citation-backed report with an outline, sections, and a follow-up-questions panel. It is the open-source counterpart to commercial 'deep research' products and supports many LLMs and search backends.",
    useCases: [
      'Produce a sourced deep-dive report on any topic',
      'Aggregate and compare many web sources automatically',
      'Generate market/competitor research with citations',
      'Self-host a research assistant with your own keys',
    ],
    pros: [
      'Truly autonomous multi-step web research',
      'Outputs structured reports with citations',
      'Model- and search-agnostic (LiteLLM + Tavily/SerpAPI/etc.)',
      'Open-source (Apache-2.0) and self-hostable',
    ],
    cons: [
      'Research quality depends on the search backend + model',
      'Parallel browsing can be token- and time-heavy',
      'Needs a search API key (Tavily/SerpAPI) for good results',
    ],
    models: ['OpenAI', 'Anthropic', 'Gemini', 'Local via LiteLLM'],
    alternatives: ['perplexity', 'consensus', 'notebooklm', 'elicit'],
    quickStart: [
      'Install: `pip install gpt-researcher` (or clone the repo for the web UI).',
      'Set keys: `OPENAI_API_KEY` and a search key (e.g. `TAVILY_API_KEY`).',
      'Run: `from gpt_researcher import GPTResearcher; researcher = GPTResearcher(query="...", report_type="research_report"); await researcher.conduct_research()`.',
      'Get the report: `await researcher.write_report()`.',
      'Or launch the included web UI for an interactive research experience.',
    ],
    sampleInput:
      'Research the current state of open-source vector databases and compare the top 5 on scalability and licensing.',
    sampleOutput:
      'GPT Researcher planned 5 sub-queries, fetched and filtered ~40 sources, and produced a report with an outline, a comparison table (scalability + license per DB), and 18 citations, plus 3 follow-up questions.',
    benchmarks: [
      { label: 'GitHub stars', value: '30,200+', source: 'GitHub (Oct 2026)' },
      { label: 'License', value: 'Apache-2.0', source: 'github.com/assafelovic/gpt-researcher' },
      { label: 'Feature', value: 'Autonomous outline + cited report', source: 'GPT Researcher docs' },
    ],
    decisionAid: {
      pickIf:
        'You want an open-source deep-research agent that returns a citation-backed report you can self-host.',
      skipIf:
        'You just want a fast conversational answer — Perplexity or a chat model is lighter.',
    },
  },
];
