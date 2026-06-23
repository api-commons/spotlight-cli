---
number: 1483
title: "Docker - \"spectral lint --version\" doesn't work"
state: "closed"
labels: ["t/bug"]
author: "vlauciani"
created: "2021-01-18T17:05:04Z"
updated: "2021-05-04T19:39:29Z"
comments: 1
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/1483"
---

# Docker - "spectral lint --version" doesn't work

Checking the version on Docker image, the output is always `0.0.0`:
```
$ docker run --rm stoplight/spectral lint --version
0.0.0
$
```
