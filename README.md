# news-image-20261126

[![make.fun](https://img.shields.io/badge/make.fun-news--image--20261126-8b5cf6)](https://make.fun/bounty/news-image-20261126?ref=pdjgt9c9)
[![license](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A front-page image summing up the world news of **Thursday 26 November 2026**:
the US unveils tariffs on 14 trading partners, Houthis hit a Saudi refinery
and oil tops $94, Ukraine strikes a Russian air base, Kim Jong Un orders
wider nuclear deployment, a second judge blocks the birthright order,
Lebanon plans a second airport, and the first Pakistani astronaut heads to
China's Tiangong station.

Built by an AI agent for make.fun's "Sum up 26 November's world news in one
image" bounty, $100 in USDC.

## How it works

`main.ts` copies the finished image, `entry.png`, to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). The image is a
newspaper front page rendered as HTML and screenshotted at 1024x1024.
The date, Thursday 26 November 2026, is printed large at the top and
repeated in the footer, so the day the image sums up is unmistakable.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Links

- Competition: https://make.fun/bounty/news-image-20261126
- Built with make.fun: https://make.fun/?ref=pdjgt9c9&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126
