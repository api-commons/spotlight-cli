---
number: 1732
title: "AsyncAPI rule to validate property example in schema"
state: "closed"
labels: ["enhancement", "AsyncAPI"]
author: "aleung"
created: "2021-07-08T03:55:57Z"
updated: "2022-03-24T05:37:12Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1732"
---

# AsyncAPI rule to validate property example in schema

**User story.**
As a API designer, I can run spectral to check my AsyncAPI, so that I can find out invalid property example in schema.

**Describe the solution you'd like**
Current Spectral AsyncAPI ruleset has a `asyncapi-schema-examples` rule to validate `examples` under a schema. However it doesn't check the `example` of a property. I'd expect there is an AsyncAPI rule that is equivalent to OAS rule `oas3-valid-example`.

**Additional context**
Below is an AsyncAPI snippet with invalid example:

``` yaml
components:
  schemas:
    id:
      type: integer
      example: "123456"
```
