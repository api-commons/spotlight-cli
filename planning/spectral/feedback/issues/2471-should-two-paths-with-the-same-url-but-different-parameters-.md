---
number: 2471
title: "Should two paths with the same url but different parameters and different operations are consider to need to be a path-params violation."
state: "closed"
labels: []
author: "mydeveloperday"
created: "2023-05-16T12:03:32Z"
updated: "2023-05-16T13:11:36Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2471"
---

# Should two paths with the same url but different parameters and different operations are consider to need to be a path-params violation.

**Describe the bug**
Possible false positive, when using 2 methods with different operations one post and one get
error  path-params                 Paths "/api/v1/abc/{foo}" and "/api/v1/abc/{bar}" must not be equivalent. 
paths./api/v1/licenses/{licenseName}


**To Reproduce**

--- .openapi.yaml
```yaml
openapi: 3.0.0
paths:
  /api/v1/abc/{foo}:
    get:
      summary: ABC
      operationId: GetApiV1ABCFoo
      parameters:
        - name: foo
          in: path
          required: true
          example: apples
          schema:
            type: string
      responses:
        '200':
          description: Successful response
  /api/v1/abc/{bar}:
    post:
      summary: ABC
      operationId: PostApiV1ABCBar
      parameters:
        - name: bar
          in: path
          required: true
          example: oranges
          schema:
            type: string
      responses:
        '201':
          description: Successful response

servers:
  - url: 'http://server.com'
```
--- .spectral
```yaml
extends: [spectral:oas]
```

```bash
npx spectral lint openapi.yaml
```

  1:1   warning  info-contact           Info object must have "contact" object.
  1:1   warning  info-description       Info "description" must be present and non-empty string.
  1:1     error  oas3-schema            Object must have required property "info".
  4:9   warning  operation-description  Operation "description" must be present and non-empty string.              paths./api/v1/abc/{foo}.get
  4:9   warning  operation-tags         Operation must have non-empty "tags" array.                                paths./api/v1/abc/{foo}.get
 17:21    error  path-params            Paths "/api/v1/abc/{foo}" and "/api/v1/abc/{bar}" must not be equivalent.  paths./api/v1/abc/{bar}
 18:10  warning  operation-description  Operation "description" must be present and non-empty string.              paths./api/v1/abc/{bar}.post
 18:10  warning  operation-tags         Operation must have non-empty "tags" array.                                paths./api/v1/abc/{bar}.post


**Expected behavior**
I'm expecting to not see this
 17:21    error  path-params            Paths "/api/v1/abc/{foo}" and "/api/v1/abc/{bar}" must not be equivalent.  paths./api/v1/abc/{bar}

**Environment (remove any that are not applicable):**
$ npx spectral --version
6.6.0

**Additional context**
I'm unsure if this is intended, or expected best practice, but this https://swagger.io/docs/specification/paths-and-operations/
say this...
`This is because OpenAPI considers a unique operation as a combination of a path and the HTTP method, and additional parameters do not make the operation unique. Instead, you should use unique paths such as:`

doesn't that mean the paths are unique by the method? Get vs Post?

Is this my bug or an over enthusiastic but perhaps correct rule?
