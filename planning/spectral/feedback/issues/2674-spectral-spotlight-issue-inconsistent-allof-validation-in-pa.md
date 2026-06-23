---
number: 2674
title: "Spectral Spotlight Issue: Inconsistent allOf Validation in Parameters vs Responses"
state: "open"
labels: []
author: "Krzysztof-Kolodziejczyk"
created: "2024-08-29T08:46:05Z"
updated: "2024-08-29T08:48:09Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2674"
---

# Spectral Spotlight Issue: Inconsistent allOf Validation in Parameters vs Responses

Spectral Spotlight Issue: Inconsistent `allOf` Validation in Parameters vs Responses
*Version: 6.11.1*  
*Node.js Version: 20.17.0*

There is an inconsistency in how Spectral validates `allOf` elements within `parameters` versus `responses` in an OpenAPI document. When using `allOf` in `parameters`, all elements are validated correctly. However, in the `responses` section, if one of the `allOf` elements contains a `$ref` to a definition that has already been validated, Spectral does not validate any remaining elements within the `allOf` structure.

== To Reproduce

1. Given this OpenAPI document:
   ```yaml
   paths:
     /somepath:
       post:
         parameters:
           - in: body
             schema:
               allOf:
                 - $ref: '#/definitions/SomeElement'
                   example: {}
                 - properties:
                     name:
                       description: User's name.
                       type: string
                       example: John
                     id:
                       description: User's identifier.
                       example: 1
         responses:
           '200':
             description: 'Successful response.'
             schema:
               allOf:
                 - $ref: '#/definitions/SomeElement'
                   example: {}
                 - properties:
                     name:
                       description: User's name.
                       type: string
                       example: John
                     id:
                       description: User's identifier.
                       example: 1

2. Observe the behavior:
   
   * In the `parameters` section, Spectral correctly validates all elements under the `allOf`.
   
   * In the `responses` section, if an `allOf` element contains a `$ref` to a definition that was previously validated (e.g., `- $ref: '#/definitions/SomeRequest'`), Spectral skips validation for the remaining elements within the `allOf` structure.

== Expected behavior

Spectral should validate all elements in the `allOf` structure within both `parameters` and `responses`, regardless of whether an element is a `$ref` to a previously validated definition. Consistent behavior is expected across all sections of the OpenApi document
