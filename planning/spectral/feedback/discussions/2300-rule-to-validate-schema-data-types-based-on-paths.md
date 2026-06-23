---
number: 2300
title: "Rule to Validate Schema Data Types Based on Paths"
category: "Q&A"
author: "blueksy1012"
created: "2022-09-30T19:13:15Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2300"
---

# Rule to Validate Schema Data Types Based on Paths

I am looking for some help with a custom Spectral rule that I'm trying to write. 

Essentially the rule I'm working on should validate that schemas return the expected data type based on the path.

Examples:
"GET resources/" should return an array in the schema for the success (ex. 200) response
"GET resources/{id}" should return an object in the schema for the success (ex. 200) response
"POST resources/" should return an object in the schema for the success (ex. 200) response
"PUT resources/{id}" should return an object  in the schema for the success (ex. 200) response

The OpenAPI spec file that I am validating looks something like this (when it comes to paths & schemas):

`paths:
  '/resources/{id}':
    get:
        responses:
             '200':
                   schema:
                        $ref: '#/components/schemas/getLoadSuccessResponse'


components:
  schemas:
       getLoadSuccessResponse:
            type: array
            properties:
                 shipmentId:
                 type: string`



This is what the rule I have looks like so far:

`schemas-return-correct-data-types:
    description: Schemas should return the correct data types
    message: "{{error}} Schemas should return the correct data types..."
    severity: warn
    given: 
      - $.paths.*[post,put].responses[[schema]]
      - $.paths.*[get].responses[[schema]]
    then:
        field: type
        function: pattern
        functionOptions:
          match: "object"
`

The problem I am having is that the second given selector for the rule is selecting all GET paths (regardless if the path contains "/{id}" or not. Is there a way to change the selector for the rule so that it will only apply to the GET paths that contain "{id}"?

For example, I want to the rule above to only apply if the path is "GET resources/{id}". But I don't want it the rule to apply if the path is "GET resources/"

Is anyone able to help me with this?

## ✅ Accepted answer — @blueksy1012

Update: I found a way to do this after more research online:

Rules:

#This rule finds GET paths without the /id (ex. GET resources/) and ensures that the schema for the 200 response returns type "array".

  schemas-return-array-data-types-when-expected:
    description: Schemas should return the correct data types
    message: "{{error}} : '{{path}}' (Schemas should return the correct data types. See API Standards page in Confluence (Route Verb Purposes section) for more information.)"
    severity: warn
    given: 
      $.paths[?( @property.match('^((?!.*\}$).)*$') )].get.responses['200'][[schema]]
    then:
        field: type
        function: pattern
        functionOptions:
          match: "array"

#This rule ensures that certain paths return "object" in the schema for the 200 response. (Ex. "GET resources/{id}", "POST resources/", and "PUT resources/{id}")

   schemas-return-object-data-types-when-expected:
    description: Schemas should return the correct data types
    message: "{{error}} : '{{path}}' (Schemas should return the correct data types. See API Standards page in Confluence (Route Verb Purposes section) for more information.)"
    severity: warn
    given: 
      - $.paths[?( @property.match('^((?!.*\}$).)*$') )].post.responses['200'][[schema]]
      - $.paths[?(@property.match(/.*\/{.*}.*/))].get.responses['200'][[schema]]
      - $.paths[?(@property.match(/.*\/{.*}.*/))].put.responses['200'][[schema]]
    then:
        field: type
        function: pattern
        functionOptions:
          match: "object"
