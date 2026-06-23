---
number: 2184
title: "Can I control the version of spectral-rulesets used when installing spectral-cli?"
category: "Q&A"
author: "jdaly2k"
created: "2022-06-15T13:01:11Z"
upvotes: 2
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2184"
---

# Can I control the version of spectral-rulesets used when installing spectral-cli?

Can I can control the version of **@spotlight/spectral-rules** that is packaged when installing **@spotlight/spectral-cli**?

I use spectral-cli in a CI/CD environment that is configured to fail builds if a linter **error** rule is triggered. I found that the linter rules can change between installs, even when the version of **spectral-cli** has not changed.

From what I've observed if I install spectral-cli with NPM using:
```bash
npm i -g @stoplight/spectral-cli@6.4.0
```

Then declare a ruleset that extends one of the spectral rulesets:
```yaml
extends: [[spectral:asyncapi, all]]
```

The ruleset will be based on the latest version of spectral-rules at the time of the install:
* https://www.npmjs.com/package/@stoplight/spectral-rulesets

Is there anyway to control the ruleset version?

## ✅ Accepted answer — @philsturgeon

There is not, but we're not about making breaking changes in rulesets unless there is a major version. For the bundled rulesets this should not be a concern. 

For your own rulesets try and follow the same logic. Whoever is releasing rulesets can add new rules as warnings, and make them errors only when they're confident teams have avoided the warning. This takes a little management, but its a lot easier than adding the complexities of version management, and means new rules actually make it out into the ecosystem instead of leaving folks stuck on old versions missing most of your rules.

Or you can distribute rulesets as NPM packages and rely on the NPM version management. https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTky-sharing-and-distributing-rulesets#npm
