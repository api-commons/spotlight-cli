---
number: 572
title: "Add {{path}} as option for messages in rulesets"
state: "closed"
labels: []
author: "kylesykes"
created: "2019-09-18T20:19:11Z"
updated: "2019-10-03T21:44:07Z"
comments: 11
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/572"
---

# Add {{path}} as option for messages in rulesets

**User story.**
As a writer of rulesets against a large OA3 spec which is split into many different files that get resolved prior to running Spectral, I want to be able to have the `message` in the ruleset be able to reference the current `{{path}}` that the error was triggered from to help guide where the issues were in the non-resolved files (where line numbers are useless).

**Is your feature request related to a problem?**
We use Spectral as a CLI tool in a CI pipeline, and triggers on PR changes to a very hefty spec which gets first resolved, then linting the resolved spec.  Currently we have over 300+ routes, and if someone makes a change to a large majority of routes (for example, adding oauth scopes to security), we can write a rule to validate that we actually added something to them all with the following ruleset:
```
security-zero-or-one-oauth-scope:
    description: Every OAuth2 secured endpoint defines scopes
    given: $..paths.*[?( @property != 'parameters' )].security[0]
    severity: error
    message: 'Errored at {{property}}... Error message is: {{error}}'
    then:
      field: oauth2
      function: length
      functionOptions:
        min: 1
```

However if the validation fails, we might only see the line number and the property name (in our case, `oauth2`), of which there might be hundreds to manually sift through in the _non-resolved_ files to find the issue because the line number is meaningless when trying to look at the non-resolved OA3 files(see screenshot below).

**Describe the solution you'd like**
If it's easy to add in given the context, it would be awesome if we could give the option to dump out the current path which caused the error.

So a message of:
`message: 'Errored at {{path}}... Error message is: {{error}}'`
could give a message of:
`Errored at paths["/v1/errorCodes"].get.security[0].oauth2 ... Error message is: min length is 1`

We did experiment with running Spectral against the unresolved OA3 files, but it wasn't successful with detecting things correctly.  I'm not sure what sort of resolving is going on under the hood, but if the solution is us doing something incorrectly with regards to using Spectral against the unresolved spec, that would also be a great solution (since it should identify the offending file, where the line number _may_ be useful depending on how things were resolved).

We are open to any suggestions to help devs easily identify where they've broken a rule!  Thanks!

**Additional context**
Sample error currently: 
![image](https://user-images.githubusercontent.com/3663141/65180605-de9bb380-da22-11e9-8729-9b60e67b8f9e.png)

Experimenting with using Spectral on an unresolved file produces a bunch of errors which fail to identify path params in this particular file:
![image](https://user-images.githubusercontent.com/3663141/65182118-30920880-da26-11e9-9e12-a6e7b5c1d3ce.png)
