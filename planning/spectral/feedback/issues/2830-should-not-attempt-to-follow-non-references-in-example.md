---
number: 2830
title: "Should not attempt to follow non-references in example"
state: "open"
labels: []
author: "Relequestual"
created: "2025-07-15T14:15:01Z"
updated: "2025-07-15T14:15:17Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2830"
---

# Should not attempt to follow non-references in example

**Describe the bug**

Given the following OpenAPI 3.0 document...

```
components:
  schemas:
    Product:
      example:
        $ref: '#/components/examples/just-an-example'
```

The example is a dumb value and should not be further interpolated.
However, it is, and resolution of the reference is attempted.
It does not exist, and causes the following output...


`'#/components/examples/just-an-example' does not exist spectral(invalid-ref)`

**To Reproduce**

As above

**Expected behavior**

Should not attempt to resolve the reference, as it is not actually a reference.

References are not a pre-compilation step.

**Environment (remove any that are not applicable):**
 - Library version: 6.15.0
