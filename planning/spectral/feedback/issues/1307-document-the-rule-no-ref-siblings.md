---
number: 1307
title: "Document the Rule: `no-$ref-siblings`"
state: "closed"
labels: []
author: "stelloprint"
created: "2020-08-19T23:02:31Z"
updated: "2020-08-21T18:23:16Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1307"
---

# Document the Rule: `no-$ref-siblings`

**User story.**
My OpenAPI file contains a `$ref` next to an additional property `nullable: false` and I am using Spectral to correct it. If I run Spectral in CLI this rule is surfaced however the rule is not documented under the OpenAPI Ruleset: https://meta.stoplight.io/docs/spectral/docs/reference/openapi-rules.md

**Is your feature request related to a problem?**
I want to learn more about this rule. Stoplight Studio also enforces this rule and directs users to the Spectral docs, however this rule is not described.

**Describe the solution you'd like**
When Spectral surfaces the error `$ref cannot be placed next to any other properties` with the name `no-$ref-siblings`, I can find a description of this error in the docs.
