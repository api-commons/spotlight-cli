---
number: 2517
title: "Pattern function does not work un-quoted numbers"
state: "closed"
labels: []
author: "CalemRoelofsSB"
created: "2023-07-26T07:39:42Z"
updated: "2023-07-27T06:19:41Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2517"
---

# Pattern function does not work un-quoted numbers

**Describe the bug**
When using the `pattern` function in combination with an unquoted number value, the function does not create an error even if the value breaks the rule specified in the `match` field.

**To Reproduce**
Given this API definition snippet:
```yaml
...
components:
  schemas:
    userId:
      type: string
      example: 00001
```
And this custom rule using the `pattern` function:
```yaml
userId-example-must-start-with-37:
  message: "{{path}} does not start with '37'!"
  severity: error
  given: $.components.schemas.userId.example
  then:
    function: pattern
    functionOptions:
      match: "^37"
```

If the value of `example` is wrapped in quotes i.e. `example: "00001"` then the rule will execute successfully and outputs an error.
However, in the case where the value is not quoted like in the above snippet, the rule does not appear to run. 
If I use an unquoted string i.e. `example: Hello World` then the rule also executes successfully and outputs an error.


**Expected behavior**
Using the `pattern` function with a field that has a number value will execute the pattern matching function and return an error if the value of the field breaks the rule.

**Screenshots**
N/A

**Environment (remove any that are not applicable):**
 - Library version: @stoplight/spectral-functions: "^1.7.2"
 - OS: MacOS Ventura 13.4
 - Runtime: Node.js 18.17.0

**Additional context**
N/A
