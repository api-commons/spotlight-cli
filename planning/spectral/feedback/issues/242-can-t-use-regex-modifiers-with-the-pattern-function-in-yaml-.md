---
number: 242
title: "Can't use regex modifiers with the pattern function in YAML rulesets"
state: "closed"
labels: []
author: "arno-di-loreto"
created: "2019-06-03T13:42:08Z"
updated: "2019-06-14T14:10:10Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/242"
---

# Can't use regex modifiers with the pattern function in YAML rulesets

### **I'm submitting a...**
  - [x] bug report
  - [ ] feature request

### What is the current behavior?

When using the pattern function in a YAML ruleset with spectral-cli, regex with modifiers (`/^.*dto$/i` for example) do not work.
They work when using the spectral module and defining ruleset in node.

YAML ruleset and swagger 2.0 YAML file to reproduce the bug can be found here: https://gist.github.com/arno-di-loreto/63c307e14d8a01928b98625191d59bb7

Not working in YAML ruleset
```
rules:
  schema-name-is-valid-not-working:
    summary: Definition name must not use dto suffix
    given: $.definitions
    severity: 0
    then:
      field: "@key"
      function: pattern
      functionOptions:
        notMatch: /^.*dto$/i
```

Working in node:
```
const rules = () => {
  return { 
    'definition-name-is-valid': {
      summary: 'Definition name must not use dto suffix',
      given: '$.definitions',
      type: RuleType.STYLE,
      severity: DiagnosticSeverity.Error,
      then: {
        field: '@key',
        function: RuleFunction.PATTERN,
        functionOptions: {
           notMatch: /^.*dto$/i
        }
      }
    }
}
```

### What is the expected behavior?

Being able to use regex with modifiers with the pattern function (for both match and notMatch options) in YAML rulesets.

### Please tell us about your environment:

  - spectral-cli -v: @stoplight/spectral/3.0.3 win32-x64 node-v8.11.3

### Other information

I think that when the ruleset is loaded, the /^.*dto$/i regex is loaded as a simple string and not a regex.

Proposed modification in  https://github.com/stoplightio/spectral/blob/master/src/functions/pattern.ts

- Analyzing the match and notMatch regexes to extract regex and modifiers
- Then use new Regex(regex, modifiers)

(Idea based on this stackoverflow response: https://stackoverflow.com/a/874742, I'm not sure about the regex to parse regex, maybe a simple substring would be simpler)

I think I can do it myself and propose a pull request if it is actually a bug (I may have miss something)
