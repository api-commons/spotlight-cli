---
number: 926
title: "Builtin casing.pascal doesn't allow abbreviations"
state: "closed"
labels: ["t/bug"]
author: "bkabrda"
created: "2020-01-20T10:06:18Z"
updated: "2020-02-05T20:58:37Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/926"
---

# Builtin casing.pascal doesn't allow abbreviations

**Describe the bug**

The builtin pattern for matching `casing.pascal` doesn't allow abbreviations. E.g. `MyHTTPResponse` is considered invalid.

**To Reproduce**

Try to validate a string value `MyHTTPResponse` against `casing.pascal`.

**Expected behavior**

Validation passes.

**Environment (remove any that are not applicable):**

Using Docker image stoplight/spectral:5 (image id 38270ed7d5da).

**Additional context**

Perhaps there could be a `functionOptions` option added to allow for this in order to preserve backwards compatible behavior.
