---
number: 2276
title: "YAML null key not supported"
state: "closed"
labels: []
author: "rubensa"
created: "2022-09-14T10:07:41Z"
updated: "2022-10-03T15:52:35Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2276"
---

# YAML null key not supported

**Describe the bug**
I'm not allowed to use the YAML **null** key.

**To Reproduce**
When I try to apply [Configuration key conflicts](https://quarkus.io/guides/config-yaml#configuration-key-conflicts) like:
```yaml
quarkus:
  http:
    cors:
      ~: true
      origins: "*"
```
I get the following problem report:
`Mapping key must be a string scalar rather than null`

**Expected behavior**
The null key should be allowed and no problem should be reported.
