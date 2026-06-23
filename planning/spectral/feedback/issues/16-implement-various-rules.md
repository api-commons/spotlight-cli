---
number: 16
title: "Implement Various Rules"
state: "closed"
labels: ["enhancement"]
author: "lott-ai"
created: "2018-09-28T21:19:42Z"
updated: "2018-12-11T06:05:11Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/16"
---

# Implement Various Rules

Combination of rules taken from [sway](https://github.com/apigee-127/sway/blob/master/docs/API.md#module_sway.ValidationResults), [swaggerHub,](https://github.com/swagger-api/swagger-editor/blob/master/src/plugins/validate-semantic/validators/2and3/paths.js) and in-house

### API Info

- [x] API `title` must be present and non-empty string~~ (included in spec schema)
- [x] API `description` must be present and non-empty string
- [x] API `license` must be present and non-empty string
- [x] API `contact` must be present and non-empty string

### Paths

- [x] Query strings in paths are not allowed.
- [x] Path parameter declarations do not allow empty names (/path/{} is not valid) 
- [x] (custom) Path parameter definition need a matching parameter declaration
- [x] (custom) Path parameter declaration need a matching parameter definition
- [x] (custom) Path strings must be (equivalently) different (Example: /pet/{petId} and /pet/{petId2} are the same)
- [x] (custom/sibling?) Path parameters must have required: true

### Operations

- [x] `operationId` must be present and non-empty string
- [x] (custom/unique?)`operationId` values must be unique within the API definition
- [x] Operation `summary` must be present and non-empty string
- [x] `summary` should start with upper case and end with a dot
- [x] Operation `description` must be present and non-empty string
- [x] Operation must have a tag and non-empty string
- [x] Operation must have one and only one tag
- [x] (custom/atLeast?) Operation must have at least one 2xx response
- [x] Operation must have a default response
- [x] (xor with path extension) Operation cannot have both a `in:body` and a in:formData` parameter
- [x] (custom/max?) Operation must have only one `in:body` parameter
- [x] (custom/unique?) Operations must have unique (name + in combination) parameters
- [x] (custom/includes?) Operations with Parameters of in: formData must include application/x-www-form-urlencoded or multipart/form-data in their consumes property

### Parameters

- [ ] (custom/sibling/includes?) Default values must be present in enum
- (skip since we don't allow type file in the ui) Parameters with type: file must have in: formData

### Models

- skip (custom/truthy? but how nested?) All model properties must have examples
- [ ] API must not have local definitions (i.e. only $refs are allowed)
- skip (custom) Combine models when practical
- [x] Every model should have a description
- skip (custom) List all required properties before any optional properties
- [ ] (custom) Declared definition was not used in the document

### Security
- [x] Security requirements must match a security definition
- [x] (covered by resolver) Security scope definition ${scope} could not be resolved

### References
- [x] (xor?) Sibling values are not allowed alongside $refs
-  (resolver) References must point to existing documents or document fragments
- [x] $ref paths must begin with #/
- [covered by resolver] $refs must reference a valid location in the document
- [x] (pattern) $ref values must be RFC3986-compliant percent-encoded URIs

### Schemas
- [ ]  Schemas with type: array require a sibling items: field
- [x]  items must be an object
- [ ] The required properties for a Schema Object must be defined in the object or one of its ancestors
- [PUNT] minimum must be lower value than maximum
- [PUNT] minLength must be lower value than maxLength
- [PUNT] minProperties must be lower value than maxProperties
- [x] Schema type key must be a string
- [ ] Read only properties cannot be marked as required by a schema.
- [ ] \\Z anchors are not allowed in regular expression patterns 

### Naming strategy

- [x] (custom/pattern?) Enforce naming strategy for paths, parameters and property names: `snake_lower | Snake_Upper | camelLower | CamelUpper`
- [ ] (custom/pattern?) Avoid using reserved words for model/property names (e.g. error, return, type, input) for paths, parameters and property names
