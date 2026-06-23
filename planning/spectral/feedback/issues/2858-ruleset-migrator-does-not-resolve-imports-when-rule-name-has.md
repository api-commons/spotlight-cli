---
number: 2858
title: "ruleset-migrator does not resolve imports when rule name has a '/'"
state: "closed"
labels: ["released"]
author: "bcoughlan"
created: "2025-10-24T11:22:48Z"
updated: "2025-10-24T12:31:36Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2858"
---

# ruleset-migrator does not resolve imports when rule name has a '/'

When a rule name contains a '/', the resulting JS does not reference imports, e.g. the output will be `formats: ['oas3']` instead of `import { oas3 } ....... formats: [oas3]`.
