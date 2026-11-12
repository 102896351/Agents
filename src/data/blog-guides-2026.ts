// ============================================================
//  Blog guides, batch 1 (2026-11-12)
//
//  Written to the current content rules:
//   - English copy, no invented benchmarks, versions or hands-on claims.
//   - Every product name, category and link points to a real profile or an
//     upstream official source.
//   - Cover thumbnails are real official screenshots / output / architecture
//     images (never drawn mockups), with credit and upstream source.
//   - Demo videos are URL-only embeds. No video file is downloaded or hosted.
// ============================================================
import type { BlogPost } from './blog';

export const guidePosts2026: BlogPost[] = [
  {
    slug: 'official-agent-demo-videos-2026',
    title: '10 AI Agents With Official Demo Videos You Can Watch First',
    excerpt: "Twenty-two agent profiles on this site now embed the project's own demo video. Start with these ten, and use the footage to check what a README cannot show you.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 8,
    tags: ['video', 'demo', 'coding', 'framework', 'research', 'open-source'],
    relatedAgents: [
      'aider', 'autogpt', 'metagpt', 'gpt-researcher', 'agent-framework',
      'google-adk', 'lightrag', 'pentestgpt', 'swe-agent', 'voltagent',
    ],
    coverThumb: '/blog/official-agent-demo-videos-2026-thumb.jpg',
    coverThumbAlt: 'Official Aider terminal and editor screenshot from the Aider project documentation',
    coverThumbCredit: 'Official Aider screenshot of the editor copy-paste workflow',
    coverThumbSource: 'https://github.com/Aider-AI/aider/blob/main/aider/website/assets/copypaste.jpg',
    videos: [
      {
        src: 'https://www.youtube.com/embed/df8afeb1FY8',
        kind: 'youtube',
        title: 'Aider — official demo video',
        caption: 'Embedded from the Aider project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=df8afeb1FY8',
      },
      {
        src: 'https://agpt.co/videos/otto-team-demo-v1-1080.mp4',
        kind: 'mp4',
        title: 'AutoGPT — official product demo',
        caption: 'Served from the AutoGPT project site; not re-hosted here.',
        sourceUrl: 'https://agpt.co',
      },
      {
        src: 'https://www.youtube.com/embed/uT75J_KG_aY',
        kind: 'youtube',
        title: 'MetaGPT — official demo video',
        caption: 'Embedded from the MetaGPT project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=uT75J_KG_aY',
      },
      {
        src: 'https://www.loom.com/embed/04ebffb6ed2a4520a27c3e3addcdde20',
        kind: 'iframe',
        title: 'GPT Researcher — official walkthrough',
        caption: 'Embedded from the project Loom walkthrough.',
        sourceUrl: 'https://www.loom.com/share/04ebffb6ed2a4520a27c3e3addcdde20',
      },
    ],
    content: `
<p><strong>The short version:</strong> twenty-two profiles in this directory now carry a demo video published by the project itself. If you are comparing tools, watching two minutes of real footage usually settles questions that a README cannot. Below are ten good starting points, what kind of video each one has, and how we decided which links were safe to embed.</p>

<p>This is a directory of {{AGENT_COUNT}} agents, not a review site. We do not run hands-on tests, and none of the descriptions below are test results. What we do is collect public, checkable material — official repositories, official screenshots, official diagrams and the project's own videos — and put it next to a structured profile so you can compare without opening twenty tabs.</p>

<h2>Why a demo video tells you what a README cannot</h2>

<p>A README is written by the people who built the tool. That makes it excellent for installation steps, configuration flags and the intended architecture. It is less useful for answering the questions a person actually has before installing anything: how much clicking is involved, whether the tool runs in a terminal or a browser, what a finished result looks like, and how long a single task takes to appear on screen.</p>

<p>Video answers those questions incidentally. You see the shape of the interface, the order of the steps, and whether the output is a chat transcript, a diff, a dashboard or a generated file. You also see the rough edges — pauses, retries, setup screens — that a polished feature list tends to leave out. None of that is a benchmark. It is simply a different kind of evidence, and it is cheap to collect if the project has already published it.</p>

<p>There is a second, more practical reason to care: a lot of agent projects look identical when described in prose. "An open-source framework for autonomous agents" could describe dozens of repositories. Footage is often the fastest way to tell a visual editor from a command-line harness, or a research pipeline from a chat assistant, before you invest time in a setup guide.</p>

<h2>Ten profiles worth opening first</h2>

<p>These ten are not ranked by quality. They are chosen because each one shows a different kind of tool, and because the video is published by the project itself rather than by a third party. The "format" column tells you what to expect: a native MP4 plays inline without leaving the page, while YouTube and Loom embeds open the platform's own player.</p>

<table>
  <thead>
    <tr><th>Profile</th><th>Category</th><th>License</th><th>Video format</th><th>Upstream project</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/aider/">Aider</a></td><td>coding</td><td>open-source</td><td>YouTube embed</td><td><a href="https://aider.chat" target="_blank" rel="noopener">aider.chat</a></td></tr>
    <tr><td><a href="/agent/autogpt/">AutoGPT</a></td><td>framework</td><td>open-source</td><td>Native MP4</td><td><a href="https://agpt.co" target="_blank" rel="noopener">agpt.co</a></td></tr>
    <tr><td><a href="/agent/metagpt/">MetaGPT</a></td><td>framework</td><td>open-source</td><td>YouTube embed</td><td><a href="https://github.com/geekan/MetaGPT" target="_blank" rel="noopener">GitHub</a></td></tr>
    <tr><td><a href="/agent/gpt-researcher/">GPT Researcher</a></td><td>research</td><td>open-source</td><td>Loom embed</td><td><a href="https://gptr.dev" target="_blank" rel="noopener">gptr.dev</a></td></tr>
    <tr><td><a href="/agent/agent-framework/">Microsoft Agent Framework</a></td><td>framework</td><td>open-source</td><td>YouTube embed</td><td><a href="https://aka.ms/agent-framework" target="_blank" rel="noopener">Microsoft docs</a></td></tr>
    <tr><td><a href="/agent/google-adk/">Google ADK</a></td><td>framework</td><td>open-source</td><td>YouTube embed</td><td><a href="https://google.github.io/adk-docs" target="_blank" rel="noopener">ADK docs</a></td></tr>
    <tr><td><a href="/agent/lightrag/">LightRAG</a></td><td>research</td><td>open-source</td><td>YouTube embed</td><td><a href="https://github.com/HKUDS/LightRAG" target="_blank" rel="noopener">GitHub</a></td></tr>
    <tr><td><a href="/agent/pentestgpt/">PentestGPT</a></td><td>research</td><td>open-source</td><td>YouTube embed</td><td><a href="https://github.com/GreyDGL/PentestGPT" target="_blank" rel="noopener">GitHub</a></td></tr>
    <tr><td><a href="/agent/swe-agent/">SWE-agent</a></td><td>coding</td><td>open-source</td><td>YouTube embed</td><td><a href="https://swe-agent.com" target="_blank" rel="noopener">swe-agent.com</a></td></tr>
    <tr><td><a href="/agent/voltagent/">VoltAgent</a></td><td>framework</td><td>open-source</td><td>YouTube embed</td><td><a href="https://voltagent.dev" target="_blank" rel="noopener">voltagent.dev</a></td></tr>
  </tbody>
</table>

<p>Four of the videos above are embedded further down this page, so you can sample the range without leaving the article. The rest are on their own profile pages, alongside the same structured fields used across the directory: category, license, self-hosting, version status, official screenshots where the project publishes them, and pick-if / skip-if notes. Those notes are editorial judgement, not measured results.</p>

<h2>How we decided what to embed</h2>

<p>The rule is deliberately narrow. We only use a link that appears in the project's own README or documentation, or on its official site or channel. We do not download or re-host the file: the page stores the URL, and the player loads it from the original host. That keeps the storage simple, avoids stale copies, and makes it obvious where the material came from — every video carries an upstream source link.</p>

<p>Not every candidate survived. A README that links to a songs-and-memes clip is not a product demo. A set of deepfake samples built around public figures is not an introduction to the tool, and we left it out. Links that point at a web page with a video filename in the query string are not playable files, so they were dropped too. Signed attachment URLs that expire were skipped rather than published as a link that would break later.</p>

<p>We also cap the number of embeds on any single page. A profile with six demos does not need six players; two representative clips plus a link to the upstream repository is more useful than a wall of iframes. The same reasoning shaped this article: a shortlist with a table, four embedded examples, and clear paths to everything else.</p>

<h2>Official sources</h2>

<p>Everything in the table traces back to a public project home. If a link on this page stops working, these are the places to check first:</p>

<ul>
  <li><a href="https://github.com/Aider-AI/aider" target="_blank" rel="noopener">Aider repository</a> — source of the official terminal and editor screenshots used across the site.</li>
  <li><a href="https://github.com/Significant-Gravitas/AutoGPT" target="_blank" rel="noopener">AutoGPT repository</a> and <a href="https://agpt.co" target="_blank" rel="noopener">project site</a>, which hosts the MP4 demo.</li>
  <li><a href="https://github.com/microsoft/agent-framework" target="_blank" rel="noopener">Microsoft Agent Framework repository</a>.</li>
  <li><a href="https://github.com/google/adk-python" target="_blank" rel="noopener">Google ADK Python repository</a>.</li>
  <li><a href="https://github.com/assafelovic/gpt-researcher" target="_blank" rel="noopener">GPT Researcher repository</a>, where the research flow diagram and walkthrough links live.</li>
</ul>

<h2>Frequently asked questions</h2>

<h3>Are these videos hosted on your site?</h3>
<p>No. We store only the address. MP4 files play from the project's own server, and YouTube, Loom and other platforms load in their own embedded player. Nothing is downloaded, transcoded or re-uploaded by this directory.</p>

<h3>Why do some profiles have no video at all?</h3>
<p>Because the upstream project has not published one that meets the rule above. We would rather leave the slot empty than fill it with a marketing reel, an unrelated clip, or a link that will expire. Profiles without video still carry the same structured fields, version status and — where available — official screenshots or architecture diagrams.</p>

<h3>Does a demo video mean the tool was tested by you?</h3>
<p>No. A video is evidence published by the project, not a hands-on result from this site. Our verdicts and pick-if / skip-if notes are editorial summaries of public information. If a claim matters to your decision, check the upstream repository and the current release notes before relying on it.</p>

<h2>Where to go next</h2>

<p>If you want to keep comparing, the most efficient next stop is one of the profiles above: <a href="/agent/aider/">Aider</a>, <a href="/agent/autogpt/">AutoGPT</a>, <a href="/agent/google-adk/">Google ADK</a>, <a href="/agent/swe-agent/">SWE-agent</a> and <a href="/agent/voltagent/">VoltAgent</a> each illustrate a different shape of agent tooling. For longer reads, see <a href="/blog/agent-architecture-diagrams-2026/">the guide to the official architecture diagrams</a>, <a href="/blog/30-new-agents-november-2026/">the November batch roundup</a>, and <a href="/blog/open-source-coding-aider-vs-cody-vs-continue-2026/">the open-source coding agent comparison</a>. Or just open the <a href="/">full directory</a> and filter by category.</p>
`,
  },

  {
    slug: 'agent-architecture-diagrams-2026',
    title: 'Reading 13 Official Architecture Diagrams: How These Agents Are Wired',
    excerpt: "Thirteen profiles now include a real architecture or flow diagram from the project's own documentation. Here is how to read them, grouped by what each one actually explains.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 9,
    tags: ['architecture', 'technical-diagram', 'framework', 'research', 'open-source'],
    relatedAgents: [
      'agent-desktop', 'agent-s', 'agent-lightning', 'agentic-seek', 'agno',
      'conductor', 'ego-lite', 'gpt-researcher', 'jcode', 'metagpt',
      'semantic-kernel', 'vanna', 'wren-ai',
    ],
    coverThumb: '/blog/agent-architecture-diagrams-2026-thumb.jpg',
    coverThumbAlt: 'Official MetaGPT AFlow diagram showing search space, Monte Carlo tree search and result evaluation',
    coverThumbCredit: 'Official architecture / technical diagram from the MetaGPT project documentation',
    coverThumbSource: 'https://raw.githubusercontent.com/geekan/MetaGPT/main/docs/resources/aflow/AFLOW-method.jpg',
    videos: [
      {
        src: 'https://www.youtube.com/embed/TEjqk0eeNy8',
        kind: 'youtube',
        title: 'Google ADK — official video',
        caption: 'Embedded from the Google ADK project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=TEjqk0eeNy8',
      },
      {
        src: 'https://www.youtube.com/embed/AAgdMhftj8w',
        kind: 'youtube',
        title: 'Microsoft Agent Framework — official video',
        caption: 'Embedded from the Microsoft Agent Framework channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=AAgdMhftj8w',
      },
      {
        src: 'https://www.youtube.com/embed/g21royNJ4fw',
        kind: 'youtube',
        title: 'LightRAG — official video',
        caption: 'Embedded from the LightRAG project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=g21royNJ4fw',
      },
    ],
    content: `
<p><strong>The short version:</strong> thirteen agent profiles now carry a genuine architecture, flow or sequence diagram taken from the project's own documentation. They are not decorative. Grouped together they show three recurring design problems — how work is sequenced, how memory is stored and retrieved, and how a model is connected to real data or a real desktop. This guide lists all thirteen and explains what to look for in each.</p>

<p>We used to exclude diagrams from the image set and only publish interface screenshots. That was too narrow. A screenshot shows what a tool looks like; an architecture diagram shows what the tool <em>is</em>. For anyone deciding between a workflow engine and a retrieval pipeline, the diagram is often the single most informative image a project publishes. So diagrams are now treated as technical illustrations, on the same footing as real UI screenshots and genuine output examples. Marketing banners, logos and plain benchmark charts are still excluded.</p>

<h2>What an architecture diagram is good for</h2>

<p>Read a diagram for boundaries. Boxes usually represent components that can be swapped, configured or deployed separately; arrows represent the flow of a task, a message or a piece of data. If there is a box for a vector store, a cache, a planner, a tool executor or a worker queue, that tells you something concrete about what the project has to maintain — and therefore what you would have to maintain if you adopted it.</p>

<p>Also look for what is missing. A diagram with no persistence component is describing a stateless run. A diagram where every path goes through one orchestrator is describing a central controller, not a peer-to-peer system. A diagram that ends at "LLM" without showing evaluation, retries or human approval is showing the happy path, not the whole system. None of these are defects; they are design choices, and they are much easier to spot in a picture than in a feature list.</p>

<p>One caution: these are the project's own diagrams, so they describe intent, not a verified deployment. We have not validated that every arrow matches the current code. Each image carries a link to the upstream file so you can check the original in context, and the version status on each profile tells you whether the project publishes releases, tags or a rolling stream of changes.</p>

<h2>Three groups worth separating</h2>

<p><strong>Workflows, orchestration and decision paths.</strong> The <a href="/agent/conductor/">Conductor</a> sequence diagram lays out task generation, service configuration and worker orchestration as an ordered exchange. <a href="/agent/agno/">Agno</a> shows a simpler execution flow — plan, tool call, cache, response — which is useful for seeing where a single agent step begins and ends. <a href="/agent/gpt-researcher/">GPT Researcher</a> maps the route from a research question through sub-agents to a final report. <a href="/agent/metagpt/">MetaGPT</a> uses its AFlow diagram to show a search space, Monte Carlo tree search and result evaluation, which is a picture of optimisation rather than of a single run. <a href="/agent/semantic-kernel/">Semantic Kernel</a> publishes a decision diagram of design options and their outcomes — a different kind of technical illustration, but equally useful for understanding the choices behind an API.</p>

<p><strong>Memory, training and agent state.</strong> <a href="/agent/jcode/">JCode</a> shows how context is stored and retrieved, which matters for a harness built for long multi-agent sessions. <a href="/agent/agent-s/">Agent-S</a> links proactive planning, grounding, knowledge and memory. <a href="/agent/agent-lightning/">Agent Lightning</a> separates the agent layer from the algorithm library, and <a href="/agent/ego-lite/">Ego-Lite</a> maps modules, memory and external tool connections. If you are comparing these, the interesting question is where state lives between steps and who is allowed to write to it.</p>

<p><strong>Data and computer use.</strong> <a href="/agent/vanna/">Vanna</a> contrasts the training path with the query path, a classic split for text-to-SQL systems. <a href="/agent/wren-ai/">WrenAI</a> shows a semantic layer between the LLM and the data sources. <a href="/agent/agent-desktop/">Agent Desktop</a> maps worker nodes, memory and a task queue, and <a href="/agent/agentic-seek/">Agentic Seek</a> draws the routing and tool-execution pipeline for a locally running browser agent. These four are worth reading side by side with the <a href="/blog/30-new-agents-november-2026/">November batch roundup</a>, since several of them were added in the same update.</p>

<h2>The full list of thirteen</h2>

<p>Each row links to the profile where the image is placed in context, and to the original file in the upstream repository. Images are resized for the page but otherwise unmodified.</p>

<table>
  <thead>
    <tr><th>Profile</th><th>What the diagram shows</th><th>Upstream image</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/agent-desktop/">Agent Desktop</a></td><td>Worker nodes, memory and a task queue</td><td><a href="https://raw.githubusercontent.com/vercel-labs/agent-desktop/main/assets/architecture-dark.png" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/agent-s/">Agent-S</a></td><td>Proactive planning, grounding, knowledge and memory</td><td><a href="https://raw.githubusercontent.com/simular-ai/Agent-S/main/images/agent_s2_architecture.png" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/agent-lightning/">Agent Lightning</a></td><td>Agent layer and algorithm library</td><td><a href="https://raw.githubusercontent.com/microsoft/agent-lightning/main/docs/images/architecture.jpg" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/agentic-seek/">Agentic Seek</a></td><td>Routing and tool-execution pipeline</td><td><a href="https://raw.githubusercontent.com/Fosowl/agenticSeek/main/docs/technical/diagram_overall.png" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/agno/">Agno</a></td><td>Plan, tool call, cache and agent response flow</td><td><a href="https://raw.githubusercontent.com/agno-agi/agno/main/cookbook/01_demo/evals/assets/sample-diagram.png" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/conductor/">Conductor</a></td><td>Task generation, service configuration and worker sequence</td><td><a href="https://raw.githubusercontent.com/conductor-oss/conductor/main/docs/devguide/architecture/TimeoutSeconds.png" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/ego-lite/">Ego-Lite</a></td><td>Modules, memory and external tool connections</td><td><a href="https://raw.githubusercontent.com/citrolabs/ego-lite/main/docs/assets/ego-lite-architecture.png" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/gpt-researcher/">GPT Researcher</a></td><td>Research question through sub-agents to final report</td><td><a href="https://raw.githubusercontent.com/assafelovic/gpt-researcher/main/docs/blog/2024-05-19-gptr-langgraph/architecture.jpeg" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/jcode/">JCode</a></td><td>How context is stored and retrieved</td><td><a href="https://raw.githubusercontent.com/1jehuang/jcode/master/docs/images/memory-arch.png" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/metagpt/">MetaGPT</a></td><td>AFlow search space, Monte Carlo tree search and evaluation</td><td><a href="https://raw.githubusercontent.com/geekan/MetaGPT/main/docs/resources/aflow/AFLOW-method.jpg" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/semantic-kernel/">Semantic Kernel</a></td><td>Design options and their outcomes</td><td><a href="https://raw.githubusercontent.com/microsoft/semantic-kernel/main/docs/decisions/diagrams/agent-chatcompletion.png" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/vanna/">Vanna</a></td><td>Training path compared with the query path</td><td><a href="https://raw.githubusercontent.com/vanna-ai/vanna/main/img/architecture.png" target="_blank" rel="noopener">Source</a></td></tr>
    <tr><td><a href="/agent/wren-ai/">WrenAI</a></td><td>Semantic layer, LLM and data source connections</td><td><a href="https://raw.githubusercontent.com/Canner/WrenAI/main/misc/wren-ai-architecture-dark.png" target="_blank" rel="noopener">Source</a></td></tr>
  </tbody>
</table>

<h2>How to read one in two minutes</h2>

<p>Start at the entry point — usually a user task, a request or a query — and follow one arrow all the way to the output. Then find the loop: most agent systems have a path that returns to the planner or the model with new context. That loop is where retries, tool results and memory enter the system. Finally, identify the component that would be hardest for you to replace. In a workflow engine it is usually the durable state store; in a retrieval system it is the index; in a computer-use agent it is the layer that reads the screen or the accessibility tree.</p>

<p>If the diagram has no loop, no state and no external tool, you are probably looking at a single-pass wrapper around a model call. That is a legitimate design, but it is worth knowing before you compare it with a system that persists every step. The three official videos below are from projects in this list and give a useful contrast between an SDK, a framework and a retrieval-heavy research tool.</p>

<h2>Official sources</h2>

<p>The diagrams come from the repositories themselves. Three good starting points for checking the surrounding documentation are the <a href="https://github.com/geekan/MetaGPT" target="_blank" rel="noopener">MetaGPT repository</a>, the <a href="https://github.com/conductor-oss/conductor" target="_blank" rel="noopener">Conductor repository</a>, and the <a href="https://github.com/Canner/WrenAI" target="_blank" rel="noopener">WrenAI repository</a>. Every upstream image link in the table above goes to the exact file we used.</p>

<h2>Frequently asked questions</h2>

<h3>Are these diagrams redrawn or generated?</h3>
<p>No. They are copies of images published in the project's own documentation, resized to fit the page. Each one carries a credit line and a link to the original file. We do not create illustrative mockups, and we leave a profile without an image when no suitable official one exists.</p>

<h3>Does the diagram describe the current release?</h3>
<p>It describes what the project documented at the time the image was published. Documentation can lag behind code. Check the Version and release status block on the profile — those version numbers are a snapshot taken from the GitHub API, not handwritten — and read the current release notes before assuming a specific component still works the same way.</p>

<h3>Why include diagrams but not benchmark charts?</h3>
<p>A diagram explains how a system is put together, which stays useful as a comparison aid. A standalone bar chart usually reports a measurement whose conditions are not described on the image itself, and it is easy to read out of context. We exclude plain data charts and marketing graphics while keeping real screenshots, genuine output examples and technical diagrams.</p>

<h2>Where to go next</h2>

<p>For the systems whose diagrams raise the most questions, open <a href="/agent/conductor/">Conductor</a>, <a href="/agent/vanna/">Vanna</a>, <a href="/agent/wren-ai/">WrenAI</a>, <a href="/agent/jcode/">JCode</a> and <a href="/agent/metagpt/">MetaGPT</a>. If you prefer moving pictures, <a href="/blog/official-agent-demo-videos-2026/">the official demo video guide</a> collects ten projects with published footage. The <a href="/blog/30-new-agents-november-2026/">November batch roundup</a> explains what changed in the most recent directory update, and the <a href="/blog/">guide index</a> lists every article.</p>
`,
  },

  {
    slug: '30-new-agents-november-2026',
    title: '30 New Agent Profiles Added in November 2026: Start With These Five',
    excerpt: "The directory grew by thirty profiles in one batch. If you only have time for five, these five cover five different kinds of work rather than five variations of the same tool.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 8,
    tags: ['new-agents', 'roundup', 'coding', 'research', 'framework', 'creative'],
    relatedAgents: [
      'jcode', 'siyuan', 'wren-ai', 'pocket-flow', 'onlook',
      'agent-desktop', 'ego-lite', 'huashu-design', 'tooljet', 'mlflow',
    ],
    coverThumb: '/blog/30-new-agents-november-2026-thumb.jpg',
    coverThumbAlt: 'Official SiYuan desktop interface showing document tree, editor, graph view and backlinks panels',
    coverThumbCredit: 'Official screenshot from the SiYuan project documentation',
    coverThumbSource: 'https://raw.githubusercontent.com/siyuan-note/siyuan/master/screenshots/feature0.png',
    videos: [
      {
        src: 'https://github.com/1jehuang/jcode/releases/download/readme-assets/jcode-performance-demo-2026-10.mp4',
        kind: 'mp4',
        title: 'JCode — official demo video',
        caption: 'Served from the JCode repository release assets; not re-hosted here.',
        sourceUrl: 'https://github.com/1jehuang/jcode',
      },
      {
        src: 'https://github.com/alchaincyf/huashu-design/releases/download/v3.0.0/launch-3.0.mp4',
        kind: 'mp4',
        title: 'Huashu Design — official launch video',
        caption: 'Served from the Huashu Design release assets.',
        sourceUrl: 'https://github.com/alchaincyf/huashu-design',
      },
      {
        src: 'https://www.youtube.com/embed/RSX_3EaO5eU',
        kind: 'youtube',
        title: 'Onlook — official video',
        caption: 'Embedded from the Onlook project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=RSX_3EaO5eU',
      },
    ],
    content: `
<p><strong>The short version:</strong> thirty new profiles went into the directory in a single batch, taking it to {{AGENT_COUNT}} agents. Reading thirty pages is not a good use of an afternoon. If you want a representative sample, start with these five — a Rust coding harness, a local knowledge workspace, a text-to-SQL engine, a minimalist framework and a visual code editor. They were chosen because they do different jobs, not because they scored highest on anything.</p>

<p>Every profile in the batch follows the same format as the rest of the directory: what the tool is, category, license, self-hosting, version and release status, pick-if and skip-if notes, a short FAQ and structured data. Nothing here is a hands-on test result. The one-line summaries below are the same editorial descriptions used on the profile pages.</p>

<h2>What actually changed in this batch</h2>

<p>Thirty new agent pages were added, spread across all six categories so the directory does not turn into a single long list of coding tools. Each entry was written from the project's public README and documentation, with judgement calls about where the tool fits rather than a rewritten feature list. Where a project publishes a real interface screenshot, a genuine output example or an architecture diagram, that image was placed inside the relevant section of the page with a credit and a link to the original file. Projects without a suitable official image simply have no image — a gap is better than a decorative placeholder.</p>

<p>Version information was refreshed at the same time. The Version and release status block on every profile is generated from a snapshot of the GitHub API: a published release where one exists, a tag where that is the clearest signal, or an honest label such as Not published, Rolling release or Not verified when the project does not publish a version. We do not write version numbers by hand, and monorepo tags are kept exactly as published rather than reformatted. If you are reading this weeks later, treat those values as a dated snapshot and check the upstream repository for anything newer.</p>

<p>Some of the new pages also carry an official demo video. As elsewhere on the site, those are URL-only embeds: the file stays on the project's own host, and the page links back to the source. Three of them are embedded below so you can see the range without opening every profile.</p>

<h2>Five starting points, five different jobs</h2>

<table>
  <thead>
    <tr><th>Profile</th><th>Category</th><th>License</th><th>One-line summary</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/jcode/">JCode</a></td><td>coding</td><td>open-source</td><td>High-performance coding-agent harness written in Rust for heavy multi-agent dev workflows.</td></tr>
    <tr><td><a href="/agent/siyuan/">SiYuan</a></td><td>research</td><td>open-source</td><td>Privacy-first, self-hosted knowledge workspace where humans and AI agents collaborate.</td></tr>
    <tr><td><a href="/agent/wren-ai/">WrenAI</a></td><td>research</td><td>open-source</td><td>Open-source GenBI engine that turns natural-language questions into governed SQL and dashboards.</td></tr>
    <tr><td><a href="/agent/pocket-flow/">Pocket Flow</a></td><td>framework</td><td>open-source</td><td>A 100-line minimalist LLM framework — let agents build agents.</td></tr>
    <tr><td><a href="/agent/onlook/">Onlook</a></td><td>creative</td><td>open-source</td><td>Open-source, visual-first code editor that lets you design real Next.js + Tailwind code with AI.</td></tr>
  </tbody>
</table>

<h3>JCode: a harness rather than an assistant</h3>

<p><a href="/agent/jcode/">JCode</a> is interesting because the unit of work is the whole development session, not a single chat reply. Its profile includes an official memory architecture diagram showing how context is stored and retrieved, which is the part worth reading first if you care about long-running multi-agent work. It is also one of the new profiles with an official demo clip, embedded below. If your question is "how does state survive across many steps", start here rather than with a chat-style coding tool.</p>

<h3>SiYuan: a local workspace, not a cloud service</h3>

<p><a href="/agent/siyuan/">SiYuan</a> sits at the opposite end of the spectrum — a self-hosted knowledge workspace. The official screenshot on its profile is a real desktop application view with a document tree, an editor, a graph view and backlinks, which makes the shape of the product clear faster than any feature list. Pick this one if your constraint is where the data lives rather than how much automation you can add.</p>

<h3>WrenAI: a semantic layer between a question and a database</h3>

<p><a href="/agent/wren-ai/">WrenAI</a> represents the data-facing side of the batch. Its architecture diagram shows a semantic layer, the LLM and the data source connections — a useful picture for understanding why a natural-language question does not simply get translated into a raw query. If you are comparing tools that talk to structured data, read its diagram next to <a href="/agent/vanna/">Vanna</a>, which draws the training path against the query path.</p>

<h3>Pocket Flow: the smallest possible framework</h3>

<p><a href="/agent/pocket-flow/">Pocket Flow</a> is the deliberate counterexample to large frameworks. Its premise is minimalism, and its profile is worth reading precisely because it makes the trade-off visible: less machinery to learn, less machinery provided. A short official video is embedded on the profile. If you want to understand what an agent framework actually does before adopting a big one, a small one is often the clearest starting point.</p>

<h3>Onlook: editing the interface, not just the prompt</h3>

<p><a href="/agent/onlook/">Onlook</a> covers the visual side of building software. It is a visual-first editor whose output is real project code, and its profile carries an official video. That puts it in a different category from the coding harnesses above: the interaction is with a rendered interface rather than a terminal transcript. If your work is front-end heavy, this is the one of the five to open first.</p>

<h2>How to use a roundup without trusting it too much</h2>

<p>A roundup is a navigation aid, not a ranking. Five picks out of thirty will always leave out good options, and the selection here was made for variety of job type. The honest way to use it is to open two profiles, note which structured fields actually matter to your situation — self-hosting, license, version status, whether the project is still active — and then go back to the <a href="/">full directory</a> and filter on those fields yourself.</p>

<p>That habit also protects against a common mistake: treating a batch as a signal of quality. Thirty pages appearing at once is a publishing decision, not evidence that these thirty tools are better than the earlier ones. New pages need time to be discovered and assessed by search engines, exactly as older pages did. What you can verify immediately are the concrete things on each page: the upstream repository, the release status, the official images and the source links.</p>

<h2>Official sources</h2>

<p>Start with the repositories behind the five profiles: <a href="https://github.com/1jehuang/jcode" target="_blank" rel="noopener">JCode</a>, <a href="https://github.com/siyuan-note/siyuan" target="_blank" rel="noopener">SiYuan</a>, <a href="https://github.com/Canner/WrenAI" target="_blank" rel="noopener">WrenAI</a>, and the project homes linked from the <a href="/agent/pocket-flow/">Pocket Flow</a> and <a href="/agent/onlook/">Onlook</a> profiles. The directory's own listing data is public in the <a href="https://github.com/102896351/Agents" target="_blank" rel="noopener">site repository</a>, where corrections can be filed as an issue.</p>

<h2>Frequently asked questions</h2>

<h3>Does this mean the directory now has {{AGENT_COUNT}} agents and thirty new ones are the best?</h3>
<p>It means there are {{AGENT_COUNT}} profiles, and thirty of them were added in this batch. Being new does not imply being better. The earlier pages have the same structured fields, and several carry more official screenshots, diagrams and videos because those projects publish more material.</p>

<h3>Are the version numbers on the new pages verified?</h3>
<p>They are a real snapshot from the GitHub API, taken when the batch was prepared, and each profile says what kind of signal it is — a published release, a tag, or an honest Not published / Rolling release / Not verified label. They are not guessed and they are not refreshed on every page view, so check the upstream repository if you need today's value.</p>

<h3>Why do some of the thirty have no picture and no video?</h3>
<p>Because the project has not published a real screenshot, output example, architecture diagram or demo video that meets the site's rules. We do not fill gaps with drawn mockups, logos, marketing banners or third-party clips. The <a href="/blog/official-agent-demo-videos-2026/">demo video guide</a> explains the same rule in more detail.</p>

<h2>Where to go next</h2>

<p>If you want to see the batch's range in one sitting, open <a href="/agent/agent-desktop/">Agent Desktop</a>, <a href="/agent/ego-lite/">Ego-Lite</a>, <a href="/agent/tooljet/">ToolJet</a>, <a href="/agent/mlflow/">MLflow</a> and <a href="/agent/huashu-design/">Huashu Design</a>. For a different kind of comparison, read <a href="/blog/agent-architecture-diagrams-2026/">the architecture diagram guide</a>, <a href="/blog/official-agent-demo-videos-2026/">the official demo video shortlist</a>, or <a href="/blog/best-ai-agent-frameworks-2026/">the framework comparison</a>. The <a href="/blog/">guide index</a> has every article, and the <a href="/">directory</a> lets you filter by category.</p>
`,
  },
];
