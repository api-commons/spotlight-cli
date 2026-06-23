---
number: 924
title: "Migrate typeEnum function from a built-in into an oas custom function"
state: "closed"
labels: ["chore"]
author: "nulltoken"
created: "2020-01-18T18:59:30Z"
updated: "2020-04-02T09:28:32Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/924"
---

# Migrate typeEnum function from a built-in into an oas custom function

**Chore summary**
While working on #913, I tried to implement `typedEnum` as a custotom function. I eventually forfeited.

Having a custom functions with dependencies on external packages such as ajv and built-ins like `assert` and `os`doesn't seem to work out of the box with the current rollup configuration.

**Tasks**
- [ ] Migrate `typedEnum` as a custom oas function
- [ ] Build a very rich custom function, with plenty of dependencies and ensure rollup and karma can digest it without further tweaking
- [ ] Ensure the custom function creation documentation is in line with the required steps to make that work for the end user.
