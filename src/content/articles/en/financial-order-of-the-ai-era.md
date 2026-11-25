---
title: "The Financial Order of the AI Era: From the Tokendollar to Bitcoin’s Security Budget"
description: "Follow an AI firm's dollar from model fees to compute contracts and bitcoin reserves to see who delivers the service and who actually pays for network security."
pubDate: 2026-11-25
category: research
locale: en
articleSlug: "financial-order-of-the-ai-era"
tags: ["Tokendollar", "Compute RWA", "Bitcoin", "Machine economy"]
draft: false
---

Imagine a software firm whose agents handle its day-to-day business. On Friday it delivers a program and gets paid in dollars. It owes a model provider for the afternoon’s work, needs GPUs next quarter and has a surplus it hopes to spend in ten years. Its treasury software can issue three instructions in a second. Each buys a different promise. A supplier must accept payment today, a data centre must have machines running next quarter, and someone must still recognise the firm’s title to its savings a decade from now.

On August 25, 2026, Benjamin Jensen of the Center for Strategic and International Studies proposed a “tokendollar.” His policy essay makes the case for pricing AI services in dollars, settling payments in stablecoins and financing the infrastructure overseas. Of the software firm’s three transactions, the model bill fits most readily into that picture. The other two raise questions of delivery and property rights that a choice of currency leaves open. [Jensen’s CSIS essay](https://www.csis.org/analysis/petrodollar-tokendollar-economic-statecraft-ai-era)

## What would a million tokens entitle the buyer to receive?

The petrodollar analogy traces a historical flow of funds. Exporters sold oil for dollars and could put the proceeds back into dollar deposits and securities. Invoicing practices and deep capital markets reinforced each other. Oil was one contributor to demand for dollars. For AI, quoting a dollar price is straightforward. Specifying the product poses a harder problem.

![Deliverables, payments and financing in the oil trade and the proposed tokendollar system](/images/articles/financial-order-of-the-ai-era/trade.svg)

Suppose two models tackle the same software bug. One produces a patch that passes the tests in 10,000 tokens. The other consumes 100,000 and leaves the program broken. Its bill records more processing. The buyer has received zero completed repairs. Tokenizers vary across models, and even within a single model a token count gives the buyer no assurance of quality.

A contract for a bug fix could specify tests, a deadline and who pays for rework. A buyer could compare accepted fixes per dollar, a data centre could measure fixes per joule, and the software firm could estimate the maintenance cost each fix saves. These measures capture purchasing efficiency, energy efficiency and business value respectively. Try the same exercise for an original piece of research and agreement over acceptance becomes much harder. A futures exchange would need to establish which outputs from competing suppliers count as interchangeable at delivery.

## Yesterday’s idle GPU hour is gone

A data centre has something easier to specify. It can promise a particular GPU, memory capacity and interconnect at a named location next January, with booked hours and compensation for downtime. The model company secures capacity in advance. A lender sees a potential stream of receipts once the facility opens. The physical constraints matter. In its 2025 base case, the International Energy Agency projected that global data centres would consume about 945 TWh of electricity in 2030, counting AI and other workloads together. [IEA, Energy and AI](https://www.iea.org/reports/energy-and-ai/executive-summary)

Recording rights to physical assets or contracts on a blockchain is often called real-world asset tokenization, or RWA. To evaluate a tokenized compute contract, ask what its holder can claim when the power goes out. An equipment owner can still dispose of the machine. A customer with a reservation may claim replacement hours or compensation. An investor entitled to rental receipts bears the risk that the tenant stops paying. An on-chain record can facilitate transfer. Recovery depends on the contract, the counterparty’s solvency and the jurisdiction. Yesterday’s unused capacity has already expired, and a new chip can depress tomorrow’s rents on the old one.

The same site might attract bitcoin miners. AI clusters value steady power and fast connections. Some mines can shut down when the grid is under strain. The businesses might share substations and land, although their GPUs and dedicated mining chips perform different tasks. A sound comparison has to include the cost of interruption, the cost of connecting to the grid and actual revenue per megawatt.

## Who pays the miners after the halving?

A firm that puts part of its surplus into bitcoin assumes a different set of risks. Faster chips can raise AI output. Bitcoin’s difficulty adjustment gradually absorbs additional mining power into competition for blocks. The issuance schedule underpins scarcity. What the firm can buy in ten years still depends on market demand and on its ability to exercise control over its holdings.

Miners receive a block subsidy and transaction fees. The subsidy halves every 210,000 blocks. At a ten-minute average interval, 52,560 blocks a year would yield an annualized subsidy of 164,250 BTC at the rate set in 2024. Three halvings later the figure would be about 20,531 BTC. Block height determines the transitions, so the calendar years in the chart are approximate. Fiat revenue also depends on fees and the exchange rate.

![Annualized bitcoin block subsidies over six halving periods, measured in BTC and excluding fees](/images/articles/financial-order-of-the-ai-era/subsidy.svg)

The timing of fees matters. In a model by Miles Carlsten and colleagues, fees concentrated in particular blocks can change miners’ incentives over which block to mine next. Eric Budish examines a related economic constraint linking the recurring cost of maintaining consensus to the one-off gain from an attack. Both analyses give us reasons to study how participants are paid, even if we have no view on the future price of bitcoin. [Carlsten et al., ACM CCS](https://doi.org/10.1145/2976749.2978408) and [Budish, Quarterly Journal of Economics](https://doi.org/10.1093/qje/qjae033)

## How much of a billion-dollar security budget reaches miners?

Consider a voluntary commercial agreement. AI firms that settle in bitcoin or hold it in custody set aside revenue for services they use, including on-chain settlement, custody and key migration. Suppose annual AI services turnover reaches $5 trillion, participants account for 20% of it, and they spend 0.1% of participating turnover. Annual spending would be $1 billion. At an assumed $200,000 per BTC, that buys 5,000 BTC, about 24.4% of one full year’s theoretical subsidy within the projected 2036–2040 period. Each input is an assumption.

If only a tenth of that spending becomes incremental on-chain fees, the direct addition to miner revenue is 500 BTC, about 2.4% of the same benchmark. Custody fees can protect a client, and research funding can help change a signature scheme. Both belong on separate lines when measuring miner revenue. A pilot could track actual settlement volume, incremental fees received by miners and whether customers renew in year two. Every holder benefits from network security. Paying customers need a service valuable enough to buy again.

## Twenty years of silence and a claim of ownership

A sufficiently capable fault-tolerant quantum computer could threaten the elliptic-curve signatures Bitcoin uses. The timing remains uncertain. Draft BIP 360 proposes an output structure intended to reduce the risk of prolonged public-key exposure. Draft BIP 361 considers how migration and a sunset of legacy signatures might work once a post-quantum output type exists. The first proposal has a limited scope. The second faces decisions about implementation and consensus. [BIP 360](https://bips.dev/360/) and [BIP 361](https://bips.dev/361/)

A more radical thought experiment would put some definitively unrecoverable funds into a long-term security reserve. A pool of 500,000 BTC drawn down evenly over a century would also yield 5,000 BTC per year. The difficult word is “unrecoverable.” Someone who has left savings untouched for twenty years retains a claim in year twenty-one. If an old signature eventually loses its evidentiary force, how would the system identify the original owner among competing claimants? Transferring old coins to miners changes ownership and circulating supply even with the issuance cap intact. That cost makes voluntary migration and revenue from external services the more promising subjects for research.

## Back to the firm’s books

![Payments, productive capital, reserves and security spending carry different obligations in a machine economy](/images/articles/financial-order-of-the-ai-era/layers.svg)

A stablecoin issuer owes redemption under its terms. A compute supplier owes capacity at the appointed time. Long-term savings have to survive price swings and key migration. Miners need current income to pay current power bills. One firm might handle all four activities, but their maturities matter. Tomorrow’s rent on a profitable server may arrive too late for a withdrawal due today.

Ronald Coase asked how the costs of transacting in markets shape the boundary of the firm. An agent might compress price discovery, contracting and invoice reconciliation into seconds. When a data centre defaults or savings go missing, someone still has to produce capital, establish title and bear the loss. A practical test of the financial order of a machine economy starts with one transaction. Which promise did the customer pay for, and who ultimately received the money? [Coase, The Nature of the Firm](https://doi.org/10.1111/j.1468-0335.1937.tb00002.x)
