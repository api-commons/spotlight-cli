---
number: 2401
title: "Add support for pre-commit"
state: "closed"
labels: []
author: "Corbie-42"
created: "2023-02-15T06:45:11Z"
updated: "2024-08-26T14:03:48Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2401"
---

# Add support for pre-commit

**User story.**
As a developer, I can make sure the API specifications I wrote are automatically checked, before I commit them.

**Is your feature request related to a problem?**
I'm always frustrated when a pipeline that checks the API specification fails, because I did not run spectral before pushing my changes.

**Describe the solution you'd like**
I would like to create a [pre-commit](https://pre-commit.com/) hook in my project like this:
```yaml
- repo: https://github.com/stoplightio/spectral
  rev: v6.9.0
  hooks:
  - id: spectral
    args: ["-f", ".my-rules.yaml"]
```

**Additional context**
Vacuum (that is using spectral) has defined a [.pre-commit-hooks.yaml](https://github.com/daveshanley/vacuum/blob/main/.pre-commit-hooks.yaml) in their project.
This could be used as reference.
