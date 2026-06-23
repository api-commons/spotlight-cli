---
number: 1605
title: "Need clarification on severity mapping and line number mismatch"
state: "closed"
labels: ["discussion"]
author: "ahemanna"
created: "2021-05-06T20:44:05Z"
updated: "2021-05-07T03:38:35Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1605"
---

# Need clarification on severity mapping and line number mismatch

Hello,

I have two questions.,

1. Running spectral on CLI returns severity as one of error, warning, info or hints. 

```
1:1   warning  openapi-tags           OpenAPI object should have non-empty `tags` array.
3:12  warning  info-contact           Info object should contain `contact` object.                             info
3:12  warning  info-description       OpenAPI object info `description` must be present and non-empty string.  info
17:19  warning  operation-description  Operation `description` must be present and non-empty string.            paths./pets.get
21:21  warning  operation-tag-defined  Operation tags should be defined in global tags.                         paths./pets.get.tags[0]
66:20  warning  operation-description  Operation `description` must be present and non-empty string.            paths./pets.post
70:21  warning  operation-tag-defined  Operation tags should be defined in global tags.                         paths./pets.post.tags[0]
90:19  warning  operation-description  Operation `description` must be present and non-empty string.            paths./pets/{petId}.get
94:21  warning  operation-tag-defined  Operation tags should be defined in global tags.                         paths./pets/{petId}.get.tags[0]

✖ 9 problems (0 errors, 9 warnings, 0 infos, 0 hints)
```

But when I run it through [javascript](https://meta.stoplight.io/docs/spectral/docs/guides/3-javascript.md#loading-rules) I see the JSON array with severity as an integer field. 

```
[
  {
    "code": "openapi-tags",
    "message": "OpenAPI object should have non-empty `tags` array.",
    "path": [],
    "severity": 1,
    "range": {
      "start": {
        "line": 0,
        "character": 0
      },
      "end": {
        "line": 170,
        "character": 40
      }
    }
  },
 {
    "code": "info-contact",
    "message": "Info object should contain `contact` object.",
    "path": [
      "info"
    ],
    "severity": 1,
    "range": {
      "start": {
        "line": 2,
        "character": 11
      },
      "end": {
        "line": 6,
        "character": 25
      }
    }
  },
  .
  .
  .
]
```

Do we have a mapping available for this? If yes could someone please point me to it?

2. I noticed the start.line and start.character in the JSON is always one less than what we see in the CLI. Is this intended or is this a bug?

Thank you.
