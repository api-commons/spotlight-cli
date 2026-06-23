---
number: 2240
title: "Issue importing oas ruleset from @stoplight/spectral-rulesets"
state: "closed"
labels: ["t/bug", "released"]
author: "kingcanova"
created: "2022-08-12T12:41:09Z"
updated: "2022-08-15T10:07:04Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2240"
---

# Issue importing oas ruleset from @stoplight/spectral-rulesets

**Describe the bug**
When trying to use the oas ruleset exported by the @stoplight/spectral-rulesets package in a backstage.io custom plugin an error occurs that does not let me render my frontend page or use the ruleset.

The error that is displayed on the webpage is: 
`ERROR 501: Lazy loaded chunk failed to load, try to reload the page: __importDefault is not defined`

Here is how the packages are being imported:
```
import { Spectral, Document } from "@stoplight/spectral-core";
import { oas } from "@stoplight/spectral-rulesets";
```
Ive also tried importing it using "require" but get the same error when trying that way.

Here is how the packages are being used:
```    
const spectral = new Spectral();
console.log(oas);
const myRuleset = {
    extends: [oas],
    rules: {
        "no-empty-description": {
            given: "$..description",
            message: "Description must not be empty",
            then: {
                function: truthy,
            },
        },
    },
}
useEffect(() => {
    spectral.setRuleset(myRuleset);
    console.log(spectral.ruleset);
    spectral.run(myDocument).then(setLintIssues);
}, []);
```

**Environment:**
Node: v1.15.1
Typescript: 4.6.4
Spectral-core: 1.13.0
Spectral-functions: 1.7.0
Spectral-parsers: 1.0.1
Spectral-ruleset-bundler: 1.3.1
Spectral-rulesets: 1.11.1
OS: MacOS Monterey
Browser: Chrome 103
