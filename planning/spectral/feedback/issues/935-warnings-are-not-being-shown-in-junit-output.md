---
number: 935
title: "Warnings are not being shown in junit output"
state: "closed"
labels: []
author: "kylesykes"
created: "2020-01-20T18:58:02Z"
updated: "2026-04-01T15:08:23Z"
comments: 15
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/935"
---

# Warnings are not being shown in junit output

> **Update from Stoplight/Phil:** Let's go with the "Convert anything that meets the fail-severity to an error in the case of JUnit" option. It makes sense.

We use the junit output to show errors in Gitlab's Merge Requests, and it's worked great until now.  After upgrading to v5, we were trying to setup our builds to fail when spectral catches an `error`, but would also like to show warnings.  However, it appears that the `junit` output doesn't display warnings, but other formatters do (checked with `stylish` and `json`, but haven't rigorously tested all the others).

With `stylish` formatter, warnings show:
![image](https://user-images.githubusercontent.com/3663141/72750150-a8fa0900-3b81-11ea-826e-9359bafa862f.png)

With `junit` formatter, no warnings shown:
![image](https://user-images.githubusercontent.com/3663141/72751096-3cccd480-3b84-11ea-93ee-6dcbde37e20a.png)

I'd be happy to try and cook up an example if it's needed, but my hope is that it was just either a) an oversight on our part, b) something that's easily spotted to fix or c) intentional but undocumented behavior.

Let me know if you need more information!
Thanks!
