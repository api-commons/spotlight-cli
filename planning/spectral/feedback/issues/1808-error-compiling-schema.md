---
number: 1808
title: "Error compiling schema"
state: "closed"
labels: []
author: "staboness"
created: "2021-09-01T15:31:05Z"
updated: "2024-11-18T15:13:13Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1808"
---

# Error compiling schema

**Describe the bug**
After `yarn add @stoplight/spectral-core`, then `yarn add @stoplight/spectral-functions` and importing core:
```
import { Spectral, Document } from "@stoplight/spectral-core";
```
receiving a long error: 
```
Error compiling schema, function code: const schema19 = scope.schema[13];const schema20 = 
scope.schema[14];const schema21 = scope.schema[15];const func0 = scope.func[0];return function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;
let valid0 = false;
let passing0 = null;const _errs1 = errors;if(!(((((data === -1) || (data === 0)) || (data === 1)) || (data === 2)) || (data === 3))){const err0 = {instancePath,schemaPath:"#/$defs/DiagnosticSeverity/enum",keyword:"enum",params:{allowedValues: schema20.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}var _valid0 = _errs1 === errors;
if(_valid0){valid0 = true;passing0 = 0;}const _errs3 = errors;if(!(((((data === "error") || (data === "warn")) || (data === "info")) || (data === "hint")) || (data === "off"))){const err1 = {instancePath,schemaPath:"#/$defs/HumanReadableSeverity/enum",keyword:"enum",params:{allowedValues: schema21.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err1];
}else {vErrors.push(err1);}errors++;}var _valid0 = _errs3 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 1];}else {if(_valid0){valid0 = true;passing0 = 1;}}if(!valid0){const err2 = {instancePath,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};
if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}else {errors = _errs0;if(vErrors !== null){if(_errs0){vErrors.length = _errs0;
}else {vErrors = null;}}}if(errors > 0){for(const err3 of vErrors){if((((({"str":"err3"}.keyword !== "errorMessage") && (!{"str":"err3"}.emUsed)) && (({"str":"err3"}.instancePath === instancePath) || (({"str":"err3"}.instancePath.indexOf(instancePath) === 0) && ({"str":"err3"}.instancePath[instancePath.length] === "/")))) && ({"str":"err3"}.schemaPath.indexOf("#") === 0)) && ({"str":"err3"}.schemaPath["#".length] === "/")){{"str":"emErrs0"}.push({"str":"err3"});{"str":"err3"}.emUsed = true;}}if({"str":"emErrs0"}.length){if(vErrors === null){vErrors = [{"str":"err4"}];}else {vErrors.push({"str":"err4"});}errors++;}const emErrs1 = [];for(const err5 of vErrors){if(!{"str":"err5"}.emUsed){{"str":"emErrs1"}.push({"str":"err5"});}}vErrors = emErrs1;errors = {"str":"emErrs1"}.length;}validate17.errors = vErrors;return errors === 0;}
```
And also this one at `/lib/compile/index.ts:199`:

```
Uncaught SyntaxError: Unexpected token ':'
    at new Function (<anonymous>)
    at Ajv.compileSchema (index.ts:171)
    at Ajv.inlineOrCompile (index.ts:228)
    at Ajv.resolveRef (index.ts:223)
    at Object.code (ref.ts:18)
    at keywordCode (index.ts:523)
    at index.ts:228
    at CodeGen.code (index.ts:525)
    at CodeGen.block (index.ts:680)
    at schemaKeywords (index.ts:228)
    at typeAndKeywords (index.ts:161)
    at subSchemaObjCode (index.ts:147)
    at subschemaCode (index.ts:124)
    at KeywordCxt.subschema (index.ts:491)
    at applyPropertySchema (properties.ts:45)
    at Object.code (properties.ts:32)
    at keywordCode (index.ts:523)
    at index.ts:265
    at CodeGen.code (index.ts:525)
    at CodeGen.block (index.ts:680)
    at iterateKeywords (index.ts:262)
    at groupKeywords (index.ts:241)
    at index.ts:233
    at CodeGen.code (index.ts:525)
    at CodeGen.block (index.ts:680)
    at schemaKeywords (index.ts:232)
    at typeAndKeywords (index.ts:161)
    at subSchemaObjCode (index.ts:147)
    at subschemaCode (index.ts:124)
    at KeywordCxt.subschema (index.ts:491)
    at oneOf.ts:54
    at Array.forEach (<anonymous>)
    at validateOneOf (oneOf.ts:49)
    at CodeGen.code (index.ts:525)
    at CodeGen.block (index.ts:680)
    at Object.code (oneOf.ts:40)
    at keywordCode (index.ts:523)
    at index.ts:265
    at CodeGen.code (index.ts:525)
    at CodeGen.block (index.ts:680)
    at iterateKeywords (index.ts:262)
    at groupKeywords (index.ts:248)
    at index.ts:233
    at CodeGen.code (index.ts:525)
    at CodeGen.block (index.ts:680)
    at schemaKeywords (index.ts:232)
    at typeAndKeywords (index.ts:161)
    at index.ts:100
    at CodeGen.code (index.ts:525)
    at index.ts:60
```

It happens exactly after I install `@stoplight/spectral-functions` module, everything works fine without "functions", but I'm not able to use Spectral v6 with JS syntax.

**To Reproduce**

1. Use `npx npm init react-app spectralTest`
2. Add spectral-core and spectral-functions with `yarn add`
3. Import spectral-core in `App.js`
4. Do `yarn start`

**Expected behavior**
No errors :)

**Environment (remove any that are not applicable):**
 - Library version: spectral-core@1.4.0, spectral-functions@1.2.0
 - OS: WIndows 10 21H1 (Ubuntu 20.04)
 - Browser: Chrome 92.0.4515.159
