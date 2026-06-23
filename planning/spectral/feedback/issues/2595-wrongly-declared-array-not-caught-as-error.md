---
number: 2595
title: "Wrongly declared array not caught as error"
state: "closed"
labels: ["t/bug", "released", "p/high", "triaged", "team/bad-news-bears", "jira"]
author: "benjamin-mogensen"
created: "2024-03-08T07:36:32Z"
updated: "2024-06-07T15:12:13Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2595"
---

# Wrongly declared array not caught as error

**Describe the bug**
The OAS file below has a wrongly declared array in the response. It states `type: array` and last line, and is missing an `items` key. Spectral does not catch this as an error. However, deploying such OAS in Apigee will not work as Apigeee uses Swagger parser which catches this error.

```yaml
openapi: 3.0.3
info:
  title: Wrong array
  description: Wrong array
  version: 1.0.0
  contact:
    name: IDA Support Team
    email: ida_team@maersk.com
    url: https://www.maersk.com/contactus
  license:
    url: https://terms.maersk.com/api-license-terms
    name: Maersk 1.0
servers:
  - url: https://api-stage.net
paths:
  /translatetoen:
    post:
      operationId: post-translation-request
      description: Sent a text for translation
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                inputText:
                  type: string
              required:
                - inputText
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  highestPrecendenceLanguage:
                    type: string
                  translatedText:
                    type: string
                  allIdentifiedLanguages:
                    type: array
                    items:
                      type: array
```

**To Reproduce**

1. Use above OAS, create file `oas-array-wrong.yaml`
2. Run CLI `spectral lint oas-array-wrong.yaml`
3. Output is `No results with a severity of 'error' found!`

**Expected behavior**
The wrongly declared array should be treated as an error as you cannot have an array declared without stating what type the items are.

**Screenshots**
NA

**Environment (remove any that are not applicable):**
 - Library version: 6.11.0
 - OS: MacOS
 - Browser: NA
