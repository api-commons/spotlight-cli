---
number: 2837
title: "False positive: `oas3-examples-value-or-externalValue` incorrectly reported on valid examples when broken `$ref` exists"
state: "open"
labels: []
author: "Relequestual"
created: "2025-07-29T13:19:38Z"
updated: "2025-07-29T13:19:38Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2837"
---

# False positive: `oas3-examples-value-or-externalValue` incorrectly reported on valid examples when broken `$ref` exists

### Description
The [`oas3-examples-value-or-externalValue`](https://docs.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules#oas3-examples-value-or-externalvalue) rule incorrectly reports errors against valid examples in `components/examples` when there are broken `$ref` references to non-existent examples elsewhere in the OpenAPI file.

### Expected Behavior
- Valid examples with proper `value` or `externalValue` fields should pass validation
- The `oas3-examples-value-or-externalValue` rule should not trigger false positives

### Actual Behavior
- Valid examples in `components/examples` that have proper `value` fields are incorrectly flagged
- Error is reported at `path: ["components", "examples"]` instead of the broken reference location

### Minimal Reproduction

**File: `minimal-reproduction.yaml`**
```yaml
openapi: 3.0.3
info:
  title: Minimal Test
  version: 1.0.0
paths:
  /test:
    get:
      responses:
        '200':
          content:
            application/json:
              examples:
                test:
                  $ref: '#/components/examples/non-existent'  # ← BROKEN REFERENCE
components:
  examples:
    valid-example:      # ← CORRECTLY FORMATTED
      value:
        test: "data"
```

**Command to reproduce:**
```bash
spectral lint minimal-reproduction.yaml
```

**Expected output:** Error about broken `$ref` reference  
**Actual output:**
```json
{
  "code": "oas3-examples-value-or-externalValue",
  "path": ["components", "examples"],
  "message": "Examples must have either \"value\" or \"externalValue\" field.",
  "range": {
    "start": {"line": 15, "character": 11},
    "end": {"line": 18, "character": 20}
  }
}
```
