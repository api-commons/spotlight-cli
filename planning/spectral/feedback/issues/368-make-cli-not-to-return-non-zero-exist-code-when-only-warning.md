---
number: 368
title: "Make CLI not to return non-zero exist code when only warnings occur"
state: "closed"
labels: ["enhancement"]
author: "aleung"
created: "2019-07-12T14:48:28Z"
updated: "2020-05-14T22:52:28Z"
comments: 14
reactions_total: 4
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/368"
---

# Make CLI not to return non-zero exist code when only warnings occur

**User story.**

As a continuous integration user, I can provide a parameter to CLI, so that the CI pipeline won't fail when there is no error but only warnings.

As a continuous integration user, I can provide a parameter to the CLI, so that only results of a certain severity will be returned as output.

**Describe the solution you'd like**

_Updated 2019-07-16 by @philsturgeon_

Two new CLI options:

1. `--fail-severity=warn` - enum[`hint`, `info`, `warn`, `error`] - change the level of results which come out of Spectral.
2. `--display-only-fail-severity-results` - boolean - spectral will error if results of any level at all are reported. We should make that configurable.

We should probably not change the default behavior in this as its aiming for v4.1. Place a TODO note in the code to change the default to `warn` in v5.0.
