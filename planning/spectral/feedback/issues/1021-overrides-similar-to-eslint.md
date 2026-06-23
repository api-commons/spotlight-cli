---
number: 1021
title: "\"Overrides\" similar to eslint"
state: "closed"
labels: ["enhancement", "released"]
author: "philsturgeon"
created: "2020-03-19T13:24:48Z"
updated: "2021-07-07T12:20:24Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1021"
---

# "Overrides" similar to eslint

**User story.**
As a user with a few different types of YAML and JSON in a repo, none of which have any particular format, I'd like to be able to apply Spectral rules and rulesets to specific files and folders without accidentally applying irrelevant rules to other files.

**Is your feature request related to a problem?**

Right now I am making a ruleset and Spectral VS Code is applying this custom ruleset to .spectral.yml, and everything in .spectral.yml is being applied to other random JSON files too. 

<img width="1286" alt="image" src="https://user-images.githubusercontent.com/67381/77071898-b5191000-69e4-11ea-8315-f6fd935420e0.png">

**Describe the solution you'd like**

Configuration based on glob patterns looks like a good place to start.

https://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns

For example, picking a particular ruleset for a bunch of files:

```yaml
"overrides": [
    {
      "files": ["src/data/actions/*.yaml"],
      "extends": [{
         "./rulesets/actions.yaml
      }]
    },
    {
      "files": ["src/data/jobs/*.yaml"],
      "extends": [{
         "./rulesets/jobs.yaml
      }]
    }
```

This could be combined with custom rules for specifically those files:

```yaml
"overrides": [
    {
      "files": ["src/data/jobs/*.yaml"],
      "extends": "extends": [{
         "./rulesets/jobs.yaml
      }],
      "rules": {
        // business as usual rules here
      }
    }
```

Finally, setting a particular format, even a custom format, we can do this:

```yaml
"overrides": [
    {
      "files": ["src/apis/*.yaml"],
      "format": "raml"
    }
```

Then Spectral will know: those files are raml and a ruleset applying to format: "raml" will work fine.

This solves the issue we have currently where only CLI users get formats and nobody else can do anything about them.
