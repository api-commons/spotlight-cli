---
number: 1273
title: "`operation-2xx-response` rule should not be recommended"
state: "closed"
labels: ["enhancement", "breaking"]
author: "krystof-k"
created: "2020-07-05T13:55:00Z"
updated: "2020-08-20T09:00:25Z"
comments: 4
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1273"
---

# `operation-2xx-response` rule should not be recommended

I suggest to move `operation-2xx-response` rule out from recommended, as it is reasonable to have endpoints that have no success response but only 3xx redirects. Or maybe change the rule to allow 2xx or 3xx responses.

What do you think?
