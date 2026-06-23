---
number: 259
title: "\"schema\" property cannot resolve a reference"
state: "closed"
labels: ["t/bug"]
author: "P0lip"
created: "2019-06-17T02:50:36Z"
updated: "2019-06-17T10:36:24Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/259"
---

# "schema" property cannot resolve a reference

### **I'm submitting a...**
  - [x] bug report
  - [ ] feature request

### What is the current behavior?

Given the following fixture
```json
{
  "swagger": "2.0",
  "info": {},
  "paths": {
    "/": {
      "put": {
        "operationId": "PUT_todos",
        "summary": "Update Todo",
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "schema": {
              "$ref": "./foo.json",
              "example": {
                "name": "my todo's new name",
                "completed": false
              }
            }
          }
        ]
      }
    }
  }
}
```

Spectral reports
```
"schema" property can't resolve reference ./foo.json from id #
```
warning despite `./foo.json` being placed correctly in the directory and hence Spectral should be referenced without any issues.

### What is the expected behavior?

We should reference the file correctly.

### Please tell us about your environment:

  - Version: 3..x.
  - Framework: [ ]
  - Language: all

### Other information

None.
