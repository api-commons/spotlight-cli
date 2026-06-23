---
number: 1579
title: "Execute rules even if the given node is missing in the linted file"
state: "closed"
labels: []
author: "glenroy37"
created: "2021-04-14T12:21:08Z"
updated: "2021-04-16T06:37:26Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1579"
---

# Execute rules even if the given node is missing in the linted file

**User story.**
As a developer, I can define rules like e.g. "truthy" as mandatory, so that it is a linting error if the given node is missing.

**Problem**
Right now rules are only applied if the node is present in the linted file.
When I have a rule like:
```
service-title-present:
    description: "Service title must be present"
    given: $.service.title
    severity: error
    then:
      function: truthy
```
I want an linting error if service.title is not present in the file.

**Possible solutions**
I already tried out to make every rule mandatory like this in the runner.ts-file:
```
const result = JSONPath({
        path: given,
        json: target,
        resultType: 'all',
        callback: (result => {
          lintNode(
            context,
            {
              // @ts-expect-error
              // this is needed due to broken typings in jsonpath-plus (JSONPathClass.toPathArray is correct from typings point of view, but JSONPathClass is not exported, so it fails at runtime)
              path: JSONPath.toPathArray(result.path),
              value: result.value,
            },
            rule,
            exceptRuleByLocations,
          );
        }) as JSONPathCallback,
      });
      //If there's no node at the given path still execute the rule with value undefined
      //That's important if the rule checks for undefined like the 'truthy' and 'undefined' rules
      if (result.length === 0) {
        lintNode(
          context,
          {
            // @ts-expect-error
            // this is needed due to broken typings in jsonpath-plus (JSONPathClass.toPathArray is correct from typings point of view, but JSONPathClass is not exported, so it fails at runtime)
            path: JSONPath.toPathArray(given),
            value: undefined,
          },
          rule,
          exceptRuleByLocations,
        );
      }
```

That works for my use case, but leads to a lot of test failures with openapi-files. So it might be better to introduce a new flag on the rule:
```
service-title-present:
    description: "Service title must be present"
    given: $.service.title
    severity: error
    mandatory: true
    then:
      function: truthy
```
The default of this new mandatory flag should be false to not break any existing linting configurations.
