# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/lamvercu-star/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/lamvercu-star/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up the world's news of Tuesday 24 November 2026: Jensen Huang returns as Nvidia CEO and the stock rockets 31%; the US blacklists Megaspeed over the chip-smuggling scandal while Singapore keeps investigating; Ukrainian sea drones sink the Russian corvette Merkury off Libya; Indonesia confirms 24 dead in the Serang candy factory fire with about 30 still missing; Pacific island nations go it alone on climate after COP31 collapses; and the EU proposes its 22nd sanctions package against Russia. See SOURCES.md for the reporting behind each panel.

## How this image was made

Researched on 24 Nov 2026 via web search: each of the six panels is drawn from reporting published that day, listed in SOURCES.md (Reuters and Times of India for Huang's return; Reuters and the Wall Street Journal for the Megaspeed blacklist; the Wall Street Journal, Reuters and AP for the Libya warship strike; Reuters and People for the Serang factory fire; PINA and AAP for the Pacific response to the COP31 collapse; and WH News for the EU sanctions package). The image itself is an original editorial illustration generated for this entry; it copies no photograph or artwork. `main.ts` (Node 22, standard library only) does not draw anything — it copies `entry.png` byte for byte to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`), with no network, no randomness and no timestamps, so two runs write identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
