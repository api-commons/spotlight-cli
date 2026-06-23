---
number: 1885
title: "memory leak in schema function"
state: "closed"
labels: ["t/bug", "released", "p/medium", "triaged"]
author: "P0lip"
created: "2021-10-05T20:49:59Z"
updated: "2021-10-20T12:11:04Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1885"
---

# memory leak in schema function

**Describe the bug**

`schema` function has a memory leak.
It seems like the validator instances are never garbage collected.

**To Reproduce**

Lint document a few times.

**Expected behavior**
There's no memory leak.

**Screenshots**
![image](https://user-images.githubusercontent.com/9273484/136100201-c1333686-e254-4090-9733-b9a799f80d62.png)

**Additional context**
This is not particularly painful in the context of CLI, but it's the other way around when linting is done in the same isolate for a number of times.

**Environment (remove any that are not applicable):**
 - Library version: 6.x.x
