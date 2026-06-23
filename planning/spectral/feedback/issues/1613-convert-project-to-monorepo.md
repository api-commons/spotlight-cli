---
number: 1613
title: "Convert project to monorepo"
state: "closed"
labels: ["tech-debt", "v6"]
author: "P0lip"
created: "2021-05-11T09:36:49Z"
updated: "2021-06-22T13:32:11Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1613"
---

# Convert project to monorepo

The primary goal is to slice Spectral into smaller chunks / make it more modular to ensure that introducing changes is more straightforward and less fragile.
Moreover, I'd love to make Spectral _truly_ spec agnostic, meaning we don't have any OAS/AAS exclusive code directly anywhere else than in the rulesets packages.
This work has already started some time ago when we decided to gradually rewrite tests that relied on the OAS ruleset.
While significant progress on that front has been made, there's certainly a decent amount of work left.
Oh, and we could probably forget about cherry-picking anything, and such. We'd just merge the PR, and ideally, ship it right away to customers/users.

Example layout:

- cli (similar to @stoplight/prism-cli)
- core - everything related to the linting process, spec-agnostic.
- runtime - src/runner/runtime.ts, but only the public-api part of the runner
- rulesets (src/rulesets -> packages/rulesets) - this could be a separate repo if the product team permits it.
- functions (src/functions -> packages/functions)
- formats (src/formats -> packages/formats)
- parsers (src/parsers -> packages/parsers) - it's probably worth keeping them out of the core package, because Spectral does not rely on them explicitly, and there is no need to force users to import yaml-ast-parser and jsonc-parser if they only intend to lint JSON files, for example
- resolvers? I don't know, it might be useful to have them separately, as this is something one may not need too if we make Spectral independent

Independent versioning is becoming increasingly important due to a number of issues related purely to rulesets. In such a setup, rulesets would have their own release cycle. This would eventually lead to faster iterations since a ruleset breaking change wouldn't imply a CLI / core breaking change if you know what I mean.

In terms of implementation, we can try to follow Prism, albeit with the difference that we need independent versioning.

Initially posted [here](https://github.com/stoplightio/spectral/issues/1507#issuecomment-789635794)
