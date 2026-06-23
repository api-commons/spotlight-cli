---
number: 15
title: "Implement rule set from Sway"
state: "closed"
labels: ["enhancement"]
author: "casserni"
created: "2018-09-28T19:14:10Z"
updated: "2018-10-01T13:10:55Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/15"
---

# Implement rule set from Sway

rules taken from 
[sway](https://github.com/apigee-127/sway/blob/master/docs/API.md#module_sway.ValidationResults)

- [ ] Operations cannot have both a body parameter and a formData parameter | Error
- [ ] Operations must have only one body parameter | Error
- [ ] Operations must have unique (name + in combination) parameters | Error (also in swagger)
- [ ] Operations must have unique operationId | Error
- [ ] Path parameters declared in the path string need matching parameter definitions (Either at the path-level or the operation) | Error
- [x] Path parameter declarations do not allow empty names (/path/{} is not valid) | Error
- [ ] Path parameters definition (Either at the path-level or the operation) need matching paramater declarations | Error
- [ ] Path strings must be (equivalently) different (Example: /pet/{petId} and /pet/{petId2} are equivalently the same and would generate an error) | Error
- [ ] Paths must have unique (name + in combination) parameters | Error
- [ ] Referenceable definitions should be used by being referenced in the appropriate way | Warning
- [ ] References must point to existing documents or document fragments | Error
- [ ] The default property for Schema Objects, or schema-like objects (non-body parameters), must validate against the respective JSON Schema | Error
- [ ] Circular composition/inheritance for Schema Objects is not allowed (You can have circular references everywhere except in composition/inheritance.) | Error
- [ ] The items property for Schema Objects, or schema-like objects (non-body parameters), is required when type is set to array (See swagger-api/swagger-spec/issues/174) | Error
- [ ] The required properties for a Schema Object must be defined in the object or one of its ancestors | Error
