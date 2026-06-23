---
number: 1426
title: "Exposing a static ruleset for \"extends\""
category: "Q&A"
author: "mkistler"
created: "2020-12-24T16:02:05Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1426"
---

# Exposing a static ruleset for "extends"

Hello! We are using Spectral as one of the validation/linting engines in our IBM OpenAPI validator.  We'd like to expose our Spectral ruleset in a way that users can "extend" it.  I know that we could publish it via an HTTP server or as a separate NPM module, but the ruleset is already embedded in our validator and I'd like to simply expose that to our users.

I found the `registerStaticAssets` method when looking around in the Spectral source code. Would this be a reasonable way to expose a ruleset?  If not, do you have other suggestions?
