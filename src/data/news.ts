// ============================================================
//  AI News 数据源 —— 由 scripts/fetch-news.mjs 自动生成
//  最后更新：2026-06-28T16:07:08.734Z
//  请勿手动编辑（会被下次抓取覆盖）；手动精选请放种子文件
// ============================================================

export type NewsCategory =
  | 'release'
  | 'funding'
  | 'research'
  | 'industry'
  | 'regulation';

export const newsCategories: { id: NewsCategory; label: string }[] = [
  { id: 'release', label: 'Releases' },
  { id: 'funding', label: 'Funding' },
  { id: 'research', label: 'Research' },
  { id: 'industry', label: 'Industry' },
  { id: 'regulation', label: 'Regulation' },
];

export interface NewsItem {
  slug: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  date: string;
  category: NewsCategory;
  tags: string[];
}

export const categoryAccent: Record<NewsCategory, string> = {
  release: 'linear-gradient(135deg, #6366f1, #818cf8)',
  funding: 'linear-gradient(135deg, #22c55e, #4ade80)',
  research: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
  industry: 'linear-gradient(135deg, #ec4899, #f472b6)',
  regulation: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
};

export const news: NewsItem[] = [
  {
    slug: 'why-wall-street-thinks-us-memory-techcr',
    title: 'Why Wall Street thinks US memory maker Micron is the next Nvidia',
    summary: 'Eager to find more public AI-related companies that may do as well as Nvidia, Wall Street investors think they\'ve found a winner with Micron.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/28/why-wall-street-thinks-us-memory-maker-micron-is-the-next-nvidia/',
    date: '2026-06-28',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'trump-admin-releases-anthropic-mythos-to-techcr',
    title: 'Trump Admin releases Anthropic Mythos to be used by more than 100 US companies, agencies',
    summary: 'Over 100 companies and government agencies are reportedly authorized to use Mythos 5, including their non-American employees.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/26/trump-admin-releases-anthropic-mythos-to-be-used-by-more-than-100-us-companies-agencies/',
    date: '2026-06-27',
    category: 'release',
    tags: ["anthropic"],
  },
  {
    slug: 'asian-ai-startups-launch-mythos-like-models-techcr',
    title: 'Asian AI startups launch Mythos-like  models as Anthropic&#8217;s export ban drags on',
    summary: 'New models are launching in Asia that promise Mythos-like capabilities without fear of an export ban. U.S. AI labs may never recover this enormous market.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/27/asian-ai-startups-launch-mythos-like-models-as-anthropics-export-ban-drags-on/',
    date: '2026-06-27',
    category: 'regulation',
    tags: ["anthropic"],
  },
  {
    slug: 'the-fittest-founder-in-the-room-techcr',
    title: 'The fittest founder in the room got cancer. Here&#8217;s how he used AI to fight back.',
    summary: 'When confronted with cancer, Connor Christou fed everything tied tied to his regime — blood results, scan data, wearable output, journal entries — into Claude.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/27/the-fittest-founder-in-the-room-got-cancer-heres-how-he-used-ai-to-fight-back/',
    date: '2026-06-27',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'apple-vision-pro-exec-is-reportedly-techcr',
    title: 'Apple Vision Pro exec is reportedly leaving for OpenAI',
    summary: 'Paul Meade, the Apple vice president in charge of the Vision Pro headset, is reportedly leaving the company to join OpenAI’s hardware team.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/27/apple-vision-pro-exec-is-reportedly-leaving-for-openai/',
    date: '2026-06-27',
    category: 'industry',
    tags: ["openai"],
  },
  {
    slug: 'openai8217s-jalapeo-chip-is-big-tech8217s-techcr',
    title: 'OpenAI&#8217;s Jalapeño chip is Big Tech&#8217;s spiciest move away from Nvidia',
    summary: 'Nvidia has dominated the AI chip market for years, but the era of total dependence might be ending.&#160;&#160; OpenAI just shared its plans to spice things up with&#160;Jalapeño, its custom inference',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/podcast/openais-jalapeno-chip-is-big-techs-spiciest-move-away-from-nvidia/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai"],
  },
  {
    slug: 'it8217s-not-about-anthropic-vs-openai-techcr',
    title: 'It&#8217;s not about Anthropic vs. OpenAI anymore',
    summary: 'AI models have progressed to the point where their capabilities have real political consequences. Dealing with those consequences will require collective action.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/26/its-not-about-anthropic-vs-openai-anymore/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai","anthropic"],
  },
  {
    slug: 'why-everyone-from-openai-to-spacex-techcr',
    title: 'Why everyone from OpenAI to SpaceX is building their own chips (and turning up the heat on Nvidia)',
    summary: 'Nvidia has dominated the AI chip market for years, but the era of total dependence might be ending.&#160;&#160; OpenAI just shared its plans to spice things up with&#160;Jalapeño, its custom inference',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/video/why-everyone-from-openai-to-spacex-is-building-their-own-chips-and-turning-up-the-heat-on-nvidia/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai"],
  },
  {
    slug: 'openai-poaches-uber-india-chief-to-techcr',
    title: 'OpenAI poaches Uber India chief to lead its biggest market outside the US',
    summary: 'The hire marks OpenAI\'s latest push into India, expanding offices, partnerships and hiring.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/26/openai-poaches-uber-india-chief-to-lead-its-biggest-market-outside-the-u-s/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai"],
  },
  {
    slug: 'openai-limits-gpt-56-rollout-after-government-techcr',
    title: 'OpenAI limits GPT-5.6 rollout after government request, says restrictions shouldn’t be the norm',
    summary: '“We don’t believe this kind of government access process should become the long-term default,” says OpenAI. “It keeps the best tools from users, developers, enterprises, cyber defenders, and global pa',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/26/openai-limits-gpt-5-6-rollout-after-government-request-says-restrictions-shouldnt-be-the-norm/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai","gpt"],
  },
  {
    slug: 'adobe-acquires-image-and-video-enhancement-techcr',
    title: 'Adobe acquires image and video enhancement tool maker Topaz Labs',
    summary: 'Adobe said that it will integrate Topaz Labs\' tools across its apps.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/adobe-acquires-image-and-video-enhancement-tool-maker-topaz-labs/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["image","video"],
  },
  {
    slug: 'netris-raises-15m-series-a-from-techcr',
    title: 'Netris raises $15M Series A from a16z to help AI neoclouds go live faster',
    summary: 'Netris provides software that runs on network switches, and offers a platform that helps neocloud operators reduce the time it takes to go live.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/netris-raises-15m-series-a-from-a16z-to-help-ai-neoclouds-go-live-faster/',
    date: '2026-06-25',
    category: 'funding',
    tags: ["ai"],
  },
  {
    slug: 'databricks-former-ai-chief-thinks-he-techcr',
    title: 'Databricks’ former AI chief thinks he can cut AI’s power bill by 1,000x',
    summary: 'Un-0 is an image-generation system tool that shows for the first time how the company\'s technology can replicate conventional AI systems.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/databricks-former-ai-chief-thinks-he-can-cut-ais-power-bill-by-1000x/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'general-intuition8217s-23b-bet-that-video-techcr',
    title: 'General Intuition&#8217;s $2.3B bet that video games can train AI agents for the real world',
    summary: 'General Intuition has raised $320 million to scale AI trained on millions of hours of gameplay, betting action data can help AI develop something closer to human intuition.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/general-intuitions-2-3b-bet-that-video-games-can-train-ai-agents-for-the-real-world/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["agent","video"],
  },
  {
    slug: 'anthropic8217s-claude-is-winning-over-paid-techcr',
    title: 'Anthropic&#8217;s Claude is winning over paid consumers, a market owned by ChatGPT',
    summary: 'Despite ChatGPT\'s commanding market lead, consumers who pay for AI have been increasingly choosing Anthropic\'s Claude, data shows.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/anthropics-claude-is-winning-over-paid-consumers-a-market-owned-by-chatgpt/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["anthropic","claude","gpt"],
  },
  {
    slug: 'patronus-ai-lands-50m-to-build-techcr',
    title: 'Patronus AI lands $50M to build ‘digital worlds’ that stress-test AI agents',
    summary: 'Agent-testing startup Patronus AI, founded by former Meta AI researchers, is experiencing nearly insatiable demand, its investor says.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/patronus-ai-lands-50m-to-build-digital-worlds-that-stress-test-ai-agents/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["agent"],
  },
  {
    slug: 'the-white-house-is-asking-openai-techcr',
    title: 'The White House is asking OpenAI to slow roll the release of its new model over safety concerns',
    summary: 'OpenAI reportedly plans to share its newest model, GPT 5.6, with a select group of partners instead of with the broader public. The reason: the Trump administration told it to.',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/the-white-house-is-asking-openai-to-slow-roll-the-release-of-its-new-model-over-safety-concerns/',
    date: '2026-06-25',
    category: 'release',
    tags: ["openai"],
  },
];

export function getNewsSorted(): NewsItem[] {
  return [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsByCategory(cat: NewsCategory): NewsItem[] {
  return news
    .filter((n) => n.category === cat)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
