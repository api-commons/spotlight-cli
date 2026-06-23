---
number: 500
title: "Ajv reports duplicate errors"
state: "closed"
labels: ["t/bug"]
author: "P0lip"
created: "2019-08-28T17:32:05Z"
updated: "2019-10-31T12:12:52Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/500"
---

# Ajv reports duplicate errors

**Describe the bug**
Ajv reports duplicate errors under certain circumstances.

**To Reproduce**

Given the following API document
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

oas2-schema validation violation is reported twice for the same matter
```json
[
  {
    "keyword": "additionalProperties",
    "dataPath": "/paths/~1todos~1{todoId}/get/responses/200/schema",
    "schemaPath": "#/additionalProperties",
    "params": {
      "additionalProperty": "$schema"
    },
    "message": "should NOT have additional properties"
  },
  {
    "keyword": "additionalProperties",
    "dataPath": "/paths/~1todos~1{todoId}/get/responses/200/schema",
    "schemaPath": "#/additionalProperties",
    "params": {
      "additionalProperty": "$schema"
    },
    "message": "should NOT have additional properties"
  },
 // rest of results
]
```
