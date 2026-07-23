---
title: "Liang Wenfeng’s Strategy of Restraint: Why DeepSeek Chooses to Earn Less"
description: "A hosted investor transcript suggests DeepSeek trades near-term margin for AGI odds—open weights, low prices, focus, and room for researchers—if the logic holds."
pubDate: 2026-07-23
category: insights
tags: ["DeepSeek", "Liang Wenfeng", "AGI", "Open-Source AI", "Continual Learning", "AI Business Models"]
articleSlug: "deepseek-restraint-strategy"
locale: en
draft: false
---

When a company cuts a product’s price to one quarter of its original level, the office does not usually erupt in celebration.

According to a transcript of a Liang Wenfeng investor meeting, people inside DeepSeek did. A cheaper model meant more people could use it. The revenue left on the table did not feel like a loss.

![DeepSeek's restraint strategy: a research team passes short-term traffic and revenue signals on the road toward a more distant AI objective](/images/articles/deepseek-restraint-strategy/cover.png)

Releasing leading models openly, skipping the super-app fight, delaying a sprawl of vertical agents, keeping researchers off a wall of KPIs—these choices look scattered until you hear the same question underneath: **does giving up some near-term value improve DeepSeek’s odds of reaching artificial general intelligence (AGI)?**

In the transcript, Liang’s answer is yes. He calls it restraint.

Source note: this analysis uses a [transcript hosted on drjingle.com](https://drjingle.com/files/liang-wenfeng-investor-meeting-transcript.pdf). The file says it was speech-to-text plus machine editing from roughly three hours and 44 minutes of audio, with no speaker labels; numbers and names may be wrong. It is not an official DeepSeek announcement or financial guidance. Sensitive figures below are transcript claims only.

## Not allergic to profit—just strict about rank order

The easy misread is “lab that dislikes business.” The transcript argues the opposite: DeepSeek knows it must earn a living; it resists letting today’s revenue sheet pick tomorrow’s research.

Consumer users and enterprise APIs are by-products on the road to AGI. Research naturally produces usable capability; selling that capability brings cash. Building a huge sales, growth, and vertical-product machine to maximize current revenue, though, can pull the lab off course.

Liang’s hydro plant beside a river is the same idea: sell the electricity, but do not reroute the river to sell a little more.

API pricing follows. The transcript cites a rough benchmark—equipment paid back in about ten months (unverified)—rather than profit maximization. Liang even notes that in some bands, doubling price might barely move demand. Conventional pricing asks what the customer will pay; DeepSeek asks how much more it needs after the company is already healthy.

That is not charity. At a low enough price, a third party with open weights may still fail to serve at the same cost—weights are public; kernels, clusters, and inference efficiency are not copied for free. Low pricing spreads the model and moves competition from “who hides weights” to “who runs well.”

## Open source moves the moat, it does not erase it

Licensed software often loses its toll gate when code goes public. Frontier models play by different rules: hardware, stack, and tuning still matter. Open weights are closer to a published aircraft design—blueprint in hand, airline not included.

The transcript has Liang keeping the strongest models open, with hosted and open versions aligned in principle. He worries less about someone deploying against DeepSeek than about someone deploying badly and trashing cost and quality.

That assumes “reasonable profit.” Openness is lethal if your valuation needs permanent monopoly and hundredfold margins. If you only need enough of a vast AI market to fund research, openness can buy adoption, reputation, and trust.

He also lands a sharp competitive line: **the player who insists on taking more may lose to one willing to take less.** It sounds moral; it is also price war—fat margins invite challengers. Restraint is not leaving the game; it is flattening the easiest hill before someone else charges it.

## The bet after agents is continual learning

Open models and low prices are instruments. The wager is keeping money, talent, and attention on the next capability jump.

The technical sequence in the transcript runs language models, chain-of-thought, agents, then **continual learning**. Today’s systems can do hard work with full context; they struggle to accumulate workplace memory—the way a hire learns who “Xiao Wang” is and why the plan pivoted last quarter. People sediment experience; models often reset each session.

Continual learning means learning on the job without catastrophic forgetting or poisoned feedback. Liang reportedly says nobody has a reliable fix, including DeepSeek—but treats it as the next gate because a loop is imaginable: AI helps build the next AI, which speeds the one after. “AI accelerating AI” looks like a steepening curve, not a single switch flipping at midnight.

That ordering also explains coding agents before finance, legal, or medical ones. Code is the most direct way for AI to help AI research. A model that first saves DeepSeek researchers time may not maximize revenue immediately, but it may shorten the successor’s clock.

## When compute is tight, efficiency is research capacity

Another claim in the meeting: the China–US gap is less about brains than **experiment compute**. Fewer chips cap model size; fewer runs cap how fast researchers learn by trying. Part of the “talent gap” is an experimentation-budget gap.

DeepSeek does not treat scarcity as proof that scaling is over. The transcript has the company still buying chips, building clusters, and growing models when prices are sane. Liang still believes in scaling; current sizes reflect budget and supply more than “big enough.”

When you cannot brute-force parity, efficiency becomes capacity on the same cluster—cheaper inference buys another training run. Low cost is therefore architectural: model, compiler, kernels, cluster. TileLang and domestic accelerators appear as bets that CUDA’s moat may thin as tools improve; the harder constraint may shift from “can we use it?” to “can we manufacture enough?”

Chip counts and performance ratios in an unverified transcript should not enter a valuation model. The direction is clearer: loosen software dependence on one vendor without assuming you must fab every layer—control efficiency, not every asset.

## A KPI-light org still has to grow bones

Organization serves the same wager. The transcript describes two tracks: top-down coordination when shipping; bottom-up time for researchers to choose problems. Not “everyone does hobbies”—more like an institute with a shared destination and flexible routes. Continual learning does not arrive on a standard ticket; ten identical task lists may lose to a hundred people poking at the problem in parallel.

Liang treats team stability as the one line not to cross. Models slip, procurement slips, experiments fail—if key people stay, you often recover in months; if they scatter, organizational memory actually breaks.

Headcount growth will add hierarchy. The hard part is rigorous engineering without turning frontier research into quarterly homework—two cultures at once, for a long time.

## Restraint’s hardest test may come after success

String the transcript together and the logic is coherent: openness for adoption and talent, low prices for efficiency, a narrow product surface for AGI focus, commercial by-products for cash, autonomy and equity for retention.

Coherent is not guaranteed. Continual learning may stall for years; APIs may commoditize faster than expected; clouds and apps may capture open-model value; compute gaps do not vanish because the culture is good; a KPI-light org that feels liberating at hundreds may feel slow at thousands.

The nastier exam arrives after success—when sesame seeds are already large enough to change everyone’s wealth and saying “we do not need to take much” is no longer cheap. Continuing toward a watermelon you cannot yet see takes discipline.

So the useful residue of the meeting is not an unverified accelerator count. It is a question you can reuse: **does the next price move, open release, product expansion, or reorg raise the odds of AGI—or mark the moment present success reroutes the company?** The answer will not live on a mission statement; it will show up in the next trade-off.

*Independent analysis of a public transcript; not DeepSeek’s official view; not investment advice. Verify meeting claims, forecasts, chip counts, and timelines against primary sources and formal disclosures.*
