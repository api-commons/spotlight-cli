---
number: 2667
title: "severity level returned by custom function is not taking into account"
state: "open"
labels: []
author: "fmazeiras"
created: "2024-08-14T08:15:57Z"
updated: "2024-08-14T08:15:57Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2667"
---

# severity level returned by custom function is not taking into account

**Describe the bug**
severity displayed into the output should take into account severity returned by custom function

**To Reproduce**

1. using the following swagger [petstore-openapi.json](https://github.com/user-attachments/files/16609503/petstore-openapi.json)
2. using the spectral rule 
formats: ["oas3","oas2"]
functions: [serverUrl]
rules:
  OAPI-U1-server-dns-oas3:
    description: The service server is available via a DNS name
    message: '{{description}}. {{error}}'
    severity: error
    given: "$.servers[*]"
    formats: [oas3]
    then:
      function: serverUrl
      functionOptions:
        test: OAPIU1


4. with the following custom function 
[serverUrl.js.txt](https://github.com/user-attachments/files/16609564/serverUrl.js.txt)

6. Run this CLI command 'spectral lint petstore-openapi.json --format json --ruleset spectral.yaml'

8. See error
![bug spectral](https://github.com/user-attachments/assets/205bafd8-0885-4777-99c2-7ff4b9a74982)


**Expected behavior**
severity displayed into the output should take into account severity returned by custom function

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 6.11.1
 - OS: Windows 11


**Additional context**
Add any other context about the problem here.
