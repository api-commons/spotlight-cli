---
number: 2289
title: "Find script tags in an openapi spec"
category: "Q&A"
author: "blueksy1012"
created: "2022-09-21T15:12:51Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2289"
---

# Find script tags in an openapi spec

Hello. I am new to Spectral. I am trying to write a custom rule to ensure that there are no script tags in an open api spec. But I can't seem to get it to work. I have tried with both the truthy and the pattern functions, but with no luck. These are rules that I have tried in my custom2.yaml file:

Truthy:
`no-script-tags-in-spec:
    description: Spec should not contain any script tags
    message: "Spec should not contain any script tags"
    severity: error
    given: $
    then:
      field: "<script>"
      function: truthy`

Pattern:
`  no-script-tags-in-spec:
    description: Spec should not contain any script tags
    message: "Spec should not contain any script tags"
    severity: error
    given: $
    then:
      function: pattern
      functionOptions:
        notMatch: "<[^>]*script"`

The OpenAPI spec file (.yaml) that I am validating looks something like this. The custom rule is not finding the <script> tag in in the info.title field. In the end what I am after is a rule that will catch script tags anywhere in the spec file. 
`openapi: 3.0.1
info:
  title: LoadShare <script>test</script>
  version: '1.0'`

Can someone please help me with this?

## ✅ Accepted answer — @blueksy1012

I have found that Spectral actually has a default rule for this in their built in "OAS" ruleset. The rule is called "no-script-tags-in-markdown". The rule can be inherited by adding this line to the ruleset file:  #extends: [[spectral:oas, all]]

https://meta.stoplight.io/docs/spectral/4dec24461f3af-open-api-rules
