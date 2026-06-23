---
number: 170
title: "'TypeError: Cannot read property 'parent' of null' when linting from cli"
state: "closed"
labels: ["t/bug", "released"]
author: "nulltoken"
created: "2019-04-30T12:39:04Z"
updated: "2019-05-01T22:28:31Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/170"
---

# 'TypeError: Cannot read property 'parent' of null' when linting from cli

### **I'm submitting a...**
  - [x] bug report
  - [ ] feature request

### What is the current behavior?

Given a following `repro/two.yaml` file
```
swagger: '2.0'

info:
  title: Repro two
  description: Endpoint definition
  version: "1.0.0"
  contact:
    name: toto
host: not-example.com
schemes:
  - https
basePath: /repro/two

paths:
  /quotes_requests:
    post:
      summary: Gets nothing either.
      operationId: "12"
      description: Cf. summary
      tags: [yep]
      parameters:
        - name: body
          description: Content.
          in: body
          schema:
            $ref: '#/definitions/AnotherDefinition'
      responses:
        204:
          description: Zip

definitions:
  AnotherDefinition:
    type: object
    properties:
      special:
        description:
```

linting from the cli returns a error.

```
$ yarn spectral lint ./repro/two.yaml
yarn run v1.15.2
$ C:\REDACTED\node_modules\.bin\spectral lint ./repro/two.yaml
linting ./repro/two.yaml
OpenAPI 2.0 (Swagger) detected
Encountered error when running rule 'oas2-schema' on node at path '$':
TypeError: Cannot read property 'parent' of null
No errors or warnings found!
Done in 1.01s.
```

*Note:* Providing a valued description in the very last node makes the issue disappear.

### What is the expected behavior?

Either:
 - Remove the error message if it's not supposed to happen
 - Provide a more user-friendly/actionable error message (if another error is blocked from popping up by this one)

### What is the motivation / use case for changing the behavior?
N/A

### Please tell us about your environment:

  - Version: @stoplight/spectral/2.0.6 
  - Framework: win32-x64 node-v10.14.2
  - Language: all
