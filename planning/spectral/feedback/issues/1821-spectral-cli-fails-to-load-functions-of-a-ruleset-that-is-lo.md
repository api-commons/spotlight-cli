---
number: 1821
title: "spectral-cli fails to load functions of a ruleset that is loaded over HTTP"
state: "closed"
labels: ["t/bug", "released"]
author: "mikekistler"
created: "2021-09-07T22:14:19Z"
updated: "2021-10-07T12:11:49Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1821"
---

# spectral-cli fails to load functions of a ruleset that is loaded over HTTP

**Describe the bug**

Spectral-cli fails to load functions of a ruleset that is loaded over HTTP.  This is a regression from Spectral@5.9.1.

**To Reproduce**

0. With `@stoplight/spectral-cli@6.0.0` installed globally
1. Given _any_ OpenAPI document
2. Run this CLI command
```
spectral lint -r https://raw.githubusercontent.com/mkistler/azure-spectral-ruleset/main/spectral.yaml $f
```
3. See error
```
Cannot find module 'https://raw.githubusercontent.com/mkistler/azure-spectral-ruleset/main/functions/version-policy.js'
Require stack:
- C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\services\linter\utils\getRuleset.js
- C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\services\linter\utils\index.js
- C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\services\linter\linter.js
- C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\services\linter\index.js
- C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\commands\lint.js
- C:\Users\mikekistler\AppData\Roaming\npm\node_modules\@stoplight\spectral-cli\dist\index.js
```

**Expected behavior**


0. With `@stoplight/spectral@5.9.1` installed globally
1. Given _any_ OpenAPI document
2. Run this CLI command (same as above)
```
spectral lint -r https://raw.githubusercontent.com/mkistler/azure-spectral-ruleset/main/spectral.yaml $f
```
3. See good results
```
OpenAPI 2.0 (Swagger) detected

<bunch of errors>

✖ 6 problems (1 error, 3 warnings, 0 infos, 2 hints)
```

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 6.0.0
 - OS: reproduced on Windows 10 and MacOS 10.15
