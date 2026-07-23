---
title: "Liang Wenfeng’s Strategy of Restraint: Why DeepSeek Chooses to Earn Less"
description: "An investor-meeting transcript suggests DeepSeek uses open models, low prices, focus, and research autonomy to trade near-term profit for a better chance of reaching AGI."
pubDate: 2026-07-23
category: insights
tags: ["DeepSeek", "Liang Wenfeng", "AGI", "Open-Source AI", "Continual Learning", "AI Business Models"]
articleSlug: "deepseek-restraint-strategy"
locale: en
draft: false
---

When a company cuts a product’s price to one quarter of its original level, the office does not usually erupt in celebration.

According to a transcript of a Liang Wenfeng investor meeting, people inside DeepSeek did. A cheaper model meant more people could afford to use it. The revenue left on the table did not feel like a loss.

![DeepSeek's restraint strategy: a research team passes short-term traffic and revenue signals on the road toward a more distant AI objective](/images/articles/deepseek-restraint-strategy/cover.png)

That small episode explains much of the meeting. Releasing leading models openly, declining to fight for the next super app, delaying a broad portfolio of vertical agents, leaving researchers free from a wall of KPIs—these choices all reduce to one calculation:

**Can surrendering some immediate value increase DeepSeek’s probability of reaching artificial general intelligence (AGI)?**

Liang’s reported answer is clearly yes. He calls the approach “restraint.”

A necessary evidence caveat: this analysis draws on a [transcript hosted by drjingle.com](https://drjingle.com/files/liang-wenfeng-investor-meeting-transcript.pdf). The file says it was automatically transcribed and AI-edited from roughly three hours and 44 minutes of audio, does not identify speakers, and may contain errors in numbers and proper nouns. It is not an official DeepSeek announcement or formal financial guidance. This article therefore examines the strategy expressed in the document; sensitive figures are treated only as claims made by the transcript.

## This is not an aversion to profit. It is a ranking of priorities

The easiest mistake is to describe DeepSeek as a laboratory with little interest in business.

The transcript presents almost the opposite view. DeepSeek knows it is a company and must eventually survive on revenue. What it resists is allowing today’s revenue to decide tomorrow’s research agenda.

Liang describes consumer users and enterprise API revenue as by-products on the road to AGI. Model development naturally creates useful capabilities, and offering those capabilities to people and businesses can generate cash. But building a large sales, traffic-acquisition, and vertical-product organization for the sake of current revenue could pull the research program off course.

DeepSeek’s commercialization resembles a small hydroelectric plant beside a river. The river is already moving toward a destination, and it can generate electricity along the way. The electricity should be sold, but the river should not be rerouted merely to sell a little more.

API pricing follows the same principle. In the transcript, Liang says a reasonable price is roughly one that recovers the cost of equipment in about ten months, rather than the price that maximizes profit. He even notes that, within some ranges, doubling the price might not reduce demand very much.

Conventional pricing asks how much the customer is willing to pay. DeepSeek asks how much more it needs to take after the company is healthy.

That is not charity. If the price is sufficiently low, a third party with access to the open weights may still be unable to serve the model at the same cost. The weights are public; systems engineering, kernel optimization, cluster operations, and inference efficiency are not automatically reproduced. Low pricing spreads the model while shifting competition from “who can hide the model” to “who can actually run it well.”

## Open source does not remove the moat; it chooses a different moat

Traditional software often earns money through licenses. Once its code becomes public, the charging gate may disappear. Frontier models have different economics.

Running them requires expensive hardware, a complicated software stack, and constant optimization. Open weights are closer to a public aircraft design: the blueprint matters, but possessing it does not create an airline capable of flying safely, cheaply, and on schedule.

The transcript attributes to Liang an intention to keep releasing models openly, potentially including DeepSeek’s strongest model, with the open and hosted versions kept equivalent in principle. He does not fear other companies deploying the weights. He worries more that they will deploy them badly and produce worse performance at higher cost.

The commercial premise is explicit. If DeepSeek accepts a reasonable profit, it does not need model secrecy to preserve extraordinary margins. Open source is dangerous when a valuation depends on permanent monopoly, hundredfold economics, and irreplaceability. If the goal is to earn enough from an enormous AI market to finance continued research, openness can instead produce ecosystem adoption, talent prestige, and trust.

Liang offers an aggressive proposition: the player determined to take more may be defeated by one willing to take less.

It sounds like a moral claim, but it is also elementary price competition. As long as technology spreads and customers can move, excessive profit becomes an invitation to challengers. Restraint is not withdrawal from competition. It removes the easiest point of attack before the challenger arrives.

## DeepSeek’s real bet is not the agent. It is continual learning

Open models and low prices are means, not the final wager. Their purpose is to keep money, talent, and attention focused on the next capability jump.

The transcript sketches a clear technical sequence: language models, chain-of-thought reasoning, agents, and then continual learning.

Current AI can complete difficult work when it receives the right instructions and context. It struggles to behave like an employee who, after two months in a company, naturally understands who “Xiao Wang” is, why a project changed direction, and which shared history lies behind an ambiguous sentence. People slowly absorb workplace experience. Models often begin again in the next session.

Continual learning would let AI acquire experience while it works, without catastrophically forgetting old capabilities or being corrupted by bad feedback.

Liang reportedly acknowledges that no one has a sufficiently reliable solution and that DeepSeek’s own ideas remain unproven. Yet he treats continual learning as the next gate because it could create a feedback loop:

A model first helps DeepSeek research its successor. That successor raises research productivity. Better AI then participates in its own further development. “AI accelerating AI” need not be a mysterious singularity that switches on at one moment; it may be a curve that gradually becomes steeper.

This also explains why coding agents come before finance, legal, or medical agents. Code is the most direct way for AI to contribute to AI research. A model that first makes DeepSeek’s own researchers more effective may not maximize immediate revenue, but it could shorten the development cycle of the next model.

## Compute scarcity turns efficiency into the main research program

Another major claim in the meeting is that the central gap between Chinese AI and the American frontier is not a shortage of intelligent people. It is a shortage of experimental compute.

Limited compute has two effects. The obvious one is that larger models cannot be trained. The subtler one is that researchers run fewer experiments and have fewer opportunities to learn through them. Part of what looks like a talent gap is really an experimentation-budget gap.

DeepSeek’s response is not to claim that compute is irrelevant. The transcript says the company wants to buy as many accelerators as possible at reasonable prices, build its own clusters, and keep increasing model scale. Liang still believes in scaling and argues that Chinese teams remain far from testing its true limits.

But when the resource gap cannot be closed through brute force, computational efficiency becomes research capacity. Lower cost on the same cluster means a larger model, more experiments, or more users.

Efficiency is therefore not a financial optimization applied after the model is finished. It is an architectural choice spanning the model, compiler, kernels, and cluster. The transcript also discusses TileLang and domestic Chinese accelerators. Its core argument is that CUDA’s ecosystem advantage may weaken as higher-level programming tools and AI-assisted coding reduce the cost of supporting new hardware. The hardest domestic-chip constraint may shift from usability to manufacturing capacity.

The details demand caution. Chip models, accelerator counts, and performance ratios in an unverified transcript should not be pasted into a valuation model. The strategic direction is clearer: DeepSeek wants the software layer to become less dependent on a single hardware ecosystem, without assuming it must design every chip itself. It wants to control computational efficiency, not necessarily every asset in the stack.

## A company without KPIs will still have to grow structure

DeepSeek’s organization serves the same wager.

The transcript describes two tracks. One runs from the top down: when a model must ship, work is divided and teams coordinate. The other runs from the bottom up: researchers retain substantial time that is not formally assigned, choosing which problems deserve exploration.

This does not mean everyone does whatever they like. It resembles a research institute with a common destination but freedom over routes. Problems such as continual learning do not come with a standard procedure. Giving ten people the same task list may be less effective than allowing a hundred people to keep turning the problem over during their work.

Liang treats team stability as the one interest on which DeepSeek cannot compromise. The reasoning is practical. Models fall behind, procurement is delayed, and experiments fail. If the key people remain, the loss may be six months or a year. When the research team disperses, accumulated organizational knowledge breaks.

Vision-driven management has limits, however. The transcript acknowledges that a larger company needs more departments and hierarchy; some work cannot run forever on informal consensus. DeepSeek may eventually carry two cultures at once: freedom at the research frontier and rigor in engineering and operations.

The difficult task is not choosing one. It is preventing the second from consuming the first.

## Restraint faces its most expensive test after success

The system is internally coherent:

- Open releases widen adoption and attract talent that identifies with the mission.
- Low prices force the company to keep improving efficiency.
- A narrow product portfolio reserves scarce compute and attention for the AGI program.
- Commercial by-products generate cash, reducing total dependence on fundraising.
- Research autonomy and equity help keep the core team together.

Coherence is not proof of success.

Continual learning may remain unsolved for years. APIs may commoditize faster than expected. Cloud and application companies may capture much of the value created by open models. Strong engineering culture cannot wish away compute constraints. An organization without KPIs may feel liberating at a few hundred people and become slow or ambiguous at a few thousand.

There is an even harder test. A company committed to restraint is not tested most severely when it is poor. It is tested after it acquires traffic, capital, and pricing power. Saying “we do not need to take much” is easy when the visible opportunity is small. Continuing toward an unseen prize becomes harder when the supposed sesame seeds are already large enough to transform everyone’s wealth.

The meeting’s most useful content is therefore not an unverified accelerator count or revenue forecast. It makes DeepSeek’s strategy falsifiable.

Every future pricing decision, model release, product expansion, and organizational change can be tested with the same question: does this increase the probability of reaching AGI, or has present success finally caused the company to change course?

The answer will not appear on a mission statement. It will appear in the next trade-off.

*This article is an independent analysis of a publicly hosted transcript. It does not represent DeepSeek’s official position and is not investment advice. Claims about the meeting, financial forecasts, chip quantities, and technical timelines should be checked against verifiable primary sources and formal company disclosures.*
