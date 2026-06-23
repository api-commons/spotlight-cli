---
number: 2534
title: "comparing given value with other value within jsonpath"
state: "closed"
labels: []
author: "doh10002"
created: "2023-09-15T13:44:25Z"
updated: "2023-09-15T13:55:15Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2534"
---

# comparing given value with other value within jsonpath

**Describe the bug**
it is hard to say its a bug, but i am trying to create a custom function that can compare the given value with another value is jsonpath. for example '$.info.version' of 'v2' has to match the first part of the paths.
instead me putting version number in rule, i want the rule to dynamically select the version to compare it with all the paths
i selected all the paths using give, but how can i grab '$.info.version' value in custom function?

{
"info": {
    "version": "v2",
    }
  },
"paths": {
    "/v2/testRequest": {}
}
}

customFunction.ts
```
export default createRulesetFunction(
  {
    input: null,
    options: {
      type: "object",
      additionalProperties: true,
      properties: {
        value: true,
          versionPath: true
      },
      required: ["value", "versionPath"],
    },
  },
  function versionControl(targetVal: any , options: any) :IFunctionResult[] {
      const { value } = options;
      const { versionPath } = options;
      // const test = new RegExp("/v[1-9][0-9]*/")

    const versionPattern = /(v[1-9][0-9]*)/g
    const exist = versionPattern.exec(targetVal)
    // const many = exist.length


     if (targetVal !== value) {
      return [
        {
          message: `Must include ${versionPath}.`,
        },
      ];
    }
    return [];
  },
);

```

**Expected behavior**
need spectral to check the versions with first part of given
