---
number: 1432
title: "Support json-schema under https"
state: "closed"
labels: ["t/bug", "p/high"]
author: "ioggstream"
created: "2020-12-30T15:53:24Z"
updated: "2021-11-12T11:34:19Z"
comments: 12
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1432"
---

# Support json-schema under https

**I expect**

Schemas to be downloaded under HTTPS

**To Reproduce**

1. `grep -r 'https://json-schema.org' .`

**Expected behavior**

Occurrencies of json-schema.org with HTTPS

**Instead**

- Empty result.



**Environment (remove any that are not applicable):**
 - Library version: 5.7.2

**Additional context**

webpackaging spectral, I get an error when downloading the insecure ref.

It would be great to have an HTTPS reference (probably related to https://github.com/ajv-validator/ajv/tree/master/lib/refs)

cc: @emiliosp
