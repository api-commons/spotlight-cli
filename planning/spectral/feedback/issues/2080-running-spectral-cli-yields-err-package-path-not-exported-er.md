---
number: 2080
title: "running spectral CLI yields ERR_PACKAGE_PATH_NOT_EXPORTED error in @stoplight/spectral-ruleset-bundler/package.json"
state: "closed"
labels: []
author: "DavidBiesack"
created: "2022-03-07T14:04:18Z"
updated: "2022-03-07T20:37:05Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2080"
---

# running spectral CLI yields ERR_PACKAGE_PATH_NOT_EXPORTED error in @stoplight/spectral-ruleset-bundler/package.json

When I try to install latest
```
$ npm i -g @stoplight/spectral-cli
$ type spectral
spectral is hashed (~/.nvm/versions/node/v12.18.3/bin/spectral)
```

running `spectral ` yields an error:

```
$ spectral lint -r .spectral.yaml openapi.yaml
internal/modules/cjs/loader.js:490
  throw new ERR_PACKAGE_PATH_NOT_EXPORTED(basePath, mappingKey);
  ^

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './presets/node' is not defined by "exports" in ~/.nvm/versions/node/v12.18.3/lib/node_modules/@stoplight/spectral-cli/node_modules/@stoplight/spectral-ruleset-bundler/package.json
    at applyExports (internal/modules/cjs/loader.js:490:9)
    at resolveExports (internal/modules/cjs/loader.js:506:23)
    at Function.Module._findPath (internal/modules/cjs/loader.js:634:31)
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:952:27)
    at Function.Module._load (internal/modules/cjs/loader.js:841:27)
    at Module.require (internal/modules/cjs/loader.js:1025:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (~/.nvm/versions/node/v12.18.3/lib/node_modules/@stoplight/spectral-cli/dist/services/linter/utils/getRuleset.js:13:16)
    at Module._compile (internal/modules/cjs/loader.js:1137:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}
```

and I get the same problem if I uninstall then install earlier versions such as 
@stoplight/spectral-cli@6.2.0 and @stoplight/spectral-cli@6.1.0

Only 6.0.0 works for me 
```
$ spectral --version
6.0.0
```
