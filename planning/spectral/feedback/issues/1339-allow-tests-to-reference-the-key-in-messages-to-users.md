---
number: 1339
title: "Allow tests to reference the key in messages to users"
state: "closed"
labels: []
author: "savage-alex"
created: "2020-09-14T14:00:08Z"
updated: "2020-09-27T16:44:24Z"
comments: 18
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1339"
---

# Allow tests to reference the key in messages to users

As a rule creator (and a consumer of the report)
I want to receive verbose messages informing me of the location of an issue with its name
So that I can quickly see what went wrong with my design.

(This makes allot more sense when designing on an unresolved definition and exporting a resolved one into spectral.)

Given the following rule:
![image](https://user-images.githubusercontent.com/25430683/93092330-34875380-f697-11ea-8d35-2ed5a71ced0e.png)
The consumer is told exactly which parameter has the fault (and the line and ruleset) 
![image](https://user-images.githubusercontent.com/25430683/93092054-d9edf780-f696-11ea-92dc-63b071ade674.png)
Perfect right?

Unfortunately with truthy evaluations for a property it doesn't seem possible to get the key out.
I have tried to include the"hint" {parameter} or {value} in the rule:

Rule using property to pull through:
![image](https://user-images.githubusercontent.com/25430683/93091759-71067f80-f696-11ea-9dae-10d072d503ba.png)
Results in:
![image](https://user-images.githubusercontent.com/25430683/93091818-867ba980-f696-11ea-870c-55c987ec28af.png)

Rule changed to return the value, results in:

![image](https://user-images.githubusercontent.com/25430683/93091676-5207ed80-f696-11ea-88cf-e2994cd36d13.png)

Is it possible we can get the key returned as an option? I think it would be really helpful to consumers
