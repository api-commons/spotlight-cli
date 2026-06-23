---
number: 324
title: "Spectral is generating paths that do not exist in the original document"
state: "closed"
labels: ["t/bug"]
author: "brianmrock"
created: "2019-07-06T19:23:49Z"
updated: "2019-08-20T13:17:13Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/324"
---

# Spectral is generating paths that do not exist in the original document

It seems like the included rules for OAS2/3 can generate paths that do not exist in the original document.

An easy way to reproduce this is to simply install the default rules and create an OAS document with a path that's missing the `description` property.
