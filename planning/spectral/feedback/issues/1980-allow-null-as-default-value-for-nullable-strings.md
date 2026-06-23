---
number: 1980
title: "Allow `null` as default value for nullable strings"
state: "closed"
labels: ["t/bug"]
author: "wedi"
created: "2021-12-02T10:12:23Z"
updated: "2021-12-29T22:35:15Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1980"
---

# Allow `null` as default value for nullable strings

**Describe the bug**

```
myProperty:
  type: string
  nullable: true
  default: null
```

fails validation with an obscure error message:

```
Cannot read properties of null (reading 'in')
error Command failed with exit code 2.
```

Setting `null` as default value is perfectly fine which has been clarified in the spec version 3.0.3.
See: https://github.com/OAI/OpenAPI-Specification/issues/2057#issuecomment-554777793 and https://github.com/OAI/OpenAPI-Specification/pull/2115#issuecomment-578115411.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document '...'
```shell
cat <<EOF > test.yaml
openapi: 3.0.3
components:
  schemas:
    myProperty:
      type: string
      default: null
      nullable: true
EOF
```

2. Run this CLI command '....'

`yarn spectral lint test.yaml`

3. See error

```shell
yarn spectral lint test.yaml
yarn run v1.22.17
$ /Users/weise/code/spectral_example/node_modules/.bin/spectral lint test.yaml
Cannot read properties of null (reading 'in')
error Command failed with exit code 2.
```

**Expected behavior**

- I expected the schema to pass validation.
- I expected a clearer error message but I'll fill another issue for this – probably buggy – behaviour.

**Environment (remove any that are not applicable):**
```shell
yarn spectral --version     
yarn run v1.22.17
$ /Users/weise/code/spectral_example/node_modules/.bin/spectral --version
6.1.0
✨  Done in 0.87s.
```
