---
number: 2111
title: "Unexpected oas3-valid-media-example error on read only fields"
state: "closed"
labels: ["duplicate"]
author: "alexg-axis"
created: "2022-04-01T15:23:08Z"
updated: "2022-04-07T14:38:57Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2111"
---

# Unexpected oas3-valid-media-example error on read only fields

**Describe the bug**

The following error is thrown on a post body's example.

```
oas3-valid-media-example  "example" property must have required property "id"
```

The field is indeed required, but it is marked as read only - hence it should not be required in the post body.

**To Reproduce**

```yaml
# test.yml
openapi: 3.0.0

info:
  title: Reproduction
  version: 1.0.0

servers:
  - url: http://localhost:8080/api/v1
    description: Development server

paths:
  /test:
    post:
      summary: Create
      requestBody:
        required: true
        content:
          application/json:
            schema:
              oneOf:
                - $ref: '#/components/schemas/Payload'
            example:
              foo: 1
              bar: 2
      responses:
        '201':
          description: Created
          content:
            application/json:
              schema:
                oneOf:
                  - $ref: '#/components/schemas/Payload'
              example:
                id: 1
                foo: 2
                bar: 3

components:
  schemas:
    Payload:
      type: object
      required:
        - id
        - foo
        - bar
      properties:
        id:
          type: number
          description: Some id
          readOnly: true
        foo:
          type: number
          description: Some field
        bar:
          type: number
          description: Some other field
```

```yaml
extends: spectral:oas
```

```shell
# .spectral.yml
spectral lint test.yml
```

```
  3:6   warning  info-contact              Info object must have "contact" object.                        info
  3:6   warning  info-description          Info "description" must be present and non-empty string.       info
 13:10  warning  operation-description     Operation "description" must be present and non-empty string.  paths./test.post
 13:10  warning  operation-operationId     Operation must have "operationId".                             paths./test.post
 13:10  warning  operation-tags            Operation must have non-empty "tags" array.                    paths./test.post
 22:21    error  oas3-valid-media-example  "example" property must have required property "id"            paths./test.post.requestBody.content.application/json.example <-- unexpected
 22:21    error  oas3-valid-media-example  "example" property must match exactly one schema in oneOf      paths./test.post.requestBody.content.application/json.example <-- expected given the above error, but otherwise unexpected
```

**Expected behavior**

Read only fields that are marked required should not be required in an example when POSTing or PUTing the body.

```
  3:6   warning  info-contact              Info object must have "contact" object.                        info
  3:6   warning  info-description          Info "description" must be present and non-empty string.       info
 13:10  warning  operation-description     Operation "description" must be present and non-empty string.  paths./test.post
 13:10  warning  operation-operationId     Operation must have "operationId".                             paths./test.post
 13:10  warning  operation-tags            Operation must have non-empty "tags" array.                    paths./test.post
```

**Environment (remove any that are not applicable):**
 - Library version: 6.3.0
 - OS: macOS Monterey
