---
number: 9
title: "Should we have a special result for handling rules that don't exist?"
state: "closed"
labels: ["discussion"]
author: "rossmcdonald"
created: "2018-09-26T16:45:02Z"
updated: "2018-10-08T21:39:13Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/9"
---

# Should we have a special result for handling rules that don't exist?

If the rule configuration wants tries to enable a rule that doesn't exist, how should be handled?

* Should we extend the current rule result format for this kind of error?
* Should we do nothing and log a warning?
* Should we throw an error?

Shouldn't be an issue at first, but we might want to come up with a strategy sooner rather than later.
