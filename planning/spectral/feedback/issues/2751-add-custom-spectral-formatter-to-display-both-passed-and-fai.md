---
number: 2751
title: "Add Custom Spectral Formatter to Display Both Passed and Failed Rules in JUnit Format"
state: "open"
labels: []
author: "yelizhenden-mdb"
created: "2024-12-05T09:56:42Z"
updated: "2024-12-05T10:00:06Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2751"
---

# Add Custom Spectral Formatter to Display Both Passed and Failed Rules in JUnit Format

**TL;DR**
Add a custom Spectral formatter that outputs both passed and failed rules in an XML format. This would improve visibility into the linting process, ensuring all rules are accounted for and not just failures. The XML output includes detailed information about failures (e.g., message, components, location) and marks successful checks for better auditing and integration with CI/CD pipelines.

**User story.**
As a developer or API maintainer, I can use a custom Spectral formatter to see not only the failed rules but also the rules without any failures, so that I can gain a complete understanding of the rules being evaluated and ensure comprehensive coverage.

**Is your feature request related to a problem?**
Yes, currently, when using Spectral to lint OpenAPI specifications, the output only shows rules that have failures. This makes it difficult to confirm whether rules with no associated failures were evaluated at all, leading to uncertainty about the overall rule compliance and potentially missing unconfigured or improperly defined rules.

**Describe the solution you'd like**
A Spectral JUnit formatter that:
- Lists all the evaluated rules, including those with no failures.
- Highlights failed rules (as it does now) while also clearly marking successful ones (e.g., with a "Passed" status or similar).
- Optionally groups rules by status (e.g., "Failed" vs "Passed") for easier readability.

This would provide better visibility into the linting process and help ensure that all desired rules are being checked and followed.

**Additional context**
I have a working code example that implements this feature. It generates output in a structured XML format that provides details on both failed and successful rules. The structure is as follows:

```
<testsuite name="{TestSuiteName}" tests="{TotalTests}">
  <testcase classname="{RuleName}" name="{RuleDescription}">
    <failure type="{RuleName}" path="{FailurePath}">
      {
        "message": "{RuleDescription}",
        "component": [
          "{Component1}",
          "{Component2}"
        ],
        "location": "{FailureLocation}"
      }
    </failure>
  </testcase>
  <testcase classname="{RuleName}" name="{RuleDescription}">
    <success description="{SuccessDescription}" type="{RuleName}" />
  </testcase>
</testsuite>
```

It includes all rules that were evaluated, not just those with failures.
Successful rules are marked with a <success> tag, providing clarity and assurance about what was checked.

I’d be happy to contribute this code as a pull request if the maintainers are interested or can modify it based on feedback.
