---
number: 326
title: "Reports"
state: "closed"
labels: ["enhancement", "Epic", "p/high"]
author: "brianmrock"
created: "2019-07-06T19:26:31Z"
updated: "2021-04-12T16:51:16Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/326"
---

# Reports

When trying to incentivize users to lint their projects, try using the "carrot" approach instead of just the stick. Instead of only showing things that failed, we could have a report which can show what has worked and what has failed. 

<img width="1064" alt="Screen Shot 2019-12-27 at 19 07 32" src="https://user-images.githubusercontent.com/67381/71529429-940cbb80-28dc-11ea-9b5c-bffb913d93e7.png">

<img width="967" alt="image" src="https://user-images.githubusercontent.com/67381/71529421-80f9eb80-28dc-11ea-89d1-6f1077d180d9.png">

This could be a `spectral report` command, and similar to linting it can output as something reasonable on the CLI, as JSON, or as HTML. 

The HTML doesn't have to be too wildly amazing straight away, its more important to get it working then get it pretty if its heavily used and requested.
