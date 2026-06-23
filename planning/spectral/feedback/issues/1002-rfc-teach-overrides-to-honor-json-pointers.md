---
number: 1002
title: "[RFC] Teach overrides to honor JSON Pointers"
state: "closed"
labels: ["enhancement", "released"]
author: "nulltoken"
created: "2020-03-05T08:03:12Z"
updated: "2021-07-07T12:20:21Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1002"
---

# [RFC] Teach overrides to honor JSON Pointers

Potential laxer locations syntaxes have been evoked in #939 and eventually dropped out to keep the PR on scope.

This issue is a placeholder to gather feedback, use cases and try and measure how important allowing less strict locations would be.

From https://github.com/stoplightio/spectral/pull/939#discussion_r387493237

Current location syntax is: `<source>#<pointer>` where
 - `source` can be expressed as 
    - an absolute uri (file or http based)
    - relatively to the to the rulesepath uri
- `pointer` is a Json pointer (cf. https://tools.ietf.org/html/rfc6901) describing the precise document path that should be ignored

Latest update to the proposal was to allow a more open location syntax where 
- [x] `<source>` could be optional #1423 
- [x] `#<pointer>` could be optional #1405 
- [x] at least one of them should be described #1423 
- [ ]  `<pointer>` meaning would change

**Samples:**
- `models/awful.json: [ rule1, rule2]`: Would ignore rule1 and rule2 results wheverever in the file
- `#/info": [rule1, rule2]`: Would ignore rule1 and rule2 results in any processed document provided they originate from a path that's `#/info` **or below (eg. `#/info/sub/path/1`)**. This would be in line with @P0lip's [comment](https://github.com/stoplightio/spectral/pull/939#discussion_r371174774)
