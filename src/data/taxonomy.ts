// ============================================================
//  Controlled topic taxonomy for the blog.
//  The 27 posts carry 94 free-form tags (many used only once).
//  This maps them onto 11 durable topics so that every
//  /blog/tags/<topic>/ page collects several real guides instead
//  of becoming a thin, one-article page.
// ============================================================

export interface TopicTag {
  slug: string;
  label: string;
  blurb: string;
}

export const TOPIC_TAGS: TopicTag[] = [
  {
    slug: 'comparison',
    label: 'Agent comparisons',
    blurb: 'Head-to-head reviews that put competing agents on the same workload, with the trade-offs, pricing and failure modes spelled out before you commit.',
  },
  {
    slug: 'ai-agents',
    label: 'AI agent fundamentals',
    blurb: 'How autonomous agents actually work: planning loops, tool use, memory, model choices and the limits that still require a human in the loop.',
  },
  {
    slug: 'coding',
    label: 'Coding agents',
    blurb: 'Terminal agents, AI editors and autonomous pull-request workflows. What they refactor well, where they stall, and how to review their diffs.',
  },
  {
    slug: 'frameworks',
    label: 'Agent frameworks',
    blurb: 'LangGraph, CrewAI, Agno, AutoGen and the rest of the build-your-own stack, compared on orchestration, observability and production readiness.',
  },
  {
    slug: 'research',
    label: 'Research and browsing',
    blurb: 'Agents that search, read and synthesize sources, plus browser-driven tools that complete multi-step tasks on the live web.',
  },
  {
    slug: 'creative',
    label: 'Creative and media',
    blurb: 'Image, video, music, voice and avatar agents. Practical guides to what each generator produces and how it fits into a publishing workflow.',
  },
  {
    slug: 'business',
    label: 'Business and productivity',
    blurb: 'Customer support, meetings, writing and day-to-day automation agents aimed at teams rather than developers.',
  },
  {
    slug: 'open-source',
    label: 'Open-source agents',
    blurb: 'Self-hostable projects with public code, permissive licences and active GitHub communities, including what it really costs to run them yourself.',
  },
  {
    slug: 'automation',
    label: 'Workflow automation',
    blurb: 'Connecting agents to the tools you already use: triggers, schedules, webhooks and the guardrails that keep an automated pipeline honest.',
  },
  {
    slug: 'data-rag',
    label: 'Data, RAG and analytics',
    blurb: 'Retrieval-augmented generation, text-to-SQL and agents that answer questions over private data without hallucinating a schema.',
  },
  {
    slug: 'mcp-tooling',
    label: 'MCP and developer tooling',
    blurb: 'Model Context Protocol, integrations, authentication and the infrastructure layer that lets an agent call real systems safely.',
  },
];

export const TOPIC_BY_SLUG: Record<string, TopicTag> = Object.fromEntries(
  TOPIC_TAGS.map((topic) => [topic.slug, topic]),
);

// Free-form post tags -> controlled topic slug.
const ALIASES: Record<string, string> = {
  comparison: 'comparison',

  agents: 'ai-agents', ai: 'ai-agents', 'ai-agents': 'ai-agents', llm: 'ai-agents',
  anthropic: 'ai-agents', claude: 'ai-agents', chatgpt: 'ai-agents',
  deepseek: 'ai-agents', huggingface: 'ai-agents', autonomous: 'ai-agents',

  coding: 'coding', 'code-agent': 'coding', vscode: 'coding', continue: 'coding',
  cody: 'coding', windsurf: 'coding', aider: 'coding', cursor: 'coding',
  cline: 'coding', 'claude-code': 'coding', replit: 'coding', devin: 'coding',

  'open-source': 'open-source', github: 'open-source',

  framework: 'frameworks', frameworks: 'frameworks', langgraph: 'frameworks',
  crewai: 'frameworks', agno: 'frameworks', autogen: 'frameworks',
  mastra: 'frameworks', langchain: 'frameworks', smolagents: 'frameworks',
  'pydantic-ai': 'frameworks', python: 'frameworks', llamaindex: 'frameworks',
  'llama-index': 'frameworks',

  research: 'research', 'deep-research': 'research', browsing: 'research',
  perplexity: 'research', elicit: 'research', consensus: 'research',
  news: 'research', notebooklm: 'research',

  automation: 'automation', workflows: 'automation', n8n: 'automation',
  make: 'automation', 'zapier-agents': 'automation', 'browser-use': 'automation',
  operator: 'automation', manus: 'automation',

  creative: 'creative', image: 'creative', midjourney: 'creative', flux: 'creative',
  lovart: 'creative', video: 'creative', runway: 'creative', sora: 'creative',
  pika: 'creative', music: 'creative', suno: 'creative', udio: 'creative',
  avatar: 'creative', heygen: 'creative', synthesia: 'creative', voice: 'creative',
  vapi: 'creative', retell: 'creative', elevenlabs: 'creative',

  business: 'business', enterprise: 'business', 'customer-service': 'business',
  sierra: 'business', decagon: 'business', productivity: 'business',
  'how-to': 'business', meetings: 'business', notion: 'business',
  grammarly: 'business', chat: 'business',

  'data-rag': 'data-rag', rag: 'data-rag', data: 'data-rag', sql: 'data-rag',
  analysis: 'data-rag', vanna: 'data-rag',

  'mcp-tooling': 'mcp-tooling', mcp: 'mcp-tooling', protocol: 'mcp-tooling',
  integrations: 'mcp-tooling', auth: 'mcp-tooling', tooling: 'mcp-tooling',
  infrastructure: 'mcp-tooling',
};

export function topicTagsFor(tags: string[], max = 4): string[] {
  const found: string[] = [];
  for (const tag of tags) {
    const topic = ALIASES[tag.trim().toLowerCase()];
    if (topic && !found.includes(topic)) found.push(topic);
    if (found.length >= max) break;
  }
  if (found.length === 0) found.push('ai-agents');
  return found;
}

export function topicLabel(slug: string): string {
  return TOPIC_BY_SLUG[slug]?.label ?? slug.replace(/-/g, ' ');
}
