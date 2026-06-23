---
number: 498
title: "Ranges might be incorrect when document has $refs"
state: "closed"
labels: ["t/bug"]
author: "P0lip"
created: "2019-08-28T12:44:39Z"
updated: "2019-08-29T08:10:41Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/498"
---

# Ranges might be incorrect when document has $refs

**Describe the bug**

When property path is incomplete and there is a $ref somewhere, invalid ranges are generated.
For instance:

**To Reproduce**


GIven
```json
{
  "swagger": "2.0",
  "info": {
    "title": "To-dos",
    "version": "1.0",
    "description": "This OpenAPI v2 (Swagger) file represents a real API that lives at http://todos.stoplight.io.\n\nIt exposes functionality to manage to-do lists."
  },
  "host": "todos.stoplight.io",
  "schemes": ["http"],
  "paths": {
    "/todos/{todoId}": {
      "get": {
        "operationId": "GET_todo",
        "summary": "Get Todo",
        "tags": ["Todos"],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "$ref": "./models/todo-full.v1.json"
            },
            "examples": {
              "application/json": {
                "id": 1,
                "name": "get food",
                "completed": false,
                "completed_at": "1955-04-23T13:22:52.685Z",
                "created_at": "1994-11-05T03:26:51.471Z",
                "updated_at": "1989-07-29T11:30:06.701Z"
              }
            }
          }
        }
      }
    }
  }
}
```

Actual:
```json
{
  "code": "oas2-schema",
  "path": [
    "paths",
    "/todos/{todoId}",
    "get",
    "responses",
    "200"
  ],
  "range": {
    "end": {
      "character": 1,
      "line": 36
    },
    "start": {
      "character": 0,
      "line": 0
    }
  }
}
```

Expected:
```json
{
  "code": "oas2-schema",
  "path": [
    "paths",
    "/todos/{todoId}",
    "get",
    "responses",
    "200"
  ],
  "range": {
    "end": {
      "character": 11,
      "line": 31
    },
    "start": {
      "character": 17,
      "line": 16
    }
  }
}
```

Moreover, if we fail to generate a proper range for all responses (issue in `@stoplight/json`)
