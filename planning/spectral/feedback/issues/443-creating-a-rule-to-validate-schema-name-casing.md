---
number: 443
title: "Creating a rule to validate schema name casing."
state: "closed"
labels: []
author: "miller79"
created: "2019-08-12T17:12:32Z"
updated: "2019-08-15T08:08:53Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/443"
---

# Creating a rule to validate schema name casing.

**Chore summary**
I'm trying to create a rule that would validate schema name casing and am not able to see how to set the given and fields to do this.  Here was the sample I tried:

```yaml
rules:
  casing-rule:
    description: Casing Rule Testing
    recommended: true
    type: style
    given: "$..schemas"
    then:
      function: pattern
      functionOptions:
        match: ^[1][a-zA-Z]*$
```

**Additional context**
Any guidance that can be given to performing this or if this feature is not currently available as the documentation does not show this to be possible.
