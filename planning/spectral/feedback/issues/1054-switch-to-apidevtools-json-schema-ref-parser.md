---
number: 1054
title: "Switch to APIDevTools/json-schema-ref-parser"
state: "open"
labels: ["tech-debt", "triaged", "breaking"]
author: "philsturgeon"
created: "2020-04-02T12:47:13Z"
updated: "2024-11-19T18:54:20Z"
comments: 21
reactions_total: 5
thumbs_up: 5
url: "https://github.com/stoplightio/spectral/issues/1054"
---

# Switch to APIDevTools/json-schema-ref-parser

Currently we use our home grown [json-ref-resolver](https://github.com/stoplightio/json-ref-resolver), but we've switched most of our ecosystem over to [APIDevTools/json-schema-ref-parser](https://github.com/APIDevTools/json-schema-ref-parser) for it's superior bundling strategy (https://github.com/stoplightio/studio/issues/275) amongst other things.

We've got some outstanding pull requests going on, but so to avoid extra work let's wait for https://github.com/APIDevTools/json-schema-ref-parser/pull/153 to be merged, then switch Spectral over.
