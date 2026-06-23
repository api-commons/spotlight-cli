---
number: 2802
title: "Schema Compilation Error in Spectral 6.14.3"
state: "open"
labels: []
author: "himynameisdave"
created: "2025-04-07T16:26:15Z"
updated: "2025-04-30T08:58:30Z"
comments: 1
reactions_total: 4
thumbs_up: 4
url: "https://github.com/stoplightio/spectral/issues/2802"
---

# Schema Compilation Error in Spectral 6.14.3

**Describe the bug**

After upgrading from Spectral `6.13.1` to `6.14.3`, we're encountering a schema compilation error when running the linter. The error occurs during the compilation of a schema validation function, specifically around the handling of the `keyedBy` property. This seems to come from the `avj` package.

It runs completely fine in `6.13.1`

**To Reproduce**

1. Upgrade package (Spectral CLI) to version `6.14.3`
1. Ensure Node.js version: `18.20.5`
1. `spectral lint --verbose ./docs/swagger/api.yaml --ruleset ./api.lint.yaml --fail-severity=warn`

**Expected behavior**
- Expected to run without errors.

**Screenshots**
- N/A

**Environment (remove any that are not applicable):**
 - Node `18.20.5`
 - Yarn `1.22.19`

**Additional context**

The error message itself:

```

$ spectral lint --verbose ./docs/swagger/api.yaml --ruleset ./api.lint.yaml --fail-severity=warn
Error compiling schema, function code: const schema16 = scope.schema[10];return function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: schema16.type},message:"must be object,null"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}if(data && typeof data == "object" && !Array.isArray(data)){for(const key0 in data){if(!(key0 === "keyedBy")){const err1 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}}if(data.keyedBy !== undefined){if(typeof data.keyedBy !== "string"){const err2 = {instancePath:instancePath+"/keyedBy",schemaPath:"#/properties/keyedBy/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}}}if(errors > 0){const emErrors0 = {"type":[]};for(const err3 of vErrors){if(((((({"str":"err3"}.keyword !== "errorMessage") && (!{"str":"err3"}.emUsed)) && ({"str":"err3"}.instancePath === instancePath)) && ({"str":"err3"}.keyword in {"str":"emErrors0"})) && ({"str":"err3"}.schemaPath.indexOf("#") === 0)) && (/^\/[^\/]*$/.test({"str":"err3"}.schemaPath.slice(1)))){{"str":"emErrors0"}[{"str":"err3"}.keyword].push({"str":"err3"});{"str":"err3"}.emUsed = true;}}for(const key1 in emErrors0){if({"str":"emErrors0"}[{"str":"key1"}].length){if(vErrors === null){vErrors = [{"str":"err4"}];}else {vErrors.push({"str":"err4"});}errors++;}}const emErrs0 = [];for(const err5 of vErrors){if(!{"str":"err5"}.emUsed){{"str":"emErrs0"}.push({"str":"err5"});}}vErrors = emErrs0;errors = {"str":"emErrs0"}.length;}validate14.errors = vErrors;return errors === 0;}
/Users/me/myapp/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:120
        throw e;
        ^

SyntaxError: Unexpected token ':'
    at new Function (<anonymous>)
    at Ajv.compileSchema (/Users/me/myapp/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:89:30)
    at Ajv._compileSchemaEnv (/Users/me/myapp/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/core.js:473:37)
    at Ajv.compile (/Users/himynameisdave/me/myapp/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/core.js:160:38)
    at createRulesetFunction (/Users/me/myapp/node_modules/@stoplight/spectral-core/dist/ruleset/function.js:68:80)
    at Object.<anonymous> (/Users/me/myapp/node_modules/@stoplight/spectral-ruleset-migrator/node_modules/@stoplight/spectral-functions/dist/alphabetical.js:30:61)
    at Module._compile (node:internal/modules/cjs/loader:1364:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
    at Module.load (node:internal/modules/cjs/loader:1203:32)
    at Module._load (node:internal/modules/cjs/loader:1019:12)
```
