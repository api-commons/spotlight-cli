---
number: 2489
title: "Nested aliases lead to performance issues"
state: "closed"
labels: []
author: "ductaily"
created: "2023-06-19T13:54:02Z"
updated: "2023-06-27T12:42:00Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2489"
---

# Nested aliases lead to performance issues

**Describe the bug**

Define a ruleset with nested aliases and use the alias that contains all nested aliases in the `given` of the rule.
Run the ruleset on a large OpenAPI document.

The execution of the rules on the document does not seem to terminate.

**To Reproduce**

Example to run:
<https://github.com/ductaily/spectral-alias-performance-example>
Place into the `src` directory a `valid.json` with the content [here](https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('ECFoundationOrganization')/$value?type=json).

```js
aliases: {
    odataV4: ['$.[?(@property === "x-sap-api-type" && @ === "ODATAV4")]'],
    odataV2: ['$.[?(@property === "x-sap-api-type" && @ === "ODATA")]'],
    odataV2All: ["#odataV2^.paths.*.*.responses[?(@property.match(/^[12]/))]"],
    odataV4All: ["#odataV4^.paths.*.*.responses[?(@property.match(/^[12]/))]"],
    odataAll: [
      "#odataV4All.content.application/json.schema.properties.value.items",
      "#odataV4All.schema.properties.value.items",
      "#odataV2All.content.application/json.schema.properties.d.properties.results.items",
      "#odataV2All.schema.properties.d.properties.results.items",
      '#odataV4All.content.application/json[?(@.type == "object" && @.properties && !@.properties.value)]',
      "#odataV4All[?(@.properties && !@.properties.value)]",
      '#odataV2All.content.application/json.schema.properties[?(@.type === "object" && @.properties && !@.properties.results)]',
      '#odataV2All.schema.properties[?(@.type === "object" && @.properties && !@.properties.results)]',
    ],
    restPrefix: [
      '$[?(@root["x-sap-api-type"] === undefined && @property === "paths")]',
      '$[?(@property === "x-sap-api-type" && @ === "REST")]',
    ],
    restAll: [
      '#restPrefix^.paths.*.*.responses[?(@property.match(/^[12]/))].content.application/json[?(@.type == "object")]',
      '#restPrefix^.paths.*.*.responses[?(@property.match(/^[12]/))][?(@.type == "object")]',
    ],
  }
  //...
  rules: {
    "odata-place-holder": {
      message: "Field `x-custom-extension` missing.",
      severity: DiagnosticSeverity.Error,
      given: ["#restAll", "#odataAll"],
      then: {
        field: "x-custom-extension",
        function: truthy
      }
    }
  }
```

**Expected behavior**
The ruleset execution should terminate in a similar time as if the JSON paths were flat.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 6.8.0

**Additional context**
It seems that resolving the aliases is problematic. We ran the same paths flattened without nesting and spectral terminates after approx. 2 minutes.
