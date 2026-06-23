---
number: 1618
title: "Standardized error handling"
state: "closed"
labels: ["tech-debt", "chore", "v6"]
author: "P0lip"
created: "2021-05-12T09:18:36Z"
updated: "2021-06-08T09:37:03Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1618"
---

# Standardized error handling

Logging in Spectral is not particularly standardized now and needs an overall improvement.
At present, we can distinguish at least 3 approaches:
- using any `console.*` calls (sometimes silenced if --quiet flag is passed, but not always)
- throwing an error and not handling it too well
- on rare occasions, we push a validation result.

Here's what I propose.

For actual logging let's setup up something similar to `@stoplight/reporter`. I'm not saying we should include the project, as it's tied to Sentry and an array of other libraries, but we can incorporate the same pattern.

If something is considered to be an exception, let's not use `console.warn` or `console.error`, but simply abort the process the exception occurred in, regardless of its place - this means linting can also be canceled and result in an error.

Examples:

- https://github.com/stoplightio/spectral/blob/develop/src/runner/lintNode.ts#L30 & https://github.com/stoplightio/spectral/blob/develop/src/ruleset/readRuleset.ts#L178 - these are actual errors. Instead of logging a message, let's refuse to process the ruleset and persuade the user to address the issues.

- https://github.com/stoplightio/spectral/blob/develop/src/runner/lintNode.ts#L52, https://github.com/stoplightio/spectral/blob/develop/src/runner/lintNode.ts#L73 & https://github.com/stoplightio/spectral/blob/develop/src/runner/runner.ts#L151 - ditto, it's an error-ish scenario. In this particular case, we could potentially push a diagnostic error saying "xyz rule failed to execute", etc.


Related issues: https://github.com/stoplightio/spectral/issues/1096
