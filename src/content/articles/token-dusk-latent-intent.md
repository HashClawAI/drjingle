---
title: "词元的黄昏：从计价单位到潜空间意图"
description: "词元可能像早期互联网按KB计费一样退居后台：单价暴跌、分词器被绕过、推理与多智能体协作开始直接交换潜空间意图；语言更像留给人类的接口层。"
pubDate: 2026-07-27
category: research
tags: ["词元", "Token", "潜空间", "多智能体", "LLMflation", "Coconut", "意图中心"]
articleSlug: "token-dusk-latent-intent"
locale: zh
draft: false
---

早期互联网按流量计费时，KB 一度像硬通货。带宽变便宜以后，没人再把“几KB”挂在嘴边——计费逻辑转向内容、服务和订阅，流量沉成看不见的实现细节。

过去三年，生成式 AI 产业把“词元”（token）推到了几乎同样的位置：它是工程切分单位，也是报价单上的核心栏目，还常被写成叙事主角。问题是：词元会像 KB 一样退场，还是会长期占据舞台中央？

另一条更激进的线索同时出现。部分研究认为，自然语言、乃至以词元承载的推理过程，未必是智能体（agent）运作的必要形式；机器之间真正传递和结算的，或许是潜空间里的“意图”（intent），语言只是偶尔露出来的表层界面。

把这两类主张放回已发表文献里看，证据并不对称，但方向已经够清楚。

![词元的黄昏：离散计价单位溶解进连续潜空间意图](/images/articles/token-dusk-latent-intent/cover.png)

## 词元价格暴跌，并不等于词元消失

把词元价格类比为早期带宽计费，并不只是修辞。风险投资机构 a16z 比较过大模型推理成本与 PC 算力革命、以及互联网泡沫时期带宽成本的下降速度，发现同等性能的推理成本约三年下降千倍，年化降幅达到约 10 倍量级，快于当年芯片成本与带宽成本的降速。他们称之为 [LLMflation](https://a16z.com/llmflation-llm-inference-cost/)。[Epoch AI](https://epoch.ai/data-insights/llm-inference-price-trends) 的后续数据也显示，推理价格在快速下降，但不同任务之间并不均匀。

说服力不只来自数字巧合，而在于相似的产业结构：稀缺时，计量单位会成为主角；商品化之后，计费会从“按用量”转向“按结果、按服务、按订阅”。词元报价也在变——从单纯的“每百万词元”，叠加输出词元与推理型“思考词元”的区分，再到按结果计费的 API，以及面向智能体的按调用/按任务计费。

但有一个重要反例：单位词元成本下降的同时，不少公司总体推理支出仍在上升。原因很现实——推理型模型会生成大量内部“思考词元”，应用层消耗增速又超过单价降幅。这是典型的杰文斯悖论（Jevons paradox）：更便宜会诱发更多使用。单价下降，不等于“词元”这个范畴即将消失。两者是不同命题。

## 分词器正在被绕过

比价格更值得盯着的，是词元赖以存在的技术基础：子词分词（subword tokenization，如 BPE）。固定词表在多语言、噪声输入和长尾分布上会引入效率损失与系统性偏差；高资源语言往往切得更细，低资源语言则常被拆成缺乏语义的碎片。这类问题在马拉雅拉姆语等语言上已有详细实证。

针对这些缺陷，一批“无分词器”（tokenizer-free）架构相继出现：ByT5 与 CANINE 直接在原始字节/码位上建模；MegaByte 用多尺度分块处理百万字节级序列；Meta 的 [Byte Latent Transformer（BLT）](https://ai.meta.com/research/publications/byte-latent-transformer-patches-scale-better-than-tokens/) 依据字节熵动态划分区块，在多项基准上可匹配甚至超越基于分词的模型，尤其在字符级理解与噪声鲁棒性上更强。

这说明词元并不是通往语言建模的唯一关卡，而是特定工程权衡下的产物。算力与架构条件变化时，这一层可以被压缩或替换——很像 KB：它曾是资源约束与协议设计共同塑造的计量单元，不是被建模对象本身固有的属性。

## 潜空间里的思维链

如果说分词演进只是动摇了词元的“计量单位”角色，那么 Meta FAIR 团队 2024 年提出的 [Coconut（Chain of Continuous Thought）](https://arxiv.org/abs/2412.06769) 则直接挑战词元作为“推理载体”的必要性。

研究指出，思维链（CoT）里的多数词元主要用于维持文本连贯，真正决定成败的关键步骤反而因被迫压进离散词表而遭遇表达瓶颈。Coconut 的做法是：把模型最后一层隐藏状态直接当作下一步的输入嵌入，不先解码成具体词元，让推理在不受语言词表约束的连续潜空间中进行。

实验显示，它能在若干逻辑推理任务上以更少计算实现更高准确率，并出现类似广度优先搜索的行为——潜状态可以同时编码多条候选路径，而不必像离散词元那样过早锁定单一答案。

![离散词元链条溶解为连续潜空间推理场](/images/articles/token-dusk-latent-intent/latent-reasoning.png)

*示意：自然语言词元更像为人类可读性支付的“翻译税”；真正的推理步骤可以在连续潜空间中展开。*

这为“纯推理环节未必需要自然语言”提供了目前最直接的实证支持。当然，也有研究者指出训练不稳定、模式切换开销等问题；结论主要建立在受控逻辑推理基准上，尚不能一概推广到所有任务。

## 智能体之间，开始直接交换隐藏状态

“agent 最终是意图 latent”这句话，在多智能体系统研究里能找到更直接的对应。传统 LLM 智能体协作依赖自然语言作通用媒介——每个智能体先把内部推理“翻译”成文本，再让其他智能体阅读。这会带来三类结构性缺陷：推理成本高、离散化造成不可逆信息损失，以及自然语言本身的歧义与冗余。

被称为“潜通信”（latent communication）的研究提出，智能体可以直接交换连续表示——嵌入、隐藏状态或 KV 缓存——而不必先解码为文本。例如 [LatentMAS](https://arxiv.org/abs/2511.20639) 让智能体通过最后一层隐藏状态做自回归“潜思维”，并维护共享潜工作记忆；[Interlat](https://arxiv.org/abs/2511.09149) 直接传递隐藏状态作为“思维”表征；也有工作用 [KV 缓存差量（state delta）](https://arxiv.org/abs/2506.19209) 增强而非取代自然语言，或像 [HyLaT](https://arxiv.org/abs/2605.25421) 那样把“精确但需人类可读”的关键信号与“密集可压缩”的中间推理分到不同通道。

这些工作共同指向一个方向：在纯粹的机器对机器协作里，自然语言词元未必是最优协议；它之所以被保留，常常是因为对人类可解释、可审计。

![多智能体以连续潜表示交换意图，语言退为可选外壳](/images/articles/token-dusk-latent-intent/latent-comms.png)

*示意：潜通信提高信息保真度与效率，但也会牺牲透明度；语言更像留给人类的接口层。*

代价同样被文献承认：潜通信牺牲透明度与可解释性，对需要人类监督、审计或安全对齐的场景构成挑战。[LCGuard](https://arxiv.org/abs/2605.22786) 等研究已经开始讨论 KV 缓存共享可能带来的信息泄露与不可观测安全风险。更准确的表述或许不是“语言将被取代”，而是“语言正在从默认底层协议，退居为对人类保留的可选接口层”。

## 语言本身是不是太薄了

图灵奖得主 Yann LeCun 近年反复强调：大语言模型主要从文本学习，而文本相对人类感知世界所依赖的多模态、具身经验，只是一个“稀薄切片”。他常用数据体量作类比：一个大模型训练所用文本大约是 10¹⁴ 字节量级，人类儿童在生命最初几年通过视觉系统摄入的感官数据便已与此相当；人类智能显然建立在大规模多模态经验之上，而非纯文本。

他据此认为，单纯扩大文本训练规模不足以抵达通用智能，并推动以视频与感官数据为基础、在抽象表征空间中预测的“世界模型”路线（如 JEPA）。如果语言对构建完整世界理解存在结构性局限，那么以语言词元作为智能体协作与计价基础的现有范式，更可能是当前技术可得性造成的路径依赖，而非长期终局。

也应指出：LeCun 的论断在学界存在争议，包括对其思想原创性的批评，以及“世界模型与语言模型更可能互补而非替代”的看法。目前并无共识。

## 区块链里的“意图”，给了平行证据

较少被放进同一框架、但逻辑高度相关的，是区块链系统中“意图中心”（intent-centric）架构的兴起。传统交易模型要求用户明确指定每一步执行路径；意图中心架构——如 [Anoma](https://anoma.net/blog/an-introduction-to-intents-and-intent-centric-architectures)、ERC-7683 等——让用户只声明期望达成的结果，具体路径交由“求解器”（solver）撮合与结算。核心主张很直白：意图，而非操作序列，才是应用层真正的一级原语。

面向智能体的支付协议，如 [x402](https://www.x402.org/x402-whitepaper.pdf)，则把“按词元计价”继续延伸为“按资源调用/按任务结果计价”的机器对机器结算层，使智能体可以在无人干预下为完成某个意图自主完成一连串支付。

两条线索从不同方向收敛：对机器协作而言，重要的是“想要达成什么”这一潜层表示与结算结果；经由何种语言、何种执行路径抵达，正在变成可被压缩、可被自动化处理的中间层。

## 更精确的判断

把证据拼在一起，比“词元将被淘汰”或“语言毫无用途”更准确的说法是：

词元作为**计价单位**，确实呈现出与互联网带宽/流量 KB 相似的商品化轨迹——单价快速下降、计费从“用量”转向“结果”；但总支出可能因用量激增而不降反升，不宜直接类比为“消失”。

词元作为**分词技术产物**，正被无分词器架构从底层挑战；这一层完全可能在未来模型中被压缩或隐藏，但这更接近实现细节迭代，而非语言本身失去价值。

词元作为**推理载体**，在 Coconut 等研究中已显示出并非计算上必需；潜空间可能在纯推理效率上更优，但外部效度仍待更广泛验证。

在**智能体间协作**层面，已有相当扎实的研究表明潜通信在效率与信息保真度上可以优于自然语言——这是“agent 最终是意图 latent”目前最有力的技术支持；同样有研究指出它会牺牲可解释性与安全可审计性，语言更可能保留为人机接口层。

来自区块链意图中心架构的平行证据，进一步佐证了“意图”作为机器协作一级原语的独立发展动力。两条技术路径并不相同，收敛更多是结构性的。

因此，较审慎的结论是：词元不会在短期内消失，但它作为“必要的、显性的、按量计价的”通用媒介的地位，正同时受到经济压力（成本商品化）、技术压力（无分词器架构、潜空间推理与通信）和哲学压力（语言是否足以承载智能）三方面侵蚀。语言与词元更可能像早期互联网的 KB，从主角退居为仍然存在、却不再被特别关注的底层协议层；智能体之间真正被优化、结算与谈判的对象，将越来越多地表现为不经过完整语言编码的意图与结果。

这一趋势已有相当数量的预印本与产业分析支持，但仍处早期。关于“世界模型优于语言模型”“潜通信全面优于文本协作”的强主张，学界仍有实质分歧，不宜视为定论。文中部分 arXiv 条目为近年预印本，尚未完整同行评审；涉及公开人物观点的综述，建议对照本人原始访谈或论文核实。

## 主要参考文献

1. Andreessen Horowitz. [Welcome to LLMflation: LLM Inference Cost Is Going Down Fast](https://a16z.com/llmflation-llm-inference-cost/). a16z, 2024.
2. Epoch AI. [LLM Inference Prices Have Fallen Rapidly but Unequally Across Tasks](https://epoch.ai/data-insights/llm-inference-price-trends). 2024.
3. Pagnoni, A. et al. Byte Latent Transformer: Patches Scale Better Than Tokens. Meta AI, 2024.
4. Xue, L. et al. ByT5: Towards a Token-Free Future with Pre-trained Byte-to-Byte Models. 2022.
5. Yu, L. et al. MEGABYTE: Predicting Million-byte Sequences with Multiscale Transformers. 2023.
6. Hao, S. et al. [Training Large Language Models to Reason in a Continuous Latent Space (Coconut)](https://arxiv.org/abs/2412.06769). arXiv:2412.06769, 2024.
7. [LatentMAS: Latent Collaboration in Multi-Agent Systems](https://arxiv.org/abs/2511.20639). arXiv:2511.20639, 2025.
8. [Enabling Agents to Communicate Entirely in Latent Space (Interlat)](https://arxiv.org/abs/2511.09149). arXiv:2511.09149, 2025.
9. [Augmenting Multi-Agent Communication with State Delta Trajectory](https://arxiv.org/abs/2506.19209). arXiv:2506.19209, 2025.
10. [HyLaT: Efficient Multi-Agent Communication via Hybrid Latent-Text Protocol](https://arxiv.org/abs/2605.25421). arXiv:2605.25421, 2026.
11. [Beyond Tokens: A Unified Framework for Latent Communication in LLM-based Multi-Agent Systems](https://arxiv.org/abs/2606.05711). arXiv:2606.05711, 2026.
12. [LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems](https://arxiv.org/abs/2605.22786). arXiv:2605.22786, 2026.
13. LeCun, Y. 相关访谈与公开演讲综述，见 Futura-Sciences（2025）、Bloomberg *The Close* 访谈（2026）等报道。
14. Marcus, G. The False Glorification of Yann LeCun. Substack, 2026.（批评视角）
15. Coinbase Developer Platform. [x402: An Open Standard for Internet-Native Payments](https://www.x402.org/x402-whitepaper.pdf). Whitepaper, 2025.
16. Anoma Foundation. [An Introduction to Intents and Intent-Centric Architectures](https://anoma.net/blog/an-introduction-to-intents-and-intent-centric-architectures). 2023.
17. [Agent-to-Agent Finance: Blockchain Payments and Trust Infrastructure for Autonomous AI Agents](https://arxiv.org/abs/2607.00245). arXiv:2607.00245, 2026.
