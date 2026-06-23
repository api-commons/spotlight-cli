---
number: 2593
title: "Path property of error remains empty even if custom function provides some value"
state: "open"
labels: ["enhancement", "triaged"]
author: "johannesmarx"
created: "2024-03-04T10:24:55Z"
updated: "2024-05-31T09:24:21Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2593"
---

# Path property of error remains empty even if custom function provides some value

**Describe the bug**
The `path` property of the error is not handled correctly when writing custom functions. In case the function also provides some value for the `path` besides the `message`, it remains empty after calling `new Spectral(resolver).run(openApi)`.

**To Reproduce**

1. Given a custom most simplified function:
```
export default (targetValue) => {
  return [
   {
      message: "Some issue with servers",
      path: ['servers'],
   },
  ];
};
```

2. The linting result will be:
```
[
  {
    code: 'my-check',
    message: 'Some issue with servers',
    path: [],
    ...
  }
]
```

**Expected behavior**
The expected result would also contain the path provided by the custom function as follows:
```
[
  {
    code: 'my-check',
    message: 'Some issue with servers',
    path: ['servers'],
    ...
  }

```

**Environment (remove any that are not applicable):**
 - Library version: 
   - stoplight/spectral-cli: **6.11.0**
   - stoplight/spectral-ruleset-bundler: **1.5.2**
