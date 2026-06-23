---
number: 2666
title: "Is there a JsonSchema for the JSON/Yaml rulesets?"
category: "Ideas"
author: "ouvreboite"
created: "2024-08-02T23:07:16Z"
upvotes: 2
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2666"
---

# Is there a JsonSchema for the JSON/Yaml rulesets?

I’m looking to improve my (YAML) ruleset writing experience, and auto-completion would be nice.

Applying a JsonSchema to YAML file is easy in VSCode and provide some sort of autocompletion.

Does such a schema already exist ?

I started experimenting with one, trying to autogenerate one from the spectral/core interfaces and type, but the result is sub-optimal. I think hand-writing a schema could result in something decent but would require more work and would need to be kept in sync when/if the ruleset syntax change.

Such a schema could be registered in [schema store.org](https://www.schemastore.org/) to be automatically applied on `.spectral.json` and `.spectral.yml` files on supported IDEs

Would this be of interest?
