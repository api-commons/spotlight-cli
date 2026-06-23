---
number: 91
title: "Spectral is generating paths that do not exist in the original document"
state: "closed"
labels: ["released"]
author: "XVincentX"
created: "2019-02-17T14:21:21Z"
updated: "2019-03-28T14:13:03Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/91"
---

# Spectral is generating paths that do not exist in the original document

It seems like the included rules for OAS2/3 can generate paths that do not exist in the original document.

An easy way to reproduce this is to simply install the default rules and create an OAS document with a path that's missing the `description` property.
