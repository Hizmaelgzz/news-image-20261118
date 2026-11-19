# news-image-20261118

[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/Hizmaelgzz/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/Hizmaelgzz/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

One image summing up the world news of Wednesday 18 November 2026, for the
make.fun competition of the same name.

## The image

A newspaper front page — masthead "WORLD NEWS / WEDNESDAY 18 NOVEMBER 2026"
over six panels:

1. **APEC: Xi, Trump, Putin to meet** — Xi greets Trump on the tarmac in
   Shenzhen; Xi and Putin meet ahead of Thursday's three-way talks.
2. **US strikes Iran, Gulf on edge** — US jets hit a Revolutionary Guard
   missile site on Qeshm Island; Iran says it hit US forces in Kuwait; a UAE
   ship is hit in the Strait of Hormuz.
3. **Cyclone Akvan nears India** — the storm strengthens in the Bay of
   Bengal, landfall forecast on the Andhra Pradesh coast on Friday.
4. **Quad leaders meet in Manila** — first leader-level Quad meeting in over
   two years; a US–Philippines trade deal is announced.
5. **New operation in central Gaza** — Israel begins a concentrated operation
   in three areas of central Gaza.
6. **Gold falls below $3,800** — lowest in over a year as the dollar
   strengthens.

## The program

`main.ts` (Node 22, standard library only) decodes `entry.png.b64` — the
1024x1024 PNG as one line of base64 — and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). Both runs write
identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see LICENSE.
