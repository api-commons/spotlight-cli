---
number: 2235
title: "Add an *effective* flavor for AsyncAPI documents where `traits` have been applied"
state: "open"
labels: ["enhancement", "triaged", "AsyncAPI"]
author: "c-pius"
created: "2022-08-10T14:48:59Z"
updated: "2024-05-31T12:36:34Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2235"
---

# Add an *effective* flavor for AsyncAPI documents where `traits` have been applied

**User story.**
As a developer, I want to write `AsyncAPI` rules working on the *"effective"* AsyncAPI document. *Effective* meaning that [Operation](https://www.asyncapi.com/docs/reference/specification/v2.4.0#operationObject), and [Message](https://www.asyncapi.com/docs/reference/specification/v2.4.0#messageTraitObject) traits (see fields) have been applied to the document, similar as done with `$ref` [resolving](https://meta.stoplight.io/docs/spectral/e5b9616d6d50c-custom-rulesets#resolved).

**Is your feature request related to a problem?**
We want to validate that some of our common header attributes are always defined for certain messages. However, some define those headers directly on each message, others define a common trait that is mixing those headers into the messages. This makes it very hard to validate the message for such common headers as we need to consider multiple places where the info may be, including varying naming of the traits and even the algorithm for applying traits.

**Example:**

Based on the [AsyncAPI Streetlights](https://www.asyncapi.com/docs/tutorials/streetlights). We have the `LightMeasured` message where the `myCommonHeader` is not directly defined on the message, but mixed in via the `CommonHeaders` trait. Checking that `myCommonHeader` is defined on the message is hard as I have to a) check if it is directly on the message, b) check what traits are defined on the message and further check each of those if the header is defined there (even considering that traits are applied in-order using json-merge-patch algorithm). 

```yaml
asyncapi: '2.4.0'
info:
  title: Streetlights API
  version: '1.0.0'
  description: |
    The Smartylighting Streetlights API allows you
    to remotely manage the city lights.
channels:
  light/measured:
    publish:
      summary: Inform about environmental lighting conditions for a particular streetlight.
      operationId: onLightMeasured
      message:
        name: LightMeasured
        payload:
          type: object
          properties:
            id:
              type: integer
              minimum: 0
              description: Id of the streetlight.
            lumens:
              type: integer
              minimum: 0
              description: Light intensity measured in lumens.
            sentAt:
              type: string
              format: date-time
              description: Date and time when the message was sent.
        traits:
          - $ref: CommonHeaders
components:
  messageTraits:
    CommonHeaders:
      headers:
        properties:
          myCommonHeader:
            type: string
            description: Common header used by many messages.
```

Resulting effective message schema:
```yaml
name: LightMeasured
payload:
  type: object
  properties:
    id:
      type: integer
      minimum: 0
      description: Id of the streetlight.
    lumens:
      type: integer
      minimum: 0
      description: Light intensity measured in lumens.
    sentAt:
      type: string
      format: date-time
      description: Date and time when the message was sent.
headers:
  properties:
    myCommonHeader:
      type: string
      description: Common header used by many messages.
```



**Describe the solution you'd like**
Similar to the`$ref` [resolving](https://meta.stoplight.io/docs/spectral/e5b9616d6d50c-custom-rulesets#resolved), provide a possibility for rules to work on either the *"plain"* AsyncAPI without applied traits, or the "*effective*" AsyncAPI where traits have been applied.

**Additional context**
Note that traits in AsyncAPI also have their [flaws and potential for undesired behavior](https://github.com/asyncapi/spec/issues/505). But actually, I think that providing validations rules based on the effective AsyncAPI would be a means to reduce errors made because of wrongly applying traits.
