---
number: 1638
title: "oas3-valid-schema-example error being returned for NULL property on example for schema with property defined as \"nullable: true\""
state: "closed"
labels: []
author: "jasonbstanding"
created: "2021-05-25T11:51:31Z"
updated: "2021-07-21T10:31:33Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1638"
---

# oas3-valid-schema-example error being returned for NULL property on example for schema with property defined as "nullable: true"

**Describe the bug**
I raised this question on the "APIs You Won't Hate" slack channel (https://apisyouwonthate.slack.com/archives/C6EEULS87/p1621938764024100) and was advised this was likely a Spectral bug:

I can't express a schema-level `example` containing a null value on a nullable field in a way that validates with Spectral (and doesn't return `oas3-valid-schema-example  {property} property type should be string`).

Once we've run a script over Stoplight Studio's `x-examples` collection and transformed them into schema-level `example`s, Spectral CLI starts failing our doc.

**To Reproduce**

1. Given this OpenAPI schema documents of the form:
```
title: Room response object
type: object
description: Room example
properties:
  id:
    type: integer
  description:
    type: string
    nullable: true
  location:
    $ref: ./Data.LookupTableValue.yaml
  room_capacity:
    type: integer
  room_code:
    type: string
  telephone_extension:
    type: string
    nullable: true
example:
  id: 123
  description: Standard room example
  location:
    id: 1
    name: Ground floor
    position: 2
    deleted_at:
    system_value: false
  room_capacity: 50
  room_code: Fictional room
  telephone_extension: x123
```
2. Run this CLI command `spectral lint -r {ruleset for OAS3} open-api.yaml`
3. See error
```
{filepath}/api-doc-external/Paths/School.Data.Rooms.yaml
 23:19  error  oas3-valid-schema-example  `deleted_at` property type should be string  get.responses[200].content.application/json.schema.items
```

**Expected behavior**
I'd expect that if the schema *without* an `example` validates with `nullable` as an acceptable property that it ought to be able to cope with being given an example containing `null` for that property.

**Environment (remove any that are not applicable):**
 - Library version: spectral 5.9.1
 - OS: OS X 10.14.6
