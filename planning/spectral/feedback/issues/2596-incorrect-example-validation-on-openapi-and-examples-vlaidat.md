---
number: 2596
title: "Incorrect example validation on OpenAPI and examples vlaidation on AsyncAPI when using `allOf`."
state: "open"
labels: ["t/bug", "p/high", "triaged", "team/bad-news-bears"]
author: "Swimburger"
created: "2024-03-11T14:38:54Z"
updated: "2024-09-03T07:30:03Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2596"
---

# Incorrect example validation on OpenAPI and examples vlaidation on AsyncAPI when using `allOf`.

**Describe the bug**
When using `allOf` to merge schema's, the example property in OpenAPI, and examples in AsyncAPI, is incorrectly validated.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document '...'

```yaml
openapi: 3.1.0

components:
  schemas:
    Foo:
      type: object
      additionalProperties: false
      allOf:
        - $ref: "#/components/schemas/Bar"
        - type: object
          required: [prop2]
          additionalProperties: false
          properties:
            prop2:
              type: string
      example:
        {
          prop1: "test",
          prop2: "test",
        }

    Bar:
      type: object
      additionalProperties: false
      properties:
        prop1:
          type: string
```

```yaml
asyncapi: 2.6.0

channels:
  /:
    subscribe:
      operationId: operation-id
      message:
        oneOf:
          - $ref: "#/components/messages/Foo"

components:
  messages:
    Foo:
      messageId: foo
      payload:
        $ref: "#/components/schemas/Foo"

  schemas:
    Foo:
      type: object
      additionalProperties: false
      allOf:
        - $ref: "#/components/schemas/Bar"
        - type: object
          required: [prop2]
          additionalProperties: false
          properties:
            prop2:
              type: string
      examples:
      - {
          prop1: "test",
          prop2: "test",
        }

    Bar:
      type: object
      additionalProperties: false
      properties:
        prop1:
          type: string
```

4. with the following spectral config:
```yaml
extends: ["spectral:oas", "spectral:asyncapi"]

```

3. Run this CLI command '....'

```bash
spectral lint {openapi,asyncapi}.yml --ruleset .spectral.yml
```

6. See error
```
/Users/niels/spectral-repro/asyncapi.yml
  1:1  warning  asyncapi-info-contact           Info object must have "contact" object.
  1:1  warning  asyncapi-info-description       Info "description" must be present and non-empty string.
  1:1  warning  asyncapi-info-license           Info object must have "license" object.
  1:1    error  asyncapi-schema                 Object must have required property "info"
  1:1  warning  asyncapi-servers                AsyncAPI object must have non-empty "servers" object.
  1:1  warning  asyncapi-tags                   AsyncAPI object must have non-empty "tags" array.
 5:15  warning  asyncapi-operation-description  Operation "description" must be present and non-empty string.  channels./.subscribe
 31:9    error  asyncapi-payload-examples       Property "prop2" is not expected to be here                    components.schemas.Foo.examples[0]
 31:9    error  asyncapi-payload-examples       Property "prop1" is not expected to be here                    components.schemas.Foo.examples[0]
 31:9    error  asyncapi-schema-examples        Property "prop2" is not expected to be here                    components.schemas.Foo.examples[0]
 31:9    error  asyncapi-schema-examples        Property "prop1" is not expected to be here                    components.schemas.Foo.examples[0]

/Users/niels/spectral-repro/openapi.yml
  1:1   warning  info-contact               Info object must have "contact" object.
  1:1   warning  info-description           Info "description" must be present and non-empty string.
  1:1   warning  oas3-api-servers           OpenAPI "servers" must be present and non-empty array.
  1:1     error  oas3-schema                Object must have required property "info".
  5:9   warning  oas3-unused-component      Potentially unused component has been detected.           components.schemas.Foo
 16:15    error  oas3-valid-schema-example  Property "prop2" is not expected to be here               components.schemas.Foo.example

✖ 17 problems (7 errors, 10 warnings, 0 infos, 0 hints)
```

**Expected behavior**
`asyncapi-payload-examples`, `asyncapi-schema-examples`, and `oas3-valid-schema-example`, should not be thrown.

**Environment (remove any that are not applicable):**
 - Library version: 6.11.0
 - OS: macOS 14.2.1

You can find a repo reproducing the issue here: https://github.com/Swimburger/spectral-repro
