---
number: 1329
title: "Ability to embed custom functions in ruleset YAML/JSON"
state: "closed"
labels: ["enhancement"]
author: "tillig"
created: "2020-09-10T18:34:48Z"
updated: "2021-05-12T09:07:57Z"
comments: 8
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1329"
---

# Ability to embed custom functions in ruleset YAML/JSON

**User story.**
As a Spectral custom ruleset developer, I can put my custom rule functions in the same file as the ruleset YAML/JSON, so that I can more easily distribute my custom rules.

**Is your feature request related to a problem?**
I'm trying to write a rule that mandates all schema objects have examples defined, but the complexity of _where_ you can define various examples (at the property level, at the object level, etc.) makes it nigh impossible to do without a custom function. However, while we have a .spectral.yaml in our various projects, there is some organizational reluctance to start distributing the custom ruleset as two or more files - one with the rules, one with the function(s). Keeping them both in sync is seen as a challenge, and adding more dot-files to repos is something we're pretty careful about. It's getting crowded in there.

**Describe the solution you'd like**
A way to embed the custom functions in the ruleset YAML/JSON file, similar to how you can embed inline script in an `azure-pipelines.yml`.

Using [the example in the docs](https://meta.stoplight.io/docs/spectral/docs/guides/5-custom-functions.md) I imagine it might look like this:

```yaml
functions:
- equals
  - properties:
      value:
        type: string
        description: Value to check equality for
  - code: |
      module.exports = (targetVal, opts) => {
        const { value } = opts;

        if (targetVal !== value) {
          return [
            {
              message: `Value must equal {value}.`,
            },
          ];
        }
      };
rules:
  my-rule:
    message: "{{error}}"
    given: "$.info"
    then:
      function: "equals"
      functionOptions:
        value: "abc"
```

Granted, this could make for some larger YAML files, but most folks aren't poking around in there anyway.

From a dev experience standpoint it'd be easy enough to put together some sort of build chain that "assembles" the inline code from separate JS to make testing or whatever easier, but the portability would be there after build, sort of like a "webpack for Spectral rulesets."
