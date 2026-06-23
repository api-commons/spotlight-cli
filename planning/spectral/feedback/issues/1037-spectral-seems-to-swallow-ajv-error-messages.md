---
number: 1037
title: "Spectral seems to swallow AJV error messages"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2020-03-29T07:42:30Z"
updated: "2022-07-06T15:08:00Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1037"
---

# Spectral seems to swallow AJV error messages

**Describe the bug**
Spectral seems to swallow AJV error messages

**To Reproduce**

running the following document

```
{
  "a": 12345
}
``` 

against the following schema

```
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "properties": {
    "a": {
      "type": "number"
    },
    "b": {
      "type": "number"
    },
    "c": {
      "type": "number"
    }
  },
  "required": [
    "a"
  ],
  "anyOf": [
    {
      "required": [
        "b"
      ]
    },
    {
      "required": [
        "c"
      ]
    }
  ]
}
```

in that tool -> https://jsonschemalint.com/#!/version/draft-06/markup/json

returns the following errors

![image](https://user-images.githubusercontent.com/92363/77843665-a4645900-719f-11ea-9f50-bfca03d5cf1c.png)

Running a rule leveraging the same schema in Spectral only returns the first entry (which can be quite misleading to the reader).

**Expected behavior**
All errors should be returned.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 5.2.0
 - OS: Windows 10
 - Browser: N/A

**Additional context**
- Would it be a relevant finding (and NOT the result of a trade-off), I could either work on turning this into a dedicated Spectral repro case or try and find a fix
- Although I haven't digged into it, it might be possible this used to work and was stripped out by the fingerprint based deduplication from #856
