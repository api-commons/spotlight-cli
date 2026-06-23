---
number: 1391
title: "[Bug]: Installation fails"
state: "closed"
labels: ["t/bug"]
author: "dalisoft"
created: "2020-11-01T15:56:56Z"
updated: "2020-11-02T20:00:06Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1391"
---

# [Bug]: Installation fails

**Describe the bug**
`@stoplight/spectral` installation failed

**To Reproduce**

1. Create Node.js project
2. Install `@stoplight/spectral` via `npm i @stoplight/spectral`
3. See error

**Expected behavior**
Installation success message

**Screenshots**
No screenshots, just some logs

<details>
<summary>See log</summary>

```bash
❯ npm i @stoplight/spectral

> @stoplight/spectral@5.7.0 postinstall /Users/dalisoft/Desktop/Open_Source/npm-packages/packages/airlight/packages/lint-staged-config/node_modules/@stoplight/spectral
> patch-package

sh: patch-package: command not found
npm WARN lintstaged-config-airlight@0.0.2 requires a peer of lint-staged@^10.5.0 but none is installed. You must install peer dependencies yourself.

npm ERR! code ELIFECYCLE
npm ERR! syscall spawn
npm ERR! file sh
npm ERR! errno ENOENT
npm ERR! @stoplight/spectral@5.7.0 postinstall: `patch-package`
npm ERR! spawn ENOENT
npm ERR! 
npm ERR! Failed at the @stoplight/spectral@5.7.0 postinstall script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/dalisoft/.npm/_logs/2020-11-01T15_52_19_170Z-debug.log

airlight/packages/lint-staged-config on  feat/shared-configs [!] is 📦 v0.0.2 via ⬢ v15.0.1 took 18s 
❯ 
```

</details>

**Environment (remove any that are not applicable):**
 - Library version: `^5.6.0`
 - OS: macOS Mojave 10.14.6
 - Browser: not sure how to test in Browser?
 - Node.js: v15.0.1

**Additional context**
Add any other context about the problem here.
