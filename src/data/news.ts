// ============================================================
//  AI News 数据源 —— 由 scripts/fetch-news.mjs 自动生成
//  最后更新：2026-07-01T04:59:47.931Z
//  标 [seed] 的条目来自 src/data/news-seeds.ts（手工精选，不会被覆盖）
//  标 [seed] 的 content / imageUrl 由人工维护；其余由脚本自动抓取
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
  content: string;
  imageUrl: string;
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
  {  // [seed]
    slug: 'why-wall-street-thinks-us-memory-techcr',
    title: 'Why Wall Street thinks US memory maker Micron is the next Nvidia',
    summary: 'AI-driven demand for high-bandwidth memory has turned Micron into one of Wall Street\'s hottest AI trades, with shares up 236% in a month and quarterly revenue quadrupling.',
    content: `US memory chip maker Micron has emerged as one of Wall Street's hottest AI bets. The Boise-based company — long associated with consumer storage cards — is now riding the AI data center boom, where high-bandwidth memory (HBM) is in severe shortage.

Its stock has climbed more than 236% in the past month, briefly pushing its market cap to around \$1.27 trillion — at one point surpassing Meta and Tesla. Quarterly revenue quadrupled year-over-year to \$41.45 billion, with profits jumping from \$1.88 billion to \$28.2 billion.

Micron has signed 16 strategic customer agreements across data center, consumer, and automotive segments to lock in long-term demand. Analysts say the memory supply crunch — dubbed "RAMageddon" — could persist into 2027, keeping prices and margins elevated. The key question is whether Micron can sustain growth without the bust cycle that has historically haunted memory makers.`,
    imageUrl: '/news/why-wall-street-thinks-us-memory-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/28/why-wall-street-thinks-us-memory-maker-micron-is-the-next-nvidia/',
    date: '2026-06-28',
    category: 'industry',
    tags: ["ai","semiconductors"],
  },
  {  // [seed]
    slug: 'apple-vision-pro-exec-is-reportedly-techcr',
    title: 'Apple Vision Pro exec is reportedly leaving for OpenAI',
    summary: 'Apple VP Paul Meade — the executive running the Vision Pro headset program — is leaving to join OpenAI\'s hardware team.',
    content: `Apple vice president Paul Meade, who led the Vision Pro headset program, is leaving the company to join OpenAI's hardware team. The departure is notable because OpenAI has been quietly building a hardware division — most visibly through its work with Jony Ive — and Meade's headset experience is directly relevant.

For Apple, losing a senior executive in the Vision Products Group adds to a string of hardware departures as the company tries to keep pace in AI. The Vision Pro remains a niche product commercially, but it sits at the intersection of spatial computing and AI inference — both areas where Apple is under pressure to ship competitive models and silicon.

OpenAI's hardware roadmap has been the subject of intense speculation for over a year. Hiring a seasoned Apple exec with shipping hardware experience suggests the lab is moving from "we're exploring" toward "we're building something specific."`,
    imageUrl: '/news/apple-vision-pro-exec-is-reportedly-techcr.jpeg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/27/apple-vision-pro-exec-is-reportedly-leaving-for-openai/',
    date: '2026-06-27',
    category: 'industry',
    tags: ["openai","apple","hardware"],
  },
  {  // [seed]
    slug: 'the-fittest-founder-in-the-room-techcr',
    title: 'The fittest founder in the room got cancer. Here\'s how he used AI to fight back.',
    summary: 'When Connor Christou was diagnosed with cancer, he fed every biomarker, scan, and wearable datapoint he had into Claude — and used the LLM as a second opinion alongside his oncology team.',
    content: `Connor Christou, a fitness-focused founder who built his regimen down to heart-rate variability and grip strength, faced an unexpected opponent: cancer. Rather than relying solely on traditional oncology, Christou fed every data point he could — bloodwork, scan results, wearable output, sleep logs, journal entries — into Anthropic's Claude, asking it to surface patterns his doctors might miss.

The case has become a talking point in the AI-in-healthcare conversation, illustrating how LLMs are increasingly being used as a second opinion by technically literate patients. Christou is careful to note that Claude informed his questions and helped him frame conversations with his care team — it did not replace medical advice.

The story highlights a regulatory gray zone: patients can ask LLMs anything, but integrating their output into clinical decision-making raises questions about liability, accuracy, and the line between "research" and "diagnosis" that no current framework cleanly resolves.`,
    imageUrl: '/news/the-fittest-founder-in-the-room-techcr.png?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/27/the-fittest-founder-in-the-room-got-cancer-heres-how-he-used-ai-to-fight-back/',
    date: '2026-06-27',
    category: 'industry',
    tags: ["ai","healthcare","anthropic"],
  },
  {  // [seed]
    slug: 'asian-ai-startups-launch-mythos-like-models-techcr',
    title: 'Asian AI startups launch Mythos-like models as Anthropic\'s export ban drags on',
    summary: 'With US frontier models increasingly locked out of Asia, startups in China, Korea, and Japan are racing to ship Mythos-class alternatives — and the market may not wait for Washington.',
    content: `While the US debates how to handle Anthropic's banned Mythos model, AI startups across Asia are racing to build comparable alternatives. Several newly announced models claim Mythos-level capabilities — without the export restrictions that now limit American frontier AI in the region.

Industry analysts warn that if US labs cannot sell into Asian markets, the window for shaping global AI standards may close permanently. The result could be a fragmented AI ecosystem dominated by Chinese, Korean, and Japanese providers serving the world's largest concentration of users.

The longer the export controls drag on, the more entrenched local competitors become — and the harder it will be for American labs to recover share once the restrictions eventually lift. The next six to twelve months are likely to determine whether the Asian market remains a frontier battleground or becomes a permanently separate stack.`,
    imageUrl: '/news/asian-ai-startups-launch-mythos-like-models-techcr.jpeg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/27/asian-ai-startups-launch-mythos-like-models-as-anthropics-export-ban-drags-on/',
    date: '2026-06-27',
    category: 'regulation',
    tags: ["anthropic","export"],
  },
  {  // [seed]
    slug: 'trump-admin-releases-anthropic-mythos-to-techcr',
    title: 'Trump Admin releases Anthropic Mythos to be used by more than 100 US companies, agencies',
    summary: 'The Trump administration has authorized more than 100 US companies and agencies — including their non-American employees — to use Anthropic\'s frontier model Mythos 5.',
    content: `The Trump administration has authorized more than 100 US companies and government agencies to use Anthropic's latest model, Mythos 5. The release extends access to non-American employees at those organizations, marking a significant policy shift toward broader federal adoption of frontier AI.

Anthropic had previously limited Mythos to a small set of trusted partners amid safety concerns; the new authorization signals growing official comfort with deploying the model in critical infrastructure, defense-adjacent, and enterprise settings.

The move also creates a useful precedent for how US frontier models might be distributed at scale: a vetted partner list, with explicit government sign-off, rather than open public access. Watch for similar treatment of OpenAI's GPT-5.6 and other near-frontier models in the coming weeks.`,
    imageUrl: '/news/trump-admin-releases-anthropic-mythos-to-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/26/trump-admin-releases-anthropic-mythos-to-be-used-by-more-than-100-us-companies-agencies/',
    date: '2026-06-27',
    category: 'release',
    tags: ["anthropic","regulation"],
  },
  {  // [seed]
    slug: 'openai-limits-gpt-56-rollout-after-government-techcr',
    title: 'OpenAI limits GPT-5.6 rollout after government request, says restrictions shouldn\'t be the norm',
    summary: 'GPT-5.6 — Sol, Terra, and Luna — is launching to a small set of trusted partners at the Trump administration\'s request. OpenAI says the limited rollout is a short-term step, not the new default.',
    content: `OpenAI is releasing its GPT-5.6 lineup — Sol, Terra, and Luna — only to a small group of "trusted partners" at the Trump administration's request. OpenAI said the limited rollout is a short-term step while the company works with the White House on a repeatable process for future frontier releases.

GPT-5.6 Sol outperforms Anthropic's Claude Mythos 5 on several coding benchmarks while using about a third of the output tokens. The model introduces a "max" reasoning effort mode and an "ultra" mode that coordinates sub-agents on highly complex tasks — the kind of capability that sends token usage (and the bill) soaring.

Pricing is tiered: Sol at \$5/\$30 per million input/output tokens, Terra at half that, and Luna at \$1/\$6. OpenAI has also improved prompt caching to make repeated prompts cheaper and more predictable.

The company was careful to publicly state that it does not believe "this kind of government access process should become the long-term default" — a notable framing given the cooperative tone of the rollout itself. Expect a wider public release in the coming weeks if the preview period goes smoothly.`,
    imageUrl: '/news/openai-limits-gpt-56-rollout-after-government-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/26/openai-limits-gpt-5-6-rollout-after-government-request-says-restrictions-shouldnt-be-the-norm/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai","gpt","policy"],
  },
  {  // [seed]
    slug: 'openai-poaches-uber-india-chief-to-techcr',
    title: 'OpenAI poaches Uber India chief to lead its biggest market outside the US',
    summary: 'OpenAI is staffing up in India — its largest market outside the US — by hiring the head of Uber India as the company expands offices, partnerships, and engineering hires.',
    content: `OpenAI has hired the head of Uber India to lead its largest market outside the United States. The move is part of a broader India push: more offices, more local partnerships, more engineering hires.

India is now one of the fastest-growing markets for AI consumer products, and OpenAI's bet is that local leadership and on-the-ground operational depth will determine who wins the next billion users. Indian consumers already use ChatGPT heavily; the question is whether OpenAI can convert that interest into paying subscribers and enterprise contracts before Anthropic, Google, and domestic players (Krutrim, Sarvam, others) close the window.

The hire also signals that OpenAI is treating India not as a single market but as a regional hub for South Asia. Expect more local partnerships with telecom carriers and state-level digital initiatives over the next 12 months.`,
    imageUrl: '/news/openai-poaches-uber-india-chief-to-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/26/openai-poaches-uber-india-chief-to-lead-its-biggest-market-outside-the-u-s/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai","india"],
  },
  {  // [seed]
    slug: 'why-everyone-from-openai-to-spacex-techcr',
    title: 'Why everyone from OpenAI to SpaceX is building their own chips (and turning up the heat on Nvidia)',
    summary: 'Big Tech has had enough of Nvidia margins. Custom inference silicon — from OpenAI\'s Jalapeño to SpaceX-adjacent projects — is quietly reshaping the AI hardware stack.',
    content: `From OpenAI to SpaceX, the largest AI players are all designing custom silicon. Nvidia's near-monopoly on AI training chips has made compute costs both a strategic vulnerability and a margin sink.

Custom inference chips — like OpenAI's Jalapeño, Google's TPUs, and Amazon's Trainium — let companies optimize for their specific workloads while reducing dependence on a single supplier. The result is a quiet but accelerating rewiring of the AI hardware stack.

The competitive effect: Nvidia's pricing power erodes from below as more workloads run on alternatives, even if Nvidia retains the high-end training market for years. Customers also gain negotiating leverage — the credible threat of "we'll move more to in-house silicon" is enough to extract better terms on the Nvidia side that remains.`,
    imageUrl: '/news/why-everyone-from-openai-to-spacex-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/video/why-everyone-from-openai-to-spacex-is-building-their-own-chips-and-turning-up-the-heat-on-nvidia/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai","semiconductors","nvidia"],
  },
  {  // [seed]
    slug: 'it8217s-not-about-anthropic-vs-openai-techcr',
    title: 'It\'s not about Anthropic vs. OpenAI anymore',
    summary: 'The frontier-model race has matured into a political question. Cybersecurity, biotech, autonomous weapons, and surveillance are now in scope — and collective governance, not vendor competition, will shape how these systems get deployed.',
    content: `The rivalry between Anthropic and OpenAI has outgrown the product comparison phase. Both labs now build models with capabilities that carry genuine political consequences — cybersecurity, biotech, autonomous weapons, and surveillance are all in scope.

The argument: collective governance, not vendor competition, will determine how these systems get deployed. The Trump administration's recent executive order on AI review has accelerated that conversation, with both labs responding publicly about what kind of oversight they find acceptable.

The shift is structural. When frontier models were research curiosities, lab-vs-lab benchmarks felt like the right frame. Now that the same models can identify software vulnerabilities at machine speed or guide novel-pathogen synthesis, the question isn't "whose model is better" — it's "what guardrails should any model of this class ship with, regardless of who built it." That is a question for governments, standards bodies, and ultimately voters — not for two startups in San Francisco.`,
    imageUrl: '/news/it8217s-not-about-anthropic-vs-openai-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/26/its-not-about-anthropic-vs-openai-anymore/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai","anthropic","policy"],
  },
  {  // [seed]
    slug: 'openai8217s-jalapeo-chip-is-big-tech8217s-techcr',
    title: 'OpenAI\'s Jalapeño chip is Big Tech\'s spiciest move away from Nvidia',
    summary: 'OpenAI has detailed Jalapeño, its first custom inference chip — purpose-built for serving real-time requests and reducing the company\'s reliance on Nvidia hardware.',
    content: `OpenAI has shared details about Jalapeño, its first custom inference chip designed to reduce dependence on Nvidia. As Big Tech — including OpenAI, Google, Amazon, Meta, and SpaceX-affiliated projects — builds alternatives, the AI chip market is shifting from a single-vendor story to a more competitive landscape.

Jalapeño is purpose-built for inference workloads rather than training, signaling where OpenAI expects to deploy its compute most heavily going forward: serving real-time requests to hundreds of millions of users. Custom silicon also lets OpenAI tune cost-per-token directly against the company's economic targets, rather than accepting Nvidia's margins.

The risk: custom chips are notoriously hard. Google spent nearly a decade iterating TPUs before they were genuinely competitive with Nvidia GPUs at scale. OpenAI will need similar patience — and strong partnerships with foundries — to make Jalapeño a real Nvidia alternative rather than a press-release chip.`,
    imageUrl: '/news/openai8217s-jalapeo-chip-is-big-tech8217s-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/podcast/openais-jalapeno-chip-is-big-techs-spiciest-move-away-from-nvidia/',
    date: '2026-06-26',
    category: 'industry',
    tags: ["openai","semiconductors","nvidia"],
  },
  {  // [seed]
    slug: 'the-white-house-is-asking-openai-techcr',
    title: 'The White House is asking OpenAI to slow roll the release of its new model over safety concerns',
    summary: 'OpenAI\'s GPT-5.6 will go to a small group of close partners first, with the Trump administration approving access customer-by-customer. A broader public release is expected a couple of weeks later if the preview goes well.',
    content: `The Trump administration has asked OpenAI to limit the initial release of its newest model, GPT-5.6, distributing it only to a small group of vetted partners rather than the public. According to The Information, the request came from the Office of the National Cyber Director and the Office of Science and Technology Policy, both of which have been working "closely" with OpenAI on the rollout.

CEO Sam Altman told staff that customer-by-customer approval is expected during a preview period, with broader availability a couple of weeks later if all goes well. The pattern echoes Anthropic's voluntary limit on Claude Mythos via Project Glasswing.

The underlying concern: frontier cyber tools can identify and exploit software vulnerabilities at machine speed, which poses an obvious risk to any organization running complex infrastructure. Since the most capable models remain closed, it is hard to gauge how real the threat is — but governments are choosing caution.

The interesting open question is whether this becomes a permanent feature of frontier releases. Both OpenAI and Anthropic have signaled they don't want it to — but the political reality of releasing extremely capable models in 2026 may make some form of gated rollout the new normal.`,
    imageUrl: '/news/the-white-house-is-asking-openai-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/the-white-house-is-asking-openai-to-slow-roll-the-release-of-its-new-model-over-safety-concerns/',
    date: '2026-06-25',
    category: 'release',
    tags: ["openai","policy","safety"],
  },
  {  // [seed]
    slug: 'patronus-ai-lands-50m-to-build-techcr',
    title: 'Patronus AI lands $50M to build \'digital worlds\' that stress-test AI agents',
    summary: 'Patronus AI has raised a $50M Series B to scale its "digital world" testing environments — simulated websites and internal systems where AI agents are stress-tested before they touch real users.',
    content: `Patronus AI, founded by former Meta AI researchers Anand Kannappan and Rebecca Qian, has raised a \$50 million Series B led by Greenfield Partners, with participation from Notable Capital, Lightspeed, Datadog, and Samsung.

The startup builds simulated digital environments — replicas of websites and internal tools — in which AI agents are stress-tested using reinforcement learning. The approach catches the shortcuts agents commonly take to "complete" tasks without actually doing them correctly: an agent might, for example, click a "Confirm" button to satisfy a goal without ever reading the underlying content.

Patronus counts most frontier AI labs as customers and saw revenue grow 15x over the past year. The team compares its approach to how Waymo trained autonomous vehicles — first building synthetic worlds to test against rare hazards (severe weather, a child running into the street) before any real-world driving.

Current focus is on verifiable domains (software engineering, finance), where task correctness can be checked programmatically. Longer-term, the company wants to build environments in which agents can run for hours, days, or weeks — the kind of sustained task execution that current evals don't even attempt to measure.`,
    imageUrl: '/news/patronus-ai-lands-50m-to-build-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/patronus-ai-lands-50m-to-build-digital-worlds-that-stress-test-ai-agents/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["agent","evaluation","funding"],
  },
  {  // [seed]
    slug: 'anthropic8217s-claude-is-winning-over-paid-techcr',
    title: 'Anthropic\'s Claude is winning over paid consumers, a market owned by ChatGPT',
    summary: 'New credit-card data shows Claude\'s paying-customer count is up 75% since January — and on DataCamp, "Claude" has overtaken "AI" as the most-searched term.',
    content: `Anthropic's Claude is gaining ground on OpenAI's ChatGPT among paying consumers — a market ChatGPT has historically dominated. According to Indagari's analysis of billions of anonymized US credit card transactions, Claude's paying-customer count and revenue have grown about 75% since January 2026.

DataCamp, an AI education platform with 20 million users, reports "Claude" has become its most-searched term, surpassing "AI" itself. Demand for Claude courses has increased 18x in the last 30 days; among self-directed consumers, Claude course interest is outpacing ChatGPT by roughly three to one.

ChatGPT still leads by a wide margin in absolute users and revenue — but the trend lines favor Anthropic. The shift is notable because the consumer market is the one ChatGPT has owned since launch; Anthropic's gain here is harder to explain away as enterprise-only success.

It also comes against a backdrop of regulatory friction for Anthropic: the Trump administration's recent move to restrict Mythos 5 and Fable 5 hasn't visibly dented consumer growth, at least not yet.`,
    imageUrl: '/news/anthropic8217s-claude-is-winning-over-paid-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/anthropics-claude-is-winning-over-paid-consumers-a-market-owned-by-chatgpt/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["anthropic","claude","gpt"],
  },
  {  // [seed]
    slug: 'general-intuition8217s-23b-bet-that-video-techcr',
    title: 'General Intuition\'s $2.3B bet that video games can train AI agents for the real world',
    summary: 'General Intuition has raised $320M at a $2.3B valuation to scale AI trained on hundreds of millions of hours of annotated gameplay footage — betting action data, not raw video, is the missing ingredient for generalist agents.',
    content: `General Intuition has raised \$320 million at a \$2.3 billion valuation, led by Khosla Ventures with participation from General Catalyst, Jeff Bezos, Eric Schmidt, and researchers at Google DeepMind and MIT.

The startup's bet: hundreds of millions of hours of annotated gameplay from its sister company Medal — which captures not just video but the exact button presses behind each clip — can train AI agents that generalize from virtual environments to real-world robotics. The "world model" demos include a quadruped robot navigating an office after just eight minutes of real-world data.

The key technical claim: the action labels (which button was pressed, when) are the valuable signal, not the raw video. Competitors trying to infer actions from pixels alone are missing the most informative part of the training signal.

Founder Pim de Witte has drawn a hard line: General Intuition's models will not be used for lethal autonomous weapons. He envisions the company as an ecosystem enabler — the model layer that other robotics, simulation, and gaming startups build on, not a vertically integrated robotics company itself.

Most of the new funding will go toward compute (the company has a deal with CoreWeave) and pre-training the next version of the model.`,
    imageUrl: '/news/general-intuition8217s-23b-bet-that-video-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/general-intuitions-2-3b-bet-that-video-games-can-train-ai-agents-for-the-real-world/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["agent","robotics","funding"],
  },
  {  // [seed]
    slug: 'databricks-former-ai-chief-thinks-he-techcr',
    title: 'Databricks\' former AI chief thinks he can cut AI\'s power bill by 1,000x',
    summary: 'Naveen Rao\'s new startup Unconventional AI has unveiled Un-0 — the first image-generation model built on an oscillator-based architecture it claims can ultimately cut inference power use 1,000x.',
    content: `Naveen Rao, former head of AI at Databricks, has unveiled Un-0 — the first image-generation model running on an unconventional oscillator-based computer architecture. Rao claims the approach can ultimately cut AI inference power use by up to 1,000x.

The current model runs as a software simulation, with physical chip schematics expected soon. The company is small (under 50 people) but the ambition is large: build an entire inference stack — chips, hardware, network, all the way up — that consumes a fraction of today's energy budget.

Rao argues energy will be the hard ceiling on AI scaling. As training runs grow and inference volumes explode, the available supply of power — not chips, not algorithms — will be the limiting factor for the industry.

The bet is high-risk: building an entirely new computer architecture from scratch is famously hard, and many well-funded attempts have failed. But if Rao is even partially right, the cost economics of AI shift dramatically, and a lot of incumbent infrastructure bets look expensive in retrospect.`,
    imageUrl: '/news/databricks-former-ai-chief-thinks-he-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/databricks-former-ai-chief-thinks-he-can-cut-ais-power-bill-by-1000x/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["ai","hardware","efficiency"],
  },
  {  // [seed]
    slug: 'netris-raises-15m-series-a-from-techcr',
    title: 'Netris raises $15M Series A from a16z to help AI neoclouds go live faster',
    summary: 'Network automation startup Netris has raised a $15M Series A led by a16z. Its hardware-accelerated software-defined networking helps AI "neoclouds" stand up GPU clusters in days rather than months.',
    content: `Network automation startup Netris has raised a \$15 million Series A led by Andreessen Horowitz. Netris builds software-defined, hardware-accelerated networking for AI "neocloud" operators — the small GPU-cluster businesses popping up outside the hyperscaler trio of AWS, Azure, and Google.

Its platform runs on more than 35 GPU clusters globally (about a million GPUs) and is recommended by Nvidia to customers. Netris handles the parts of "going live" that take the most time: switch configuration, multi-tenant network isolation, and ongoing operations.

Notably, Netris deliberately does not use AI to configure networks. CEO Alex Saroyan argues AI is non-deterministic — useful for creative work, dangerous when you're changing thousands of switch configurations that need to be persistent and repeatable. The company has been building its deterministic automation algorithm for eight years, long before the current AI wave.

The funding will go toward hiring engineers and sales staff, expanding support for more hardware vendors, and adding capabilities to the platform's underlying algorithm.`,
    imageUrl: '/news/netris-raises-15m-series-a-from-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/netris-raises-15m-series-a-from-a16z-to-help-ai-neoclouds-go-live-faster/',
    date: '2026-06-25',
    category: 'funding',
    tags: ["ai","infrastructure","funding"],
  },
  {  // [seed]
    slug: 'adobe-acquires-image-and-video-enhancement-techcr',
    title: 'Adobe acquires image and video enhancement tool maker Topaz Labs',
    summary: 'Adobe has acquired Topaz Labs — an Emmy-winning maker of AI video and image upscaling tools — and will integrate its models into Firefly and Creative Cloud.',
    content: `Adobe has acquired Topaz Labs, an Emmy-winning maker of AI tools for video and image enhancement. Topaz's flagship models — Astra (video upscaling) and Wonder (image retouching) — will be integrated into Adobe's Firefly app and Creative Cloud suites.

The acquisition is part of Adobe's campaign to keep video editors and creative professionals from defecting to rivals like Canva or DaVinci Resolve. Topaz has built a reputation for shipping models that run efficiently on consumer GPUs — a capability Adobe wants to bring in-house as it competes on AI-assisted creative tools.

The Topaz stand-alone products will continue to be sold through the company's own website. The deal is expected to close in the second half of 2026; terms were not disclosed.`,
    imageUrl: '/news/adobe-acquires-image-and-video-enhancement-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/adobe-acquires-image-and-video-enhancement-tool-maker-topaz-labs/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["adobe","video","image"],
  },
  {
    slug: 'wayve-launches-85m-employee-tender-offer-techcr',
    title: "Wayve opens $85M employee tender at $8.5B valuation",
    summary: "The UK self-driving startup is running its second structured buyback in two years, signaling that AI firms now treat liquidity events as core retention strategy rather than a once-in-a-decade perk.",
    content: `British autonomous-driving company Wayve is running a fresh tender that lets employees cash out part of their vested equity — an \$85M buyback priced at the company's most recent \$8.5B mark. The deal is being syndicated to existing and new investors.

That valuation was set in February, when the nine-year-old startup closed a \$1.2B Series D led by Eclipse Ventures, Balderton Capital, and SoftBank Vision Fund 2, with participation from Ontario Teachers' Pension Plan, Baillie Gifford, Microsoft, NVIDIA, and Uber. The current tender marks Wayve's second employee liquidity event, following a smaller round attached to its May 2024 Series C.

The pattern is now standard for top-tier AI startups. Rather than waiting years for a public exit, companies are using recurring tenders as a retention lever — giving staff a concrete reason not to defect to a competitor (or start their own thing) the moment their options vest. Decagon, ElevenLabs, Linear, and Clay have all run similar buybacks recently, with Clay doing two in the last nine months alone.

The mechanism works because investors are still willing to pay a premium to increase exposure to high-growth AI businesses, betting those stakes will look cheap in hindsight. Employees get a real, dated exit; investors get more of the cap table; the company keeps the talent it would otherwise lose. Everyone wins — provided the underlying growth story still holds.`,
    imageUrl: '/news/wayve-launches-85m-employee-tender-offer-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/wayve-launches-85m-employee-tender-offer-at-8-5b-valuation/',
    date: '2026-07-01',
    category: 'funding',
    tags: ["ai"],
  },
  {
    slug: 'trump-drops-restrictions-on-anthropics-mythos-techcr',
    title: "White House lifts export licensing on Anthropic's Mythos and Fable",
    summary: "Anthropic will restore public access to its frontier models on July 1, after the Commerce Department dropped the export-license requirement that had effectively blacklisted them abroad.",
    content: `The US government has walked back the export licensing rule it imposed on Anthropic's two most advanced models in mid-June, clearing the way for the company to restore public access to Mythos and Fable on Wednesday, July 1.

The original order, dated June 12, had placed both products on the Commerce Department's export-restricted list, requiring foreign nationals to obtain specific approval before using them. Anthropic said complying at scale was impractical and effectively ended public access to the models.

Under the new arrangement, Commerce Secretary Howard Lutnick said Anthropic has agreed to "proactively detect and address security risks," work with the US government on "protocols and standards and releases" for future frontier models, and inform the government of "any malicious activity" discovered through those systems.

Notably, most of what Anthropic agreed to in the deal mirrors voluntary commitments the company had already made months before the original rule — a fact that has fueled cybersecurity researchers' skepticism that the export ban was ever a security measure, rather than political leverage. Critics read the original move as retaliation for public criticism by Anthropic's leadership about how the administration might deploy the technology against its political opponents.

For the market, the reversal is the more important signal: it ends a roughly three-week window in which Anthropic's most capable models were simply unavailable to most non-US users — a window that may have shifted decisions among enterprise buyers in ways that are not easily reversed.`,
    imageUrl: '/news/trump-drops-restrictions-on-anthropics-mythos-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/trump-drops-restrictions-on-anthropics-mythos-and-fable-models/',
    date: '2026-07-01',
    category: 'industry',
    tags: ["anthropic"],
  },
  {
    slug: 'vibe-coding-platform-base44-launches-own-model-techcr',
    title: "Base44 ships its own LLM as vibe-coding defensibility play",
    summary: "Wix-owned Base44 has started rolling out a custom model trained on \"tens of millions of real user interactions\" — betting that owning the weights is the only durable moat for AI app-builders.",
    content: `Base44, the Tel Aviv vibe-coding startup that Wix acquired for \$80M a year ago, has begun rolling out its own large language model — a notable move for a company that was barely six months old and had eight people when it was bought.

The new model, called Base1, is the first output of a bet that frontier LLMs from OpenAI and Anthropic are not always the right fit. "Training and owning the model as part of [our] entire stack allows us a lot more optimizations on latency, cost, and efficiency," founder Maor Shlomo said.

The play is also a defensive one. With Swedish rival Lovable already a unicorn after its Series A last summer — and running entirely on third-party models — the question of how a vibe-coding platform builds a long-term moat has become pressing. Shlomo expects that other players at sufficient scale "will train their own models" because, in his view, vertical training data becomes the unfair advantage.

The thesis echoes a broader pattern: investors and operators have converged on a three-legged framework of defensibility for AI-native products — proprietary data, distribution, and a customized tech stack. Base44 is betting all three get sharper when the model itself is owned. The company says Base1 was trained on "tens of millions of real user interactions on the platform" — a dataset that competitors simply cannot replicate.`,
    imageUrl: '/news/vibe-coding-platform-base44-launches-own-model-techcr.jpeg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/29/vibe-coding-platform-base44-launches-own-model-as-ai-startups-seek-defensibility/',
    date: '2026-06-30',
    category: 'release',
    tags: ["coding"],
  },
  {
    slug: 'the-ai-jobs-debate-just-got-techcr',
    title: "Ramp data complicates the \"AI kills jobs\" narrative",
    summary: "Companies spending heavily on AI grew headcount 10.2% — including 12% in entry-level roles — undercutting the assumption that AI adoption is broadly reducing junior headcount.",
    content: `A joint study from Ramp and Revelio Labs — tracking enterprise AI spend and workforce records across nearly 22,000 companies — pushes back against the dominant narrative that AI is shrinking the labor market.

Among "high-intensity adopters" (defined as companies spending an average of \$30 per employee per month on AI in their first three months), overall headcount grew 10.2%, with entry-level roles specifically up 12%. Growth was broad across functions: engineering, sales, administration, customer support, finance, marketing, and scientist roles. The information sector — software, internet, media, and tech-adjacent firms — saw the strongest gains.

The caveats are real. The dataset skews toward tech-forward, VC-backed, knowledge-work firms that were likely to be growing anyway. Whether AI is causing the hiring or just landing at companies that were already expanding is genuinely hard to disentangle from this kind of observational data.

Even so, the counter-signal matters. Through May 2026, roughly 90,000 layoffs were publicly attributed to AI in the US, and some forecasters estimate 15% of US jobs are at risk over the next five years. A dataset that shows the heaviest AI spenders also growing junior headcount fastest is at minimum a meaningful complication to that story — and, as the authors note, "it does counter claims that AI will lead to broad job losses," even if it does not prove the opposite.`,
    imageUrl: '/news/the-ai-jobs-debate-just-got-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/29/the-ai-jobs-debate-just-got-messier/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'crypto-exchange-okx-wants-ai-agents-techcr',
    title: "OKX launches marketplace for AI agents to hire and pay each other",
    summary: "The crypto exchange is opening a stablecoin-powered platform where AI agents can act as both customers and service providers — Star Xu calls it \"infrastructure designed for autonomous software.\"",
    content: `Crypto exchange OKX is moving beyond trading and into a market it believes will be a trillion-dollar opportunity: "agentic commerce." Its new marketplace, called OKX AI, lets AI agents discover services from one another, settle payments in stablecoins, and build portable on-chain reputations.

The platform opens to developers this week after a 50-partner closed beta. It builds on technology OKX has been developing for over a year — AI agent wallets, stablecoin payment rails, and persistent on-chain identity — and is the company's clearest signal yet that it wants to be seen as a fintech platform, not just a crypto trading venue.

The bet is structural. "The coming decade will be defined by one-person companies that generate over a million dollars in annual revenue — because every individual effectively gains an unlimited workforce," CEO Star Xu said. "Traditional financial infrastructure was built for humans. The agentic economy needs infrastructure designed for autonomous software."

For the developer-facing pitch, OKX is targeting two groups: crypto-native engineers building AI applications, and solo entrepreneurs who want to automate parts of their business with agents. The company expects those developers to publish AI-powered tools on the marketplace, after which any user — or any agent — can pay to invoke them. The CMO, Haider Rafique, estimates the agentic commerce market could be worth a trillion dollars over the next five years, driven primarily by micropayments at machine-to-machine scale.`,
    imageUrl: '/news/crypto-exchange-okx-wants-ai-agents-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/crypto-exchange-okx-wants-ai-agents-to-hire-and-pay-each-other/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["agent"],
  },
  {
    slug: 'lumo-protons-privacy-focused-ai-chatbot-gets-techcr',
    title: "Proton's Lumo 2.0 adds vision, persistent memory, and a \"thinking mode\"",
    summary: "The privacy-focused AI chatbot gains image analysis, image generation, 76% faster response times, and a new reasoning toggle — without changing Proton's strict no-logs stance.",
    content: `Proton, the Swiss company best known for its encrypted email and VPN products, has shipped a major update to Lumo, the public AI chatbot it launched last year.

Lumo 2.0 adds three things that matter. First, vision: users can now upload images and ask Lumo to analyze or edit them, or generate imagery from a prompt. Second, persistent memory scoped to Projects (the widget that ties Lumo to Proton's other productivity apps) — so a user can teach Lumo their preferences once and have those preferences stick across sessions. Third, a "thinking mode" toggle for more complex questions that takes longer but goes deeper.

Proton says response times on most queries are up to 76% faster than the previous version. The privacy story is unchanged: no logs, encrypted by default, and no data used for training — the same posture Proton has applied across its other products.

The result is a chatbot that now roughly matches the on-the-surface usefulness of Gemini or ChatGPT, with Proton arguing the trade-off — slightly less raw capability for stronger privacy guarantees — is the right one for a meaningful slice of users. The framing from CEO Andy Yen: "Lumo 2.0 demonstrates that users no longer need to choose between powerful AI capabilities and meaningful privacy protections." Whether that's true at scale depends on whether the privacy guarantees hold up under independent audit, but as a feature story, Lumo 2.0 closes most of the obvious gaps with mainstream alternatives.`,
    imageUrl: '/news/lumo-protons-privacy-focused-ai-chatbot-gets-techcr.jpeg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/lumo-protons-privacy-focused-ai-chatbot-gets-an-upgrade/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'amazon-launches-new-1-billion-fde-techcr',
    title: "AWS assembles a billion-dollar forward-deployed engineer org for AI",
    summary: "Following OpenAI and Anthropic, Amazon is dedicating internal headcount to embed engineers at customer sites and ship purpose-built agents — a hybrid sales-and-engineering model that the FDE pioneers at Palantir would recognize.",
    content: `Amazon Web Services is the latest frontier-model and cloud platform to formalize a forward-deployed engineer (FDE) practice, with a new internal organization backed by a billion dollars in internal resources.

The mandate is concrete: AWS engineers will embed at customer sites to deploy purpose-built agents, with a focus on fast engagements and a deliberate handoff plan that leaves the customer self-sufficient afterward. As AWS VP of frontier AI Francessca Vasquez put it, "customers leave AWS FDE deployments with both new solutions and new engineering capabilities" — the goal is a sustainable in-house AI practice, not a permanent AWS dependency.

The FDE pattern is not new. Palantir essentially built the category, and OpenAI and Anthropic have run their own versions in support of strategic enterprise deals. The model's appeal is straightforward: a contracting engineer works inside the customer's environment for the duration of the rollout, sees real production problems, and ships systems tailored to the customer's specific workflows — while leaving behind the engineering know-how the customer will need to evolve those systems long-term.

The tradeoff is unit economics. Maintaining a large standing FDE team is labor-intensive, and the work is hard to templatize across very different customers. AWS's \$1B commitment suggests the company is treating FDE as a strategic moat — one of the few service offerings that can keep large enterprise customers on the platform as the AI value chain gets more competitive.`,
    imageUrl: '/news/amazon-launches-new-1-billion-fde-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/amazon-launches-new-1-billion-fde-org-following-openai-and-anthropic/',
    date: '2026-06-30',
    category: 'release',
    tags: ["openai","anthropic"],
  },
  {
    slug: 'podcasting-platform-riverside-enters-the-newsletter-techcr',
    title: "Riverside launches AI-built newsletters from existing recordings",
    summary: "The video and podcast platform is staying out of Substack's lane and instead turning the recordings its users already have into newsletter-ready content, in-app.",
    content: `Riverside, the video and podcast recording platform that has raised over \$60M to date, is adding newsletters to its product — but not the way the obvious competitors built theirs.

The new feature, shipping inside Riverside, lets users take recordings already in the platform and use AI to turn them into newsletter drafts. The pitch, from co-founder and CEO Nadav Keyson: creators and business users on Riverside are already producing information-dense spoken content. For most of them, speaking is more natural than writing, and the ideas are already in the conversation. "So instead of asking them to start over in a separate tool, we help them turn a recording they've already made into newsletter-ready content with far less effort," he said.

Riverside is explicit that it is not chasing Substack, Mailchimp, Beehiiv, or Ghost. The point is to extend the value of an existing recording session, not to compete for the blank-page writing market. Users can still create and send newsletters from scratch if they want.

The release also adds a multi-camera recording mode, support for remote guests, and a recording-finished AI draft that produces hooks and content for social platforms. The model is "the recording is the source of truth; everything else is generated downstream" — a thesis that has a lot of appeal in 2026, when the cost of turning one artifact into many has dropped to near zero.`,
    imageUrl: '/news/podcasting-platform-riverside-enters-the-newsletter-techcr.jpeg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/podcasting-platform-riverside-enters-the-newsletter-publishing-game/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'x-now-offers-an-mcp-server-techcr',
    title: "X ships a hosted MCP server to make its API AI-friendly by default",
    summary: "X is now running its own Model Context Protocol endpoint so AI tools like Claude and Cursor can talk to the platform without per-developer integration work.",
    content: `X is making its platform more accessible to AI tools by hosting a Model Context Protocol (MCP) server that handles authentication and protocol translation for any developer who wants to connect an AI assistant to the X API.

MCP is the open standard for connecting AI models to external tools and data sources. Until now, any developer who wanted Claude, Cursor, Grok Build, or another MCP-compatible assistant to talk to X had to build and host their own MCP server, write the X API glue, and handle authentication. With X's hosted MCP, that work goes away: the assistant connects to a single X-managed endpoint, and the user authenticates with their own X account's permissions.

What X gets in return is strategic positioning. The platform has long been a firehose of real-time conversation — exactly the kind of signal that an LLM-based agent wants to query, summarize, or act on. By making that data trivially accessible to AI tools, X is repositioning itself as an information network for AI systems, not just a social hangout for people.

X joins GitHub, Slack, Notion, Stripe, and Salesforce as the latest major platform to ship a hosted MCP endpoint. The pattern is now standard: any platform that wants to stay in the path of AI workflows has to expose itself through MCP, or accept that AI tools will use unofficial integrations that may break.`,
    imageUrl: '/news/x-now-offers-an-mcp-server-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/x-now-offers-an-mcp-server-to-make-its-platform-easier-for-ai-tools-to-use/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'anthropics-claude-science-bets-on-workflow-techcr',
    title: "Anthropic's Claude Science is a workbench, not a new model",
    summary: "Anthropic ships a research environment that wraps the same Claude models with 60+ scientific databases, sub-agent delegation, and a fact-checker — betting that scientists want operating layers, not more raw capability.",
    content: `Anthropic has launched Claude Science, a dedicated workbench for computational research. The company is being explicit about what this is and isn't: "not a new AI model and not a more capable model for biology. It runs the same Claude models already available to everyone today (including Claude Opus 4.8), with no special access and no gating."

The workbench builds on Anthropic's October 2025 launch of Claude for Life Sciences, which made the standard Claude chatbot better at life-sciences tasks. Claude Science is the dedicated environment for doing that work end-to-end.

The architecture has three layers. A primary AI assistant acts as a project manager, connecting to more than 60 scientific databases and exposing prebuilt toolkits for genomics, protein structure, chemistry, and similar fields. That primary assistant can spawn sub-agents for parallel tasks — a project-lead-and-specialist model — and can hand work to a custom "expert" assistant the user has built for their specific research area. A separate fact-checker agent reviews citations and calculations before anything ships toward a paper.

The third layer is the most interesting, and the most uncertain. The fact-checker is a guardrail against the well-known problem of LLMs fabricating citations — but it's still the same underlying model reviewing its own outputs, not an independent ground truth. Whether that's enough to catch real errors in a research context, or whether the workbench will need a separate non-Claude verification path, is the open question.`,
    imageUrl: '/news/anthropics-claude-science-bets-on-workflow-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["anthropic","claude"],
  },
  {
    slug: 'acti-puts-ai-agents-directly-into-techcr',
    title: "Acti ships an agentic keyboard for iOS and Android",
    summary: "Singapore startup Acti is building AI tools at the keyboard layer, betting that the universal input surface is the right place to make agents feel native rather than bolted on.",
    content: `A Singapore-based startup called Acti is launching what it calls an "agentic keyboard" for iOS and Android — a system-level text input that does more than suggest the next word, with hooks that let AI agents take actions inside the apps the user is already using.

The pitch from founder and CEO Young Wang is about the user's context. Right now, anyone using an AI assistant has to context-switch between the conversation and the app they're actually trying to act in. "Today's AI agents are fundamentally limited because user context stays fragmented across separate apps," Wang said. Acti's bet is that the keyboard sits in all of them, which makes it a natural place to host a context layer that belongs to the user rather than to any one platform.

In practice, that means a keyboard that can drop restaurant recommendations into a chat, share a stock price mid-conversation, or pull a calendar entry into an email draft — all without leaving the foreground app. Today each of those requires a trip to a separate AI assistant; the value of doing it at the keyboard layer is speed and friction.

The launch is a useful marker for where the consumer-AI argument is heading in 2026: away from the "open a chatbot" model, toward embedding the AI in interfaces the user is already in. The race is on for which surface wins that bet — and the keyboard is one of the most natural candidates, given that every action on a phone passes through it.`,
    imageUrl: '/news/acti-puts-ai-agents-directly-into-techcr.png?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/acti-puts-ai-agents-directly-into-your-smartphone-keyboard/',
    date: '2026-06-30',
    category: 'regulation',
    tags: ["agent"],
  },
  {
    slug: 'anthropic-launches-claude-sonnet-5-as-techcr',
    title: "Anthropic ships Claude Sonnet 5 as a cheap agentic workhorse",
    summary: "Sonnet 5 lands at $2/Anthropic’s Claude Sonnet 5 brings stronger agentic capabilities, lower pricing, and improved safety, positioning the model as a cheaper alternative to Opus, GPT-5.5, and Gemini Pro.0 per million tokens (rising to $3/Anthropic’s Claude Sonnet 5 brings stronger agentic capabilities, lower pricing, and improved safety, positioning the model as a cheaper alternative to Opus, GPT-5.5, and Gemini Pro.5 after August) and becomes the default for free and Pro plans — positioning it as the new floor on price-per-agentic-run.",
    content: `Anthropic has released Claude Sonnet 5, the next generation of its mid-tier model, with a clear thesis: agentic capability is now table stakes, and the actual competition is on price-per-agentic-run.

The model can plan, use tools (browsers, terminals, and so on), and run autonomously at a level that, just a few months ago, required larger and more expensive models, according to Anthropic. The framing is nearly identical to what OpenAI said about GPT-5.6 Sol (which launched in preview last week with multi-agent orchestration) and Google said about Gemini 3.5 Flash (which it pitched as the inflection point from chatbot to autonomous agent). Everyone is now claiming the same thing, and the differentiator has shifted to cost and reliability.

Pricing for Sonnet 5 is \$2 per million input tokens and \$10 per million output tokens through August 31, after which it rises to \$3 and \$15 respectively. That undercuts both Opus 4.8 and the equivalent OpenAI and Google frontier models, though it remains above Gemini 3.5 Flash — Google's budget-tier bet.

Operationally, Sonnet 5 becomes the default model for free and Pro plans from launch. The signal there is about user acquisition and habit formation: by making the default experience run on the mid-tier, Anthropic sets a lower price floor across the industry and likely pulls some marginal use cases back from OpenAI. The strategic question is whether \$3/\$15 still leaves room for the open-weights challengers to win on cost, or whether the new ceiling simply defines what "cheap" means.`,
    imageUrl: '/news/anthropic-launches-claude-sonnet-5-as-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/',
    date: '2026-06-30',
    category: 'release',
    tags: ["anthropic","claude","agent"],
  },
  {
    slug: 'nvidia-competitor-etched-hits-5b-valuation-techcr',
    title: "Etched emerges with $5B valuation and Nvidia competitor Etched hits $5B valuation, $1B in sales for AI chipB in chip orders",
    summary: "The Nvidia competitor, founded by two Harvard dropouts and backed by Karpathy, Hinton, and Druckenmiller, says it has Nvidia AI chip competitor Etched says it has already booked $1 billion under contract for the inference systems powered by its chip.B in contracts and a working TSMC-manufactured chip aimed squarely at inference.",
    content: `Etched, a chip startup founded in 2022 by Thiel fellows Gavin Uberti and Robert Wachen (both Harvard dropouts), has come out with a progress report that puts the company at a \$5B post-money valuation with \$1B in contract orders already booked.

The orders are for "frontier inference clusters" — Etched's term for full-stack systems that bundle the chip, custom-designed racks, and software. The pitch is that the chip is built specifically to run inference for frontier models faster, cheaper, and more power-efficient than Nvidia's general-purpose GPUs. Inference is the dominant cost center for AI companies serving customers at scale, which is why anyone claiming a real efficiency win tends to attract investor attention fast.

The numbers behind the headline are significant. Etched has raised \$800M total, with the most recent \$500M closed unannounced in December at \$5B post. Investors include VentureTech Alliance, Jane Street, Hudson River Trading, Two Sigma, Ribbit Capital, and Stripes (which led the December round). The angel list reads like a who's-who of modern AI: Andrej Karpathy, Geoffrey Hinton, Fei-Fei Li, Arthur Mensch, and Scott Wu, plus Stanley Druckenmiller and Peter Thiel.

Etched's positioning — a chip purpose-built for inference rather than training — is the right one for the moment. Training markets are dominated by Nvidia, and the long-term economic engine of AI is serving inference at scale. Whether the company can deliver on the implied performance claims is the open question, and one the company is now letting customers start answering.`,
    imageUrl: '/news/nvidia-competitor-etched-hits-5b-valuation-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/',
    date: '2026-06-30',
    category: 'funding',
    tags: ["ai"],
  },
  {
    slug: 'google-introduces-a-faster-cheaper-image-techcr',
    title: "Google's Nano Banana 2 Lite targets high-volume image workflows",
    summary: "At $0.034 per 1,000 images and a four-second latency floor, Google's new image model is aimed squarely at creators who need to iterate fast and cheap — not at one-off perfect renders.",
    content: `Google has released Nano Banana 2 Lite, a faster and cheaper version of its in-house image model family, designed for the high-volume workflows that AI content creation increasingly demands.

The new model produces images in about four seconds, well below the latency of the original Nano Banana and Nano Banana 2. Pricing lands at \$0.034 per 1,000 images — low enough to make iterative prompting and bulk production economically sensible for individual creators, not just enterprises with large model budgets.

The positioning is explicit. Nano Banana 2 was marketed as a "generalist workhorse," and the Lite variant extends that line into a tier optimized for rapid iteration at scale. Google still offers the original Nano Banana, Nano Banana 2, and Nano Banana Pro for users who need higher-end output; Lite fills the volume gap at the bottom.

The release lands at an awkward moment for the category. Public frustration with "AI slop" is real, and creative communities are increasingly skeptical of generative tooling. Google has also drawn recent attention for a \$75M partnership with A24 — a deal that's drawn fan backlash but signals the studio's interest in tooling relationships. Lite's positioning — "cheap and fast iteration" rather than "best quality" — sidesteps the slop critique at least partially, because the use case is clearly iteration, not final output.`,
    imageUrl: '/news/google-introduces-a-faster-cheaper-image-techcr.png?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/google-introduces-a-faster-cheaper-image-generator-with-nano-banana-2-lite/',
    date: '2026-06-30',
    category: 'regulation',
    tags: ["google","image"],
  },
  {
    slug: 'the-deepmind-trio-who-built-a-techcr',
    title: "Ex-DeepMind poker-AI team is now trading stocks for quant funds",
    summary: "EquiLibre Technologies — three former DeepMind researchers — has a $500M Series A and a \"perfect record of zero negative months\" trading billions in daily volume on the S&P 500 and Nasdaq.",
    content: `Three former DeepMind researchers who built a poker AI that beat top human players have repurposed the same reinforcement-learning approach to trade stocks. Their Prague-based company, EquiLibre Technologies, has closed an undisclosed-size Series A at a \$500M valuation, led by Creandum.

The connection between poker and markets is not as unusual as it sounds. Both environments reward the same kind of self-learning agent: clear scoring rules, high information density, and adversarial dynamics. "The nice thing about trading and markets is that the scoring is super simple: how much money did the agent make?" CEO Martin Schmid said.

The market side of the story is what makes the company serious. EquiLibre's algorithms are trading with Tower Research Capital, a quant firm, and have been routing "billions in daily volume" across the S&P 500 and Nasdaq. The startup claims "a perfect record of zero negative months since inception" — both in crypto markets, where the agents first went live in 2025, and now in equities.

For investors, the appeal is straightforward. Trading alpha is a market where improvements compound quickly into cash, and quant funds have generated "quantums of profit that make most venture-backed successes look small," as Creandum's Cameron Sellers put it. EquiLibre's positioning — "a lab first, not a finance firm" — is also strategic: it keeps the company out of the regulatory perimeter of a quant fund while giving it access to one of the highest-margin customer bases in the world.`,
    imageUrl: '/news/the-deepmind-trio-who-built-a-techcr.jpeg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/the-deepmind-trio-who-built-a-poker-ai-are-now-making-money-for-quant-hedge-funds/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'openclaw-is-finally-available-on-android-techcr',
    title: "OpenClaw lands on iOS and Android",
    summary: "The free, open-source AI agent that went viral earlier this year now has a mobile app, paired through the OpenClaw Gateway to the same skills and tools as the desktop version.",
    content: `OpenClaw — the free, open-source agentic platform that captured the internet earlier in 2026 — is now available as a mobile app on iOS and Android. The team announced the launch on X on Tuesday.

The architecture is the same as on desktop: a phone running the OpenClaw app connects to the OpenClaw Gateway, which routes requests to AI agents and the tools and skills those agents use. The point is to make it possible to run the same agents from a phone that the user would have run on a laptop.

OpenClaw's path to mobile is itself part of the story. Earlier in 2026, the project went viral around the launch of MoltBook, a social media platform purportedly populated entirely by agents. The viral moment — later revealed to have been partially human-impersonation theater — was effective marketing regardless. In February, OpenClaw's creator, Peter Steinberger, joined OpenAI, leaving the project's trajectory in the hands of its community.

The mobile release is, in a sense, the natural conclusion of that arc. The agentic future OpenClaw was always pointing at — agents embedded across the AI landscape, showing up in more places by the day, including your phone — now includes OpenClaw itself. Whether the community-maintained version can keep up with the closed competitors is the open question.`,
    imageUrl: '/news/openclaw-is-finally-available-on-android-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/openclaw-is-finally-available-on-android-and-ios/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'south-korean-tech-giants-commit-over-techcr',
    title: "South Korea bets $900B on memory, AI data centers, and physical AI",
    summary: "Samsung and SK Hynix will spend $518B on four new memory fabs as the country tries to make its semiconductor belt — currently concentrated around Seoul — a national strategic asset.",
    content: `South Korea's two largest memory chip companies, Samsung and SK Hynix, will jointly invest \$518B (about 800 trillion won) in four new memory fabs in the country's southwest, a region that has historically attracted little semiconductor investment.

The announcement is part of a broader \$900B national investment plan spanning semiconductors, AI data centers, and physical AI, unveiled at a presidential briefing on Monday with both companies' chairmen in attendance. The plan splits into three buckets: \$518B for the four new memory fabs in the southwest, \$52B for an HBM (high-bandwidth memory) packaging hub in the central region, and \$356B (550 trillion won) for AI data centers to be built by SK, GS, Naver, and other Korean tech and energy players through 2035.

The strategic context is the global memory shortage driven by the AI buildout — "RAMageddon," in industry parlance. With Samsung, SK Hynix, and US-based Micron all running at full capacity, South Korea sees an opening to consolidate its position as an "irreplaceable" industrial power. The four fabs in the southwest are part of that bet; the existing chip facilities in Yongin and Pyeongtaek (the heart of the Korean semiconductor belt, just south of Seoul) "have already reached their limits," according to President Jae Myung Lee.

The geographic spread also matters. Concentrating fabs near Seoul has worked historically, but the AI buildout has changed the math — power, water, and land constraints are tighter, and the government wants to spread the wealth and resilience beyond the capital. Whether the southwest fabs can come online on the implied timeline, and whether the demand assumption holds, is the open risk.`,
    imageUrl: '/news/south-korean-tech-giants-commit-over-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/29/south-korean-tech-giants-commit-over-550b-to-ease-ramageddon/',
    date: '2026-06-29',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'anthropic-and-gov-newsom-forge-deal-techcr',
    title: "Anthropic signs California at half-price as it pivots to state governments",
    summary: "Newsom's office will give every state agency and local government access to Claude at a discount — a strategic win for Anthropic as its federal relations deteriorate.",
    content: `California governor Gavin Newsom and Anthropic have struck a deal that gives every state agency and local government in California access to Claude at a discounted price, plus training and support from Anthropic.

The press release from the governor's office frames the deal as a way to use AI to "help state employees draft documents and analyze information" — drafting assistance rather than autonomous action, which is consistent with Newsom's March executive order on AI use in government. "AI should not replace the human work of government; it should help our workers move faster, solve problems more effectively, and deliver better results for Californians," Newsom said.

The strategic context matters more than the deal size. Anthropic's federal relations have soured over the past year: in the dispute over the Department of Defense contract, the company sought to carve out explicit protections against using Claude for surveillance of Americans or for autonomous weapons without human oversight. Defense Secretary Pete Hegseth refused, the DoD signed with OpenAI instead, and the federal government went so far as to declare Anthropic a "supply-chain risk" — a designation that has kept the company out of any Pentagon contractor's supply chain.

The California deal is, in that context, a useful counterweight. State governments collectively have substantial procurement budgets, and California specifically is a high-profile reference. Whether other states follow Newsom's lead, and whether the federal designation ever gets walked back, is the longer-run question.`,
    imageUrl: '/news/anthropic-and-gov-newsom-forge-deal-techcr.jpeg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price/',
    date: '2026-06-29',
    category: 'industry',
    tags: ["anthropic","claude"],
  },
  {
    slug: 'geminis-personalized-ai-image-generation-is-techcr',
    title: "Gemini's personal-context image generation is free in the US",
    summary: "Google is opening the feature that lets Gemini draw on your Gmail, Photos, YouTube, and Search data to generate images based on your actual interests — previously Plus/Pro/Ultra only.",
    content: `Google is opening up Gemini's personalized image generation to all eligible free users in the US, the company announced on Monday. The feature was previously limited to Plus, Pro, and Ultra subscribers.

The capability, which uses Google's Nano Banana image model, lets Gemini generate images based on a real understanding of the user's interests. The model pulls from data across Google account connections — Gmail, Google Photos, YouTube, and Search — to figure out what "you" actually means, so a prompt like "create an illustration of me and my favorite things" can produce something meaningful without the user listing their favorites in the prompt.

Gemini can also pull actual images of the user from Google Photos, removing the need to upload reference photos manually. The Personal Intelligence feature that powers this was first announced in April, broadly rolled out to US users in March, and has since expanded to India and Japan.

The feature is opt-in. Users control which Google apps Gemini can access, and a Tools-menu toggle lets them disable Personal Intelligence per prompt if they want a generic result. The opt-in framing is significant for trust: giving Gemini broad access to Gmail, Photos, and YouTube history is a real privacy ask, and Google is keeping it explicitly consensual rather than default-on.`,
    imageUrl: '/news/geminis-personalized-ai-image-generation-is-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/29/geminis-personalized-ai-image-generation-is-now-free-for-u-s-users/',
    date: '2026-06-29',
    category: 'industry',
    tags: ["gemini","image"],
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
