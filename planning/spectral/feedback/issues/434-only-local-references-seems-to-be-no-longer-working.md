---
number: 434
title: "only-local-references seems to be no longer working"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2019-08-12T08:07:31Z"
updated: "2019-08-12T12:45:21Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/434"
---

# only-local-references seems to be no longer working

**Describe the bug**
When a spec references an external ref and that we activate the `only-local-ref` rule, no warning/error is issued

**Describe the bug**

Following yaml seems weirdly parsed by Spectral

**To Reproduce**

**repro/ruleset.yaml**
```
extends: [[spectral:oas3, off]]

rules:
  only-local-references: true
```

**repro/external.yaml**
```
openapi: 3.0.0
info:
  title: Repro remote references aren't allowed issue
  description: Yep. That's one cool description.
  version: 1.0.0
paths: {}
components:
  schemas:
    SomeThings:
      type: object
      properties:
        some_array:
          description: Here are a few of my favorite things
          type: array
          items:
            $ref: "./remote_ref.yaml#/components/schemas/Thing"
```

**repro/remote_ref.yaml**
```
openapi: 3.0.0
info:
  title: Repro remote references aren't allowed issue
  description: Yep. That's one cool description.
  version: 1.0.0
paths: {}
components:
  schemas:
    Thing:
      type: string
```

**Run**
```
$ yarn spectral lint ./repro/external.yaml -v --ruleset=./repro/ruleset.yaml
yarn run v1.15.2
$ C:\REDACTED\node_modules\.bin\spectral lint ./repro/external.yaml -v --ruleset=./repro/ruleset.yaml
Linting ./repro/external.yaml
Adding OpenAPI 3.x functions
Found 35 rules
No errors or warnings found!
Done in 1.33s.
```

**Expected behavior**
- The external reference should be detected
- As most of the rules are silenced, the `Found 35 rules` verbose message is a tad misleading. Maybe should it only display the number of rules that are going to be considered?

**Environment (remove any that are not applicable):**
 - Library version: 4.0.2
 - OS: Windows 7
