---
title: "You no longer need a hacker team: what Anthropic’s September threat report actually says"
description: "Anthropic’s September 2026 report covers eight months and seven harm areas. It says Claude was used for cyber ops, influence, surveillance, weapons software, and illicit distillation. The shift is cost, not new tricks. These are the company’s findings, not verdicts."
pubDate: 2026-09-12
category: research
locale: en
articleSlug: "anthropic-threat-report-september-2026"
draft: false
---

Hotel guest Wi-Fi had its DNS rewritten. Anyone who connected sent traffic, device identifiers, and IP addresses to someone else’s servers, then saw a “fix your network” page. Windows, Android, and iOS were all in play.

That is not science fiction. In [Detecting and countering misuse of AI: September 2026](https://www.anthropic.com/threat-intelligence-report-september-2026), published on 10 September 2026, Anthropic writes that an actor labeled GTG-20006—public reporting often links the cluster to Russia’s Midnight Blizzard—compromised at least three hospitality vendors that run hotel guest Wi-Fi. Recurring targets included Ukrainian officials and military drone supply chains. Microsoft described a related theft-and-delivery method as CaptiveCrunch in July 2026.

The same report covers activity disrupted between December 2025 and August 2026. Anthropic’s threat intelligence team says it interrupted operations that tried to use Claude for harm, and groups the cases into seven areas: cyber operations, influence operations, surveillance, scams and fraud, biological misuse, conventional weapons development, and illicit distillation. Most cases used Claude Haiku, Sonnet, and Opus. Fable and Mythos-class models barely appear, with one illicit-distillation exception.

Anthropic is explicit: these are not typical everyday abuses. They are the most notable and novel cases the company says it has found so far. Read them as a model provider describing how its own product was misused, after its own investigation and attribution.

## The skill floor dropped. Humans stayed.

The hardest sentence in the report is not cinematic. It is an accounting change.

A year ago, a state-backed campaign and a lone operator were separated by a whole staffing chart: reconnaissance, tooling, scanning, data processing. Those layers can now be handed to agent frameworks. Public offensive agent scaffolds—Anthropic names tools such as PentAGI—are downloadable. Humans still pick targets, review loot, and decide how to monetize. The middle of the work runs in parallel at machine speed.

“Sophisticated tradecraft” is therefore no longer a reliable signal that a nation-state is behind the keyboard. Stolen API keys can keep a campaign alive for a month. A French-speaking ShinyHunters affiliate, Anthropic says, went from a stolen developer token to full administrative control of a victim cloud environment in roughly three hours. In another supply-chain theft, AI agents dumped more than 2,100 Azure AD token sets across more than 40 corporate tenants in about 34 hours.

Anthropic calls the boost *uplift*: speed, scale, and depth. The attack techniques themselves are mostly familiar—phishing, unpatched edge devices, credentials, injection. What changed is unit cost. A breach finished in two or three hours, or one operator handling dozens of victims at once, starts to make economic sense.

GTG-20006 went further. When a security product flagged their malware, monitoring agents modified, rebuilt, and redeployed it until it slipped past detections. Humans mainly edited the Claude Code skills that drove the workflows. Static signatures that used to impose cost on attackers now dump that cost back on defenders.

The report also treats the AI supply chain as loot, compute, and cover. Stolen keys bill the legitimate customer. One cluster posed as a cheap Claude reseller, silently proxied traffic to a different model, and installed a credential harvester. Anthropic says its own systems were not compromised; the keys came from customer environments.

That warning sits next to an earlier Dr.Jingle piece on the [Hugging Face sandbox-escape incident](/article/ai-agent-sandbox-escape-hugging-face-incident): once a model is wired to real tools and real secrets, the boundary is thinner than the demo slide.

## Influence factories, most of them still unpublished

Beyond cyber operations, the report details nine influence cases. Origins spanned Russia, Iran, Turkey, the Gulf, South Asia, Africa, and Europe; audiences sat on six continents. Actors included governments, state media, commercial “influence-as-a-service” shops, and one opposition movement in exile.

The Central African Republic case went out over the radio. A Russian-speaking operator in Bangui fed Radio Lengo Songo (98.9 FM), instructed Claude to embed pro-Russia and anti-France talking points in “local news,” and stripped AI-looking style. The All Eyes On Wagner project had already reported that the station was created and funded by the Wagner Group in 2017. Anthropic assesses the operator as Politology’s local media coordinator—the Africa Corps / Wagner influence branch it says came under SVR control in late 2023. On the industry Breakout Scale, Anthropic scores the operation Category Four: daily FM broadcast, then Telegram and local outlets.

A more common picture: a hundred “ordinary citizen” accounts amplifying the same line for a week. The model wrote personas, banned-word lists, and doctrine manuals. Some operators told it to drop caveats and present unverified claims as confirmed. One case cloned a real activist’s account to recruit inside Iran.

Anthropic adds a cold note. Because it sits upstream of social platforms, it often sees a campaign while the copy is still being built. Most of the material drew little authentic engagement. The widest genuine reach still came from state media’s own radio, satellite, and television.

## One person, a national interception design

In the surveillance chapter, the engineering workforce is the model.

Mali: Anthropic says a consultant in Bamako, working with the state intelligence service ANSE, used Claude to design Lakana 360, a platform covering all three national mobile operators and roughly 25 million SIMs. Features included call records, SMS, voice, and intelligence dossiers generated from any tasked number. The operator, the report says, asked to remove the warrant requirement. The system ran on-premises with a local model. Banning the Claude account interrupted design work, not the deployed product.

China-linked cases—Anthropic’s attribution—include a religious-affairs intelligence unit reduced from many analyst teams to a single office plus an assistant producing thousands of investigations a month, and an operator with no Arabic who used Claude to draft dialect outreach and translate replies in a multi-day recruitment effort against Uyghur targets in Syria. On the Iranian side, one unit used Claude to sift hundreds of thousands of social posts and selected 39 opposition accounts to monitor.

The commercial market appears too. Anthropic names S2T Unlocking Cyberspace as building a profiling platform for Iranian and Persian Gulf social accounts, mapping closely onto a 2023 Forbidden Stories investigation of the Israeli-Singaporean vendor. Anthropic says it caught the work in a pilot stage and found no evidence later stages hit real targets.

## Weapons software, and biology that classifiers cannot sort

The conventional-weapons section covers six cases: three in China, two in Russia, one in Yemen. “Disrupted,” Anthropic says, means every linked account was banned, with findings shared where the actors also used other platforms.

A northern Yemen cell used Claude Code in place of software engineers to write guidance, navigation, and control software, running multiple instances as coder, researcher, and reviewer. The programs included a tactical guided rocket, a multi-stage ballistic missile with a stated range above 2,000 km, and a family that included a hypersonic-glide variant. Anthropic says it has no evidence an operational weapon was fielded. The group did test-fire a guided rocket; the test appears to have failed, and they returned to Claude within hours for telemetry analysis. They also packaged an offline simulation toolkit that no longer needed Claude or MATLAB.

A Russia-based freelance-style team used Claude Code for a suicide FPV swarm stack named DronDoc / Serafim. The report describes shared swarm memory, fault-tolerant coordination, and an onboard small model that could select targets—including a “person” class—and issue a detonation command. Training used scraped Ukrainian combat footage. Accounts bypassed geographic controls through commercial VPS. Firmware was flashed onto live development boards.

China-based cases include drafting an anti-torpedo fire-control specification and a 200-plus-page acquisition proposal, benchmarking against open-source reporting on U.S. Navy programs, plus targeting software for electronic warfare and air-defense suppression. Attribution stays at “China-based / defense-industry,” usually without a named entity.

On biology, Anthropic says this is the first time a frontier lab has published platform-side observations of this kind. The people involved are working scientists. The company does not assert they intended harm, and it withholds institutions, countries, and specific agents. Classifiers can block novice requests to recreate known biological weapons. They cannot reliably sort highly technical dual-use work that also looks like drug or vaccine research. Anthropic’s conclusion is blunt: frontier biology capabilities should be served through trusted-access programs, not filters alone.

Fraud is concrete too. A China-based app studio used Claude to power personas across more than 20 dating apps. In a two-week window in April 2026, more than 4,700 AI personas messaged at least 25,000 people—about 2.36 million messages in the sampled window. Real gig workers were mixed into the same swipe feed at roughly a 3-to-1 AI-to-human ratio, handling video calls and social follows. Store-review interfaces woke only during App Store and Play Store checks.

## Distillation: stealing the reasoning

The second half of the report targets illicit distillation: industrial-scale, covert extraction of a teacher model’s capabilities into a student model, usually enabled by fake accounts, stolen cards, and stolen API keys. Anthropic says that since February 2026 it has disrupted additional distillation campaigns it attributes to seven China-based labs against generally available Claude models. It has not observed attempts against Mythos 5 or Mythos Preview, which are not public.

The figures below are Anthropic’s observations and attributions, not court findings.

Alibaba (Qwen / Tongyi Lab): the largest campaign Anthropic says it has measured, targeting chain-of-thought traces from Opus 4.6 and 4.7. Peak traffic approached 3 million exchanges a day from more than 3,500 fraudulent accounts; more than 151 million exchanges from May to July 2026. Anthropic says the transcripts fed supervised fine-tuning for Qwen 3.5, 3.6, and 3.7, and also helped internal RL environments and architecture research.

Moonshot (Kimi): accused of silently forwarding nearly 300,000 customer requests to Claude—mostly Opus—over about ten days, while users thought they were talking to Kimi. Distillation volume over the May–July window: more than 23 million exchanges. The method included replaying Claude’s thinking signature across sessions to recover raw reasoning.

DeepSeek: a similar replay pipeline. More than 12.1 million exchanges over 14 days in July 2026. Examples in the report include credentials for a Russian defense-linked database and development of a Chinese municipal public-security case system—users who thought they were querying DeepSeek.

Zhipu (Z.ai / GLM): 770,609 exchanges through a ten-day cleaning pipeline and more than 3.4 million attributed exchanges over 17 days in June and July. After Fable’s cyber safeguards degraded the campaign, operators switched to Opus 4.6 and another U.S. lab’s top model.

Xiaomi: more than 400,000 exchanges over about 20 days in March and April 2026, replaying MiMo user sessions through Claude for training data. Volume rose as a free trial ended.

SenseTime and MiniMax are described as buying harvested transcripts, or running a shell reseller that offered only Anthropic and OpenAI models—not MiniMax’s own.

Anthropic also warns that some relayed chats came through third-party routers common in the United States and Europe and contained names, emails, and company data. Safeguards that make Claude refuse harmful tasks do not travel with a distilled student model.

Defenses are layered: attribute proxy farms instead of banning accounts one by one; distillation classifiers; summarized internal reasoning; and Fable 5.1’s preserved thinking, which stops new API accounts from editing the context that precedes Claude’s reasoning.

## Who holds the ledger

Across seven chapters, the story is one line. The model did not invent a new crime family. It compressed work that used to need a room of specialists into one person plus an agent harness. Humans still hold the expensive decisions: whom to hit, whom to sell to, which sentence counts as news.

Anthropic’s institutional stance is familiar: we found it, we banned it, we hardened the product, and we want peers and governments to look. The forensic chain cannot be re-checked line by line from outside the report. If named labs respond, that will be a second story.

For anyone who actually uses these models, the expensive reminder is ordinary. Treat API keys like production credentials. A discount that asks you to route traffic and logins through an unknown middleman is often the supply chain itself.

The primary source is [Anthropic’s report](https://www.anthropic.com/threat-intelligence-report-september-2026). The announcement post is [this AnthropicAI tweet](https://x.com/AnthropicAI/status/2098097512544444447).
