---
number: 2036
title: "Errors and omissions in documentation of overrides"
state: "closed"
labels: []
author: "mkistler"
created: "2022-01-24T17:25:16Z"
updated: "2022-02-21T20:17:37Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2036"
---

# Errors and omissions in documentation of overrides

**Describe the bug**

The [documentation of the Overrides feature](https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg5-custom-rulesets#overrides) incorrectly states that it supports
> Override rulesets to apply on particular JSONPath's

This is incorrect because Overrides use _JSON Pointers_ and not JSON Paths to identify the elements in the file where overrides should be applied.

It is unfortunate that JSON Pointers are used instead of JSON Paths, since most of the other externals of Spectral use JSON Paths, but there's probably no chance of changing that now.  But all the more reason to document it clearly.  And that should include some pointers to resources on JSON pointers (e.g. how to properly escape slashes).

**To Reproduce**

Look at the documentation.

**Expected behavior**

The documentation is correct and complete (i.e. guides users to success).

**Additional context**

I am willing to submit a PR to fix the doc problems if the Spectral developers will confirm that my diagnosis is accurate.
