---
number: 1854
title: "spectral-cli doesn't work on node <= 12.20"
state: "closed"
labels: []
author: "Gerben-T"
created: "2021-09-29T09:30:45Z"
updated: "2021-10-05T13:22:54Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1854"
---

# spectral-cli doesn't work on node <= 12.20

**Describe the bug**
Error when running spectral cli `Cannot find module 'nimma/legacy'` on node version 12.
[`package.json`](https://github.com/stoplightio/spectral/blob/develop/package.json#L23) says that `node >= 12` is supported, but the [`nimma`](https://github.com/P0lip/nimma) [`package.json`](https://github.com/P0lip/nimma/blob/master/package.json#L14) increases this version to `node >= 12.20`.

**To Reproduce**

1. Install node version 12 (using `.nvmrc` with content `v12` and execute `nvm install`)
2. Install Spectral (`npm install -g @stoplight/spectral-cli`)
3. Run Spectral (`spectral lint somefile.yml`)

**Expected behavior**
Spectral cli should work on the `node` version specified in the `package.json`

**Screenshots**
Spectral error
```
internal/modules/cjs/loader.js:985
  throw err;
  ^

Error: Cannot find module 'nimma/legacy'
```

**Environment (remove any that are not applicable):**
 - Library version: 6.0.0
 - OS: Windows 10
 - Browser: N/A

**Additional context**
N/A
