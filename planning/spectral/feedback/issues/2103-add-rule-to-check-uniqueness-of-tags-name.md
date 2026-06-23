---
number: 2103
title: "Add rule to check uniqueness of `tags.*.name`"
state: "closed"
labels: ["enhancement", "released", "AsyncAPI"]
author: "magicmatatjahu"
created: "2022-03-22T10:28:49Z"
updated: "2022-05-31T12:15:02Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2103"
---

# Add rule to check uniqueness of `tags.*.name`

**User story.**
As a user, I want to know if the tags defined in my AsyncAPI document (in any place) have a unique names.

**Is your feature request related to a problem?**
The following AsyncAPI document is invalid and Spectral should throw errors due to non-uniqueness of `tags.*.name`.

```yaml
asyncapi: '2.3.0'
...

tags:
  - name: someTag
    ...
  - name: someTag
    ...
```

**Additional context**
Part of #2100
