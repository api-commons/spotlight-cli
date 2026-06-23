---
number: 1129
title: "Split core rulesets into NPM packages"
state: "closed"
labels: ["p/low", "breaking", "chore"]
author: "philsturgeon"
created: "2020-04-27T18:22:40Z"
updated: "2020-09-29T17:34:14Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1129"
---

# Split core rulesets into NPM packages

**Chore summary**

We don't want the Spectral repo to be the home for all OpenAPI and AsyncAPI rules, as those communities will likely want to send PRs and manage their own release cycles. 

I propose turning https://github.com/openapi-contrib/style-guides/ into a monorepo of NPM modules and port our core rulesets over there. 

Then any more feature requests or suggestions for new rules can be sent over there, which will let the community manage them. We can add a few new great ideas, remove some we decide we don't like, then we can keep our `spectral:oas` ruleset shortcuts around for Spectral v6.x and remove them in Spectral v7.0.

**Tasks**
- [ ] Move our oas ruleset over to https://github.com/openapi-contrib/style-guides/
- [ ] When asyncapi has quietened down move that over too
- [ ] Mark spectral:oas and spectral:asyncapi as deprecated in docs, code, etc.

We'll remove them in Spectral v7.0 as another issue which we can link to later.
