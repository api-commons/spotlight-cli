---
number: 1780
title: "oas3-valid-oas-content-example value type"
state: "open"
labels: ["enhancement", "triaged", "OpenAPI"]
author: "DerManoMann"
created: "2021-08-19T02:26:49Z"
updated: "2024-05-31T12:35:08Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1780"
---

# oas3-valid-oas-content-example value type

Something somewhere between a question and a bug report...

`spectral` reports an error for `oas3-valid-oas-content-example` where the value of a content example is not an object.

Given this fragment in the spec:
```yaml
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                oneOf:
                  - { $ref: '#/components/schemas/Result' }
                  - { type: boolean }
              examples:
                result:
                  summary: 'An result object.'
                  value: { success: true }
                boolz:
                  summary: 'A boolean value.'
                  value: 'false'
```
this error is reported:
```shell
oas3-valid-oas-content-example  `value` property type should be object  paths./users.post.responses[200].content.application/json.examples.boolz.value
```

The specs (3.0.3 and 3.1.0) the type of `value` as `Any`.

`swagger-cli` does not report this as an issue.

spectral version: 5.9.1
OS: macos
