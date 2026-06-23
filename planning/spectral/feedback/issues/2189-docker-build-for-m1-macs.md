---
number: 2189
title: "[Docker] Build for M1 Macs"
state: "closed"
labels: ["released", "hacktoberfest"]
author: "jamietanna"
created: "2022-06-20T08:17:34Z"
updated: "2023-07-26T12:13:00Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2189"
---

# [Docker] Build for M1 Macs

**User story.**
As a user on an M1 Mac, I can use a native Docker image, instead of an emulated image for my architecture, so that I can run Spectral more efficiently.

**Is your feature request related to a problem?**

**Describe the solution you'd like**

**Additional context**

When running `stoplight/spectral:6` on an M1 Mac:

```
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested

```
