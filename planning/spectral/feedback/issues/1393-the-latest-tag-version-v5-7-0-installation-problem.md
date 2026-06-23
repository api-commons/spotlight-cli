---
number: 1393
title: "The latest tag version (v5.7.0) installation problem "
state: "closed"
labels: ["t/bug"]
author: "kimisme9386"
created: "2020-11-02T02:20:39Z"
updated: "2020-11-02T07:04:35Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1393"
---

# The latest tag version (v5.7.0) installation problem 

$ npm install -g @stoplight/spectral

```
/usr/local/bin/spectral -> /usr/local/lib/node_modules/@stoplight/spectral/dist/cli/index.js

> @stoplight/spectral@5.7.0 postinstall /usr/local/lib/node_modules/@stoplight/spectral
> patch-package

sh: patch-package: command not found
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
npm ERR!     /Users/chris.yang/.npm/_logs/2020-11-02T02_05_59_929Z-debug.log
```
