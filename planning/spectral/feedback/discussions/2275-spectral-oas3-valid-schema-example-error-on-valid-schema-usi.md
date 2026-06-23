---
number: 2275
title: "Spectral oas3-valid-schema-example error on valid schema using allOf inheritance"
category: "Q&A"
author: "adriaanbastien"
created: "2022-09-14T09:05:03Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2275"
---

# Spectral oas3-valid-schema-example error on valid schema using allOf inheritance

Hello community,

I have a question regarding spectral linting / validation.
I get a failure on something that (i think) is valid.

spectral linting gives me an error against oas3-valid-schema-example;
`470:16 error oas3-valid-schema-example "example" property type must be object components.schemas.wrongParametersError_invalidParameters.example
`
the objects in my openapi specification look as followed;

`
components:
problem:

      type: object

      description: The standarized Problem JSON according to RFC7807.

      properties:

        type:

          type: string

          format: uri

          description: The type of the problem.

          example: "https://example.com/wrong-parameters-error"

        title:

          type: string

          description: The details of the problem.

          example: "Your request parameters didn't validate."

        status:

          type: string

          description: The http status code of the problem / error.

          example: "404"

        detail:

          type: string

          description: A detailed description of the error.

          example: "Please check the detailed information and reasons of parameter invalidation."

      required:

      - type

      - title

      - status

           

    wrongParametersError:

     allOf: # Combines the main `Error` schema with `wrongParametersError`-specific properties

        - $ref: '#/components/schemas/problem'

        - type: object

          description: Error object along with the reasons of errors and wrong parameters as an array of objects.

          # all other properties specific to a `wrongParametersError`

          properties:

            invalidParameters:

              type: array

              description: A list of invalid parameters.

              items:

                type: object

                description: Parameter identifiers and their error reasons.

                properties:

                  parameterName:

                    type: string

                    description: The identifier of the invalid input parameter.

                    example: "type"

                  errorReason:

                    type: string

                    description: The error reason of invalid parameter.

                    example: "Given input parameter is not an allowed account type."

                required:

                - parameterName

                - errorReason`

can somebody help me out with this one? Or check if the same error occurs with them?
thanks in advance,

Adriaan
