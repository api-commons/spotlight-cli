---
number: 783
title: "Multiple extends is not working"
state: "closed"
labels: ["t/bug"]
author: "adlecluse"
created: "2019-11-19T07:53:10Z"
updated: "2019-11-20T18:50:18Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/783"
---

# Multiple extends is not working

**Describe the bug**
I want to host a general spectral ruleset file for all projects which extends from the spectral:oas3, and then I want to extend it in my local project by extending the one that is hosted. But nested extends are not working as they should I think.

**To Reproduce**

1. Given this ruleset file that I'm hosting on http://localhost:8100/ruleset.yaml
```
extends:
  - spectral:oas3
rules:
  operation-tags: off
```

2. Then in my local project I have the following file
```
extends:
  - http://localhost:8100/ruleset.yaml
rules: {}
```

3. When running the spectral linter against any valid openapi spec
`spectral lint openapi.yaml -r spectral.yaml`

4. I get the following error
```
Could not parse http://localhost:8100/rulesets/1.0.0/@stoplight/spectral/rulesets/oas3/index.json: Not Found
Error: Could not parse http://localhost:8100/rulesets/1.0.0/@stoplight/spectral/rulesets/oas3/index.json: Not Found
    at Object.<anonymous> (/snapshot/project/dist/fs/reader.js:40:19)
    at Generator.throw (<anonymous>)
    at rejected (/snapshot/project/node_modules/tslib/tslib.js:108:69)
```

**Expected behavior**
No error. Looks like the URL isn't generated properly.

**Environment (remove any that are not applicable):**
Running: `spectral version`
Gives me:
`@stoplight/spectral/4.0.2 darwin-x64 node-v10.15.3`
