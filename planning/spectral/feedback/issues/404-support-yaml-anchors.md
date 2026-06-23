---
number: 404
title: "Support yaml anchors"
state: "closed"
labels: ["enhancement", "discussion"]
author: "ioggstream"
created: "2019-07-24T17:03:42Z"
updated: "2019-07-31T17:48:18Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/404"
---

# Support yaml anchors

**Describe the bug**
The following yaml with anchor does not validate correctly

**To Reproduce**

1. Go to online spectral parser
2. paste the content of the following yaml https://paste.fedoraproject.org/paste/F8NCdqF9qO7QDRTwiA1vmA
3. See error

```
/paths//pets/post/responses/default should have required property '$ref'
``

**Expected behavior**
No errors

**Environment (remove any that are not applicable):**
 - Browser: Chrome 61
