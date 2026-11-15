// ============================================================
//  New blog posts — single-project deep dives (2026-10-23)
//  6 trending GitHub AI-agent projects added to the directory.
//  Imported and spread into blogPosts in blog.ts.
// ============================================================

import type { BlogPost } from './blog';

export const newPosts2026: BlogPost[] = [
  {
    slug: 'openhands-2026',
    title: 'OpenHands in 2026: The Open-Source Devin That Actually Ships Code',
    excerpt:
      'OpenHands (formerly OpenDevin) is a 91K-star autonomous coding agent you can run on your own machine. We dug into how it works, where it beats the managed competition, and where it still needs a human at the wheel.',
    date: '2026-10-23',
    author: 'AI Agents Hub',
    readingTime: 10,
    tags: ['coding', 'open-source', 'autonomous', 'github', 'devin', 'ai-agents'],
    relatedAgents: ['devin', 'replit-agent', 'claude-code', 'aider', 'cursor', 'cline', 'codex', 'opencode'],
    coverThumb: '/blog/openhands-2026-official.jpg',
    coverThumbAlt: 'Official OpenHands product screenshot from the project documentation',
    coverThumbCredit: 'Official screenshot from the OpenHands repository',
    coverThumbSource: 'https://github.com/All-Hands-AI/OpenHands',
    content: `
<p>In early 2024 a screenshot of a startup demo went viral: an AI agent that could take a GitHub issue and open a pull request that actually closed it. The startup was <a href="/agent/devin/">Devin</a>, the price was enterprise-only, and the open-source community's reaction was predictable — they built their own. That project became <strong>OpenHands</strong> (it started life as OpenDevin), and two years later it is one of the most-starred AI coding projects on GitHub with <strong>91,000+ stars</strong> and a contributor base that dwarfs most commercial tools.</p>

<p>This post is a hands-on look at what OpenHands is in 2026, how its agent actually operates, and how it compares to the managed coding agents already in our <a href="/">directory</a> — <a href="/agent/devin/">Devin</a>, <a href="/agent/replit-agent/">Replit Agent</a>, and the terminal-native <a href="/agent/claude-code/">Claude Code</a>.</p>

<figure>
  <img src="/blog/openhands-2026-hero.jpg" alt="A glowing terminal window showing an autonomous coding agent assembling code modules" width="1000" height="667" loading="lazy" decoding="async" />
  <figcaption>OpenHands runs a full agent loop — plan, act, observe — inside a sandboxed environment you control.</figcaption>
</figure>

<h2>What OpenHands actually is</h2>

<p>OpenHands is a <strong>platform for autonomous software engineering agents</strong>, not a single script. The headline capability is the same one that made <a href="/agent/devin/">Devin</a> famous: give it a task — a bug, a feature, a refactor — and it plans, writes code, runs commands, browses the web, and opens a pull request. But the architecture is what separates it from a clever demo:</p>

<ul>
  <li><strong>An event-driven agent loop.</strong> Every action (edit a file, run a test, call a tool) emits an event; the agent observes the result and decides the next step. You can watch this loop unfold in a web UI or stream it to a terminal.</li>
  <li><strong>A sandboxed runtime.</strong> Code runs in a Docker container or a remote sandbox, so the agent can compile, test, and break things without touching your host machine.</li>
  <li><strong>Pluggable models.</strong> OpenHands is model-agnostic. Wire it to Claude, GPT, Gemini, or a local model via Ollama. The agent's intelligence is the model you pay for; the orchestration is the open-source layer.</li>
  <li><strong>Multiple agent personalities.</strong> Beyond the generalist "CodeAct" agent, OpenHands ships specialised agents for browsing, planning, and repo comprehension.</li>
</ul>

<h2>How a task flows through it</h2>

<p>A realistic flow looks like this: you paste an issue or a natural-language request, the agent reads the repository structure, proposes a plan (which you can approve or edit), then executes — editing files, running the build, fixing the errors it hits, and iterating until tests pass. The whole trajectory is visible and replayable, and the output is a real diff you review like any teammate's work.</p>

<p>Where OpenHands is genuinely strong is <strong>long-horizon tasks on repositories it has been allowed to explore</strong>. A multi-file refactor, a dependency upgrade across a monorepo, or "make this service pass its flaky integration tests" are the kinds of jobs where the sandbox-and-loop design pays off. If you already use <a href="/agent/claude-code/">Claude Code</a> or <a href="/agent/aider/">Aider</a> for refactors, OpenHands feels like the same idea with more guardrails and a first-class UI.</p>

<h2>Getting started</h2>

<p>The fastest path is the hosted cloud IDE, but the point of an open-source project is local control. A minimal local launch looks like:</p>

<pre><code>docker pull docker.all-hands.dev/all-hands-ai/openhands
# then run the container, mount your repo, and open the web UI
# configure a model provider + API key in the settings panel</code></pre>

<p>From there you point it at a repo, pick a model, and start a conversation. The <code>openhands.dev</code> docs cover the cloud, CLI, and self-hosted routes in detail.</p>

<h2>Who it is for — and who it isn't</h2>

<p><strong>OpenHands is for</strong> engineers and teams who want <a href="/agent/devin/">Devin</a>-style autonomy without the enterprise contract, and who are comfortable owning their own infrastructure, models, and API keys. If you run a fleet of internal repos and want an agent that proposes PRs on a schedule, this is one of the most mature options available.</p>

<p><strong>It is not</strong> a zero-setup product. You choose a model and a runtime, you pay the model provider, and you own the failure modes. For a solo developer who just wants AI inside their editor, <a href="/agent/cursor/">Cursor</a> or <a href="/agent/cline/">Cline</a> will get you productive in minutes. And like every autonomous coding agent, it still needs a human reviewing the PR — the 91K stars are for the loop, not for firing your reviewers.</p>

<h2>OpenHands vs the managed crowd</h2>

<table>
<thead><tr><th></th><th>OpenHands</th><th>Devin</th><th>Replit Agent</th><th>Claude Code</th></tr></thead>
<tbody>
<tr><td>License</td><td>Open-source (MIT)</td><td>Commercial, enterprise</td><td>Commercial</td><td>Commercial (API)</td></tr>
<tr><td>Where it runs</td><td>Your sandbox / cloud</td><td>Hosted</td><td>Hosted (Replit)</td><td>Local terminal</td></tr>
<tr><td>Model choice</td><td>Any (BYOK)</td><td>Curated</td><td>Curated</td><td>Anthropic models</td></tr>
<tr><td>Best at</td><td>Long-horizon PRs</td><td>End-to-end tasks</td><td>From-idea-to-app</td><td>Multi-file refactors</td></tr>
<tr><td>Setup friction</td><td>Medium</td><td>Low</td><td>Lowest</td><td>Low</td></tr>
</tbody>
</table>

<h2>Bottom line</h2>

<p>OpenHands is the open-source answer to the autonomous-coding hype, and unlike most answers it is production-grade: 91K stars, an event-driven architecture, and a sandbox model that keeps the agent's mistakes contained. It will not replace your engineers, but it will happily open the first draft of the PR. If you want <a href="/agent/devin/">Devin</a>'s ambition with your own keys and your own servers, this is the project to run.</p>

<p>See how it stacks up against the rest of the field in our <a href="/">{{AGENT_COUNT}}-agent directory</a>.</p>

<h2>FAQ (frequently asked questions)</h2>

<h3>Is OpenHands the same project as Devin?</h3>
<p>No. It is an independent open-source project; the guide describes it as the community answer to the same idea.</p>

<h3>Can I self-host it?</h3>
<p>The linked profile lists license and setup notes, and the official repository has the deployment instructions.</p>

<h3>Is the version number on the profile current?</h3>
<p>It is a GitHub REST API snapshot with an explicit checked date. Check the upstream releases before installing.</p>

<h2>Official sources</h2>
<p>Product names, features and plan details above can be checked against the projects' own sites and documentation. Primary sources: <a href="https://devin.ai" target="_blank" rel="noopener">devin.ai</a>, <a href="https://replit.com" target="_blank" rel="noopener">replit.com</a>, <a href="https://www.anthropic.com/claude-code" target="_blank" rel="noopener">anthropic.com</a>, <a href="https://aider.chat" target="_blank" rel="noopener">aider.chat</a>, <a href="https://github.com/Aider-AI/aider" target="_blank" rel="noopener">github.com</a>. Figures quoted in this guide are published by the projects, not measured by this site.</p>
`,
  },
  {
    slug: 'agno-2026',
    title: 'Agno in 2026: The Agent Framework That Stopped Calling Itself a Framework',
    excerpt:
      'Agno (formerly Phidata) is a 43K-star Python library for building, running, and monitoring agent systems. We look at why "agent platform" is the more honest label and where it fits next to LangGraph and CrewAI.',
    date: '2026-10-23',
    author: 'AI Agents Hub',
    readingTime: 9,
    tags: ['framework', 'python', 'agents', 'agno', 'langgraph', 'crewai'],
    relatedAgents: ['langgraph', 'crewai', 'autogen', 'openai-agents-sdk', 'mastra', 'dify'],
    coverThumb: '/blog/agno-2026-official.jpg',
    coverThumbAlt: 'Official Agno product image',
    coverThumbCredit: 'Official product image from Agno',
    coverThumbSource: 'https://github.com/agno-agi/agno',
    content: `
<p>If you browsed GitHub for an "AI agent framework" in 2024, you met Phidata. By 2026 the same repo had rebranded to <strong>Agno</strong> and the tagline had shifted from "build agents" to "build, run, and manage agent platforms." That is not marketing drift — it reflects a real architectural bet. Agno now powers <strong>43,000+ stars</strong> and positions itself less as a rival to <a href="/agent/langgraph/">LangGraph</a> and more as the runtime underneath production agent fleets.</p>

<p>Here is what Agno is, how it differs from the frameworks already in our <a href="/">directory</a>, and when you should reach for it.</p>

<figure>
  <img src="/blog/agno-2026-hero.jpg" alt="A network of glowing agent nodes connected to a central core" width="1000" height="667" loading="lazy" decoding="async" />
  <figcaption>Agno treats agents as lightweight, long-lived objects you can spawn by the thousand.</figcaption>
</figure>

<h2>The core idea: agents are cheap</h2>

<p>Agno's headline performance claim is that it can instantiate an agent in microseconds and hold millions in memory. That sounds like a benchmark flex, but the design implication matters: agents in Agno are meant to be <strong>disposable, specialised units</strong> rather than one heavy graph you compile once. You do not build a monolithic workflow; you spin up a team of small agents at runtime.</p>

<p>A minimal agent is a few lines:</p>

<pre><code>from agno.agent import Agent
from agno.models.openai import OpenAIChat

agent = Agent(model=OpenAIChat(id="gpt-4o"), instructions="You are a careful analyst")
agent.print_response("Summarise this repo's README in three bullets")</code></pre>

<p>From that base you add tools, memory, knowledge (RAG), and "teams" of agents that hand work to each other.</p>

<h2>What sets it apart</h2>

<ul>
  <li><strong>Built-in memory and knowledge.</strong> Session, agent, and user memory plus a vector-backed knowledge store are first-class, not add-ons you wire yourself.</li>
  <li><strong>Multi-modal and multi-agent teams.</strong> Agents can be text, voice, or image-capable, and "Agent Teams" let you orchestrate several toward one goal.</li>
  <li><strong>Observability baked in.</strong> Agno ships an Agent Platform (formerly Agno Cloud) with tracing, eval, and fine-tuning hooks — the "manage" half of the new tagline.</li>
  <li><strong>Model-agnostic.</strong> OpenAI, Anthropic, Gemini, Ollama, and more, behind one interface.</li>
</ul>

<h2>Agno vs LangGraph vs CrewAI</h2>

<p>The honest answer is that <a href="/agent/langgraph/">LangGraph</a> and <a href="/agent/crewai/">CrewAI</a> are the closest neighbours, and they optimise for different things:</p>

<table>
<thead><tr><th></th><th>Agno</th><th>LangGraph</th><th>CrewAI</th></tr></thead>
<tbody>
<tr><td>Mental model</td><td>Lightweight agents + teams</td><td>Stateful graphs</td><td>Role-playing crews</td></tr>
<tr><td>Memory / RAG</td><td>Built-in</td><td>You assemble</td><td>Partial</td></tr>
<tr><td>Observability</td><td>Platform included</td><td>LangSmith</td><td>LangSmith / custom</td></tr>
<tr><td>Best at</td><td>Fast, many agents</td><td>Controllable flows</td><td>Collaborative roles</td></tr>
<tr><td>License</td><td>Apache-2.0</td><td>MIT</td><td>Apache-2.0</td></tr>
</tbody>
</table>

<p>If you need a deterministic, inspectable graph with human-in-the-loop checkpoints, <a href="/agent/langgraph/">LangGraph</a> is still the safer default. If you want role-based collaboration with the least ceremony, <a href="/agent/crewai/">CrewAI</a> is friendlier. Agno wins when you want a high-throughput runtime with memory, knowledge, and monitoring wired in from line one.</p>

<h2>Who should use it</h2>

<p><strong>Pick Agno if</strong> you are building a product that spawns many agents per request, you want RAG and memory without gluing five libraries together, and you value built-in tracing. <strong>Skip it if</strong> you need the fine-grained control and ecosystem of <a href="/agent/langgraph/">LangGraph</a> for a single complex workflow, or you want the collaborative-role ergonomics of <a href="/agent/crewai/">CrewAI</a>.</p>

<h2>Bottom line</h2>

<p>Agno's rebrand from Phidata to a "platform" is the right call: under the hood it is less a framework you compile and more a runtime you operate. For teams shipping agent features at scale, that distinction is exactly the point.</p>

<p>Compare it against every other framework in our <a href="/">directory</a>.</p>

<h2>FAQ (frequently asked questions)</h2>

<h3>Was Agno previously called Phidata?</h3>
<p>Yes. The guide opens with that rename and what it signalled about the project direction.</p>

<h3>Is it a library or a hosted platform?</h3>
<p>The project repositioned toward building, running and managing agent platforms. Check the repository for what is actually shipped today.</p>

<h3>Do you benchmark its throughput or latency?</h3>
<p>No. This is an editorial profile based on public sources, not a performance test.</p>

<h2>When Agno is the right tool — and when it isn't</h2>
<p>Agno is a framework for building agents with memory, knowledge and teams of specialised agents. Its value shows up when a task genuinely benefits from several roles working together — a researcher, a reviewer, a writer — rather than one long prompt doing everything.</p>
<ul>
  <li><strong>Pick it if</strong> you are building a repeatable multi-step workflow, you need shared memory or persistent sessions, or you want to compare agent designs without rewriting the surrounding application each time.</li>
  <li><strong>Skip it if</strong> a single well-written prompt plus a tool call already solves the problem. Multi-agent setups cost more in tokens, latency and debugging time, and that cost is only justified when the decomposition actually improves the result.</li>
  <li><strong>Before you commit</strong>, write down what each agent owns and how the handoff is judged. Teams of agents fail most often at the seams — two roles each assuming the other checked something — and a clear contract between roles prevents more bugs than any framework feature.</li>
</ul>
<p>Keep a single-agent baseline while you build. If the multi-agent version is not measurably better on your own tasks, the simpler version is the one to ship: it is cheaper, faster and far easier for the next person to understand. Frameworks make sophisticated designs possible; they do not make them necessary.</p>

<h2>Official sources</h2>
<p>Product names, features and plan details above can be checked against the projects' own sites and documentation. Primary sources: <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener">langchain-ai.github.io</a>, <a href="https://crewai.com" target="_blank" rel="noopener">crewai.com</a>, <a href="https://microsoft.github.io/autogen/" target="_blank" rel="noopener">microsoft.github.io</a>, <a href="https://openai.github.io/openai-agents-python/" target="_blank" rel="noopener">openai.github.io</a>, <a href="https://github.com/openai/openai-agents-python" target="_blank" rel="noopener">github.com</a>. Figures quoted in this guide are published by the projects, not measured by this site.</p>
`,
  },
  {
    slug: 'smolagents-2026',
    title: 'smolagents in 2026: Hugging Face\'s Barebones Bet on Code Agents',
    excerpt:
      'smolagents is Hugging Face\'s intentionally tiny library for agents that "think in code." Under 1,000 lines, 30K stars, and a sharp opinion: actions should be Python, not JSON tool calls.',
    date: '2026-10-23',
    author: 'AI Agents Hub',
    readingTime: 8,
    tags: ['framework', 'huggingface', 'python', 'code-agent', 'open-source'],
    relatedAgents: ['langgraph', 'crewai', 'autogen', 'agno', 'openai-agents-sdk'],
    coverThumb: '/blog/smolagents-2026-official.jpg',
    coverThumbAlt: 'Official smolagents brand image',
    coverThumbCredit: 'Official brand image from smolagents',
    coverThumbSource: 'https://github.com/huggingface/smolagents',
    content: `
<p>The AI agent ecosystem has a bloat problem: most "minimal" frameworks still pull in a graph engine, a memory layer, a vector store, and a telemetry stack. <strong>smolagents</strong>, released by Hugging Face in late 2024, is the rebuttal. The entire library is a few hundred lines, it has <strong>30,000+ stars</strong>, and its central thesis is almost confrontational: agents should express their actions as <strong>Python code</strong>, not as JSON tool-call dictionaries.</p>

<p>If you already use a heavier framework from our <a href="/">directory</a> like <a href="/agent/langgraph/">LangGraph</a> or <a href="/agent/agno/">Agno</a>, smolagents is worth understanding as the "what if we deleted everything optional" end of the spectrum.</p>

<figure>
  <img src="/blog/smolagents-2026-hero.jpg" alt="A minimal glowing code bracket with a small bird representing a lightweight agent" width="1000" height="667" loading="lazy" decoding="async" />
  <figcaption>smolagents: the whole agent is a loop that writes and executes Python.</figcaption>
</figure>

<h2>Code agents, not JSON agents</h2>

<p>The defining feature is the <strong>CodeAgent</strong>. Instead of the model emitting a structured tool call like <code>{"tool": "search", "args": {...}}</code>, the model writes a snippet of Python that imports tools and calls them. A runtime executes that snippet and feeds the output back. The argument is that models are already great at Python, so letting them use it directly removes a translation layer and unlocks composition (a loop, a list comprehension) for free.</p>

<pre><code>from smolagents import CodeAgent, DuckDuckGoSearchTool, VisitWebpageTool
agent = CodeAgent(tools=[DuckDuckGoSearchTool(), VisitWebpageTool()], model=model)
agent.run("What is the latest stable version of PyTorch?")</code></pre>

<p>That is the whole mental model. There is also a <code>ToolCallingAgent</code> if you prefer the JSON style, plus multi-agent orchestration and Hub-deployed tools.</p>

<h2>What you get for roughly a thousand lines</h2>

<ul>
  <li><strong>Hub-native.</strong> Tools are discoverable and shareable on the Hugging Face Hub, so you can reuse agents and tools the community publishes.</li>
  <li><strong>Secure execution.</strong> Code runs in a sandboxed interpreter with an allow-list, because executing model-written Python is, by definition, risky.</li>
  <li><strong>Model-agnostic.</strong> Any HF-compatible chat model, OpenAI, Anthropic, or local.</li>
  <li><strong>Multi-agent out of the box.</strong> One agent can delegate to another via a <code>ManagedAgent</code>.</li>
</ul>

<h2>Where it fits vs the bigger frameworks</h2>

<table>
<thead><tr><th></th><th>smolagents</th><th>LangGraph</th><th>CrewAI</th><th>Agno</th></tr></thead>
<tbody>
<tr><td>Size</td><td>~1,000 LOC</td><td>Large</td><td>Medium</td><td>Medium-large</td></tr>
<tr><td>Action format</td><td>Python code</td><td>Graph steps</td><td>Role tasks</td><td>Python tools</td></tr>
<tr><td>Best at</td><td>Simplicity, teaching</td><td>Control</td><td>Roles</td><td>Scale + ops</td></tr>
<tr><td>Onboarding</td><td>Minutes</td><td>Hours</td><td>Hours</td><td>Hours</td></tr>
</tbody>
</table>

<h2>Who it is for</h2>

<p><strong>smolagents is for</strong> developers who want to understand an agent from the inside out, who prefer reading source to reading docs, and who are happy composing their own memory/RAG on top. It is also the best teaching tool in the category — you can read the whole thing on a flight. <strong>It is not</strong> a turnkey platform; if you need tracing, hosted memory, and a control plane, <a href="/agent/agno/">Agno</a> or <a href="/agent/langgraph/">LangGraph</a> will save you weeks.</p>

<h2>Bottom line</h2>

<p>smolagents is a deliberate provocation: most of your agent framework is optional. For a surprising number of use cases, a loop that writes and runs Python is all you need — and you can read every line of it.</p>

<p>See how it compares in our <a href="/">agent directory</a>.</p>

<h2>FAQ (frequently asked questions)</h2>

<h3>What does small mean for this library?</h3>
<p>The guide describes a deliberately minimal, code-oriented agent library from Hugging Face. Check the repository for the current dependency list.</p>

<h3>Does it require a vector store to run?</h3>
<p>Not as a prerequisite in the design described here. Verify current requirements in the official documentation.</p>

<h3>Is it maintained by Hugging Face?</h3>
<p>Yes, it is released by Hugging Face; the linked repository is the authoritative source for its status.</p>

<h2>When smolagents is the right tool — and when it isn't</h2>
<p>smolagents is deliberately small: agents write and run short pieces of code to call tools, instead of routing every action through a large JSON tool schema. That makes it unusually easy to read and to teach, and it keeps the moving parts visible when you are learning how agent loops actually work.</p>
<ul>
  <li><strong>Pick it if</strong> you want a minimal library you can read end to end, you are prototyping a code-acting agent, or you are teaching a workshop where the whole stack has to fit into one session.</li>
  <li><strong>Skip it if</strong> you need production-grade observability, multi-team governance, long-running state, or a large ecosystem of prebuilt integrations. Those are the problems bigger frameworks were built to solve.</li>
  <li><strong>Before you commit</strong>, decide where generated code is allowed to run. A code-first agent is only as safe as its sandbox: a local prototype is fine, but anything handling untrusted input or production credentials needs an isolated runtime and explicit limits before it leaves your laptop.</li>
</ul>
<p>It is worth separating "small library" from "small system" as well. The library stays small, but the model, the tools, the sandbox and the logs remain your responsibility. Teams that expect the framework to supply those pieces usually end up rebuilding them — a reasonable choice, as long as it is deliberate.</p>

<h2>Official sources</h2>
<p>Product names, features and plan details above can be checked against the projects' own sites and documentation. Primary sources: <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener">langchain-ai.github.io</a>, <a href="https://crewai.com" target="_blank" rel="noopener">crewai.com</a>, <a href="https://microsoft.github.io/autogen/" target="_blank" rel="noopener">microsoft.github.io</a>, <a href="https://www.agno.com" target="_blank" rel="noopener">agno.com</a>, <a href="https://github.com/agno-agi/agno" target="_blank" rel="noopener">github.com</a>. Figures quoted in this guide are published by the projects, not measured by this site.</p>
`,
  },
  {
    slug: 'llama-index-2026',
    title: 'LlamaIndex in 2026: From RAG Library to the Document Processing Platform',
    excerpt:
      'LlamaIndex (52K stars) quietly became the default layer between your data and your LLM. We cover what it does in 2026, where it ends and an agent framework begins, and how it relates to the frameworks in our directory.',
    date: '2026-10-23',
    author: 'AI Agents Hub',
    readingTime: 9,
    tags: ['rag', 'data', 'framework', 'llamaindex', 'python', 'agents'],
    relatedAgents: ['langgraph', 'crewai', 'autogen', 'notebooklm', 'dify', 'perplexity'],
    coverThumb: '/blog/llama-index-2026-official.jpg',
    coverThumbAlt: 'Official LlamaIndex product image',
    coverThumbCredit: 'Official product image from LlamaIndex',
    coverThumbSource: 'https://github.com/run-llama/llama_index',
    content: `
<p>For a while LlamaIndex was shorthand for "the RAG library" — the thing you reached for when you wanted a model to answer questions over your PDFs. In 2026 that description undersells it. Now <strong>52,000+ stars</strong> deep and rebranded around being the "document processing platform for AI," LlamaIndex has grown into the data layer that most agent stacks quietly stand on. If an agent in our <a href="/">directory</a> needs to read, index, or reason over private data, LlamaIndex is probably somewhere in the plumbing.</p>

<figure>
  <img src="/blog/llama-index-2026-hero.jpg" alt="A tower of glowing documents emitting beams into a constellation of stars" width="1000" height="667" loading="lazy" decoding="async" />
  <figcaption>LlamaIndex turns messy documents into queryable, agent-ready indexes.</figcaption>
</figure>

<h2>The job it actually does</h2>

<p>At its core LlamaIndex solves the boring, high-value problem of <strong>getting the right context to the model</strong>. You load documents, it chunks and embeds them, builds an index, and serves retrieval. But the surface has expanded well past naive vector search:</p>

<ul>
  <li><strong>Many index types.</strong> Vector, tree, keyword, and graph indexes, often combined, so retrieval fits the shape of the data rather than the other way around.</li>
  <li><strong>Structured + unstructured.</strong> It can turn natural-language questions into SQL, query APIs, and route between data sources.</li>
  <li><strong>Agents and workflows.</strong> LlamaIndex now ships agent and multi-step "workflow" primitives, so you can build the retrieval-then-reason loop as a first-class construct.</li>
  <li><strong>Evaluation.</strong> Built-in eval tooling to measure whether your retrieval is actually helping.</li>
</ul>

<h2>A minimal taste</h2>

<pre><code>from llama_index.core import VectorStoreIndex, SimpleDirectoryReader
docs = SimpleDirectoryReader("data").load_data()
index = VectorStoreIndex.from_documents(docs)
query_engine = index.as_query_engine()
print(query_engine.query("What did we decide about pricing in Q3?"))</code></pre>

<p>This five-line shape is why it became the default: the entry point is trivial, and the depth is opt-in.</p>

<h2>Where it ends and a framework begins</h2>

<p>The recurring question is whether LlamaIndex overlaps with <a href="/agent/langgraph/">LangGraph</a> or <a href="/agent/crewai/">CrewAI</a>. The clean way to think about it: LlamaIndex owns <strong>data in</strong>, frameworks own <strong>control flow</strong>. You typically use LlamaIndex to build the retriever and knowledge tools, then hand those tools to an agent orchestrator. Plenty of production systems do exactly that.</p>

<table>
<thead><tr><th></th><th>LlamaIndex</th><th>LangGraph</th><th>CrewAI</th></tr></thead>
<tbody>
<tr><td>Primary job</td><td>Data / RAG</td><td>Control flow</td><td>Role teams</td></tr>
<tr><td>Agents</td><td>Yes (newer)</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Best at</td><td>Retrieval + context</td><td>Orchestration</td><td>Collaboration</td></tr>
<tr><td>License</td><td>MIT</td><td>MIT</td><td>Apache-2.0</td></tr>
</tbody>
</table>

<h2>Who should use it</h2>

<p><strong>Use LlamaIndex if</strong> your problem is "my model needs to know about my documents, my database, my tickets" — i.e. almost every serious internal agent. <strong>Look elsewhere if</strong> you have no private data and just want to orchestrate calls between APIs; then <a href="/agent/langgraph/">LangGraph</a> is a leaner fit. And if you want a hosted, no-infra RAG experience, compare it against <a href="/agent/notebooklm/">NotebookLM</a> before you stand up your own pipeline.</p>

<h2>Bottom line</h2>

<p>LlamaIndex is no longer "just RAG." It is the data substrate of the agent world — the part that decides whether your agent is grounded in reality or hallucinating. Pick it when context is the hard part, which it usually is.</p>

<p>Explore the rest of the data and agent landscape in our <a href="/">directory</a>.</p>

<h2>FAQ (frequently asked questions)</h2>

<h3>Is LlamaIndex still just a RAG library?</h3>
<p>The guide argues that description now undersells it, covering its move toward document processing. See the linked profile for the current framing.</p>

<h3>Are star counts quoted as of today?</h3>
<p>Any figures are from public sources at writing time, not a live counter.</p>

<h3>Where do version numbers on the profile come from?</h3>
<p>From a GitHub REST API snapshot with an explicit checked date; they are not a live feed.</p>

<h2>When LlamaIndex is the right tool — and when it isn't</h2>
<p>LlamaIndex earns its place when the hard part of your project is connecting models to your own data: ingesting documents, choosing a chunking and indexing strategy, and retrieving the right context at query time. If your agent is mostly a prompt plus a few tool calls, a general agent framework — or no framework at all — will be simpler to operate.</p>
<ul>
  <li><strong>Pick it if</strong> your sources are messy and heterogeneous, you expect to change embedding models or vector stores, or you need retrieval quality to be observable and tunable rather than a single hardcoded query.</li>
  <li><strong>Skip it if</strong> you are building a small demo over one clean PDF, or your bottleneck is orchestration and tool use rather than retrieval. The abstraction layers pay off at scale, not on a toy dataset.</li>
  <li><strong>Before you commit</strong>, build the smallest possible evaluation set — a dozen questions with known answers drawn from your own documents — and measure retrieval before you tune prompts. Most disappointing RAG results come from ingestion and chunking, not from the model.</li>
</ul>
<p>The other practical question is operational ownership. Indexes need rebuilding when documents change, connectors need credentials, and retrieval behaviour shifts when you upgrade a dependency. If nobody on the team owns that maintenance, a simpler setup with fewer moving parts will serve readers better than a sophisticated pipeline nobody can debug.</p>

<h2>Official sources</h2>
<p>Product names, features and plan details above can be checked against the projects' own sites and documentation. Primary sources: <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener">langchain-ai.github.io</a>, <a href="https://crewai.com" target="_blank" rel="noopener">crewai.com</a>, <a href="https://microsoft.github.io/autogen/" target="_blank" rel="noopener">microsoft.github.io</a>, <a href="https://notebooklm.google.com" target="_blank" rel="noopener">notebooklm.google.com</a>, <a href="https://dify.ai" target="_blank" rel="noopener">dify.ai</a>. Figures quoted in this guide are published by the projects, not measured by this site.</p>
`,
  },
  {
    slug: 'composio-2026',
    title: 'Composio in 2026: The Tool Layer That Lets Agents Actually Do Things',
    excerpt:
      'Composio (30K stars) is the integration layer most agent builders quietly depend on: 1000+ toolkits, auth, and a sandboxed workbench. Here is why "agent infrastructure" is its own category.',
    date: '2026-10-23',
    author: 'AI Agents Hub',
    readingTime: 9,
    tags: ['tooling', 'integrations', 'infrastructure', 'mcp', 'agents', 'auth'],
    relatedAgents: ['langgraph', 'openai-agents-sdk', 'n8n', 'zapier-agents', 'make', 'manus'],
    coverThumb: '/blog/composio-2026-official.jpg',
    coverThumbAlt: 'Official Composio product screenshot from the project documentation',
    coverThumbCredit: 'Official screenshot from the Composio repository',
    coverThumbSource: 'https://github.com/ComposioHQ/composio',
    content: `
<p>Most agent demos die at the same wall: the model can plan, but it cannot actually <em>do</em> anything. It cannot send the Slack message, create the Notion page, or query the production database, because each of those needs credentials, an API, and a hundred lines of glue. <strong>Composio</strong> is the company (and 30,000-star open-source project) that decided this glue should be a category. It is the "tool layer" sitting under frameworks in our <a href="/">directory</a> like <a href="/agent/langgraph/">LangGraph</a> and the <a href="/agent/openai-agents-sdk/">OpenAI Agents SDK</a>.</p>

<figure>
  <img src="/blog/composio-2026-hero.jpg" alt="Modular glowing interface blocks plugging into a central gear representing tool integration" width="1000" height="667" loading="lazy" decoding="async" />
  <figcaption>Composio exposes 1000+ app actions behind one authenticated, sandboxed interface.</figcaption>
</figure>

<h2>What it provides</h2>

<ul>
  <li><strong>1000+ toolkits.</strong> GitHub, Slack, Notion, Google Workspace, Salesforce, and hundreds more, each exposing typed actions and triggers the agent can call.</li>
  <li><strong>Managed auth.</strong> This is the killer feature. Composio handles OAuth and key-based auth per user per app, so your agent can act on behalf of a user without you building a token vault.</li>
  <li><strong>Tool search and context management.</strong> An agent can discover the right tool at runtime instead of being handed a fixed list, and Composio manages the context window.</li>
  <li><strong>Sandboxed workbench.</strong> A managed environment to execute actions safely.</li>
  <li><strong>MCP support.</strong> Composio publishes remote MCP servers, so it slots into the broader Model Context Protocol ecosystem.</li>
</ul>

<h2>Why this is its own layer</h2>

<p>You can absolutely hand-write a Slack tool and a Notion tool. But the moment you support ten apps, each with its own auth lifecycle, rate limits, and schema drift, you have a maintenance problem that scales with integrations, not with your product. Composio's bet is that <strong>tooling and auth are infrastructure, not features</strong> — and infrastructure should be shared.</p>

<pre><code>from composio_langchain import ComposioToolSet
toolset = ComposioToolSet(entity_id="user_123")
tools = toolset.get_tools(apps=["github", "slack"])</code></pre>

<p>That snippet gives a <a href="/agent/langgraph/">LangGraph</a> or LangChain agent live, authenticated GitHub and Slack actions for a specific user. The auth tokens live in Composio, not in your code.</p>

<h2>Composio vs building it yourself vs Zapier</h2>

<table>
<thead><tr><th></th><th>Composio</th><th>Roll your own</th><th>Zapier Agents</th></tr></thead>
<tbody>
<tr><td>Tool coverage</td><td>1000+</td><td>Whatever you write</td><td>Large, no-code</td></tr>
<tr><td>Auth handling</td><td>Managed</td><td>You build it</td><td>Managed</td></tr>
<tr><td>Code control</td><td>High</td><td>Total</td><td>Low</td></tr>
<tr><td>Best at</td><td>Agent-native apps</td><td>One-off needs</td><td>Non-dev workflows</td></tr>
</tbody>
</table>

<p>For a developer shipping an agent product, Composio beats rolling your own the moment you exceed a handful of integrations. For a non-developer automating across SaaS apps, <a href="/agent/zapier-agents/">Zapier Agents</a> (or <a href="/agent/n8n/">n8n</a> for the self-hosted crowd) stays the faster path.</p>

<h2>Who should use it</h2>

<p><strong>Use Composio if</strong> you are building an agent that must take real actions across many SaaS apps and you do not want to become an auth-infrastructure company. <strong>Skip it if</strong> you only need one or two integrations, or if your entire workflow is internal and better served by self-hosted automation like <a href="/agent/n8n/">n8n</a>.</p>

<h2>Bottom line</h2>

<p>Agents that only think are a novelty; agents that act are a product. Composio is the layer that makes "act" practical, and it is one of the clearest examples of agent infrastructure becoming a standalone category.</p>

<p>See the frameworks and tools it plugs into across our <a href="/">directory</a>.</p>

<h2>FAQ (frequently asked questions)</h2>

<h3>Is Composio an agent framework?</h3>
<p>No. It is described as the tool and integration layer that lets an agent act on external services, not an orchestration framework.</p>

<h3>Does it handle credentials for those services?</h3>
<p>That is the problem it addresses. Check the official documentation for the current auth model and supported providers.</p>

<h3>Are connector counts quoted as verified figures?</h3>
<p>No. We do not publish a measured connector count; treat any such number as a claim from the provider.</p>

<h2>When Composio is the right tool — and when it isn't</h2>
<p>Composio addresses a specific, unglamorous problem: an agent that can reason is not useful until it can actually act in Gmail, Slack, GitHub or a CRM, with credentials and permissions handled correctly. It supplies those connectors and the authentication plumbing around them, so you do not maintain one OAuth integration per tool.</p>
<ul>
  <li><strong>Pick it if</strong> your agent needs to call many third-party SaaS APIs, you want managed authentication instead of storing user tokens yourself, or you are shipping to users who will connect their own accounts.</li>
  <li><strong>Skip it if</strong> your agent only calls one or two internal endpoints you control, or your deployment policy forbids routing credentials through an external service.</li>
  <li><strong>Before you commit</strong>, map the exact scopes each connector requests and decide what your agent is allowed to do with write access. Tool integration shifts the risk from "the model said something wrong" to "the model did something wrong", and the second is much harder to undo.</li>
</ul>
<p>For an evaluation, start with read-only actions and a single user account. Once the agent's behaviour is predictable, add write actions one at a time with explicit confirmation. That sequence catches most permission surprises before they reach a real workspace, and it gives you a clear audit trail when something does go wrong.</p>

<h2>Official sources</h2>
<p>Product names, features and plan details above can be checked against the projects' own sites and documentation. Primary sources: <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener">langchain-ai.github.io</a>, <a href="https://openai.github.io/openai-agents-python/" target="_blank" rel="noopener">openai.github.io</a>, <a href="https://github.com/openai/openai-agents-python" target="_blank" rel="noopener">github.com</a>, <a href="https://n8n.io" target="_blank" rel="noopener">n8n.io</a>, <a href="https://zapier.com/agents" target="_blank" rel="noopener">zapier.com</a>. Figures quoted in this guide are published by the projects, not measured by this site.</p>
`,
  },
  {
    slug: 'gpt-researcher-2026',
    title: 'GPT Researcher in 2026: The Autonomous Deep-Research Agent That Beats the Hype',
    excerpt:
      'GPT Researcher (30K stars) autonomousally plans searches, reads sources, and writes cited reports. We compare it to Perplexity and NotebookLM, and show where it earns its keep.',
    date: '2026-10-23',
    author: 'AI Agents Hub',
    readingTime: 9,
    tags: ['research', 'agents', 'deep-research', 'open-source', 'rag'],
    relatedAgents: ['perplexity', 'notebooklm', 'elicit', 'consensus', 'langgraph'],
    coverThumb: '/blog/gpt-researcher-2026-official.jpg',
    coverThumbAlt: 'Official GPT Researcher brand image',
    coverThumbCredit: 'Official brand image from GPT Researcher',
    coverThumbSource: 'https://github.com/assafelovic/gpt-researcher',
    content: `
<p>"Deep research" went from buzzword to product line in 2025, and every model vendor shipped one. But the open-source original is still one of the most-used: <strong>GPT Researcher</strong>, a 30,000-star project that runs the same loop — plan, search, read, synthesise, cite — entirely on infrastructure you control. If you use <a href="/agent/perplexity/">Perplexity</a> for quick answers or <a href="/agent/notebooklm/">NotebookLM</a> for document Q&amp;A, GPT Researcher is the self-hosted, source-crawling cousin in our <a href="/">directory</a> family.</p>

<figure>
  <img src="/blog/gpt-researcher-2026-hero.jpg" alt="A glowing magnifying glass scanning documents that converge into a report" width="1000" height="667" loading="lazy" decoding="async" />
  <figcaption>GPT Researcher fans out searches, reads the results, and assembles a cited report.</figcaption>
</figure>

<h2>How it works</h2>

<p>Given a research question, GPT Researcher does what a competent human analyst would, minus the coffee:</p>

<ul>
  <li><strong>Decomposes the question.</strong> It generates a set of sub-questions and an outline before touching the web.</li>
  <li><strong>Fans out searches.</strong> Multiple agents run parallel web searches so coverage is broad, not a single query's worth.</li>
  <li><strong>Reads and filters sources.</strong> It visits pages, scrapes the relevant text, and ranks what actually answers the sub-questions.</li>
  <li><strong>Synthesises with citations.</strong> The final report is written against the gathered evidence, with sources attached.</li>
</ul>

<h2>A minimal run</h2>

<pre><code>from gpt_researcher import GPTResearcher
async def research(query):
    researcher = GPTResearcher(query=query, report_type="research_report")
    await researcher.conduct_research()
    return await researcher.write_report()</code></pre>

<p>There is also a web UI for interactive research and a "detailed report" mode for long-form output.</p>

<h2>GPT Researcher vs the hosted research tools</h2>

<table>
<thead><tr><th></th><th>GPT Researcher</th><th>Perplexity</th><th>NotebookLM</th></tr></thead>
<tbody>
<tr><td>Where it runs</td><td>Self-hosted</td><td>Hosted</td><td>Hosted</td></tr>
<tr><td>Source scope</td><td>Open web, deep</td><td>Open web, fast</td><td>Your uploads</td></tr>
<tr><td>Citations</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Best at</td><td>Long reports</td><td>Quick answers</td><td>Doc-grounded Q&amp;A</td></tr>
<tr><td>License</td><td>Apache-2.0</td><td>Commercial</td><td>Commercial</td></tr>
</tbody>
</table>

<p>The short version: <a href="/agent/perplexity/">Perplexity</a> wins on latency and zero-setup for a one-off question. <a href="/agent/notebooklm/">NotebookLM</a> wins when the corpus is yours and private. GPT Researcher wins when you want a thorough, cited, multi-section report generated on your own infrastructure and your own model keys — the same "own your stack" argument that drives the rest of the open-source agent world.</p>

<h2>Who should use it</h2>

<p><strong>Use GPT Researcher if</strong> you produce research reports regularly — market briefs, literature reviews, competitive teardowns — and you want them generated, cited, and reproducible without sending every query to a third party. <strong>Skip it if</strong> you just need a fast answer (use <a href="/agent/perplexity/">Perplexity</a>) or you are working strictly inside a fixed set of documents (use <a href="/agent/notebooklm/">NotebookLM</a>).</p>

<h2>Bottom line</h2>

<p>GPT Researcher is the open-source proof that "deep research" is a solvable agent pattern, not a vendor lock-in. For teams that live on written reports, it turns a day of analyst time into a prompt and a coffee break.</p>

<p>Compare it with the rest of the research and agent tools in our <a href="/">directory</a>.</p>

<h2>FAQ (frequently asked questions)</h2>

<h3>Is this the same as a vendor deep-research feature?</h3>
<p>No. It is an open-source project whose plan-search-read-synthesise loop the guide describes; it is not a hosted vendor feature.</p>

<h3>Do I need my own API keys?</h3>
<p>Typically yes for model and search access, but check the repository current setup instructions rather than assuming.</p>

<h3>Does this guide reproduce its research outputs?</h3>
<p>No. It links to official sources and describes the published workflow; there are no reproduced reports here.</p>

<h2>When GPT Researcher is the right tool — and when it isn't</h2>
<p>The decision is less about model quality and more about the shape of the deliverable. GPT Researcher is built around a research plan: it decomposes a question, searches, reads, and writes a cited report. If what you need is a one-line answer, a chat assistant or a search engine with citations will get you there faster and cheaper.</p>
<ul>
  <li><strong>Pick it if</strong> you need a reusable written artefact — a landscape brief, a competitor summary, a literature scan — where every claim should carry a source and the whole report should be reproducible later.</li>
  <li><strong>Skip it if</strong> you need sub-second answers inside another product, you work from a fixed private corpus that never touches the open web, or you cannot supply search and model API keys.</li>
  <li><strong>Before you commit</strong>, run one question whose answer you already know, and read the citations rather than just the summary. Research agents can produce a confident, well-formatted report whose sources do not actually support the sentence they are attached to; that failure is much easier to spot on a familiar topic.</li>
</ul>
<p>Be clear about who owns the result, too. A generated report is a first draft for a person to check, not a finished assessment — the same review step you would apply to a junior analyst's work. If your workflow already has that review step, the tool saves real time. If it does not, adding the tool without adding the review just makes unverified text arrive faster.</p>

<h2>Official sources</h2>
<p>Product names, features and plan details above can be checked against the projects' own sites and documentation. Primary sources: <a href="https://www.perplexity.ai" target="_blank" rel="noopener">perplexity.ai</a>, <a href="https://notebooklm.google.com" target="_blank" rel="noopener">notebooklm.google.com</a>, <a href="https://elicit.com" target="_blank" rel="noopener">elicit.com</a>, <a href="https://consensus.app" target="_blank" rel="noopener">consensus.app</a>, <a href="https://langchain-ai.github.io/langgraph/" target="_blank" rel="noopener">langchain-ai.github.io</a>. Figures quoted in this guide are published by the projects, not measured by this site.</p>
`,
  },
];
