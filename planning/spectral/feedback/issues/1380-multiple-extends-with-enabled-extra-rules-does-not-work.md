---
number: 1380
title: "Multiple extends with enabled extra rules does not work"
state: "closed"
labels: ["t/bug"]
author: "exoszajzbuk"
created: "2020-10-14T08:34:38Z"
updated: "2021-01-14T15:29:49Z"
comments: 4
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/1380"
---

# Multiple extends with enabled extra rules does not work

When using multiple extends turning ON specific rules in the "base" ruleset does not work in the extended one, but turning rules OFF does.

**To Reproduce**

Have a `base.yaml` like this (where by default `tag-description` is turned off and `operation-operationId` is turned on)

```
extends: spectral:oas

rules:
  tag-description: true
  operation-operationId: off
```

and a `ruleset.yaml` like this:

```
extends: ./base.yaml
```

with the following test OpenAPI document in `api.yaml`


```
openapi: 3.0.0
servers:
  - description: Test API
    url: https://example.com/api
info:
  description: 'Test API'
  version: 1.0.0
  title: Test API
  contact:
    email: contact@example.com
  license:
    name: Apache 2.0
    url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
tags:
  - name: test                # !!! note tag not having description !!!
paths:
  /test:
    get:                      # !!! note endpoint not having operationId !!!
      tags:
        - test
      summary: 'Test Operation'
      description: 'Test Operation'
      responses:
        '200':
          description: successful operation
```

When running `npx spectral lint api.yaml -r ruleset.yaml` the result is:

```
OpenAPI 3.x detected
No results with a severity of 'error' or higher found!
```

**Expected behavior**

Since in `base.yaml` the rule `tag-description` is turned ON, I'd expect the command above to fail on the missing tag description. Please note that on the other hand `operation-operationId: off` does work (the example above missed `operationId` so without explicitly turning it off the command should fail).

**Environment (remove any that are not applicable):**
 - Library version: [e.g. 3.0.0] - 5.6.0
 - OS: [e.g. Windows 7] - macOS 10.15.6
