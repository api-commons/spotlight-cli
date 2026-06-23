---
number: 1903
title: "spectral fails if NODE_OPTIONS=--max_old_space_size=4096 env defined"
state: "open"
labels: ["triaged"]
author: "acceptMyPR"
created: "2021-10-15T10:02:51Z"
updated: "2024-05-31T12:35:10Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1903"
---

# spectral fails if NODE_OPTIONS=--max_old_space_size=4096 env defined

> For support questions, please use the [Stoplight Discord Community](https://discord.com/invite/stoplight). This repository's issues are reserved for feature requests and bug reports. If you are unsure if you are experiencing a bug, our Discord is a great place to start.
>
> **Please delete this section, any any sections below that you don't use, before creating the issue.**

**Describe the bug**
Then i define `NODE_OPTIONS=--max_old_space_size=4096` the spectral fails without any error
```
/test # export NODE_OPTIONS=--max_old_space_size=4096
/test # spectral lint -F error ./specs/v1/schema/schema.yaml -v
/test # echo $?
4
```

**To Reproduce**

1. export NODE_OPTIONS=--max_old_space_size=4096
2. run spectral
3. see fail

**Expected behavior**
Not fails

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
docker image stoplight/spectral:6.1.0

**Additional context**
Add any other context about the problem here.
