---
number: 1826
title: "TypeError: rootPath is not iterable"
state: "closed"
labels: []
author: "avinashpise"
created: "2021-09-09T10:44:02Z"
updated: "2021-09-09T12:57:18Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1826"
---

# TypeError: rootPath is not iterable

**Describe the bug**
Custom function/Custom rules fails to execute using javascript. Implemented the example mentioned in the [document](https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTkw-custom-functions#returning-multiple-results)

**To Reproduce**

1. Given a custom rule mentioned in document 
 ```
functions: [uniqueTagNames]
rules:
  unique-tag-names:
    message: "Tags should have distinct names: {{error}}"
    given: "$.tags"
    then:
      function: "uniqueTagNames"
```
2. Create `uniqueTagNames.js` file under functions directory as mentioned in above document
```
const NAME_PROPERTY = "name";

module.exports = (targetVal, _opts, paths) => {
  if (!Array.isArray(targetVal)) {
    return;
  }

  const seen = [];
  const results = [];

  const rootPath = paths.target !== void 0 ? paths.target : paths.given;

  for (let i = 0; i < targetVal.length; i++) {
    if (targetVal[i] === null || typeof targetVal[i] !== "object") {
      continue;
    }

    const tagName = targetVal[i][NAME_PROPERTY];

    if (tagName === void 0) {
      continue;
    }

    if (seen.includes(tagName)) {
      results.push({
        message: `Duplicate tag name '${tagName}'`,
        path: [...rootPath, i, NAME_PROPERTY],
      });
    } else {
      seen.push(tagName);
    }
  }

  return results;
};
``` 
3. Write js code to conver yaml ruleset using `@stoplight/spectral-ruleset-migrator`. Write this code in to `migrator.js`
```
const { migrateRuleset } = require("@stoplight/spectral-ruleset-migrator");

migrateRuleset(path.join(__dirname, "rule-unique-tag.yaml"), {
  fs,
  format: "commonjs", // esm available too, but not recommended for now
}).then(fs.promises.writeFile.bind(fs.promises, path.join(__dirname, "custome-rule.js")));
```
4. run node command `node migrator.js`.
5. Use `custome-rule.js` file in `index.js` to execute custome function.
```
const { Spectral } = require("@stoplight/spectral-core");
const ruleset = require("./custome-rule");
const myOpenApiDocument = `
swagger: "2.0"
tags:
- name: "pet"
- name: "pet"
`;

const spectral = new Spectral();
spectral.setRuleset(ruleset);
spectral.run(myOpenApiDocument).then(results => {
  console.log("here are the results", results);
});

```
5. Run `index.js` using node. for eg `node index.js`

6.  See error
```
PS C:\Projects\custome-rule-example> node index.js
(node:14620) UnhandledPromiseRejectionWarning: TypeError: rootPath is not iterable
    at Object.module.exports [as function] (c:\Projects\custome-rule-example\functions\uniqueTagNames.js:27:19)
    at Object.lintNode (C:\Projects\custome-rule-example\node_modules\@stoplight\spectral-core\dist\runner\lintNode.js:21:48)
    at cb (C:\Projects\custome-rule-example\node_modules\@stoplight\spectral-core\dist\runner\runner.js:44:32)
    at mapped.<computed> (C:\Projects\custome-rule-example\node_modules\@stoplight\spectral-core\dist\runner\runner.js:88:21)
    at Scope.safeCall (C:\Projects\custome-rule-example\node_modules\nimma\dist\legacy\cjs\runtime\proxy-callbacks.js:7:13)
    at Object.apply (C:\Projects\custome-rule-example\node_modules\nimma\dist\legacy\cjs\runtime\proxy-callbacks.js:25:20)
    at Scope.emit (C:\Projects\custome-rule-example\node_modules\nimma\dist\legacy\cjs\runtime\scope.js:148:19)
    at Object.$.tags (eval at query (C:\Projects\custome-rule-example\node_modules\nimma\dist\legacy\cjs\core\index.js:73:204), <anonymous>:24:29)
    at eval (eval at query (C:\Projects\custome-rule-example\node_modules\nimma\dist\legacy\cjs\core\index.js:73:204), <anonymous>:33:20)
    at Nimma.query (C:\Projects\custome-rule-example\node_modules\nimma\dist\legacy\cjs\core\index.js:73:401)
```

**Expected behavior**
It should return error saying duplicate tag name `pet` 

**Environment (remove any that are not applicable):**
 - Library version:  6.0.0
 - OS:  Windows 10
