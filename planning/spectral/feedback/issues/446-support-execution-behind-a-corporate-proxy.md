---
number: 446
title: "Support execution behind a corporate proxy"
state: "closed"
labels: ["enhancement", "sev/blocker", "p/high"]
author: "nulltoken"
created: "2019-08-13T10:08:44Z"
updated: "2020-05-14T22:52:34Z"
comments: 9
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/446"
---

# Support execution behind a corporate proxy

**User story.**
As a user working behind a corporate proxy, I can configure spectral, so that I can run it without errors when `ref$` points to internet based urls.

**Is your feature request related to a problem?**
In #245, @marbemac made it possible to resolve http based remote references. 

https://github.com/stoplightio/spectral/blob/027664fcf7f58f542a323d338b9017ba18adc9a3/src/resolvers/http.ts#L7

However, for those of us working behind a corporate proxy, well... things do tend to _not_ work. 

```
 842:13    error  [invalid-ref] FetchError: request to https://REDACTED/doco.yaml failed, reason: connect ETIMEDOUT XX.XX.XX.XX:443
```

**Describe the solution you'd like**
- Ideally, supporting `http_proxy` and `https_proxy` would just be awesome :tada:
- An optional argument to the cli would also fit my request.

**Additional context**
https://github.com/bitinn/node-fetch/issues/195
