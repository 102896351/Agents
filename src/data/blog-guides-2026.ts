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
  {
    slug: 'browser-computer-use-agents-2026',
    title: 'Browser and Computer-Use Agents: What They Are and Which to Try',
    excerpt: "A browser or computer-use agent drives a real interface for you — clicking, filling forms, reading the screen. Here is how the category works and eight projects worth knowing.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 9,
    tags: ['browser', 'computer-use', 'automation', 'open-source', 'ui-agent'],
    relatedAgents: [
      'browseros', 'ufo', 'stagehand', 'ui-tars', 'skyvern', 'cua', 'agent-browser', 'nanobrowser',
    ],
    coverThumb: '/blog/browser-computer-use-agents-2026-thumb.jpg',
    coverThumbAlt: 'Official BrowserOS MCP configuration screen listing coding agents it can connect to',
    coverThumbCredit: 'Official screenshot from the BrowserOS project documentation',
    coverThumbSource: 'https://github.com/browseros-ai/BrowserOS',
    videos: [
      {
        src: 'https://www.youtube.com/embed/NGrVWGcJL8o',
        kind: 'youtube',
        title: 'UFO — official demo video',
        caption: 'Embedded from the UFO project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=NGrVWGcJL8o',
      },
      {
        src: 'https://www.youtube.com/embed/QT_OhygMVXU',
        kind: 'youtube',
        title: 'UFO — official demo video 2',
        caption: 'Embedded from the UFO project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=QT_OhygMVXU',
      },
      {
        src: 'https://www.youtube.com/embed/TEjqk0eeNy8',
        kind: 'youtube',
        title: 'Google ADK — official video',
        caption: 'Embedded from the Google ADK project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=TEjqk0eeNy8',
      },
    ],
    content: `
<p><strong>The short version:</strong> a browser or computer-use agent is software that operates a real interface on your behalf — opening pages, clicking buttons, filling forms and reading what appears on screen. The category is younger and less polished than chatbots, but it is where a lot of the interesting agent work is happening. This guide explains what these tools actually do, the three shapes they come in, and eight projects worth knowing before you install anything.</p>

<p>This is a directory of {{AGENT_COUNT}} agents, not a review site. We do not run hands-on tests, and nothing below is a test result. The descriptions are editorial summaries of public information: each linked profile carries the same structured fields used across the directory — category, license, self-hosting, version status, official screenshots where the project publishes them, and pick-if / skip-if notes. Those notes are judgement, not measured benchmarks.</p>

<h2>What "computer-use" actually means</h2>

<p>The phrase covers a spectrum. At one end, a tool watches a live browser and performs steps a person would: navigate to a URL, log in, click a selector, extract text. At the other end, a tool drives the whole operating system through screenshots and accessibility trees, moving the mouse and reading the screen like a human at a desk. Most products sit somewhere between, controlling a browser closely but not the desktop underneath.</p>

<p>The key difference from a normal API integration is that the agent copes with interfaces that were never designed for it. A form with no documented endpoint, a button that only exists after three clicks, a puzzle that blocks a bot — these are exactly the cases a computer-use agent is built for, and exactly where a scripted integration gives up. That flexibility is the appeal, and also the risk, because the agent is guessing from pixels rather than calling a contract.</p>

<h2>Three shapes the category takes</h2>

<p><strong>Browser control agents.</strong> These drive a browser directly. They are the easiest to try because they need no special OS access, and they are the most common starting point. <a href="/agent/browseros/">BrowserOS</a> ships an MCP endpoint that lets several coding harnesses share one controlled browser, which is a useful pattern for seeing how a browser agent plugs into the rest of your stack.</p>

<p><strong>Desktop and OS agents.</strong> These go further and operate the whole machine. <a href="/agent/ufo/">UFO</a> (from Microsoft Research) is a desktop-agent experiment that routes a task to the right application and then acts inside it; its demo videos below show the agent moving between windows to complete a request. The trade-off is real: more power means broader access to your files and accounts.</p>

<p><strong>UI-action libraries and frameworks.</strong> Rather than a finished product, some projects give you the building blocks — a layer that turns "click this, then read that" into reliable primitives. <a href="/agent/stagehand/">Stagehand</a> and <a href="/agent/cua/">Cua</a> are examples: you can script precise actions instead of hoping a general agent figures them out. These are aimed at developers who want control over when the agent improvises and when it follows a script.</p>

<h2>Eight projects worth knowing</h2>

<table>
  <thead>
    <tr><th>Project</th><th>Category</th><th>License</th><th>Shape</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/browseros/">BrowserOS</a></td><td>browsing</td><td>open-source</td><td>Shared browser with an MCP endpoint</td></tr>
    <tr><td><a href="/agent/ufo/">UFO</a></td><td>browsing</td><td>open-source</td><td>Desktop agent that routes across apps</td></tr>
    <tr><td><a href="/agent/stagehand/">Stagehand</a></td><td>browsing</td><td>open-source</td><td>Scriptable browser-action primitives</td></tr>
    <tr><td><a href="/agent/ui-tars/">UI-TARS</a></td><td>browsing</td><td>open-source</td><td>Model purpose-built for UI grounding</td></tr>
    <tr><td><a href="/agent/skyvern/">Skyvern</a></td><td>browsing</td><td>open-source</td><td>API-plus-vision browser automation</td></tr>
    <tr><td><a href="/agent/cua/">Cua</a></td><td>browsing</td><td>open-source</td><td>Virtual-machine agent environment</td></tr>
    <tr><td><a href="/agent/agent-browser/">agent-browser</a></td><td>browsing</td><td>open-source</td><td>Lightweight headless browser agent</td></tr>
    <tr><td><a href="/agent/nanobrowser/">Nanobrowser</a></td><td>browsing</td><td>open-source</td><td>In-browser agent extension</td></tr>
  </tbody>
</table>

<p>The table lists eight rather than seven because the category blurs at the edges; <a href="/agent/ui-tars/">UI-TARS</a> and <a href="/agent/skyvern/">Skyvern</a> are often mentioned in the same breath as the others, and both are worth a look if you want to compare a model trained for screen grounding against a vision-plus-API approach. The official videos below come from these projects so you can see the different shapes in motion.</p>

<h3>BrowserOS: one browser, many harnesses</h3>
<p><a href="/agent/browseros/">BrowserOS</a> is interesting because it is not trying to be the agent itself. It exposes a single controlled browser over MCP so that coding assistants such as Claude Code, Codex or Cursor can share it. Its official screenshot shows the connection panel listing which harnesses are attached. If your question is "how do I let my existing tools use a browser safely", this is the one to open first.</p>

<h3>UFO: the desktop experiment</h3>
<p><a href="/agent/ufo/">UFO</a> is a research project from Microsoft that treats the desktop as the interface. It decides which application should handle each step of a task, then performs the actions inside that app. The embedded videos show it moving between windows. Read it as a clear demonstration of where desktop agents are headed, not as a finished product you would run in production today.</p>

<h3>Stagehand and Cua: control versus autonomy</h3>
<p><a href="/agent/stagehand/">Stagehand</a> gives developers deterministic actions — act, extract, observe — on top of a browser, so you decide when to script and when to let the model improvise. <a href="/agent/cua/">Cua</a> goes lower, providing a virtual-machine environment where an agent can act without touching your real machine. If you care about safety and repeatability, these two are the ones to study.</p>

<h2>How to try one without losing control</h2>

<p>Start in a sandbox. Run the agent against a test account or a throwaway browser profile, give it the minimum permissions it needs, and watch the first ten actions before you trust it with anything real. Computer-use agents are powerful exactly because they can act, so the responsible setup is a constrained one — a dedicated profile, a limited scope, and a human reviewing the important steps. None of the projects here is a substitute for that discipline.</p>

<p>The same caution applies to the official videos. They show the agent succeeding at a demo task; they do not show the failure cases, the permissions granted, or the data the agent could reach. Use them to understand the shape of the tool, then read the upstream repository and the current release notes before relying on it.</p>

<h2>Official sources</h2>

<ul>
  <li><a href="https://github.com/browseros-ai/BrowserOS" target="_blank" rel="noopener">BrowserOS repository</a> — the MCP endpoint and connection panel shown above.</li>
  <li><a href="https://github.com/microsoft/UFO" target="_blank" rel="noopener">UFO repository</a> — Microsoft Research desktop-agent project.</li>
  <li><a href="https://github.com/browserbase/stagehand" target="_blank" rel="noopener">Stagehand repository</a> — scriptable browser actions.</li>
  <li><a href="https://github.com/trycua/cua" target="_blank" rel="noopener">Cua repository</a> — virtual-machine agent environment.</li>
</ul>

<h2>Frequently asked questions</h2>

<h3>Is a browser agent the same as an API integration?</h3>
<p>No. An API integration calls a documented endpoint and breaks when the layout changes. A browser agent reads the rendered page and acts on what it sees, which survives layout changes but is slower and less certain. Pick the API route when one exists; reach for the agent when the interface was never built for automation.</p>

<h3>Are these tools safe to point at my real accounts?</h3>
<p>They can reach anything the browser or desktop session can reach. Treat that as a serious permission, not a convenience. Use a sandboxed profile, scope the agent to a single task, and review the steps. The directory's pick-if / skip-if notes on each profile flag the same trade-off from the project's own description.</p>

<h3>Does a demo video mean the agent was tested here?</h3>
<p>No. The videos are published by the projects, not by this site, and they show selected tasks. Our verdicts and pick-if / skip-if notes are editorial summaries of public information. For hands-on assurance, check the upstream repository, the issue tracker, and the current release status on the profile.</p>

<h2>Where to go next</h2>

<p>For the projects that best show the three shapes, open <a href="/agent/browseros/">BrowserOS</a>, <a href="/agent/ufo/">UFO</a>, <a href="/agent/stagehand/">Stagehand</a>, <a href="/agent/skyvern/">Skyvern</a> and <a href="/agent/cua/">Cua</a>. If you want the broader context, <a href="/blog/agent-architecture-diagrams-2026/">the architecture diagram guide</a> shows how other agent systems are wired, and <a href="/blog/official-agent-demo-videos-2026/">the official demo video shortlist</a> collects ten projects with published footage. The <a href="/blog/">guide index</a> lists every article, and the <a href="/">directory</a> lets you filter by category.</p>
`,
  },

  {
    slug: 'rag-knowledge-agents-2026',
    title: 'RAG and Knowledge-Base Agents: Retrieval, Graphs and Sources',
    excerpt: "Retrieval-augmented agents sit between a raw model and your documents. Eight projects show the different shapes retrieval can take, from chunk-and-embed to knowledge graphs.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 9,
    tags: ['rag', 'retrieval', 'knowledge', 'research', 'open-source'],
    relatedAgents: [
      'graphrag', 'ragflow', 'docsgpt', 'deer-flow', 'storm', 'crawl4ai', 'firecrawl', 'weknora',
    ],
    coverThumb: '/blog/rag-knowledge-agents-2026-thumb.jpg',
    coverThumbAlt: 'Official GraphRAG web interface showing local and global search modes',
    coverThumbCredit: 'Official screenshot from the Microsoft GraphRAG project documentation',
    coverThumbSource: 'https://github.com/microsoft/graphrag',
    videos: [
      {
        src: 'https://www.loom.com/embed/04ebffb6ed2a4520a27c3e3addcdde20',
        kind: 'iframe',
        title: 'GPT Researcher — official walkthrough',
        caption: 'Embedded from the project Loom walkthrough.',
        sourceUrl: 'https://www.loom.com/share/04ebffb6ed2a4520a27c3e3addcdde20',
      },
      {
        src: 'https://www.youtube.com/embed/g21royNJ4fw',
        kind: 'youtube',
        title: 'LightRAG — official video',
        caption: 'Embedded from the LightRAG project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=g21royNJ4fw',
      },
      {
        src: 'https://www.youtube.com/embed/8hmqS2Y5RVQ',
        kind: 'youtube',
        title: 'Cognee — official video',
        caption: 'Embedded from the Cognee project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=8hmqS2Y5RVQ',
      },
    ],
    content: `
<p><strong>The short version:</strong> a retrieval-augmented agent fetches relevant material from your own documents before the model answers, instead of relying on whatever the model memorised in training. That sounds simple, but the implementations diverge sharply: some chunk and embed, some build a knowledge graph, some crawl the live web, and some generate a structured report end to end. This guide walks through eight projects that show those different shapes, and how to tell them apart before you adopt one.</p>

<p>We are a directory of {{AGENT_COUNT}} agents, not a review site. Nothing here is a hands-on test result. The descriptions are editorial summaries of public information, and every linked profile carries the same structured fields — category, license, self-hosting, version status, official screenshots or diagrams where published, and pick-if / skip-if notes. Those notes are judgement, not measurements.</p>

<h2>Why retrieval matters more than the model choice</h2>

<p>For knowledge work, the bottleneck is rarely the language model. It is whether the model has the right context at the right moment. A general model without your documents will confidently fill gaps with plausible-but-wrong text. A retrieval layer forces the answer to cite something specific — a page, a passage, a database row. That is why so many agent projects are, at heart, retrieval projects wearing an agent costume.</p>

<p>The flip side is that retrieval quality dominates the output. Bad chunking, a weak embedding, or a graph that misses the important relationship will quietly degrade every answer. When you compare these tools, the interesting question is not "which model" but "what gets retrieved, and how is it connected".</p>

<h2>Four retrieval shapes</h2>

<p><strong>Chunk-and-embed.</strong> The classic approach: split documents into pieces, turn them into vectors, and fetch the nearest neighbours to a question. <a href="/agent/ragflow/">RAGFlow</a> is a notable example that adds careful chunking and citation to this baseline, and its interface shows the search modes clearly.</p>

<p><strong>Graph retrieval.</strong> Instead of flat chunks, build a knowledge graph of entities and relationships, then walk it. <a href="/agent/graphrag/">Microsoft GraphRAG</a> is the reference here; its web interface separates local search (within a community) from global search (across the graph). The trade-off is setup cost: you pay to build the graph before you get the better answers.</p>

<p><strong>Web and document crawling.</strong> Some agents skip your private corpus and go to the live web, or ingest a site on demand. <a href="/agent/crawl4ai/">Crawl4AI</a> and <a href="/agent/firecrawl/">Firecrawl</a> are the plumbing many other agents use to turn a URL into clean, structured input.</p>

<p><strong>Report generation.</strong> A few agents treat retrieval as a research loop: decompose a question, gather sources, then write. <a href="/agent/docsgpt/">DocsGPT</a> and <a href="/agent/deer-flow/">DeerFlow</a> sit at this end, optimising for a finished document rather than a one-line answer.</p>

<h2>Eight projects, eight takes on retrieval</h2>

<table>
  <thead>
    <tr><th>Project</th><th>Category</th><th>License</th><th>Retrieval shape</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/graphrag/">Microsoft GraphRAG</a></td><td>research</td><td>open-source</td><td>Knowledge graph over documents</td></tr>
    <tr><td><a href="/agent/ragflow/">RAGFlow</a></td><td>research</td><td>open-source</td><td>Chunking plus citation retrieval</td></tr>
    <tr><td><a href="/agent/docsgpt/">DocsGPT</a></td><td>research</td><td>open-source</td><td>Document Q&amp;A and report drafting</td></tr>
    <tr><td><a href="/agent/deer-flow/">DeerFlow</a></td><td>research</td><td>open-source</td><td>Deep research loop</td></tr>
    <tr><td><a href="/agent/storm/">STORM</a></td><td>research</td><td>open-source</td><td>Outline-first web synthesis</td></tr>
    <tr><td><a href="/agent/crawl4ai/">Crawl4AI</a></td><td>research</td><td>open-source</td><td>Web crawl to structured input</td></tr>
    <tr><td><a href="/agent/firecrawl/">Firecrawl</a></td><td>research</td><td>open-source</td><td>URL to clean markdown API</td></tr>
    <tr><td><a href="/agent/weknora/">WeKnora</a></td><td>research</td><td>open-source</td><td>Knowledge-base agent</td></tr>
  </tbody>
</table>

<h3>GraphRAG: pay upfront for better answers</h3>
<p><a href="/agent/graphrag/">GraphRAG</a> is the project to study if you want to understand graph retrieval. Building the graph is real work, but once it exists the local-versus-global search split lets you ask both "tell me about this entity" and "what connects these entities across the corpus". The official screenshot on its profile shows exactly those two modes.</p>

<h3>RAGFlow and DocsGPT: the practical middle</h3>
<p><a href="/agent/ragflow/">RAGFlow</a> is the one to open if you want retrieval that cites precisely where an answer came from, with chunking you can inspect. <a href="/agent/docsgpt/">DocsGPT</a> takes the same documents and leans toward drafting, which suits teams that want an answer plus a referenced write-up rather than a chat snippet.</p>

<h3>Crawl4AI and Firecrawl: the plumbing</h3>
<p>These two are not end products so much as the layer under many others. <a href="/agent/crawl4ai/">Crawl4AI</a> is built for agents that need clean, structured web input; <a href="/agent/firecrawl/">Firecrawl</a> exposes the same idea as an API. If you are building your own retrieval agent, you will likely meet one of them.</p>

<h2>How to choose without over-building</h2>

<p>Match the shape to the question. If answers live inside a fixed set of documents and you can tolerate setup time, a graph approach like <a href="/agent/graphrag/">GraphRAG</a> earns its cost. If you need fast answers over messy files, <a href="/agent/ragflow/">RAGFlow</a> gets you there sooner. If the source is the live web, you want a crawler in the loop. The mistake is adopting the most sophisticated option by default; the simpler retrieval that fits your actual questions will serve you better.</p>

<h2>Official sources</h2>

<ul>
  <li><a href="https://github.com/microsoft/graphrag" target="_blank" rel="noopener">Microsoft GraphRAG repository</a> — the graph retrieval reference.</li>
  <li><a href="https://github.com/infiniflow/ragflow" target="_blank" rel="noopener">RAGFlow repository</a> — chunking and citation retrieval.</li>
  <li><a href="https://github.com/arc53/DocsGPT" target="_blank" rel="noopener">DocsGPT repository</a> — document Q&amp;A and drafting.</li>
  <li><a href="https://github.com/crawl4ai/crawl4ai" target="_blank" rel="noopener">Crawl4AI repository</a> — agent-oriented web crawling.</li>
</ul>

<h2>Frequently asked questions</h2>

<h3>Is a vector search the only way to do retrieval?</h3>
<p>No. Vector search is the common starting point, but graph retrieval, structured database queries, and hybrid approaches all count as retrieval. <a href="/agent/graphrag/">GraphRAG</a> is the clearest example of going beyond flat chunks, and several SQL-facing agents retrieve by querying a schema instead of a vector index.</p>

<h3>Do these agents need my data to leave the machine?</h3>
<p>Most of the open-source ones here run locally or on your own server, so your documents stay where you put them. Always confirm the deployment model on the profile — the self-hosting field tells you whether a local deployment is supported at all.</p>

<h3>Does a demo video mean the tool was tested here?</h3>
<p>No. The videos and screenshots are published by the projects, not produced by this directory. Our notes are editorial summaries of public information. For hands-on assurance, check the upstream repository and the current release status.</p>

<h2>Where to go next</h2>

<p>Open <a href="/agent/graphrag/">Microsoft GraphRAG</a>, <a href="/agent/ragflow/">RAGFlow</a>, <a href="/agent/crawl4ai/">Crawl4AI</a>, <a href="/agent/docsgpt/">DocsGPT</a> and <a href="/agent/firecrawl/">Firecrawl</a> to compare the shapes directly. For a different angle, <a href="/blog/agent-architecture-diagrams-2026/">the architecture diagram guide</a> shows how other agent systems are wired, and <a href="/blog/official-agent-demo-videos-2026/">the official demo video shortlist</a> collects ten projects with published footage. The <a href="/blog/">guide index</a> has every article, and the <a href="/">directory</a> lets you filter by category.</p>
`,
  },

  {
    slug: 'ai-agents-for-finance-trading-2026',
    title: 'AI Agents for Finance and Trading: What Actually Exists',
    excerpt: "Most AI trading repositories are educational simulations, not brokerage systems. Here is the honest line between what these agents do and what they do not.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 8,
    tags: ['finance', 'trading', 'research', 'open-source', 'simulation'],
    relatedAgents: [
      'ai-hedge-fund', 'trading-agents', 'openbb',
    ],
    coverThumb: '/blog/ai-agents-finance-trading-2026-thumb.jpg',
    coverThumbAlt: 'Official TradingAgents diagram of bullish and bearish agents debating a ticker',
    coverThumbCredit: 'Official diagram from the TradingAgents project documentation',
    coverThumbSource: 'https://github.com/TauricResearch/TradingAgents',
    videos: [
      {
        src: 'https://www.youtube.com/embed/90gr5lwjIho',
        kind: 'youtube',
        title: 'TradingAgents — official video',
        caption: 'Embedded from the TradingAgents project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=90gr5lwjIho',
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
<p><strong>The short version:</strong> there is a crowd of "AI trading agent" projects online, and almost all of them fall into one of two honest categories — educational simulations that model how agents would reason about a ticker, or data and analytics layers that feed a human's research. Very few are systems you point at a brokerage and walk away. This guide draws that line plainly, because the distinction is the single most important thing to understand before you clone anything.</p>

<p>We are a directory of {{AGENT_COUNT}} agents, not a review site, and explicitly not a source of investment advice. Nothing here is a test result or a recommendation. The descriptions are editorial summaries of public information, and each linked profile carries the same structured fields used across the directory.</p>

<h2>The two categories, and why the distinction matters</h2>

<p><strong>Decision simulations.</strong> Projects like <a href="/agent/ai-hedge-fund/">AI Hedge Fund</a> and <a href="/agent/trading-agents/">TradingAgents</a> model an investment committee as a set of agents that debate a ticker and aggregate to a decision. They are explicitly educational: the authors state plainly that the output is for learning and research, not for placing real trades. Their value is pedagogical — they make multi-agent reasoning inspectable on a concrete, high-stakes domain.</p>

<p><strong>Data and analytics layers.</strong> <a href="/agent/openbb/">OpenBB</a> is the opposite end: an open platform for financial data and analytics. It does not make trades or decisions; it gives you a consistent way to pull market data, screen instruments, and build your own workflows. If you want to study the inputs to a decision rather than the decision itself, this is the category to start in.</p>

<p>The danger is conflating the two. A simulation that looks confident is not a system that should move money, and a data layer that surfaces numbers is not a strategy. Reading the project's own disclaimer — and the directory's pick-if / skip-if notes — tells you which one you are looking at.</p>

<h2>Three projects, three honest roles</h2>

<table>
  <thead>
    <tr><th>Project</th><th>Category</th><th>License</th><th>Honest role</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/ai-hedge-fund/">AI Hedge Fund</a></td><td>research</td><td>open-source</td><td>Educational multi-agent debate</td></tr>
    <tr><td><a href="/agent/trading-agents/">TradingAgents</a></td><td>research</td><td>open-source</td><td>Simulation of analyst and trading agents</td></tr>
    <tr><td><a href="/agent/openbb/">OpenBB</a></td><td>research</td><td>open-source</td><td>Financial data and analytics platform</td></tr>
  </tbody>
</table>

<h3>AI Hedge Fund: an investment committee you can read</h3>
<p><a href="/agent/ai-hedge-fund/">AI Hedge Fund</a> assigns distinct personas — value, growth, technical, sentiment, valuation analysts and a portfolio manager — and shows each signal with reasoning before a risk manager constrains the final call. Its own README stresses that it exists to teach orchestration and signal aggregation, not to trade. That honesty is exactly why it is worth studying.</p>

<h3>TradingAgents: debate as the mechanism</h3>
<p><a href="/agent/trading-agents/">TradingAgents</a> makes the debate explicit: a bullish agent and a bearish agent argue a ticker, and a third party weighs the case. The official diagram embedded below shows that exchange directly. As with the project above, treat the output as a reasoning demonstration, not a position to act on.</p>

<h3>OpenBB: the inputs, not the decision</h3>
<p><a href="/agent/openbb/">OpenBB</a> is the one to open if your real need is data — pulling prices, screening, building research workflows — rather than an agent that decides. It pairs naturally with the decision simulations above: they need good inputs, and OpenBB is a source of them.</p>

<h2>What to watch before you trust any of it</h2>

<p>Backtests lie comfortably. A simulation can post an impressive historical curve while ignoring execution, slippage, fees, and regime change — the things that decide whether a strategy survives contact with a live market. The projects here are refreshingly honest about being educational, and you should hold every other "AI trading" repo to the same standard. If a repo promises alpha instead of explaining its method, that is the signal, not a feature.</p>

<p>The official video below is the same: it shows the agent reasoning about a ticker, not a brokerage executing orders. Use it to understand the mechanism, then read the upstream repository and its disclaimers before relying on anything.</p>

<h2>Official sources</h2>

<ul>
  <li><a href="https://github.com/virattt/ai-hedge-fund" target="_blank" rel="noopener">AI Hedge Fund repository</a> — educational multi-agent simulation.</li>
  <li><a href="https://github.com/TauricResearch/TradingAgents" target="_blank" rel="noopener">TradingAgents repository</a> — debate-based trading simulation.</li>
  <li><a href="https://github.com/OpenBB-finance/OpenBB" target="_blank" rel="noopener">OpenBB repository</a> — open financial data platform.</li>
</ul>

<h2>Frequently asked questions</h2>

<h3>Can I point these at a brokerage and trade live?</h3>
<p>The decision-simulation projects say no, plainly, and the data layer is not a strategy. Self-hosting and connecting to a broker is technically possible for some setups, but none of these is a sanctioned trading system, and doing so moves real money on the basis of a teaching codebase. The directory's skip-if notes reflect the same caution.</p>

<h3>Why are backtests not enough?</h3>
<p>Because they usually omit execution cost, slippage, data survivorship, and market regimes. A curve that looks good on history can collapse on live data. Treat any backtest as a reasoning exercise, and demand the project's own caveats before trusting it.</p>

<h3>Does a demo video mean the tool was tested here?</h3>
<p>No. The videos are published by the projects, not by this directory, and show selected reasoning tasks. Our notes are editorial summaries of public information. For hands-on assurance, check the upstream repository and the current release status.</p>

<h2>Where to go next</h2>

<p>Open <a href="/agent/ai-hedge-fund/">AI Hedge Fund</a>, <a href="/agent/trading-agents/">TradingAgents</a> and <a href="/agent/openbb/">OpenBB</a> to compare the three roles. For the broader picture, <a href="/blog/agent-architecture-diagrams-2026/">the architecture diagram guide</a> shows how other agent systems are wired, and <a href="/blog/official-agent-demo-videos-2026/">the official demo video shortlist</a> collects ten projects with published footage. The <a href="/blog/">guide index</a> lists every article, and the <a href="/">directory</a> lets you filter by category.</p>
`,
  },

  {
    slug: 'ai-code-review-agents-2026',
    title: 'AI Code-Review and QA Agents: Who Reviews the Reviewer',
    excerpt: "Code-review agents read the diff before a human does. Five projects take different approaches, from inline GitHub comments to offline leaderboards that rank models.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 8,
    tags: ['code-review', 'qa', 'coding', 'open-source', 'automation'],
    relatedAgents: [
      'coderabbit', 'codex', 'open-code-review', 'serena', 'openhands',
    ],
    coverThumb: '/blog/ai-code-review-agents-2026-thumb.jpg',
    coverThumbAlt: 'Official Open Code Review leaderboard comparing model code-review performance',
    coverThumbCredit: 'Official screenshot from the Open Code Review project documentation',
    coverThumbSource: 'https://github.com/alibaba/open-code-review',
    videos: [
      {
        src: 'https://www.youtube.com/embed/5QN7gN1KYLA',
        kind: 'youtube',
        title: 'Serena — official video',
        caption: 'Embedded from the Serena project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=5QN7gN1KYLA',
      },
      {
        src: 'https://www.youtube.com/embed/fcr8WzeEXyk',
        kind: 'youtube',
        title: 'SWE-agent — official video',
        caption: 'Embedded from the SWE-agent project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=fcr8WzeEXyk',
      },
    ],
    content: `
<p><strong>The short version:</strong> a code-review agent reads a pull request or a diff and comments the way a senior engineer would — catching bugs, style issues, and risky patterns before a person spends time on it. The category is more mature than browser agents and easier to evaluate, because the output is concrete and checkable. This guide covers five projects, the two shapes they take, and how to adopt one without letting it become noise.</p>

<p>We are a directory of {{AGENT_COUNT}} agents, not a review site, and we do not run hands-on tests. The descriptions are editorial summaries of public information. Each linked profile carries the same structured fields — category, license, self-hosting, version status, official screenshots where published, and pick-if / skip-if notes — and those notes are judgement, not measured benchmarks.</p>

<h2>Two shapes: inline reviewer versus offline evaluator</h2>

<p><strong>Inline reviewers.</strong> These attach comments directly to a pull request, the way a colleague would. <a href="/agent/coderabbit/">CodeRabbit</a> is the commercial example many teams already use; <a href="/agent/serena/">Serena</a> is an open coding agent that can be directed at review tasks. The strength is immediacy: the feedback arrives where the work happens.</p>

<p><strong>Offline evaluators.</strong> Rather than reviewing your code, these build a benchmark and rank models or approaches on review quality. <a href="/agent/open-code-review/">Open Code Review</a> publishes a leaderboard comparing how different models perform at code review, which is useful for choosing a model even if you never use the tool itself.</p>

<p>The difference matters for adoption. An inline reviewer changes your daily workflow; an offline evaluator changes which model you trust. Some tools, like <a href="/agent/openhands/">OpenHands</a>, blur the line by being general coding agents that can both produce and review code.</p>

<h2>Five projects, two shapes</h2>

<table>
  <thead>
    <tr><th>Project</th><th>Category</th><th>License</th><th>Shape</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/coderabbit/">CodeRabbit</a></td><td>coding</td><td>freemium</td><td>Inline PR reviewer</td></tr>
    <tr><td><a href="/agent/codex/">OpenAI Codex</a></td><td>coding</td><td>commercial</td><td>Agentic coding and review</td></tr>
    <tr><td><a href="/agent/open-code-review/">Open Code Review</a></td><td>coding</td><td>open-source</td><td>Offline review leaderboard</td></tr>
    <tr><td><a href="/agent/serena/">Serena</a></td><td>coding</td><td>open-source</td><td>Open coding agent for review tasks</td></tr>
    <tr><td><a href="/agent/openhands/">OpenHands</a></td><td>coding</td><td>open-source</td><td>General coding agent</td></tr>
  </tbody>
</table>

<h3>CodeRabbit: the inline default</h3>
<p><a href="/agent/coderabbit/">CodeRabbit</a> is the project to know if you want review comments in the pull request with minimal setup. It is freemium, so the practical question is whether the paid tier's depth is worth it for your team's volume. The directory's pick-if note captures exactly that trade-off.</p>

<h3>Open Code Review: measure before you trust</h3>
<p><a href="/agent/open-code-review/">Open Code Review</a> takes a different tack: it ranks models on review quality with a public leaderboard, shown in the official screenshot above. Even if you never run it, the leaderboard is a useful reality check on which model to assign review duty.</p>

<h3>Serena and OpenHands: the open alternative</h3>
<p><a href="/agent/serena/">Serena</a> is an open coding agent you can direct at review and refactoring work, and <a href="/agent/openhands/">OpenHands</a> is the generalist that can both write and review. Both are self-hostable, which matters if your code cannot leave your infrastructure. The embedded videos show the agents operating on real tasks.</p>

<h2>How to adopt one without drowning in comments</h2>

<p>The failure mode is volume: a reviewer that flags everything trains the team to ignore it. Start by pointing it at a subset of repositories, tune which severities post inline, and keep a human approving the merge. A review agent is a filter, not an approver — the moment it becomes the gate everyone bypasses, it has failed. Use the leaderboard-style projects to pick the model, then keep the inline tool narrow.</p>

<h2>Official sources</h2>

<ul>
  <li><a href="https://github.com/alibaba/open-code-review" target="_blank" rel="noopener">Open Code Review repository</a> — the review leaderboard.</li>
  <li><a href="https://github.com/oraios/serena" target="_blank" rel="noopener">Serena repository</a> — open coding agent.</li>
  <li><a href="https://github.com/All-Hands-AI/OpenHands" target="_blank" rel="noopener">OpenHands repository</a> — general coding agent.</li>
</ul>

<h2>Frequently asked questions</h2>

<h3>Should a code-review agent approve merges?</h3>
<p>No. Treat its output as a filter that surfaces issues for a human to judge. Making it the gate tends to either block legitimate work or get bypassed, which defeats the purpose. The pick-if / skip-if notes on each profile carry the same caution.</p>

<h3>Why use an offline leaderboard?</h3>
<p>Because review quality varies a lot by model, and a public benchmark is a faster way to choose than trial and error on your own pull requests. It tells you which model to assign the inline tool, not whether to trust a specific comment.</p>

<h3>Does a demo video mean the tool was tested here?</h3>
<p>No. The videos are published by the projects, not by this directory, and show selected tasks. Our notes are editorial summaries of public information. For hands-on assurance, check the upstream repository and the current release status.</p>

<h2>Where to go next</h2>

<p>Open <a href="/agent/coderabbit/">CodeRabbit</a>, <a href="/agent/open-code-review/">Open Code Review</a>, <a href="/agent/serena/">Serena</a>, <a href="/agent/openhands/">OpenHands</a> and <a href="/agent/codex/">Codex</a> to compare the shapes. For context, <a href="/blog/autonomous-coding-devin-vs-manus-vs-replit-2026/">the autonomous coding guide</a> covers agents that write code end to end, and <a href="/blog/official-agent-demo-videos-2026/">the official demo video shortlist</a> collects ten projects with published footage. The <a href="/blog/">guide index</a> has every article, and the <a href="/">directory</a> lets you filter by category.</p>
`,
  },

  {
    slug: 'no-code-agent-builders-2026',
    title: 'No-Code and Low-Code Agent Builders: Dify, Flowise and Friends',
    excerpt: "Not everyone wants to write Python to ship an agent. Seven visual builders let you wire tools, models and memory on a canvas instead of in a codebase.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 9,
    tags: ['no-code', 'low-code', 'automation', 'open-source', 'workflow'],
    relatedAgents: [
      'dify', 'flowise', 'fastgpt', 'composio', 'activepieces', 'langbot', 'kestra',
    ],
    coverThumb: '/blog/no-code-agent-builders-2026-thumb.jpg',
    coverThumbAlt: 'Official Flowise visual workflow editor with a customer refund automation',
    coverThumbCredit: 'Official screenshot from the Flowise project documentation',
    coverThumbSource: 'https://github.com/FlowiseAI/Flowise',
    videos: [
      {
        src: 'https://www.youtube.com/embed/uT75J_KG_aY',
        kind: 'youtube',
        title: 'MetaGPT — official demo video',
        caption: 'Embedded from the MetaGPT project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=uT75J_KG_aY',
      },
      {
        src: 'https://www.youtube.com/embed/0Zr3NwcvpA0',
        kind: 'youtube',
        title: 'Pocket Flow — official video',
        caption: 'Embedded from the Pocket Flow project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=0Zr3NwcvpA0',
      },
    ],
    content: `
<p><strong>The short version:</strong> a no-code agent builder gives you a canvas where you drag nodes — a model, a tool, a retriever, a memory block — and connect them into a working agent without writing the plumbing yourself. These tools are where most people outside engineering actually ship an agent, and the category is broad enough that the right choice depends on whether you are building a chatbot, a workflow, or a backend service. This guide compares seven of them.</p>

<p>We are a directory of {{AGENT_COUNT}} agents, not a review site, and we do not run hands-on tests. The descriptions are editorial summaries of public information. Each linked profile carries the same structured fields — category, license, self-hosting, version status, official screenshots where published, and pick-if / skip-if notes — and those notes are judgement, not measurements.</p>

<h2>What "no-code" buys you, and what it costs</h2>

<p>The win is speed and accessibility: a non-developer can stand up a retrieval agent or an approval workflow in an afternoon, and a developer can prototype without boilerplate. The cost is a ceiling. Once your agent needs custom logic that the canvas does not expose, you either accept the limitation or export to code and leave the visual tool behind. The good builders make that export path real rather than a trap.</p>

<p>Self-hosting is the other axis. Several of these are open-source and run on your own server, which matters if the data in your workflows is sensitive. The self-hosting field on each profile tells you whether that is even possible.</p>

<h2>Two canvas styles</h2>

<p><strong>Conversation builders.</strong> You assemble a chatbot with retrieval, memory and tools. <a href="/agent/dify/">Dify</a> and <a href="/agent/fastgpt/">FastGPT</a> lean this way, optimising for a deployable assistant with guardrails and an interface.</p>

<p><strong>Workflow builders.</strong> You assemble a directed graph of steps — triggers, conditions, tool calls — closer to traditional automation. <a href="/agent/flowise/">Flowise</a> shows this clearly in its editor, where a "Customer Refund" flow connects an email trigger to a decision and two branches. <a href="/agent/composio/">Composio</a> and <a href="/agent/activepieces/">Activepieces</a> sit in this neighbourhood too, focusing on integrations and actions.</p>

<h2>Seven builders, two styles</h2>

<table>
  <thead>
    <tr><th>Project</th><th>Category</th><th>License</th><th>Style</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/dify/">Dify</a></td><td>automation</td><td>open-source</td><td>Conversation and app builder</td></tr>
    <tr><td><a href="/agent/flowise/">Flowise</a></td><td>automation</td><td>open-source</td><td>Visual workflow canvas</td></tr>
    <tr><td><a href="/agent/fastgpt/">FastGPT</a></td><td>automation</td><td>open-source</td><td>Knowledge-base chatbot builder</td></tr>
    <tr><td><a href="/agent/composio/">Composio</a></td><td>automation</td><td>open-source</td><td>Tool and integration layer</td></tr>
    <tr><td><a href="/agent/activepieces/">Activepieces</a></td><td>automation</td><td>open-source</td><td>Open automation workflows</td></tr>
    <tr><td><a href="/agent/langbot/">LangBot</a></td><td>automation</td><td>open-source</td><td>Conversation-agent platform</td></tr>
    <tr><td><a href="/agent/kestra/">Kestra</a></td><td>automation</td><td>open-source</td><td>Data and orchestration workflows</td></tr>
  </tbody>
</table>

<h3>Dify and FastGPT: ship a chatbot</h3>
<p><a href="/agent/dify/">Dify</a> is the one to open if you want a full app surface — a deployed assistant with retrieval, evaluation and a UI. <a href="/agent/fastgpt/">FastGPT</a> is the leaner knowledge-base builder, good when the goal is "answer questions over our documents" rather than "build a product".</p>

<h3>Flowise: see the graph</h3>
<p><a href="/agent/flowise/">Flowise</a> is the project to study if you think in nodes and edges. Its editor, shown in the official screenshot above, makes the agent's control flow visible, which helps when you are debugging a branch that never fires. The embedded videos show similar canvas-style projects in motion.</p>

<h3>Composio, Activepieces, Kestra: integrations and orchestration</h3>
<p><a href="/agent/composio/">Composio</a> is less a builder than a connector layer that lets other agents act on hundreds of services; <a href="/agent/activepieces/">Activepieces</a> is the open Zapier-style automation you self-host; <a href="/agent/kestra/">Kestra</a> is the data-orchestration end, where the "agent" is really a scheduled, observable pipeline. Pick by what you are already automating.</p>

<h2>How to choose without painting yourself in</h2>

<p>Decide the ceiling first. If you will likely outgrow the canvas, check the export-to-code story before you commit data and teammates. If your need is a single internal assistant, the conversation builders win on time. If it is a multi-step process with conditions, the workflow builders win on clarity. And if the data is sensitive, filter to the self-hostable ones from the start.</p>

<h2>Official sources</h2>

<ul>
  <li><a href="https://github.com/langgenius/dify" target="_blank" rel="noopener">Dify repository</a> — conversation and app builder.</li>
  <li><a href="https://github.com/FlowiseAI/Flowise" target="_blank" rel="noopener">Flowise repository</a> — visual workflow canvas.</li>
  <li><a href="https://github.com/Activepieces/Activepieces" target="_blank" rel="noopener">Activepieces repository</a> — open automation.</li>
  <li><a href="https://github.com/kestra-io/kestra" target="_blank" rel="noopener">Kestra repository</a> — orchestration workflows.</li>
</ul>

<h2>Frequently asked questions</h2>

<h3>Will no-code lock me in?</h3>
<p>It can, if the builder has no real export path. The open-source ones here reduce that risk because you can self-host and, for several, export the underlying configuration. The pick-if notes flag which projects make leaving easy.</p>

<h3>Do these run on my own server?</h3>
<p>Most of the open-source ones do, and the self-hosting field on each profile says whether a local deployment is supported. The closed or commercial ones typically run as a hosted service.</p>

<h3>Does a demo video mean the tool was tested here?</h3>
<p>No. The videos are published by the projects, not by this directory. Our notes are editorial summaries of public information. For hands-on assurance, check the upstream repository and the current release status.</p>

<h2>Where to go next</h2>

<p>Open <a href="/agent/dify/">Dify</a>, <a href="/agent/flowise/">Flowise</a>, <a href="/agent/composio/">Composio</a>, <a href="/agent/activepieces/">Activepieces</a> and <a href="/agent/kestra/">Kestra</a> to compare them directly. For the coding side, <a href="/blog/lightweight-agent-frameworks-2026/">the lightweight frameworks guide</a> covers building agents in code, and <a href="/blog/official-agent-demo-videos-2026/">the official demo video shortlist</a> collects ten projects with published footage. The <a href="/blog/">guide index</a> has every article, and the <a href="/">directory</a> lets you filter by category.</p>
`,
  },

  {
    slug: 'lightweight-agent-frameworks-2026',
    title: 'Lightweight Agent Frameworks to Start With',
    excerpt: "You do not need a heavyweight orchestration platform to build an agent. Seven small frameworks are good first steps before you scale up to something bigger.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 9,
    tags: ['framework', 'python', 'open-source', 'getting-started', 'orchestration'],
    relatedAgents: [
      'openai-agents-sdk', 'pydantic-ai', 'smolagents', 'crewai', 'mastra', 'llama-index', 'langflow',
    ],
    coverThumb: '/blog/lightweight-agent-frameworks-2026-thumb.jpg',
    coverThumbAlt: 'Official OpenAI Agents SDK trace view showing MCP filesystem tool calls',
    coverThumbCredit: 'Official screenshot from the OpenAI Agents SDK documentation',
    coverThumbSource: 'https://github.com/openai/openai-agents-python',
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
        src: 'https://www.youtube.com/embed/0Zr3NwcvpA0',
        kind: 'youtube',
        title: 'Pocket Flow — official video',
        caption: 'Embedded from the Pocket Flow project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=0Zr3NwcvpA0',
      },
    ],
    content: `
<p><strong>The short version:</strong> the words "agent framework" conjure a heavy platform with a learning curve measured in weeks. But a lot of useful agents are built on small libraries that give you tools, a loop, and not much else — and that restraint is often the better starting point. This guide covers seven lightweight frameworks, why "small" is a feature, and how to pick one before you graduate to a larger system.</p>

<p>We are a directory of {{AGENT_COUNT}} agents, not a review site, and we do not run hands-on tests. The descriptions are editorial summaries of public information. Each linked profile carries the same structured fields — category, license, self-hosting, version status, official screenshots where published, and pick-if / skip-if notes — and those notes are judgement, not measurements.</p>

<h2>Why start small</h2>

<p>A minimal framework does one job: it gives you a repeatable way to call a model, use a tool, and loop until done. That is most of what a first agent needs. The larger frameworks add orchestration, state, deployment and observability — valuable later, but they are overhead now, and they are a cliff to fall off if you adopt them before you know which features you actually need. Starting small keeps the surface area you must understand small.</p>

<p>The official videos below make the point without words: a trace view shows the model calling a tool, getting a result, and looping — the entire mechanism of a small agent in a few steps.</p>

<h2>Three levels of "lightweight"</h2>

<p><strong>SDKs you call directly.</strong> <a href="/agent/openai-agents-sdk/">OpenAI Agents SDK</a> and <a href="/agent/pydantic-ai/">Pydantic AI</a> are Python libraries that feel like using the model with guardrails and tool calling added. They assume you write the surrounding application.</p>

<p><strong>Tiny opinionated cores.</strong> <a href="/agent/smolagents/">smolagents</a> and <a href="/agent/crewai/">CrewAI</a> give you a little more structure — agents and teams — while staying small enough to read in an afternoon. <a href="/agent/pocket-flow/">Pocket Flow</a> takes this to the extreme at roughly a hundred lines.</p>

<p><strong>Builders with a code side.</strong> <a href="/agent/llama-index/">LlamaIndex</a> and <a href="/agent/langflow/">Langflow</a> start from data and retrieval, which is natural if your agent is really a search-and-synthesise tool wearing an agent costume.</p>

<h2>Seven frameworks, three levels</h2>

<table>
  <thead>
    <tr><th>Project</th><th>Category</th><th>License</th><th>Level</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/openai-agents-sdk/">OpenAI Agents SDK</a></td><td>framework</td><td>open-source</td><td>Direct SDK</td></tr>
    <tr><td><a href="/agent/pydantic-ai/">Pydantic AI</a></td><td>framework</td><td>open-source</td><td>Direct SDK</td></tr>
    <tr><td><a href="/agent/smolagents/">smolagents</a></td><td>framework</td><td>open-source</td><td>Tiny core</td></tr>
    <tr><td><a href="/agent/crewai/">CrewAI</a></td><td>framework</td><td>open-source</td><td>Agents and teams</td></tr>
    <tr><td><a href="/agent/pocket-flow/">Pocket Flow</a></td><td>framework</td><td>open-source</td><td>Minimalist core</td></tr>
    <tr><td><a href="/agent/llama-index/">LlamaIndex</a></td><td>framework</td><td>open-source</td><td>Data and retrieval</td></tr>
    <tr><td><a href="/agent/langflow/">Langflow</a></td><td>framework</td><td>open-source</td><td>Visual plus code</td></tr>
  </tbody>
</table>

<h3>OpenAI Agents SDK and Pydantic AI: call the model, get structure</h3>
<p><a href="/agent/openai-agents-sdk/">OpenAI Agents SDK</a> and <a href="/agent/pydantic-ai/">Pydantic AI</a> are where to start if you already write Python and just want tool calling and a clean loop without a whole platform. The official screenshot on the SDK's profile is a trace of exactly that loop hitting a filesystem tool.</p>

<h3>smolagents, CrewAI and Pocket Flow: small but shaped</h3>
<p><a href="/agent/smolagents/">smolagents</a> and <a href="/agent/crewai/">CrewAI</a> add the idea of multiple agents working together while staying readable, and <a href="/agent/pocket-flow/">Pocket Flow</a> is the deliberate counterexample to large frameworks — a hundred lines that still express a graph of steps. If you want to understand what a framework provides before adopting a big one, a small one is the clearest textbook.</p>

<h3>LlamaIndex and Langflow: data-first</h3>
<p>If your agent is fundamentally "retrieve from my corpus and answer", <a href="/agent/llama-index/">LlamaIndex</a> is the established library, and <a href="/agent/langflow/">Langflow</a> adds a visual layer on top. They meet the no-code builders from the other direction: code-first, data-first, with a canvas available when you want one.</p>

<h2>How to pick, and when to graduate</h2>

<p>Pick the smallest thing that covers your case. Calling a model with tools and a loop? Use an SDK. Need several agents to coordinate? Use a tiny core. Need retrieval over your documents? Start with a data-first library. The signal to graduate to a larger framework is concrete: you are hand-rolling state, deployment, or observability that a bigger system would give you. Until then, small is faster and easier to debug.</p>

<h2>Official sources</h2>

<ul>
  <li><a href="https://github.com/openai/openai-agents-python" target="_blank" rel="noopener">OpenAI Agents SDK repository</a> — the direct SDK.</li>
  <li><a href="https://github.com/pydantic/pydantic-ai" target="_blank" rel="noopener">Pydantic AI repository</a> — typed agent library.</li>
  <li><a href="https://github.com/huggingface/smolagents" target="_blank" rel="noopener">smolagents repository</a> — minimal agent library.</li>
  <li><a href="https://github.com/crewAIInc/crewAI" target="_blank" rel="noopener">CrewAI repository</a> — agents and teams.</li>
</ul>

<h2>Frequently asked questions</h2>

<h3>Is a small framework less capable?</h3>
<p>Less featureful, not less capable. A small framework does less for you, which means fewer concepts to learn and fewer places for something to go wrong. You trade built-in orchestration for the freedom to add only what you need. Several large systems started as a small loop someone wrote by hand.</p>

<h3>When should I move to a bigger framework?</h3>
<p>When you are re-implementing features a platform already ships — durable state, a deployment story, tracing, guardrails. That is the moment the upfront cost of a larger framework pays off. The pick-if notes on each profile reflect the same threshold.</p>

<h3>Does a demo video mean the framework was tested here?</h3>
<p>No. The videos are published by the projects, not by this directory, and show selected tasks. Our notes are editorial summaries of public information. For hands-on assurance, check the upstream repository and the current release status.</p>

<h2>Where to go next</h2>

<p>Open <a href="/agent/openai-agents-sdk/">OpenAI Agents SDK</a>, <a href="/agent/pydantic-ai/">Pydantic AI</a>, <a href="/agent/smolagents/">smolagents</a>, <a href="/agent/crewai/">CrewAI</a>, <a href="/agent/pocket-flow/">Pocket Flow</a> and <a href="/agent/llama-index/">LlamaIndex</a>. For the bigger picture, <a href="/blog/agent-architecture-diagrams-2026/">the architecture diagram guide</a> shows how agent systems are wired, and <a href="/blog/official-agent-demo-videos-2026/">the official demo video shortlist</a> collects ten projects with published footage. The <a href="/blog/">guide index</a> has every article, and the <a href="/">directory</a> lets you filter by category.</p>
`,
  },

  {
    slug: 'local-private-ai-agents-2026',
    title: 'Local and Privacy-First AI Agents You Can Self-Host',
    excerpt: "If your data cannot leave your machine, these agents run locally or on your own server. Five projects cover private chat, search and knowledge work without sending everything to a cloud.",
    date: '2026-11-12',
    author: 'AI Agents Hub',
    readingTime: 8,
    tags: ['local', 'privacy', 'self-host', 'open-source', 'knowledge'],
    relatedAgents: [
      'khoj', 'anything-llm', 'notebooklm', 'siyuan', 'onyx',
    ],
    coverThumb: '/blog/local-private-ai-agents-2026-thumb.jpg',
    coverThumbAlt: 'Official Khoj settings screen for configuring the chat model',
    coverThumbCredit: 'Official screenshot from the Khoj project documentation',
    coverThumbSource: 'https://github.com/khoj-ai/khoj',
    videos: [
      {
        src: 'https://www.youtube.com/embed/f95rGD9trL0',
        kind: 'youtube',
        title: 'AnythingLLM — official video',
        caption: 'Embedded from the AnythingLLM project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=f95rGD9trL0',
      },
      {
        src: 'https://www.youtube.com/embed/G7gK8H6u7Rs',
        kind: 'youtube',
        title: 'Context7 — official video',
        caption: 'Embedded from the Context7 project channel.',
        sourceUrl: 'https://www.youtube.com/watch?v=G7gK8H6u7Rs',
      },
    ],
    content: `
<p><strong>The short version:</strong> a privacy-first agent is one you can run where the data lives — your laptop, your server, your network — instead of shipping every query to a third-party cloud. That matters for personal notes, company documents, and anything you would not paste into a public chatbot. This guide covers five projects that keep the work local or self-hosted, and the honest trade-offs that come with that choice.</p>

<p>We are a directory of {{AGENT_COUNT}} agents, not a review site, and we do not run hands-on tests. The descriptions are editorial summaries of public information. Each linked profile carries the same structured fields — category, license, self-hosting, version status, official screenshots where published, and pick-if / skip-if notes — and those notes are judgement, not measurements.</p>

<h2>What "local" actually buys you</h2>

<p>The benefit is control: your documents stay on infrastructure you own, and you decide which model runs and where. For personal knowledge and sensitive company material, that control is the feature, not a side effect. The cost is everything a cloud handles for you — model hosting, updates, scaling, and the convenience of not running a server. A local agent asks you to be the operator.</p>

<p>Self-hosting is the middle path: you run the software on your own server rather than your laptop, which keeps data off third-party clouds while still being reachable from your devices. The self-hosting field on each profile tells you whether that deployment is supported at all.</p>

<h2>Five projects, three jobs</h2>

<table>
  <thead>
    <tr><th>Project</th><th>Category</th><th>License</th><th>Job</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/agent/khoj/">Khoj</a></td><td>research</td><td>open-source</td><td>Personal AI search over your notes</td></tr>
    <tr><td><a href="/agent/anything-llm/">AnythingLLM</a></td><td>research</td><td>open-source</td><td>Self-hosted all-in-one workspace</td></tr>
    <tr><td><a href="/agent/notebooklm/">NotebookLM</a></td><td>research</td><td>freemium</td><td>Cloud notebook grounded in your files</td></tr>
    <tr><td><a href="/agent/siyuan/">SiYuan</a></td><td>research</td><td>open-source</td><td>Local knowledge workspace</td></tr>
    <tr><td><a href="/agent/onyx/">Onyx</a></td><td>research</td><td>open-source</td><td>Self-hosted enterprise search</td></tr>
  </tbody>
</table>

<h3>Khoj: search your own notes</h3>
<p><a href="/agent/khoj/">Khoj</a> is the project to open if you want a personal assistant that searches across the notes and documents you already have, running locally or on your own machine. Its settings screen, shown above, lets you choose the chat model directly — a small but telling sign of who controls the pipeline.</p>

<h3>AnythingLLM and SiYuan: the all-in-one and the workspace</h3>
<p><a href="/agent/anything-llm/">AnythingLLM</a> is the self-hosted workspace that bundles documents, chat and agents in one deployable package, which is why it is a common first choice for running a private assistant. <a href="/agent/siyuan/">SiYuan</a> is the local-first knowledge workspace where humans and AI collaborate on documents, with a desktop interface rather than a cloud service.</p>

<h3>NotebookLM and Onyx: the caveats</h3>
<p><a href="/agent/notebooklm/">NotebookLM</a> is the convenient option, but it is a cloud product from Google, so "private" here means grounded in your files rather than kept off all servers — an important distinction. <a href="/agent/onyx/">Onyx</a> is the enterprise end: self-hosted search across your company's tools, where the privacy benefit is keeping that index inside your network.</p>

<h2>How to self-host without becoming a sysadmin forever</h2>

<p>Start with a single-machine deploy of an all-in-one like <a href="/agent/anything-llm/">AnythingLLM</a> or <a href="/agent/khoj/">Khoj</a>, confirm it answers over your own documents, and only then worry about a shared server. Keep the model small enough to run locally if that is the point, and back up the document store before you trust it. The directory's pick-if notes flag which projects are genuinely local-first versus merely self-host-capable.</p>

<p>The official videos below are from projects in this group and show the local workspace experience. As always, they demonstrate the interface, not a hands-on test from this site.</p>

<h2>Official sources</h2>

<ul>
  <li><a href="https://github.com/khoj-ai/khoj" target="_blank" rel="noopener">Khoj repository</a> — personal AI search.</li>
  <li><a href="https://github.com/Mintplex-Labs/anything-llm" target="_blank" rel="noopener">AnythingLLM repository</a> — self-hosted workspace.</li>
  <li><a href="https://github.com/siyuan-note/siyuan" target="_blank" rel="noopener">SiYuan repository</a> — local knowledge workspace.</li>
  <li><a href="https://github.com/onyx-dot-app/onyx" target="_blank" rel="noopener">Onyx repository</a> — enterprise search.</li>
</ul>

<h2>Frequently asked questions</h2>

<h3>Is a local agent slower or less capable?</h3>
<p>Often slower, if you run a small model on your own hardware, and sometimes less capable than a frontier cloud model. The trade is deliberate: you accept lower convenience for control over where data goes. For many knowledge tasks a small local model is more than enough.</p>

<h3>Does self-hosting mean my data never leaves the machine?</h3>
<p>For genuinely local-first projects like <a href="/agent/siyuan/">SiYuan</a> and a self-hosted <a href="/agent/khoj/">Khoj</a>, yes. For cloud products such as <a href="/agent/notebooklm/">NotebookLM</a>, no — your files are uploaded to the provider even though the answers are grounded in them. The profile's self-hosting field and pick-if note state which is which.</p>

<h3>Does a demo video mean the tool was tested here?</h3>
<p>No. The videos are published by the projects, not by this directory. Our notes are editorial summaries of public information. For hands-on assurance, check the upstream repository and the current release status.</p>

<h2>Where to go next</h2>

<p>Open <a href="/agent/khoj/">Khoj</a>, <a href="/agent/anything-llm/">AnythingLLM</a>, <a href="/agent/siyuan/">SiYuan</a>, <a href="/agent/onyx/">Onyx</a> and <a href="/agent/notebooklm/">NotebookLM</a> to compare them. For related reading, <a href="/blog/rag-knowledge-agents-2026/">the RAG and knowledge-base guide</a> explains the retrieval behind several of these, and <a href="/blog/official-agent-demo-videos-2026/">the official demo video shortlist</a> collects ten projects with published footage. The <a href="/blog/">guide index</a> has every article, and the <a href="/">directory</a> lets you filter by category.</p>
`,
  },
];
