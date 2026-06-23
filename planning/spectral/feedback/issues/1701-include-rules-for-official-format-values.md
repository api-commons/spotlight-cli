---
number: 1701
title: "Include rules for official `format` values"
state: "closed"
labels: ["enhancement", "OpenAPI"]
author: "jparise"
created: "2021-06-29T21:31:57Z"
updated: "2023-03-23T16:06:32Z"
comments: 0
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/1701"
---

# Include rules for official `format` values

**User story.**
As a spec author, I would like to know when a `format` value isn't officially supported by OAS.

**Is your feature request related to a problem?**
OAS3 defines a specific set of `format` values for each `type`: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types

It's helpful to know when a `format` value falls outside the supported set.

**Describe the solution you'd like**
Here are some rules we've been using locally:

```yaml
  oas3-integer-format:
    description: Must use an official integer format
    documentationUrl: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types
    given: $..properties[?(@.type == 'integer')]
    severity: error
    then:
      field: format
      function: enumeration
      functionOptions:
        values:
          - int32
          - int64
  oas3-number-format:
    description: Must use an official number format
    documentationUrl: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types
    given: $..properties[?(@.type == 'number')]
    severity: error
    then:
      field: format
      function: enumeration
      functionOptions:
        values:
          - float
          - double
  oas3-string-format:
    description: Must use an official string format
    documentationUrl: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#data-types
    given: $..properties[?(@.type == 'string')]
    severity: error
    then:
      field: format
      function: enumeration
      functionOptions:
        values:
          - byte
          - binary
          - date
          - date-time
          - password
```
