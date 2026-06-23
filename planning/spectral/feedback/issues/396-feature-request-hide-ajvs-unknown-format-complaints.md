---
number: 396
title: "feature request: Hide AJVs \"unknown format\" complaints"
state: "closed"
labels: ["t/bug", "enhancement", "sev/minor", "p/low"]
author: "nulltoken"
created: "2019-07-20T19:37:04Z"
updated: "2019-08-29T14:42:14Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/396"
---

# feature request: Hide AJVs "unknown format" complaints

**Describe the bug**

According to the spec, `format` is is an open string-valued property, and can have any value.
Spectral generates (pollutes?) stdout with warnings about "unknown format"s.

**To Reproduce**

**repro/output.openapi.yaml**
```
openapi: 3.0.0
servers:
  - url: "https://ex-ample.com"
x-format-version: "1.0"
info:
  title: Four
  description: Issue repro 4
  contact:
    email: e@e.com
  version: 0.0.0
paths: {}
components:
  schemas:
    AModel:
      description: Yet another self descriptive explanation
      type: object
      properties:
        a_country:
          description: Guess what? A country.
          type: string
          format: "ISO-3166-1 alpha-2"
          example: de
```

**Run**
```
$ yarn spectral lint repro/output.openapi.yaml -o repro/log.txt -q
yarn run v1.15.2
$ C:\REDACTED\node_modules\.bin\spectral lint repro/output2.openapi.yaml -o repro/log.txt -q
unknown format "ISO-3166-1 alpha-2" ignored in schema at path "#"
unknown format "ISO-3166-1 alpha-2" ignored in schema at path "#"
Done in 1.52s.
```

**repro/log.txt**
```
(empty)
```

**Expected behavior**
Nothing in stderr/stdout

**Environment (remove any that are not applicable):**
 - Library version: 4.0.1
 - OS: Windows 7
