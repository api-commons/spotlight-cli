---
number: 747
title: "Rule exceptions"
state: "closed"
labels: ["enhancement", "p/high"]
author: "xuorig"
created: "2019-11-06T20:11:49Z"
updated: "2020-05-18T17:52:28Z"
comments: 9
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/747"
---

# Rule exceptions

**User story.**
As a user, I can add exceptions to certain rules to ignore failures so that I can guard against new changes but run against legacy descriptions.

**Is your feature request related to a problem?**

For API descriptions that have a "pre-linting" era, but with linting rules that should be enforced for new changes, it would be nice to have some kind of mechanism similar to eslint's `// eslint-disable-line no-use-before-define`.

**Describe the solution you'd like**

I couldn't find any talks about this feature in issues / PRs, let me know if it exists already. I can see different ways of tackling this.

  - YAGNI: Users are expected to run spectral in a custom way, running only against new changes / diffs. Or maybe expected to write custom JS rules and do the filtering there.

  - Users are expected to handle this with `given`'s JSON PATH entirely.

  - A new rule attribute:

```
  paths-kebab-case:
    description: Should paths be kebab-case.
    message: '{{property}} is not kebab-case: {{error}}'
    severity: error
    recommended: true
    given: $.paths[*]~
    then:
      function: pattern
      functionOptions:
        match: "^(\/[a-z0-9-{}]+)+$"
  except:
    - <json_path_matching-legacy-paths>
```

  - An eslint style convention directly on API specifications (Tricky since users would be required to strip this out before making public)

```
x-spectral-disable: "paths-kebab-case"
```
