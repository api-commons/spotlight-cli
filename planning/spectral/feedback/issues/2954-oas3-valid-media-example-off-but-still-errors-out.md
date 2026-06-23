---
number: 2954
title: "oas3-valid-media-example: off but still errors out"
state: "open"
labels: []
author: "shrutiburman"
created: "2026-05-12T10:47:43Z"
updated: "2026-05-12T10:47:43Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2954"
---

# oas3-valid-media-example: off but still errors out

**Describe the bug**
Set `oas3-valid-media-example: off` but the examples are getting validated and errored. 
Might be related to https://github.com/stoplightio/spectral/issues/2790 ? 
Is there a limit to $ref resolution in a spec file? 


**Expected behavior**
When the oas3-valid-media-example flag is set to false, there shouldnt be any validation errors on examples.
