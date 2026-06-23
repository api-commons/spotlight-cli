---
number: 1955
title: "Won't start in Node 17.1.0"
state: "closed"
labels: []
author: "sandro-pasquali"
created: "2021-11-13T18:00:52Z"
updated: "2021-11-14T07:28:32Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1955"
---

# Won't start in Node 17.1.0

Both

```import Spectral from '@stoplight/spectral-core';```

and

```import('@stoplight/spectral-core');```

trigger the following error:

```
Error compiling schema, function code: const schema20 = scope.schema[14];const schema21 = scope.schema[15];const schema22 = scope.schema[16];const func0 = scope.func[0];return function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;let valid0 = false;let passing0 = null;const _errs1 = errors;if(!(((((data === -1) || (data === 0)) || (data === 1)) || (data === 2)) || (data === 3))){const err0 = {instancePath,schemaPath:"#/$defs/DiagnosticSeverity/enum",keyword:"enum",params:{allowedValues: schema21.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}var _valid0 = _errs1 === errors;if(_valid0){valid0 = true;passing0 = 0;}const _errs3 = errors;if(!(((((data === "error") || (data === "warn")) || (data === "info")) || (data === "hint")) || (data === "off"))){const err1 = {instancePath,schemaPath:"#/$defs/HumanReadableSeverity/enum",keyword:"enum",params:{allowedValues: schema22.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}var _valid0 = _errs3 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 1];}else {if(_valid0){valid0 = true;passing0 = 1;}}if(!valid0){const err2 = {instancePath,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}else {errors = _errs0;if(vErrors !== null){if(_errs0){vErrors.length = _errs0;}else {vErrors = null;}}}if(errors > 0){for(const err3 of vErrors){if((((({"str":"err3"}.keyword !== "errorMessage") && (!{"str":"err3"}.emUsed)) && (({"str":"err3"}.instancePath === instancePath) || (({"str":"err3"}.instancePath.indexOf(instancePath) === 0) && ({"str":"err3"}.instancePath[instancePath.length] === "/")))) && ({"str":"err3"}.schemaPath.indexOf("#") === 0)) && ({"str":"err3"}.schemaPath["#".length] === "/")){{"str":"emErrs0"}.push({"str":"err3"});{"str":"err3"}.emUsed = true;}}if({"str":"emErrs0"}.length){if(vErrors === null){vErrors = [{"str":"err4"}];}else {vErrors.push({"str":"err4"});}errors++;}const emErrs1 = [];for(const err5 of vErrors){if(!{"str":"err5"}.emUsed){{"str":"emErrs1"}.push({"str":"err5"});}}vErrors = emErrs1;errors = {"str":"emErrs1"}.length;}validate18.errors = vErrors;return errors === 0;}
undefined:3
const schema20 = scope.schema[14];const schema21 = scope.schema[15];const schema22 = scope.schema[16];const func0 = scope.func[0];return function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;let valid0 = false;let passing0 = null;const _errs1 = errors;if(!(((((data === -1) || (data === 0)) || (data === 1)) || (data === 2)) || (data === 3))){const err0 = {instancePath,schemaPath:"#/$defs/DiagnosticSeverity/enum",keyword:"enum",params:{allowedValues: schema21.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}var _valid0 = _errs1 === errors;if(_valid0){valid0 = true;passing0 = 0;}const _errs3 = errors;if(!(((((data === "error") || (data === "warn")) || (data === "info")) || (data === "hint")) || (data === "off"))){const err1 = {instancePath,schemaPath:"#/$defs/HumanReadableSeverity/enum",keyword:"enum",params:{allowedValues: schema22.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}var _valid0 = _errs3 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 1];}else {if(_valid0){valid0 = true;passing0 = 1;}}if(!valid0){const err2 = {instancePath,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}else {errors = _errs0;if(vErrors !== null){if(_errs0){vErrors.length = _errs0;}else {vErrors = null;}}}if(errors > 0){for(const err3 of vErrors){if((((({"str":"err3"}.keyword !== "errorMessage") && (!{"str":"err3"}.emUsed)) && (({"str":"err3"}.instancePath === instancePath) || (({"str":"err3"}.instancePath.indexOf(instancePath) === 0) && ({"str":"err3"}.instancePath[instancePath.length] === "/")))) && ({"str":"err3"}.schemaPath.indexOf("#") === 0)) && ({"str":"err3"}.schemaPath["#".length] === "/")){{"str":"emErrs0"}.push({"str":"err3"});{"str":"err3"}.emUsed = true;}}if({"str":"emErrs0"}.length){if(vErrors === null){vErrors = [{"str":"err4"}];}else {vErrors.push({"str":"err4"});}errors++;}const emErrs1 = [];for(const err5 of vErrors){if(!{"str":"err5"}.emUsed){{"str":"emErrs1"}.push({"str":"err5"});}}vErrors = emErrs1;errors = {"str":"emErrs1"}.length;}validate18.errors = vErrors;return errors === 0;}


SyntaxError: Unexpected token ':'
at new Function (<anonymous>)
    at Ajv.compileSchema (<user path>/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:90:30)
    at Ajv.inlineOrCompile (<user path>/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:149:47)
    at Ajv.resolveRef (<user path>/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:143:46)
    at Object.code (<user path>/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/vocabularies/core/ref.js:19:47)
    at keywordCode (<user path>/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/validate/index.js:454:13)
    at <user path>/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/validate/index.js:185:25
    at CodeGen.code (<user path>/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/codegen/index.js:439:13)
    at CodeGen.block (<user path>/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/codegen/index.js:568:18)
    at schemaKeywords (<user path>/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/validate/index.js:185:13)
```

- NodeJS 17.1.0
- Library version: [1.6.1]
- OS: [macOs Monterey, Mini M1]
