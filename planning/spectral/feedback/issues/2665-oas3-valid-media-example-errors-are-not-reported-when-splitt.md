---
number: 2665
title: "oas3-valid-media-example - Errors are not reported when splitting rules into individual rule files and extending them"
state: "closed"
labels: []
author: "Hambones"
created: "2024-08-02T18:13:53Z"
updated: "2024-08-19T21:58:13Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2665"
---

# oas3-valid-media-example - Errors are not reported when splitting rules into individual rule files and extending them

**Describe the bug**
Errors are not getting reported if we split rules into individual .yaml files, and then use a single ruleset to extend both files.

**To Reproduce**

1. Given this OpenAPI document "myOas.yaml" :
```
openapi: 3.0.3
paths:
  /search_schema_error:
    POST:
      requestBody:
        content:
          application/json:
            schema: 
              $ref: "#/components/schemas/Search"
  
  /search_media_error:
    POST:
      requestBody:
        content:
          application/json:
            schema: 
              $ref: "#/components/schemas/Search"
            examples:
              example1:
                value:
                  criteria: # This media-example is wrong because it is an array
                    - field: 'name1'       
                    - field: 'name2'       

components:
  schemas:
    Search:
      type: object
      properties:
        criteria:
          type: object 
      example:
        criteria:  # This schema-example is wrong because it uses an array instead of an object
          - field: 'name1'       
          - field: 'name2'  
```

Given a rule file "./spectral_rules/oas3-valid-media-example.yaml"
```
formats: ["oas3"]
extends: 
  - [spectral:oas, off]

rules:
  oas3-valid-media-example: true
```

Given a rule file "./spectral_rules/oas3-valid-schema-example.yaml"
```
formats: ["oas3"]
extends: 
  - [spectral:oas, off]

rules:
  oas3-valid-schema-example: true
```

Now you can have a ruleset that extends both of those files above.

Given a ruleset ".spectral-debug-extends.yaml"
```
extends:    
  - spectral_rules/oas3-valid-media-example.yaml 
  - spectral_rules/oas3-valid-schema-example.yaml
```

3. Run this CLI command
"npx spectral lint -r .spectral-debug-extends.yaml myOas.yaml"

4. See error
The output incorrectly only shows 1 error:
```
 33:18  error  oas3-valid-schema-example  "criteria" property type must be object  components.schemas.Search.example.criteria

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

Please note that if you run each rule individually, each one will report errors:
"npx spectral lint -r ./spectral_rules/oas3-valid-media-example.yaml myOas.yaml"
output:
```
 21:28  error  oas3-valid-media-example  "criteria" property type must be object  paths./search_media_error.POST.requestBody.content.application/json.examples.example1.value.criteria

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints) 
```

"npx spectral lint -r ./spectral_rules/oas3-valid-schema-example.yaml myOas.yaml"
output:
```
33:18  error  oas3-valid-schema-example  "criteria" property type must be object  components.schemas.Search.example.criteria

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```

Also, if you use a single ruleset and include both rules, then it works correctly.

Given a ruleset ".spectral-debug-rules.yaml"
```
formats: ["oas3"]
extends: 
  - [spectral:oas, off]

rules:
  oas3-valid-media-example: true
  oas3-valid-schema-example: true
```

When I run CLI command
"npx spectral lint -r .spectral-debug-rules.yaml myOas.yaml"
output
```
 21:28  error  oas3-valid-media-example   "criteria" property type must be object  paths./search_media_error.POST.requestBody.content.application/json.examples.example1.value.criteria
 33:18  error  oas3-valid-schema-example  "criteria" property type must be object  components.schemas.Search.example.criteria

✖ 2 problems (2 errors, 0 warnings, 0 infos, 0 hints)
```
5. Expected Results
Using the ".spectral-debug-extends.yaml" should have the same result as using ".spectral-debug-rules.yaml" since both methods invoke the same rules.

The expected output is:
```
 21:28  error  oas3-valid-media-example   "criteria" property type must be object  paths./search_media_error.POST.requestBody.content.application/json.examples.example1.value.criteria
 33:18  error  oas3-valid-schema-example  "criteria" property type must be object  components.schemas.Search.example.criteria

✖ 2 problems (2 errors, 0 warnings, 0 infos, 0 hints)
```


**Environment (remove any that are not applicable):**
 - @stoplightio/spectral version : 6.11.1
 - npm version: 10.1.0

 - OS: Windows 11
 - My terminal is via "git for windows", which installs "mintty 3.7.0"
 
**Additional context**
My company has written many custom rules and we needed a way to test each rule independently. This led to our design of only putting one rule into each 'ruleName.yaml' file and then using a single ".spectral.yml" ruleset that just "extends" all the individual rule files. This appears to be working correctly for other rules, so I believe this bug is specific to the "oas3-valid-media-example" rule not working when its extended with additional rules.
