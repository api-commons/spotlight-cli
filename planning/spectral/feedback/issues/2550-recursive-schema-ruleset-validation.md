---
number: 2550
title: "Recursive Schema Ruleset Validation"
state: "closed"
labels: ["chore"]
author: "coffee-coder99"
created: "2023-10-30T14:07:53Z"
updated: "2023-10-30T14:45:34Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2550"
---

# Recursive Schema Ruleset Validation

**Chore summary**
Sorry I am making this a chore, it's a question, and tried to link a discussion I found, but the discussion is over 2 years old.

[old issue](https://github.com/stoplightio/spectral/discussions/1959)

**Tasks**
- [x] Show coffee-coder99 how to do recursive schema ruleset validation


**Additional context**
```
webhooks:
  TheWebhookEvent:
    post:
      operationId: com.stuff.TheWebhookEvent
      summary: summary
      description: The Webhook Event
      x-kafka-topic: KAFKA-TOPIC-THING
      x-filters:
        or:
          - or:
            - criteriaType: three
          - and:
            - criteriaType: two
          - criteriaType: one
```

The ruleset defined.
```
        'webhooks-x-filters-schema': {
            message: 'Webhook x-filters item must follow the defined schema. See the OpenAPI Style Guide for more details.',
            severity: DiagnosticSeverity.Error,
            given: '$.webhooks.*.*',
            then: {
                field: 'x-filters',
                function: schema,
                functionOptions: {
                    schema: {
                        type: 'object',
                        minItems: 0,
                        anyOf: [
                            {
                                type: 'object',
                                properties: {
                                    or: { type: 'array', items: { $ref: '#' } }
                                }
                            },
                           {
                                type: 'object',
                                properties: {
                                    and: { type: 'array', items: { $ref: '#' } }
                                }
                            },
                            {
                                type: 'object',
                                required: ['criteriaType'],
                                properties: {
                                    criteriaType: {
                                        type: 'string',
                                        enum: ['one', 'two', 'three']
                                    }
                                }
                            }
                        ]
                    }
                }
            }
        },
```

As mentioned in the discussion I have tried many ways to reference the current schema, to no-avail
