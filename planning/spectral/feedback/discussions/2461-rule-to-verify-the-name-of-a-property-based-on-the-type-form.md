---
number: 2461
title: "Rule to verify the name of a property based on the type / format"
category: "Rulesets"
author: "jayanthpatki91"
created: "2023-04-27T11:43:00Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2461"
---

# Rule to verify the name of a property based on the type / format

I have a rule that says that a particular field name should contain the suffix "Date" if the field is of type String and format datetime. 
I was wondering if i can somehow capture the information using a function in the "given" keyword:

rules:
  check-string-property-suffix:
    description: Check if a string property has a particular suffix in its name
    type: style
    severity: warning
    recommended: true
    given:
      # Select all properties with type string
      field: $.properties
      function: "patternProperties"
      functionOptions:
        pattern: "^.*$"
        match: all
      element:
        field: type
        value: "string"
    then:
      field: key
      pattern: ".*_suffix$"
      message:  "Property key '{{key}}' should have '_suffix' as a suffix."
