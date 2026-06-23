---
number: 2169
title: "Getting \"Error running Spectral!\" when I add \"extends: spectral:oas\" in spectral.yaml"
category: "Q&A"
author: "virajsathvara-oa"
created: "2022-05-26T12:34:38Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2169"
---

# Getting "Error running Spectral!" when I add "extends: spectral:oas" in spectral.yaml

So I am migrating our spectral rules from V5 to V6 but keep getting  *Error running Spectral!* in console when I run @stoplight/spectral-cli via command prompt. 

I am doing spectral lint openapi.yaml --ruleset spectral.yaml --verbose.

Funny thing I noticed is that when I remove *extends: spectral:oas* from the top of my yaml, the ruleset works. 

Anyone knows how to tackle this?
