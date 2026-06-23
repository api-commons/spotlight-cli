---
number: 1303
title: "Spectral error for invalid paths is hard to understand"
state: "closed"
labels: ["t/bug"]
author: "dijitali"
created: "2020-08-13T16:00:30Z"
updated: "2021-05-14T15:04:06Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1303"
---

# Spectral error for invalid paths is hard to understand

**Describe the bug**
The Spectral error if an invalid path is used is a bit cryptic to understand.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document: https://petstore.swagger.io/v2/swagger.yaml
2. Set an invalid path value on line 35 by removing the preceeding`/`:
    ```yaml
    paths:
      pet/{petId}/uploadImage:
    ```
2. Run this CLI command `spectral lint swagger.yaml`
3. See error:
``` 
OpenAPI 2.0 (Swagger) detected

/tmp/swagger.yaml
  34:7     error  oas2-schema             should NOT have additional properties.
...
```

**Expected behavior**
The Swagger Editor gives a clearer indication of the problem, it would be useful if Spectral provided something similar:

> Structural error at paths
> should only have path names that start with `/`


**Screenshots**
Swagger editor:
![image](https://user-images.githubusercontent.com/4665045/90157542-c1cc4500-dd85-11ea-81db-da4a49b88b15.png)

**Environment (remove any that are not applicable):**
 - Library version: 5.4.0
 - OS: macOS
