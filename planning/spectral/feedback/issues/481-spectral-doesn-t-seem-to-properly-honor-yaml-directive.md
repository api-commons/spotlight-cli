---
number: 481
title: "Spectral doesn't seem to properly honor %YAML directive"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2019-08-24T12:36:43Z"
updated: "2019-08-28T15:14:06Z"
comments: 10
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/481"
---

# Spectral doesn't seem to properly honor %YAML directive

**Describe the bug**
YAML 1.2 spec [recommends](https://yaml.org/spec/1.2/spec.html#id2804923) using the Core schema unless instructed otherwise.

This Core Schema doesn't specify any timestamp data type. As such, an unquoted value such as `2012-10-12` should be resolved as a string.

Linting a openapi 3.0 spec described as a YAML 1.2 document makes the "valid-example" rule fail when the parsed implicit stringed example look like a date.

**To Reproduce**

1. Given this OpenAPI document

**random.1.2.openapi.yaml**
```yaml
%YAML 1.2
---
openapi: 3.0.0
info:
  title: Random title
  description: Random description
  version: 0.0.1
  contact:
    email: random@random.com
paths: {}
servers:
  - url: https://www.random.com
components:
  schemas:
    RandomRequest:
      description: A random request
      type: object
      properties:
        implicit_string_date:
          description: Some YAML 1.2 implicit string.
          type: string
          example: 2012-10-12
        another_implicit_string_date:
          description: Some string.
          type: string
          example: x20121012
        explicit_string_date:
          description: Explicit string.
          type: string
          example: "2012-10-12"
```

2. Run this CLI command '....'

```bash
$ yarn spectral lint ./random.1.2.openapi.yaml
```

3. See error
```text
Adding OpenAPI 3.x functions
OpenAPI 3.x detected

random.1.2.openapi.yaml
 19:30  warning  valid-example  "implicit_string_date" property type should be string

✖ 1 problem (0 errors, 1 warning, 0 infos)
```
**Expected behavior**
By default: 
- Honoring the `%YAML` directive (when defined) and using the spec recommended schema to parse it
- Documenting the default YAML version used to parse a document when the document doesn't specify a `%YAML` directive 

Bonus features:
- Displaying in the CLI output the YAML document format version (either specified in the document or fallen-back default)
 - Allowing the user to specify through an argument the YAML version that should be used for documents without a `%YAML` directive

**Environment (remove any that are not applicable):**
@stoplight/spectral/4.0.2 win32-x64 node-v10.14.2

**Additional context**
You guys rock!
