---
number: 920
title: "New dedupe in 5.0.0 prevents multiple rule violations to be reported from the same source range"
state: "closed"
labels: ["t/bug"]
author: "disposedtrolley"
created: "2020-01-16T03:41:47Z"
updated: "2020-03-27T06:10:27Z"
comments: 9
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/920"
---

# New dedupe in 5.0.0 prevents multiple rule violations to be reported from the same source range

**Describe the bug**
We've recently upgraded to Spectral 5.0.0 and have noticed that multiple rule violations for the same range in the code are no longer reported. We have some rules which target a broad block of the OpenAPI JSON (i.e. a map of objects), and we delegate our custom rule function to iterate over the map and return an array of rule violations. All of these violations would point to the same source file, column, and line number.

Looking through the PR history, I see that a [fingerprinting function has been added](https://github.com/stoplightio/spectral/pull/856) which attempts to eliminate duplicate rule violations being reported. The [function](https://github.com/stoplightio/spectral/pull/856/files#diff-8097274e9e99eef06060b5f120072e17) only seems to use the `code`, `path`, `range`, and `source` attributes of the rule to compute a fingerprint, not the error message itself. This means that if we return an array of rule violations from custom functions, only the first element will be rendered to the user.

**To Reproduce**
1. Given an OpenAPI file with multiple paths
2. Write a custom rule which targets `$.paths`
3. Attach the rule to a custom function which iterates over `paths` and returns an array of rule violations
4. Observe that only the first rule violation in the returned array is reported to the user

**Expected behavior**
All rule violations should be reported.

**Environment (remove any that are not applicable):**
 - Library version: 5.0.0
 - OS: macOS 10.15.2

**Additional context**
I know that targeting a broad block of JSON for rules isn't optimal, but there may be some cases where we need more complex logic than what the JSONPath syntax can offer to run our rules. I think it might be beneficial to:
* modify the dedupe function to account for the error message when computing the fingerprint.
* update the custom rules section of the docs to strongly recommend providing JSONPath expressions which target individual fields only

P.S. thanks for all the hard work that went into 5.0.0! We're seeing much better performance now.

/cc @nogates @davidlopezre @magnetikonline @adoragoh just something to watch out for when writing Spectral rules :)
