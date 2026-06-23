---
number: 524
title: "Can't run spectral 4.1.0 when installed via npm"
state: "closed"
labels: ["t/bug"]
author: "johlo"
created: "2019-09-05T08:45:31Z"
updated: "2019-09-05T14:05:11Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/524"
---

# Can't run spectral 4.1.0 when installed via npm

**Describe the bug**
I installed spectral 4.1.0 via npm, when running the `spectral` command it errors out.
When I install 4.0.3 via npm the command works. 

**To Reproduce**

1. `$ npm install -g @stoplight/spectral`
2. `$ spectral`
    This gives an error:
```
internal/modules/cjs/loader.js:775
    throw err;
    ^

Error: Cannot find module 'tslib'
Require stack:
- /usr/local/lib/node_modules/@stoplight/spectral/dist/cli/commands/lint.js
- /usr/local/lib/node_modules/@stoplight/spectral/dist/cli/index.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:772:15)
    at Function.Module._load (internal/modules/cjs/loader.js:677:27)
    at Module.require (internal/modules/cjs/loader.js:830:19)
    at require (internal/modules/cjs/helpers.js:68:18)
    at Object.<anonymous> (/usr/local/lib/node_modules/@stoplight/spectral/dist/cli/commands/lint.js:3:17)
    at Module._compile (internal/modules/cjs/loader.js:936:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)
    at Module.load (internal/modules/cjs/loader.js:790:32)
    at Function.Module._load (internal/modules/cjs/loader.js:703:12)
    at Module.require (internal/modules/cjs/loader.js:830:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/usr/local/lib/node_modules/@stoplight/spectral/dist/cli/commands/lint.js',
    '/usr/local/lib/node_modules/@stoplight/spectral/dist/cli/index.js'
  ]
}
```

**Expected behavior**
No error when running

**Environment (remove any that are not applicable):**
 - Library version: 4.1.0
 - OS: mac os 10.13.5
 - npm: 6.11.13

**Additional context**
FYI, I also tried to installed the binary by running the `curl` from your install instructions, but that doesn't work:
```
$ curl -L https://raw.githack.com/stoplightio/spectral/master/install.sh
404: Not Found
```
