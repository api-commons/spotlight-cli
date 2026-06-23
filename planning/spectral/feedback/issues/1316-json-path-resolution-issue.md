---
number: 1316
title: "JSON Path resolution issue"
state: "closed"
labels: []
author: "gfiehler"
created: "2020-08-27T21:33:31Z"
updated: "2020-08-29T22:39:23Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1316"
---

# JSON Path resolution issue

I am working on a new rule that is meant to enforce property names in schemas to be camelCase. My rule is
properties-camel-case:
     description: Should paths be camelCase.
     message: '{{property}} should be camelCase.'
     severity: warn
     given:  "$..components.schemas.*..properties[*]~"
     then:
       function: casing
       functionOptions:
         type: "camel"

when I run the json path (given) in the https://jsonpath.com/ I get back just properties within Schema Objects.  However when I run this rule in spectral it also evaluates some Schema Objects, but not all.

Our naming standard is that Schema Objects are named PascalCase and properties are named with camelCase.

I have attached my openapi document 
here is my spectral report
  4:12     error  semver                            Specs should follow semantic versioning. 0.1 is not a valid version.
  72:29  warning  paths-kebab-case                  /squirrels/{squirrelId} should be kebab-case (lower case and separated with hyphens)
 140:20    error  operation-operationId-unique      Every operation must have a unique `operationId`.
 171:20    error  operation-operationId-unique      Every operation must have a unique `operationId`.
 227:15  warning  no-http-basic                     HTTP Basic is a pretty insecure way to pass credentials around, please consider an alternative.
 236:16    error  oas3-valid-oas-parameter-example  `example` property type should be string
 547:15  warning  properties-camel-case             StartDate should be camelCase.
 557:16  warning  properties-camel-case             StartDateX should be camelCase.
 572:25  warning  properties-camel-case             LastUpdateTimestamp should be camelCase.
 577:20  warning  properties-camel-case             LastUpdateUser should be camelCase.
 610:20  warning  properties-camel-case             startDateX should be camelCase.
 647:24  warning  properties-camel-case             SquirrelId should be camelCase.
 678:23  warning  properties-camel-case             CorrelationId should be camelCase.

✖ 13 problems (4 errors, 9 warnings, 0 infos, 0 hints)
StartDate, StartDateX, LastUpdateTimestamp, LastUpdateUser are schema level objects and not a property so should not have been found in the path evaluation.  SquirrelId and CorrelationId were and should have been caught.  When I run this on jsonpath.com these do not show up I get
[
  "squirrelType",
  "location",
  "sightingDate",
  "notes",
  "squirrelStatus",
  "startDate3",
  "startDate6",
  "startDateX",
  "squirrelTrackingActive",
  "startDate",
  "endDate",
  "Start-Date",
  "endDate",
  "numberActionsExecuted",
  "SquirrelId",
  "last-Update-User",
  "lastUpdate_Timestamp",
  "CorrelationId",
  "self",
  "httpMethod",
  "messageType",
  "errorCode",
  "errorDescription",
  "errorMessage"
]

I have been unable to determine why I get that subset of schema objects and not others, but since they do not show up when I run this in the test jsonpath tools I am not sure why this is occurring.  

As a secondary side note, as far as I understand it, camelCase is allowed to end with a capitol letter so not sure why startDateX is caught as a camel case error, but startDate3 is not.  

Any suggestions would be appreciated I have run with -v but I do not get any more information.

[testopenapi4.json.zip](https://github.com/stoplightio/spectral/files/5138842/testopenapi4.json.zip)
