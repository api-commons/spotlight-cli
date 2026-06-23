---
number: 559
title: "Basic example fails to work in 4.1.x"
state: "closed"
labels: ["t/bug"]
author: "kylesykes"
created: "2019-09-17T17:06:34Z"
updated: "2019-09-17T20:04:25Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/559"
---

# Basic example fails to work in 4.1.x

**Describe the bug**
Spectral fails to properly catch the example rule using the basic example given in the documentation with versions 4.1.x.  The example _does_ work properly if downgrading to 4.0.3.
I'm referencing the example under "Adding a Rule", which I view as the minimum working example of a custom rule implementation.
https://github.com/stoplightio/spectral/blob/develop/docs/getting-started/rulesets.md

I have attempted this using both specific versions of Spectral installed from npm and also using the appropriately tagged docker images.

We identified this bug as a larger problem with our rulesets no longer catching rules they had previously caught when migrating from v3->4, but eventually discovered that the even the basic example wasn't working correctly, leading us to believe something changed in 4.1 that is causing previously defined rules to work.  Hopefully the basic example leads you to the issue.

**To Reproduce**
The following files are what are used in the screenshots below.

testjson.json:
```
{
    "tags": [
        {
            "name": "animals"
        }
    ]
}
```

.spectral.yml
```
rules:
  my-rule-name:
    description: Tags must have a description.
    given: $.tags[*]
    severity: error
    then:
      field: description
      function: truthy
```

**Expected behavior**
Spectral should catch and alert the user to the incorrectly formatted JSON/YAML.

**Screenshots**
If applicable, add screenshots to help explain your problem.
Docker testing:
![image](https://user-images.githubusercontent.com/3663141/65062670-1e3e9e80-d942-11e9-9269-c833ca2716e3.png)
NPM testing:
![image](https://user-images.githubusercontent.com/3663141/65062933-c18fb380-d942-11e9-8368-adb9cfbb1db3.png)


**Environment (remove any that are not applicable):**
 - Library version: 4.0.3, 4, 4.1, 4.1.1
 - OS: Mac OS X Mojave

**Additional context**
We encountered this while migrating from some rules we wrote in v3 to v4 and were confused when _literally none_ of them were catching issues anymore.  We began distilling the problem down bit by bit, rule by rule, until we eventually resorted to pulling the basic example from the website and noticed it also failed to catch the rule.  Some more playing around with versions using Docker and npm allowed us to narrow down the issue to something in 4.1 (as far as we can tell).  Whatever is causing the basic example to not catch things is probably causing the rest of our stuff to not be caught either.
