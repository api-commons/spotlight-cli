---
number: 474
title: "Fail to load external reference file because a '/' is prepend to the path"
state: "closed"
labels: ["t/bug"]
author: "aleung"
created: "2019-08-22T04:42:51Z"
updated: "2020-05-14T22:53:34Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/474"
---

# Fail to load external reference file because a '/' is prepend to the path

**Describe the bug**
Spectral is unable to load external reference file because a `/` is prepend to the path.

**To Reproduce**

1. Given this OpenAPI document and referenced document in same folder:

index.yaml

```yaml
openapi: 3.0.0
info:
  title: Test
  version: 1.0.0
paths:
  '/':
    get:
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: 'common.yaml#/components/schemas/ResponseType'
                # Below doesn't work as well
                # $ref: './common.yaml#/components/schemas/ResponseType'
```

common.yaml

```yaml
openapi: 3.0.0
info:
  title: Common schema definition
  version: 1.0.0
components:
  schema:
    ResponseType:
      type: string
```

2. Run this CLI command 
```
spectral lint index.yaml
```

3. See error

```
Adding OpenAPI 3.x functions
OpenAPI 3.x detected

index.yaml
  1:1   warning  api-servers            OpenAPI `servers` must be present and non-empty array.
  2:6   warning  info-contact           Info object should contain `contact` object.
  2:6   warning  info-description       OpenAPI object info `description` must be present and non-empty string.
  7:9   warning  operation-description  Operation `description` must be present and non-empty string.
  7:9   warning  operation-operationId  Operation should have an `operationId`.
  7:9   warning  operation-tags         Operation should have non-empty `tags` array.
 14:23    error  invalid-ref            ENOENT: no such file or directory, open '/common.yaml'

✖ 7 problems (1 error, 6 warnings, 0 infos)

```

**Expected behavior**
There should not be an `invalid-ref` error. The reference file path should be `./common.yaml` instead of  `/common.yaml`

**Environment (remove any that are not applicable):**

@stoplight/spectral/4.0.2 darwin-x64 node-v12.8.0
