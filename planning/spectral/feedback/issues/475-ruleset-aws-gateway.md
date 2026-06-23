---
number: 475
title: "ruleset: AWS Gateway"
state: "closed"
labels: ["enhancement", "help wanted"]
author: "philsturgeon"
created: "2019-08-22T14:12:26Z"
updated: "2022-07-06T15:05:36Z"
comments: 8
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/475"
---

# ruleset: AWS Gateway

AWS Gateway says it supports OpenAPI, but it's only a subset, with some extra validation rules and other non-standard stuff. We should extend the core rulesets to support AWS-flavoured OpenAPI, to help our users navigate this tricky situation.

The following rules are taken from [AWS Gateway Known Issues](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-known-issues.html).

- [ ] Path segments can only contain alphanumeric characters, hyphens, periods, commas, and curly braces. Path parameters must be separate path segments. For example, "resource/{path_parameter_name}" is valid; "resource{path_parameter_name}" is not.

- [ ] Model names can only contain alphanumeric characters.

- [ ] For input parameters, only the following attributes are supported: name, in, required, type, description. Other attributes are ignored.

- [ ] The `securitySchemes` type, if used, must be `apiKey`. However, OAuth 2 and HTTP Basic authentication are supported via Lambda authorizers; the OpenAPI configuration is achieved via vendor extensions.

- [ ] The `deprecated` field is is not supported and is dropped in exported APIs.

- [ ] API Gateway models are defined using JSON schema draft 4, instead of the JSON schema used by OpenAPI.

- [ ] The `additionalProperties` and `anyOf` keywords are not supported in Models.

- [ ] The `discriminator` keyword is not supported in any schema object.

- [ ] The `example` keyword is not supported.

- [ ] `exclusiveMinimum` is not supported by API Gateway.

- [ ] The `maxItems` and `minItems` tags are not included in simple request validation. To work around this, update the model after import before doing validation.

- [ ] `oneOf` is not supported by API Gateway.

- [ ] The `readOnly` field is not supported.

- [ ] Response definitions of the `"500": {"$ref": "#/responses/UnexpectedError"}` form is not supported in the OpenAPI document root. To work around this, replace the reference by the inline schema.

- [ ] Numbers of the `Int32` or `Int64` type are not supported. An example is shown as follows:

```
    "elementId": {
        "description": "Working Element Id",
        "format": "int32",
        "type": "number"
    }
```

- [ ] Decimal number format type (`"format": "decimal"`) is not supported in a schema definition.

- [ ] In method responses, schema definition must be of an object type and cannot be of primitive types. For example, `"schema": {"type": "string"}` is not supported. However, you can work around this using the following object type:

```   
     "schema": {
         "$ref": "#/definitions/StringResponse"
     }

     "definitions": {
        "StringResponse": {
          "type": "string"
        }
      }
```

- [ ] API Gateway doesn't use root level security defined in the OpenAPI specification. Hence security needs to be defined at an operation level to be appropriately applied.

Our friends over at SwaggerHub [have noticed other problems](https://app.swaggerhub.com/help/integrations/amazon-api-gateway#limitations) not on this list.

**OAS2**

- Form parameters (in: formData) are not supported and are ignored.

**OAS3**

- Cookie parameters (in: cookie) are not supported and are ignored.

- Response code ranges (4XX) are not supported. Use specific response codes instead.

- TRACE operation definitions are not supported.
