---
number: 2133
title: "Extending ruleset with default off skips rule"
state: "closed"
labels: ["t/bug", "released"]
author: "daniellehanks"
created: "2022-04-21T23:22:38Z"
updated: "2022-04-29T12:12:54Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2133"
---

# Extending ruleset with default off skips rule

**Describe the bug**
I had a ruleset that worked exactly how I wanted it to in 5.7.1. In upgrading to the latest 6.3.0, I noticed at least one of my rules isn't evaluating properly when running the cli. I am extending a ruleset that I have default to off. I extend a particular rule to modify it. In 5.7.1, the rule fails appropriately. In 6.3.0 it does not. Possibly a bug, possibly some sort of change in how I need to set up .spectral.yaml?

**To Reproduce**
openapi.yaml:
```
openapi: 3.0.0
info:
  title: test
  version: 1.0.0
  description: test
servers:
  - url: 'http://localhost:5000'
paths:
  '/test':
    get:
      operationId: test
      summary: A summary.
      description: |
        A description
      tags:
        - test
      responses:
        '200':
          description: OK

tags:
  - name: test
```

.spectral.yaml:
```
formats:
  - oas3
extends:
  -
    - https://raw.githubusercontent.com/openapi-contrib/style-guides/15d28d5/openapi.yml
    - 'off'
rules:
  operation-short-summary:
    description:
      Operation summary should be short and sweet, no full stops, and less than
      40 characters.
    severity: error
    recommended: true
    type: "style"
    given:
      $.paths.*[?(
      @property === 'get' ||
      @property === 'put' ||
      @property === 'post' ||
      @property === 'delete' ||
      @property === 'options' ||
      @property === 'head' ||
      @property === 'patch' ||
      @property === 'trace'
      )]
    then:
      - field: summary
        function: pattern
        functionOptions:
          notMatch: "\\."
      - field: summary
        function: length
        functionOptions:
          max: 40
```

Running `spectral lint openapi.yaml` with 5.7.1:
```
openapi.yaml
 12:16  error  operation-short-summary  Operation summary should be short and sweet, no full stops, and less than 40 characters.  paths./test.get.summary
```
With 6.3.0:
```
No results with a severity of 'error' or higher found!
```
If I remove the `off` part, 6.3.0 fails like 5.7.1.

**Expected behavior**
The rule to properly work and be evaluated as expected in 6.3.0 as it is in 5.7.1.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 5.7.1/6.3.0
 - OS: MacOS
 - Browser: N/A
