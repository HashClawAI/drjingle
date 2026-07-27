---
title: "The Twilight of the Token: From Metering Unit to Latent Intent"
description: "Tokens may fade like early internet KB billing: unit prices crash, tokenizers get bypassed, and agents begin exchanging latent intents while language stays the human interface."
pubDate: 2026-07-27
category: research
tags: ["token", "latent space", "multi-agent", "LLMflation", "Coconut", "intent-centric"]
articleSlug: "token-dusk-latent-intent"
locale: en
draft: false
---

When early internet traffic was billed by the kilobyte, KB felt like hard currency. Once bandwidth got cheap, nobody talked about “a few KB” anymore. Billing shifted toward content, services, and subscriptions; traffic sank into an invisible implementation detail.

Over the past three years, generative AI has pushed the “token” into a similar role: an engineering segmentation unit, a line item on price sheets, and often the narrative protagonist. The open question is whether tokens will recede like KB—or remain center stage for a long time.

A more radical thread has appeared alongside that question. Some research argues that natural language—and even token-mediated reasoning—may not be necessary for agents to operate. What machines truly exchange and settle might be “intent” in latent space; language would be only the occasional surface interface.

Placing both claims back into published literature, the evidence is uneven—but the direction is already clear enough.

![The twilight of the token: discrete metering dissolving into continuous latent intent](/images/articles/token-dusk-latent-intent/cover.png)

## Falling token prices do not mean tokens disappear

Comparing token prices to early bandwidth billing is not mere rhetoric. Andreessen Horowitz compared large-model inference costs with the PC compute revolution and bandwidth cost declines during the internet bubble, finding that equivalent-performance inference cost fell roughly a thousandfold in about three years—an annualized drop on the order of 10×, faster than chip costs or bandwidth costs in those earlier eras. They called it [LLMflation](https://a16z.com/llmflation-llm-inference-cost/). [Epoch AI](https://epoch.ai/data-insights/llm-inference-price-trends) later showed that inference prices have fallen rapidly, though unequally across tasks.

The persuasive force is not numeric coincidence but a shared industrial structure: when a resource is scarce, its metering unit becomes the star; once commoditized, billing migrates from “by volume” to “by outcome, service, or subscription.” Token pricing is already shifting—from simple “per million tokens,” to distinctions between output tokens and reasoning “thinking tokens,” to outcome-priced APIs, and to call- or task-based billing for agents.

There is an important counterexample: even as unit token costs fall, many companies’ total inference spend keeps rising. Reasoning models generate large volumes of internal “thinking tokens,” and application-layer consumption grows faster than unit-price declines. That is a classic Jevons paradox: cheaper use induces more use. A falling unit price is not the same claim as “the category of tokens is about to vanish.”

## Tokenizers are already being bypassed

More consequential than price is the technical substrate tokens depend on: subword tokenization (for example, BPE). Fixed vocabularies introduce efficiency losses and systematic bias on multilingual text, noisy input, and long-tail distributions. High-resource languages often receive finer, more useful splits; low-resource vocabularies are frequently carved into semantically weak fragments. Detailed empirical records exist for languages such as Malayalam.

In response, a wave of tokenizer-free architectures has appeared: ByT5 and CANINE model raw bytes or code points directly; MegaByte uses multiscale chunking for million-byte sequences; Meta’s [Byte Latent Transformer (BLT)](https://ai.meta.com/research/publications/byte-latent-transformer-patches-scale-better-than-tokens/) dynamically partitions patches by byte entropy and can match or surpass token-based models on several benchmarks, especially character-level understanding and noise robustness.

That alone shows tokens are not the only gateway to language modeling—they are an artifact of specific engineering trade-offs. When compute and architecture change, this layer can be compressed or replaced. The parallel with KB is structural: both were metering units shaped by resource constraints and protocol design, not intrinsic properties of the thing being modeled.

## Chain of thought in latent space

If tokenizer evolution only unsettles the token’s role as a metering unit, Meta FAIR’s 2024 [Coconut (Chain of Continuous Thought)](https://arxiv.org/abs/2412.06769) challenges the token’s necessity as a carrier of reasoning.

The paper argues that most tokens in chain-of-thought traces mainly keep text coherent; the few critical steps that decide success hit an expressivity bottleneck when forced into a discrete vocabulary. Coconut feeds the model’s final-layer hidden state directly as the next input embedding—without decoding it into tokens—so reasoning proceeds in a continuous latent space unconstrained by the language vocabulary.

Experiments show higher accuracy with less compute on several logical reasoning tasks, plus emergent breadth-first-search-like behavior: a latent state can encode multiple candidate paths at once, rather than locking onto a single path as early as discrete tokens often force.

![A discrete token chain dissolving into a continuous latent reasoning field](/images/articles/token-dusk-latent-intent/latent-reasoning.png)

*Illustration: natural-language tokens can look like a “translation tax” paid for human readability; critical reasoning steps may unfold in continuous latent space.*

This is currently the most direct empirical support for the claim that pure reasoning need not require natural language. Researchers also note training instability and mode-switching overhead; results mainly rest on controlled logical benchmarks and should not be generalized to every task type yet.

## Agents begin exchanging hidden states directly

The claim that “an agent is ultimately latent intent” finds a clearer counterpart in multi-agent systems research. Conventional LLM agent collaboration uses natural language as the universal medium—each agent “translates” internal reasoning into text for others to read. That creates three structural defects: high reasoning cost, irreversible information loss from discretization, and the ambiguity and redundancy of natural language itself.

Work on “latent communication” proposes that agents exchange continuous representations—embeddings, hidden states, or KV caches—without decoding to text first. [LatentMAS](https://arxiv.org/abs/2511.20639), for example, lets agents perform autoregressive “latent thinking” via final-layer hidden states and maintain a shared latent working memory; [Interlat](https://arxiv.org/abs/2511.09149) passes hidden states as representations of “thought”; other work uses [KV-cache state deltas](https://arxiv.org/abs/2506.19209) to augment rather than replace natural language, or, as in [HyLaT](https://arxiv.org/abs/2605.25421), splits “precise but human-readable” critical signals from “dense but compressible” intermediate reasoning across channels.

Together, these lines point in one direction: in pure machine-to-machine collaboration, natural-language tokens are not necessarily the optimal protocol. They are often retained because they are interpretable and auditable for humans.

![Multi-agent systems exchanging continuous latent intents, with language as an optional outer shell](/images/articles/token-dusk-latent-intent/latent-comms.png)

*Illustration: latent communication can improve fidelity and efficiency while sacrificing transparency; language looks more like a human-facing interface layer.*

The literature also acknowledges the cost: latent communication reduces transparency and interpretability, challenging settings that require human oversight, audit, or safety alignment. Papers such as [LCGuard](https://arxiv.org/abs/2605.22786) already discuss information leakage and hard-to-observe security risks from KV-cache sharing. A more accurate formulation is not “language will be replaced,” but “language is shifting from the default substrate protocol to an optional human-facing interface.”

## Is language itself too thin?

Turing Award winner Yann LeCun has repeatedly argued that large language models learn mainly from text, and that text is only a “thin slice” relative to the multimodal, embodied experience humans use to perceive the world. He often compares data volumes: text used to train a large model is on the order of 10¹⁴ bytes, while a human child in the first years of life takes in a comparable volume of sensory data through vision alone; human intelligence clearly rests on large-scale multimodal experience, not pure text.

He therefore argues that simply scaling text training is insufficient for general intelligence, and pushes “world model” approaches that predict in abstract representation spaces from video and sensory data (for example, JEPA). If language has structural limits for building a complete world understanding, then using language tokens as the basis for agent collaboration and billing looks more like path dependence from current technical availability than a long-run end state.

LeCun’s claims are contested, including criticism of originality and the view that world models and language models are more likely complementary than substitutes. There is no consensus yet.

## Parallel evidence from intent-centric crypto

Less often placed in the same frame—but highly related logically—is the rise of intent-centric architectures in blockchain systems. Traditional transaction models require users to specify every execution step; intent-centric designs—such as [Anoma](https://anoma.net/blog/an-introduction-to-intents-and-intent-centric-architectures) and ERC-7683—let users declare only the desired outcome, while “solvers” match and settle the concrete path. The core claim is blunt: intent, not the operation sequence, is the true first-class primitive at the application layer.

Agent-oriented payment protocols such as [x402](https://www.x402.org/x402-whitepaper.pdf) extend “bill by token” further into machine-to-machine settlement by resource call or task outcome, so agents can autonomously complete payment chains for an intent without human intervention.

The two threads converge from different directions: for machine collaboration, what matters is the latent representation of “what should be achieved” and the settled result; which language or execution path gets there is becoming a compressible, automatable middle layer.

## A more precise judgment

Putting the evidence together yields a sharper claim than “tokens will be obsolete” or “language is useless”:

As a **metering unit**, the token really does show a commoditization trajectory like early internet bandwidth/KB—unit prices fall fast, billing shifts from volume to outcomes—but total spend may still rise with usage. That is not the same as disappearance.

As a **tokenization artifact**, the token is being challenged from below by tokenizer-free architectures; that layer may be compressed or hidden in future models, which is closer to implementation iteration than to language losing value.

As a **carrier of reasoning**, Coconut and related work already suggest tokens are not computationally necessary; latent space may be more efficient for pure reasoning, though external validity still needs broader tests.

At the level of **agent collaboration**, reasonably solid evidence shows latent communication can beat natural language on efficiency and fidelity—currently the strongest technical support for “an agent is ultimately latent intent.” The same literature notes losses in interpretability and auditable safety; language is more likely to remain the human–machine interface.

Parallel evidence from blockchain intent-centric architectures further supports intent as an independently developing first-class primitive for machine coordination. The technical paths differ; the convergence is structural.

A cautious conclusion follows: tokens will not vanish soon, but their status as a necessary, explicit, volume-priced universal medium is being eroded by economic pressure (commoditized cost), technical pressure (tokenizer-free architectures, latent reasoning and communication), and philosophical pressure (whether language can carry intelligence). Language and tokens may recede like early-internet KB—from protagonists to a still-present but unremarked substrate—while what agents optimize, settle, and negotiate increasingly takes the form of intents and outcomes that never fully encode into language.

This trend has substantial preprint and industry-analysis support, but it is early. Strong claims that “world models beat language models” or that “latent communication strictly dominates text collaboration” still face real disagreement and should not be treated as settled. Some arXiv items cited here are recent preprints without full peer review; summaries of public figures’ views should be checked against original interviews or papers.
