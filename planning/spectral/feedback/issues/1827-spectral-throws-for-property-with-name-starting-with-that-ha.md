---
number: 1827
title: "Spectral throws for property with name starting with \"@\" that has example"
state: "closed"
labels: ["t/bug"]
author: "mikekistler"
created: "2021-09-10T02:41:09Z"
updated: "2021-09-14T09:15:52Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1827"
---

# Spectral throws for property with name starting with "@" that has example

**Describe the bug**

Spectral throws an exception on an API doc with a schema property where the name starts with "@" and there is an example.
E.g.:
```
{
    "swagger": "2.0",
    "info": {
      "title": "trouble",
      "version": "1.0"
    },
    "host": "localhost:8000",
    "schemes": [ "http", "https" ],
    "paths": {
    },
    "definitions": {
      "Trouble": {
        "description": "Trouble",
        "properties": {
          "@foo": {
            "type": "string",
            "example": "bar"
          }
        }
      }
    }
  }
```

**To Reproduce**

1. Given the OpenAPI/AsyncAPI document above
2. Run this CLI command
  ```
  spectral lint trouble.json
  ```
3. See error
  ```
OpenAPI 2.0 (Swagger) detected
TypeError: Unknown value type f
    at JSONPath._trace (C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral\node_modules\jsonpath-plus\dist\index-umd.js:766:17)
    at C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral\node_modules\jsonpath-plus\dist\index-umd.js:745:23
    at C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral\node_modules\jsonpath-plus\dist\index-umd.js:909:9
    at Array.forEach (<anonymous>)
    at JSONPath._walk (C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral\node_modules\jsonpath-plus\dist\index-umd.js:908:24)
    at JSONPath._trace (C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral\node_modules\jsonpath-plus\dist\index-umd.js:743:12)
    at JSONPath._trace (C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral\node_modules\jsonpath-plus\dist\index-umd.js:698:19)
    at C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral\node_modules\jsonpath-plus\dist\index-umd.js:706:23
    at C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral\node_modules\jsonpath-plus\dist\index-umd.js:909:9
    at Array.forEach (<anonymous>)

c:/Users/mikekistler/Projects/mkistler/spectral-test/trouble.json
  1:1   warning  openapi-tags            OpenAPI object should have non-empty `tags` array.
  3:12  warning  info-contact            Info object should contain `contact` object.                             info
  3:12  warning  info-description        OpenAPI object info `description` must be present and non-empty string.  info
 12:17  warning  oas2-unused-definition  Potentially unused definition has been detected.                         definitions.Trouble

✖ 4 problems (0 errors, 4 warnings, 0 infos, 0 hints)

  ```

**Expected behavior**

No exception.

**Environment**
 - Library version: Spectral@5.9.2, but also happens with spectral-cli@6.0.0 just not as obvious
 - OS: Windows 10 (but also happens on MacOS)

**Additional context**

The problem does not occur without **both** the "@" in the property name and an example.  Hopefully that is helpful in identifying the root of the problem.
