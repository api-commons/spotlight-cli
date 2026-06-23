---
number: 1751
title: "Schema Required property check no longer working"
state: "open"
labels: ["triaged"]
author: "savage-alex"
created: "2021-07-21T14:36:36Z"
updated: "2024-05-31T12:35:08Z"
comments: 6
reactions_total: 2
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1751"
---

# Schema Required property check no longer working

I am running spectral 5.8.1 and given the following schema:

` schemas:
    Car:
      type: object
      required:
        - id
        - manufacturerName
      properties:
        id:
          description: The ID of the car
          type: string
          example: 'a123-4d567-c123'
        manufacturName:
          description: The name of the manufacturer
          type: string
          example: Ford `

spectral is not complaining that required property manufacturerName is missing (typoed) It DOES error IF this schema is used as part of an array and a top level schema example doesnt have the property but not at this level. I am sure this worked before but does no longer show via the CLI or VS code plugin.

Full def is here if you want it https://app.swaggerhub.com/apis/AdvancedComputerSoft/demo-advanced-car-inventory/1.0.0#/Car
