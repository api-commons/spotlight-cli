---
number: 1651
title: "Rule for external http(s) references"
state: "closed"
labels: []
author: "sebas2day"
created: "2021-06-02T16:07:14Z"
updated: "2021-06-24T08:59:30Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1651"
---

# Rule for external http(s) references

**User story.**
I would like to have a rule where I can disallow any http(s) references but allow for example relative file references.

**Is your feature request related to a problem?**
In our solution we don't want to have specifications that have external references over http because those references can suddenly change making a specification suddenly break. We want to enforce our developers not having these references. We commit all specifications + their references as a whole in our repo.

**Describe the solution you'd like**
Some rule like `no-external-http-$ref`.

**Additional context**
NA
