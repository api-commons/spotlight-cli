---
number: 2439
title: "Validate that path parameters have `schema` or `content`"
category: "Rulesets"
author: "colinmollenhour"
created: "2022-05-26T15:23:54Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2439"
---

# Validate that path parameters have `schema` or `content`

**User story.**
As a user, I would like Spectral to warn me when I forget to specify a `schema` or `content` in a path parameter.

**Is your feature request related to a problem?**
Yes, I forgot to add a `schema` and it resulted in much confusion as Spectral passed validation but other tools choked with unhelpful error messages and it took a long time to realize a simple mistake.

**Describe the solution you'd like**
If I forget to specify a `schema` or `content` for a path parameter, Spectral should warn me with an error like:

> `Parameter "${p}" must have either a "schema" or "content".`

**Additional context**
![image](https://user-images.githubusercontent.com/38738/170519752-2f966d21-5bec-4efd-8750-8825ef3ce3ee.png)
