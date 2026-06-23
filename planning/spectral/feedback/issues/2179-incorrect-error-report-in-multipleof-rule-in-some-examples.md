---
number: 2179
title: "Incorrect error report in multipleOf rule in some examples"
state: "closed"
labels: ["duplicate"]
author: "lucianojs"
created: "2022-06-09T02:22:24Z"
updated: "2022-06-10T16:09:44Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2179"
---

# Incorrect error report in multipleOf rule in some examples

**Describe the bug**
Incorrect error in multipleOf rule 

**To Reproduce**

In this sample specification:

```
openapi: 3.1.0
info:
  title: example
  version: 1.0.0
  description: example
  contact:
    email: user@gmail.com
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
servers:
  - url: https://google.com
tags:
  - name: example
    description: example
paths:
  /users:
    post:
      tags:
        - example
      operationId: example
      description: example
      summary: example
      requestBody:
        description: Example Error 
        content:
          application/json:
            schema:
              title: location
              description: location
              type: object
              properties:
                latitude:
                  description: Valor em graus decimais (DD)
                  type: number
                  maximum: 90
                  minimum: -90
                  multipleOf: 1.0e-06
                  example: -15.793889
                longitude:
                  description: Valor em graus decimais (DD)
                  type: number
                  maximum: 90
                  minimum: -90
                  multipleOf: 1.0e-06
                  example: -47.882778
```

When I running this command:

spectral lint error_example_spectral.yaml

show this message:

```
/home/user/projects/example/error_example_spectral.yaml
 50:28  error  oas3-valid-schema-example  "example" property must be multiple of 0.000001  paths./users.post.requestBody.content.application/json.schema.properties.longitude.example

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

**Expected behavior**
```
No results with a severity of 'error' found!
```


**Additional context**
My .spectral.json content

```
{
  "extends": ["spectral:oas"]
}
```
