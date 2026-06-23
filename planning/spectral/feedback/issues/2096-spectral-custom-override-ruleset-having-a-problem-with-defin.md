---
number: 2096
title: "Spectral custom override ruleset, having a problem with defining the files - not working as mentioned in document"
state: "closed"
labels: []
author: "mgyanesh"
created: "2022-03-17T10:49:38Z"
updated: "2022-06-27T19:39:27Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2096"
---

# Spectral custom override ruleset, having a problem with defining the files - not working as mentioned in document

**Describe the bug**
We are using the custom "override" spectral function ( https://meta.stoplight.io/docs/spectral/ZG9jOjI1MTg5-custom-rulesets#overrides ) in one of our use cases to turn off the rules for the specific file by defining path to the file location in "files" option.

Issue : When we mention the file location as below format, the rule is not finding the mentioned path to the file and its not turning off the rule for that specific file.

"overrides": [
        {
          "files": ["common-types/**/patch.json"],
          "rules":{
              "rule-example": "off"
          }
        }
    ]

**To Reproduce**

1. Given this OpenAPI document 'example_openapi3.json'
2. Run this CLI command '$spectral lint example_openapi3.json --ruleset .spectral.json --verbose'
3. See error, the rules for the mentioned files patch.json, our rules should ignore that file. But that is not happening.

**Expected behavior**
A clear and concise description of what you expected to happen.
- We are expecting rule name "rule-example" should be turn off for the file patch.json, which is in this path location "common-types/**/patch.json"


**Environment (remove any that are not applicable):**
 - Library version: spectral version 6.3.0
 - OS: Tried in Windows10

**Additional context**
Attached the sample file to check this error scenario. 
[sample.zip](https://github.com/stoplightio/spectral/files/8284017/sample.zip)
