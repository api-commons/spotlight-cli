---
number: 2003
title: "Doesn't work with NPM 6 if also including AJV"
state: "closed"
labels: []
author: "sazzer"
created: "2021-12-17T09:58:15Z"
updated: "2022-08-02T21:08:34Z"
comments: 7
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2003"
---

# Doesn't work with NPM 6 if also including AJV

**Describe the bug**
When using Spectral in a project building with NPM 6, if AJV is also included then requiring Spectral fails to work correctly.


**To Reproduce**

Given this code:
```
-> % cat package.json
{
  "name": "spectral-ajv-bug",
  "scripts": {
    "start": "node ./start.js"
  },
  "dependencies": {
    "@stoplight/spectral-core": "^1.8.0",
    "@stoplight/spectral-functions": "^1.5.0",
    "@stoplight/spectral-parsers": "^1.0.1",
    "@stoplight/spectral-rulesets": "^1.3.0",
    "ajv": "^8.6.3"
  },
  "devDependencies": {
    "eslint": "^7.6.0"
  }
}

-> % cat start.js
const { Spectral } = require('@stoplight/spectral-core')
```

Running `npm start` gives this:
```
-> % npm start

> spectral-ajv-bug@ start /Users/coxg/source/temp/spectral
> node ./start.js

Error compiling schema, function code: const schema20 = scope.schema[14];const schema21 = scope.schema[15];const schema22 = scope.schema[16];const func0 = scope.func[0];return function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;const _errs0 = errors;let valid0 = false;let passing0 = null;const _errs1 = errors;if(!(((((data === -1) || (data === 0)) || (data === 1)) || (data === 2)) || (data === 3))){const err0 = {instancePath,schemaPath:"#/$defs/DiagnosticSeverity/enum",keyword:"enum",params:{allowedValues: schema21.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err0];}else {vErrors.push(err0);}errors++;}var _valid0 = _errs1 === errors;if(_valid0){valid0 = true;passing0 = 0;}const _errs3 = errors;if(!(((((data === "error") || (data === "warn")) || (data === "info")) || (data === "hint")) || (data === "off"))){const err1 = {instancePath,schemaPath:"#/$defs/HumanReadableSeverity/enum",keyword:"enum",params:{allowedValues: schema22.enum},message:"must be equal to one of the allowed values"};if(vErrors === null){vErrors = [err1];}else {vErrors.push(err1);}errors++;}var _valid0 = _errs3 === errors;if(_valid0 && valid0){valid0 = false;passing0 = [passing0, 1];}else {if(_valid0){valid0 = true;passing0 = 1;}}if(!valid0){const err2 = {instancePath,schemaPath:"#/oneOf",keyword:"oneOf",params:{passingSchemas: passing0},message:"must match exactly one schema in oneOf"};if(vErrors === null){vErrors = [err2];}else {vErrors.push(err2);}errors++;}else {errors = _errs0;if(vErrors !== null){if(_errs0){vErrors.length = _errs0;}else {vErrors = null;}}}if(errors > 0){for(const err3 of vErrors){if((((({"str":"err3"}.keyword !== "errorMessage") && (!{"str":"err3"}.emUsed)) && (({"str":"err3"}.instancePath === instancePath) || (({"str":"err3"}.instancePath.indexOf(instancePath) === 0) && ({"str":"err3"}.instancePath[instancePath.length] === "/")))) && ({"str":"err3"}.schemaPath.indexOf("#") === 0)) && ({"str":"err3"}.schemaPath["#".length] === "/")){{"str":"emErrs0"}.push({"str":"err3"});{"str":"err3"}.emUsed = true;}}if({"str":"emErrs0"}.length){if(vErrors === null){vErrors = [{"str":"err4"}];}else {vErrors.push({"str":"err4"});}errors++;}const emErrs1 = [];for(const err5 of vErrors){if(!{"str":"err5"}.emUsed){{"str":"emErrs1"}.push({"str":"err5"});}}vErrors = emErrs1;errors = {"str":"emErrs1"}.length;}validate18.errors = vErrors;return errors === 0;}
/Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:121
        throw e;
        ^

SyntaxError: Unexpected token ':'
    at new Function (<anonymous>)
    at Ajv.compileSchema (/Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:90:30)
    at Ajv.inlineOrCompile (/Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:149:47)
    at Ajv.resolveRef (/Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/index.js:143:46)
    at Object.code (/Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/vocabularies/core/ref.js:19:47)
    at keywordCode (/Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/validate/index.js:454:13)
    at /Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/validate/index.js:185:25
    at CodeGen.code (/Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/codegen/index.js:439:13)
    at CodeGen.block (/Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/codegen/index.js:568:18)
    at schemaKeywords (/Users/coxg/source/temp/spectral/node_modules/@stoplight/spectral-core/node_modules/ajv/dist/compile/validate/index.js:185:13)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! spectral-ajv-bug@ start: `node ./start.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the spectral-ajv-bug@ start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/coxg/.npm/_logs/2021-12-17T09_48_56_925Z-debug.log
```

**Expected behavior**
No error should occur.

**Environment (remove any that are not applicable):**
 - Node: 14.18.2
 - NPM: 6.14.14
 - OS: macOS 11.6 on arm64

**Additional context**
AJV is included explicitly because eslint depends on an incompatible version. Without the explicit inclusion it sometimes works and sometimes gives a totally different error, depending on NPM module resolution.

```
-> % npm ls ajv
spectral-ajv-bug@ /Users/coxg/source/temp/spectral
├─┬ @stoplight/spectral-core@1.8.0
│ ├── ajv@8.6.3
│ └─┬ ajv-formats@2.1.1
│   └── ajv@8.8.2  deduped
├─┬ @stoplight/spectral-functions@1.5.0
│ └── ajv@8.8.2  deduped
├─┬ @stoplight/spectral-rulesets@1.3.0
│ └── ajv@8.6.3
├── ajv@8.8.2
└─┬ eslint@7.32.0
  ├─┬ @eslint/eslintrc@0.4.3
  │ └── ajv@6.12.6
  ├── ajv@6.12.6
  └─┬ table@6.7.5
    └── ajv@8.8.2  deduped
```

This works perfectly fine under NPM 7, NPM 8 and Yarn, but *not* under NPM 6 - which is what we're currently using.

I get the exact same error whether the explicit dependency on AJV is for 8.6.3 or 8.8.2 - both of which are used by Spectral. I do *not* get any errors if I remove both the AJV and ESLint dependencies from the project.

Note as well that the error occurs by including the `require` line. No functionality from Spectral actually needs to be triggered.
