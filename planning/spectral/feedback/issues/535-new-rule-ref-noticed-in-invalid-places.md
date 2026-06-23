---
number: 535
title: "new rule: $ref noticed in invalid places"
state: "closed"
labels: ["enhancement", "help wanted", "p/medium", "OpenAPI", "json-refs"]
author: "XVincentX"
created: "2019-09-09T11:16:27Z"
updated: "2023-03-23T16:20:41Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/535"
---

# new rule: $ref noticed in invalid places

In both OAS2 and OAS3, $ref is only allowed in certain places. Spectral is resolving all references anywhere, instead of following the rules of the specification. 

Consider this document:

```yml
swagger: "2.0"
host: localhost
info:
  description: bar
  title: "IO APIs, shared specs"
  version: "0.1"
paths: {}
definitions:  # definitions non può contenere $ref
  $ref: file.yml
```

This is technically invalid OAS2, since refs is not allowed here. Spectral does not give any feedback, just says this is valid.

I understand and support the use case, however it would be great if I could at least see a warning saying "Yo man, I resolved this for you but you should not do this"
