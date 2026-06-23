---
number: 2661
title: "$..items provides more than required"
state: "open"
labels: []
author: "Selphkon"
created: "2024-07-30T15:54:48Z"
updated: "2024-07-30T15:54:48Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2661"
---

# $..items provides more than required

**Describe the bug**
Making a rules that all the array must have items referred  by an object.
The  _given: "$..items"_ returns more elements than foreseen

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document 

[Banking-2.json](https://github.com/user-attachments/files/16430368/Banking-2.json)


3. Run this Rule 

  dc-array-must-refer-to-an-object:
    description: "Array must refer to an object"
    message: "Error: {{error}} - Path: {{path}} - Property: {{property}} - Value: {{value}}"
    severity: warn
    given: "$..items"
    then:
      field: $ref
      function: truthy

5. See error

Not only "items" elements are returned but others also 

**Expected behavior**

On this API, we shouldn't have any warning due to this rule

**Screenshots**
For example here 
<img width="770" alt="image" src="https://github.com/user-attachments/assets/02581304-09ce-4413-ab0d-fbf867b5a011">
No "items" is present, but the rule has selected it

**Environment (remove any that are not applicable):**
 - Library version: [v1.1.2]
 - OS: [Windows 11]
 - Browser: [Visual studio Code with the Plug in Spectral v1.1.2]
