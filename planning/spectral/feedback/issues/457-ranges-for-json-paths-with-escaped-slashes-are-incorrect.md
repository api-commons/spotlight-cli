---
number: 457
title: "Ranges for JSON paths with escaped slashes are incorrect"
state: "closed"
labels: ["t/bug"]
author: "P0lip"
created: "2019-08-18T20:39:43Z"
updated: "2019-08-26T20:51:49Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/457"
---

# Ranges for JSON paths with escaped slashes are incorrect

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**

1. Given this OpenAPI document 
```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "Foo",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "http://localhost:3000"
    }
  ],
  "paths": {
    "/users": {
      "get": {
        "summary": "Your GET endpoint",
        "tags": [],
        "responses": {}
      }
    }
  },
  "components": {
    "schemas": {}
  }
}
```

2. The following range is produced for oas3-schema error
```json
{
  "end": {
    "character": 23,
    "line": 16
  },
  "start": {
    "character": 10,
    "line": 11
  }
}
```

**Expected behavior**
The following range is generated:
```json
{
  "end": {
    "character": 23,
    "line": 16
  },
  "start": {
    "character": 20,
    "line": 16
  }
}
```
