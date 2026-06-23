---
number: 2373
title: "Spectral doesnt report when maxItems or minItems are applied against non array parameters"
state: "open"
labels: ["triaged"]
author: "savage-alex"
created: "2022-12-22T11:16:55Z"
updated: "2024-05-31T12:34:45Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2373"
---

# Spectral doesnt report when maxItems or minItems are applied against non array parameters

Given a parameter is NOT an array
When maxItems and or minItems is provided
Then no message is returned to the designer informing them they have made an invalid openAPI

Works for single and items within an array


Example:

`
- name: id
        in: query
        description: Car Ids
        schema:
          type: array
          minItems: 0
          maxItems: 10
          items:
            type: integer
            minItems: 0
            maxItems: 1000000
        example: [3098,12547,22047]
`

`     
 - name: id
        in: query
        description: Car Ids
        schema:
          type: string
          minItems: 0
          maxItems: 10
        example: 'foo'
`
