---
number: 2149
title: "Exit code for unrecognized-format depends on --fail-severity"
state: "open"
labels: ["enhancement", "triaged", "CLI"]
author: "max-moritz"
created: "2022-05-04T18:16:57Z"
updated: "2024-05-31T12:36:31Z"
comments: 2
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2149"
---

# Exit code for unrecognized-format depends on --fail-severity

**Describe the bug**
I expected a nonzero exit code in any case when Spectral detects a file with unrecognized format and prints `warning  unrecognized-format  The provided document does not match any of the registered formats [OpenAPI 2.0 (Swagger), OpenAPI 3.x, OpenAPI 3.0.x, OpenAPI 3.1.x]`. However, the exit code depends on the value of the `--fail-severity` cmd line option.

I understand the concept of `error`, `warn`, `info`, `hint` levels and that with `--fail-severity` one can define for which levels a nonzero failure exit code shall be returned. I also realize that the unrecognized format scenario results in a `warning`. However, I expected that these levels refer solely to rule violations in the API being linted. But maybe my expectation is wrong...  ;-)

**To Reproduce**
Run the following commands:
```
echo extends: spectral:oas > ruleset.yml
echo blah blah > invalid.yml
spectral lint -r ruleset.yml invalid.yml
echo $? # prints 0
spectral lint -r ruleset.yml invalid.yml --fail-severity warn
$ echo $? # prints 1
```
**Expected behavior**
Non-zero exit code in any case

**Environment (remove any that are not applicable):**
 - Library version: 6.3.0
