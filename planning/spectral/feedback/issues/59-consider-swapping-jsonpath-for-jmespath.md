---
number: 59
title: "Consider swapping jsonpath for jmespath"
state: "closed"
labels: ["enhancement"]
author: "marbemac"
created: "2018-12-04T03:08:06Z"
updated: "2018-12-04T15:28:45Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/59"
---

# Consider swapping jsonpath for jmespath

From what I can find online (and my experience in general), jmespath is generally regarded as more powerful than jsonpath. 

- While development is not active, it has a much larger install base (https://www.npmjs.com/package/jsonpath versus https://www.npmjs.com/package/jmespath).
- It also happens to be less than 20% the size (https://bundlephobia.com/result?p=jsonpath@1.0.0 versus https://bundlephobia.com/result?p=jmespath@0.15.0). jsonpath is surprisingly pretty much the same size as AJV (large!).

http://jmespath.org

@chris-miaskowski, I think this is a relatively simple change, but would be breaking - if it is simple, we could consider bundling it with the two other breaking changes we're working on (#57 and #58).
