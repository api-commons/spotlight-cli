---
number: 1645
title: "oas3-valid-schema-example not thrown with allOf alongside example"
state: "open"
labels: ["triaged"]
author: "Amachua"
created: "2021-06-01T12:26:34Z"
updated: "2024-05-31T12:35:05Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1645"
---

# oas3-valid-schema-example not thrown with allOf alongside example

## Describe the bug

Using `example` and `allOf` keywords on the same object do not properly throw an issue 
when the example schema is not valid.

## Reproduction steps

**Spectral version**: 5.9.1

Given the OpenAPI specification `dummy.yaml`:

```yaml
openapi: 3.0.0
info:
  title: Dummy title
  description: Dummy description
  version: 1.0.0
  contact:
    name: Dummy name
    url: https://dummy-url.com
    email: dummy@dummy.com
  license:
    url: https://dummy-license.com
    name: Dummy name
tags:
  - name: dummy
servers:
  - url: https://dummy.com

paths: {}
components:
  schemas:
    MainDummyDefinition:
      example:
        {
          "dummy_array": []
        }
      allOf:
        - $ref: "#/components/schemas/DummyDefinition"
    DummyDefinition:
      type: object
      properties:
        dummy_array:
          type: array
          minItems: 1
```

When I run the command line:

> spectral lint dummy.yaml
> 21:25  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.    components.schemas.MainDummyDefinition

## Expected behavior

I want that the issue `oas3-valid-schema-example` is thown on line 24 as the example is not valid
(`dummy_array` doesn't meet the minItems requirement).

## Additional context

When I change the example location like in the following `dummy2.yaml` specification:

```yaml
openapi: 3.0.0
info:
  title: Dummy title
  description: Dummy description
  version: 1.0.0
  contact:
    name: Dummy name
    url: https://dummy-url.com
    email: dummy@dummy.com
  license:
    url: https://dummy-license.com
    name: Dummy name
tags:
  - name: dummy
servers:
  - url: https://dummy.com

paths: {}
components:
  schemas:
    MainDummyDefinition:
      allOf:
        - $ref: "#/components/schemas/DummyDefinition"
    DummyDefinition:
      example:
        {
          "dummy_array": []
        }
      type: object
      properties:
        dummy_array:
          type: array
          minItems: 1
```

When I run the command line:

> spectral lint dummy2.yaml
> 21:25  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.    components.schemas.MainDummyDefinition
> 27:25    error  oas3-valid-schema-example      `dummy_array` property should not have fewer than 1 items  components.schemas.DummyDefinition.example.dummy_array  

--> The example is well linted as the `oas3-valid-schema-example` is thrown.
