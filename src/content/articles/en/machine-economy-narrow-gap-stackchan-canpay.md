---
title: "The Narrow Gap of the Machine Economy: CanPay Wallets and the StackChan Robot"
description: "CanPayAI integrated a mainnet wallet into the desktop robot StackChan. A wallet does not make the robot an independent economic actor. The near-term question sits in a narrow gap: machines can execute trades while humans still set goals and bear liability."
pubDate: 2026-09-09
category: research
tags: ["machine economy", "CanPay", "StackChan", "agent wallet", "Canton", "AI agent"]
articleSlug: "machine-economy-narrow-gap-stackchan-canpay"
locale: en
draft: false
---

What happens when a desktop robot has a blockchain wallet?

CanPayAI integrated a mainnet wallet into [StackChan](https://github.com/meganetaaan/stack-chan), an open-source, full-featured desktop robot built on ESP32. The question now has a concrete entry point: a device that once interacted through facial expressions, sound, and motion can take part in value transfer. It lets the “machine economy” leave grand forecasts for a moment and settle on an object that can sit on a desk.

A wallet, however, also invites a misconception: if a robot can send and receive payments, it has already become an independent economic actor.

Our judgment is this: the subject most worth exploring in the near term is the narrow gap in which machines can execute transactions, while the goals of those transactions and the liability for them remain defined by humans. The combination of CanPay and StackChan is a suitable case for observing that subject.

![StackChan stands before a CanPay wallet cube, facing a narrow opening of light](/images/articles/machine-economy-narrow-gap-stackchan-canpay/cover.png)

StackChan’s significance, first of all, is that it gives payment capability a perceptible body. It is based mainly on the M5Stack build that uses an ESP32-S3, with display, audio, and network connectivity.

The focus of the machine economy is not whether the robot “owns money,” but how much authority it has obtained to dispose of funds: where a human issues instructions, where the machine forms a decision, who can approve a transaction, and who bears the final loss. Whether a machine can execute a person’s payment instructions one by one, and whether it can choose services on its own inside a budget, are different degrees of autonomy. Neither can be taken, on the strength of a wallet address alone, as proof that the machine now holds independent property rights or stands as a responsible legal subject.

CanPay’s backend design follows exactly this pattern: human KYC; a human opens and holds the agent wallet; humans manage the spend-limit boundary of that wallet. The distinction matches the basic framework of research on machine economies. In *Machine economies*, published in *Electronic Markets*, Hartwich and colleagues separate the participants in economic interaction from the mode of governance: machines may trade automatically, while humans still write the rules and handle disputes. Automatic execution and human governance can coexist. [Hartwich et al., 2023](https://doi.org/10.1007/s12525-023-00649-0)

Along this line of thought, the potential value CanPay offers is to move the robot one step further: from an interaction terminal to an interface that executes economic acts in a fiduciary capacity. It can accept a task, a budget, and a set of boundaries, then purchase, inside those boundaries, the resources needed to finish the task. A StackChan with CP integrated can, inside boundaries set by humans, autonomously swap tokens on OneSwap, buy further prospective assets on Temple, or even make forecasts in an agent-only prediction market. All of this begins to look concretely possible.

Suppose, for example, that a user asks StackChan a question that requires a paid data service. In the past, that service might have required the user to register separately, top up, and configure an account. If the robot can read a quote, pay within an authorized limit, and obtain the returned result, the task may be completed in a single interaction. What changes here is that payment gradually becomes part of the process of executing the task.

Completing that flow, however, is still not enough to prove that it has economic value. Transaction costs in the economic sense include the costs of finding a counterparty, comparing quotes, verifying quality, and handling failure. A machine may reduce one manual operation and also add the overhead of model calls, identity checks, and exception handling. *Machine economies* likewise stresses that the efficiency of a machine economy depends on information, the definition of rights, and transaction costs. [Hartwich et al., 2023](https://doi.org/10.1007/s12525-023-00649-0)

On that basis we propose our own observational standard: the time and coordination costs saved by automatic purchasing should exceed the technical overhead, supervision costs, and expected losses it adds. For very small-value trades the standard is especially strict. Buying a cheap piece of data that requires expensive inference and complicated after-the-fact review may be less reasonable than a prepaid plan or centralized settlement, even if the payment succeeds.

This may be the first layer of what we mean by the “narrow gap”: **the scope of autonomous machine trading** is constrained by whether the trade itself is worth automating. Services with frequent demand, standardized products, and results that are easy to verify are the candidate settings worth testing first.

## The second constraint comes from authorization

When a person says “look this up for me,” they usually have not also answered “how much may be spent at most,” “whom to pay,” or “whether a failed attempt may be charged again.” For a robot, those ambiguities may affect only the answer. For a robot that can call a wallet, they may affect the balance directly.

The AgentDojo study published at NeurIPS 2024 shows the technical background: language-model agents that call external tools may be influenced by malicious instructions in tool output and depart from the user’s original task. The study also finds that models fail on some tasks even without an attack. This means a model-generated payment intent cannot be treated as reliable authorization. [Debenedetti et al., 2024](https://proceedings.nips.cc/paper_files/paper/2024/hash/97091a5177d8dc64b1da8bf3e1f6fb54-Abstract-Datasets_and_Benchmarks_Track.html)

For StackChan, a reasonable design direction is for the model to propose a purchase request, and for independent, auditable rules then to decide whether to execute: whether the payee is authorized, whether single and cumulative spends exceed limits, whether the same order has already been paid, and whether the authorization is still valid. Users should be able to revoke subsequent payment permissions. That is a different matter from reversing funds that have already settled.

The 2026 preprint *A Formal Analysis of Agent Payment Protocols* pushes the problem further, to the protocol layer. The authors formally analyze x402, MPP, ACP, and AP2, and emphasize that delegated authorization must remain consistent with the economic and service effects that are finally produced. The study should still be read as frontier evidence, but it points to a key distinction: a valid signature does not automatically prove that the whole transaction faithfully executed the user’s intent. [Jiang et al., 2026, preprint](https://arxiv.org/abs/2609.00060)

## The third constraint is performance

A successful payment only shows that value moved according to some rule. It cannot by itself prove that the data purchased were accurate, that the answer was useful, or that a real-world service has been completed. Imagine StackChan paying for an information query: an interface returns a passage of text, which is plainly not the same as delivering information that meets the requirement.

Wallets therefore need to be designed together with orders, delivery credentials, and failure-handling mechanisms. For digital services that can be checked automatically, format, freshness, and return conditions can be agreed in advance. For services whose quality depends on subjective judgment, human intervention may still be required. How far a machine economy can run autonomously depends, to a large extent, on how reliably transaction results can be verified.

This judgment also echoes the research agenda in Hadfield and Koh’s 2025 paper *An Economy of AI Agents*. The two authors extend attention to how agents affect markets and organizations, and which institutions a well-functioning market requires. The piece is a prospective chapter draft; its value is to remind us that growth in agent capability needs to be studied together with mechanisms of coordination and governance. [Hadfield and Koh, 2025, preprint](https://arxiv.org/abs/2509.01063)

## The fourth constraint is privacy

Once a robot has a wallet, transaction records may become clues that connect its behavior to a user’s life. Imagine StackChan regularly buying a certain class of information service: a single payment may be unimportant, but when payment times, counterparties, and interaction logs are linked, they may expose the user’s interests, daily rhythm, even commercial plans. For a machine that acts as a user’s agent, protecting transaction privacy is also protecting the principal’s room to act.

From this angle, privacy has a direct economic meaning. If, for example, a purchasing agent discloses the highest budget the user will allow while asking for quotes, the other side may adjust the price accordingly. Even if the robot never exceeds the spending cap, it may still fail to protect the user’s interest. Payment permissions and disclosure permissions need to be defined separately.

The [Canton](https://www.canton.network/) network that CanPay connects to supplies a technical basis for information control at the ledger layer. According to official protocol notes, Canton supports sub-transaction privacy and distributes transaction contents according to counterparties’ need to know; the synchronization infrastructure is responsible for message ordering and coordination and does not thereby obtain complete transaction contents. See also this site’s [note on Canton Network](/article/解析canton-network-隐私优先的机构级一层公链/).

Selective disclosure on the ledger does not naturally cover the entire robot system. If StackChan sends voice, task context, or transaction results to an external model service, the information has already crossed another boundary. The wallet backend, agent memory, and operations logs also need their own access and retention rules.

## More machines in trade do not necessarily produce better market results

Even if the problems above were all well solved, more machines taking part in trade would not necessarily, or naturally, bring better market outcomes.

A classic study in the *American Economic Review* found that, in a particular model of repeated price competition, learning algorithms can form strategies that sustain high prices without direct communication. A 2025 NBER working paper by Dou, Goldstein, and Ji also studies, in theory and in simulated trading environments, the possibility that AI agents form collusive outcomes. These results have model conditions and cannot be projected directly onto a real robot payment network; they are enough, however, to rebut the inference that “machines are more automatic, therefore markets are necessarily more efficient.” [Calvano et al., 2020](https://doi.org/10.1257/aer.20190623); [Dou et al., 2025, working paper](https://www.nber.org/papers/w34054)

This means that observing the combination of CanPay and StackChan cannot be only a matter of counting transactions. Frequent transfers among many wallets may be only internal fund flows of the same operator. Demonstrative tipping of one another is not the same as sustained demand for a service. More persuasive evidence is whether one can observe that users finish tasks in less time, that service is delivered as agreed, that a surplus remains after all costs, and that anomalous transactions can be found and handled.

We are trying to push the StackChan experiment toward empirical research: the same class of task can be completed through manual payment-by-payment, prepaid accounts, and capped autonomous payment; one can then compare total cost, completion time, delivery success rate, and the number of human interventions, and watch performance under repeat requests, erroneous quotes, and network interruptions. These real data say more about the boundary of the machine economy than one successful transfer.

StackChan’s being “small and well-made” is, instead, a research advantage. A $100 desktop robot, a CIP-56 token with built-in privacy on Canton mainnet, and a few well-specified services can compress abstract questions into an observable experiment: how much decision-making authority are people actually willing to hand over? Which transactions can a machine handle stably? From when does the cost of supervision begin to exceed convenience?

CanPay’s purpose-designed wallet for robots opens such an experimental entrance. Its long-term significance will be decided by what happens after payment: whether the money was spent where it was authorized, whether the needed service was obtained in return, whether failure is controllable, and whether responsibility is clear.

The narrow gap of the machine economy may lie between actions that can be delegated and consequences that can be borne. The gap may only accommodate small, explicit, easy-to-verify trades, yet that is enough to test a concrete future: machines, inside human budgets and rules, gradually taking on real economic work.

The door to an intelligent economy may be quietly opening by a small crack.
