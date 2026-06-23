---
number: 2758
title: "Custom rule with example not validated"
state: "closed"
labels: []
author: "erwinkramer"
created: "2024-12-13T18:12:59Z"
updated: "2024-12-13T19:00:06Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2758"
---

# Custom rule with example not validated

**Describe the bug**
I'm adding this rule:

```yaml
  operation-must-have-examples:
    description: All object types must include at least one example
    message: Return or request type is missing an example in the schema.
    severity: warn
    given: $.paths.*.*.*.content[application/json]
    then:
      field: schema.example
      function: truthy
```

And checking on this file: [openapi_v2.json](https://github.com/user-attachments/files/18129795/openapi_v2.json), which it validates. 

But, when I remove the following `example` from the `/teller/reports` operation, it's still valid, but I don't see how it passes the rule:

```json
 "example": [
    {
      "name": "secretz.txt"
    },
    {
      "name": "secretz2.txt"
    }
  ]
```

If i remove any other example, it works as expected (meaning it is telling me the file is invalid).

**Environment (remove any that are not applicable):**
 - Latest CLI
