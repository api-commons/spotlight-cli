---
number: 1280
title: "Enhance the reported paths so that fixing the root cause is easier"
state: "open"
labels: ["t/bug", "triaged", "breaking"]
author: "nulltoken"
created: "2020-07-10T07:08:25Z"
updated: "2024-05-31T12:35:38Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1280"
---

# Enhance the reported paths so that fixing the root cause is easier

The way we report problems in referenced documents may benefit from some improvement.

#1254 and #1258 are great use cases where actual reported paths are not helpful or completely misleading to the user.

One potential option would be to return the path that has been traversed through the different layers of referenced documents (somehow similarly to a call stack, where each layer would point at where a de-referencing occurred).

This change will impact the way problems are reported to the caller (json/cli) may eventually be considered as breaking.
