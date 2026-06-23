---
number: 2399
title: "Partial Anchor Support"
state: "open"
labels: ["t/bug", "triaged", "c/spectral"]
author: "govindrai"
created: "2023-02-13T18:32:10Z"
updated: "2024-05-31T12:34:49Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2399"
---

# Partial Anchor Support

**Describe the bug**
There is only partial support for Anchors. This valid yaml produces errors:

```
#api.yaml
openapi: 3.0.3
info:
  title: title
  description: desc
    records
  version: 0.1.0
servers:
  - url: "/abc"
paths:
  "/":
    get:
      description: Retrieves all affiliate_url_templates record for a domain
      operationId: getAffiliateUrlTemplatesForDomain
      parameters:  &DomainQueryParam
        - in: query
          name: domain
          required: true
          schema:
            type: string
      responses:
        '200':
          description: Successful
          content:
            application/json:
              schema:
                "$ref": "#/components/schemas/AffiliateUrlTemplatesForDomainResponse"
        '400': &BadRequestResponse
          description: Bad Request
          content:
            application/json:
              schema:
                "$ref": "#/components/schemas/ErrorResponse"
    post:
      description: Creates or Updates an affiliate_url_templates record for a domain
        and channel
      operationId: upsertAffiliateUrlTemplateForDomainAndChannel
      parameters:
        - *DomainQueryParam
        - &ChannelQueryParam
          in: query
          name: channel
          required: true
          schema:
            "$ref": "#/components/schemas/ChannelOasModel"
        - in: query
          name: url_template
          description: An empty value for this field will make this channel non-monetized.
            Always send this field if it exists.
          required: false
          schema:
            type: string
      responses:
        '201': &SimpleSuccessResponse
          description: Successful
          content:
            application/json:
              schema:
                "$ref": "#/components/schemas/SimpleResponse"
        '400': *BadRequestResponse
    delete:
      description: Deletes an affiliate_url_templates record for a domain and channel
      operationId: deleteAffiliateUrlTemplateForDomainAndChannel
      parameters:
        - *DomainQueryParam
        - *ChannelQueryParam
      responses:
        '200': *SimpleSuccessResponse
        '400': *BadRequestResponse
components:
  schemas:
    ChannelOasModel:
      type: string
      enum:
        - DEFAULT
        - WEB
        - EMAIL
        - OFFERS
        - ITEMS
    AffiliateUrlTemplateOasModel:
      type: object
      properties:
        domain:
          type: string
        channel:
          type: string
        urlTemplate:
          type: string
          nullable: true
      required:
        - domain
        - urlTemplate
        - channel
    AffiliateUrlTemplatesForDomainResponse:
      type: array
      items:
        "$ref": "#/components/schemas/AffiliateUrlTemplateOasModel"
    ErrorResponse:
      type: object
      properties:
        errorCode:
          type: string
        message:
          type: string
      required:
        - errorCode
        - message
    SimpleResponse:
      type: object
      properties:
        message:
          type: string
      required:
        - message
```

Errors produced:
```
...
 41:12    error  oas3-schema     `0` property type should be object.                 paths./.post.parameters[0]
 67:12    error  oas3-schema     `0` property type should be object.                 paths./.delete.parameters[0]
...
```

**To Reproduce**

1. Given above OAS file
2. Run spectral on it. 
3. See error

**Expected behavior**
A clear and concise description of what you expected to happen.
Neither of those aliases should result in error. Instead the aliases should be correctly replaced with value of their anchor and validated. This works just fine in any yaml validator and converter.

**Environment (remove any that are not applicable):**
 - Library version: 6.5.0
