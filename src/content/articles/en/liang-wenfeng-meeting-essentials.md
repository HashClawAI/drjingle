---
title: "Inside Liang Wenfeng’s Investor Meeting: Seven Bets That Define DeepSeek"
description: "A focused reading of DeepSeek’s reported AGI roadmap, continual learning bet, open-model economics, compute constraints, domestic chips, team stability, and commercial floor."
pubDate: 2026-07-23
category: insights
tags: ["Liang Wenfeng", "DeepSeek", "AGI", "Continual Learning", "Open-Source AI", "AI Compute"]
articleSlug: "liang-wenfeng-meeting-essentials"
locale: en
draft: false
---

An investor meeting lasting almost four hours can contain a great deal: technical roadmaps, products, revenue, GPUs, Huawei, organizational design, even whether a company should work overtime.

One question connects almost everything in this account:

**Which choices most increase DeepSeek’s probability of reaching artificial general intelligence (AGI)?**

![Essentials from Liang Wenfeng’s investor meeting: open source, continual learning, compute, team stability, and embodied intelligence form DeepSeek’s roadmap](/images/articles/liang-wenfeng-meeting-essentials/cover.png)

According to a [transcript hosted by drjingle.com](https://drjingle.com/files/liang-wenfeng-investor-meeting-transcript.pdf), DeepSeek is not indifferent to consumer traffic, enterprise revenue, or products. It simply ranks them below AGI. Open releases, low prices, focus, and research autonomy are not four separate policies; they are parts of the same long-term wager.

The evidence boundary matters. The 42-page file says it was automatically transcribed and AI-edited from roughly three hours and 44 minutes of audio. It does not identify speakers, and some numbers, model names, and proper nouns may be wrong. It is not an official DeepSeek announcement. The article below is a thematic synthesis, not a verbatim record; statements about revenue, chip quantities, and timelines should not be treated as formal company guidance.

## Bet one: AGI is the destination; today’s businesses are outputs along the road

Liang repeatedly distinguishes the objective from its by-products.

DeepSeek’s objective is AGI. Consumer chat, enterprise APIs, and future agent services are capabilities that naturally emerge as the models advance. Once a useful capability exists, it can serve users and generate revenue. But the company need not stop the main research program to maximize one intermediate output.

The transcript uses a memorable metaphor: there may be a watermelon farther ahead, while the visible prizes are sesame seeds.

Those “sesame seeds” can be large. Consumer daily active users, enterprise revenue, and even the foundation of a listed company represent real money. Liang’s reported judgment is that if AGI’s eventual economic space is vast enough, DeepSeek should not reshape itself into the next ByteDance or Tencent merely to capture one current distribution channel.

That explains why DeepSeek can maintain a consumer product and serve businesses without treating the super-app race, a large sales organization, or vertical industry control as its highest priority. The technical program keeps moving; commercialization happens along the way.

## Bet two: agents are not the destination; continual learning is the next gate

The meeting’s most important technical idea describes AI progress as a staircase.

Language models form the base. Chain-of-thought reasoning lets the model work through a problem before answering. Agents add tools and longer-horizon execution. After agents, the binding constraint becomes continual learning.

With complete context, current models can outperform people on difficult tasks. But a human employee spends weeks or months learning colleagues, processes, history, and habits that no manual records. AI usually lacks that accumulation. If every assignment requires a fresh explanation of who “Xiao Wang” is and why the plan changed last time, the model cannot truly become part of an organization.

Continual learning is not simply an infinitely long chat history. A model must absorb experience from ongoing work without forgetting previous skills or being corrupted by accidental and malicious feedback. This remains an unsolved global research problem, and the meeting does not claim that DeepSeek has solved it.

Liang places it at the center of the next generation because continual learning could create a feedback loop: AI helps researchers build the next AI; the stronger system then contributes more effectively to further research. AGI may therefore arrive not as a light switching on one morning, but as a curve that gradually steepens.

## Bet three: coding agents come first because AI should help build AI

Among finance, legal, medical, and general agents, the near-term priority in the transcript is clear: build a strong coding agent first.

The reason goes beyond willingness to pay. Code is the most direct interface through which AI can participate in AI research. A model that understands a codebase, edits programs, runs experiments, and tracks failures can first improve DeepSeek’s own productivity.

That creates a product standard unlike the one used by a conventional software company. The next model should first become useful to DeepSeek itself, before optimizing entirely for broad marketability. Once a model helps the team build its successor faster, it is both a product and a means of production.

DeepSeek will pursue multimodality, but treats it as a component. Video generation, 3D, and the currently broad category of “world models” are not presented as the immediate path to a higher ceiling of intelligence. Hallucinations need improvement as well, but the transcript places them closer to post-training and product experience than to the central research bottleneck.

The prioritization may turn out to be wrong, but it is legible: popularity or attractive margins do not automatically place a technology on the AGI roadmap.

## Bet four: open models and low prices do not mean abandoning business

DeepSeek’s argument for open source has two layers.

The first is mission. AI may matter too much for any company to own it all. Attempting to retain an excessive share of the value would invite challengers, regulation, and social resistance. Sharing model capability is a practical expression of the company’s language of goodwill and restraint.

The second layer is competitive. Even with open weights, another provider must solve deployment, kernels, clusters, latency, and cost. Publishing an engine design does not instantly create a low-cost airline. DeepSeek does not want its only moat to be secrecy; it wants to produce comparable capability faster and more cheaply.

The transcript describes a pricing benchmark of roughly ten months to recover equipment cost. The figure is not confirmed formal disclosure and should not be hard-coded into a financial model. Its significance lies in the philosophy: seek a reasonable return that covers risk and continued research, rather than the highest price users will tolerate.

Liang offers a severe competitive principle: the player that wants to take more may be defeated by one willing to take less. Openness and low prices are therefore not only moral gestures. They also compress the profit pool available to a future challenger.

## Bet five: China’s principal AI constraint is experimental compute

On the gap between China and the American frontier, the transcript concentrates on one word: resources.

It does not argue that China lacks sufficiently capable people. The decisive difference is how many accelerators a research team can use, how many experiments it can run, and how large a model it can train. Less compute restricts model scale; fewer experiments also slow the development of researchers. Part of the apparent talent gap may itself be a compute gap.

DeepSeek does not reject scaling because resources are limited. Liang reportedly says the company wants to buy as much compute as possible at reasonable prices, build its own clusters, and train larger models. Current model sizes reflect budgets and chip supply more than a belief that the present scale is sufficient.

When brute-force parity is unavailable, efficiency becomes another route to catch up. Producing similar capability with less computation can narrow the time gap and support more experiments on the same hardware. DeepSeek’s low cost therefore matters not only to the API bill; it also affects research velocity.

## Bet six: the domestic-chip problem may move from software to supply

The transcript is optimistic about Chinese AI accelerators, with one hard qualification.

Historically, NVIDIA’s advantage has included not only chip performance but also CUDA and its software ecosystem. Liang argues that higher-level languages, compilers, and AI-assisted programming are lowering the cost of rebuilding that ecosystem. The meeting mentions TileLang as an effort to describe computation at a higher level and adapt it across hardware, rather than binding the entire stack to one accelerator vendor.

If that approach works, the problem of domestic chips being difficult to use could recede. Manufacturing capacity would remain the tougher constraint: whether enough chips can be produced and assembled into large clusters at acceptable power and total cost.

The transcript includes sensitive figures for Huawei accelerators, performance ratios, and generational gaps. Those details are particularly vulnerable to transcription errors and should not be treated as confirmed facts. Two conclusions can be extracted more carefully:

- DeepSeek is willing to participate deeply in software adaptation for Chinese compute.
- In the near term, domestic supply still appears insufficient for the largest frontier training runs.

DeepSeek intends to build clusters, but does not appear eager to design its own chips. Liang’s analogy is that operating a power plant does not require manufacturing the generator. If chips can be bought at reasonable prices, the company would rather concentrate on the layer where it believes it is strongest.

## Bet seven: the irreplaceable asset is the team

Among all commercial interests, Liang identifies one on which DeepSeek cannot compromise: team stability.

The reasoning is straightforward. A failed training run may cost months. Late hardware may delay a roadmap. When core researchers leave, they take shared knowledge that never appeared in papers, code, or process documents. If the key team remains intact, time and resource gaps can still be repaired.

That also explains DeepSeek’s organizational experiment. The transcript describes two parallel modes: formal releases are coordinated from the top down, while researchers retain substantial time for self-directed exploration. KPIs and overtime are not treated as the primary source of research productivity because unknown problems require slack, curiosity, and accidental discovery.

The structure cannot remain unchanged forever. Liang acknowledges that a growing company needs clearer departments, hierarchy, and accountability in some functions. The challenge is to make engineering and operations orderly without turning frontier research into quarterly homework.

Vision travels through tacit understanding in a small team. In a large company it must survive institutionalization. Whether DeepSeek can expand without losing its research culture may matter more than recruiting any single star.

## When a new generation of Chinese AI founders stops studying where the fish head points

After this nearly four-hour transcript began circulating, the most revealing feature may not have been any single technical forecast. It was the manner of speaking attributed to Liang Wenfeng.

There is little of the grand narrative associated with an earlier generation of internet founders, and relatively little management jargon. The reported propositions are plain choices: products are outputs on the road to AGI; restraint can be a strategy; the company needs only a reasonable profit; team stability matters more than capturing every market; and the preferred story is ordinary people accomplishing something unusual rather than a mythology of geniuses.

Because the source is an automated transcript, these lines are better treated as compressed statements of the meeting’s ideas than as formally verified quotations. Together, however, they convey strong conviction. What the company will pursue—and what it will decline—does not appear to require an elaborate managerial vocabulary for validation.

A decade ago, Chinese internet founders spoke constantly about business models, growth, KPIs, public listings, and organizational management. Business dinners supplied a durable joke: when a whole fish arrives at the table, should its head point toward the boss or the client? The joke is about etiquette, but it also captures a world intensely attentive to hierarchy, relationships, and organizational signals.

Many founders built extensive philosophies of management, culture, and organizational method. A new generation of AI companies cannot actually escape management. DeepSeek itself acknowledges that growth will require departments, hierarchy, and clearer accountability. Yet the meeting suggests a shift in emphasis:

**Management is no longer presented as the founder’s principal intellectual creation. Technical judgment is.**

For a research company such as DeepSeek, the organizational problem is reduced to a few practical aims: keep the people who truly understand the problem, give them room to explore, and coordinate when a model must ship. Where the fish head points has not become meaningless. It simply does not deserve the founder’s best attention when the team is chasing AGI and compute is permanently scarce.

This may represent a generational change in Chinese technology entrepreneurship. The previous internet generation made organizational capability a competitive moat; the new AI generation is attempting to return organization to the status of a tool. Whether that remains possible is unknown. When a team grows from hundreds to thousands, the fish head may quietly swim back.

## What the meeting actually gives an investor

The transcript’s most useful content is not an ARR forecast or an accelerator count. Those figures are both sensitive and vulnerable to transcription error.

What it provides is a roadmap that can be tested over time:

- Technically, move from agents to continual learning, let AI accelerate AI, and eventually pursue embodied intelligence.
- Commercially, use API and consumer services for cash flow without allowing current revenue to redirect research.
- Competitively, build adoption through open models, low prices, and efficiency rather than secrecy alone.
- Operationally, acknowledge the compute gap, buy hardware where possible, and reduce dependence through software efficiency and domestic adaptation.
- Organizationally, rank team stability above traffic, profit, and the breadth of the product empire.

In the optimistic case, these lines reinforce one another: better technology attracts users; users create cash flow; cash buys compute; an open ecosystem attracts talent; talent advances AGI.

The pessimistic case is equally clear: continual learning remains unsolved, APIs commoditize, the compute gap widens, the organization loses effectiveness as it grows, and “restraint” becomes another name for missing the market.

DeepSeek should therefore be judged neither by whether it collects every visible sesame seed nor by how vividly it describes a distant watermelon. A better test is whether each model release, pricing decision, product expansion, and organizational change still follows the same map.

A company’s vision is not ultimately where it says it is going.

It is where the company still refuses to go when the opportunity suddenly appears.

*This article is a thematic synthesis and analysis of a publicly hosted transcript. It does not represent the formal position of Liang Wenfeng or DeepSeek and is not investment advice. Financial data, chip quantities, product timelines, and technical forecasts should be checked against verifiable primary sources and formal company disclosures.*
