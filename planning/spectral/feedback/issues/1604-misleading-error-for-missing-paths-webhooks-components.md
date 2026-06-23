---
number: 1604
title: "Misleading error for missing paths/webhooks/components"
state: "closed"
labels: ["chore"]
author: "mnaumanali94"
created: "2021-05-06T20:37:02Z"
updated: "2021-05-10T16:17:10Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1604"
---

# Misleading error for missing paths/webhooks/components

**Chore summary**
OAS 3.1 requires one of paths/webhooks/components as a top level entry. Spectral gives a `missing path object` error in case none of these is present.

**Tasks**
The error should specify that either path, webhooks or components need to be present.
