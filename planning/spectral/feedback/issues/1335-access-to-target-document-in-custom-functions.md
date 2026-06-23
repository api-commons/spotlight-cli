---
number: 1335
title: "Access to target document in custom functions"
state: "closed"
labels: ["documentation"]
author: "ederparaiso"
created: "2020-09-13T13:44:52Z"
updated: "2020-10-08T15:48:53Z"
comments: 4
reactions_total: 2
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1335"
---

# Access to target document in custom functions

**User story.**
As a custom function user, I can do access to resolved target document that spectral runs lint, so that I can build composed rules that analyzes target values (jsonpath given fields) and fields beyond this values.

**Is your feature request related to a problem?**
Some of my custom functions need to access context beyond `targetValue` (resolved jsonpath in `given` field of the rules). Changing the given field to `$` works but don't make sense to rule. In spectral current version its possible to access document through `otherValues` property (using, `otherValues.documentInventory.resolved`). Although it works, this solution is discouraged in official docs since it serves for internal purposes. The only recommended properties are `otherValues.original` and `otherValues.given`.

**Describe the solution you'd like**
I would like to suggest to expose access to target document context (resolved) in a "official recommended manner", for example through `otherValues.resolvedDocument`.
