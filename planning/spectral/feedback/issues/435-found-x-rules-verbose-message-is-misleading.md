---
number: 435
title: "Found X rules verbose message is misleading"
state: "closed"
labels: ["t/bug"]
author: "philsturgeon"
created: "2019-08-12T09:34:32Z"
updated: "2020-05-14T22:51:46Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/435"
---

# Found X rules verbose message is misleading

**Describe the bug**

If you disable rules by turning them off, the verbose message "Found 35 rules" still shows up, counting the total list of all rules that are known about even if they are disabled.

**To Reproduce**

Make a ruleset like this:

**ruleset.yaml**
```
extends: [[spectral:oas3, off]]

rules:
  only-local-references: true
```

**Run**
```
$ yarn spectral lint examples/openapi.yaml -v --ruleset=ruleset.yaml

Linting ./examples/openapi.yaml
Adding OpenAPI 3.x functions
Found 35 rules
No errors or warnings found!
Done in 1.33s.
```

**Current behavior**
CLI output contains `Found 35 rules`

**Expected behavior**
CLI output should contain `Found 1 rule`

Make sure its saying `1 rule` not `1 rules`

**Environment (remove any that are not applicable):**
 - Library version: 4.0.2
 - OS: [e.g. Windows 7]
 - Browser: [e.g. Chrome 61]

**Additional context**

This came up in #434
