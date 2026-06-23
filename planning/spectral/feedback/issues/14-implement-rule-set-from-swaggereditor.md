---
number: 14
title: "Implement rule set from SwaggerEditor"
state: "closed"
labels: ["enhancement"]
author: "rossmcdonald"
created: "2018-09-28T19:11:57Z"
updated: "2018-10-01T13:16:11Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/14"
---

# Implement rule set from SwaggerEditor

### OAS2

FormData
  - [ ] Parameter in: ${value.in} is invalid did you mean in: formData?
  - [ ] Parameters with type: file must have in: formData
  - [ ] Operations with parameters of type: file must include multipart/form-data in their consumes property
  - [ ] Operations with Parameters of in: formData must include application/x-www-form-urlencoded or multipart/form-data in their consumes property
  - [ ] Parameters cannot have both a in: body and in: formData as formData _will_ be the body

Security
  - [ ] Security requirements must match a security definition
  - [ ] Security scope definition ${scope} could not be resolved

Schema
  - [ ] minimum must be lower value than maximum
  - [ ] minLength must be lower value than maxLength
  - [ ] minProperties must be lower value than maxProperties
  - [ ] Schema type key must be a string
  - [ ] Read only properties cannot be marked as required by a schema.
  - [ ] \\Z anchors are not allowed in regular expression patterns

Paths
  - [ ] Empty path parameter declarations are not valid
  - [ ] Equivalent paths are not allowed.

Parameters
  - [ ] Path parameters must have required: true. You can always create another path/operation without this parameter to get the same behaviour.
  - [ ] Multiple body parameters are not allowed.

Operations
  - [ ] Operations must have unique operationIds.
