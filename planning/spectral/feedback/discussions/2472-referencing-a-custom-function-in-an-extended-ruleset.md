---
number: 2472
title: "Referencing a custom function in an extended ruleset"
category: "Q&A"
author: "exoszajzbuk"
created: "2023-05-16T15:28:23Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2472"
---

# Referencing a custom function in an extended ruleset

Hey guys,

With Spectral < 6 we've managed to use custom functions defined in a "library" ruleset:

**library.yaml**
```yaml
extends: spectral:oas

functionsDir: './functions'
functions:
  - my-custom-function
```

and in a project using the "library" ruleset: 

***.spectral.yaml***
```yaml
extends: '<library-package>/library.yaml'

custom-project-rule:
  recommended: true
  ...
  given:
    - $.paths.*.*.xy[*]
  then:
    function: my-custom-function
```

with this setup Spectral 6 returns:

```
    Error #1: Function is not defined
              at validateFunction  ../../node_modules/@stoplight/spectral-core/dist/ruleset/validation/validators/function.js:21  return new errors_1.RulesetValidationError('undefined-function', ex.message, (0, error_1.toParsedPath)(path));              
              at validate26        ../../node_modules/ajv/lib/compile/index.ts:171                                                const makeValidate = new Function(`${N.self}`, `${N.scope}`, sourceCode)                                                    
              at validate15        ../../node_modules/ajv/lib/compile/index.ts:171                                                const makeValidate = new Function(`${N.self}`, `${N.scope}`, sourceCode)                                                    
              at validate14        ../../node_modules/ajv/lib/compile/index.ts:171                                                const makeValidate = new Function(`${N.self}`, `${N.scope}`, sourceCode)                                                    
              at apply             ../../node_modules/@stoplight/spectral-core/dist/ruleset/validation/ajv.js:79                  return Reflect.apply(target, { validateAlias: alias_1.validateAlias, validateFunction: function_1.validateFunction }, args);
```

is there a way to make it work by sticking to YAML rulesets? I reckon it might be possible to do it with JS rulesets, exporting the custom function from the library and referencing it in the "project" ruleset - but it'd introduce a fairly big breaking for us.
