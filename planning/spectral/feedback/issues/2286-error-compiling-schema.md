---
number: 2286
title: "Error compiling schema"
state: "closed"
labels: []
author: "jnsppp"
created: "2022-09-20T12:08:51Z"
updated: "2022-09-23T16:03:03Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2286"
---

# Error compiling schema

**Describe the bug**
`const { bundleAndLoadRuleset } = require('@stoplight/spectral-ruleset-bundler/with-loader');` is causing a compilation error if used in a package after `yarn publish`.

**To Reproduce**

Following this documentation: https://meta.stoplight.io/docs/spectral/eb68e7afd463e-spectral-in-java-script#load-a-jsonyaml-ruleset 

```
import * as fs from 'fs';
import * as path from 'path';

import { Document, Spectral } from '@stoplight/spectral-core';
import { fetch } from '@stoplight/spectral-runtime';

const parsers = require('@stoplight/spectral-parsers');
const { bundleAndLoadRuleset } = require('@stoplight/spectral-ruleset-bundler/with-loader'); // This causes the error

export const lintAPI = async (spec: any) => {
    await runSpectral(spec, './spectral/bff-spectral.json');
    await runSpectral(spec, './spectral/spectral.json');
};

export const runSpectral = async (spec: any, ruleSetPath: string) => {
    const spectral = new Spectral();
    const contract = new Document(JSON.stringify(spec), parsers.Json);
    spectral.setRuleset(await bundleAndLoadRuleset(path.resolve(ruleSetPath), { fs, fetch }));
    await spectral.run(contract).then(results => {
        console.log(results);
    });
};
```

the line `const { bundleAndLoadRuleset } = require('@stoplight/spectral-ruleset-bundler/with-loader'); ` is causing the following error after running `yarn publish` and using the package:

<img width="1433" alt="image" src="https://user-images.githubusercontent.com/62057124/191251842-1115c2bb-243e-404d-8fba-f9f1c226f32e.png">

**Expected behavior**

`bundleAndLoadRuleSet` is working as expected.

**Environment (remove any that are not applicable):**
 - Library version: 
  `"@stoplight/spectral-core": "^1.14.1",
    "@stoplight/spectral-parsers": "^1.0.2",
    "@stoplight/spectral-ruleset-bundler": "^1.3.2",
    "@stoplight/spectral-runtime": "^1.1.2",`
 - OS: macOS 12
 - Node: v14.17.6
