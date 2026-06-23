---
number: 2441
title: "Issue with 'oas2-valid-media-example' and schema type 'file'"
state: "closed"
labels: []
author: "darklynx"
created: "2023-03-24T10:23:50Z"
updated: "2024-05-03T14:25:14Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2441"
---

# Issue with 'oas2-valid-media-example' and schema type 'file'

I'm trying to figure out the right format to provide an example for schema type `file` that would not trigger an error for the rule `oas2-valid-media-example`.

Sample API (in Open API 2.0 format):
```yaml
swagger: "2.0"
info:
  version: "1.0.0"
  title: Export Data API
  description: Export Data API

host: localhost:8080
basePath: /export
schemes:
  - https

paths:
  /users:
    get:
      tags:
        - export
      summary: Exports users
      description: Generate CSV report about all users
      operationId: exportUsers
      produces:
        - text/csv
      responses:
        "200":
          description: OK
          schema:
            # type: string
            type: file
          examples:
            text/csv: |
                User,Email,Role
                john,john@example.com,publisher
                sam,sam@sam.com,guest
                alice,alice@in.wonderland.com,admin
        "401":
          description: Unauthorized
```

Running validation results in:
```
$ spectral lint exportapi.yaml

.../yaml/exportapi.yaml
  2:6   warning  info-contact              Info object must have "contact" object.                                                                                                   info
 16:11  warning  operation-tag-defined     Operation tags must be defined in global tags.                                                                                            paths./users.get.tags[0]
 29:23    error  oas2-valid-media-example  schema is invalid: data/type must be equal to one of the allowed values, data/type must be array, data/type must match a schema in anyOf  paths./users.get.responses[200].examples.text/csv

✖ 3 problems (1 error, 2 warnings, 0 infos, 0 hints)
```

If I change the schema tape to "string" I'm able to pass validation, but I'd like to express that response of the end-point is downloadable file with appropriate headers of `Content-Disposition`, etc. Still the content of response (body) matches the `string` format.

Is this an error in my description or a problem of rule when handling `type: file`?

Thank you!
