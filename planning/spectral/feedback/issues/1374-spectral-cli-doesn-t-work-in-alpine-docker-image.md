---
number: 1374
title: "Spectral cli doesn't work in alpine docker image"
state: "closed"
labels: ["t/bug", "help wanted"]
author: "slamdev"
created: "2020-10-04T22:18:42Z"
updated: "2021-05-11T15:28:36Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1374"
---

# Spectral cli doesn't work in alpine docker image

**Describe the bug**
spectral binary doesn't work in alpine docker image

**To Reproduce**

1. Install spectral via **install.sh** script
2. Run `spectral --help`
3. See error

**Expected behavior**
Help info is displayed.

**Additional context**
```bash
$ docker run -ti alpine
$ apk add curl
$ curl -L https://raw.githack.com/stoplightio/spectral/master/scripts/install.sh | sh
Spectral was installed to: /usr/local/bin/spectral
$ spectral --help
/bin/sh: spectral: not found
$ ls -la /usr/local/bin/spectral
-rwxr-xr-x    1 root     root      57092527 Oct  4 22:12 /usr/local/bin/spectral
```
