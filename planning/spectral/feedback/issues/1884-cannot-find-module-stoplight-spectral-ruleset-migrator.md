---
number: 1884
title: "Cannot find module '@stoplight/spectral-ruleset-migrator'"
state: "closed"
labels: []
author: "stuft2"
created: "2021-10-05T18:37:33Z"
updated: "2021-10-07T12:15:31Z"
comments: 2
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1884"
---

# Cannot find module '@stoplight/spectral-ruleset-migrator'

**Describe the bug**
```shell
Error: Cannot find module '@stoplight/spectral-ruleset-migrator'
```

Spectral v6.0.0 does include 
```
"@stoplight/spectral-ruleset-migrator": "^1.1.0"
```
while Spectral v6.0.1 does not.

However, [Line 7](https://github.com/stoplightio/spectral/blob/f1932c4058a7024af178002a9d803839db6d95ed/packages/cli/src/services/linter/utils/getRuleset.ts#L7) of `@stoplight/spectral-cli/src/services/linter/utils/getRuleset.js` still requires `@stoplight/spectral-ruleset-migrator`.

**To Reproduce**

1. Given any OpenAPI v2 or v3 document
2. Run this CLI command: lint
3. See error

**Expected behavior**
Spectral should lint my OpenAPI or Swagger documents

**Environment (remove any that are not applicable):**
 - Library version: 6.0.1
 - OS: MacOS
