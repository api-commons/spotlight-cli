---
number: 1104
title: "JSON Schema: Using $ref to an internal $id is flagged as an error"
state: "closed"
labels: ["t/bug"]
author: "GrahamLea"
created: "2020-04-20T05:30:03Z"
updated: "2020-05-04T11:02:26Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1104"
---

# JSON Schema: Using $ref to an internal $id is flagged as an error

**Describe the bug**
When linting a self-contained JSON schema, using a `$ref` to refer to an internal sub-schema by `$id` is reported as an error.

**To Reproduce**
1. Grab the "Using $id with $ref" example from [Understanding JSON Schema](https://json-schema.org/understanding-json-schema/structuring.html#using-id-with-ref)
2. Run `spectral lint -F hint -v schema.json`

**Expected behavior**
Should be a valid schema

**Actual behavior**
```
Found 52 rules (36 enabled)
Linting <file>
JSON Schema detected
JSON Schema (loose) detected
JSON Schema Draft 7 detected

<file>
 28:15  error  invalid-ref  ENOENT: no such file or directory, open ''

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

**Environment:**
 - Library version: 4.2.0 (I can't test with latest due to #1097)
 - OS: Mac OS Mokave
 - Node: v13.13.0
