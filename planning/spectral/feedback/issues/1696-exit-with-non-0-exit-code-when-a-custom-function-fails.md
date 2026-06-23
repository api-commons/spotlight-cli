---
number: 1696
title: "Exit with non-0 exit code when a custom function fails"
state: "closed"
labels: []
author: "raing3"
created: "2021-06-28T01:51:34Z"
updated: "2021-07-01T14:56:01Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1696"
---

# Exit with non-0 exit code when a custom function fails

**User story.**
As an API designer, I can have Spectral fail when one of my custom linting functions errors, so that I can detect this in a CI pipeline and more easily identify when my specification isn't being linted correctly.

**Is your feature request related to a problem?**
We have a number of custom linting functions to enforce various standards in our specification. When one of the functions has a code error the Spectral CLI will show the error in the output but still exit with a 0 exit code.

This can cause this issue to go un-noticed as we interpret the 0 exit code to be a success.

**Describe the solution you'd like**
I would like the Spectral CLI to either:

1. Always exit with a non-0 exit code if a custom linting function fails.
2. Add an opt-in CLI argument for indicating that a failure in a custom function should result in a non-0 exit code. I tried some of the CLI arguments documented here: https://meta.stoplight.io/docs/spectral/docs/guides/2-cli.md but couldn't find a way to make the command exit with a non-0 code in the above situation currently.

Example CLI output:

```
> node_modules/.bin/spectral lint build/specifications/internal.json -r .spectral.internal.yaml --fail-severity=warn
OpenAPI 3.x detected
TypeError: array.flat is not a function <-- call to a bad function in my custom function
    at Object.validate-property-type-and-format (eval at exports.evaluateExport (/xxx/node_modules/@stoplight/spectral/dist/rulesets/evaluators.js:89:80), <anonymous>:32:19)
    at Object.exports.lintNode (/xxx/node_modules/@stoplight/spectral/dist/runner/lintNode.js:30:33)
    at callback (/xxx/node_modules/@stoplight/spectral/dist/runner/runner.js:38:32)
    at JSONPath._handleCallback (/xxx/node_modules/jsonpath-plus/dist/index-umd.js:626:7)
    at JSONPath._trace (/xxx/node_modules/jsonpath-plus/dist/index-umd.js:658:12)
    at JSONPath._trace (/xxx/node_modules/jsonpath-plus/dist/index-umd.js:689:19)
    at /xxx/node_modules/jsonpath-plus/dist/index-umd.js:693:21
    at /xxx/node_modules/jsonpath-plus/dist/index-umd.js:909:9
    at Array.forEach (<anonymous>)
    at JSONPath._walk (/xxx/node_modules/jsonpath-plus/dist/index-umd.js:908:24)
No results with a severity of 'warn' or higher found!

> echo $?
0
```

Thanks for the help!
