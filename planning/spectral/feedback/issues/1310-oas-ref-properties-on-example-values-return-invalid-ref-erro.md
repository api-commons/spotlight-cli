---
number: 1310
title: "OAS - '$ref' properties on example values return invalid-ref errors."
state: "open"
labels: ["t/bug", "help wanted", "triaged", "json-refs"]
author: "kevinswiber"
created: "2020-08-22T21:14:09Z"
updated: "2026-05-23T20:12:50Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1310"
---

# OAS - '$ref' properties on example values return invalid-ref errors.

When a `$ref` property exists in an example value, `@stoplight/json-ref-resolver` attempts to dereference the value.

My interpretation of the specification leads me to believe that this shouldn't happen.  From the OAS 3.0.3 spec:

Field Name | Type | Description
---|:---:|---
value | Any | Embedded literal example. The `value` field and `externalValue` field are mutually exclusive. To represent examples of media types that cannot naturally represented in JSON or YAML, use a string value to contain the example, escaping where necessary.

**To Reproduce**

1. Given this OpenAPI document:

```yaml
openapi: '3.0.0'
info:
  title: example-ref
  description: Incorrect validation on examples.
  version: '1.0'
  contact: {}
servers:
- url: http://localhost:3000
paths:
  /examples:
    post:
      description: Post an example.
      operationId: postExamples
      tags:
        - Example
      requestBody:
        description: An example body that contains a '$ref' property.
        content:
          'application/json':
            schema:
              type: object
              example:
                $ref: '#/should/not/validate'
      responses:
        '201':
          description: Created
tags:
  - name: Example
```

2. Run this CLI command:

```
spectral lint example.yaml
```

3. See error:

```
 23:23  error  invalid-ref  '#/should/not/validate' does not exist

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

**Expected behavior**

Example values should be transparent to the OAS ruleset.  This is a valid OpenAPI definition.

**Environment (remove any that are not applicable):**

 - Library version: 5.5.0-beta9
 - OS: macOS Catalina 10.15.6
