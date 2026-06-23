---
number: 2865
title: "Missing validation for discriminator property existence in schema properties"
state: "open"
labels: []
author: "RasankRam"
created: "2025-11-08T01:09:24Z"
updated: "2025-11-08T01:11:11Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2865"
---

# Missing validation for discriminator property existence in schema properties

Hi!

According to the OpenAPI specification, when a `discriminator.propertyName` is specified, the property must be present in the schema's `properties` section (though it doesn't have to be `required`, as per [OpenAPI 3.2.0](https://spec.openapis.org/oas/v3.2.0.html#discriminator-object)). However, the linter does not detect this violation.

I've created a [repository demo](https://github.com/RasankRam/discriminator_linting) (see `/spectral-issue` folder).

### Expected behavior

The linter should fail validation and report an error similar to: `discriminator property 'petType' is not defined in schema properties`. Probably need to add a validation rule for discriminator property existence in OpenAPI 3.x schemas.

### Current behavior

Spectral passes without errors or warnings related to this issue, even though the discriminator references a non-existent property.

### In-Repository Example

```yaml
Pet:
  type: object
  properties:
    name:
      type: string
    age:
      type: integer
  discriminator:
    propertyName: petType  # ERROR: petType not in properties
```    
According to the [OpenAPI 3.1.2 specification](https://spec.openapis.org/oas/v3.1.2.html#discriminator-object):

> The expectation now is that a property with name petType MUST be present in the response payload
