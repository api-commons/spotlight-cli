---
number: 1550
title: "--skip-rule doesn't work with parser warnings"
state: "closed"
labels: ["t/bug"]
author: "Amachua"
created: "2021-03-15T09:37:50Z"
updated: "2021-04-12T16:48:53Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1550"
---

# --skip-rule doesn't work with parser warnings

**Describe the bug**

Spectral version used: "5.8.0"

In my perspecitive, there is possibly two distinct issues here:
- the tool forward issues `parser` when a JSON file includes tabulation (which seems to be allowed with the file I've provided;
- the `skip-rule` parameter doesn't apply to the `parser` warning.

**To Reproduce**

Preferred solution: 

Given the file [resources.openapi.txt](https://github.com/stoplightio/spectral/files/6140230/resources.openapi.txt)

When I run the command line

> yarn spectral lint .\resources.openapi.txt

Then only the following issue is prompted:

```text
 18:13  warning  operation-operationId  Operation should have an `operationId`.  paths./dummy/v1/resources.get

X 1 problem (0 errors, 1 warning, 0 infos, 0 hints)

Done in 2.50s.
```

Other solution: 

Given the file [resources.openapi.txt](https://github.com/stoplightio/spectral/files/6140230/resources.openapi.txt)

When I run the command line

> yarn spectral lint .\publish\resources.openapi.txt --skip-rule parser

Then only the following issue is prompted:

```text
 18:13  warning  operation-operationId  Operation should have an `operationId`.  paths./dummy/v1/resources.get

X 1 problem (0 errors, 1 warning, 0 infos, 0 hints)

Done in 2.50s.
```

FWIW, the current output I receive is:

```text
  2:1   warning  parser                 Using tabs can lead to unpredictable results
  3:1   warning  parser                 Using tabs can lead to unpredictable results
  4:1   warning  parser                 Using tabs can lead to unpredictable results
  4:2   warning  parser                 Using tabs can lead to unpredictable results
  5:1   warning  parser                 Using tabs can lead to unpredictable results
  5:2   warning  parser                 Using tabs can lead to unpredictable results
  5:3   warning  parser                 Using tabs can lead to unpredictable results
  6:1   warning  parser                 Using tabs can lead to unpredictable results
  6:2   warning  parser                 Using tabs can lead to unpredictable results
  7:1   warning  parser                 Using tabs can lead to unpredictable results
  8:1   warning  parser                 Using tabs can lead to unpredictable results
  9:1   warning  parser                 Using tabs can lead to unpredictable results
  9:2   warning  parser                 Using tabs can lead to unpredictable results
  10:1  warning  parser                 Using tabs can lead to unpredictable results
  10:2  warning  parser                 Using tabs can lead to unpredictable results
  11:1  warning  parser                 Using tabs can lead to unpredictable results
  11:2  warning  parser                 Using tabs can lead to unpredictable results
  12:1  warning  parser                 Using tabs can lead to unpredictable results
  12:2  warning  parser                 Using tabs can lead to unpredictable results
  12:3  warning  parser                 Using tabs can lead to unpredictable results
  13:1  warning  parser                 Using tabs can lead to unpredictable results
  13:2  warning  parser                 Using tabs can lead to unpredictable results
  14:1  warning  parser                 Using tabs can lead to unpredictable results
  14:2  warning  parser                 Using tabs can lead to unpredictable results
  15:1  warning  parser                 Using tabs can lead to unpredictable results
  16:1  warning  parser                 Using tabs can lead to unpredictable results
  17:1  warning  parser                 Using tabs can lead to unpredictable results
  17:2  warning  parser                 Using tabs can lead to unpredictable results
  18:1  warning  parser                 Using tabs can lead to unpredictable results
  18:2  warning  parser                 Using tabs can lead to unpredictable results
  18:3  warning  parser                 Using tabs can lead to unpredictable results
 18:10  warning  operation-operationId  Operation should have an `operationId`.       paths./dummy/v1/resources.get
  19:1  warning  parser                 Using tabs can lead to unpredictable results
  19:2  warning  parser                 Using tabs can lead to unpredictable results
  19:3  warning  parser                 Using tabs can lead to unpredictable results
  19:4  warning  parser                 Using tabs can lead to unpredictable results
  20:1  warning  parser                 Using tabs can lead to unpredictable results
  20:2  warning  parser                 Using tabs can lead to unpredictable results
  20:3  warning  parser                 Using tabs can lead to unpredictable results
  20:4  warning  parser                 Using tabs can lead to unpredictable results
  21:1  warning  parser                 Using tabs can lead to unpredictable results
  21:2  warning  parser                 Using tabs can lead to unpredictable results
  21:3  warning  parser                 Using tabs can lead to unpredictable results
  21:4  warning  parser                 Using tabs can lead to unpredictable results
  22:1  warning  parser                 Using tabs can lead to unpredictable results
  22:2  warning  parser                 Using tabs can lead to unpredictable results
  22:3  warning  parser                 Using tabs can lead to unpredictable results
  22:4  warning  parser                 Using tabs can lead to unpredictable results
  22:5  warning  parser                 Using tabs can lead to unpredictable results
  23:1  warning  parser                 Using tabs can lead to unpredictable results
  23:2  warning  parser                 Using tabs can lead to unpredictable results
  23:3  warning  parser                 Using tabs can lead to unpredictable results
  23:4  warning  parser                 Using tabs can lead to unpredictable results
  24:1  warning  parser                 Using tabs can lead to unpredictable results
  24:2  warning  parser                 Using tabs can lead to unpredictable results
  24:3  warning  parser                 Using tabs can lead to unpredictable results
  24:4  warning  parser                 Using tabs can lead to unpredictable results
  25:1  warning  parser                 Using tabs can lead to unpredictable results
  25:2  warning  parser                 Using tabs can lead to unpredictable results
  25:3  warning  parser                 Using tabs can lead to unpredictable results
  25:4  warning  parser                 Using tabs can lead to unpredictable results
  25:5  warning  parser                 Using tabs can lead to unpredictable results
  26:1  warning  parser                 Using tabs can lead to unpredictable results
  26:2  warning  parser                 Using tabs can lead to unpredictable results
  26:3  warning  parser                 Using tabs can lead to unpredictable results
  26:4  warning  parser                 Using tabs can lead to unpredictable results
  26:5  warning  parser                 Using tabs can lead to unpredictable results
  26:6  warning  parser                 Using tabs can lead to unpredictable results
  27:1  warning  parser                 Using tabs can lead to unpredictable results
  27:2  warning  parser                 Using tabs can lead to unpredictable results
  27:3  warning  parser                 Using tabs can lead to unpredictable results
  27:4  warning  parser                 Using tabs can lead to unpredictable results
  27:5  warning  parser                 Using tabs can lead to unpredictable results
  28:1  warning  parser                 Using tabs can lead to unpredictable results
  28:2  warning  parser                 Using tabs can lead to unpredictable results
  28:3  warning  parser                 Using tabs can lead to unpredictable results
  28:4  warning  parser                 Using tabs can lead to unpredictable results
  28:5  warning  parser                 Using tabs can lead to unpredictable results
  29:1  warning  parser                 Using tabs can lead to unpredictable results
  29:2  warning  parser                 Using tabs can lead to unpredictable results
  29:3  warning  parser                 Using tabs can lead to unpredictable results
  29:4  warning  parser                 Using tabs can lead to unpredictable results
  29:5  warning  parser                 Using tabs can lead to unpredictable results
  29:6  warning  parser                 Using tabs can lead to unpredictable results
  30:1  warning  parser                 Using tabs can lead to unpredictable results
  30:2  warning  parser                 Using tabs can lead to unpredictable results
  30:3  warning  parser                 Using tabs can lead to unpredictable results
  30:4  warning  parser                 Using tabs can lead to unpredictable results
  30:5  warning  parser                 Using tabs can lead to unpredictable results
  31:1  warning  parser                 Using tabs can lead to unpredictable results
  31:2  warning  parser                 Using tabs can lead to unpredictable results
  31:3  warning  parser                 Using tabs can lead to unpredictable results
  31:4  warning  parser                 Using tabs can lead to unpredictable results
  32:1  warning  parser                 Using tabs can lead to unpredictable results
  32:2  warning  parser                 Using tabs can lead to unpredictable results
  32:3  warning  parser                 Using tabs can lead to unpredictable results
  33:1  warning  parser                 Using tabs can lead to unpredictable results
  33:2  warning  parser                 Using tabs can lead to unpredictable results
  34:1  warning  parser                 Using tabs can lead to unpredictable results
  35:1  warning  parser                 Using tabs can lead to unpredictable results
  36:1  warning  parser                 Using tabs can lead to unpredictable results
  36:2  warning  parser                 Using tabs can lead to unpredictable results
  37:1  warning  parser                 Using tabs can lead to unpredictable results
  37:2  warning  parser                 Using tabs can lead to unpredictable results
  37:3  warning  parser                 Using tabs can lead to unpredictable results
  38:1  warning  parser                 Using tabs can lead to unpredictable results
  38:2  warning  parser                 Using tabs can lead to unpredictable results
  39:1  warning  parser                 Using tabs can lead to unpredictable results

X 108 problems (0 errors, 108 warnings, 0 infos, 0 hints)

Done in 3.79s.
```
