---
number: 1130
title: "Equivilent paths points at paths not the bad path"
state: "closed"
labels: ["t/bug", "p/medium"]
author: "philsturgeon"
created: "2020-04-28T14:21:14Z"
updated: "2020-05-05T21:28:18Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1130"
---

# Equivilent paths points at paths not the bad path

If there are two paths that are causing a problem, we should point to one of those problematic paths, not just `paths:`.

<img width="1116" alt="image" src="https://user-images.githubusercontent.com/67381/80498624-dd8d1600-8963-11ea-8a49-4e7fc8018bc5.png">

Clicking that problem on the right "The paths foo and bar are equivalent" takes me to the paths object, and then I have to scroll for ages to find the problematic ones. That's if I'm in code view anyway. In Form view it just does nothing.
