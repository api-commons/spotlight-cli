---
number: 2254
title: "How to check for elements that are undefined in custom rulesets"
category: "Q&A"
author: "rkInfo9"
created: "2022-08-25T05:06:58Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2254"
---

# How to check for elements that are undefined in custom rulesets

I have a yaml file I am trying to lint. Why doesn't the truthy function see that element is missing. I tried the function "undefined" too. When I lint, I am not seeing any errors. How do I check for custom elements that are undefined? Any help would be appreciated. 

Example  Spec: (only a part of it)
```
openapi: 3.0.0
info:
  title: BillingMs
  description: This micro service involves retrieval of billing details
  my-custom-element:   
      teamName: Billing
      #teamEmail: abcd@example.com 
```
Ruleset:
```
my-custom-rule:
   description: "Team Email Rule" 
   given: "$.info.my-custom-element.teamEmail"
   severity: warn
   then:
      - function: truthy
