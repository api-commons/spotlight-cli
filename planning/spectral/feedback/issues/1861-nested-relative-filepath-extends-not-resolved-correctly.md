---
number: 1861
title: "Nested relative filepath extends not resolved correctly"
state: "closed"
labels: ["t/bug", "released", "p/medium", "triaged"]
author: "cmars"
created: "2021-10-02T16:13:23Z"
updated: "2021-12-28T20:00:14Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1861"
---

# Nested relative filepath extends not resolved correctly

**Describe the bug**
Extending a YAML ruleset "A" which in turn extends a YAML ruleset "B", expressed with a path location relative to "A", results in ENOENT with spectral-cli@6.0.0.

Earlier versions of spectral, such as @stoplight/spectral@6.0.0-alpha3, did not have this problem. It appears to be a regression, and is blocking our upgrade to 6.0.0 GA.

**To Reproduce**

Extract this test scenario:
[spectral-6-bug.tar.gz](https://github.com/stoplightio/spectral/files/7271770/spectral-6-bug.tar.gz)

```
$ cd spectral-6-bug
$ npm install @stoplight/spectral-cli
$ npx spectral --version
6.0.0
$ npx spectral lint spec.yaml
ENOENT: no such file or directory, open '/Users/cmars/Projects/spectral-6-bug/more-rules.yaml'
```

The error is not very clear, but it turns out that it's failing to resolve the path of `more-rules.yaml` relative to `./my-ruleset/ruleset.yaml` which is extended in the top-level default `.spectral.yaml`.

**Expected behavior**

This used to work; 6.0.0-alpha versions do not have this problem with transitive extension of filesystem rules.

Re-extract a fresh copy of the test project (things get kind of horribly broken if you install spectral-cli with an older spectral package), install 6.0.0-alpha3 and `spectral lint` works with the same rulesets:

```
$ cd spectral-6-bug
$ npm install @stoplight/spectral@6.0.0-alpha3
$ npx spectral --version
6.0.0-alpha3
$ npx spectral lint spec.yaml
OpenAPI 3.x detected
OpenAPI 3.0.x detected
...
```

**Environment**
 - Library version: [6.0.0]
 - OS: [macos big sur]

```
$ npm --version
6.14.13
```
