---
number: 757
title: "Accept input via stdin"
state: "closed"
labels: ["enhancement", "good first issue", "p/low"]
author: "philsturgeon"
created: "2019-11-12T14:22:33Z"
updated: "2019-11-20T21:37:19Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/757"
---

# Accept input via stdin

Accept stdin as an alternative way to get a document, so that folks can use spectral in the middle of complex workflows without needing to write temporary files. 

```bash
cat openapi.yml | spectral -r some-ruleset.yml
```

This was mention by @radicarl in https://github.com/stoplightio/spectral/issues/656#issuecomment-550960358 but has been mentioned a few times in person and elsewhere. Just kept forgetting to write it down.
