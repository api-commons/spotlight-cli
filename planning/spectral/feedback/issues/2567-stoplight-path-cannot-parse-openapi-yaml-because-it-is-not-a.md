---
number: 2567
title: "@stoplight/path: Cannot parse <openapi.yaml> because it is not a string"
state: "open"
labels: ["t/bug", "p/medium", "triaged"]
author: "philsturgeon"
created: "2023-12-27T18:13:48Z"
updated: "2024-05-31T09:24:18Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2567"
---

# @stoplight/path: Cannot parse <openapi.yaml> because it is not a string

**Describe the bug**

I'm getting a strange error from @stoplight/path about not being able to parse a file which is perfectly parseable by other similar tools. Vacuum lints it. Swagger Editor doesnt find an error loads it.

```
$ spectral lint https://opencagedata.com/opencage-openapi-3.0.0.yaml
Error: Could not parse https://opencagedata.com/opencage-openapi-3.0.0.yaml: @stoplight/path: Cannot parse https://opencagedata.com/opencage-openapi-3.0.0.yaml because it is not a string
    at Object.<anonymous> (/snapshot/spectral/dist/fs/reader.js:68:19)
    at Generator.throw (<anonymous>)
    at rejected (/snapshot/spectral/node_modules/tslib/tslib.js:108:69)
    at processTicksAndRejections (internal/process/task_queues.js:89:5)
    at process.runNextTicks [as _tickCallback] (internal/process/task_queues.js:59:3)
    at Function.Module.runMain (pkg/prelude/bootstrap.js:1317:13)
    at internal/main/run_main_module.js:17:11
```

Happens when loading via URL or downloading and loading via filesystem.

**To Reproduce**

1. Given this OpenAPI: https://opencagedata.com/opencage-openapi-3.0.0.yaml
2. Run this CLI command `spectral lint ...`
3. See error

**Expected behavior**

Vacuum gives me all the usual expected errors: 

```
/Users/phil/src/opencage-openapi-3.0.0.yaml
-------------------------------------------
Location                           | Severity | Message                                                                            | Rule                      | Category   | Path
opencage-openapi-3.0.0.yaml:27:7   | error    | the 'get' operation at path '/v{version}/{format}' does not contain an operationId | operation-operationId     | Operations | $.paths./v{version}/{format}.get
opencage-openapi-3.0.0.yaml:36:13  | warning  | Schema for `version` does not contain any examples or example data                 | oas3-valid-schema-example | Examples   | $.paths./v{version}/{format}.get.parameters[0]
opencage-openapi-3.0.0.yaml:43:13  | warning  | Schema for `format` does not contain any examples or example data                  | oas3-valid-schema-example | Examples   | $.paths./v{version}/{format}.get.parameters[1]
opencage-openapi-3.0.0.yaml:50:13  | warning  | Schema for `q` does not contain any examples or example data                       | oas3-valid-schema-example | Examples   | $.paths./v{version}/{format}.get.parameters[2]
opencage-openapi-3.0.0.yaml:56:13  | warning  | Schema for `key` does not contain any examples or example data                     | oas3-valid-schema-example | Examples   | $.paths./v{version}/{format}.get.parameters[3]
```

Spectral should do the same.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: whatever `npm install -g @stoplight/spectral-cli` does December 27th 2023.

**Additional context**

```
$ which spectral
/usr/local/bin/spectral
```

Weirdly `spectral --version` gives `0.0.0`.
