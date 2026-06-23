---
number: 2098
title: "Add rule to identify orphaned channel components "
state: "closed"
labels: ["good first issue", "AsyncAPI"]
author: "jonaslagoni"
created: "2022-03-17T23:05:47Z"
updated: "2022-03-24T19:51:40Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2098"
---

# Add rule to identify orphaned channel components 

**User story.**
As a user, I can detect if my document has orphaned channels inside components.

**Describe the solution you'd like**
This should be a valid AsyncAPI file:
```
{
  asyncapi: '2.3.0',
  channels: {
    'users/signedUp': {
      $ref: '#/components/channels
    },
  },
  components: {
    channels: {
      userSignedUp: {
        subscribe: {
          message: {
            payload: {
              type: 'string',
            },
          },
        },
      },
    },
  },
}
```

The new ruleset should catch this invalid case:
```
{
  asyncapi: '2.3.0',
  channels: {},
  components: {
    channels: {
      userSignedUp: {
        subscribe: {
          message: {
            payload: {
              type: 'string',
            },
          },
        },
      },
    },
  },
}
```

In order to solve this you need to do the following steps:
1. Add the new rule to the AsyncAPI ruleset: https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/asyncapi/index.ts
1. Add a test for the new rule: https://github.com/stoplightio/spectral/blob/develop/packages/rulesets/src/asyncapi/__tests__/asyncapi-unused-components-schema.test.ts
1. Add the rule to the documentation: https://github.com/stoplightio/spectral/docs/reference/asyncapi-rules.md

**Additional context**
Part of https://github.com/stoplightio/spectral/issues/1103
Related PR that can be used as an example: https://github.com/stoplightio/spectral/pull/2097
