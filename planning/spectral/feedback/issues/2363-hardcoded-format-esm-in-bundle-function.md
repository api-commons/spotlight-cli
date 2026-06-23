---
number: 2363
title: "Hardcoded format 'esm' in `bundle` function "
state: "closed"
labels: []
author: "jnsppp"
created: "2022-12-06T16:57:33Z"
updated: "2023-01-26T16:50:39Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2363"
---

# Hardcoded format 'esm' in `bundle` function 

**Hardcoded format 'esm' in `bundle` function**

When using custom rulesets from nodejs, there is a bug when using the `bundleAndLoadRuleset` function and using `functions` in that ruleset. The Problem is that even though `bundleAndLoadRuleset` is passing `format: 'commonjs'`  to the `bundle` function ([see here](https://github.com/stoplightio/spectral/blob/develop/packages/ruleset-bundler/src/loader/node.ts#L9-L18)), the format inside `bundle` is hardcoded to `esm` ([see here](https://github.com/stoplightio/spectral/blob/develop/packages/ruleset-bundler/src/loader/common/bundle.ts#L11-L15)).

This is causing spectral to fail with the following error:

![image]()


**To Reproduce**

1. Given any openAPI document
2. Given a json ruleset that is using `functions` and a directory structure like this:
![image](https://user-images.githubusercontent.com/62057124/205971276-61d8a194-47fc-4c2e-b0c0-7dfa9e530b0d.png)

![image](https://user-images.githubusercontent.com/62057124/205971387-c9f79c03-bede-4be6-b1fe-d160fdafc455.png)

3. Having a custom function defined as described in here: https://docs.stoplight.io/docs/spectral/a781e290eb9f9-custom-functions

4. Loading the ruleset as described in here: https://docs.stoplight.io/docs/spectral/eb68e7afd463e-spectral-in-java-script#load-a-jsonyaml-ruleset:

```typescript
    const ruleset = await bundleAndLoadRuleset(path.join(__dirname, ruleSetPath), { fs, fetch });
    spectral.setRuleset(ruleset as Ruleset);
```

5. See error

![image]()


**Expected behavior ( & how to fix?? )**
`bundleAndLoadRuleset` is loading rulesets that are using custom functions as expected without any errors. 

What I don't get is why in [here](https://github.com/stoplightio/spectral/blob/develop/packages/ruleset-bundler/src/loader/common/bundle.ts#L11-L15) the format is hardcoded to `esm` even though in [`bundleOptions`](https://github.com/stoplightio/spectral/blob/develop/packages/ruleset-bundler/src/loader/common/bundle.ts#L9) the format is passed as `commonjs`. 

When changing https://github.com/stoplightio/spectral/blob/develop/packages/ruleset-bundler/src/loader/common/bundle.ts#L13 to the follwowing

```typescript
format: bundleOptions.format === 'commonjs' ? bundleOptions.format : 'esm',
```

the ruleset including the functions is bundled and loaded correctly, so that the linting can be executed as expected.


**Environment:**
 - Library versions: 
 
     "@stoplight/spectral-core": "^1.15.2",
     "@stoplight/spectral-parsers": "^1.0.2",
     "@stoplight/spectral-ruleset-bundler": "^1.5.0",
     "@stoplight/spectral-runtime": "^1.1.2",
 
 - OS: macOs 12.2.1
 - node version: any

If you need further information, please let me know. 🚀
