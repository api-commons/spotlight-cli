---
number: 2273
title: "Uncaught exception with incomplete paths"
state: "open"
labels: ["enhancement", "triaged"]
author: "Thomasdezeeuw"
created: "2022-09-12T09:43:09Z"
updated: "2024-05-31T12:36:36Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2273"
---

# Uncaught exception with incomplete paths

**Describe the bug**
Spectral has an uncaught exception:

```log
Error running Spectral!
Error #1: Function "operationSummary_1$1" threw an exception: Cannot read properties of null (reading 'summary')
          at lintNode    …nner/lintNode.js:30  throw new pony_caus…
          at cb          …runner/runner.js:45  (0, lintNode_1.lint…
          at <computed>  …runner/runner.js:93  cb(scope);
          at <computed>  …oxy-callbacks.js:31  fn(...args);
          at emit        …untime/scope.js:109  return void fn(_rol…
```

**To Reproduce**

Using a path without any info, for example one you still have to write:

```yaml
paths:
  /users:
    get:
      # TODO.
```

Run `spectral lint` it will fail.

**Expected behavior**

A (linting) error, but not an uncaught exception.

**Environment (remove any that are not applicable):**
 - Library version: 6.3.0
 - OS: N/A
 - Browser: N/A

**Additional context**

Should be low priority, but would be nice to get a decent error message.
