---
number: 1629
title: "Error in the referred schema is reported on the element which contains the $ref"
state: "open"
labels: ["t/bug", "triaged", "json-refs", "p/documented"]
author: "aleung"
created: "2021-05-20T05:43:48Z"
updated: "2024-05-31T12:35:04Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1629"
---

# Error in the referred schema is reported on the element which contains the $ref

**Describe the bug**
Error in the referred schema is reported on the element which contains the `$ref`.

**To Reproduce**

1. Given this OpenAPI document `monte.yaml`
``` yaml
openapi: 3.0.0
paths:
  /{scsAsId}/subscriptions:
    post:
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/MonitoringEventSubscription'
      responses:
        "200":
          description: 200 Created. 
components:
  schemas:
    MonitoringEventSubscription:
      type: object
      properties:
        monitoringEventReport:
          $ref: '#/components/schemas/MonitoringEventReport'
    MonitoringEventReport:
      type: object
      properties:
        locationInfo:
          $ref: '#/components/schemas/LocationInfo'
    LocationInfo:
      type: object
      properties:
        enodeBId:
          type: string
```
2. Spectral rule `spectral.yaml`
```yaml
rules:
  property-names-camel-case:
    description: Property names MUST be written in camelCase
    message: "`{{property}}` is not camelCase"
    type: style
    severity: warn
    given: $..properties
    then:
      field: "@key"
      function: casing
      functionOptions:
        type: camel
```
2. Run this CLI command `spectral lint -r spectral.yaml monte.yaml`
3. See error
```
 18:31  warning  property-names-camel-case  `monitoringEventReport` is not camelCase  components.schemas.MonitoringEventSubscription.properties.monitoringEventReport
 23:22  warning  property-names-camel-case  `locationInfo` is not camelCase           components.schemas.MonitoringEventReport.properties.locationInfo
 28:18  warning  property-names-camel-case  `enodeBId` is not camelCase               components.schemas.LocationInfo.properties.enodeBId
```

**Expected behavior**
Only `enodeBId` is not in camelCase. The first two warnings are invalid.

**Environment (remove any that are not applicable):**
 - Library version: 5.9.1

**Aditional context**
I try to not use `$ref` and expend the schema in place:
```yaml
openapi: 3.0.0
paths:
  /{scsAsId}/subscriptions:
    post:
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/MonitoringEventSubscription'
      responses:
        "200":
          description: 200 Created. 
components:
  schemas:
    MonitoringEventSubscription:
      type: object
      properties:
        monitoringEventReport:
          type: object
          properties:
            locationInfo:
              type: object
              properties:
                enodeBId:
                  type: string
```

The output is correct. There is single warning pointing to the exact location, without warnings on the parent elements:
```
 24:26  warning  property-names-camel-case  `enodeBId` is not camelCase  components.schemas.MonitoringEventSubscription.properties.monitoringEventReport.properties.locationInfo.properties.enodeBId
```
