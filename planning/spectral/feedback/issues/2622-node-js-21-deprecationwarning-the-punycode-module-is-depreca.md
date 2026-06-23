---
number: 2622
title: "Node.js 21+: DeprecationWarning: The `punycode` module is deprecated from `@stoplight/spectral-runtime`"
state: "open"
labels: ["triaged", "chore"]
author: "silverwind"
created: "2024-05-14T16:01:23Z"
updated: "2025-01-29T15:58:40Z"
comments: 8
reactions_total: 7
thumbs_up: 7
url: "https://github.com/stoplightio/spectral/issues/2622"
---

# Node.js 21+: DeprecationWarning: The `punycode` module is deprecated from `@stoplight/spectral-runtime`

`@stoplight/spectral-runtime` and `@stoplight/json-ref-readers` indirectly depend on `node-fetch@2` and `tr46@0.0.3` which triggers a runtime deprecation warning in Node.js 21 and above. As per https://github.com/node-fetch/node-fetch/pull/1793#issuecomment-1839050150, the likely only option is to upgrade to `node-fetch@3`:

Warning:
```
(node:77383) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
```

Occurence:
```
$ rg require.+punycode node_modules/tr46/index.js
3:var punycode = require("punycode");
```

Dependency tree:
```
└─┬ @stoplight/spectral-cli@6.11.1
  └─┬ @stoplight/spectral-runtime@1.1.2
    └─┬ node-fetch@2.7.0
      └─┬ whatwg-url@5.0.0
        └── tr46@0.0.3
```
