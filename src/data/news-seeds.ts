// ============================================================
//  news-seeds.ts —— 手工精选新闻
//  这些条目会被 fetch-news.mjs 优先写入 news.ts 且不会被自动覆盖
//  字段说明：
//    - slug: 唯一标识
//    - content: 已改写后的英文正文（脚本不会再抓这一项）
//    - imageUrl: 本地路径 /news/<slug>.<ext>（脚本不会重新下载）
// ============================================================

import type { NewsItem } from './news';

export const newsSeeds: NewsItem[] = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
];
