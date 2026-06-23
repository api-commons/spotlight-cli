---
number: 1905
title: "ERROR: Cannot extend non-existing rule: \"oas3-server-trailing-slash\" since 6.0"
state: "closed"
labels: []
author: "acabarbaye"
created: "2021-10-18T17:52:15Z"
updated: "2021-10-19T16:03:36Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1905"
---

# ERROR: Cannot extend non-existing rule: "oas3-server-trailing-slash" since 6.0

When using the vanilla docker container from 6.0 onwards and carrying out `spectral lint ....yaml`:
I am getting the following error consistently:
`Cannot extend non-existing rule: "oas3-server-trailing-slash"`

This does not happen with version 5.9 or prior versions
