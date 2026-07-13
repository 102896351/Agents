// ============================================================
//  AI News 数据源 —— 由 scripts/fetch-news.mjs 自动生成
//  最后更新：2026-07-13T04:00:46.530Z
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
    slug: 'openai-bets-on-families-as-chatgpt-techcr',
    title: 'OpenAI is hiring a family-product PM as ChatGPT\'s audience ages up',
    summary: 'A new San Francisco PM role focused on parents, caregivers, and older adults points to a strategic shift: OpenAI now treats households, not individuals, as the durable unit of consumer stickiness.',
    content: `Three years after ChatGPT made generative AI a household word, OpenAI is reorganising its product thinking around the household itself. The company is hiring a dedicated product manager in San Francisco to design experiences for families, caregivers, and older adults across its consumer apps — a role that requires "experience building products for parents and families, and other trust-sensitive consumer experiences," per the job posting.

The move lands on top of a demographic shift the company has not previously publicised. Sensor Tower data shared with TechCrunch shows the share of ChatGPT users aged 35 and older rising to 31% in Q2, up from 26% a year earlier, while the 18–24 cohort fell to 29% from 34%. In the US, nearly one in four smartphone-using parents used ChatGPT during the quarter, up from 16% a year earlier.

Ben Bajarin, CEO of Creative Strategies, frames this as a transition from "tools for individual productivity" to "technology designed for households" — the same path Google, Apple, and Meta eventually followed as their platforms became embedded in daily life. The difference, he argues, is stakes: an AI assistant is not mediating content or devices, it is mediating decisions, plans, and conversations inside a family.

The strategic logic is straightforward. Teens are the most fickle user segment; multi-year retention lives with parents, kids' homework, and ageing relatives — the account that nobody in the household churns from. A family surface is also the natural upsell surface for the consumer business, and a credibility-building prerequisite for OpenAI's enterprise pitch. Whoever wins the family account first sets the vocabulary of "AI in the home" for the next decade.`,
    imageUrl: '/news/openai-bets-on-families-as-chatgpt-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/11/openai-bets-on-families-as-chatgpt-goes-deeper-into-households/',
    date: '2026-07-11',
    category: 'industry',
    tags: ["openai","gpt"],
  },
  {
    slug: 'meta-removes-controversial-ai-feature-on-techcr',
    title: 'Meta pulls Instagram "Muse Image" @-mention feature three days after launch',
    summary: 'After a public backlash over using public profiles without consent, Meta walked back the feature, saying it "missed the mark" — the fastest notable feature rollback in the social network\'s recent AI rollout.',
    content: `Meta has axed a feature in Muse Image, its new AI image generator built by Meta Superintelligence Labs, that allowed users to generate images by @-mentioning any public Instagram account and using that account's public photos as a reference. The feature, rolled out earlier this week alongside the rest of Muse Image, "missed the mark" and is no longer available, Meta said in a Friday blog post — first surfaced by Puck News's Dylan Byers.

"Our intent was to provide a useful creative tool and to give people control over whether their public content could be referenced in this way. We've heard the feedback that this feature missed the mark, so it's no longer available," Meta wrote. The walk-back is notable for its speed: roughly 72 hours from launch to removal. The closest recent comparable is Microsoft Recall's reversal in 2024, and even that took a week.

The underlying issue is consent. A public Instagram profile is public in the social sense — visible to other users — but users had no notice that their photos could now be incorporated into stranger-generated AI images, no notification when they were, and (at launch) no clean opt-out. The "@-mention" framing made the misuse obvious: anyone could write "@janedoe" into a prompt and have the model produce a synthetic image using her face. The surface that felt like a harmless "creative tool" yesterday was a non-consensual face-mixing engine today.

For Meta's broader AI rollout the cost is reputational, not just feature-specific. Muse Image's launch was positioned as Meta's first real generative-image product out of the new Superintelligence Labs. The fastest result of that launch was the loudest privacy backlash of the year. The lesson is one the industry keeps relearning: opt-in beats opt-out when the asset is recognisable.`,
    imageUrl: '/news/meta-removes-controversial-ai-feature-on-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/',
    date: '2026-07-10',
    category: 'industry',
    tags: ["meta"],
  },
  {
    slug: 'apple-sues-openai-over-alleged-trade-techcr',
    title: 'Apple sues OpenAI for trade-secret theft, naming Chief Hardware Officer Tang Tan',
    summary: 'Filed in the Northern District of California, the suit alleges OpenAI\'s senior leadership directed a pattern of recruitment, code-name disclosure, and security circumvention — with the iPhone as the obvious prize.',
    content: `Apple filed a federal lawsuit on Friday against OpenAI, alleging a coordinated pattern of trade-secret theft directed by OpenAI's senior leadership — including Chief Hardware Officer Tang Tan, a 24-year Apple veteran who most recently served as VP of product design for the iPhone and Apple Watch. The complaint, filed in the Northern District of California, accuses Tan of using Apple's confidential project code names during OpenAI recruiting, asking job candidates to bring Apple hardware components to interviews, coaching departing Apple employees on how to evade Apple's security procedures, and requesting details about unannounced products.

The lawsuit is about people before it is about code. In a hardware business, the moat is institutional knowledge that lives in human heads — the relationships between teams, the unannounced product spec, the production constraint that nobody wrote down. Apple's complaint is that OpenAI ran a structured extraction operation against that institutional knowledge, with Tan as the named vector.

The context is the threat, not the grievance. OpenAI is rumoured to be developing its first hardware product, which analyst Ming-Chi Kuo has suggested could be a smartphone built around AI agents rather than apps. If such a device ships, it would be the first serious frontal challenge to the iPhone since the iPhone itself. OpenAI's \$6.5 billion acquisition last year of Jony Ive's hardware startup io — named in the filing, though Ive himself is not — is now part of the evidence chain.

For Apple, the suit is also a defensive perimeter. The iPhone is the platform on which the App Store economics, the Services revenue, and the developer lock-in all rest. Any credible competitor has to attack the hardware, not the OS, and that is exactly what OpenAI appears to be preparing.`,
    imageUrl: '/news/apple-sues-openai-over-alleged-trade-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/',
    date: '2026-07-10',
    category: 'industry',
    tags: ["openai"],
  },
  {
    slug: 'open-source-ai-matters-more-than-techcr',
    title: 'After the Fable pullback, Hugging Face\'s Delangue makes the case for open source as default',
    summary: 'In the wake of Anthropic\'s halted Mythos/Fable release, Hugging Face\'s CEO is using Equity to argue that open weights are the only durable safeguard against concentration risk.',
    content: `The same week Anthropic briefly pulled its Mythos/Fable frontier model from public access and watched the White House move the goalposts on safety review, Hugging Face CEO Clem Delangue took to TechCrunch's Equity podcast to make the structural case for open source AI. His frame: the open-vs-closed question is no longer academic, because the alternative to open weights is a small number of frontier labs with the legal and political standing to decide what gets released and to whom.

That timing is not coincidental. The Fable incident crystallised the concentration risk Hugging Face has been warning about for two years — the possibility that "a handful of big companies could end up controlling everything." When even a single frontier model can be effectively banned on national-security grounds, the dependence of the AI economy on closed weights becomes an operational, not just philosophical, exposure. Open weights, by contrast, are not subject to a single government's licensing decision.

Hugging Face's scale is the evidence. Roughly half the Fortune 500 now download models or datasets through the platform. The deployment graph of enterprise AI is no longer concentrated at three API endpoints; it is dispersed across thousands of in-house inference stacks, each one reachable when a frontier provider is not.

The strategic implication extends beyond model choice. Open weights are also a hedge against lock-in to compute providers. If your weights are open, you can move between hyperscalers, between neoclouds, between in-house and rented inference, without retraining. In a market where compute contracts are now nine-figure monthly line items, that portability is the closest thing to a price-control mechanism the customer side has.`,
    imageUrl: '/news/open-source-ai-matters-more-than-techcr.png?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/podcast/open-source-ai-matters-more-than-ever-according-to-hugging-faces-clem-delangue/',
    date: '2026-07-10',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'sk-hynix-raises-265b-in-the-techcr',
    title: 'SK Hynix raises $26.5B in the largest foreign IPO in US history',
    summary: 'The HBM supplier to Nvidia priced 177.9M ADRs at $149, opened 14% above IPO, was 7x oversubscribed — and turned "Korea Discount" into "AI premium" overnight.',
    content: `The AI chip boom produced its biggest Wall Street moment on Friday. SK Hynix, the South Korean memory giant, raised \$26.5 billion (KRW 40 trillion) in its US market debut — the largest IPO by a non-American company in US history, surpassing Alibaba's \$25 billion listing in 2014.

The mechanics of the deal matter. SK Hynix sold 177.9 million American depositary shares at \$149 each, structured so US investors can buy in at roughly a tenth of what a full share costs in Seoul. It priced at a 2.7% premium to its own three-day average back home — and was reportedly more than seven times oversubscribed. The stock, trading temporarily as SKHYV on Friday before switching to SKHYV→SKHY on Monday, opened 14% above IPO and kept rising.

That demand is the headline. Korean companies have historically traded at a discount to their global peers — the so-called Korea Discount — over concerns about corporate governance, low shareholder returns, regulatory opacity, and North Korea risk. SK Hynix did not just close that gap, it inverted it. The reason is straightforward: SK Hynix makes high-bandwidth memory (HBM), the specialised DRAM stack that sits next to every Nvidia AI GPU. With HBM supply one of the tightest chokepoints in the AI buildout, the discount logic stopped applying the moment HBM became the most strategically relevant memory product on Earth.

Washington's response was immediate. Both SK Hynix and Samsung are now being pressed to commit to new US fabs. If the US wants to call AI a sovereign industry, it needs sovereign memory — and the only companies that can deliver that at scale right now are Korean.`,
    imageUrl: '/news/sk-hynix-raises-265b-in-the-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/10/sk-hynix-raises-26-5b-in-the-biggest-foreign-ipo-in-us-history-is-urged-to-build-new-us-fabs/',
    date: '2026-07-10',
    category: 'funding',
    tags: ["ai"],
  },
  {
    slug: 'hugging-faces-ceo-on-why-companies-techcr',
    title: 'Hugging Face\'s Delangue: companies are done renting their AI',
    summary: 'On Equity, the Hugging Face CEO argues the same arc plays out at every Fortune 500 — prototype on frontier APIs, migrate to open weights as costs scale. Half the Fortune 500 now download from Hugging Face.',
    content: `On TechCrunch's Equity podcast this week, Hugging Face CEO Clem Delangue made a familiar but increasingly hard-to-ignore argument: the companies that matter are getting off the frontier-API treadmill. The pattern, in his telling, is "start on frontier APIs, but as you scale, the costs push them towards open source models." Hugging Face — GitHub-for-AI in his framing — now serves roughly half the Fortune 500 with shared open models and datasets.

The economics behind the migration are not subtle. Frontier API pricing is per-token; at small scale it is a rounding error, at large scale it is the dominant line item on the AI bill. The marginal-cost curve of inference is steeper than the marginal-cost curve of training, which means the more a product succeeds on a frontier API, the more that product subsidises the frontier lab. At some volume threshold — and Delangue has seen it hit every category from search to coding to customer support — the rational move is to bring the model in-house, weight by weight, and pay only the inference cost.

That transition is what Hugging Face is monetising. The company is no longer a model zoo with a search bar; it is the deployment graph for serious enterprise AI. Being where the workload lands is the durable position.

Delangue also tied the rental-to-ownership arc to the broader open-vs-closed fight, framing it as a hedge against a future where "a handful of big companies could end up controlling everything." For enterprises that already survived one platform-shift hostage crisis (the cloud), the calculus is familiar. Own the model, or be told what it costs next quarter.`,
    imageUrl: '/news/hugging-faces-ceo-on-why-companies-techcr.png?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/10/hugging-faces-ceo-on-why-companies-are-done-renting-their-ai/',
    date: '2026-07-10',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'openai-says-gpt-56-is-the-techcr',
    title: 'OpenAI declares GPT-5.6 the "preferred model" for Microsoft 365 Copilot',
    summary: 'After Bloomberg reported Microsoft was quietly routing Word and Excel to in-house MAI models, OpenAI\'s GPT-5.6 launch doubles as a public defence of a relationship that no longer looks exclusive.',
    content: `Earlier this week Bloomberg reported that Microsoft had begun swapping some of OpenAI's software for its in-house MAI models inside Word and Excel — a story that, in the industry's shorthand, posed an obvious question: are the two companies drifting apart? On Thursday OpenAI used the launch of GPT-5.6 to publicly answer "no." The new model is now the "preferred model" powering Microsoft 365 Copilot, OpenAI said in a blog post accompanying the launch, and will back the full suite — Word, Excel, PowerPoint, and Cowork.

"Our partnership with Microsoft has always been about bringing the benefits of advanced AI to more individuals and organizations, and we're excited to continue building on that shared commitment," OpenAI wrote. The phrasing is deliberately soft. "Preferred model" is the most ambiguous possible declaration — it preserves OpenAI's distribution into the most important enterprise AI install base in the world, while leaving Microsoft room to keep routing specific workloads to MAI as cost or compliance dictates.

That ambiguity is, in fact, the deal. Microsoft has spent two years building MAI precisely so it can negotiate from a position of internal capacity. A clean "exclusive" relationship would erase the leverage MAI created. A clean "replacement" would forfeit the market position of Copilot, which still depends on OpenAI's frontier models for the workloads Microsoft cannot match internally. The compromise is a loosely-coupled dependency: OpenAI stays the default, MAI remains a margin lever, and both companies get to call the arrangement a partnership.

For the broader market the message is more nuanced than it looks. OpenAI is not denying that Microsoft is internalising parts of the stack — it is reframing internalisation as portfolio diversification rather than a breakup. The press release and the Bloomberg story can both be true.`,
    imageUrl: '/news/openai-says-gpt-56-is-the-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/openai-says-gpt-5-6-is-the-preferred-model-for-microsoft-copilot-amid-breakup-chatter/',
    date: '2026-07-10',
    category: 'industry',
    tags: ["openai","gpt","microsoft"],
  },
  {
    slug: 'fidji-simo-steps-down-from-openais-techcr',
    title: 'OpenAI\'s No. 2 executive Fidji Simo is stepping down to a part-time advisory role',
    summary: 'Simo\'s medical leave turned out to be longer than expected. Her departure — alongside the exits of CPO Weil and CMO Rouch — leaves a thin C-suite just as OpenAI eyes a public offering.',
    content: `Fidji Simo, OpenAI's No. 2 executive and the CEO of Applications since May 2025, is stepping down to a part-time advisory role, The Wall Street Journal reported Thursday. In an internal note, Simo said her ongoing medical leave — first disclosed in April as a relapse of a neuroimmune condition — had proven longer and harder than expected.

Simo was a structural appointment. She joined OpenAI's board in 2024 and then took the newly created CEO of Applications role reporting directly to Sam Altman, with COO Brad Lightcap, CFO Sarah Friar, and CPO Kevin Weil all moving under her. The structure was designed to free Altman to focus on research, compute, and safety, while Simo ran the consumer and enterprise product surface. Less than 18 months later, Lightcap is in a "special projects" role, Rouch has left to focus on cancer recovery, Weil has also left, and Simo is now part-time. The C-suite bench that was supposed to scale OpenAI to a public company is, in fact, thinner than it was a year ago.

Simo's background was the reason she was hired. She came from Instacart, where she was CEO from 2021 through the 2023 IPO, and before that spent over a decade at Meta running the Facebook app. She was the consumer-product operator OpenAI's executive team had conspicuously lacked. She was also, in the public narrative, the person widely expected to take on even more responsibility once OpenAI went public — making her departure a real succession question for Altman to answer at the worst possible moment.

The IPO timing makes the optics harder. OpenAI is reportedly preparing a public offering. The executive who would have been the public-market face of the consumer and enterprise product is now in an advisory role. Altman's remaining bench needs to be deeper than it currently looks, and quickly.`,
    imageUrl: '/news/fidji-simo-steps-down-from-openais-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/fidji-simo-steps-down-from-openais-no-2-role/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["openai"],
  },
  {
    slug: 'openai-launches-its-new-family-of-techcr',
    title: 'OpenAI ships GPT-5.6 across Sol, Terra, and Luna — plus a workplace product called ChatGPT Work',
    summary: 'Sol is positioned as OpenAI\'s strongest cybersecurity model yet; the company also says Sol is 54% more token-efficient than its predecessor on coding tasks. A direct attack on Microsoft 365 Copilot.',
    content: `OpenAI unveiled its new GPT-5.6 model family on Thursday, with three variants: Sol (the workhorse), Terra (the intermediate option), and Luna (the budget tier). The family marks OpenAI's broadest capability upgrade in a year and ships alongside a new workplace product, ChatGPT Work, that targets the same enterprise seat Microsoft 365 Copilot currently dominates.

The headline technical claim is efficiency. CEO Sam Altman has said publicly that Sol is 54% more token-efficient than the previous generation on AI coding tasks. For an enterprise customer paying per token, a 54% efficiency improvement is functionally a 54% price cut at the same workload — or, equivalently, the same dollar now buys nearly twice as much output. Token efficiency, not raw benchmark scores, is the competitive lever that has been moving enterprise procurement decisions in 2026, and Sol is positioned to lead on it.

Sol is also framed as OpenAI's "strongest cybersecurity model yet, achieving frontier performance with significantly fewer tokens." That phrasing is the answer to the Trump administration's earlier attempts to restrict Sol's rollout on national-security grounds. The model supports defensive cybersecurity work — threat modelling, code review and patching, blue-team simulations — which is the precise capability profile the White House said it wanted to verify before Sol could be released at scale. The implication of the launch is that the cyber-safety review is now considered closed, at least on OpenAI's side.

ChatGPT Work is the more direct commercial signal. The product is positioned as a workplace companion that runs on desktop, web, and mobile and handles "drafting documents, spreadsheets, and presentations." That is the Microsoft 365 surface area, in two sentences. The product that runs on OpenAI's models is now competing with the product that runs on OpenAI's models.`,
    imageUrl: '/news/openai-launches-its-new-family-of-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/',
    date: '2026-07-09',
    category: 'release',
    tags: ["openai","gpt"],
  },
  {
    slug: 'an-ai-agent-startup-just-let-techcr',
    title: 'Lyzr used its own AI agent to run a $100M Series B, fielding 130+ investors',
    summary: 'The three-year-old Jersey City startup\'s SivaClaw system drafted memos, tracked slide engagement, and replaced the traditional Sand Hill Road fundraising dance — pulling in $400M of investor interest at a ~$500M valuation.',
    content: `The cleanest product demo in AI this year is not a benchmark score or a coding eval. It is a startup that let its own AI agent run the company's \$100 million Series B. Lyzr, a three-year-old Jersey City, New Jersey startup that helps enterprises build AI agents, used its in-house system SivaClaw to field questions from more than 130 investors, draft investment memos, and track which slides individual backers lingered on. The round closed at a roughly \$500 million valuation, Bloomberg reported.

The most telling detail is how little human legwork was involved. Lyzr told Bloomberg it pulled in \$400 million of investor interest from Silicon Valley, the Middle East, and the financial sector without a founder ever needing to fly out for the traditional Sand Hill Road coffee-meeting-and-warm-intro dance. The capital is chasing AI deployments so aggressively that founders with credible traction barely have to leave their desks to raise nine figures.

For the AI agent category broadly, the use case is self-referentially compelling. Lyzr did not just claim its agent could do enterprise work; it used the agent to do a real, materially important piece of work, with measurable outcomes (130+ investors fielded, \$100M closed, \$500M valuation) and no founder travel. The product is, in a literal sense, what it does.

The risk is one the AI agent category is going to have to confront soon. The "our agent ran our raise" story is excellent marketing the first time it is told. By the fifth telling, the bar for what counts as evidence shifts. The category's long-term credibility depends on whether SivaClaw-class agents keep producing outcomes that look more like a \$100M fundraise than like a slide deck.`,
    imageUrl: '/news/an-ai-agent-startup-just-let-techcr.png?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/an-ai-agent-startup-just-let-its-agent-run-its-100-million-fundraise/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["agent"],
  },
  {
    slug: 'openai-is-shutting-down-atlas-but-techcr',
    title: 'OpenAI is sunsetting Atlas and folding its browser features into ChatGPT and a Chrome extension',
    summary: 'Nine months after launch, OpenAI is admitting the standalone AI browser did not work — and routing its agentic-browsing capabilities into the surfaces users already inhabit.',
    content: `OpenAI is shutting down Atlas, the AI-powered browser it launched in October with ChatGPT at its core, less than a year after launch. The agentic browsing features Atlas was built to demonstrate are being redistributed into a new Chrome extension and a beefed-up ChatGPT desktop app.

The move is the clearest signal yet that "AI browser" is not, in fact, a category. Perplexity's Comet, The Browser Company's Dia, and OpenAI's Atlas all launched in the same 12-month window on the same thesis — that an AI-native browser would displace Chrome as the place where people spend time online. None of them meaningfully moved Chrome's market share. The conclusion OpenAI is now drawing out loud, after Atlas: the browser is a feature, not a destination.

The replacement strategy is to fight the surface the user is already on, not the one OpenAI wishes they were on. The new Chrome extension gives ChatGPT the context of whatever page the user is viewing — they can ask questions, summarise content, or hand off longer tasks from inside the existing browser. That puts the extension in direct competition with Google's Gemini Side Panel, which already performs several of the same tasks. OpenAI is, in other words, fighting Chrome from inside Chrome.

The desktop ChatGPT app is also getting a more capable browser — one that can browse websites, log into accounts, download files, and interact with web pages without the user leaving ChatGPT. A separate cloud browser, running remotely on OpenAI's servers, is where the app's agents will complete tasks on a user's behalf. The pattern: ChatGPT is the OS, the browser is a file picker. The OS-layer abstraction was always OpenAI's actual product strategy. Atlas was a detour.`,
    imageUrl: '/news/openai-is-shutting-down-atlas-but-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/openai-is-shutting-down-atlas-but-its-ai-browser-ambitions-are-still-growing/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["openai"],
  },
  {
    slug: 'elon-musk-praises-mythosfable-promises-not-techcr',
    title: 'Elon Musk: Anthropic "obviously the leader in AI," promises not to cut them off',
    summary: 'Six months after calling Anthropic a non-contender, Musk is now publicly endorsing the lab — which is also one of SpaceX\'s largest customers at $1.25B/month through May 2029.',
    content: `In a post on X Thursday, Elon Musk did something that would have been unthinkable a year ago: he publicly endorsed Anthropic. "I was clearly wrong about Anthropic," he wrote, referring to a September 2025 post in which he said, "Winning was never in the set of possible outcomes for Anthropic." His new framing: "They are obviously currently the leader in AI. No company has released a model as good as Mythos/Fable and they will undoubtedly have Mythos 2 ready soon."

The endorsement is more than a vibe shift. As of July 2026, Anthropic is one of SpaceX's largest customers. In May, Anthropic signed a deal to purchase the entire 300-megawatt output of xAI's Colossus 1 data center near Memphis, at \$1.25 billion per month through May 2029 — a contract worth roughly \$40 billion in revenue to SpaceX's xAI unit over its life. Google also signed a deal in the same window to rent SpaceX infrastructure through June 2029, for \$920 million per month.

That commercial relationship is the subtext of every line Musk now writes about Anthropic. When he promises "I would never cut them off in a way that hurt them badly, even as a competitor. That's not my style," he is also confirming that the largest single B2B contract in the AI infrastructure market is, on his end, a long-term commitment he is not going to weaponise. The reassurance is not purely altruistic; it is the cost of sustaining the \$40 billion revenue line.

The broader signal is the reorganisation of AI power. The dominant axis of competition is no longer "model lab versus model lab" — it is "compute owner versus model owner." Anthropic, OpenAI, and Google are now the buyers; SpaceX/xAI, Microsoft, Amazon, Oracle, and the neoclouds are the sellers. Musk's pivot from "AI doomer" to "Anthropic's biggest infrastructure fan" is the most public case study in that reorganisation.`,
    imageUrl: '/news/elon-musk-praises-mythosfable-promises-not-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/elon-musk-praises-mythos-fable-promises-not-to-cut-off-anthropic/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["anthropic"],
  },
  {
    slug: 'can-ai-answer-the-3-trillion-techcr',
    title: 'Sequoia\'s David Cahn puts the AI capex bill at $1.5T — and the required revenue at $3T',
    summary: 'Three years after his original $200B reckoning, Cahn is back with a number seven times larger. The hyperscalers\' 2028 free-cash-flow projections are now the bet that closes the gap.',
    content: `Three years ago Sequoia partner David Cahn was the first person in venture capital to do the math on AI infrastructure and publish a number. In 2023, starting from Nvidia's reported \$50 billion annual GPU revenue and adding the implied cost of data-centre operations and operator margins, he concluded that the industry would need \$200 billion in revenue to pay back the up-front capex. The paper read as a provocation; it ended up as a roadmap.

The 2026 update is bigger. Cahn now puts AI infrastructure spend for the year at \$1.5 trillion. The implied revenue required to justify that spend — given the same ratio of revenue-to-capex his 2023 model produced — is roughly \$3 trillion, and probably more, because the cost of memory and the use of inference-specific or exotic chips are both rising. "Recently, the required revenue per GW of CapEx has sharply increased due to these bottleneck dynamics and rising costs of construction," he writes.

On the other side of the ledger, the actual revenue is much smaller. Anthropic is thought to have hit \$60 billion in annualised run-rate revenue. OpenAI reportedly earned \$13 billion in 2025, said it was at a \$20 billion ARR by November, and is presumably higher now. Combined, that is a fraction of \$3 trillion. The remainder of the gap is what the hyperscalers' 2028 free-cash-flow projections are betting on — and Apollo chief economist Torsten Slok is now pointing at those 2028 projections specifically as the test the market is watching.

The fundamental question is whether AI is a productivity layer (cheaper, faster — revenue shows up as cost savings somewhere else) or a new demand layer (new spend — revenue shows up as new line items). If it is the former, \$3T is a stretch. If it is the latter, \$3T might be conservative. Cahn's number is the question, not the answer.`,
    imageUrl: '/news/can-ai-answer-the-3-trillion-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/can-ai-answer-the-3-trillion-question/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'meta-enters-the-crowded-ai-coding-techcr',
    title: 'Meta enters the agentic-coding race with Muse Spark 1.1 at $1.25/$4.25 per million tokens',
    summary: 'The new multimodal model targets enterprise code migrations and multi-step agentic tasks, priced in line with Claude Haiku 4.5 and GPT-5.6 Luna — Meta\'s late but coordinated play for the developer seat.',
    content: `Meta publicly launched Muse Spark 1.1 on Thursday, a multimodal model purpose-built for agentic coding — the class of workloads where an AI plans a multi-step task, invokes external tools, writes code, runs it, and iterates. Spark 1.1, the first version of which was announced in April, can engage in multistep reasoning, manage digital workflows, and deploy new features inside enterprise systems, the company says.

Meta is the last of the hyperscalers to ship a serious code model at this tier. Anthropic and OpenAI have had production-grade coding offerings for over a year. That Meta is late matters less than how it is pricing: \$1.25 per million input tokens and \$4.25 per million output tokens, in line with — albeit slightly above — Anthropic's Claude Haiku 4.5 and OpenAI's GPT-5.6 Luna. The pricing is competitive, not aggressive, which is a tell. Meta is not racing to the bottom on tokens; it is going after the enterprise code-migration workload, where price is a second-order concern behind capability.

The pitch is precisely that workload. "Muse Spark 1.1 delivers exceptional performance in personal agentic tasks that require planning and orchestration across a range of external apps and services," the company wrote. The subtext is large-codebase refactors, multi-repository migrations, and CI/CD automation — the kind of automation that an enterprise engineering organisation will pay nine figures a year to make reliable.

For Meta, Spark is also the productivity tool Meta itself will deploy internally across Facebook, Instagram, and WhatsApp before any external customer touches it. The external launch is the second-order monetisation. The first-order monetisation is Meta's own developer headcount, which is now the largest captive user base for the model.`,
    imageUrl: '/news/meta-enters-the-crowded-ai-coding-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/meta-enters-the-crowded-ai-coding-battle-with-muse-spark-1-1/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["meta","coding"],
  },
  {
    slug: 'new-york-times-says-openai-hid-techcr',
    title: 'New York Times says OpenAI hid 78M internal ChatGPT logs and a "Bloom" filter in copyright suit',
    summary: 'A new sanctions motion alleges OpenAI ran a project called "Project Giraffe" to track copyrighted regurgitation in its own outputs — then submitted a 20M-log sample so heavily redacted the court called it "unusable."',
    content: `The New York Times and The Daily News escalated their two-year copyright suit against OpenAI this week with a new motion for sanctions, alleging the company has spent the litigation hiding the very tools and datasets that could prove its models trained on and reproduce their journalism.

The most consequential new claim involves an April deposition of OpenAI data privacy engineer Vinnie Monaco. According to the plaintiffs, Monaco revealed that OpenAI had been running internal searches and evaluations of its own training corpus specifically to detect copyrighted works — and that, beginning before the Times filed its suit, OpenAI had assembled a database of roughly 78 million de-identified ChatGPT conversations, used internally to measure how often the model was regurgitating copyrighted material. On top of that dataset, OpenAI allegedly implemented a "Bloom" filter as part of a project called "Project Giraffe," which detected and recorded instances of regurgitation in model outputs shortly after the lawsuit was filed.

The 20-million-log sample OpenAI eventually submitted to the court is the other half of the story. The Times had originally asked for 120 million logs; OpenAI negotiated that down to 20 million and submitted a sample the court described as so heavily redacted as to be "unusable." The plaintiffs also allege OpenAI deleted billions of ChatGPT outputs after the suit was filed in direct violation of the court's preservation order, and substituted millions of logs in the requested sample.

If the sanctions motion succeeds, the consequences extend well beyond the Times. The internal tracking architecture the plaintiffs describe is not unique to OpenAI — it is, in fact, the kind of compliance scaffolding any frontier model operator would build if it took copyright exposure seriously. The question the case will eventually answer is whether building that scaffolding and then stonewalling discovery with it is treated as evidence of consciousness of guilt, or as ordinary corporate litigation behaviour.`,
    imageUrl: '/news/new-york-times-says-openai-hid-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/new-york-times-says-openai-hid-evidence-in-chatgpt-copyright-trial/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["openai","gpt"],
  },
  {
    slug: 'google-will-now-disclose-which-ads-techcr',
    title: 'Google will now label ads that were created or edited with AI',
    summary: 'A new "How this ad was made" disclosure in My Ad Center will indicate AI involvement, but the system leans on advertiser self-attestation — Google does not independently verify.',
    content: `Google is rolling out a new disclosure in its "My Ad Center" panel — accessible globally via the three-dot menu or info icon on ads in Search, YouTube, and Discover — that flags when an ad was created or edited with AI. The label, surfaced under a new "How this ad was made" item, builds on a policy that previously applied only to election ads.

The strategic logic is two-sided. Generative AI dramatically lowers the cost of producing ad creative — a small business that used to need a \$5,000 product photoshoot can now generate two hundred variants in an afternoon — and Google, as the largest digital-ad platform in the world, has an interest in keeping that creative supply flowing. But it also has an interest in not letting AI-generated creative become the default untrustworthy surface, because the moment users stop trusting the ads, the inventory price falls. Disclosure is the minimum-viable trust mechanism that lets the supply expand without collapsing the demand.

The implementation choice is what it is. When advertisers use Google's own generative AI ad tools, the disclosure is automatic. When the ad is created elsewhere and merely run through Google's ad stack, the advertiser has to self-attest via a new control — Google will not independently check. In some markets, local law will require the label regardless.

That asymmetry is the weak point. Self-attestation-based disclosure is only as honest as the worst-in-class advertiser. The real test of the policy is not Google's own creative tools — those are already covered — but the long tail of AI-generated creative that will now be uploaded to the platform from third-party tools and labeled on the honour system. The web is about to get a lot more synthetic, and Google's disclosure layer is a useful first step that is unlikely to be the last.`,
    imageUrl: '/news/google-will-now-disclose-which-ads-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/google-will-now-disclose-which-ads-are-made-with-ai/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["google"],
  },
  {
    slug: 'paris-based-ai-voice-startup-gradium-raises-techcr',
    title: 'Paris-based Gradium raises $100M seed with Nvidia, opens Bay Area office',
    summary: 'A voice-AI lab spun out of Kyutai has reopened its seed round with Nvidia as a new investor, raising the round to nine figures — and will use the cash to compete for talent in Anthropic\'s and OpenAI\'s backyard.',
    content: `Gradium, a Paris-based voice-AI startup spun out of the research lab Kyutai, has reopened its seed round to Nvidia and a small group of other investors, bringing the round to a total of \$100 million, the company said Thursday. The capital will fund a Bay Area office that Gradium frames, in its own words, as "strengthening its position at the heart of the world's leading AI ecosystem."

That last clause is the strategic tell. Paris is one of the strongest AI research cities in Europe, and Gradium's CTO Neil Zeghidour — a former Google Brain, DeepMind, and Facebook researcher — has the network to recruit there at a discount. But "discount" is a relative term. The premium for senior AI research talent in the Bay Area is large and getting larger, and the company that can hire near the labs whose models Gradium's voice agents will sit next to has a real information advantage. Gradium is choosing to pay that premium.

The product thesis is sub-200ms latency voice. The "awkward pause" that turns a voice assistant from feeling conversational to feeling like a phone tree is the single biggest adoption blocker for agentic voice. Gradium's claim is that its models can deliver voice in a single round-trip without the user-perceptible delay. If that holds at scale, it is the moat. ElevenLabs, the current category leader, is reportedly at \$11 billion post-money as of February; Gradium at \$100M seed is implicitly several orders of magnitude behind on capital but competing on the same technical surface.

The customer list helps. Since its December launch Gradium has landed Renault as an early design partner, alongside undisclosed financial-services and consumer accounts. For an AI agent builder that needs a low-latency voice stack, Gradium is one of the few credible non-ElevenLabs options emerging in 2026.`,
    imageUrl: '/news/paris-based-ai-voice-startup-gradium-raises-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/paris-based-ai-voice-startup-gradium-raises-100m-seed-backed-by-nvidia/',
    date: '2026-07-09',
    category: 'funding',
    tags: ["ai"],
  },
  {
    slug: 'how-did-the-government-decide-openais-techcr',
    title: 'How did the government decide OpenAI\'s Sol was safe to release? Nobody quite knows.',
    summary: 'The Trump administration\'s frontier-model executive order left the actual safety criteria unfilled. Anthropic\'s Fable was briefly pulled, OpenAI\'s Sol was not. Researchers and former policy advisors are now openly asking what the threshold is.',
    content: `OpenAI is rolling out Sol, its newest flagship LLM, to the public — and the model is considered at least on par with Anthropic's Fable, a frontier model whose capabilities (or perhaps its ownership) were concerning enough to the White House that it was briefly pulled from public access. The obvious question is symmetry: if Fable was restricted, why was Sol cleared? Short answer: nobody outside a very small circle appears to know.

"Frankly, I don't have visibility into those exact processes, so yes, I don't feel like I have enough information to say whether they're adequate or not," Mina Narayanan, a senior research analyst at Georgetown's Center for Security and Emerging Technology, told TechCrunch. Anthropic, she noted, has said it was in conversation with the government and developed classifiers to detect jailbreak attempts, but the substance of those conversations is not public. Dean W. Ball, a former Trump policy advisor now working at OpenAI, wrote in his newsletter last month that "nobody knows what the requirements are to get licensed." Andy Konwinski — co-founder of Databricks, Perplexity, and the Laude Institute — said the same thing: "It's existentially a problem. Safety or not, it's about who has the power to make decisions — who gatekeeps and decides on permissions?"

Eighteen months into the Trump administration, there is still no public answer. The May executive order on frontier models laid out a roadmap for evaluation, but the specifics have yet to be filled in. Sriram Krishnan, a former Andreessen Horowitz partner who served as a senior AI advisor at the White House until last month, told the Financial Times: "There will not be an FDA for AI." Whether that is a constraint or a choice, the practical result is the same: every frontier-model release is now effectively a fait accompli, with whatever safety review happens taking place behind a wall the press, the public, and most of the industry cannot see through.`,
    imageUrl: '/news/how-did-the-government-decide-openais-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/how-did-the-government-decide-openais-frontier-model-was-safe-to-release/',
    date: '2026-07-09',
    category: 'release',
    tags: ["openai"],
  },
  {
    slug: 'instagram-users-heres-how-to-stop-techcr',
    title: 'How to keep Meta\'s Muse Image from using your Instagram photos',
    summary: 'As long as your profile is public, anyone can @-mention you into a synthetic image. TechCrunch walks through the opt-out path — and what the broader rollout says about platform consent in the AI era.',
    content: `Meta's Muse Image — the new image-generation feature embedded in Facebook, Instagram, WhatsApp, and Messenger — has a quietly aggressive default: any user can @-mention a public Instagram account and use that account's public photos as a reference for an AI-generated image. Only private accounts and accounts held by under-18 users are automatically excluded.

The opt-out exists, but it is not advertised. The relevant control is buried in the "What others see" and "Generative AI" sections of Instagram's settings — a series of toggles that, until this week, most users had no reason to know about. TechCrunch's walkthrough, published earlier in the week, was one of the first mainstream guides to surface those toggles in plain language.

The bigger story is not the opt-out path. It is what the rollout reveals about platform consent in the AI era. Public social media profiles are no longer "public" in the way users have historically understood the word. They are not just visible to other humans; they are reference data for a generative model that can recombine them into synthetic content the original user has never seen and never approved of. The "public profile = visible" mental model, baked into two decades of social network UX, no longer describes the actual surface area of what a public profile is.

The Muse Image rollout also exposes the regulatory gap. Most existing US privacy frameworks were written around the question "is the data visible to other users?" not "is the data a training input for a generative model?" Consent in the AI era is a different question, and the platforms — Meta included — are clearly still working out which parts of the answer they have to give the user voluntarily versus under compulsion.`,
    imageUrl: '/news/instagram-users-heres-how-to-stop-techcr.jpg?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/how-to-stop-metas-ai-image-generator-from-using-your-instagram-photos/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["meta"],
  },
  {
    slug: 'metas-new-ai-chips-will-begin-techcr',
    title: 'Meta\'s MTIA chips enter production in September, alongside $125–145B capex year',
    summary: 'Co-designed with Broadcom and manufactured by TSMC, Meta\'s latest AI accelerators will use a modular chiplet architecture that the company explicitly designed to outlast a single AI workload cycle.',
    content: `Meta is on track to begin production of its next-generation Meta Training and Inference Accelerator (MTIA) chips in September, according to an internal memo seen by Reuters. At least one chip in the family completed its testing phase in about six weeks — fast for a custom AI silicon programme.

The stack is the usual Meta-wide design: Broadcom handles chip architecture, TSMC manufactures, Samsung supplies the RAM, Sandisk the storage, and Sumitomo Electric the fibre optics. What is unusual is the architecture choice. Meta detailed the four new MTIA chips in March as a modular chiplet design — meaning the company can mix and match compute, memory, and interconnect tiles, swapping in newer tiles as the workload shifts without redesigning the whole die. "Each MTIA generation builds on the last, using modular chiplets, incorporating the latest AI workload insights and hardware technologies, and deploying on a shorter cadence," Meta wrote at the time.

That choice is the strategic tell. AI workload specs change faster than 18-month chip tape-outs. A monolithic design locks Meta into a specific balance of training vs inference, transformer vs convolution, batch vs online — bets that often look wrong two quarters later. Chiplets let the company cycle the parts that age fast while keeping the parts that age slowly. It is the same playbook AMD and Intel have used against Nvidia in the general-purpose CPU market, applied to AI silicon.

The economics are the bigger story. Meta is on track for \$125–145 billion in capital expenditure this year, much of it AI infrastructure. Anything that displaces dollar-for-dollar Nvidia spend — even for narrow workloads like ranking and recommendation — is a strategic lever. Meta has been producing its own AI chips since 2023; the September tape-out is the first generation the company is willing to scale broadly.`,
    imageUrl: '/news/metas-new-ai-chips-will-begin-techcr.png?v=2',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/07/09/metas-new-ai-chips-will-begin-production-in-september/',
    date: '2026-07-09',
    category: 'industry',
    tags: ["meta"],
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
