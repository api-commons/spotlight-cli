---
number: 2771
title: "no-security-schemes-defined erroneously matches non-root components object"
state: "open"
labels: ["t/bug"]
author: "robincgit"
created: "2025-01-24T14:29:08Z"
updated: "2025-02-04T15:55:20Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2771"
---

# no-security-schemes-defined erroneously matches non-root components object

**Describe the bug**

The no-security-schemes-defined rule seems to incorrectly match non-root components objects, resulting in false positives.

**To Reproduce**

Given this `openapi.yml` document:

```yaml
openapi: '3.1.0'
info:
  title: TITLE
  version: 'VERSION'

paths: {}

components:
  schemas:
    Foo:
      type: object
      properties:
        components:
          type: number

  securitySchemes:
    sec:
      type: http
      scheme: bearer
```

Run this CLI command:

```
$ spectral lint openapi.yml
[...]
 13:20    error  no-security-schemes-defined  All APIs MUST have a security scheme defined.             components.schemas.Foo.properties.components
```

**Expected behavior**

The rule should not match, i.e the behavior should be the same as when renaming the `components` property of the above Foo schema to `component`.

**Environment**
 - Library version: 6.14.2
