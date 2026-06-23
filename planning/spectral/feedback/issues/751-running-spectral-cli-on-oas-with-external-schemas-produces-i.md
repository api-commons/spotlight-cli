---
number: 751
title: "Running spectral CLI on OAS with external schemas produces incorrect results"
state: "closed"
labels: ["t/bug"]
author: "huksley"
created: "2019-11-07T13:26:29Z"
updated: "2019-12-17T07:17:55Z"
comments: 8
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/751"
---

# Running spectral CLI on OAS with external schemas produces incorrect results

**Description**

When running spectral on OpenAPI 3 specification with externally defined schemas, spectral gives errors for completely valid schemas and OpenAPI Specification.

**PLEASE NOTE** Running spectral on schemas folder alone gives no errors 🤷‍♂ 

**To Reproduce**

1. Checkout this repo with branch https://github.com/huksley/maas-tsp-api/tree/spec-schemas
2. Install packages `npm install`
2. Build local schemas `npm run build`
3. Run this CLI command `npm run lint`
4. See errors:

```bash 
/home/test/maas-tsp-api/schemas/core/components/bike-station.json
 34:3  error  parser  Duplicate key: required

/home/test/maas-tsp-api/schemas/core/components/state-log.json
 49:7  error  parser  Duplicate key: additionalProperties

/home/test/maas-tsp-api/schemas/core/customer.json
 104:7  error  parser  Duplicate key: required
 105:7  error  parser  Duplicate key: additionalProperties

/home/test/maas-tsp-api/schemas/core/components/fare.json
 31:5  error  parser  Duplicate key: type

/home/test/maas-tsp-api/schemas/core/components/terms.json
 120:11  error  parser  Duplicate key: type

/home/test/maas-tsp-api/schemas/core/modes/MODE_BICYCLE.json
 23:9  error  parser  Duplicate key: type

/home/test/maas-tsp-api/schemas/core/modes/MODE_SHARED_BICYCLE.json
 11:9  error  parser  Duplicate key: type

/home/test/maas-tsp-api/specs/booking.yml
 251:15  error  oas3-schema  /paths//bookings/options/get/responses/200 should have required property '$ref'
```

**Example case schemas/core/components/bike-station.json breakdown **

For following schema (when referenced from OAS): 
```json
{
  "$id": "http://maasglobal.com/core/components/bike-station.json",
  "description": "MaaS bike station schema",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "location": {
      "$ref": "../../../schemas/core/components/units-geo.json#/definitions/location"
    },
    "slots": {
      "type": "object",
      "properties": {
        "total": {
          "type": "number",
          "minimum": 0
        },
        "empty": {
          "type": "number",
          "minimum": 0
        },
        "bikes": {
          "type": "number",
          "minimum": 0
        }
      },
      "required": ["total", "empty", "bikes"]
    }
  },
  "required": ["id", "name", "location"]
}
```

produces following error:
```bash
 34:3  error  parser  Duplicate key: required
```

**Expected behavior**
These errors should not be reported.

**Environment (remove any that are not applicable):**
 - Library version: 4.2.0
 - OS: MacOS 10.14.6
 - Node: 12.11.1
