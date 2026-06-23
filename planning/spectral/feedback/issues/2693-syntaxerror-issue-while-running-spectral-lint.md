---
number: 2693
title: "SyntaxError issue while running spectral lint"
state: "open"
labels: []
author: "lucas-silveira"
created: "2024-09-16T21:34:49Z"
updated: "2025-03-17T17:26:59Z"
comments: 2
reactions_total: 13
thumbs_up: 13
url: "https://github.com/stoplightio/spectral/issues/2693"
---

# SyntaxError issue while running spectral lint

**Describe the bug**
I'm getting a SyntaxError issue while running spectral-lint library.

Unfortunately I cannot share my OpenAPI document because it's a private project. But it's an OpenApi 3.0.0 version. It's not broken (I've already test it in the Swagger Editor).

I suspect that it may be some dependency with a version conflict, since in another project the lib works (with the same document as the problematic project). Both projects use the Node v20.9.0 version.

**Expected behavior**
When running the `npx spectral lint -r myruleset.yaml openapi.json` command, validate the document and return the result.

**Screenshots**
The error is the following:
```sh
Error compiling schema, function code: const schema16 = scope.schema[10];return function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: schema16.type},message:"must be object,null"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}if(data && typeof data == "object" && !Array.isArray(data)){for(const key0 in data){if(!(key0 === "keyedBy")){const err1 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}}if(data.keyedBy !== undefined){if(typeof data.keyedBy !== "string"){const err2 = {instancePath:instancePath+"/keyedBy",schemaPath:"#/properties/keyedBy/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}}}if(errors > 0){const emErrors0 = {"type":[]};for(const err3 of vErrors){if(((((({"str":"err3"}.keyword !== "errorMessage") && (!{"str":"err3"}.emUsed)) && ({"str":"err3"}.instancePath === instancePath)) && ({"str":"err3"}.keyword in {"str":"emErrors0"})) && ({"str":"err3"}.schemaPath.indexOf("#") === 0)) && (/^\/[^\/]*$/.test({"str":"err3"}.schemaPath.slice(1)))){{"str":"emErrors0"}[{"str":"err3"}.keyword].push({"str":"err3"});{"str":"err3"}.emUsed = true;}}for(const key1 in emErrors0){if({"str":"emErrors0"}[{"str":"key1"}].length){if(vErrors === null){vErrors = [{"str":"err4"}];}else {vErrors.push({"str":"err4"});}errors++;}}const emErrs0 = [];for(const err5 of vErrors){if(!{"str":"err5"}.emUsed){{"str":"emErrs0"}.push({"str":"err5"});}}vErrors = emErrs0;errors = {"str":"emErrs0"}.length;}validate14.errors = vErrors;return errors === 0;}
/home/circleci/project/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:120
        throw e;
        ^

SyntaxError: Unexpected token ':'
    at new Function (<anonymous>)
    at Ajv.compileSchema (/home/circleci/project/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:89:30)
    at Ajv._compileSchemaEnv (/home/circleci/project/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/core.js:473:37)
    at Ajv.compile (/home/circleci/project/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/core.js:160:38)
    at createRulesetFunction (/home/circleci/project/node_modules/@stoplight/spectral-core/dist/ruleset/function.js:68:80)
    at Object.<anonymous> (/home/circleci/project/node_modules/@stoplight/spectral-functions/dist/alphabetical.js:30:61)
    at Module._compile (node:internal/modules/cjs/loader:1241:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1295:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)

Node.js v20.9.0

Exited with code exit status 1
```

**Library version**
I've tested the following `@stoplight/spectral-cli` versions:
- 6.13.0
- 6.12.0
- 6.11.0

## Update
I found that this problem occurs when using the cli with `@stoplight/spectral-core:1.19.1`. When installing the `@stoplight/spectral-core:1.18.3` version directly the problem no longer occurs.
