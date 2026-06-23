---
number: 2061
title: "Spectral: Clarify --ruleset requirement"
state: "closed"
labels: ["documentation"]
author: "ryotrellim"
created: "2022-02-07T16:54:26Z"
updated: "2022-02-17T19:19:05Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2061"
---

# Spectral: Clarify --ruleset requirement

Relevant conversation: https://discord.com/channels/841794018173648916/859895506271600670/939506075525320714

Relevant tickets:
https://github.com/bundesAPI/deutschland/issues/48
https://github.com/stoplightio/spectral/issues/1893
https://github.com/stoplightio/spectral-action/pull/618
https://github.com/stoplightio/spectral/issues/1796

# Goal
The first line of https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg1-spectral-cli will actually throw an error.
i.e., Running `spectral lint petstore.yaml` immediately after install will likely fail with `No ruleset was found.`

# Solution

Add the two ways to get a ruleset.

Create a Ruleset
Spectral, being a generic YAML/JSON linter, needs a ruleset in order to be able to lint files. There are two ways to do this:
1. Run this comment to reference our predefined results:
printf '{\n  "extends": ["spectral:oas", "spectral:asyncapi"]\n}\n' > .spectral.json
2. Create your own ruleset. (Link to Custom ruleset topic.)
