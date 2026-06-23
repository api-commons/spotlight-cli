---
number: 2009
title: "Docs: How to use the JavaScript API with `extends`"
state: "open"
labels: ["documentation", "triaged"]
author: "jamietanna"
created: "2021-12-22T10:49:17Z"
updated: "2024-05-31T12:35:13Z"
comments: 5
reactions_total: 2
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2009"
---

# Docs: How to use the JavaScript API with `extends`

**User Story**

As a user, I want to write tests for my Spectral rules, so I can be more confident that the rules work.

**Further details**

I want to write tests, similar to the below:

```javascript
const { Spectral, isOpenApiv3, Document } = require('@stoplight/spectral-core');
const Parsers = require("@stoplight/spectral-parsers"); // make sure to install the package if you intend to use default parsers!
const { truthy } = require("@stoplight/spectral-functions"); // this has to be installed as well
const yaml = require('js-yaml')
const fs  = require('fs')
const path  = require('path')

const myDocument = new Document(
  `---
responses:
  '200':
    description: ''`,
  Parsers.Yaml,
  "/my-file",
);

const spectral = new Spectral({});

var ruleset = {
  extends: [
    'spectral:oas'
  ]
}

spectral.setRuleset(ruleset);
spectral.run(myDocument).then(console.log);
```

However, this fails due to:

```
        throw new Error('Provided ruleset is not an object');
        ^

Error: Provided ruleset is not an object
    at assertValidRuleset (/home/jamie/workspaces/cddo/api-standards-linting/govuk-public-api-rules/node_modules/@stoplight/spectral-core/dist/ruleset/validation.js:94:15)
    at new Ruleset (/home/jamie/workspaces/cddo/api-standards-linting/govuk-public-api-rules/node_modules/@stoplight/spectral-core/dist/ruleset/ruleset.js:32:49)
    at /home/jamie/workspaces/cddo/api-standards-linting/govuk-public-api-rules/node_modules/@stoplight/spectral-core/dist/ruleset/ruleset.js:74:37
    at Array.reduce (<anonymous>)
    at new Ruleset (/home/jamie/workspaces/cddo/api-standards-linting/govuk-public-api-rules/node_modules/@stoplight/spectral-core/dist/ruleset/ruleset.js:61:99)
    at Spectral.setRuleset (/home/jamie/workspaces/cddo/api-standards-linting/govuk-public-api-rules/node_modules/@stoplight/spectral-core/dist/spectral.js:72:73)
    at Object.<anonymous> (/home/jamie/workspaces/cddo/api-standards-linting/govuk-public-api-rules/example.js:25:10)
```

I can't see it mentioned in the docs how to use `extends` with the JS API.

Unfortunately the solution noted in https://github.com/stoplightio/spectral/issues/1151 doesn't work any more as there's no `assets.json` available, nor does `registerStaticAssets`.

**Versions**

```json
    "@stoplight/spectral-cli": "^6.1.0",
        "@stoplight/json": "3.17.0",
        "@stoplight/path": "1.3.2",
        "@stoplight/spectral-core": "^1.5.1",
        "@stoplight/spectral-parsers": "^1.0.1",
        "@stoplight/spectral-ref-resolver": "1.0.1",
        "@stoplight/spectral-ruleset-bundler": "^1.0.0",
        "@stoplight/spectral-ruleset-migrator": "^1.5.0",
        "@stoplight/spectral-rulesets": ">=1",
        "@stoplight/spectral-runtime": "^1.1.0",
        "@stoplight/types": "12.3.0",

```
