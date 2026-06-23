---
number: 1168
title: "Custom functions lifecycle events"
state: "closed"
labels: ["enhancement"]
author: "P0lip"
created: "2020-05-19T15:19:01Z"
updated: "2020-05-26T12:24:44Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1168"
---

# Custom functions lifecycle events

Currently each custom function, whether is sync or async, is expected to return a result.
In other words - n calls, n results, there is no way to alter the results later on.
While this is fine for most of the time, it might be somewhat troublesome at times, since it literally means you need to perform the validation immediately and you cannot really defer anything.
This is particularly unfortunate if you have an endpoint that doesn't return a whole dictionary you could cache, but just a single word instead.
To mitigate that potential issue, we could bring events each custom function could subscribe to.
I'm thinking of 3 events:
- setup - emitted before the linting kicks in
- beforeTeardown - after all rules were executed (still possible to alter results at this point)
- afterTeardown - linting done, no more actons possible.

Doing so would let us avoid making plenty of requests increasing the performance and decreasing the potential risk of failure 
Currently, if they want to validate 1000 words, they would need to make 1000 requests in the worst case if each word is unique and we cannot cache anything.
This won't scale too nicely, in particular in Studio, when linting happens in real-time, meaning any time a change is made, Spectral kicks in and performs linting.
By accumulating all words, we could make a single request and return the results (if any).
