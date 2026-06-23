---
number: 658
title: "URIError console warns"
state: "closed"
labels: ["t/bug", "sev/major", "p/medium"]
author: "nulltoken"
created: "2019-10-09T10:34:51Z"
updated: "2019-12-10T11:50:49Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/658"
---

# URIError console warns

**Describe the bug**

Linting a file that references another external file over http fills the console with unexpected warnings.

**To Reproduce**

1. Given these OpenAPI document '...'

**repo/ruleset.yaml**
```yaml
extends:
  - [spectral:oas, off]

rules:
  schema-strings-maxLength:
    type: validation
    severity: warn
    recommended: true
    message: "String typed properties MUST be further described using 'maxLength'. Error: {{error}}"
    given: $..*[?(@.type === 'string')]
    then:
      field: maxLength
      function: truthy
```

**repro/URIError.yaml**
```yaml
%YAML 1.2
---
openapi: 3.0.0

info:
  title: Hey Mum! I'm on GitHub!
  description: Resource definition.
  version: 1.0.0

servers:
  - url: https://boom.com

paths:
  "/test":
    get:
      summary: Dummy endpoint.
      description: Cf. summary
      responses:
        "200":
          description: All is good.
          content:
            application/json:
              schema:
                type: string
        "400":
          description: Bad Request.
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Error"
components:
  schemas:
    Error:
      $ref: https://REDACTED/static/schemas/common/v2/library.openapi.yaml#/components/schemas/Error
```

**https://REDACTED/static/schemas/common/v2/library.openapi.yaml**
```yaml
%YAML 1.2
---
openapi: 3.0.0

info:
  title: Library
  description: Collection of reusable standard definitions.
  version: 2.0.0
paths: {}
components:
  schemas:

...trimmed...

    Error:
      type: object
      properties:
        error:
          type: string
        error_description:
          type: string
        status_code:
          type: string

...trimmed...

```
2. Run this CLI command '....'

```bash
$ yarn spectral lint --ruleset ./repro/ruleset.yaml ./repro/URIError.yaml
yarn run v1.15.2
$ C:\REDACTED\node_modules\.bin\spectral lint --ruleset ./repro/ruleset.yaml ./repro/URIError.yaml
OpenAPI 3.x detected
Encountered error when running rule 'schema-strings-maxLength' on node at path '$,paths,/test,get,responses,400,content,app
lication/json,schema,properties,error':
URIError: Invalid JSON Pointer syntax; URI fragment identifiers must begin with a hash.
Encountered error when running rule 'schema-strings-maxLength' on node at path '$,paths,/test,get,responses,400,content,app
lication/json,schema,properties,error_description':
URIError: Invalid JSON Pointer syntax; URI fragment identifiers must begin with a hash.
Encountered error when running rule 'schema-strings-maxLength' on node at path '$,paths,/test,get,responses,400,content,app
lication/json,schema,properties,status_code':
URIError: Invalid JSON Pointer syntax; URI fragment identifiers must begin with a hash.

c:/REDACTED/repro/URIError.yaml
 23:22  warning  schema-strings-maxLength  String typed properties MUST be further described using 'maxLength'. Error: path
s./test.get.responses.200.content.application/json.schema.maxLength is not truthy

https://REDACTED/static/schemas/common/v2/library.openapi.yaml
 65:15  warning  schema-strings-maxLength  String typed properties MUST be further described using 'maxLength'. Error: components.schemas.Error.properties.error.maxLength is not truthy
 67:27  warning  schema-strings-maxLength  String typed properties MUST be further described using 'maxLength'. Error: components.schemas.Error.properties.error_description.maxLength is not truthy
 69:21  warning  schema-strings-maxLength  String typed properties MUST be further described using 'maxLength'. Error: components.schemas.Error.properties.status_code.maxLength is not truthy

✖ 4 problems (0 errors, 4 warnings, 0 infos, 0 hints)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

3. See error

The console is filled up with unexpected warnings `URIError: Invalid JSON Pointer syntax; URI fragment identifiers must begin with a hash.`

**Expected behavior**
No warnings ;-)

**Environment (remove any that are not applicable):**
 - Library version: 4.2.0
 - OS: Windows 7
