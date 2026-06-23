---
number: 570
title: "Create OpenAPI rule for enums that don't match the attribute type"
state: "closed"
labels: ["enhancement", "p/high"]
author: "rossmcdonald"
created: "2019-09-18T18:51:16Z"
updated: "2020-01-22T16:52:21Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/570"
---

# Create OpenAPI rule for enums that don't match the attribute type

As an example, if I have a numeric attribute in a JSON schema object. I want to ensure that any enumerations of that attribute are of the same numeric type (ie, not a string). It should be flagged as an error when this occurs.

For example, the JSON schema below should trigger an error:

```yaml
  a_model:
    type: object
    properties:
      id:
        type: integer
        description: Unique asset identifier
        enum:
          - 'a string!'
        format: int64
```

Since the `id` field is of type integer but the enum is a string. While this:

```yaml
  a_model:
    type: object
    properties:
      id:
        type: integer
        description: Unique asset identifier
        enum:
          - 123
        format: int64
```

Should not.

Created from https://github.com/stoplightio/studio/issues/116
