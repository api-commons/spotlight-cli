---
number: 2406
title: "Allow custom functions to specify error severity"
state: "closed"
labels: []
author: "glb"
created: "2023-02-21T02:22:59Z"
updated: "2023-02-28T15:24:25Z"
comments: 3
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2406"
---

# Allow custom functions to specify error severity

**User story.**

As an API guideline developer, I can write a [custom function](https://docs.stoplight.io/docs/spectral/a781e290eb9f9-custom-functions) that returns findings of different severity depending on the nature of the violation.

**Is your feature request related to a problem?**

I'd like to be able to write a custom function that can return findings of different severities depending on what it finds.

For example, I have a `oas3-operations-must-use-standard-security-schemes` guideline that I'd like to report `error` when there is no security scheme found, `warning` when a non-standard scheme is found, and `info` if a security scheme we've deprecated is found (at least until the end of the sunset period, when we'd increase the severity).

**Describe the solution you'd like**

I'd like to extend [this code](https://github.com/stoplightio/spectral/blob/97134a5fb37b8a1c9cb00cccbcf68fcb7bd9a959/packages/core/src/runner/lintNode.ts#L95) so that it checks if `result` includes a `severity` field and allows that to override the rule severity, so my custom function can do something like:

```js
    if (condition) {
        errors.push({
          message: "a useful message",
          severity: "warning",
        });
    }
```

or

```js
    if (condition) {
        errors.push({
          message: "a useful message",
          severity: "info",
        });
    }
```

or

```js
    if (condition) {
        errors.push({
          message: "a useful message",
          // use the default severity from the rule
        });
    }
```

**Additional context**

I am not yet sure how to translate between the string value of severity and the internal value (seems like an integer). I expect it's pretty straightforward if I find the mapping function, and I expect that will be pretty easy to find, but any pointer would be great.

Would you be open to including this contribution?
