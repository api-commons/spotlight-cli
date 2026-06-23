---
number: 1488
title: "make documentationUrl available as part of Javascript API linting result"
state: "closed"
labels: ["released", "triaged", "chore", "team/bad-news-bears", "jira"]
author: "apiglue"
created: "2021-01-27T22:14:18Z"
updated: "2025-04-22T09:36:19Z"
comments: 2
reactions_total: 8
thumbs_up: 8
url: "https://github.com/stoplightio/spectral/issues/1488"
---

# make documentationUrl available as part of Javascript API linting result

**Chore summary**
When using a custom ruleset which utilizes a different documentUrl per rule, the **Javascript API**  and the *CLI* linting results should include the respective rule documentUrl.

**Tasks**
- [ ] Make documentUrl available as part of a linting results for 

.i.e for Javascript API:

            {
                "code": "operation-description",
                "message": "Operation `description` must be present and non-empty string.",
                **"documentUrl": "https://mydomain.io/operation-description.html",**
                "path": [
                    "paths",
                    "/contacts/",
                    "post"
                ],
                "severity": 1,
                "range": {
                    "start": {
                        "line": 122,
                        "character": 13
                    },
                    "end": {
                        "line": 127,
                        "character": 25
                    }
                }
            },



**Additional context**
Add any other context about the chore here.
