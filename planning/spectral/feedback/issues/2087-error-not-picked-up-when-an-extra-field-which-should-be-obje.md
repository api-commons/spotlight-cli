---
number: 2087
title: "Error not picked up when an extra field which should be object is defined as string."
state: "open"
labels: ["triaged"]
author: "KiranReddy0808"
created: "2022-03-11T08:30:03Z"
updated: "2024-05-31T12:35:14Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2087"
---

# Error not picked up when an extra field which should be object is defined as string.

**Describe the bug**
Given a path to value which is not an object (string, number) from given in rule. When a field is defined for the rule. There is no error being triggered saying the field is not defined.


**To Reproduce**

1. OAS
``` yaml
    openapi: 3.0.0  
    info:  
        title: Book Library API (OAS3.0)  
        version: '1.10' 
        apiname: api-two 
        description: Sample OAS API  
```
2. Rule
``` yaml
    oas-title-of-apiname:
        description: apiname should have a title property.
        message: apiname doesn't have a title property
        severity: warn
        given: $.info.apiname
        then:
           field: title
           function: defined
```

**Expected behavior**
An error should be expected that there is no field named "title" under path info.apiname. There is no error because getLintTargets(targetValue, field) returns the original targetValue and path as empty array (which is not of type void 0 for defined function to pickup) when typeof targetValue is not object.

![image](https://user-images.githubusercontent.com/41705758/157829311-da9746b6-cc1e-4316-8f20-1832ed244b40.png)

Rules: https://github.com/KiranReddy0808/basic-oas-spec/blob/main/.spectral.yaml
API: https://github.com/KiranReddy0808/basic-oas-spec/blob/main/api-two.yaml

GitHub Action Run: https://github.com/KiranReddy0808/basic-oas-spec/actions/runs/1967689613

**Environment (remove any that are not applicable):**
 - Library version: [e.g. 6.0.0 and earlier]


**Additional context**
As extra fields are allowed in OAS. Incorrect definition of those fields will go through.
I'm not sure if it's expected behaviour. So please close this ticket if it's already discussed or is correct!

Thanks!
