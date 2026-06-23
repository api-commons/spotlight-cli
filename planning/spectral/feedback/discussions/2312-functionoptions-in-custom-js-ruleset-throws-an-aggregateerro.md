---
number: 2312
title: "functionOptions in custom js ruleset throws an AggregateError"
category: "Q&A"
author: "vsantarini"
created: "2022-10-19T16:12:19Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2312"
---

# functionOptions in custom js ruleset throws an AggregateError

Hi all,

I am trying to use a custom .js ruleset for my own linting project, I found out that if I define a rule that uses a function that requires functionOptions (such as pattern), spectral throws an aggregate error (as if functionOptions is not contemplated inside the validation schemas):

Here the rule:

-------------------------------------------------

"description-starts-with-uppercase": {
    severity: "warn",
    formats: [oas3],
    description: "Description must not start with lowercase.",
    message: "Description must not starts with a lowercase",
    given: "$..description",
    then: {
      field: "@key",
      function: pattern,
      **functionOptions**:{
        notMatch: "^[a-z]",
        },
      },
      },

------------------------------------------------------------
Here the error:

Uncaught (in promise) AggregateError
    at assertValidRuleset (assertions.js:19:1)
    at new Ruleset (ruleset.js:33:1)
    at Spectral.setRuleset (spectral.js:72:1)

Has anyone got the same issue? 

Thanks a lot
