---
number: 1292
title: "Can I unit-test my custom rules?"
state: "closed"
labels: []
author: "vitaly-magyari"
created: "2020-07-28T17:30:47Z"
updated: "2021-07-06T09:27:25Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1292"
---

# Can I unit-test my custom rules?

**User story.**
As a custom ruleset user, I can write unit-test that can run my custom rules, so that I can verify their behavior.

**Is your feature request related to a problem?**
I can't test my custom rules at all, except for running entire ruleset against a spec. And can't use things like jest for them.

**Describe the solution you'd like**
In the base repo here there are tests that create spectral instance with `new Spectral()`. Is anything of the sort possible outside? Any possible alternatives?
