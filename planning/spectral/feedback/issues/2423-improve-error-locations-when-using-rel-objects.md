---
number: 2423
title: "Improve error locations when using $rel objects"
state: "open"
labels: ["enhancement", "triaged"]
author: "nmoreaud"
created: "2023-03-17T09:01:46Z"
updated: "2024-05-31T12:34:22Z"
comments: 2
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2423"
---

# Improve error locations when using $rel objects

Hello,

I use zalando spectral ruleset, and I wish to have better error locations in case of $rel objects.
Do you think it can be improved?

For example:
```yaml
openapi: 3.0.0

paths:
  '/test':
    get:
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Test'

components:
  schemas:
    Test:
      type: object
      properties:
        BAD1:    <-- real error (bad case)
          $ref: '#/components/schemas/Value'
        test2:
          $ref: '#/components/schemas/Value'

    Value:     <-- detected error
      type: object
      properties:
        val:
          type: string
```

```
npx @stoplight/spectral-cli lint v1.yaml

v1.yaml
  1:1   error  oas3-schema                             Object must have required property "info".
 24:11  error  must-use-snake-case-for-property-names  Property name has to be ASCII snake_case    components.schemas.Value
```

Rule definition from https://raw.githubusercontent.com/baloise-incubator/spectral-ruleset/main/zalando.yml
```yaml
  must-use-snake-case-for-property-names:
    message: Property name has to be ASCII snake_case
    description: MUST property names must be ASCII snake_case [118]
    documentationUrl: https://opensource.zalando.com/restful-api-guidelines/#118
    severity: error
    given: $.paths.*.*[responses,requestBody]..content..schema..properties.*~
    then:
      function: pattern
      functionOptions:
        match: ^[a-z_][a-z_0-9]*$
```

In my project, there was an error in a "link" to resource (HATEOAS).
There are so many "links" that it is hard to identify where the error comes from.

Original issue: https://github.com/baloise-incubator/spectral-ruleset/issues/37
