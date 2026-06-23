---
number: 2420
title: "spectral-cli lint with custom resolver not working"
category: "Q&A"
author: "pboos"
created: "2023-03-16T09:20:17Z"
upvotes: 2
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2420"
---

# spectral-cli lint with custom resolver not working

I am trying to run `spectral lint` using a custom resolver that allows to resolve http with basic auth. So I am following the instructions on https://github.com/stoplightio/spectral/blob/develop/docs/guides/2-cli.md#custom-ref-resolving.

But running `spectral lint /data/spec/index.yaml --resolver resolver.js --ruleset spectral.yaml -v` results in an error:
> Cannot find module '@stoplight/json-ref-resolver'

How could one make this work? Or is this a known bug?

Note: I am trying to make this work using docker `stoplight/spectral:6.6.0`.
Whole command I run locally is:
```
docker run --rm -v $(pwd):/data \
  890546402176.dkr.ecr.eu-central-1.amazonaws.com/hubdockercom/stoplight/spectral:6.6.0 \
  lint /data/spec/index.yaml --resolver /data/spec/resolver.js --ruleset /data/spec/spectral.yaml -v
```


Thank you very much for your help 🙏 .
