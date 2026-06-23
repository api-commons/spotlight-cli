---
number: 2647
title: "OpenAPI Spec Rules wildcard \"*\" is not accepted as a path param. "
state: "closed"
labels: []
author: "DanCRichards"
created: "2024-06-27T06:25:26Z"
updated: "2025-12-03T23:03:34Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2647"
---

# OpenAPI Spec Rules wildcard "*" is not accepted as a path param. 

**Describe the bug**
The spectral:oas ruleset does not allow for {*} to be included within the path params. 


**To Reproduce**

1. Consider the following endpoint which has been defined by fastify-swagger. 
```yaml
openapi: 3.0.3
info:
  title: "Wildcard Issue API"
  version: 4.2.0
  description: :) 
components:
  schemas: {}
paths:
  /documentation/static/{*}:
    head: &a1
      parameters:
        - schema:
            type: string
          in: path
          name: "*"
          required: true
      responses:
        "200":
          description: Default Response
    get: *a1

```
2. Run this CLI command `npx spectral lint openapi.yml -D` 
3. See error `error path-params Parameter "*" must be used in path "/documentation/static/{*}". paths./documentation/something/{*}.head.parameters[0]`
4. 

**Expected behavior**
I would expect that {*} is an accepted path param 
**Screenshots**
![image](https://github.com/stoplightio/spectral/assets/17732740/b12c04e6-0534-4581-9b81-66ca2ea676c8)

**Problematic Code** 
All of this code is in oasPathParam.js



Code raising error. [here](https://github.com/stoplightio/spectral/blob/048924d358ccb6432e368ae3d0b15cb78c72a6dd/packages/rulesets/src/oas/functions/oasPathParam.ts#L46)
```javascript
const ensureAllDefinedPathParamsAreUsedInPath = (path, params, expected, results) => {
    for (const p of Object.keys(params)) {
        if (!params[p]) {
            continue;
        }
        if (!expected.includes(p)) {
            const resPath = params[p];
            results.push(generateResult(`Parameter "${p}" must be used in path "${path}".`, resPath));
        }
    }
};
```

In the function above the expected argument is empty for the endpoint in question. The function is called by oasPathParams(path) function [here](https://github.com/stoplightio/spectral/blob/048924d358ccb6432e368ae3d0b15cb78c72a6dd/packages/rulesets/src/oas/functions/oasPathParam.ts#L87)

```javascript
function oasPathParam(paths) {
         /*
            ... 
         */

        const pathElements = [];
        let match;
        while ((match = pathRegex.exec(path))) {
            const p = match[0].replace(/[{}?*;]/g, '');
            if (pathElements.includes(p)) {
                results.push(generateResult(`Path "${path}" must not use parameter "{${p}}" multiple times.`, ['paths', path]));
            }
            else {
                pathElements.push(p);
            }
        }

       /*
          ...
      */

       ensureAllExpectedParamsInPathAreDefined(path, definedParams, pathElements, operationPath, results);
}
```

When running the endpoint path in question isn't validated against the regex and isn't added to the `pathElements` array, which is then passed through as the 'expected' path params object which raises the error. 

The regex defined [here](https://github.com/stoplightio/spectral/blob/048924d358ccb6432e368ae3d0b15cb78c72a6dd/packages/rulesets/src/oas/functions/oasPathParam.ts#L6) doesn't allow for the {*} to be defined. It is only looking for alphanumber characters and -. 


Proof that this endpoint does not pass the regex can be found [here](https://regex101.com/r/aXzwGN/1)

This can be fixed by adding * to the regex. 



**Additional context**
This error relates to fastify-swagger generating the documentation/static/{*} endpoint for some other people this may be /docs/static/{*}

Any one dealing with this error can modify their .spectral.yaml file to be. 

```yaml
extends: "spectral:oas"
overrides:
  - files:
      - "**#/paths/~1documentation~1static~1%7B*%7D"
    rules:
      path-params: "off"

```
