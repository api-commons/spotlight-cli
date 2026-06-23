---
number: 2438
title: "Built in rule to validate request and response media types"
category: "Rulesets"
author: "savage-alex"
created: "2021-04-29T12:19:55Z"
upvotes: 1
comments: 3
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2438"
---

# Built in rule to validate request and response media types

**User story.**
As an API designer,
I want to have my api definition validated and checked that the content types are valid
So that I create beautiful consistent API definitions my consumers love 

**Is your feature request related to a problem?**
Currently its possible to create unknown media types (well its always possible but it can introduce accidental errors such as
![image](https://user-images.githubusercontent.com/25430683/116549459-6a5b0e80-a8ed-11eb-8858-65ee65c4539a.png)


**Describe the solution you'd like**
Spectral could offer a build in allow / accept list of media types (expect the usual base set and perhaps some extension) to highlight where errors have been made as shown above

**Additional context**
Handmade rule based on https://github.com/openapi-contrib/style-guides/blob/c5326037027afb8bd0ce5a5d4ad88be7b048ef64/apisyouwonthate.yml#L130

```
response-media-type:
    description: >-
      Every response body SHOULD be either application/json,
      application/xml or text/csv
    formats:
      - oas3
    severity: warn
    given: $.paths.[*].responses[?(@property.match(/^(2)/))].content.*~
    then:
      function: enumeration
      functionOptions:
        values:
          - application/json
          - application/xml
          - text/csv
```
