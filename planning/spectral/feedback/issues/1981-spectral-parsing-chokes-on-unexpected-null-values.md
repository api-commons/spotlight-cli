---
number: 1981
title: "Spectral parsing chokes on unexpected `null` values"
state: "open"
labels: ["triaged"]
author: "wedi"
created: "2021-12-02T10:34:00Z"
updated: "2026-06-04T09:29:42Z"
comments: 6
reactions_total: 9
thumbs_up: 6
url: "https://github.com/stoplightio/spectral/issues/1981"
---

# Spectral parsing chokes on unexpected `null` values

**Describe the bug**

Spectral fails with `Cannot read properties of null (reading 'in')` and exit code `2` when you use `null` where spectral doesn't expect it.


**To Reproduce**

1. Given this
  - valid spec (#1980)
    ```yaml
    openapi: 3.0.3
    components:
      schemas:
        test:
          type: string
          default: null
          nullable: true
    ```
  - valid spec (https://swagger.io/docs/specification/data-models/enums/#nullable)
    ```yaml
    openapi: 3.0.3
    components:
      schemas:
        test:
          type: string
          enum:
            - foo
            - null
    ```
  - invalid Spec
    ```yaml
    openapi: 3.0.3
    components:
      schemas:
        test:
          type: string
          enum:
    ```
  
  and more similar cases.


2. Run this CLI command '....'

  `yarn spectral lint test.yaml`

3. See error

  The error is always exactly the same:
  ```shell
  yarn spectral lint test.yaml
  yarn run v1.22.17
  $ /Users/weise/code/spectral_example/node_modules/.bin/spectral lint test.yaml
  Cannot read properties of null (reading 'in')
  error Command failed with exit code 2.
  ```

**Expected behavior**
A clear and concise description of what's wrong or at least a hint where this happened. If you have a big file with `$ref`s to other files it's trial and error (or diffing).

**Environment (remove any that are not applicable):**
```shell
yarn spectral --version     
yarn run v1.22.17
$ /Users/weise/code/spectral_example/node_modules/.bin/spectral --version
6.1.0
✨  Done in 0.87s.
```
