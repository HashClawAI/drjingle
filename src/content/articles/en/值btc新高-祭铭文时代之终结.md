---
title: "At BTC's New High, Marking the End of the Inscription Era"
description: "From Ordinals and BRC-20 to Runes, Atomicals, CAT20, RGB++, and Alkanes—a builder's autopsy of Bitcoin inscription protocols: innovation, structural limits, and why the era is closing as RWA rises."
pubDate: 2026-07-06
category: insights
articleSlug: "值btc新高-祭铭文时代之终结"
locale: en
draft: false
---
## Key Takeaways

- "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."—carved in Bitcoin's genesis block, witnessing one era's beginning.
- Now, as Bitcoin hits new highs, we witness another once-glorious era's end—inscriptions and runes.
- From Ordinals' 2023 debut, BRC-20 mania, to Runes, Atomicals, CAT20, RGB++, Alkanes—Bitcoin ecosystem experienced an unprecedented "inscription revolution."
- All tried to make Bitcoin more than value storage—a platform carrying diverse asset protocols.
- When the party ends and reality shows, we face a harsh truth: inscription protocols' fundamental limits destined this beautiful tulip bubble.
- As a builder who hand-implemented each protocol's low-level implementation, I witnessed the ecosystem from sprout to explosion to today's rational return.
## One-Sentence Definition

"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."—carved in Bitcoin's genesis block, witnessing one era's beginning.

---

## Body

> Original WeChat article: https://mp.weixin.qq.com/s/dpz4DfFpjJz8nnZMZiczrQ
**Preface**
"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."—carved in Bitcoin's genesis block, witnessing one era's beginning.
Now, as Bitcoin hits new highs, we witness another once-glorious era's end—inscriptions and runes.
From Ordinals' 2023 debut, BRC-20 mania, to Runes, Atomicals, CAT20, RGB++, Alkanes—Bitcoin ecosystem experienced an unprecedented "inscription revolution."
All tried to make Bitcoin more than value storage—a platform carrying diverse asset protocols.
When the party ends and reality shows, we face a harsh truth: inscription protocols' fundamental limits destined this beautiful tulip bubble.
As a builder who deeply participated in inscription protocol development, hand-implementing each protocol's low-level implementation, I witnessed the ecosystem from sprout to explosion to today's rational return.
This article connects multiple inscription protocols' innovations and limits—why this once-dominant track quickly reached today's endpoint.
## 1. Inscription Protocol Evolution Chain

### 1.1 Ordinals: Opening the Inscription Era

The first key to Bitcoin's "inscription era." Number each satoshi, use commit-reveal to store arbitrary data on-chain.
UTXO model meets NFT concept—satoshi birth order as identifier, each sat carries unique content.
Details: [Decoding Bitcoin Ordinals Protocol and BRC-20 Standard](https://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484156&idx=1&sn=cefc374edbe3478817fe2e864ed85649&scene=21#wechat_redirect)
Technically elegant—native Bitcoin compatibility, permanent data storage.
Limit: "just writing data"—couldn't satisfy market's intense demand for BTC + other asset "issuance."
### 1.2 BRC-20: Commercial Breakthrough and Consensus Trap

On Ordinals' foundation, BRC-20 standardized content format—making static inscriptions "alive."
Defined deploy-mint-transfer lifecycle—abstract data became tradable assets. First fungible token issuance on Bitcoin—satisfying the market's core issuance demand, igniting the ecosystem.
But account model fundamentally conflicts with Bitcoin UTXO—users must inscribe transfer inscription then actually transfer—multiple transactions per transfer.
Deeper flaw: binds "some data" but cannot share Bitcoin's consensus power. Once off-chain indexers stop supporting, all "assets" instantly become meaningless garbage.
Repeated-satoshi events exposed fragility—when multiple assets on one sat, protocol parties collectively changed standards—consensus actually controlled by minority. Later "single-step transfer" "optimizations" didn't touch core pain points but brought platform migration costs.
Two years: inscription designers stuck in "issuance" alone—no deep thinking on post-issuance use cases.
### 1.3 Atomicals: UTXO-Native Correction and Disconnect

Addressing BRC-20 UTXO compatibility: asset quantity directly maps to sat count in UTXO; proof-of-work for fair minting.
Native UTXO compatibility—asset transfer = sat transfer—partially solved BRC-20 cost/interaction issues.
But complexity cost: transfer rules extremely complex—precise UTXO split/merge calculations, frequent asset burns—players afraid to operate.
PoW exposed fairness problems—whales with hashrate finished minting first—contradicting "fair launch" narrative.
Product iterations showed team misunderstanding user needs—half-dyed assets and complex features consumed resources, minimal UX improvement, high institutional tool refactor costs.
Long-awaited AVM arrived late—market already turned—missed best window.
### 1.4 Runes: Official Authority's Elegant Compromise and Application Void

Ordinals founder Casey's "official" issuance protocol—learned from predecessors. OP_RETURN storage avoids witness data abuse; elegant encoding and UTXO model balance complexity and UX.
More direct storage, efficient encoding—significantly lower transaction costs.
Details: [BTC Halving Imminent—Runes Protocol Design and Limits](https://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484287&idx=1&sn=8bbd2f5a515db1311803b2e040cdf23a&scene=21#wechat_redirect)
Runes fell into inscription ecosystem's fundamental trap—beyond token issuance, no special design.
Why does market need tokens obtainable with zero barrier? After obtaining, besides secondary market selling, what real meaning? Pure speculation mode limits protocol lifespan.
But OP_RETURN applications opened the door for subsequent protocols.
### 1.5 CAT20: On-Chain Verification Ambition and Reality Compromise

Achieved true on-chain verification via Bitcoin script. On-chain stores state hashes; recursive scripts ensure all transactions follow same constraints—claiming "no indexer needed"—inscription protocols' holy grail.
But CAT20 "on-chain verification": verification logic runs on-chain but state data stored as hashes in OP_RETURN—hashes can't reverse—operation still needs off-chain indexers for readable state.
Design allows non-unique token names/symbols—same-name asset chaos. Early high-concurrency UTXO contention made initial minting experience terrible.
Hack attack event: internal data connecting two numbers lacked separator—"1" + "234" vs "12" + "34" same hash—forced protocol upgrade; delayed upgrade made market forget initial enthusiasm.
CAT20 shows: even technical breakthroughs can't be too far ahead of user understanding—or no market acceptance.
Hacker threat always hangs over projects like Damocles' sword—humility required.
### 1.6 RGB++: Technical Idealism and Ecosystem Dilemma

CKB's isomorphic binding via dual-chain architecture addresses Bitcoin functional limits. CKB Turing completeness validates Bitcoin UTXO transactions—most advanced smart contract verification among inscription protocols—the "technical pearl."
Ideal vs. reality gap: dual-chain complexity, high learning cost, institutional onboarding barriers.
Project team relatively weak—simultaneously pushing chain (CKB) and new protocol (RGB++)—couldn't attract enough market attention.
In a field dependent on network effects and community consensus—"critically acclaimed, poorly attended."
### 1.7 Alkanes: Final Sprint and Resource Scarcity

Off-chain indexer + smart contract protocol—fuses Ordinals and Runes designs—arbitrary smart contracts on Bitcoin. Last sprint toward traditional smart contract platforms.
Theoretically arbitrary complex contract logic. Timed with BTC upgrade lifting 80-byte OP_RETURN limit.
Reality broke the ideal: complex contracts off-chain bring huge performance bottlenecks; early self-built indexers repeatedly crashed; custom contract deployment needs ~100KB on-chain—far exceeding traditional chain costs; contracts still depend on indexer consensus; high cost serves only few high-value scenarios; high-value scenarios don't trust generic indexers. Even with Unisat backing, market didn't buy in. Proposed one year earlier under different timing—perhaps different outcome.
## 2. Fundamental Dilemma: Bitcoin Minimalism vs. Over-Design

### Technical Debt Accumulation

Clear contradictory logic: each new protocol solves predecessor problems while introducing new complexity.
From Ordinals' elegant simplicity to subsequent technical pile-on—for differentiation, all increased complexity until players must learn jargon and constantly guard against risk.
All attention on issuance platform alone—why not choose lower cost, easier control, more pump potential, better platform mechanisms elsewhere?
Chewing same topic brings user fatigue.
### Resource Scarcity Vicious Cycle

Root cause of resource poverty: Bitcoin system's centralization and fair launch dynamics—lack of institutional incentives; platforms without advantage won't over-invest.
Compared to miner block rewards, running indexers is pure cost—without "miner" reward distribution, nobody solves tech and ops problems.
### Speculation vs. Real Demand

Repeated user education shows: off-chain protocols' security ≠ Bitcoin consensus. Market cooling not accidental—reflects fundamental problem: **they solve speculation demand, not real demand.**
Successful blockchain protocols solve real problems—consensus, function, performance all matter; inscription protocols contributed almost zero—explaining unsustainable heat.
## 3. RWA Era Transition: From Dream Multiple to Market Share

### Market Maturity

Users through multiple bull-bear cycles cherish attention—a precious resource.
No longer blindly trust Twitter KOL and discourse-monopoly communities; no longer whitepaper "consensus cannon fodder."
Issuance platform barriers low—"low-hanging fruit" picked. Industry shifting from token issuance to real application scenarios.
Warning: if RWA also becomes pile of issuance platforms, opportunity will come and go fast.
### Return to Value Creation

Inscription-era innovation often "show-off tech"—cleverness over utility. New era logic: from "dream multiple" to "market share"—network effects from user word-of-mouth.
Opportunity belongs to teams pursuing product-market fit—real user needs, cash flow, business models.
## Closing: Return to Rationality and Restraint

Early on, everything in macro view seems correct and therefore just.
Calm reflection: inscription era exploration and setbacks provide valuable lessons for healthy industry development.
Bitcoin at new highs—we should be proud of this great innovation. But technology has inner laws—not all innovation succeeds, not all bubbles worthless.
Inscription protocols' rise and fall teach: innovation must rest on solid technical foundation and real market demand. Speculation fever and excessive tech showmanship—if misaligned with market conditions (institutional cognition and user understanding)—flash and fade. Trend-chasers get volume; trend-makers live long.
In this fast-changing industry, builders maintaining rationality and restraint matter more than chasing hotspots for a name and hasty release.
Market lacks patience for long polish and iteration—traditional internet "small steps fast iteration" often doesn't work here. First battle is final battle.
As I wrote two years ago:
"BRC-20 and Ordinals NFT brought much debate to Bitcoin... Though new things exploded in price, technical defects very significant: over-centralization, lack of credible verification, Bitcoin network performance limits, lack of infrastructure, lack of security."
"Though not optimistic about Ordinals before us—too monotonous for blockchain application space... but as interesting experiment, such boundary-breaking innovation can rekindle thinking."
History proves importance of rational thinking. Inscription era's end is not failure but growth.
It points direction forward and lessons for successors. In that sense, inscription protocol historical value will long exist—a important page in blockchain development history.
### [Shí Sì Jūn—Original Reviews]

- [Hackers stole money—so can Sui seize it?](https://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484544&idx=1&sn=810c661c428877efa128aedf5153614d&scene=21#wechat_redirect)
- [OKX Research | Account Abstraction 10-Year Evolution—EIP-7702 Past and Future](https://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484542&idx=1&sn=98f1c088cba6c6c1622ca7002e52051f&scene=21#wechat_redirect)
- [Looking back three years at Hong Kong carnival: frenzy, disenchantment, crossing](https://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484517&idx=1&sn=564d9084f6e4b8554a22e79baa15b40b&scene=21#wechat_redirect)
- [10,000-word report: Solana MEV landscape evolution](https://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484513&idx=1&sn=ff695734e62194e1ffe9ac4fa8707784&scene=21#wechat_redirect)
- [Super intermediary or business genius? LayerZero V1 to V2 year review](https://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484501&idx=1&sn=c927367b9e7d1b307c7dd111ee2f5c14&scene=21#wechat_redirect)
- [Deep dive: Ethereum Prague upgrade most anticipated this year](https://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484494&idx=1&sn=7a23d3748fcb34e54588fd49dc8f4ca2&scene=21#wechat_redirect)
- [Deep reveal: Who killed Telegram mini-games?](https://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484445&idx=1&sn=3a2613ba779083e95e82d59f62ea2573&scene=21#wechat_redirect)
- [From 4337 to 7702: Ethereum account abstraction past and future](http://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484371&idx=1&sn=6471a9d595efe296cfbffeff7fb0c15e&chksm=e83aa409df4d2d1fa9fb5db3685f0c7450fc0edaf63613741bc14cb6591aedb99e538279a271&scene=21#wechat_redirect)
- [Ethereum merge one year later: MEV landscape](http://mp.weixin.qq.com/s?__biz=MzIyMTQ5MTg5Mw==&mid=2247484223&idx=1&sn=1150ab17eb0e3a8c61ea51bf8fe87ea6&chksm=e83aa4e5df4d2df3d85872128f4188ea3c5b65c2fbf17c283fd046e0de1ddb3d50acf585572a&scene=21#wechat_redirect)
Message the author to discuss Web3 industry issues.
Like and follow—Shí Sì brings value from a technical perspective.
Weekly blogger—star to avoid missing latest original views!
## Conclusion

"The Times 03/Jan/2009 Chancellor on brink of second bailout for banks."—genesis block witness to one era's beginning. See sections above.
## FAQ

**What is this article mainly about?**

A: Inscription era end at BTC new highs—protocol evolution and limits.

**Ordinals section—Key points?**

A: See "1.1 Ordinals"; based on source material—not investment or legal advice.

**BRC-20 section—Key points?**

A: See "1.2 BRC-20"; based on source material—not investment or legal advice.

**Atomicals section—Key points?**

A: See "1.3 Atomicals"; based on source material—not investment or legal advice.

**Runes section—Key points?**

A: See "1.4 Runes"; based on source material—not investment or legal advice.

**Does this constitute investment advice?**

A: No. Information synthesis and commentary—consult primary sources and professionals.

---

**Last updated**: 2026-06-30
**Author**: Dr.Jingle (X [@drjingle](https://x.com/drjingle))
**Evidence boundary**: Structural GEO adaptation; facts and views from the original text only.
*Author views and information synthesis only—not investment, legal, or medical advice.*

---

**Original WeChat article**: https://mp.weixin.qq.com/s/dpz4DfFpjJz8nnZMZiczrQ
