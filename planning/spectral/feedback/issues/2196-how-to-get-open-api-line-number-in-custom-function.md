---
number: 2196
title: "How to get open api line number in custom function"
state: "closed"
labels: []
author: "JGPrakash"
created: "2022-06-30T13:13:49Z"
updated: "2022-06-30T14:58:55Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2196"
---

# How to get open api line number in custom function

If I run the spectral lint command with the core function, it returns the warning message with which line number it has a problem.
Now I want to implement the same in a custom function.

for example
openapi:
~~~~~
info:
  description: This is a simple API
  version: "1.0.0"
  title: Simple Inventory API 

Ruleset:
~~~~~
then: {
      function: casing,
      functionOptions: {
        type: camel
      },
    },
Output:
~~~~~
 9:10  warning  casing-ruleset  must be camel case  info.title

✖ 1 problem (0 errors, 1 warning, 0 infos, 0 hints)

The title is present in line number 9 in the open API.
In the same way, I want to display the message in a custom function.
How to display the open API line number in custom functions?
