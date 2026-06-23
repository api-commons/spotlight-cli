---
number: 1191
title: "The docker image doesn't provide the proper version"
state: "closed"
labels: ["t/bug", "p/medium"]
author: "nulltoken"
created: "2020-06-01T07:59:45Z"
updated: "2021-05-10T21:59:42Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1191"
---

# The docker image doesn't provide the proper version

**Describe the bug**
In order to troubleshoot issues, it's usually standard to request version numbers. When a user leverages the docker image, one can only get the hardcoded version from the `package.json` file.

Besides, that docker image is built from the tip of the develop branch (which may be unstable/buggy from time to time).

**To Reproduce**

```
$docker run stoplight/spectral --version
0.0.0
```

**Expected behavior**
Publish two docker files:
 - stoplight/spectral => Built using the latest stable version of spectral
 - stoplight/spectral:develop => The current one
