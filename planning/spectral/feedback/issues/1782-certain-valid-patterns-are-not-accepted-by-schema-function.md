---
number: 1782
title: "Certain valid patterns are not accepted by schema function "
state: "closed"
labels: ["t/bug", "released", "p/high", "triaged"]
author: "P0lip"
created: "2021-08-20T14:33:27Z"
updated: "2021-09-01T12:11:40Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1782"
---

# Certain valid patterns are not accepted by schema function 

**Describe the bug**

In some cases, Ajv bails upon a valid pattern.
It's presumably an issue with Ajv, or, with the way we use Ajv.

**To Reproduce**

1. Run the following snippet
```js
const Ajv = require('ajv');
const ajv = new Ajv();
const assert = require('assert');

const schema = {
  type: 'string',
  pattern: '^[A-Za-z0-9\\-\\_]',
};

assert.ok(ajv.validate(schema, 'test-case-1'));
```
2. Exits with non-zero code

**Expected behavior**

Exits with a zero-code


Related to https://github.com/stoplightio/platform-internal/issues/7541
