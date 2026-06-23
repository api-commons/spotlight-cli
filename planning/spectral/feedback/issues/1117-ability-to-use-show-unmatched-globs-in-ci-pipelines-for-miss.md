---
number: 1117
title: "Ability to use 'show-unmatched-globs' in CI pipelines for missing specs"
state: "closed"
labels: ["enhancement"]
author: "axelssonHakan"
created: "2020-04-23T10:18:39Z"
updated: "2020-10-08T15:30:02Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1117"
---

# Ability to use 'show-unmatched-globs' in CI pipelines for missing specs

**Describe the bug**
Right now the `show-unmatched-globs` only logs a message if a spec isn't found using a glob. It would be nice if it would change the exitCode as well (`process.exitCode = 1;`).
https://github.com/stoplightio/spectral/blob/develop/src/cli/services/linter/linter.ts#L73

Maybe the yarg option `--show-unmatched-globs` could be made to take a string and use that to change exit code if that is behaviour the user wants

- `--show-unmatched-globs=empty/info/warn` >> exitCode=0
- `--show-unmatched-globs=error`>> exitCode=1

**To Reproduce**

1. Run this CLI command `npx spectral lint --show-unmatched-globs globReturningEmptyArray`
2. `echo $?` >> 0

**Expected behaviour**
In CI environments it would be preferred if the `--show-unmatched-globs` returned an exitCode > 0 so you don't get any "false" positive tests
