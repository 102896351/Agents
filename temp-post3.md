<p>Building your first AI coding agent sounds intimidating. It is not. In 30 minutes and with three tools from <a href="/">our 62-agent directory</a>, you can have a working autonomous coding assistant running in VS Code — one that reads your project, edits files, runs tests, and plans its own next steps. This guide skips the theory and gets you to a working result.</p>

<h2>What you are building</h2>

<p>An AI coding agent is a loop: <strong>observe → think → act → repeat</strong>. The model looks at your codebase, decides what to do, does it, checks the result, and keeps going until the task is done. You set the goal; the agent handles the execution. This is the pattern behind every tool in our directory — from <a href="/agent/claude-code">Claude Code</a> to <a href="/agent/cline">Cline</a> — and you can build a simple version of it yourself.</p>

<p>We are going to use three tools in sequence:</p>

<ol>
<li><strong><a href="/agent/cline">Cline</a></strong> — the fastest way to have a working agent in VS Code today (5 minutes)</li>
<li><strong><a href="/agent/claude-code">Claude Code</a></strong> — if you want the terminal-native experience with a stronger model (10 minutes)</li>
<li><strong><a href="/agent/langgraph">LangGraph</a></strong> — if you want to understand and build the orchestration layer yourself (15 minutes)</li>
</ol>

<p>You only need to follow all three if you want to understand the stack end-to-end. For a working agent today, start with step one.</p>

<figure>
  <img src="/blog/build-first-ai-coding-agent-hero.jpg" alt="A laptop screen split between VS Code on the left showing a coding agent chat panel and a terminal on the right showing a file being modified, with a simple arrowed loop diagram below showing Observe-Think-Act-Repeat" width="1200" height="630" loading="lazy" decoding="async" />
  <figcaption>The goal: a coding agent that observes your project, thinks about what to do, acts by editing files and running commands, and loops until the task is done.</figcaption>
</figure>

<h2>Step 1: Install Cline in VS Code (5 minutes)</h2>

<p><a href="/agent/cline">Cline</a> is the fastest on-ramp. It is a VS Code extension that turns your existing editor into an autonomous coding agent. You bring your own API key; Cline brings the agentic loop, the file operations, and the web browsing tools.</p>

<p><strong>What you need:</strong> VS Code, an API key from OpenRouter or Anthropic, and 5 minutes.</p>

<p>Open VS Code, go to Extensions, search for "Cline," and install it. Once installed, click the Cline icon in the sidebar. You will see a prompt to enter an API provider and key. Choose OpenRouter (it aggregates multiple models including Claude and GPT at wholesale prices) and paste your key. That's the entire setup.</p>

<p>Open a project folder in VS Code, click the Cline chat panel, and type:</p>

<blockquote><p>Read this project and tell me what technology stack it uses.</p></blockquote>

<p>Cline will read the package.json (or equivalent), scan the directory structure, and give you an answer. That single action — read, understand, answer — is the agent loop running. Everything else is an extension of that pattern.</p>

<figure>
  <img src="/blog/build-first-ai-coding-agent-cline.jpg" alt="VS Code with the Cline extension open in the left sidebar, showing a chat conversation where the user asks about the project and Cline responds with a description of the tech stack and directory structure" width="1000" height="750" loading="lazy" decoding="async" />
  <figcaption>Cline in VS Code: type a task, Cline reads your project and responds. That observation-think-act loop is the foundation of every coding agent.</figcaption>
</figure>

<h2>Step 2: Make Cline edit files and run commands (5 minutes)</h2>

<p>Having Cline answer questions is the beginning. Making it edit files and run commands is where it becomes useful. Try this in the same project:</p>

<blockquote><p>In src/, find every file that uses <code>var</code> and refactor it to use <code>const</code>. Run <code>npm test</code> to verify nothing broke.</p></blockquote>

<p>Cline will:</p>

<ol>
<li>Glob for all .js/.ts files in src/</li>
<li>Read each one, identify <code>var</code> declarations</li>
<li>Rewrite them with <code>const</code></li>
<li>Run the test suite</li>
<li>Report the results</li>
</ol>

<p>You watch it work. You can interrupt at any point. When it finishes, you have a diff — a real code change in your project, verified by your own test suite. This is the agent working as an autonomous coding assistant, not just a chatbot.</p>

<h2>Step 3: Add Claude Code for harder tasks (10 minutes)</h2>

<p><a href="/agent/claude-code">Claude Code</a> is the terminal-native alternative. If you find yourself wanting a stronger model for complex refactors — or if you want to understand what the harness architecture looks like — it is worth installing.</p>

<p>On macOS or Linux:</p>

<pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>

<p>On Windows (PowerShell):</p>

<pre><code>irm https://claude.ai/install.ps1 | iex</code></pre>

<p>Then:</p>

<pre><code>claude</code></pre>

<p>Navigate to your project directory first, then run <code>claude</code>. The terminal will open an interactive session with full access to your codebase, your shell, and the Claude model. The loop is the same as Cline's; the model is stronger, and the interface is the terminal rather than a VS Code panel.</p>

<p>Claude Code's key advantage for hard tasks is the context management: it reads your entire project by default, it can run multi-file refactors across dozens of files in one session, and it reports its diffs explicitly so you can review before anything is committed. For the gnarly refactors that Cline handles but struggles with, Claude Code is the next step.</p>

<figure>
  <img src="/blog/build-first-ai-coding-agent-compare.jpg" alt="Two side-by-side panels: VS Code with Cline on the left showing a chat and file edits, and a terminal with Claude Code on the right showing a multi-file refactor in progress with a diff output" width="1200" height="630" loading="lazy" decoding="async" />
  <figcaption>Same task, two interfaces: Cline in VS Code (left) and Claude Code in the terminal (right) — both running the same observe-think-act loop.</figcaption>
</figure>

<h2>Step 4: Understand the orchestration with LangGraph (15 minutes)</h2>

<p>If you want to understand how the agent loop works under the hood — or if you want to build your own agent from scratch — <a href="/agent/langgraph">LangGraph</a> is the right framework. It is a Python library for building agentic workflows: you define the nodes (read file, write file, run command, call model) and the edges (how the workflow moves from node to node), and LangGraph runs the loop.</p>

<p>LangGraph is overkill for using an existing agent. It is essential for building new agentic systems or custom workflows that no existing tool handles. If you want to understand the architecture — or if you are a team building an internal agent — this is where to look.</p>

<p>The minimal LangGraph agent looks like this:</p>

<pre><code>from langgraph.graph import StateGraph
from langchain_anthropic import ChatAnthropic

llm = ChatAnthropic(model="claude-sonnet-4-5")

def act_node(state):
    # Call the model with the current task
    response = llm.invoke(state["messages"])
    return {"messages": [response]}

graph = StateGraph()
graph.add_node("act", act_node)
graph.set_entry_point("act")
graph.set_finish_point("act")
app = graph.compile()

# Run it
for event in app.stream({"messages": ["refactor all var to const in src/"]}):
    print(event)</code></pre>

<p>This is approximately 15 lines of code that reproduce the core agent loop. Everything in the complex tools in our directory — the tools, the context management, the permission systems — is an elaboration of this pattern. LangGraph and <a href="/agent/mastra">Mastra</a> (the TypeScript equivalent) are the frameworks for building those elaborations.</p>

<h2>The tool ladder: when to use which</h2>

<p>You do not need all three. Here is the honest decision tree:</p>

<figure>
  <img src="/blog/build-first-ai-coding-agent-ladder.jpg" alt="A decision ladder showing three levels: Cline at the bottom (start here, fastest), Claude Code in the middle (upgrade when you need more power), LangGraph at the top (build your own when you need custom workflows)" width="1200" height="630" loading="lazy" decoding="async" />
  <figcaption>The tool ladder: start at the bottom, upgrade when you hit the limit of what the current tool can do.</figcaption>
</figure>

<p><strong>Start with <a href="/agent/cline">Cline</a></strong> if: you use VS Code, you want zero infrastructure, and you want a working agent in 5 minutes.</p>

<p><strong>Add <a href="/agent/claude-code">Claude Code</a></strong> if: you live in the terminal, you run complex multi-file refactors, or you need the strongest available model for hard tasks.</p>

<p><strong>Learn <a href="/agent/langgraph">LangGraph</a></strong> if: you want to understand the architecture, you work on agent infrastructure, or you need a custom workflow that no existing tool handles.</p>

<h2>Three things to do on day one</h2>

<p>Install <a href="/agent/cline">Cline</a> today and run one task with it — a real task in a real project, not a toy example. A refactor, a test generation, a bug investigation. The gap between "reading about agents" and "having an agent do work for you" is one afternoon.</p>

<p>After that: put a CLAUDE.md or Cline config in your project root that describes your tech stack, your conventions, and your most common commands. This is the single highest-leverage configuration step — it costs 10 minutes and makes the agent dramatically more useful from the first message.</p>

<p>Third: set a habit of reviewing diffs before the agent commits. Every agent in our directory supports <code>git diff</code> as the review step. Do not skip it. The agent is strong; the review is yours.</p>

<h2>What comes next</h2>

<p>Once you have a working agent in your workflow, the natural next steps are:</p>

<ul>
<li>Add MCP servers to give your agent access to your database, your GitHub, or your browser (see our <a href="/agent/claude-code">Claude Code</a> and <a href="/agent/cline">Cline</a> profiles for MCP setup)</li>
<li>Configure skills and hooks for your project's specific conventions (see the <a href="/agent/claude-code">Claude Code</a> advanced config guide in our directory)</li>
<li>Explore multi-agent orchestration for compound tasks that require different specialized agents working together</li>
</ul>

<p>The 62 agents in our directory cover every layer of this stack — from the end-user tools (Cline, Claude Code, Cursor) to the orchestration frameworks (LangGraph, Mastra, CrewAI) to the protocols that connect them (MCP). Start with one, use it until you hit its limit, and move up the ladder.</p>

<h2>Bottom line</h2>

<p>You can have a working AI coding agent in VS Code in 5 minutes. <a href="/agent/cline">Cline</a> with an OpenRouter key is the fastest path. <a href="/agent/claude-code">Claude Code</a> is the upgrade when you need more power. <a href="/agent/langgraph">LangGraph</a> is for understanding the architecture and building custom workflows. The observe-think-act loop that powers all of them is the same — once you see it, you will recognize it everywhere in the agent ecosystem.</p>

<p>See the full profiles — benchmarks, pricing, and setup guides — for <a href="/agent/cline">Cline</a>, <a href="/agent/claude-code">Claude Code</a>, and <a href="/agent/langgraph">LangGraph</a> in our directory.</p>
