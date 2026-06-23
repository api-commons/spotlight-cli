---
number: 2150
title: "Exit code 1 should only be used to flag rule violations in API files"
state: "open"
labels: ["triaged", "CLI", "hacktoberfest"]
author: "maxi-milian"
created: "2022-05-04T20:13:40Z"
updated: "2026-05-15T07:50:07Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2150"
---

# Exit code 1 should only be used to flag rule violations in API files

**Describe the bug**

Assume that `ruleset.yml` and `openapi.yml` are available in the current dir and that `openapi.yml` violates some rules defined in `ruleset.yml`. This is flagged with exit code 1:

```
spectral lint -r ruleset.yml openapi.yml
echo $? # prints 1
```
:thumbsup:

Other errors are flagged with nonzero exit code != 1. Assume that `not-available.yml` is not there in the current directory
and that `invalid.yml` is available but does not store a valid ruleset:

```
spectral lint -r ruleset.yml not-available.yml --fail-on-unmatched-globs
echo $? # prints 2
spectral lint -r invalid.yml openapi.yml
echo $? # prints 2
spectral lint -r not-available.yml openapi.yml
echo $? # prints 2
```

:thumbsup:

However, there are some types of errors (`Unknown arguments`,  `Invalid values` and maybe more) which are flagged with exit code 1:

```
spectral lint -r ruleset.yml openapi.yml --fail-severity invalid-value
echo $? # prints 1
spectral lint -r ruleset.yml openapi.yml --unknown-arg
echo $? # prints 1
```

Unfortunately this makes it impossible to evaluate a Spectral lint run by just inspecting the exit code.  😢 

**To Reproduce**

```
spectral lint -r not-available.yml not-available.yml --invalid-arg
echo $? # prints 1
```

**Expected behavior**

Any error is flagged with nonzero exit code != 1. Rule violation in API file is flagged with exit code 1.

**Environment**

 - Library version: 6.3.0
 
 **Additional context**

 See also #2149
