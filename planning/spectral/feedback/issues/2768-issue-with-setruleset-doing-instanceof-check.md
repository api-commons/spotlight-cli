---
number: 2768
title: "Issue with setRuleset doing instanceof check"
state: "open"
labels: []
author: "Aaron-Mackay"
created: "2025-01-02T10:45:31Z"
updated: "2025-01-02T10:45:31Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2768"
---

# Issue with setRuleset doing instanceof check

**Describe the bug**
In setRuleset() in [spectral.ts](https://github.com/stoplightio/spectral/blob/9d01bec8f4e6120c17d0dfd09079a694f10ba111/packages/core/src/spectral.ts#L86), a check is done to confirm the ruleset is of the Ruleset class before setting it
`this.ruleset = ruleset instanceof Ruleset ? ruleset : new Ruleset(ruleset);`
Unfortunately if the package is being used by another package, as in a plugin, there can be a mismatch where the ruleset was initialised using a (identical) Ruleset class from the root level node_modules, and then checked against the local node_modules, resulting in instanceof returning false, and then a failed attempt at converting a Ruleset into a Ruleset.

Is there a way to change the type narrowing to allow for this?

**To Reproduce**
Example:
1. Install spectral
2. Install a dependency that uses its own local copy of spectral ([in our case](https://github.com/dweber019/backstage-plugins/tree/main/plugins/api-docs-spectral-linter))
3. Run and get error that linting has failed as ruleset is not an object.

**Expected behavior**
setRuleset() sees that the ruleset is of the Ruleset class

**Environment (remove any that are not applicable):**
 - Gitlab pipelines

**Additional context**
Some further context [here](https://github.com/dweber019/backstage-plugins/issues/82#issuecomment-2563589359)
