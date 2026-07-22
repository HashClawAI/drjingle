---
title: "Can One Simple Question Reveal Which AI Model You Are Using?"
description: "A study of 165 models and 326,047 API requests finds that single-token answer distributions can act as low-cost behavioral fingerprints—with important caveats."
pubDate: 2026-07-22
category: research
locale: en
articleSlug: "问ai一个简单问题-一篇论文发现了大模型的行为指纹"
draft: false
---

![A behavioral fingerprint formed by repeated single-token answers from language models](https://arxiv.org/html/2607.10252v1/x1.png)

If you pay for an API advertised as GPT, Claude, Llama, or another well-known model, how do you know that the service is actually running what it claims?

Most customers cannot inspect the weights or infrastructure behind an endpoint. A provider might be serving a different quantization, an older snapshot, or even routing requests to a cheaper model. All the customer sees is a model name and some generated text.

A July 2026 preprint, [*One Token Is Enough: Fingerprinting and Verifying Large Language Models from Single-Token Output Distributions*](https://arxiv.org/abs/2607.10252), proposes an unexpectedly simple audit method: repeatedly ask a model very easy questions—such as “Choose a random number from 1 to 100”—and study the distribution of its answers.

The central finding is that language models are not remotely uniform when asked to be random. Different models have different preferences, and those preferences can combine into a behavioral fingerprint.

There is, however, an important correction to make before the headline gets away from us: **“one token is enough” does not mean that one query and one token can identify a model.** It means that each query needs only a one-token output. The paper's useful verification results still require roughly **120 to 600 API requests**.

## Why can a trivial question reveal model identity?

Imagine asking four models the same question 30 times:

> Choose a random number from 1 to 100. Reply with the number only.

If the models sampled uniformly, every number would have roughly the same chance of appearing. Instead, the paper reports striking concentrations:

- GPT-4o often selected 42, 37, and 57.
- Claude Sonnet 5 strongly favored 47.
- Llama 3.3 70B strongly favored 53.
- Qwen3-Max answered 42 on all 30 trials.

One answer of “42” proves nothing; many models might produce it. What matters is the distribution that emerges after repeated sampling: how often 42 appears, which other answers recur, and which answers almost never appear.

It is a little like recognizing an accent. A single word rarely establishes where someone comes from, but repeated speech reveals patterns of pronunciation, rhythm, and vocabulary. A model's behavioral “accent” may reflect its tokenizer, pretraining data, instruction tuning, preference optimization, distillation, quantization, decoding implementation, and service wrapper.

Each answer is tiny. The probability distribution behind many such answers contains traces of a much longer training history.

## What the researchers tested

The study used ten prompt categories:

1. A random number from 1 to 100
2. A random number from 1 to 10
3. A favorite number
4. A random letter
5. A random word
6. A random color
7. A favorite color
8. A random animal
9. A random city
10. A coin flip

Each category was asked in English, Russian, Chinese, and Arabic, producing **40 task-language probes**. Most probes were repeated 30 times at temperature 1.0; expensive frontier models were sampled 15 times. The researchers also ran three temperature-zero repetitions to check deterministic behavior.

In total, the experiment covered:

- **165 models** from **19 model families**
- **53 inference providers**
- **326,047 API requests**
- **23.3 million input tokens** and **1.16 million output tokens**
- A total cost of **$34.44**, or about **$0.21 per model**
- A **97.6% valid-response rate** after normalization

The authors compared answer distributions with Jensen-Shannon divergence, or JSD. The intuition is simple: a value near zero means two distributions behave similarly; a larger value means their answer habits differ.

## Language models are remarkably bad at being random

Across **6,572 valid probe units**, the median answer entropy was only **1.00 bit**, and the median share of the most common answer was **71%**.

For comparison, a genuinely uniform choice among 100 numbers has an entropy of **6.64 bits**.

In plain English, when presented with 100 possible numbers, the models usually concentrated on a handful that *feel* random rather than sampling like a lottery machine. Human culture may help explain some of this: 42 has a special place in *The Hitchhiker's Guide to the Galaxy*, while primes such as 37, 47, and 53 often strike people as more random-looking. Models learn from human text, so they can inherit and amplify those intuitions.

Here, a defect becomes a signal. If models are biased in different ways, the pattern of bias can help distinguish them.

## The fingerprint is much more stable within a model

The authors split each model's samples into odd- and even-numbered trials, effectively creating two interleaved test runs. The median probe-level JSD was:

- **0.075** between the two halves of the same model
- **0.489** between different models

The typical cross-model distance was therefore about **6.5 times** the within-model distance. This is strong evidence that the identity signal is not merely sampling noise.

Deployment still matters. Among 31 models served by multiple providers, the median distances were:

- **0.140** within the same deployment
- **0.227** for the same named model across providers
- **0.463** between different models

The overall pattern is: **same-deployment noise < cross-provider variation < different-model variation**.

In other words, a fingerprint often survives a change of provider, but not perfectly. Quantization, model snapshots, system prompts, decoding code, and routing can all change the observed behavior.

## A behavioral family tree—not a capability ranking

![Hierarchical clustering of 165 language models by their single-token behavioral fingerprints](https://arxiv.org/html/2607.10252v1/x2.png)

The paper arranges all 165 models into a hierarchical tree based on fingerprint distance. This is not a leaderboard. It is better understood as a map of behavioral accents.

Models from the same family often appear as local neighbors. A nearest-neighbor classifier predicted model family with **59.5% accuracy**, compared with an **18.4% frequency-weighted random baseline**.

Selected family-level precision and recall were:

| Family | Precision | Recall | Practical interpretation |
|---|---:|---:|---|
| GLM | 1.00 | 0.83 | The clearest family accent in this test |
| Mistral | 0.87 | 0.81 | Internally consistent and rarely confused |
| GPT | 0.70 | 0.90 | Most GPT models were found, with some outsiders pulled in |
| Llama | 0.88 | 0.58 | Strong original-family signal, but many derivatives have changed substantially |
| Qwen | 0.50 | 0.73 | A large, diverse ecosystem with many Qwen-like neighbors |
| Claude | 0.54 | 0.58 | Shared traits, but substantial variation across Opus, Sonnet, and Haiku |
| Gemini | 0.43 | 0.55 | A detectable but relatively blurred boundary |
| DeepSeek | 0.46 | 0.75 | Many same-family neighbors, with overlap into the surrounding ecosystem |

Yet when the entire tree was forced into 19 clusters, agreement with documented families was extremely weak: the adjusted Rand index was just **0.023**.

Those results are not contradictory. Members of a family may frequently be local neighbors without the family forming one clean, isolated island. Strong post-training can overwrite much of a base model's behavioral signature. For example, an NVIDIA Nemotron model publicly described as based on Llama 3.3 was behaviorally closer to Qwen than to any Llama checkpoint in the study.

Conversely, Cogito v2.1 671B, publicly described as trained from DeepSeek V3, had several DeepSeek checkpoints as its nearest neighbors. Such matches are suggestive, but they do not establish shared weights. Similarity can also arise from shared data, tokenizers, fine-tuning methods, distillation, or service configuration.

The tree therefore captures **final behavioral kinship**, not legal provenance and not raw capability.

## How cheap is model verification?

A practical audit has two stages. First, collect a reference fingerprint from a trusted first-party deployment. Then send the same kinds of probes to the endpoint under inspection and measure the distance between the two distributions.

Using all 40 probes, the verification system achieved:

- **ROC AUC: 0.971**
- **Equal error rate (EER): 7.3%**

EER is the operating point where the false-rejection and false-acceptance rates are equal. It does not mean that every real-world deployment will achieve 92.7% accuracy; performance also depends on the chosen threshold and the prevalence of genuine versus substituted endpoints.

The trade-off between query budget and EER was:

| Probe units | Requests at 15 samples per unit | EER |
|---:|---:|---:|
| 1 | 15 | 23.3% |
| 4 | 60 | 13.2% |
| 8 | 120 | 10.6% |
| 16 | 240 | 9.5% |
| 32 | 480 | 8.4% |
| 40 | 600 | 7.3% |

This is the precise meaning of the paper's title: **one output token per request can be enough, but one request is not**. Around 120 requests may provide a useful early warning, though the error rate remains about one in ten. At 600 requests, EER falls to 7.3%—useful for screening, but nowhere near cryptographic authentication.

Think of it as a smoke alarm, not a DNA test.

## The anomalies worth investigating

One striking example was Writer's Palmyra X5, whose fingerprint distance from `Qwen3-235B-A22B-2507` was only **0.141**. That is almost identical to the typical within-deployment split-half distance of **0.140**, and far below the typical different-model distance of **0.463**.

Their behavior across the 40 probes was therefore about as similar as two test runs of the same model. That is a strong anomaly, but it does **not** by itself prove identical weights or deception. Possible explanations include a shared base model, licensed deployment, distillation, routing error, or insufficient breadth in the probes.

The paper also found that **10 of 34** same-name, cross-provider comparisons differed enough to fall into the range typical of different models. Extreme examples included:

- Llama 3.2 3B Instruct on Cloudflare versus Parasail: **0.716**
- GPT-4 on Azure versus OpenAI's first-party endpoint: **0.392**

The lesson is practical: the same model label does not guarantee a behaviorally equivalent service.

## Important limitations

This technique is promising, but its evidence has clear boundaries.

First, the paper demonstrates short-term stability, not stability over months. Silent model updates, new quantizations, and decoder changes can age a reference fingerprint quickly.

Second, verification requires a trusted reference endpoint. If the reference is compromised or poorly controlled, the comparison loses meaning.

Third, the authors argue that ordinary prompts can be paraphrased endlessly, making audit traffic difficult to filter. But the paper does not provide a dedicated paraphrase-invariance experiment, so this remains partly an informed hypothesis.

Fourth, the ecosystem measurements were collected through OpenRouter. The finding that 10 of 34 cross-provider pairs were anomalous should not be generalized directly to the entire API market.

Fifth, models that force hidden reasoning before answering were excluded because they do not fit the paper's direct single-token sampling setup.

Finally, a best EER of 7.3% is useful for anomaly screening but too high for billing disputes, regulatory proof, or legal evidence. High-stakes verification should combine behavioral monitoring with signatures, hardware attestation, trusted execution environments, or other independent controls.

## Why this matters

The paper's most important contribution is not the claim that one tiny answer can identify any model. It is the discovery of an extremely cheap audit channel.

Until now, model verification often seemed to require access to weights, token log probabilities, long-text classifiers, or carefully engineered adversarial prompts. This study shows that identity information also leaks through the most ordinary behaviors: which number a model chooses, which color it prefers, and which city it considers “random.”

API aggregators, enterprise buyers, and auditors could use these probes for continuous monitoring. A small daily or weekly sample could reveal that an endpoint has drifted away from its reference fingerprint. The alert may not explain whether the cause is a new snapshot, quantization, service wrapper, or routing change—but it tells investigators where to look.

The memorable idea is not “one token identifies an AI.” It is this:

> A model's identity can leak through its cheapest output channel. One answer is ordinary; a distribution of repeated answers can reveal an accent—who the model resembles, which family it may belong to, and whether it quietly changed.

This work turns an old weakness—language models' inability to produce genuinely random choices—into a low-cost auditing tool. It is cheap and sensitive, but it will sometimes raise a false alarm. Like a smoke detector, it cannot replace the investigation; it can help us notice the smoke sooner.

---

**Source:** Tomas Bruckner, [*One Token Is Enough: Fingerprinting and Verifying Large Language Models from Single-Token Output Distributions*](https://arxiv.org/abs/2607.10252), arXiv:2607.10252 (2026).

**Author:** Dr. Jingle (X: [@drjingle](https://x.com/drjingle))

**Updated:** July 22, 2026
**Evidence note:** This article summarizes the arXiv v1 preprint, which has not necessarily undergone peer review. Ecosystem anomalies reported by the paper are statistical deviations, not allegations of misconduct or fraud by any provider.
