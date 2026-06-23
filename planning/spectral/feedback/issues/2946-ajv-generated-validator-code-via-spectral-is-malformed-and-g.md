---
number: 2946
title: "AJV-generated validator code (via Spectral) is malformed and gives `SyntaxError: Unexpected token ':'`"
state: "open"
labels: []
author: "shreevathsaEK22"
created: "2026-04-30T03:58:32Z"
updated: "2026-05-23T20:56:40Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2946"
---

# AJV-generated validator code (via Spectral) is malformed and gives `SyntaxError: Unexpected token ':'`

I am getting the following error when I try to generate a diff using optic diff, which internally uses spectral.

`Error compiling schema, function code: const schema16 = scope.schema[10];return function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){const err0 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: schema16.type},message:"must be object,null"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}if(data && typeof data == "object" && !Array.isArray(data)){for(const key0 in data){if(!(key0 === "keyedBy")){const err1 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}}if(data.keyedBy !== undefined){if(typeof data.keyedBy !== "string"){const err2 = {instancePath:instancePath+"/keyedBy",schemaPath:"#/properties/keyedBy/type",keyword:"type",params:{type: "string"},message:"must be string"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}}}if(errors > 0){const emErrors0 = {"type":[]};for(const err3 of vErrors){if(((((({"str":"err3"}.keyword !== "errorMessage") && (!{"str":"err3"}.emUsed)) && ({"str":"err3"}.instancePath === instancePath)) && ({"str":"err3"}.keyword in {"str":"emErrors0"})) && ({"str":"err3"}.schemaPath.indexOf("#") === 0)) && (/^\/[^\/]*$/.test({"str":"err3"}.schemaPath.slice(1)))){{"str":"emErrors0"}[{"str":"err3"}.keyword].push({"str":"err3"});{"str":"err3"}.emUsed = true;}}for(const key1 in emErrors0){if({"str":"emErrors0"}[{"str":"key1"}].length){if(vErrors === null){vErrors = [{"str":"err4"}];}else {vErrors.push({"str":"err4"});}errors++;}}const emErrs0 = [];for(const err5 of vErrors){if(!{"str":"err5"}.emUsed){{"str":"emErrs0"}.push({"str":"err5"});}}vErrors = emErrs0;errors = {"str":"emErrs0"}.length;}validate14.errors = vErrors;return errors === 0;}`

`SyntaxError: Unexpected token ':' at new Function (<anonymous>) at Ajv.compileSchema (/usr/local/lib/node_modules/@useoptic/optic/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:89:30) at Ajv._compileSchemaEnv (/usr/local/lib/node_modules/@useoptic/optic/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/core.js:473:37) at Ajv.compile (/usr/local/lib/node_modules/@useoptic/optic/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/core.js:160:38) at createRulesetFunction (/usr/local/lib/node_modules/@useoptic/optic/node_modules/@stoplight/spectral-core/dist/ruleset/function.js:68:80) at Object.<anonymous> (/usr/local/lib/node_modules/@useoptic/optic/node_modules/@stoplight/spectral-functions/dist/alphabetical.js:30:61) at Module._compile (node:internal/modules/cjs/loader:1705:14) at Object..js (node:internal/modules/cjs/loader:1838:10) at Module.load (node:internal/modules/cjs/loader:1441:32) at Function._load (node:internal/modules/cjs/loader:1263:12) Node.js v22.22.2`
