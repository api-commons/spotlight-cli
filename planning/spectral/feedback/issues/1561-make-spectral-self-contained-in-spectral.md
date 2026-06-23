---
number: 1561
title: "Make spectral self-contained in `.spectral/`"
state: "closed"
labels: []
author: "EvanCarroll"
created: "2021-03-29T00:58:17Z"
updated: "2021-05-12T09:06:36Z"
comments: 1
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1561"
---

# Make spectral self-contained in `.spectral/`

**User story.**
As a user browsing a repo that employs spectral,  I want to know that the directory with your "functions" belongs to the spectral framework without knowing spectral's project layout.

**Describe the solution you'd like**
I'd like all of the spectral stuff to be in a central location, like `.spectral`

```
REPO
  /.spectral
  /.spectral/conf.yaml
  /.spectral/functions/
  /.spectral/functions/validTagGroups.js
```

**Additional context**
Assume you're new to a repo. You have a `make test` which uses spectral. It's not clear it'll be consulting `/functions`. Likewise, assume you jump into the repo, and you grep for `x-Unique-Term` it's not clear that an occurrence in `/functions` is a testing extension or a "spectral" plugin.


------

Note, I would not call them functions. That's an awfully vague term: `predicates` would be better. Or rules. You have a validation rule which calls into a custom library of rules coded in JavaScript. Don't find it that confusing.
