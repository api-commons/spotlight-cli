---
number: 656
title: "Extend Rules with custom properties"
state: "closed"
labels: []
author: "radicarl"
created: "2019-10-09T08:05:48Z"
updated: "2019-11-12T14:20:12Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/656"
---

# Extend Rules with custom properties

**User story.**
We use your great linter in our CI-Pipeline to enforce that the API-Specification follow our API-Guidelines. We have a wrapper script that calls spectral and converts the json output in a human readable format. It would be great, if we could add additional information to our custom rules, which are added to the json output of each violation of this rule. We want to use this to add a link to the specific part of the guide where the rule is described.

**Describe the solution you'd like**
Defining own rules in .spectral.yml like this
```yaml
rules:
  my-rule:
    description: Some short text
    custom-fields:
       link-to-guide: http://company.com/api-guide.html#my-rule
       another-field: some value
   # ...
```
and getting the following json if the rule was violated:
```json
{
   "code":"my-rule",
   "path":[ ...  ],
   "message":"Some short text",
   "severity":0,
   "range":{ ...},
   "source":"openapi.yml",
   "link-to-guide":"http://company.com/api-guide.html#my-rule",
   "another-field":"some value"
},
```
