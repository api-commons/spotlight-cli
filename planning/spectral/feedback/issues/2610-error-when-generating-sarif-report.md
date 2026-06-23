---
number: 2610
title: "Error when generating SARIF report"
state: "open"
labels: ["dependencies", "triaged"]
author: "chilcano"
created: "2024-04-08T20:08:16Z"
updated: "2024-05-31T09:24:23Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2610"
---

# Error when generating SARIF report

Hello.
Sorry, I've tried your Discord to report this error but It seems the provided link is not working.

**Describe the bug**

According the Spectral CLI documentation, sarif report can be generated using [formatters](https://docs.stoplight.io/docs/spectral/9ffa04e052cc1-spectral-cli#formatters), but unfortunately this has not worked. I've tried in Ubuntu 23.04 and running same commands  as Github workflow. If I use `html`, `stdout`, `junit` the same commands work.

**To Reproduce**

```sh
$ node -v
v20.11.0

$ npm install @stoplight/spectral-cli

$ npx spectral --version                                                                                                               
6.11.0

$ npm install @stoplight/spectral-owasp-ruleset
$ echo 'extends: ["@stoplight/spectral-owasp-ruleset"]' > src/api_specs/.spectral_owasp.yaml
$ curl -s https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.yaml -o src/api_specs/petstore.yaml
```

* Testing Spectral CLI:
```sh
$ npx spectral lint src/api_specs/petstore.yaml -r src/api_specs/.spectral_owasp.yaml 

/home/how-tos/src/api_specs/petstore.yaml

   8:5     error  owasp:api9:2023-inventory-access            Declare intended audience of every server by defining servers[0].x-internal as true/false.  servers[0]
  8:10     error  owasp:api8:2023-no-server-http              Server URLs must not use http://. Use https:// or wss:// instead.                           servers[0].url
  11:9   warning  owasp:api2:2023-read-restricted             This read operation is not protected by any security scheme.                                paths./pets.get
  21:18    error  owasp:api4:2023-integer-limit-legacy        Schema of type integer must specify minimum and maximum.                                    paths./pets.get.parameters[0].schema
  25:17  warning  owasp:api4:2023-rate-limit-responses-429    Operation is missing rate limiting response in responses[429].                              paths./pets.get.responses
  25:17  warning  owasp:api4:2023-rate-limit-responses-429    Operation is missing rate limiting response in responses[429].content.                      paths./pets.get.responses
  25:17  warning  owasp:api8:2023-define-error-responses-401  Operation is missing responses[401].                                                        paths./pets.get.responses
  25:17  warning  owasp:api8:2023-define-error-responses-401  Operation is missing responses[401].content.                                                paths./pets.get.responses
  25:17  warning  owasp:api8:2023-define-error-responses-500  Operation is missing responses[500].                                                        paths./pets.get.responses
  25:17  warning  owasp:api8:2023-define-error-responses-500  Operation is missing responses[500].content.                                                paths./pets.get.responses
  25:17  warning  owasp:api8:2023-define-error-validation     Missing error response of either 400, 422 or 4XX.                                           paths./pets.get.responses
  28:19    error  owasp:api4:2023-rate-limit                  All 2XX and 4XX responses should define rate limiting headers.                              paths./pets.get.responses[200].headers
  28:19    error  owasp:api8:2023-define-cors-origin          Header `headers.Access-Control-Allow-Origin` should be defined on all                                        
  ...
 118:17    error  owasp:api4:2023-string-limit                Schema of type string must specify maxLength, enum, or const.                               components.schemas.Error.properties.message
 118:17  warning  owasp:api4:2023-string-restricted           Schema of type string should specify a format, pattern, enum, or const.                     components.schemas.Error.properties.message

✖ 43 problems (15 errors, 28 warnings, 0 infos, 0 hints)

```

* Error when running Spectral to generate SARIF:
```sh
$ npx spectral lint src/api_specs/petstore.yaml -r src/api_specs/.spectral_owasp.yaml -f sarif -o.sarif report_spectral.sarif --verbose

Found 32 rules (32 enabled)
Linting /home/how-tos/src/api_specs/petstore.yaml
Error running Spectral!
Error #1: Your SARIF log is invalid, please solve SARIF_BUILDER_INVALID messages
          at buildSarifJsonString  …sarif-builder.js:43  throw new Error('Yo…
          at sarif                 …rs/dist/sarif.js:52  return sarifBuilder…
          at formatOutput          …rvices/output.js:21  return formatters[f…
          at                       …ommands/lint.js:166  const formattedOutp…
          at map                                                             
```

**Expected behavior**
I expect to get a sarif file.

**Environment (remove any that are not applicable):**
 - Library version: node v20.11.0
 - OS: Ubuntu 23.04

**Additional context**

I had same error when installed formatters:
```sh
$  npm install @stoplight/spectral-formatters
```
