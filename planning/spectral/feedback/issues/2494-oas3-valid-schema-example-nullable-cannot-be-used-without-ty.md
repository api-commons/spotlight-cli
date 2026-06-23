---
number: 2494
title: "oas3-valid-schema-example nullable cannot be used without type"
state: "closed"
labels: []
author: "davidkeaveny"
created: "2023-06-29T01:18:28Z"
updated: "2024-05-03T14:27:07Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2494"
---

# oas3-valid-schema-example nullable cannot be used without type

When using an OpenAPI specification where a property is defined using a `$ref` and that property is marked as nullable, the linter is returning an error when an example is given.

The following OAS3.0 specification illustrates the problem:

```
components:
  schemas:
    address:
      type: object
      description: A geographical address.
      properties:
        street:
          type: string
          description: The street address of the location.
          nullable: true
        suburb:
          type: string
          description: The suburb of the location.
          nullable: true
        city:
          type: string
          description: The city of the location.
          nullable: true
    createPersonalDetails:
      type: object
      description: |
        A request to create new personal details.
      example:
        homeAddress:
          street: 1 Short Street
          suburb: Kensington
          city: Sydney
        personalEmailAddress: john.smith@gmail.com
      properties:
        homeAddress:
          description: The person's home address.
          allOf:
            - $ref: '#/components/schemas/address'
          nullable: true
        emailAddress:
          type: string
          description: The person's email address.
          format: email
          nullable: true
```

This returns the following error:

```
61:15 error  oas3-valid-schema-example  "nullable" cannot be used without "type"  components.schemas.createPersonalDetails.example
```

I will get the same error if I:

* change `nullable` to false
* remove the `homeAddress` from the example

I can only clear the error if I either remove the example altogether, or if I change the definition to:

```
      properties:
        homeAddress:
          $ref: '#/components/schemas/address'
```

but that means the field is no longer nullable, and I have lost the description - neither of these are good solutions.

Any thoughts?

 - Spectral-Cli: 6.8.0
 - NodeJS: 18.16.0
 - OS: Window 11 (22H2)
