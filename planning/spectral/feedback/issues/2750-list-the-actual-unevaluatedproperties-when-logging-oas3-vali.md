---
number: 2750
title: "List the actual unevaluatedProperties when logging oas3-valid-schema-example error/warning"
state: "open"
labels: []
author: "DavidBiesack"
created: "2024-12-02T23:26:52Z"
updated: "2024-12-02T23:26:52Z"
comments: 0
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2750"
---

# List the actual unevaluatedProperties when logging oas3-valid-schema-example error/warning

**User story.**

As a API designer, I can use Spectral to validate examples and clearly see which unevaluated properties exist, so that I can update my examples to be correct

**Is your feature request related to a problem?**

Yes. When Spectral checks examples against a schema, and the schema has

```yaml
unevaluatedProperties: false
```
and the schema `example` or `examples` contains unexpected properties,
Spectral just shows:

```
 error  oas3-valid-schema-example  "example" property must not have unevaluated properties   
```

**Describe the solution you'd like**
When there are unevaluated properties, list which properties are not evaluated.

**Additional context**
 Here is a sample openapi.yaml source file:

```yaml
openapi: 3.1.0

info:
  title: Unevaluated Property
  description: OpenAPIwith invalid schema example (unevaluated property)
  version: "1.0.0"
  contact: {}
tags:
  - name: Example
    description: Example
servers:
  - url: https://www.example.com/api
paths:

  /present:
    get:
      summary: Get a present
      description: Get a present
      operationId: getAPresent
      tags:
        - Example
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/present'
        4XX:
          description: OK
          content:
            application/json:
              schema:
                type: object

components:
  schemas:
    present:
      title: A present
      type: object
      unevaluatedProperties: false
      properties:
        openedOn:
          description: The date the present was opened.
          type: string
          format: date
          minLength: 10
          maxLength: 10
        receivedOn:
          description: The date the present was received.
          type: string
          format: date
          minLength: 10
          maxLength: 10
      example:
        recievedOn: 2024-12-25
        openedOn: 2024-12-25
```

running
```bash
$ spectral lint -r ~/config/oas-spectral-ruleset.yaml openapi.yaml

 55:15  error  oas3-valid-schema-example  "example" property must not have unevaluated properties  components.schemas.present.example

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

This only tells me the `example` must not have unevaluated properties, but this is not specific enough.
In this case, it is not to hard to deduce the problem (`receivedOn` was misspelled as `recievedOn`)
but in real world examples where a schema may have many properties (especially when 
composing schemas with `allOf`), it is not immediately obvious which properties 
are not defined with a `properties` constraint. I'd like to see the violations listed, such as:

``` text
55:15  error  oas3-valid-schema-example  "example" property must not have unevaluated properties: 
components.schemas.present.example
- recievedOn is not evaluated
```

Note: My ruleset file contains:
```yaml
extends:
  - spectral:oas
```
