---
number: 2354
title: "Version spectral default ruleset"
category: "Q&A"
author: "markbrockhoff"
created: "2022-12-01T16:24:25Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2354"
---

# Version spectral default ruleset

Hi,

I use the default spectral oas ruleset to extend it with my own custom rules. I would like to pin a specific version of the default ruleset so that my rules are more reliable and won't change without me being aware of it.
I tried to do this by using unpkg but I always get an error that says "Exports is not defined".

```yml
extends:
  - "https://unpkg.com/@stoplight/spectral-rulesets@1.14.1/dist/oas/index.js"
```

`spectral lint -r spectral.yml https://petstore.swagger.io/v2/swagger.json --verbose`

Has anyone experience with versioning the default ruleset?
