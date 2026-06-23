---
number: 2522
title: "BigInt/int64  number format not working"
state: "open"
labels: ["t/bug", "p/medium", "triaged"]
author: "guilhermecgs"
created: "2023-08-07T15:40:21Z"
updated: "2024-05-31T12:34:29Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2522"
---

# BigInt/int64  number format not working

**Describe the bug**
BigInt not working. In the example below, maximum is converted to number format, losing its precision.

operationTypeCode:
  type: integer
  format: int64
  minimum: -2147483648
  maximum:  9223372036854775800
  example: 42


**Expected behavior**
When receiving this parameter in the javascript, the type should be BigInt

module.exports = (prop) => {
    return [{ message: `Type ${typeof prop.maximum}`}];
}
Type = BigInt

**Additional context**
Already tested with   maximum:  9223372036854775800n (n at final). It does not work either
