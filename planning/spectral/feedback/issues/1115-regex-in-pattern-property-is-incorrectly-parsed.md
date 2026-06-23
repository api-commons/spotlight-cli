---
number: 1115
title: "Regex in pattern property is incorrectly parsed"
state: "closed"
labels: ["t/bug"]
author: "nicexe"
created: "2020-04-22T13:38:18Z"
updated: "2020-05-11T08:08:00Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1115"
---

# Regex in pattern property is incorrectly parsed

**Describe the bug**
Regex patterns aren't correctly parsed and as a result, valid examples for properties get flagged as non-matching.

**To Reproduce**

1. Here is a schema snippet of an OpenAPI 3 specification:
```yaml
date-of-birth:
  type: string
  format: date
  example: '1991-04-12'
  pattern: '/^(19|20)[0-9]{2}-(0[1-9]|1[0-2])-(0[0-9]|[1-2][0-9]|3[0-1])$/'
```
2. Stoplight Studio flags this as an issue saying:
```
`example` property pattern should match pattern `/^(19|20)[0-9]{2}-(0[1-9]|1[0-2])-(0[0-9]|[1-2][0-9]|3[0-1])$/`
```

**Expected behavior**
The pattern follows the OpenAPI 3 spec which should be in this form ([as per spec](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#schema-object)): [ECMA 262 regular expression](https://www.ecma-international.org/ecma-262/5.1/#sec-7.8.5) and therefore it shouldn't be flagged as an issue.

**Environment (remove any that are not applicable):**
 - Library version: 5.0.0
 - OS: Windows 10
 - Browser: Stoplight Studio 1.11.0
