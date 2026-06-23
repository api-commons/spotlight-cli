---
number: 725
title: "Breaking oas rule changes"
state: "closed"
labels: ["breaking"]
author: "philsturgeon"
created: "2019-10-31T18:34:51Z"
updated: "2019-12-19T10:10:26Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/725"
---

# Breaking oas rule changes

With v5.0 coming, now is the time to make changes to the OpenAPI ruleset.

1. [x] `example-value-or-externalValue` make it recommended (spec says `The value field and externalValue field are mutually exclusive.`).

2. [ ] `no-eval-in-markdown` we should recommend this as a safety precaution, people can turn it off if they _want_ eval in there.

3. [x] `openapi-tags` we should make this recommended

4. [x] `operation-summary-formatted` delete it. Summary is meant to be shorter than description, so is normally used for title case not sentences. That's usually the description. 

5. [x] `model-description` lets delete it, ive never written one and we currently dont elevate models to a point where this data is used anyway

6. [ ] `valid-example` oops we split this into multiple rules and forgot to update the docs 😅  (while you're in there `extends: "spectral: oas3"` has a space in it in the [oas3 description](https://stoplight.io/p/docs/gh/stoplightio/spectral/docs/reference/openapi-rules.md#oas3))

7. [x] the remaining ones in oas2 and oas3 will need to be turned into single rules which effect both formats if they share the same `given`, or made into two seperate rules if they do not. 

Let's make sure the docs are totally up to date with the new reality of the rulesets and list this all in the migration guide.
