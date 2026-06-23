---
number: 2348
title: "problem with Given that contains path with parent (^)"
state: "open"
labels: ["t/bug", "p/medium", "triaged", "reviewed-medium"]
author: "dantuch"
created: "2022-11-23T13:30:45Z"
updated: "2024-05-31T12:34:41Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2348"
---

# problem with Given that contains path with parent (^)

**Describe the bug**
I'm facing an issue with a complex given path - 
`  given:  "$...schema[?(@property === 'format' && @ === 'date-time')]^^^.example" `
 it seems to give false results. even the context.path in js function is giving not a precise path. I think that ^^^ is affecting the path. in the example that I provided I wanted to get into a component (schema), that has example field, and also has a schema field with a format of date-time. ... Due to some weir reason i was not able to use anything like `$...schema[?(@.format === 'date-time')]^^^` so it seemed i needed to work with `@property` - why's that? Such paths work great `"$.paths..put.parameters[?(@.in == 'header' && @.required == true && @.name == 'If-Match')]"` is format a keyword that needs escaping?
So when I finally got it working and Im able to validate my example - if it is wrong, path provided by spectral seems incorrect `components.parameters` and it even is not inline with `context.path` from custom js function, that has a value of `components,parameters,example `

**To Reproduce**

1. Given this ruleset
```extends: spectral:oas

functions:
 - wrong-pattern

rules:
  operation-operationId-unique: "off"
  oas3-unused-component: "off"
  operation-description: "off"

  date-time-example-outside-schema:
    description: Every date-time format need to have example field as following
      'example 2022-07-06T08:59:33.842Z'
    message: "{{error}}"
    severity: warn
    resolved: false
    given:
      - "$...schema[?(@property === 'format' && @ === 'date-time')]^^^.example"
    then:
      function: wrong-pattern
      functionOptions:
        match: '\b[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z\b'

  date-time-example-in-schema:
    description: Every date-time format need to have example field as following
      'example 2022-07-06T08:59:33.842Z'
    severity: warn
    resolved: false
    given:
      - "$..[?(@.format === 'date-time')].example"
    then:
      field: "example"
      function: pattern
      functionOptions:
        match: '\b[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z\b'

overrides:
  - files:
      - "api/common-v1.oas.yaml"
    rules:
      oas3-unused-component: "off"
```

and js function:

```import {pattern} from "@stoplight/spectral-functions";


export default (input, options, context) => {

    if (input === null) {
        return;
    }

    let a = pattern(input, options)
    if (!!a) {
        return [
            {
                message: 'found wrong value ' + input + ' in path: ' + context.path
            },
        ];
    }
    return;
};

```
2 Given this OpenAPI/AsyncAPI document:

```openapi: 3.0.3
info:
  title: foo
  version: 1.0.14
  description: foo
  contact:
    name: foo
    email: apigw_team@foo.com
servers:
  - url: http://localhost:8280/gateway/admin/webhooks/v1

paths:
  {}

components:
  parameters:
    startDateParam:
      name: startDate
      in: query
      description: Start date for period of event receiving.
      required: true
      schema:
        type: string
        format: date-time
        example: "2022-05-03T07:00:00.0002Z"

    endDateParam:
      name: endDate
      in: query
      description: End date for period of event receiving. Default value - now.
      required: false
      schema:
        type: string
        format: date-time
      example: "2022-05-03T07:05:00.0001Z"
```

2. Run this CLI command '....'
 spectral lint file.yaml --verbose

4. See error - paths provided by spectral are super different - the one, create by rule that does not use parent in path, works fine (components.parameters.startDateParam.schema.example). The other looks super random and has missing center of the path ( components.parameters or a path from js function - I'd assume it should have the same value.... = components,parameters,example ): 

``` 16:14  warning  date-time-example-outside-schema  found wrong value 2022-05-03T07:05:00.0001Z in path: components,parameters,example                 components.parameters

 25:18  warning  date-time-example-in-schema       Every date-time format need to have example field as following 'example 2022-07-06T08:59:33.842Z'  components.parameters.startDateParam.schema.example
```
6. 

**Expected behavior**
path created by rule date-time-example-outside-schema should be components.parameters.**endDateParam.schema**.example instead of just components,parameters,example or even components.parameters.


**Screenshots**
If applicable, add screenshots to help explain your problem.
<img width="1646" alt="image" src="https://user-images.githubusercontent.com/3526697/203557584-c3f16a69-1a5c-48ad-a902-ee7af5115d16.png">


**Environment (remove any that are not applicable):**
 - Library version: 6.5.1
 - OS: macos

**Additional context**
Add any other context about the problem here.
