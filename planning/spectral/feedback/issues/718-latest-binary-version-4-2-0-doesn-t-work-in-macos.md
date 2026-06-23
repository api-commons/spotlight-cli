---
number: 718
title: "Latest binary version (4.2.0) doesn't work in MacOS"
state: "closed"
labels: ["t/bug", "sev/critical", "p/urgent", "cs/reported"]
author: "nogates"
created: "2019-10-30T07:04:45Z"
updated: "2019-11-20T22:38:01Z"
comments: 8
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/718"
---

# Latest binary version (4.2.0) doesn't work in MacOS

**Describe the bug**

Latest binary version (4.20) doesn't work in MacOS 10.14.6 

**To Reproduce**

```
spectral ~/Downloads/spectral-macos lint openapi.yml
Error: @stoplight/path: Cannot parse /Users/nogates/Downloads/spectral-macos/openapi.yml because it is not a string
    at parse (/snapshot/spectral/node_modules/@stoplight/path/index.cjs.js:1:6984)
    at Object.isAbsolute (/snapshot/spectral/node_modules/@stoplight/path/index.cjs.js:1:7876)
    at Object.<anonymous> (/snapshot/spectral/dist/cli/services/linter.js:40:65)
    at Generator.next (<anonymous>)
    at /snapshot/spectral/node_modules/tslib/tslib.js:110:75
    at new Promise (<anonymous>)
    at Object.__awaiter (/snapshot/spectral/node_modules/tslib/tslib.js:106:16)
    at Object.lint (/snapshot/spectral/dist/cli/services/linter.js:36:20)
    at Object.handler (/snapshot/spectral/dist/cli/commands/lint.js:86:25)
    at Object.runCommand (/snapshot/spectral/node_modules/yargs/lib/command.js:235:26)
```
Also, version is not reported correctly

```
spectral ~/Downloads/spectral-macos --version
0.0.0
```

Previous version (4.1.1) works just fine

Tried both, using the script to pull the latest binary and manually downloaded it via GH releases
