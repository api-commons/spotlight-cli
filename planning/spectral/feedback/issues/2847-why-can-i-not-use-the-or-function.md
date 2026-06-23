---
number: 2847
title: "Why can I not use the \"or\"-function"
state: "open"
labels: []
author: "Ilyes512"
created: "2025-08-28T18:55:35Z"
updated: "2025-08-28T18:55:35Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2847"
---

# Why can I not use the "or"-function

It seems like the "or" function cannot be used (anymore)?


```
/usr/src/spectral # spectral lint openapi-petstore.json --verbose
Error running Spectral!
Error #1: Function is not defined
          at validateFunction  …tors/function.ts:27  return new RulesetV…
          at validate26        …ompile/index.ts:171  const makeValidate …
          at validate15        …ompile/index.ts:171  const makeValidate …
          at validate14        …ompile/index.ts:171  const makeValidate …
          at apply             …alidation/ajv.ts:84  return Reflect.appl…
```

It's documented and I see code references. I am using the latest (docker) version.
