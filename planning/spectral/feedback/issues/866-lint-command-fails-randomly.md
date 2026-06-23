---
number: 866
title: "Lint command fails randomly"
state: "closed"
labels: []
author: "Sasan-Yavari"
created: "2019-12-19T11:06:29Z"
updated: "2020-04-09T15:57:56Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/866"
---

# Lint command fails randomly

When we are running the spectral lint in our project, sometimes we get this error (request-body.yaml can be any of the YAML files):

> 1:1 error valid-oas-example-in-content "application/json.example" property can't resolve reference schemas/request-body.yaml from id #

This is the command that we are running:

> spectral lint $BASE_PATH/src/main/resources/openapi.yaml --ruleset https://someurl.com/openapi-rules.yaml

### Important note
This error doesn’t happen all the time and to make it happen, we should run the spectral lint many times and technically, it happens randomly which is weird.

### The openapi-rules file

[openapi-rules.txt](https://github.com/stoplightio/spectral/files/3983200/openapi-rules.txt)

### Full error log
```
0 info it worked if it ends with ok
1 verbose cli [
1 verbose cli   '/usr/local/Cellar/node/13.4.0/bin/node',
1 verbose cli   '/usr/local/bin/npm',
1 verbose cli   'run',
1 verbose cli   'lint-openapi'
1 verbose cli ]
2 info using npm@6.13.4
3 info using node@v13.4.0
4 verbose run-script [ 'prelint-openapi', 'lint-openapi', 'postlint-openapi' ]
5 info lifecycle rdc-api-mock@~prelint-openapi: rdc-api-mock@
6 info lifecycle rdc-api-mock@~lint-openapi: rdc-api-mock@
7 verbose lifecycle rdc-api-mock@~lint-openapi: unsafe-perm in lifecycle true
8 verbose lifecycle rdc-api-mock@~lint-openapi: PATH: /usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/s/Documents/projects/our-project/api/node_modules/.bin:/opt/apache-maven-3.6.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
9 verbose lifecycle rdc-api-mock@~lint-openapi: CWD: /Users/s/Documents/projects/our-project/api
10 silly lifecycle rdc-api-mock@~lint-openapi: Args: [
10 silly lifecycle   '-c',
10 silly lifecycle   'spectral lint $BASE_PATH/src/main/resources/openapi.yaml --ruleset https://someurl/openapi-rules.yaml'
10 silly lifecycle ]
11 silly lifecycle rdc-api-mock@~lint-openapi: Returned: code: 1  signal: null
12 info lifecycle rdc-api-mock@~lint-openapi: Failed to exec lint-openapi script
13 verbose stack Error: rdc-api-mock@ lint-openapi: `spectral lint $BASE_PATH/src/main/resources/openapi.yaml --ruleset https://someurl/openapi-rules.yaml`
13 verbose stack Exit status 1
13 verbose stack     at EventEmitter.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/index.js:332:16)
13 verbose stack     at EventEmitter.emit (events.js:304:20)
13 verbose stack     at ChildProcess.<anonymous> (/usr/local/lib/node_modules/npm/node_modules/npm-lifecycle/lib/spawn.js:55:14)
13 verbose stack     at ChildProcess.emit (events.js:304:20)
13 verbose stack     at maybeClose (internal/child_process.js:1028:16)
13 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:286:5)
14 verbose pkgid rdc-api-mock@
15 verbose cwd /Users/s/Documents/projects/our-project/api/persistence-api
16 verbose Darwin 19.2.0
17 verbose argv "/usr/local/Cellar/node/13.4.0/bin/node" "/usr/local/bin/npm" "run" "lint-openapi"
18 verbose node v13.4.0
19 verbose npm  v6.13.4
20 error code ELIFECYCLE
21 error errno 1
22 error rdc-api-mock@ lint-openapi: `spectral lint $BASE_PATH/src/main/resources/openapi.yaml --ruleset https://someurl.com/openapi-rules.yaml`
22 error Exit status 1
23 error Failed at the rdc-api-mock@ lint-openapi script.
23 error This is probably not a problem with npm. There is likely additional logging output above.
24 verbose exit [ 1, true ]

```
