---
number: 1096
title: "Describe how to cope with unexpected issues in a custom function"
state: "closed"
labels: ["documentation", "chore"]
author: "nulltoken"
created: "2020-04-16T09:03:41Z"
updated: "2021-05-11T15:32:22Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1096"
---

# Describe how to cope with unexpected issues in a custom function

**Chore summary**
Provide some guidance to the custom function writer with regards to errors

**Tasks**
- [ ] Add a section to `functions.md`

From https://github.com/stoplightio/spectral/pull/1058/files#r408418822

> @P0lip What's the effect from throwing from within a function? Does the whole process crash down? Do we get a special kind of result or a console log?

We'd get a console.log, same as we do when any other custom function throws an exception.
The whole process would still keep on going.

> if I prefer to see a CI build fail rather than having it pass for the wrong reasons

I'd return a regular error, i.e.
```
return [{ message: 'Network error. The check could not be performed' }]
```
