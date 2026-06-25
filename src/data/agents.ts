// ============================================================
//  AI Agents 数据源
//  - 每个 Agent 一个对象，字段统一
//  - 更新方式：直接编辑这个文件，或用脚本生成后覆盖
//  - 字段说明：
//      slug        URL 用，唯一
//      name        展示名
//      tagline     一句话描述（用你自己的话，别抄）
//      category    主分类（coding/research/browsing/automation/framework）
//      license     open-source / commercial / freemium
//      licenseName 具体协议（MIT、Apache-2.0 等）
//      selfHost    能否自己部署
//      difficulty  学习/上手难度 1-5
//      website     官网
//      github      GitHub 仓库（有则填）
//      stars       GitHub star 数（近似值，定期更新）
//      updated     最近一次有意义的更新（YYYY-MM）
//      tags        细粒度场景标签
//      pricing     价格简述
//      verdict     你的一句话点评（原创，是壁垒）
// ============================================================

export type License = 'open-source' | 'commercial' | 'freemium';

export interface Agent {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  license: License;
  licenseName?: string;
  selfHost: boolean;
  difficulty: 1 | 2 | 3 | 4 | 5;
  website: string;
  github?: string;
  stars?: number;
  updated?: string;
  tags: string[];
  pricing: string;
  verdict: string;
}

export type Category =
  | 'coding'
  | 'research'
  | 'browsing'
  | 'automation'
  | 'framework'
  | 'creative';

export const categories: { id: Category; label: string; description: string }[] = [
  { id: 'coding', label: 'Coding', description: 'Write, refactor, and review code' },
  { id: 'research', label: 'Research', description: 'Search, read, and synthesize information' },
  { id: 'browsing', label: 'Browsing', description: 'Navigate the web and complete tasks online' },
  { id: 'automation', label: 'Automation', description: 'Run workflows and connect tools' },
  { id: 'framework', label: 'Framework', description: 'Build your own agents' },
  { id: 'creative', label: 'Creative', description: 'Generate text, images, and media' },
];

export const agents: Agent[] = [
  // ---------------- Coding ----------------
  {
    slug: 'claude-code',
    name: 'Claude Code',
    tagline: 'Anthropic’s terminal-native coding agent that edits real codebases.',
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 2,
    website: 'https://www.anthropic.com/claude-code',
    github: undefined,
    tags: ['terminal', 'cli', 'refactor', 'anthropic'],
    pricing: 'Included with Claude Pro/Max; pay-per-token API also available',
    verdict: 'The most reliable terminal coding agent right now — great at multi-file refactors.',
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    tagline: 'An AI-first code editor with agent mode and tab autocomplete.',
    category: 'coding',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://cursor.com',
    tags: ['editor', 'autocomplete', 'agent-mode'],
    pricing: 'Free tier; Pro $20/mo',
    verdict: 'Easiest onboarding for developers who want AI without leaving the editor.',
  },
  {
    slug: 'cline',
    name: 'Cline',
    tagline: 'Open-source autonomous coding agent that runs inside VS Code.',
    category: 'coding',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: false,
    difficulty: 2,
    website: 'https://cline.bot',
    github: 'https://github.com/cline/cline',
    stars: 20000,
    updated: '2026-05',
    tags: ['vscode', 'autonomous', 'BYOK'],
    pricing: 'Free extension; bring your own API keys',
    verdict: 'Best open-source alternative to paid coding agents — you control the model and cost.',
  },
  {
    slug: 'aider',
    name: 'Aider',
    tagline: 'CLI coding agent that pairs with you and commits clean git history.',
    category: 'coding',
    license: 'open-source',
    licenseName: 'Apache-2.0',
    selfHost: false,
    difficulty: 3,
    website: 'https://aider.chat',
    github: 'https://github.com/Aider-AI/aider',
    stars: 19000,
    updated: '2026-05',
    tags: ['cli', 'git', 'pair-programming'],
    pricing: 'Free; bring your own API keys',
    verdict: 'A git-native power tool — loved by devs who think in diffs and commits.',
  },

  // ---------------- Research ----------------
  {
    slug: 'perplexity',
    name: 'Perplexity',
    tagline: 'Answer engine that cites live web sources for every claim.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://www.perplexity.ai',
    tags: ['search', 'citations', 'pro-search'],
    pricing: 'Free; Pro $20/mo',
    verdict: 'The fastest way to go from a question to sourced answers.',
  },
  {
    slug: 'elicit',
    name: 'Elicit',
    tagline: 'Research agent that reads academic papers and extracts findings.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 2,
    website: 'https://elicit.com',
    tags: ['academic', 'papers', 'literature-review'],
    pricing: 'Free tier; Plus $12/mo',
    verdict: 'Indispensable for literature reviews — turns 50 papers into a table.',
  },
  {
    slug: 'consensus',
    name: 'Consensus',
    tagline: 'Search engine that summarizes what science says about a question.',
    category: 'research',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://consensus.app',
    tags: ['academic', 'evidence', 'summaries'],
    pricing: 'Free tier; Premium $9/mo',
    verdict: 'Best when you want the scientific consensus, not just web opinions.',
  },

  // ---------------- Browsing ----------------
  {
    slug: 'operator',
    name: 'ChatGPT Operator',
    tagline: 'OpenAI’s browser agent that can click and fill forms for you.',
    category: 'browsing',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://openai.com/index/introducing-operator/',
    tags: ['browser', 'task-completion', 'openai'],
    pricing: 'Included with ChatGPT Pro ($200/mo)',
    verdict: 'Impressive on routine web tasks, but expensive and still early.',
  },
  {
    slug: 'browser-use',
    name: 'Browser Use',
    tagline: 'Open-source library that lets any LLM drive a real browser.',
    category: 'browsing',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://browser-use.com',
    github: 'https://github.com/browser-use/browser-use',
    stars: 55000,
    updated: '2026-05',
    tags: ['python', 'playwright', 'BYOK'],
    pricing: 'Free library; cloud option available',
    verdict: 'The de-facto open standard for browser automation with LLMs.',
  },

  // ---------------- Automation ----------------
  {
    slug: 'n8n',
    name: 'n8n',
    tagline: 'Self-hostable workflow automation with a visual node editor.',
    category: 'automation',
    license: 'open-source',
    licenseName: 'Sustainable Use License',
    selfHost: true,
    difficulty: 3,
    website: 'https://n8n.io',
    github: 'github.com/n8n-io/n8n',
    stars: 80000,
    updated: '2026-05',
    tags: ['workflows', 'integrations', 'self-host', 'low-code'],
    pricing: 'Free self-host; cloud from $24/mo',
    verdict: 'If Zapier is too limiting and too expensive, n8n is the upgrade.',
  },
  {
    slug: 'zapier-agents',
    name: 'Zapier Agents',
    tagline: 'Build agents that act across 7,000+ apps without code.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 1,
    website: 'https://zapier.com/agents',
    tags: ['no-code', 'integrations', 'workflows'],
    pricing: 'Free trial; plans from $20/mo',
    verdict: 'Best when your automations already live in Zapier.',
  },
  {
    slug: 'make',
    name: 'Make',
    tagline: 'Visual automation platform for complex multi-step workflows.',
    category: 'automation',
    license: 'commercial',
    selfHost: false,
    difficulty: 2,
    website: 'https://www.make.com',
    tags: ['no-code', 'scenarios', 'integrations'],
    pricing: 'Free tier; Core $9/mo',
    verdict: 'More powerful and cheaper than Zapier for visual thinkers.',
  },

  // ---------------- Framework ----------------
  {
    slug: 'langgraph',
    name: 'LangGraph',
    tagline: 'Build stateful, multi-actor agents as a graph from LangChain.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://langchain-ai.github.io/langgraph/',
    github: 'github.com/langchain-ai/langgraph',
    stars: 12000,
    updated: '2026-05',
    tags: ['python', 'typescript', 'stateful', 'production'],
    pricing: 'Free library; LangGraph Cloud paid',
    verdict: 'The framework to reach for when simple chains aren’t enough.',
  },
  {
    slug: 'crewai',
    name: 'CrewAI',
    tagline: 'Orchestrate role-playing agents that collaborate on tasks.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 3,
    website: 'https://crewai.com',
    github: 'github.com/crewAIInc/crewAI',
    stars: 28000,
    updated: '2026-05',
    tags: ['python', 'multi-agent', 'roles'],
    pricing: 'Free library; CrewAI Enterprise paid',
    verdict: 'Most approachable multi-agent framework — great for prototyping teams.',
  },
  {
    slug: 'autogen',
    name: 'AutoGen',
    tagline: 'Microsoft’s framework for building conversational multi-agent systems.',
    category: 'framework',
    license: 'open-source',
    licenseName: 'MIT',
    selfHost: true,
    difficulty: 4,
    website: 'https://microsoft.github.io/autogen/',
    github: 'github.com/microsoft/autogen',
    stars: 38000,
    updated: '2026-05',
    tags: ['python', 'multi-agent', 'research'],
    pricing: 'Free library',
    verdict: 'Research-flavored and powerful, but steeper learning curve than CrewAI.',
  },

  // ---------------- Creative ----------------
  {
    slug: 'manus',
    name: 'Manus',
    tagline: 'General-purpose agent that delivers finished deliverables autonomously.',
    category: 'creative',
    license: 'freemium',
    selfHost: false,
    difficulty: 1,
    website: 'https://manus.im',
    tags: ['general', 'deliverables', 'autonomous'],
    pricing: 'Invite/subscription based',
    verdict: 'Hyped for end-to-end deliverables — judge it on the output, not the demo.',
  },
];

// 工具函数：按分类聚合
export function getAgentsByCategory(cat: Category): Agent[] {
  return agents
    .filter((a) => a.category === cat)
    .sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0));
}

export function getFeatured(): Agent[] {
  // 首页推荐：每个分类里取 star 最高的或最具代表性的
  return ['cline', 'aider', 'perplexity', 'browser-use', 'n8n', 'crewai']
    .map((slug) => agents.find((a) => a.slug === slug))
    .filter(Boolean) as Agent[];
}
