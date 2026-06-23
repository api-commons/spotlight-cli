---
number: 7
title: "Create new result type that can be shared between lint and validation rules"
state: "closed"
labels: ["enhancement"]
author: "rossmcdonald"
created: "2018-09-14T15:21:19Z"
updated: "2018-09-27T22:20:17Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/7"
---

# Create new result type that can be shared between lint and validation rules

Right now the lint results are pretty specific to lint issues. We should have a more generic result type that allows for both validation and lint results (and that allows consumers to differentiate between the two).

This change will most likely impact #4.
