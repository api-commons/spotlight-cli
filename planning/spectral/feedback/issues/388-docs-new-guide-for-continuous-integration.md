---
number: 388
title: "docs: new guide for Continuous Integration"
state: "closed"
labels: ["documentation", "p/high"]
author: "philsturgeon"
created: "2019-07-16T18:31:38Z"
updated: "2021-05-13T16:01:38Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/388"
---

# docs: new guide for Continuous Integration

Take the `Continuous Integration` content from workflows and make a new guide (link to it from workflows). 

https://github.com/stoplightio/spectral/blob/5ac0a309088503a4a8e17fa6e1f820c8a7dfe160/docs/guides/workflows.md#L47

This can be extended to use the new `--format=junit` option added in #478, and --output=foo to output content to a known location then have CircleCI see that. Add some screenshots of how it looks in CircleCI.

Bonus points if you also add instructions for Travis CI.

Add an `## Other Integrations` section with a link to our Spectral GitHub Action (#327) and Taylors Spectral GitHub Bot (https://github.com/tbarn/spectral-bot)
