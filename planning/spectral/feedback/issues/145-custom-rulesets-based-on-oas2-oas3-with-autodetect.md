---
number: 145
title: "Custom Rulesets based on OAS2 & OAS3 with Autodetect"
state: "closed"
labels: ["question", "future work"]
author: "philsturgeon"
created: "2019-04-17T11:06:29Z"
updated: "2019-07-11T12:36:13Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/145"
---

# Custom Rulesets based on OAS2 & OAS3 with Autodetect

In Spectral 2.0 the CLI code will autodetect which ruleset to apply  from the two rulesets available:

- oas2
- oas3

A new feature is being added #144 which will allow custom rulesets to be required. When we add this new `--ruleset=` option in 2.1.0 we want to avoid automatically shoving our opinions in, as well as the opinions of the user defined in the ruleset files they are adding in. 

For example, if you don't care about adding descriptions to tags, and our ruleset is demanding that you do that, you might get a bit annoyed, especially as we do not have --skip-rule yet. (even when that is added you might not want to have to turn off a bunch of things that you never asked to be turned on).

Issue #144 will convert the existing oas2 and oas3 rulesets to the new declarative YAML format and add the `require` feature to these rulesets. This means custom rulesets can require the core oas2 or oas3 rulesets _if requested._

One downside here is the inability toto load both oas2 and oas3 (schema validation would clash) and lose the autodetect logic. Autodetect will remain by default, so this is not a breaking change, but anyone using `--ruleset` will lose autodetect functionality, and they will only be able to write custom rulesets that build on top of oas2 or oas3.

If this is a problem (it might not be...) then we need to fix it. One approach might be merging oas2 and oas3 into just "oas", and adding some sort of version based filter for the rules. 

Ideas in the comments please!
