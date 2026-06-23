---
number: 1783
title: "length gets imported as length$0"
state: "closed"
labels: ["t/bug", "released", "triaged", "ruleset-migrator"]
author: "P0lip"
created: "2021-08-20T14:54:12Z"
updated: "2021-08-24T12:17:18Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1783"
---

# length gets imported as length$0

**Describe the bug**

What the title says.

**To Reproduce**

1. Given the following YAML ruleset
```yaml
rules:
  rule:
    given: $
    then:
      function: truthy
  valid-length:
    given: $
    then:
      function: length
```
2. Run migration
3. Get the following output

```
const {
  truthy: truthy,
  length$0: length$0,
} = require("@stoplight/spectral-functions");
module.exports = {
  rules: {
    rule: {
      given: "$",
      then: {
        function: truthy,
      },
    },
    "valid-length": {
      given: "$",
      then: {
        function: length$0,
      },
    },
  },
};
```

**Expected behavior**

```js
const {
  truthy: truthy,
  length: length$0,
} = require("@stoplight/spectral-functions");
module.exports = {
  rules: {
    rule: {
      given: "$",
      then: {
        function: truthy,
      },
    },
    "valid-length": {
      given: "$",
      then: {
        function: length$0,
      },
    },
  },
};
```

Related to https://github.com/stoplightio/platform-internal/issues/7541
