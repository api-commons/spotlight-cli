---
number: 589
title: "Spectral Docker Develop Image - Module Not Found"
state: "closed"
labels: ["t/bug"]
author: "drmmr763"
created: "2019-09-24T13:53:16Z"
updated: "2019-09-25T14:10:11Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/589"
---

# Spectral Docker Develop Image - Module Not Found

**Describe the bug**
Attempting to use the linter provided by the Spectral docker image (https://hub.docker.com/r/stoplight/spectral) and getting a node "Module Not Found" error. This only seems to happen with the `develop` tag, which I am utilizing because I wanted to make use of the new Junit formatter (https://github.com/stoplightio/spectral/pull/519). 

**To Reproduce**

stoplight/spectral:latest (completes without error):
```
docker run -v "$(pwd):/app" stoplight/spectral:latest lint "/app/storage/api-docs/api-docs.json" --verbose --format=json --output="/app/api-violations.json" 
```

spotlight/spectral:develop (throws error):
```
docker run -v "$(pwd):/app" stoplight/spectral:develop lint "/app/storage/api-docs/api-docs.json" --verbose --format=junit --output="/app/api-violations.json"
```
Stacktrace
```
internal/modules/cjs/loader.js:775
    throw err;
    ^

Error: Cannot find module 'tslint/lib/utils'
Require stack:
- /usr/src/spectral/dist/functions/schema.js
- /usr/src/spectral/dist/functions/index.js
- /usr/src/spectral/dist/spectral.js
- /usr/src/spectral/dist/cli/services/linter.js
- /usr/src/spectral/dist/cli/commands/lint.js
- /usr/src/spectral/dist/cli/index.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:772:15)
    at Function.Module._load (internal/modules/cjs/loader.js:677:27)
    at Module.require (internal/modules/cjs/loader.js:830:19)
    at require (internal/modules/cjs/helpers.js:68:18)
    at Object.<anonymous> (/usr/src/spectral/dist/functions/schema.js:8:17)
    at Module._compile (internal/modules/cjs/loader.js:936:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:947:10)
    at Module.load (internal/modules/cjs/loader.js:790:32)
    at Function.Module._load (internal/modules/cjs/loader.js:703:12)
    at Module.require (internal/modules/cjs/loader.js:830:19) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    '/usr/src/spectral/dist/functions/schema.js',
    '/usr/src/spectral/dist/functions/index.js',
    '/usr/src/spectral/dist/spectral.js',
    '/usr/src/spectral/dist/cli/services/linter.js',
    '/usr/src/spectral/dist/cli/commands/lint.js',
    '/usr/src/spectral/dist/cli/index.js'
  ]
}

```

**Expected behavior**
I expected the linter command to complete without errors and populate the report in junit format. 

**Environment (remove any that are not applicable):**
 - Library version: Latest build published to DockerHub (https://github.com/stoplightio/spectral/tree/12ca287175001865235a9871e035b5a03540aff4)
 - OS: Host OSX, but running in Docker.

**Debugging Attempts**
* Tried to create a new dockerfile and add the required module myself in the build but was not successful.
* Googled the missing module and haven't found a clear source of the problem.
