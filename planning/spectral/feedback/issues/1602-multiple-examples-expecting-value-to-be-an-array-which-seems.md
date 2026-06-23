---
number: 1602
title: "Multiple examples expecting `value` to be an array, which seems incorrect according to the spec."
state: "closed"
labels: ["t/bug"]
author: "daveshanley"
created: "2021-05-06T13:22:32Z"
updated: "2021-05-08T18:25:25Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1602"
---

# Multiple examples expecting `value` to be an array, which seems incorrect according to the spec.

I've noticed that when using `examples` in OAS 3, spectral gets upset that the `value` property is not an `array`. However this is not how I interpret the specification defined via https://swagger.io/specification/

`examples` contains one or more `Example Object` which has a `value` property of type `Any`.  Also the examples used to show multiple examples (sorry, a mouthful) defined at https://swagger.io/docs/specification/adding-examples/ does not use an array for multiple examples, they are defined by a label.

```
      responses:
        "200":
          description: A tasty burger for you to eat. Wide variety of products to choose from
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Burger'
              examples:
                quarterPounder:
                  summary: A juicy two handler sammich
                  value: 
                    name: Quarter Pounder with Cheese
                    numPatties: 1
                filetOFish:
                  summary: A tasty treat from the sea
                  value: 
                    name: Filet-O-Fish
                    numPatties: 1
```

This seems valid to me, however spectral does not agree. I don't want to place the items into an array if I don't need to - however I want to keep my linting green!

```
`value` property type should be arrayspectral(oas3-valid-oas-content-example)
```

I am using the spectral plugin in VSCode.
