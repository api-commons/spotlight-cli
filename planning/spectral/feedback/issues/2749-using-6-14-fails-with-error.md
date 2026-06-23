---
number: 2749
title: "Using 6.14.* fails with error"
state: "closed"
labels: []
author: "TaherKapasi"
created: "2024-12-02T12:44:42Z"
updated: "2025-02-20T08:14:11Z"
comments: 3
reactions_total: 8
thumbs_up: 8
url: "https://github.com/stoplightio/spectral/issues/2749"
---

# Using 6.14.* fails with error

**Describe the bug**
When running `spectral lint my-api.yaml` against an Open API v3.0.3 spec using `@stoplight\spectral-cli@6.14.2` it fails with the following error.  The unmodified API spec has been passing using `@stoplight\spectral-cli@6.13.1`.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document '...' - sensitive - cannot supply
2. Run this CLI command 'spectral lint my-api.yaml' 
3. See error
```bash
Error compiling schema, function code: const schema16 = scope.schema[10];return function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: schema16.type},message:"must be object,null"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}if(data && typeof data == "object" && !Array.isArray(data)){for(const key0 in data){if(!(key0 === "keyedBy")){const err1 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}}if(data.keyedBy !== undefined){if(typeof data.keyedBy !== "string"){const err2 = {instancePath:instancePath+"/keyedBy",schemaPath:"#/properties/keyedBy/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}}}if(errors > 0){const emErrors0 = {"type":[]};for(const err3 of vErrors){if(((((({"str":"err3"}.keyword !== "errorMessage") && (!{"str":"err3"}.emUsed)) && ({"str":"err3"}.instancePath === instancePath)) && ({"str":"err3"}.keyword in {"str":"emErrors0"})) && ({"str":"err3"}.schemaPath.indexOf("#") === 0)) && (/^\/[^\/]*$/.test({"str":"err3"}.schemaPath.slice(1)))){{"str":"emErrors0"}[{"str":"err3"}.keyword].push({"str":"err3"});{"str":"err3"}.emUsed = true;}}for(const key1 in emErrors0){if({"str":"emErrors0"}[{"str":"key1"}].length){if(vErrors === null){vErrors = [{"str":"err4"}];}else {vErrors.push({"str":"err4"});}errors++;}}const emErrs0 = [];for(const err5 of vErrors){if(!{"str":"err5"}.emUsed){{"str":"emErrs0"}.push({"str":"err5"});}}vErrors = emErrs0;errors = {"str":"emErrs0"}.length;}validate14.errors = vErrors;return errors === 0;}
/Users/tk/Library/CloudStorage/storage/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:120
        throw e;
        ^

SyntaxError: Unexpected token ':'
    at new Function (<anonymous>)
    at Ajv.compileSchema (/Users/tk/Library/CloudStorage/storage/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:89:30)
    at Ajv._compileSchemaEnv (/Users/tk/Library/CloudStorage/storage/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/core.js:473:37)
    at Ajv.compile (/Users/tk/Library/CloudStorage/storage/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/core.js:160:38)
    at createRulesetFunction (/Users/tk/Library/CloudStorage/storage/node_modules/@stoplight/spectral-core/dist/ruleset/function.js:68:80)
    at Object.<anonymous> (/Users/tk/Library/CloudStorage/storage/node_modules/@stoplight/spectral-functions/dist/alphabetical.js:30:61)
    at Module._compile (node:internal/modules/cjs/loader:1469:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
    at Module.load (node:internal/modules/cjs/loader:1288:32)
    at Module._load (node:internal/modules/cjs/loader:1104:12)

Node.js v20.18.0
```

Rules: `.spectral.yaml`

```
---
extends: "spectral:oas"
```

**Expected behaviour**
```bash
$ spectral lint src/specs/api.yaml
No results with a severity of 'error' found!
```

**Screenshots**
***Error (v6.14.2)***
<img width="1637" alt="Screenshot 2024-12-02 at 12 42 10" src="https://github.com/user-attachments/assets/d289367d-43c4-488e-a25e-c6ed8972cc72">


***Expected (v6.13.1)***
<img width="909" alt="Screenshot 2024-12-02 at 12 41 29" src="https://github.com/user-attachments/assets/ecf312ac-3ef4-4d7c-866f-3c0aec0b2c55">


**Environment (remove any that are not applicable):**
 - Library version: 6.14.*
 - OS: Mac Sequoia 15.1.1

**Additional context**
Add any other context about the problem here.
