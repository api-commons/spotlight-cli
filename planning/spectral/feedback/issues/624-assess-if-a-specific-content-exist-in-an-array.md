---
number: 624
title: "Assess if a specific content exist in an array"
state: "closed"
labels: ["question"]
author: "Amachua"
created: "2019-10-02T08:49:33Z"
updated: "2019-11-12T09:18:53Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/624"
---

# Assess if a specific content exist in an array

**User story.**
As a API designer, When I define a list of values in a specification, then I want to ensure that it does contains specific values.

**Is your feature request related to a problem?**
I've two main concerns with this request:
- When I define a new endpoint, I want to ensure that the authorization header is always defined in the header;
- Another technical constraint with an additional layer used in our CI/CD process.

**Describe the solution you'd like**
For the description, let's consider the following specification:
```YAML
openapi: 3.0.0

x-format-version: "1.0"

info:
  title: Dummy title
  description: Dummy description
  version: 1.0.0

paths:
  /resources:
    get:
      description: Dummy description
      responses:
        "401":
          description: All is good
      parameters:
        - name: authorization
          description: Bearer token. The token is formatted as a JWT. Format "Bearer JWT".
          in: header
          type: string
          required: true
      
    patch:
      description: Dummy description
      responses:
        "400":
          description: Something is missing here
```
For the GET request, everything is alright but for the patch, the authorization header isn't define --> an error must be prompted here.

I've imagine the following rule for that:
```
  authorization-header:
    type: validation
    severity: error
    recommended: true
    message: "Endpoint should have a 'authorization' header. Error: {{error}}"
    given: "$.paths.*[?( @property === 'get' || @property === 'put' || @property === 'post' || @property === 'delete' || @property === 'options' || @property === 'head' || @property === 'patch'  )].parameters*[?( @in === 'header' )]"
    then:
      function: propertyContentFound
      functionOptions:
        field: name
        match: ^authorization$
```

Also, I though that such feature could be used for the revamp of the `operation-2xx-response` rule. 

```
  operation-2xx-response-v2:
    type: validation
    severity: error
    recommended: true
    message: "Endpoint should have a 'authorization' header. Error: {{error}}"
    given: "$.paths.*[?( @property === 'get' || @property === 'put' || @property === 'post' || @property === 'delete' || @property === 'options' || @property === 'head' || @property === 'patch'  )].responses"
    then:
      function: propertyContentFound
      functionOptions:
        field: @key
        match: ^2[0-9]{2,2}$
```

If you need some more information on this point, I would be glad to help you with that. :)
