---
number: 1795
title: "`kebab` casing rule complains about \"single letter\" digits"
state: "closed"
labels: ["wontfix"]
author: "tsimbalar"
created: "2021-08-31T09:44:41Z"
updated: "2021-09-14T10:28:52Z"
comments: 6
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1795"
---

# `kebab` casing rule complains about "single letter" digits

**Describe the bug**
Custom rules which enforce `kebab-case` flag string items made of a single character that is a digit. 


**To Reproduce**

1. Given a custom rule like this one in `.spectral.yaml` : 

```yaml
  enum-kebab-case:
    description: 'enum values should be kebab-case'
    message: '{{value}} is an enum member and should be kebab-case. ({{path}})'
    severity: error
    resolved: false
    given: "$.components.schemas..enum[*]"
    then:
      function: casing
      functionOptions:
        type: kebab
```

2. and a `./docs/swagger.yaml` document like this : 

```yaml
components:
    schemas:
        Phq9AnswerValue:
            type: number
            enum:
                - '0'
                - '1'
                - '2'
                - '3'
            description: "The value for a PHQ-9 Questionnaire question.\n- 0 = \"Not at all\"\n- 1 = \"Several days\"\n- 2 = \"More than half the days\"\n- 3 = \"Nearly every day\""
info:
    title: mindset-app-service
    version: 0.1.0
    description: 'API for Mindset App'
    contact: {}
openapi: 3.0.0
paths: {}
servers:
    -
        url: /
```

3. Run this CLI command 

```
npx spectral lint ./docs/swagger.yaml
```

4. See error
```
OpenAPI 3.x detected

/Users/yc00067/dev/mindset/mindset-app-service/docs/swagger.yaml
  1:1     hint  openapi-tags                   OpenAPI object should have non-empty `tags` array.
 3:25  warning  oas3-unused-components-schema  Potentially unused components schema has been detected.                                      components.schemas.Phq9AnswerValue
 6:19    error  enum-kebab-case                0 is an enum member and should be kebab-case. (#/components/schemas/Phq9AnswerValue/enum/0)  components.schemas.Phq9AnswerValue.enum[0]
 7:19    error  enum-kebab-case                1 is an enum member and should be kebab-case. (#/components/schemas/Phq9AnswerValue/enum/1)  components.schemas.Phq9AnswerValue.enum[1]
 8:19    error  enum-kebab-case                2 is an enum member and should be kebab-case. (#/components/schemas/Phq9AnswerValue/enum/2)  components.schemas.Phq9AnswerValue.enum[2]
 9:19    error  enum-kebab-case                3 is an enum member and should be kebab-case. (#/components/schemas/Phq9AnswerValue/enum/3)  components.schemas.Phq9AnswerValue.enum[3]

✖ 6 problems (4 errors, 1 warning, 0 infos, 1 hint)

```

**Expected behavior**
It should accept `'0'` pr `'1'` as valid `kebab-case` given they are a single character

**Environment (remove any that are not applicable):**
 - Library version: `5.9.2`
 - OS: `macOS 11.3.1`
