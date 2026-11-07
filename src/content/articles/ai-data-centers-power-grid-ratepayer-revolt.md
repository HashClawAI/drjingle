---
title: "还没通电的 AI 数据中心，已经先涨了六千万人的电费单"
description: "北美最大区域电网 PJM 的容量电价在两年内从 28.92 美元飙升至 329.17 美元/兆瓦·日。科技巨头跨站点重复申报的并网需求，正通过容量拍卖机制将 147 亿美元备用电源成本提前转嫁给普通家庭，并引发全美 13 州至少 50 项地方规制反击。"
pubDate: 2026-11-07
updatedDate: 2026-11-07
category: insights
tags:
  - "AI Infrastructure"
  - "Data Centers"
  - "Power Grid"
  - "PJM Interconnection"
  - "FERC"
  - "Energy Policy"
locale: zh
articleSlug: "ai-data-centers-power-grid-ratepayer-revolt"
draft: false
---
在芯片产能与算法架构之外，一张由普通家庭分摊的电网容量账单，正在卡住百亿参数模型的算力咽喉。科技巨头用同一份建设计划向十几个变电站同时递交并网申请，尚未浇筑混凝土地基的“幽灵负荷”已经把北美最大区域电网 PJM Interconnection 的容量电价推高了十倍。
## 一封来自俄亥俄州的电网证词

2026 年 2 月 13 日，美国电力公司俄亥俄州分公司（AEP Ohio）向俄亥俄州公用事业监管机构提交了一份[令能源市场哗然的公开听证证词](https://www.globaldatacenterhub.com/p/unbuilt-data-centers-electric-bills)。
AEP Ohio 在监管证词中披露，在过去一年多的时间里，AEP Ohio 收到了来自 50 多家客户的并网咨询，涉及超过 90 个选址，申请接入的总电力负荷超过 30,000 兆瓦（MW）。
要理解 30,000 兆瓦的分量，只需看一眼俄亥俄州中部的电网基线：即便在盛夏空调全开的用电最高峰，AEP Ohio 辖区内所有工厂、商场、医院与数百万户家庭加在一起的峰值负荷，也不过在[ 8,000 至 10,500 兆瓦之间](https://www.globaldatacenterhub.com/p/unbuilt-data-centers-electric-bills)。纸面上的新增数据中心并网申请，相当于在原有电网之上凭空再造三个俄亥俄中部电网。
真正棘手的问题藏在“50 家客户、90 个选址”这组比例里。科技巨头与第三方超大规模数据中心开发商为了抢夺工期，普遍采取“广撒网”策略：一家公司计划落地一座园区，却同时向不同县市的四五个变电站递交全额并网申请，哪里审批最快就去哪里动工。
只是区域电网的容量拍卖机制并不知道哪些并网申请只是备胎。只要数据中心并网申请被写进区域负荷预测模型，电网运营商就必须提前两年在容量拍卖市场上买下足够的备用发电容量，并把这笔数十亿美元的账单平摊给辖区内的每一位普通电表用户。
## 从 28.92 美元到 329.17 美元的价格跳升

[PJM Interconnection](https://insidelines.pjm.com/pjm-capacity-auction-procures-138318-mw-of-generation-resources-as-work-continues-to-address-growing-electricity-demand/) 是北美最大的区域电网运营商，覆盖美国东部与中西部 13 个州及华盛顿特区，服务超过 6,500 万人口。在 PJM 电网辖区内，数据中心引发的价格风暴已经从预测模型变成了居民的现实账单。
PJM Interconnection 的运作依赖一套名为“容量市场（Capacity Market）”的远期备用保险机制。发电厂不仅靠日常卖电获得收入，还要通过每年的容量拍卖获得一笔固定补贴，承诺在极端严寒或酷暑的用电高峰期随时待命发电。预期用电负荷的增长速度一旦远超电厂建设速度，PJM 容量出清价格就会沿着陡峭的供需曲线垂直拉升。
翻开 [PJM Interconnection 的历年容量拍卖结算档案](https://www.globaldatacenterhub.com/p/unbuilt-data-centers-electric-bills)，能看到一条清晰的跃升轨迹：
* 2024/2025 交付年度，PJM 大部分区域的容量出清价格仅为 **28.92 美元/兆瓦·日**，全网容量总成本约 [22 亿美元](https://www.utilitydive.com/news/pjm-interconnection-capacity-auction-vistra-constellation/722872/)；
* 2025/2026 交付年度（2024 年 7 月拍卖），PJM 容量出清价格飙升逾 9 倍，达到 [269.92 美元/兆瓦·日](https://www.igs.com/energy-resource-center/energy-101/capacity-auction-results--what-it-means-for-your-business-s-electric-bill)，全网电力消费者承担的容量账单暴涨至 [147 亿美元](https://www.utilitydive.com/news/pjm-interconnection-capacity-auction-vistra-constellation/722872/)；
* 2026/2027 交付年度（2025 年 7 月拍卖），PJM 容量出清价格进一步冲破历史极值，直接触及美国联邦能源管理委员会（FERC）批准的临时价格上限 [329.17 美元/兆瓦·日](https://www.igs.com/energy-resource-center/energy-101/capacity-auction-results--what-it-means-for-your-business-s-electric-bill)。
PJM 独立市场监测机构 Monitoring Analytics 在[针对 PJM 容量市场的专项评估报告](https://www.utilitydive.com/news/data-centers-pjm-capacity-auction-market-monitor/801780/)中指出，现有及预测的数据中心负荷增长，是推高 PJM 容量价格的首要驱动因素。在上一轮容量拍卖中，[数据中心负荷单一项就贡献了约 40% 的 PJM 容量成本涨幅](https://introl.com/blog/pjm-rate-shock-100-billion-data-center-electricity-2026)。即便在 2026 年前八个月的日常批发电力市场中，[数据中心负荷也已占到 PJM 电力批发总成本的 9%](https://www.utilitydive.com/news/data-center-load-pjm-wholesale-market/828917/)。
在弗吉尼亚州、马里兰州、宾夕法尼亚州和俄亥俄州，普通家庭还没有享受到人工智能大模型带来的收入增长，每月的零售电费账单就已经先一步上涨了 15% 到 30%。
## “核电直连”捷径为何被联邦监管叫停

面对地面电网排队长达五到七年的并网审批，资金充裕的云巨头曾试图绕开公共电网，直接把数据中心建在核电站隔壁，拉一根专线实现 “表后供电（Behind-the-Meter）”。
最具代表性的核电直连交易发生在宾夕法尼亚州。亚马逊云科技（AWS）斥资收购了紧邻 [Talen Energy 旗下 Susquehanna 核电站](https://www.utilitydive.com/news/talen-amazon-aws-susquehanna-nuclear-data-centert/750440/)的数据中心园区，并签署长期协议，计划直接消耗 Susquehanna 核电站最高可达 [1.9 吉瓦（GW）](https://www.utilitydive.com/news/talen-amazon-aws-susquehanna-nuclear-data-centert/750440/)的基荷电力。
从硅谷云厂商的视角看，这套零碳供电方案近乎完美。Talen Energy 核电站获得了高于市场批发价的长期稳定买家，AWS 算力集群拿到了全天候不间断的核能电力，且无需等待漫长的公共输电线路升级。
公用事业公司美国电力（AEP）与 Exelon 随即向美国联邦能源管理委员会（FERC）提起正式抗议，反对这种“核电私有化截留”。Susquehanna 核电站原本是向 PJM 公共电网输送基荷电力的主力电源。如果把上千兆瓦的核电从公共池子里直接抽走专供亚马逊 AWS，PJM 公共电网就会立刻出现同等规模的基荷缺口，迫使全网启动更昂贵的燃气调峰电厂，同时让表后数据中心逃避了本应分摊的公共输电网维护费用。
[美国联邦能源管理委员会（FERC）最终驳回了 Talen Energy 与亚马逊 AWS 的修订版并网协议（ISA）](https://www.utilitydive.com/news/ferc-interconnection-isa-talen-amazon-data-center-susquehanna-exelon/731841/)，裁定表后核电直连模式可能危及电网整体可靠性并将巨额输电成本转嫁给普通纳税人。尽管 Talen Energy 与 AWS 随后将合约重构为[经过公共电网计量的表前供电架构（Front-of-the-Meter）](https://www.utilitydive.com/news/talen-amazon-aws-susquehanna-nuclear-data-centert/750440/)并继续推进诉讼博弈，科技巨头原本幻想只要买下电厂就能脱离社会基础设施约束，FERC 的监管裁决彻底敲碎了这种念头。
## 20 亿加仑饮用水与郊区后院的冷却塔

把社区冲突推向白热化的，除了居民电费单，还有市政水龙头和郊区土地红线。
根据美国能源部下属[劳伦斯伯克利国家实验室（LBNL）发布的《美国数据中心能源使用报告（2024/2025 更新版）》](https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf)，美国 AI 相关服务器的年耗电量已从 2017 年的 2 太瓦时（TWh）激增至 2023 年的 [40 TWh](https://ocp-all.groups.io/g/Sustainability/topic/lbnl_2024_united_states-data/111152191)。LBNL 模型预测，到 2028 年，全美数据中心总耗电量预计将达到 [325 至 580 TWh](https://eta-publications.lbl.gov/publications/united-states-data-center-energy-2025)，占全美总发电量的 6.7% 至 12%。
每一度输入 GPU 集群的电能，最终都会几乎 100% 转化为需要被冷却系统带走的热量。
在全球数据中心密度最高的北弗吉尼亚地区（涵盖 Loudoun、Prince William、Fairfax 和 Fauquier 四县，聚集了超过 300 座运营中的数据中心），[环境与能源研究所（EESI）汇总的公共水务统计数据显示](https://www.eesi.org/articles/view/data-centers-and-water-consumption)，北弗吉尼亚数据中心在 2023 年消耗了近 20 亿加仑的水资源，较 2019 年激增 63%。仅在被称为“全球数据中心之都”的弗吉尼亚州 [Loudoun 县](https://www.loudoun.gov/6408/Data-Centers-The-Loudoun-Story)，约 200 座数据中心在 2023 年一年就消耗了[约 8.99 亿加仑市政饮用水](https://securewater.illinois.edu/data-center-expansion-in-virginia-closing-critical-gaps-for-informed-water-planning-and-permitting/)，较 2019 年增长约 250%。
地方政府曾长期将数据中心视为“黄金税源”：数据中心不需要学区学位，不增加警力负担，就能为郡县贡献数以亿计的房产税与设备税。但在过去两年里，随着单座 AI 数据中心园区的功率从 30 兆瓦膨胀到 500 兆瓦甚至 1 吉瓦，无窗的数据中心厂房开始直接贴着郊区住宅区的后院拔地而起，伴随而来的是 24 小时低频冷却风扇噪音、成排的高压输电铁塔，以及干旱季节与农业和市政争水的刚性矛盾。
根据 [Ballotpedia 的专项追踪统计](https://ballotpedia.org/Data_center-related_ballot_measures,_2026)，仅在 2026 年，全美就有 13 个州（涵盖加利福尼亚、得克萨斯以及俄亥俄、密歇根等中西部与东部多州）涌现出[至少 50 项针对数据中心开发的地方提案与规制行动](https://ballotpedia.org/Data_center-related_ballot_measures,_2026)。原本分属不同阵营的郊区房主、农场主与环保组织结成了基层同盟，迫使数十个郡县出台数据中心土地冻结令、取消税收减免，或强制要求科技巨头全额自建变电站与闭环水冷设施。
## 算力撞上二十年停滞的老旧电网

北美电网的脆弱积累了二十年，AI 是最后那根以十倍速压下来的稻草。
在过去二十年里，美国电力总需求几乎处于零增长的停滞期。各州公用事业公司在去煤化进程中批量关停了数十吉瓦的传统燃煤火电机组，而新增的风电、光伏与储能项目却被卡在破碎的跨州输电审批与供应链瓶颈里。在 PJM Interconnection 等区域电网，一个新能源发电项目从申请并网到真正商业化发电，平均并网等待时间已超过五年。
劳伦斯伯克利国家实验室（LBNL）的模型测算中，[2028 年全美数据中心耗电量 325 TWh 与 580 TWh 的预测上下限相差近一倍](https://eta-publications.lbl.gov/publications/united-states-data-center-energy-2025)，留出了巨大的不确定性区间。如果算力中心全面普及闭环液冷、GPU 芯片能效比持续跃升，且各州公用事业监管机构强制推行“申请即交大额不可退保证金（Take-or-Pay）”以挤掉重复申报的“幽灵负荷”，实际电网冲击将远低于极端预测值。
但无论硬件能效如何演进，旧的电网成本分配契约已经彻底终结。过去十年，互联网公司习惯了在边际成本近乎为零的数字世界里狂飙。如今 AI 进入重资产物理基建周期，每一万张 GPU 加速卡的背后，都连着真实世界里的铜缆、燃气涡轮机与邻居家的电表。谁来为下一个百吉瓦的电网买单，正在决定未来十年算力帝国的真正边界。
## 核心指标与证据速查表

| 评估维度 | 关键指标 / 实测数值 | 时间与对比基线 | 权威数据来源 |
| :--- | :--- | :--- | :--- |
| PJM 容量拍卖电价 | **28.92 → 269.92 → 329.17 美元/兆瓦·日** | 2024/25 至 2026/27 交付年度（两年暴涨逾 10 倍） | [PJM Interconnection 拍卖记录](https://www.globaldatacenterhub.com/p/unbuilt-data-centers-electric-bills) |
| PJM 容量市场总账单 | **22 亿美元 → 147 亿美元**（数据中心贡献约 40% 涨幅） | 2025/2026 交付年度 vs 2024/2025 交付年度 | [Utility Dive / Monitoring Analytics](https://www.utilitydive.com/news/pjm-interconnection-capacity-auction-vistra-constellation/722872/) |
| 俄亥俄州中部并网申请 | **超过 30,000 MW**（来自 50+ 客户、90+ 选址） | 对比 AEP Ohio 现有夏峰负荷 **8,000–10,500 MW** | [AEP Ohio 2026年2月监管证词](https://www.globaldatacenterhub.com/p/unbuilt-data-centers-electric-bills) |
| 全美数据中心耗电预测 | **325 至 580 TWh**（占全美总发电量 **6.7%–12%**） | 2028 年预测区间（AI 服务器由 2017 年 2 TWh 升至 2023 年 40 TWh） | [美国能源部劳伦斯伯克利国家实验室 (LBNL)](https://eta-publications.lbl.gov/publications/united-states-data-center-energy-2025) |
| 北弗吉尼亚数据中心耗水 | 四县总耗水 近 20 亿加仑；Loudoun 县饮用水 8.99 亿加仑 | 2023 年实测（较 2019 年分别增长 63% 与 250%） | [EESI](https://www.eesi.org/articles/view/data-centers-and-water-consumption) / [伊利诺伊大学水务研究](https://securewater.illinois.edu/data-center-expansion-in-virginia-closing-critical-gaps-for-informed-water-planning-and-permitting/) |
| 全美地方规制与公投 | **13 个州至少 50 项**地方数据中心提案 | 2026 年全年追踪（82% 集中于 11 月投票） | [Ballotpedia 专项追踪](https://ballotpedia.org/Data_center-related_ballot_measures,_2026) |
## FAQ

### 为什么还没有建成的 AI 数据中心会导致普通家庭电费上涨？

区域电网（如北美最大的 PJM Interconnection）采用远期容量拍卖机制，根据未来两到三年的用电负荷预测提前采购备用发电容量。由于科技巨头普遍在多个变电站重复递交全额并网申请（即“幽灵负荷”），推高了电网的远期负荷预测与容量出清价格，而容量拍卖成本会按规定分摊至辖区内所有零售电表用户。
### 为什么美国联邦能源管理委员会（FERC）会驳回亚马逊与 Talen Energy 的核电站直连协议？

2024 年 11 月，FERC 驳回了 Talen Energy 旗下宾夕法尼亚州 Susquehanna 核电站向亚马逊 AWS 数据中心提供增容“表后直连供电（Behind-the-Meter）”的修订版并网协议。监管机构与公用事业公司（AEP、Exelon）指出，将原本向公共电网供电的存量核电机组划归单一私营数据中心专用，会造成公共电网基荷电力缺口，迫使全网启用高价调峰电源并逃避公共输电网维护费分摊。
### 到 2028 年美国数据中心预计将消耗多少电力？

根据美国能源部劳伦斯伯克利国家实验室（LBNL）发布的《美国数据中心能源使用报告》，受 AI 训练与推理服务器扩张驱动，预计到 2028 年全美数据中心年耗电量将达到 325 至 580 太瓦时（TWh），占美国总发电量的 6.7% 至 12%。
