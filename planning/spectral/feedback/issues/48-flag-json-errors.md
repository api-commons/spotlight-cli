---
number: 48
title: "Flag JSON errors"
state: "closed"
labels: ["enhancement", "validation"]
author: "rossmcdonald"
created: "2018-10-30T20:47:05Z"
updated: "2018-12-11T06:04:15Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/48"
---

# Flag JSON errors

Verify contents of the document being parsed are valid JSON (as defined by the [RFC](http://www.ietf.org/rfc/rfc4627.txt)), and flag anything that doesn't conform.

For example, if a JSON string contains un-escaped control characters, flag the string.
