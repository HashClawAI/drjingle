---
title: "Inside Liang Wenfeng’s Investor Meeting: What DeepSeek Is Actually Betting On"
description: "A close read of the hosted investor-meeting transcript: AGI first, continual learning after agents, open models, compute, and why team stability comes before traffic."
pubDate: 2026-07-23
category: insights
tags: ["Liang Wenfeng", "DeepSeek", "AGI", "Continual Learning", "Open-Source AI", "AI Compute"]
articleSlug: "liang-wenfeng-meeting-essentials"
locale: en
draft: false
---

“There may be a watermelon farther ahead; what you see now might all be sesame seeds.”

An investor meeting that runs almost four hours can cover products, revenue, GPUs, Huawei, overtime rules, and a dozen other topics. In this account, one question keeps resurfacing: **which choices most increase DeepSeek’s chance of reaching artificial general intelligence (AGI)?**

![Essentials from Liang Wenfeng’s investor meeting: open source, continual learning, compute, team stability, and embodied intelligence form DeepSeek’s roadmap](/images/articles/liang-wenfeng-meeting-essentials/cover.png)

This piece follows a [transcript hosted on drjingle.com](https://drjingle.com/files/liang-wenfeng-investor-meeting-transcript.pdf). The file runs about 42 pages and says it was speech-to-text plus machine editing from roughly three hours and 44 minutes of audio, with no speaker labels. Numbers and model names may be wrong. It is not an official DeepSeek release. What follows is thematic organization, not a verbatim record; treat revenue, chip counts, and timelines as transcript claims, not guidance.

The through-line is straightforward: DeepSeek is not indifferent to traffic or enterprise revenue, but it ranks both below AGI. Open weights, low prices, focus, and slack time for researchers sound like four unrelated policies. In the meeting they read as one long bet seen from different angles.

## AGI first; chat and APIs are side products

Liang keeps separating the objective from its by-products. The objective is AGI. Consumer chat, enterprise APIs, and future agent services are capabilities that show up as the models advance. Once a capability exists, it can serve users and generate cash. The company does not need to halt the main research program to maximize one intermediate product.

The watermelon-and-sesame metaphor is doing the same work. The sesame seeds are not trivial: daily active users, enterprise revenue, and a public-company base are real money. Liang’s reported view is that if the space behind AGI is large enough, DeepSeek should not reshape itself into the next ByteDance or Tencent just to win one distribution channel.

Hence the split posture: maintain a consumer product and serve businesses, without treating the super-app race, a heavy sales org, or vertical lock-in as top priority. Research keeps moving; commercialization happens when it happens.

## After agents, the hard part is continual learning

The transcript describes progress as a staircase: language models, chain-of-thought reasoning, agents with tools and longer tasks—and then continual learning as the next bottleneck.

With full context, today’s models can beat people on hard tasks. A new hire, though, spends weeks learning colleagues, processes, and unwritten habits. AI usually lacks that sediment. If every assignment starts with “who is Xiao Wang?” and “why did we change the plan last time?”, the model never becomes part of the organization.

Continual learning is not an infinitely long chat log. A model must absorb experience from ongoing work without forgetting old skills or being poisoned by bad feedback. Nobody has a reliable solution yet, and the meeting does not claim DeepSeek has one.

Liang still puts it at the center of the next generation because, if it works, you get a loop: AI helps researchers build the next AI; stronger systems accelerate what comes after. AGI may not flip on like a light switch; it may look like a curve that slowly steepens.

## Coding agents first: AI should help build AI

Finance, legal, medical, and general agents all appear on the menu, but the near-term priority in the transcript is blunt: **get coding agents right first.**

Not only because developers pay. Code is the most direct interface for AI participating in AI research—a model that reads repos, patches code, runs experiments, and chases bugs raises DeepSeek’s own research throughput first.

That is a different product bar from a typical consumer company. The next model should be useful to DeepSeek’s researchers before it optimizes for everyone else. Shorten the cycle to the successor, and the model is both product and production tool.

Multimodality is on the roadmap but treated as a component. Video, 3D, and “world models” are not framed as the immediate path to a higher intelligence ceiling. Hallucinations matter, yet the transcript files them closer to post-training and product polish than to the core research wall.

The ordering may be wrong, but it is legible: **a hot or profitable direction does not automatically land on the AGI map.**

## Open models and low prices are still a business

DeepSeek’s open-source story mixes mission and competition. AI may be too consequential for one company to own; grabbing too much of the value invites rivals, regulators, and public pushback. Sharing weights is part of what they call goodwill and restraint.

Commercially, open weights still leave deployment, kernels, clusters, latency, and cost on the table—publishing a jet design is not the same as running a cheap airline. DeepSeek does not want secrecy to be its only moat; it wants to ship comparable capability faster and cheaper.

On API pricing, the transcript mentions a rough benchmark: equipment paid back in about ten months (not confirmed disclosure—do not hard-code it in a model). The point is reasonable return for risk and research, not the highest price users will tolerate.

Liang also offers a sharp line: **the player who insists on taking more may lose to one willing to take less.** Openness and low prices are not only posture; they shrink the profit pool for whoever follows.

## Compute: what China lacks is experiment volume

On the China–US gap, the transcript keeps returning to resources—not a lack of smart people, but how many accelerators a team can use, how many experiments it can run, and how large a model it can train. Less compute caps scale; fewer experiments also mean fewer chances for researchers to learn by doing. Part of the “talent gap” is an experimentation-budget gap.

DeepSeek does not treat scarcity as a reason to abandon scaling. Liang reportedly wants to buy chips at reasonable prices, build clusters, and keep growing models. Current sizes reflect budget and supply more than a belief that “big enough is big enough.”

When brute-force parity is off the table, efficiency is another way to catch up: the same cluster, used more cheaply, buys another training run or another research loop. Low cost shows up in the API bill and in lab velocity.

## Domestic chips: software may ease, supply stays hard

The transcript is optimistic about Chinese accelerators but leaves a hole. NVIDIA’s edge has been CUDA and its ecosystem, not silicon alone. Liang argues that higher-level languages, compilers, and AI-assisted coding lower the cost of rebuilding that stack. TileLang appears as an attempt to describe computation at a higher level and port it across hardware instead of binding everything to one vendor.

If that works, “hard to use” domestic chips may soften; manufacturing capacity becomes the harder question—enough units, enough power, enough total cost to build large clusters.

Figures about Huawei accelerators and performance ratios are especially transcription-prone; do not treat them as facts. Two safer takeaways: DeepSeek intends to work deeply on software for domestic compute; near-term supply still looks insufficient for the largest frontier training runs.

The company will build clusters without rushing to design its own chips. Liang’s analogy: you can run a power plant without manufacturing the generator. If chips are buyable at fair prices, stay on the layer where you are strongest.

## The team is the line you do not cross

Among commercial interests, Liang names one non-negotiable: **team stability.**

A failed training run may cost months. Late hardware delays a roadmap. When core researchers leave, they take shared knowledge that never made it into papers or repos. People intact, time and money can often be repaired; people gone, organizational memory actually breaks.

That matches the org design in the transcript: top-down coordination when a model must ship; substantial unscheduled time for researchers to choose problems. KPIs and overtime are not treated as the main engine of discovery—unknown problems need slack and curiosity.

Growth will force hierarchy and accountability. The trick is to make engineering and operations orderly without turning frontier research into quarterly homework. Vision travels by osmosis in a small team; in a large company it must survive process—and that may matter more than hiring a star.

## When founders stop debating which way the fish head points

After the transcript circulated, what stood out was not any single forecast but Liang’s tone: less founder mythology, less management jargon, more plain trade-offs—products as by-products, restraint as strategy, reasonable profit as enough, team over market share, “ordinary people doing something unusual” over genius cults.

Because the source is automated transcription, read these as compressed ideas, not verified quotes. Together they still sound decisive about what to pursue and what to decline—without needing a thick managerial vocabulary to authorize the choice.

A decade ago, Chinese internet founders joked at dinners about whole fish: should the head face the boss or the client? Etiquette, but also hierarchy and signals. Many built elaborate management philosophies. AI companies cannot escape management—DeepSeek admits departments and accountability as headcount grows—but the center of gravity shifts: **technical judgment, not organizational theater, sits at the top.**

For a research company, organization collapses to a few aims: keep the people who understand the problem, give them room, coordinate when shipping. Where the fish head points still matters; it just should not consume the founder’s best attention while chasing AGI on a permanent chip shortage. Whether that holds from hundreds to thousands of employees is an open question.

## What an investor actually gets from the meeting

Do not expect a clean ARR figure or an accelerator count from this file—both sensitive and easy to garble in transcription.

What you do get is a set of claims you can check later: after agents, bet on continual learning and AI helping build AI; use APIs and consumer products for cash without letting near-term revenue steer research; compete with openness, price, and efficiency, not secrecy alone; admit the compute gap, buy where you can, and adapt software domestically; put team stability ahead of traffic and margin.

In the optimistic story, those reinforce each other. In the pessimistic one, continual learning stalls, APIs commoditize, the compute gap widens, growth makes the org sluggish, and “restraint” becomes missing the window.

When judging DeepSeek, ask less whether it picked up every sesame seed and more whether the next release, price move, product expansion, or reorg still moves along the AGI line.

*Thematic synthesis of a public transcript; not the formal view of Liang Wenfeng or DeepSeek; not investment advice. Check financials, chip counts, and timelines against primary sources and official disclosures.*
