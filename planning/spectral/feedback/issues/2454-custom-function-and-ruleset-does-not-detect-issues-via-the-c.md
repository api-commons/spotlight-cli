---
number: 2454
title: "Custom function and ruleset does not detect issues via the CLI"
state: "open"
labels: ["question", "triaged"]
author: "gabsong"
created: "2023-04-12T20:03:27Z"
updated: "2024-05-31T12:34:24Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2454"
---

# Custom function and ruleset does not detect issues via the CLI

**Describe the bug**
I created a custom function, `onlyValidNextToRef` to check if there were any $ref siblings in the openapi spec that were not either summary or description. I think I saw that OAS3.1 allows those two.

**Function**
```javascript
module.exports = (targetVal) => {
  const ref = targetVal.$ref;

  if (!ref) {
    return;
  }

  const allowedKeys = ["$ref", "description", "summary"];
  const invalidKeys = Object.keys(targetVal).filter((key) => !allowedKeys.includes(key));

  if (invalidKeys.length > 0) {
    return [{ message: 'Only "summary" and "description" are allowed as siblings to $ref.' }];
  }
};
```

**Unit test**
```javascript
const checkRefSiblings = require("./onlyValidNextToRef");

const targets = [
  {
    $ref: "#/components/schemas/InputMaybe_Scalars-at-Boolean_",
    description: "Flag indicating whether or not this is a test account. Defaults to false if not specified.",
  },
  {
    $ref: "#/components/schemas/InputMaybe_Scalars-at-String_",
    description:
      "Indicates that the seller is part of an experiment.",
    example: "Feb2023",
  },
  {
    $ref: "#/components/schemas/Maybe_Scalars-at-Boolean_",
  },
  {
    $ref: "#/components/schemas/Maybe_Scalars-at-String_",
    deprecated: true,
  },
];

const errorMessage = JSON.stringify([{ message: 'Only "summary" and "description" are allowed as siblings to $ref.' }]);

console.log(checkRefSiblings(targets[0]) === undefined);
console.log(JSON.stringify(checkRefSiblings(targets[1])) === errorMessage);
console.log(checkRefSiblings(targets[2]) === undefined);
console.log(JSON.stringify(checkRefSiblings(targets[3])) === errorMessage);
```

Confirmed the function works as expected.

I added the function to the following rule file.
```yaml
extends: "spectral:oas"

functions:
  - onlyValidNextToRef

rules:
  no-$ref-siblings: off
  only-allowed-$ref-siblings:
    description: 'Only "summary" and "description" are allowed as siblings to $ref.'
    severity: error
    given: "$..[?(@property === '$ref')].^"
    then:
      function: onlyValidNextToRef
```

I ran the rule via the CLI, but the error cases that I know are there were not detected.

**To Reproduce**

Use the files I posted above. The result was an output of `No results with a severity of 'error' found!`.

**Expected behavior**
I expected error output, such as

```
5557:18    error  only-allowed-$ref-siblings         Only "summary" and "description" are allowed as siblings to $ref.              {some path}
```

**Environment (remove any that are not applicable):**
 - Library version: @stoplight/spectral-cli": "^6.6.0"
 - OS: MacOS Ventura 13.2.1
