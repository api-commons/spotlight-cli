---
number: 893
title: "example-value-or-externalValue: Applies to Schema examples"
state: "closed"
labels: ["t/bug"]
author: "m-mohr"
created: "2020-01-07T11:21:36Z"
updated: "2020-01-07T11:23:48Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/893"
---

# example-value-or-externalValue: Applies to Schema examples

**Describe the bug**

The rule example-value-or-externalValue applies to examples of schemas, but the field `example` in the Schema Object is defined as type `Any` in OAS3, so doesn't need value or externalValue.

**Expected behavior**

Don't complain about missing value or externalValue in Schema Objects.

**Environment (remove any that are not applicable):**
 - Library version: 5.0.0
 - OS: Windows 10
