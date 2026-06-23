---
number: 2291
title: "Rule for Confirming Header Exists in OpenAPI Spec"
category: "Q&A"
author: "blueksy1012"
created: "2022-09-21T20:37:46Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2291"
---

# Rule for Confirming Header Exists in OpenAPI Spec

Hello everyone. I am trying to write a custom rule in Spectral to ensure that requests use a "Ocp-Apim-Subscription-Key" parameter in the header. I am having trouble getting the rule to work. Can someone please help me?

This is what my custom rule looks like:
`  requests-include-authorization:
    description: "Requests must specify subsciprition key in headers"
    message: "Requests must specify subsciprition key in headers"
    severity: error
    given: $..parameters.[?(@.in === 'header')].name
    then:
        field: "Ocp-Apim-Subscription-Key"
        function: truthy`

I have attached part of
[ApiSpec.txt](https://github.com/stoplightio/spectral/files/9620171/ApiSpec.txt)
 the open api spec (.yaml) file to the discussion. 

I want my custom rule to apply when I remove the "Ocp-Apim-Subscription-Key" parameter from line 20. But it's not working.
My custom rule file is also attached here: 
[customrules.txt](https://github.com/stoplightio/spectral/files/9620194/customrules.txt)

Any help would be greatly appreciated. Thanks.

## ✅ Accepted answer — @EPKLISN

I like to do it this way:

### the rule ###
given:
      - $.paths..parameters
    severity: hint
    then:
      function: parameters-header
      functionOptions:
        name: Content-Location
        type: header


### the function ###
module.exports = (targetVal, opts) => { 
  const { name } = opts;
  const { type } = opts;
  if (targetVal) {
    for (let i = 0; i < targetVal.length; i++) {
      if (targetVal[i].in == type && targetVal[i].name == name) {
        return;
      }
    }     
  return [{ message: 'Missing header parameter.' }];
  }
}
