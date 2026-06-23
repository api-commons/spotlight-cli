---
number: 1350
title: "Allow numeric keys to be classified as errors"
state: "closed"
labels: ["enhancement"]
author: "tschaible"
created: "2020-09-23T13:50:54Z"
updated: "2020-10-21T16:11:38Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1350"
---

# Allow numeric keys to be classified as errors

**User story.**
As a user who needs OpenAPI YAML to be valid for other tools, I would like the incorrect usage of numeric keys to be identified as an error.

**Is your feature request related to a problem?**
In #955 it seems like the misuse of numeric keys in YAML was changed from an error to a warning.

I actually want it as an error, since numeric keys in YAML break other tools in my tool-chain.

Since the violation comes from _parser_ it seems like I can't change the severity.  I would like control of this, so I can classify it as an error.

**Describe the solution you'd like**
Either of the two options below would be great
```yaml
extends:
rules:
  parser:
    key-string-scalar: error
```

or

```yaml
extends:
rules:
  parser-key-string-scalar: error
```
