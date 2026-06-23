---
number: 1989
title: "Annotate function options that are meant for internal usage within Spectral"
state: "closed"
labels: []
author: "mnaumanali94"
created: "2021-12-07T13:44:36Z"
updated: "2021-12-10T11:03:19Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1989"
---

# Annotate function options that are meant for internal usage within Spectral

Some function options are meant for internal usage within spectral i.e.
- Object option in function `Pattern`
- PrepareResults in function `Schema`

Let's annotate them with `x-internal:true` so that they can be hidden in places where the audience is external users.
