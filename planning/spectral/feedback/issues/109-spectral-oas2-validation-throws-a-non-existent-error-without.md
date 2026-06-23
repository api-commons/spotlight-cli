---
number: 109
title: "Spectral OAS2 validation throws a non-existent error without path value"
state: "closed"
labels: ["released"]
author: "jerzyn"
created: "2019-03-26T17:04:18Z"
updated: "2019-03-28T14:13:09Z"
comments: 17
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/109"
---

# Spectral OAS2 validation throws a non-existent error without path value

Running spectral OAS2 rules and functions sets on a OAS2 `.yaml` file on all tests (2 different `yaml files`) results in a cryptic error without a `"path"` parameter:
```
{
    "name": "oas2-schema",
    "summary": "Validate structure of OpenAPIv2 specification.",
    "message": "should NOT have additional properties: 0",
    "path": [],
    "severity": 50,
    "severityLabel": "error"
}
```
Those files don't throw any errors in any other validation tool (swagger editor, apiary, etc.). I am happy to provide them if needed.

### **I'm submitting a...**
  - [X] bug report
  - [ ] feature request

### What is the current behavior?

Running:
```
spectral.addFunctions(oas2Functions());
spectral.addRules(oas2Rules());
const results = spectral.run(myOAS);
```
on a OAS2 `.yaml` file

### What is the expected behavior?
Do not throw this error or be more specific on it's origin and place in the file.

### What is the motivation / use case for changing the behavior?
User experience and compliance with OAS2 specification

### Please tell us about your environment:

  - Version: @stoplight/spectral@1.2.0
  - Framework: [ ]
  - Language: [all]


### Other information

It also throws 
```
oasOpParams expects a resolved object, but none was provided. Results may not be correct.
oasPathParam expects a resolved object, but none was provided. Results may not be correct.
```
which does not say anything of value without more explanation.
