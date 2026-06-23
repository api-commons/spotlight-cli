---
number: 2293
title: "Spectral Crash when \"path\" is defined as an in parameter "
state: "closed"
labels: []
author: "UniperMaster"
created: "2022-09-22T12:52:35Z"
updated: "2022-09-23T16:12:23Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2293"
---

# Spectral Crash when "path" is defined as an in parameter 

**Describe the bug**

Linting the above open api with the parameter of **in** type **path** causes the linting to error, If I change it to **query** its fine  

example.yaml
``` 
openapi: 3.0.1
servers:
  - url: 'https://test.co.uk'
paths:
  /users/{userId}:
    get:
      summary: Get a user by ID
      parameters:
        - in: path
          name: userId
          schema:
            type: integer
          required: true
          description: Numeric ID of the user to get
```


**To Reproduce**

1. spectral lint  .\example.yaml --verbose

```Error running Spectral!
Error #1: Cannot read property 'name' of null
          at name == 'api-versio…  …js/core/index.js:66  _rollupPluginBabelH…
          at eval                  …js/core/index.js:66  _rollupPluginBabelH…
          at _traverseBody         …time/traverse.js:13  cb(scope);
          at _traverse             …time/traverse.js:41  _traverseBody(key, …
          at _traverseBody         …time/traverse.js:17  _traverse(value, sc…
```

**Expected behavior**
linting results

**Environment (remove any that are not applicable):**
 - Library version: 6.5.1 
 - OS: Windows 10 

**Additional context**
running node
