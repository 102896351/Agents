// ============================================================
//  AI News 数据源 —— 由 scripts/fetch-news.mjs 自动生成
//  最后更新：2026-07-01T04:25:26.144Z
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
    imageUrl: '/news/why-wall-street-thinks-us-memory-techcr.jpg',
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
    imageUrl: '/news/apple-vision-pro-exec-is-reportedly-techcr.jpeg',
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
    imageUrl: '/news/the-fittest-founder-in-the-room-techcr.png',
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
    imageUrl: '/news/asian-ai-startups-launch-mythos-like-models-techcr.jpeg',
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
    imageUrl: '/news/trump-admin-releases-anthropic-mythos-to-techcr.jpg',
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
    imageUrl: '/news/openai-limits-gpt-56-rollout-after-government-techcr.jpg',
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
    imageUrl: '/news/openai-poaches-uber-india-chief-to-techcr.jpg',
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
    imageUrl: '/news/why-everyone-from-openai-to-spacex-techcr.jpg',
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
    imageUrl: '/news/it8217s-not-about-anthropic-vs-openai-techcr.jpg',
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
    imageUrl: '/news/openai8217s-jalapeo-chip-is-big-tech8217s-techcr.jpg',
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
    imageUrl: '/news/the-white-house-is-asking-openai-techcr.jpg',
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
    imageUrl: '/news/patronus-ai-lands-50m-to-build-techcr.jpg',
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
    imageUrl: '/news/anthropic8217s-claude-is-winning-over-paid-techcr.jpg',
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
    imageUrl: '/news/general-intuition8217s-23b-bet-that-video-techcr.jpg',
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
    imageUrl: '/news/databricks-former-ai-chief-thinks-he-techcr.jpg',
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
    imageUrl: '/news/netris-raises-15m-series-a-from-techcr.jpg',
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
    imageUrl: '/news/adobe-acquires-image-and-video-enhancement-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/25/adobe-acquires-image-and-video-enhancement-tool-maker-topaz-labs/',
    date: '2026-06-25',
    category: 'industry',
    tags: ["adobe","video","image"],
  },
  {
    slug: 'wayve-launches-85m-employee-tender-offer-techcr',
    title: 'Wayve launches $85M employee tender offer at $8.5B valuation',
    summary: 'Wayve’s offering is part of a growing trend of AI startups using employee tenders as a strategic tool to attract and retain talent.',
    content: `Wayve, a UK-based self-driving tech startup, is allowing its employees to sell a portion of their vested equity. The \$85 million tender offer — essentially a structured opportunity for employees to sell shares back to investors — is being led by the company’s existing and new investors at the company’s latest valuation of \$8.5 billion.

That valuation was set in February when the nine-year-old company raised a \$1.2 billion Series D led by Eclipse, Balderton and SoftBank Vision Fund 2, and included participation from Ontario Teachers’ Pension Plan, Baillie Gifford, Microsoft, NVIDIA and Uber.

This is Wayve’s second employee liquidity event. The company previously held a tender offer alongside its \$1.05 billion Series C funding round in May 2024.

Wayve’s offering is part of a growing trend of AI startups. Rather than waiting years for an exit, companies are using tender offers as a retention tool, giving employees a reason to stick around rather than jump to a competitor — or start their own shop — the moment their options vest.

Other startups that have recently completed employee tender offers include Decagon, which builds AI agents that handle customer service for enterprises like Duolingo and Hertz; ElevenLabs, the AI voice-generation company behind much of the internet's synthetic speech and dubbing tools; Linear, a popular project-management platform built for software teams; and Clay, a sales and marketing automation tool that helps companies research and reach prospects. (Clay has run two tenders in the last nine months alone.)

These startups are able to provide employee liquidity primarily because investors are eager to buy more of the equity in these high-growth companies, even at a premium, betting the businesses will be worth even more down the line.`,
    imageUrl: '/news/wayve-launches-85m-employee-tender-offer-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/wayve-launches-85m-employee-tender-offer-at-8-5b-valuation/',
    date: '2026-07-01',
    category: 'funding',
    tags: ["ai"],
  },
  {
    slug: 'trump-drops-restrictions-on-anthropics-mythos-techcr',
    title: 'Trump drops restrictions on Anthropic\'s Mythos and Fable models',
    summary: 'Anthropic said it would begin restoring access to the Fable on July 1.',
    content: `The US has lifted a requirement that Anthropic obtain a license before exporting its Mythos and Fable models abroad, a requirement that effectively cut off public access to what are widely considered the most advanced AI models released to date.

The AI lab said it would begin restoring access to the models on Wednesday, July 1.

On June 12, the US government had added the products to its list of export-restricted technologies, meaning they could no longer be made available to foreign nationals without special approval. Complying with that rule proved impractical at scale, forcing Anthropic to end public access to the models altogether.

Now, after weeks of talks, Secretary of Commerce Howard Lutnick said Anthropic "has agreed to proactively detect and address security risks associated with the models; to work diligently with the U.S. government on protocols and standards and releases for Mythos, Fable and future models; and to inform the US government of any malicious activity."

Anthropic had already publicly pledged to do much of this voluntarily, months before the export rule existed. That's part of why cybersecurity experts were skeptical of the restrictions in the first place. To them, the ban looked less like a security fix and more like leverage, a way for the Trump administration to punish Anthropic for its executives' public criticism of how the government, and the president's political opponents, might use the technology.

Mythos was originally made available to a select group of organizations beginning in April to allay concerns about its ability to identify and exploit vulnerabilities in software, while a version called Fable was released to the public in June with additional security guardrails.`,
    imageUrl: '/news/trump-drops-restrictions-on-anthropics-mythos-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/trump-drops-restrictions-on-anthropics-mythos-and-fable-models/',
    date: '2026-07-01',
    category: 'industry',
    tags: ["anthropic"],
  },
  {
    slug: 'vibe-coding-platform-base44-launches-own-model-techcr',
    title: 'Vibe-coding platform Base44 launches own model as AI startups seek defensibility',
    summary: 'Wix-owned vibe-coding platform Base44 has started rolling out its own AI model — with hopes that it will eventually outperform frontier models.',
    content: `Base44, the vibe-coding platform that Wix acquired for \$80 million just one year ago — when the company was barely six months old and had a team of eight — has started rolling out its own AI model to support its users in creating apps with natural language.

The move comes as the discussion in AI circles has intensified over whether frontier models are best suited for all use cases. A related question is whether businesses built on top of someone else's models are truly defensible long term. The latest move of Base44, based in Tel Aviv, speaks to both.

While its custom LLM is only just rolling out, Base44 hopes that it will eventually outperform frontier models. According to its founder, Maor Shlomo, “training and owning the model as part of [our] entire stack allows us a lot more optimizations on latency, cost, and efficiency.”

At first glance, this could be a way to stay ahead of competitors such as Swedish startup Lovable, which reached unicorn status in its Series A round last summer and that relies on external LLMs. However, Shlomo expects that others will train their own models — “at least the players that have gotten enough scale and velocity to have enough data.”

According to Jonathan Userovici, a general partner at VC firm Headline — whose portfolio includes AI companies like Mistral AI, but not Base44 — data is one of three key ingredients of defensibility for AI startups, alongside distribution and tech stack.

The upshot is that players with strong brands are now leaning into their data and infrastructure to increase their defensibility, and Base44 fits that pattern. The company says the first iteration of its LLM, Base1, was developed and trained on a dataset generated from “tens of millions of real user interactions on the platform.”`,
    imageUrl: '/news/vibe-coding-platform-base44-launches-own-model-techcr.jpeg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/29/vibe-coding-platform-base44-launches-own-model-as-ai-startups-seek-defensibility/',
    date: '2026-06-30',
    category: 'release',
    tags: ["coding"],
  },
  {
    slug: 'the-ai-jobs-debate-just-got-techcr',
    title: 'The AI jobs debate just got messier',
    summary: 'A new report finds "high-intensity AI adopters” saw headcount increase 10.2%. Among those companies, entry-level headcount rose by 12%, countering the rhetoric that AI kills junior jobs.',
    content: `AI-related job loss fears grow each time another company announces a round of layoffs. Through May of 2026, companies announced that close to 90,000 job cuts were tied to AI, and, by some accounts, up to 15% of U.S. jobs are projected to be eliminated by AI over the next five years. Promises from the tech industry that AI will also create new jobs does little to ease fears, especially for the generation wondering if anyone will be hiring when they graduate.

A recent report from Ramp and Revelio Labs, which track enterprise AI spend and workforce records from nearly 22,000 companies, respectively, complicates that gloomy narrative.

The report found that companies spending heavily on AI are growing headcount faster, even in the entry-level roles that many fear are doomed. According to the report, “high-intensity adopters” — firms that spend on average \$30 per employee per month on AI in the first three months — saw headcount increase 10.2%.

Headcount also rose across functions, including engineering, sales, administration, customer service, finance, marketing, and scientist roles. The strongest job growth among high-intensity adopters was in the information sector, which includes software, internet, media, and tech-adjacent firms.

Despite these positive signals, the data isn’t as rosy as it seems. It skews heavily toward tech-forward, knowledge-work firms — ones that might have VC-backing and are growing fast anyway, making it difficult to say whether AI is contributing to the hiring or just showing up at companies that are expanding anyway.

“This paper does not show that AI universally creates jobs,” the paper’s authors admit, “but it does counter claims that AI will lead to broad job losses.”`,
    imageUrl: '/news/the-ai-jobs-debate-just-got-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/29/the-ai-jobs-debate-just-got-messier/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'crypto-exchange-okx-wants-ai-agents-techcr',
    title: 'Crypto exchange OKX wants AI agents to hire and pay each other',
    summary: 'OKX is bringing together payments, identity, and reputation into a marketplace for AI agents.',
    content: `When AI agents begin working for people — and increasingly for one another — they will need a way to find jobs, pay for services, and build trust. Crypto exchange OKX is betting that future is closer than many expect, launching a marketplace where AI agents can hire one another, settle payments autonomously, and build portable on-chain reputations.

Called OKX AI, the marketplace opens to developers on Tuesday following a closed beta involving 50 early AI service providers. The marketplace builds on technology OKX previously developed to let AI agents hold digital wallets, make payments using stablecoins, and establish persistent identities.

The launch marks OKX's latest push beyond crypto trading as it seeks to become a broader fintech company. With more than 150 million users globally, OKX is betting the next generation of customers will not just be people or institutions, but AI agents capable of transacting autonomously, giving rise to an emerging "agent economy."

"The coming decade will be defined by one-person companies that generate over a million dollars in annual revenue - because every individual effectively gains an unlimited workforce," Star Xu, founder and CEO of OKX, told TechCrunch. "Traditional financial infrastructure was built for humans. The agentic economy needs infrastructure designed for autonomous software. That is why we built OKX.AI."

Haider Rafique, OKX’s chief marketing officer and global managing partner, said the company believes "agentic commerce" could become a trillion-dollar market over the next five years, driven by micropayments and autonomous software.

The marketplace is aimed at crypto developers building AI applications and solo entrepreneurs looking to automate parts of their businesses with AI agents, Rafique told TechCrunch. The company expects those developers to build applications for the marketplace, allowing other users to access AI-powered tools without having to build them from scratch.`,
    imageUrl: '/news/crypto-exchange-okx-wants-ai-agents-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/crypto-exchange-okx-wants-ai-agents-to-hire-and-pay-each-other/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["agent"],
  },
  {
    slug: 'lumo-protons-privacy-focused-ai-chatbot-gets-techcr',
    title: 'Lumo, Proton\'s privacy-focused AI chatbot, gets an upgrade',
    summary: 'Proton\'s Lumo 2.0 is dropping this week, giving users a broader variety of capabilities.',
    content: `Proton, the privacy-focused productivity app company, released a public AI chatbot, Lumo, last year. On Tuesday, the chatbot received an upgrade.

Lumo 2.0 gives the chatbot a variety of newfound powers, including image recognition and image generation capabilities. Users can now upload pictures into Lumo, then use the chatbot to analyze or edit them. Similar to other LLMs, Lumo can also generate imagery based on a user's prompt.

Version 2.0 also expands Lumo's capabilities for Projects — the widget that allows users to upload documents and conduct work via Proton's other products like email and cloud storage. Projects now come with user-controlled persistent memory, which is a function that allows Lumo to recall a user's preferences across various conversational sessions.

Additionally, the company says Lumo's update makes it significantly more powerful than its previous version. The 2.0 version responds to most queries up to 76% faster than its previous iteration, the company says. The chatbot also comes with a new "thinking mode" for more complex problems or questions.

"Lumo 2.0 has been re-engineered from the ground up and the introduction of thinking mode gives it powerful new capabilities," said Andy Yen, founder and CEO at Proton. "Lumo 2.0 demonstrates that users no longer need to choose between powerful AI capabilities and meaningful privacy protections."

The public version of Lumo appears roughly equivalent to other major chatbots in terms of usefulness. It answers questions in a similar format as Gemini and ChatGPT, with approximately the same level of detail and context.`,
    imageUrl: '/news/lumo-protons-privacy-focused-ai-chatbot-gets-techcr.jpeg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/lumo-protons-privacy-focused-ai-chatbot-gets-an-upgrade/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'amazon-launches-new-1-billion-fde-techcr',
    title: 'Amazon launches new $1 billion FDE org, following OpenAI and Anthropic',
    summary: 'Engineers on the new team will embed within companies to deploy purpose-built agents, focusing on fast deployments and customer self-sufficiency.',
    content: `As companies struggle to integrate AI, they’re increasingly ready to bring in outside help — and service providers are launching new purpose-built groups to make sure they get it.

On Tuesday, Amazon Web Services (AWS) launched a new internal organization for AI-focused forward-deployed engineers. Engineers on the new team will embed within companies to deploy purpose-built agents, focusing on fast engagements and customer self-sufficiency.

In a post announcing the new org, AWS VP of Frontier AI Francessca Vasquez emphasized that the org would do more than build and maintain requested systems. “Customers leave AWS FDE deployments with both new solutions and new engineering capabilities,” the announcement reads. “Along with agentic systems running in their own AWS environment, they gain lasting AI skills, workflows, and patterns they can use to innovate independently.”

Amazon says \$1 billion will be committed to the new org, although the figure represents internal Amazon resources rather than a joint venture or conventional investment.

Pioneered by Palantir, the forward-deployed engineer (FDE) model has become increasingly popular as a way to manage AI deployments. In a typical FDE system, an engineer from the contracting company (in this case, AWS) works for the client temporarily while the system is being established, allowing them to respond directly as internal opportunities or challenges emerge.

In the FDE model, much of the relevant technology can be reused between deployments, while still being tailored to the specifics of each company’s needs and workflows. It also gives the client company an influx of expertise and puts primary responsibility for the deployment in the hands of the contractor. The biggest downside is the labor involved, since it means maintaining a full corps of FDE engineers to install and maintain the company’s technology.`,
    imageUrl: '/news/amazon-launches-new-1-billion-fde-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/amazon-launches-new-1-billion-fde-org-following-openai-and-anthropic/',
    date: '2026-06-30',
    category: 'release',
    tags: ["openai","anthropic"],
  },
  {
    slug: 'podcasting-platform-riverside-enters-the-newsletter-techcr',
    title: 'Podcasting platform Riverside enters the newsletter publishing game',
    summary: 'Users will be able use AI to create newsletters based on their recordings.',
    content: `Video and podcast recording tool maker Riverside is giving its users a new way to reach their audiences: newsletters.

Riverside isn't aiming to directly take on established newsletter platforms like Mailchimp, Substack, Beehiiv, or Ghost, however. Instead, recognizing that its userbase already generates a lot of content, the company is giving the users of its recording tools an AI tool to turn their existing videos and podcasts into newsletters, and send them directly from within its app. Users can also create and send newsletters from scratch without using the AI conversion feature.

"Substack and Beehiiv start you at a blank page. But our creators and business customers are already producing rich, information-dense spoken content on Riverside. For most people, speaking is easier and more natural than writing from scratch, and the ideas are already there, in the conversation. So instead of asking them to start over in a separate tool, we help them turn a recording they've already made into newsletter-ready content with far less effort," Riverside's co-founder and CEO Nadav Keyson told TechCrunch.

The company is also updating its recording suite to support multi-camera recording setups. It's also giving users the ability to add remote guests to recordings.

The update brings new AI features as well. Users can use AI to draft a first cut of a recording as soon as it's finished, and the assistant can also create hooks and content for various social media platforms. The company is also adding an AI video enhancement feature, trained on conversational video podcasts, that it says can improve lighting, depth, and sharpness of recordings.

Riverside, which has raised over \$60 million in funding, joins a host of platforms that have been trying to enter alternative publishing avenues to either diversify or expand their revenue streams. For instance, Substack in March launched a built-in recording studio that competes directly with Riverside, and in April, newsletter platform Beehiiv ventured into podcasting as well. In June, social network Mastodon said that it will allow users to publish their posts as newsletters.`,
    imageUrl: '/news/podcasting-platform-riverside-enters-the-newsletter-techcr.jpeg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/podcasting-platform-riverside-enters-the-newsletter-publishing-game/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'x-now-offers-an-mcp-server-techcr',
    title: 'X now offers an MCP server to make its platform easier for AI tools to use',
    summary: 'X has launched a hosted MCP server, making it easier for developers to connect AI applications with the company’s API.',
    content: `X is making it easier for AI assistants like Claude, Cursor, Grok Build, and other MCP-compatible apps to connect directly to the platform through a new hosted MCP server.

On Monday, the Elon Musk-owned social network unveiled a hosted Model Context Protocol (MCP) server that lets AI tools communicate with the X API using a user's own account permissions.

MCP, for context, is an open standard that defines a common way for AI models to connect to external tools and services. Previously, if developers wanted an AI assistant like Claude or Cursor to access X, they would have to build their own MCP server, host it, connect to the X API, and handle the authentication. Now, X hosts the MCP, and users authenticate with their own X account's permissions.

This allows developers to save the time spent on integration work to focus on whatever it is they're actually building.

Developers have long been able to search X, read posts, look up users, analyze conversations and trends, and do more using the platform's API. The hosted MCP doesn't add new capabilities on that front; it just makes them easier to expose to AI applications. By doing so, X can position itself as an information network filled with real-time data to retrieve and analyze, rather than just a social hangout.

The move sees X joining a growing number of companies that now offer their own official MCP servers or endpoints, like GitHub, Slack, Notion, Stripe, and Salesforce.`,
    imageUrl: '/news/x-now-offers-an-mcp-server-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/x-now-offers-an-mcp-server-to-make-its-platform-easier-for-ai-tools-to-use/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'anthropics-claude-science-bets-on-workflow-techcr',
    title: 'Anthropic’s Claude Science bets on workflow, not a new model, to win over scientists',
    summary: 'Anthropic\'s Claude Science is a workbench that gives scientists one environment to do computational research, saving them from the need to bounce between databases, pipelines, and tools.',
    content: `Anthropic introduced Claude Science on Tuesday, an AI workbench that gives scientists one environment to do computational research, sparing them the hassle of bouncing between databases, pipelines, and tools.

To be clear, Anthropic says Claude Science is “not a new AI model and not a more capable model for biology. It runs the same Claude models already available to everyone today (including Claude Opus 4.8), with no special access and no gating.”

The workbench builds on Anthropic’s October 2025 launch of Claude for Life Sciences, which essentially augmented the Claude chatbot by making it better at life sciences tasks. Claude Science is a dedicated place to do that work.

The launch, announced Tuesday at an AI for Science briefing, fits into Anthropic's broader push to be more than a model provider and to further own the operating layer for specific industries, the way Claude Code has become the operating layer for software development. Anthropic is increasingly betting its growth on vertical, workflow-level products rather than just raw model capability (which could shape how it competes, and prices, against rivals).

Here's how it works: One main AI assistant acts as a kind of project manager for scientists. It connects to more than 60 scientific databases and comes with prebuilt toolkits for specific fields, like genomics, protein structure, and chemistry. That assistant can then create sub-assistants to help split up the work, like a project lead delegating tasks to specialists, or hand work off to a custom “expert” assistant that the user has built for their own research. A separate fact-checker AI then double-checks the citations and calculations before anything goes to publication.

That fact-check step matters, as more AI-assisted writing leads to fabricated citations and unverifiable stats slipping into papers. That said, it’s still the same underlying model checking itself, not an independent source of truth.`,
    imageUrl: '/news/anthropics-claude-science-bets-on-workflow-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["anthropic","claude"],
  },
  {
    slug: 'acti-puts-ai-agents-directly-into-techcr',
    title: 'Acti puts AI agents directly into your smartphone keyboard',
    summary: 'Acti is betting the smartphone keyboard is the next home for AI assistants. The startup\'s new keyboard for iOS and Android works across apps and lets users create custom AI-powered shortcuts using nat',
    content: `A new startup wants to bring AI to the software you use the most: your smartphone's keyboard.

On Tuesday, Singapore-based Acti (short for "action") launched an agentic keyboard for iOS and Android, one that doesn't just suggest your next word but can also take actions on your behalf, bringing AI tools directly into the apps you already use, including email, messaging, social media, and more.

According to Young Wang, Acti founder and CEO, this solves a problem familiar to anyone juggling multiple apps; users have to constantly switch between different apps just to get an AI's help.

"Today's AI agents are fundamentally limited because user context stays fragmented across separate apps," Wang told TechCrunch in an email interview (due to time zone differences). Acti "sits across all of them, which is why we can build a context layer that genuinely belongs to the user instead of the platform," he said. "That is the foundation the entire AI-agent era will be built on."

The launch reflects a different idea about how consumers will ultimately embrace AI. Rather than asking users to open various AI chatbots, Acti showcases how AI can be embedded into the interfaces we already use.

For instance, if a friend wanted to know where to eat nearby, Acti could drop in a local recommendation. Or if someone mentioned a stock in your conversation, Acti could be used to share the live price right there in the chat. Today, you'd have to switch to a search engine or other AI app to get this sort of information, then return to the app where the conversation occurred, which takes time.`,
    imageUrl: '/news/acti-puts-ai-agents-directly-into-techcr.png',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/acti-puts-ai-agents-directly-into-your-smartphone-keyboard/',
    date: '2026-06-30',
    category: 'regulation',
    tags: ["agent"],
  },
  {
    slug: 'anthropic-launches-claude-sonnet-5-as-techcr',
    title: 'Anthropic launches Claude Sonnet 5 as a cheaper way to run agents',
    summary: 'Anthropic’s Claude Sonnet 5 brings stronger agentic capabilities, lower pricing, and improved safety, positioning the model as a cheaper alternative to Opus, GPT-5.5, and Gemini Pro.',
    content: `As shipping agentic capabilities becomes table stakes among foundation model companies, Anthropic is releasing Claude Sonnet 5, a more powerful and agentic version of the lab's midsize model.

“It can make plans, use tools like browsers and terminals, and run autonomously at a level that, just a few months ago, required larger and more expensive models,” Anthropic said in a blog post.

That framing mirrors what OpenAI and Google have said about their own recent releases. OpenAI’s GPT-5.6 Sol was launched in preview last week, and it is also the firm’s most agentic model yet, allowing users to split work across subagents for longer autonomous tasks. Google’s Gemini 3.5 Flash, which launched in May, was pitched as a shift from a conversational chatbot to an agentic tool that plans, builds, and iterates on real work with minimal human input.

Sonnet 5’s pitch is confirmation that agentic capability is the new baseline expectation at every price tier. Now the differentiator isn’t going to be who can do agentic work best, but how cheaply they can do it and how reliably without human oversight.

Sonnet 5 promises performance close to that of Opus 4.8, but for much lower costs. Starting Tuesday, Claude Sonnet 5 will be the default model for free and Pro plans and is available for every subscription.

At launch, Sonnet 5 is priced at \$2 per million input tokens and \$10 per million output tokens through August 31, after which the price will jump to \$3 per million input tokens and \$15 per million output tokens. That makes Sonnet 5 cheaper than Opus 4.8, as well as OpenAI’s GPT-5.5 and Google's Gemini 3.1 Pro. (It’s still more expensive than Gemini 3.5 Flash.)`,
    imageUrl: '/news/anthropic-launches-claude-sonnet-5-as-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/',
    date: '2026-06-30',
    category: 'release',
    tags: ["anthropic","claude","agent"],
  },
  {
    slug: 'nvidia-competitor-etched-hits-5b-valuation-techcr',
    title: 'Nvidia competitor Etched hits $5B valuation, $1B in sales for AI chip',
    summary: 'Nvidia AI chip competitor Etched says it has already booked $1 billion under contract for the inference systems powered by its chip.',
    content: `Nvidia AI chip competitor Etched issued a progress report on Tuesday, after TSMC successfully manufactured its chip earlier this year. The startup says it has already booked \$1 billion in contract orders for its product: full systems powered by those chips.

Etched is currently in the process of testing that first product with customers. It calls these systems "frontier inference clusters," bundles that include the chips along with custom-designed racks and software, all built to help frontier models run inference faster, more cheaply, and with better power efficiency than rivals, Etched claims. (Inference is what happens after a user submits a prompt — it's currently the biggest bottleneck, and the biggest cost center for AI companies trying to serve customers at scale, which is exactly why investors are paying attention to anyone promising to solve it.)

Etched, founded in 2022, also revealed that it has now raised a total of \$800 million to date. The most recent tranche was an unannounced \$500 million round closed in December at a \$5 billion post-money valuation, the company said.

The startup has attracted a notable group of investors, too, including VentureTech Alliance, Jane Street, Hudson River Trading, Two Sigma, Ribbit Capital, and Stripes, who led the \$500 million round. It has also secured angel investment from AI heavyweights including Andrej Karpathy, Geoffrey Hinton, Fei-Fei Li, Arthur Mensch, and Scott Wu. The cap table also includes billionaires Stanley Druckenmiller and Peter Thiel.

Although the startup's press release frames Tuesday's announcement as Etched "coming out of stealth," co-founders — CEO Gavin Uberti (pictured above) and president Robert Wachen — have actually been talking to TechCrunch about their chip plans since 2024. Both dropped out of Harvard and became Thiel fellows to found Etched, as Uberti told TechCrunch at the time.

By 2024, Etched was already on investors' radar, having raised more than \$125 million. But on Patrick O'Shaughnessy's "Invest Like the Best" podcast, the founders said that back in 2023, they struggled to get investors interested — even with a 30-page memo arguing that AI would eventually need specialized chips, not just general-purpose GPUs. Every major investor they pitched passed. The company was reportedly operating month-to-month, close to running out of cash, in those early days.`,
    imageUrl: '/news/nvidia-competitor-etched-hits-5b-valuation-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/',
    date: '2026-06-30',
    category: 'funding',
    tags: ["ai"],
  },
  {
    slug: 'google-introduces-a-faster-cheaper-image-techcr',
    title: 'Google introduces a faster, cheaper image generator with Nano Banana 2 Lite',
    summary: 'Google is updating its image generator to make it faster and cheaper, making it a more useful tool for creators looking to make AI content.',
    content: `Google on Tuesday released Nano Banana 2 Lite, the newest version of its in-house AI video and image generator. This version is significantly faster and more affordable than its previous release, the company claims.

The model has much lower latency and can produce images in four seconds, which makes it a good option if you need to workshop images and produce a large number of them in quick succession, Google says. It costs \$0.034 per 1,000 images, which makes it quite affordable for people looking to draft and perfect their content at scale.

The release follows last summer's launch of the original Nano Banana, powered by Gemini 3.1 Flash, and the February release of Nano Banana 2. The latter introduced new powers for the generator, including the ability to create more realistic images. The company also offers Nano Banana Pro, which is described as a more powerful (and more expensive) model for advanced use cases.

While Nano Banana 2 is referred to as a "generalist workhorse," Banana 2 Lite is optimized for high-volume workflows that need to occur at a rapid pace, Google claims.

Despite consumer backlash over so-called AI slop created by image models, companies continue to invest heavily in AI tools that can generate imagery and videos. However, Google often markets its models as convenient tools that can assist with the creation of advertisements.

That said, the ties between Hollywood and AI companies continue to tighten — much to the consternation of some creative communities and audiences. Indeed, Google just struck a \$75 million deal with the much-beloved indie studio A24 — a partnership that has suffered significant criticism from fans.`,
    imageUrl: '/news/google-introduces-a-faster-cheaper-image-techcr.png',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/google-introduces-a-faster-cheaper-image-generator-with-nano-banana-2-lite/',
    date: '2026-06-30',
    category: 'regulation',
    tags: ["google","image"],
  },
  {
    slug: 'the-deepmind-trio-who-built-a-techcr',
    title: 'The DeepMind trio who built a poker AI are now making money for quant hedge funds',
    summary: 'EquiLibre Technologies, a Prague-based AI lab founded by three ex-DeepMind researchers, is now valued at more than $500 million.',
    content: `Three former DeepMind researchers who created an AI that beat humans at poker have now applied the same technology to trading stocks — and the bet appears to be paying off. Their Prague-based AI lab, EquiLibre Technologies, is now valued at \$500 million after raising an undisclosed-sum Series A, TechCrunch learned.

The round was led by Creandum, and, although the VC also declined to disclose the size of the round, vice president Cameron Sellers confirmed that it was the largest single investment the firm "has ever made in one go into a company," he told TechCrunch.The common denominator between poker and Wall Street is that they are well suited for reinforcement learning, an AI training technique where self-learning models are incentivized by rewards. According to Martin Schmid, EquiLibre CEO, “The nice thing about trading and markets is that the scoring is super simple: how much money did the agent make?”

This isn’t just game money. In partnership with quant firm Tower Research Capital, EquiLibre’s algorithms have been trading billions in daily volume across the S&P 500 and Nasdaq. The startup claims its agents have been doing well since their rollout on crypto markets in 2025, and now on stock exchanges, with “a perfect record of zero negative months since inception," meaning they have finished each month with their investments up overall.

By applying its AI to quant hedge funds, the startup is in a field where automation is commonplace and, if successful, improvements can quickly turn into cash. That made the startup appealing to Creandum, Sellers said.“The potential total addressable market of trading in the financial markets is one of the biggest on earth, and there are countless funds over the years that have generated quantums of profit that make most venture-backed successes look small,” Sellers said. But he noted that EquiLibre explicitly defines itself as “a lab first, not a finance firm.”Schmid and his two founders — CTO Rudolf Kadlec and CSO Matej Moravcik — don’t have a background in finance, and it is not what drives them, he told TechCrunch. “I'm not doing this because I'm excited about making markets efficient. I’m doing this because we are all excited about building new things that have never been built before, and this is a lot of fun to build,” Schmid said.`,
    imageUrl: '/news/the-deepmind-trio-who-built-a-techcr.jpeg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/the-deepmind-trio-who-built-a-poker-ai-are-now-making-money-for-quant-hedge-funds/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'openclaw-is-finally-available-on-android-techcr',
    title: 'OpenClaw is finally available on Android and iOS',
    summary: 'The free open source agentic program is finally invading your phone.',
    content: `The automation crustacean is crawling to a mobile device near you.

By that I mean, OpenClaw — the free, open source AI agent that captivated the internet earlier this year — is finally available as an app on iOS and Android. OpenClaw announced the news on X on Tuesday.

On both platforms, you can pair your phone with the OpenClaw Gateway, a kind of routing layer that connects your requests to AI agents and the tools and skills those agents draw on to get things done.

The takeaway is that you'll be able to run your OpenClaw agents from your pocket and, if you've programmed them correctly, they may be pretty helpful at getting things done. OpenClaw users have put it to work in everything from coding to meal planning, although some have reported less-than-desirable results.

OpenClaw went viral earlier this year around the launch of MoltBook, a social media site purportedly populated entirely by agents. In February, OpenClaw's creator, Peter Steinberger, announced that he had joined OpenAI.

The MoltBook spectacle was later revealed to have been partially the work of humans impersonating agents, according to researchers, effective theater that doubled as marketing for OpenClaw (whatever its credibility cost). Still, the stunt pointed toward the agentic future, which has since kept expanding. Agents are now embedded across the AI landscape and are showing up in more places by the day, including your phone.`,
    imageUrl: '/news/openclaw-is-finally-available-on-android-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/30/openclaw-is-finally-available-on-android-and-ios/',
    date: '2026-06-30',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'south-korean-tech-giants-commit-over-techcr',
    title: 'South Korean tech giants commit over $550B to ease \'RAMageddon\'',
    summary: 'The world\'s two largest memory chip companies vow to build more memory lab fabs as South Korea positions itself as an AI tech powerhouse country.',
    content: `The world's two largest memory chip companies plan to invest \$518 billion (~800 trillion won) to build four new memory fabs in southwestern South Korea, a region that has historically attracted little semiconductor investment.

The announcement is part of the country’s sweeping national investment plan spanning semiconductors, AI data centers, and physical AI, which was unveiled at a presidential briefing on Monday, with the chairmen of Samsung and SK Hynix in attendance. The plan breaks down into three buckets. In the memory chip bucket is \$518 billion for four new memory fabs in the southwest, plus \$52 billion for an HBM (high bandwidth memory) packaging hub in the central region. Then there's another \$356 billion (550 trillion won) for AI data centers to be built by Korean tech and energy behemoths such as SK, GS, and Naver through 2035.

All told, South Korean tech companies have committed to spend over \$900 billion on AI and the demands for chips it is creating. With this, the nation hopes to catapult itself into becoming more of an AI power player than it already is. Currently, Samsung and SK Hynix (along with U.S. memory chip maker Micron) are all enjoying record demand from what's been called RAMageddon, a worldwide shortage of memory chips caused by the AI buildout.

"Semiconductors, physical AI, and AI data centers are the triple axis for South Korea's next industrial era," President Jae Myung Lee said in a televised address Monday, calling 2026 the year South Korea must establish itself as an "irreplaceable" industrial power.

Lee said existing chip facilities in Yongin and Pyeongtaek, the heart of South Korea's semiconductor belt just south of Seoul, have "already reached their limits," and urged companies to accelerate investment in the southwest, hoping to spread the AI wealth beyond the nation's capital. "We must secure overwhelming production capacity in advance," he said.

Yet, Lee pushed back against media reports that the government had pressured companies into the investments, reportedly saying the decisions reflected the companies' own judgment. "The government's role is to invest its capabilities so that companies can invest without losses and with better prospects," he was quoted as saying.`,
    imageUrl: '/news/south-korean-tech-giants-commit-over-techcr.jpg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/29/south-korean-tech-giants-commit-over-550b-to-ease-ramageddon/',
    date: '2026-06-29',
    category: 'industry',
    tags: ["ai"],
  },
  {
    slug: 'anthropic-and-gov-newsom-forge-deal-techcr',
    title: 'Anthropic and Gov. Newsom forge deal allowing California government to use Claude at half price',
    summary: 'As Anthropic forges a closer relationship with the state of California, the federal government has made an enemy out of the OpenAI rival.',
    content: `Governor Gavin Newsom (D-CA) and Anthropic have made a deal that allows California government agencies to use Claude at a discounted price. This agreement comes at a time when businesses are struggling to manage the hefty costs of enterprise subscriptions to AI tools.

Under the deal, all state agencies and local governments will have access to Claude, Anthropic's AI chatbot, as well as training and support from Anthropic. A press release from the Governor's office says that Claude will help state employees draft documents and analyze information.

"AI should not replace the human work of government; it should help our workers move faster, solve problems more effectively, and deliver better results for Californians," Governor Newsom said in a statement.

This deal follows Newsom's March executive order that intends to accelerate the use of AI "to make government more efficient" while also maintaining stronger safety standards.

"While others in Washington are designing policy and creating contracts in the shadow of misuse, we’re focused on doing this the right way," Newsom said at the time.

As Anthropic forges a closer relationship with the state of California, the federal government has made an enemy out of the OpenAI rival. Earlier this year, Anthropic and the U.S. Department of Defense clashed over a contract that would give the government agency permission to deploy Claude for any lawful use. Anthropic sought to explicitly carve out protections that prevent the government from using its technology to surveil Americans or deploy autonomous weapons without human oversight. But Defense Secretary Pete Hegseth refused, and the agency signed a deal with OpenAI instead. The government went as far as to declare Anthropic a "supply-chain risk," preventing the company from working with any other Pentagon contractors.`,
    imageUrl: '/news/anthropic-and-gov-newsom-forge-deal-techcr.jpeg',
    source: 'TechCrunch AI',
    sourceUrl: 'https://techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price/',
    date: '2026-06-29',
    category: 'industry',
    tags: ["anthropic","claude"],
  },
  {
    slug: 'geminis-personalized-ai-image-generation-is-techcr',
    title: 'Gemini\'s personalized AI image generation is now free for US users',
    summary: 'Google is expanding Gemini’s personalized AI image generation to eligible free users in the U.S., allowing the chatbot to create images based on your interests and data from connected Google apps.',
    content: `Google announced on Monday that the Gemini app is now offering its personalized Nano Banana-powered image generation feature to a broader audience. Starting today, all eligible users in the U.S. can access the feature for free, a service that was previously only available to Plus, Pro, and Ultra subscribers.

Google initially announced that Gemini’s Personal Intelligence feature would get Nano Banana-powered image generation back in April, allowing users to create images that reflect their unique interests. This means that images can be generated based on Gemini’s understanding of your likes and preferences without you having to specify them in your prompt. Gemini utilizes data from your Google account connections — such as Gmail, Google Photos, YouTube, and Search — to achieve this.

For example, instead of saying, “Create an illustration of me and my favorite things, such as coffee and baking,” you can simply request, “Create an illustration of me and my favorite things.”

Gemini can also pull actual images of you from Google Photos, so you don’t need to manually upload photos.

Google initially rolled out the Personal Intelligence feature earlier this year, making it widely available to all U.S. users in March. The company recently expanded this functionality to users in India and Japan.

Personal Intelligence is an opt-in feature, allowing you to decide which apps Gemini can access. Once enabled, it is set as the default for every prompt, but you can disable it using a new toggle in the Tools menu.`,
    imageUrl: '/news/geminis-personalized-ai-image-generation-is-techcr.jpg',
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
