---
number: 1898
title: "Guidance on possible linting rules"
category: "Q&A"
author: "danielbecroft"
created: "2021-08-09T07:30:36Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1898"
---

# Guidance on possible linting rules

We're experimenting with spectral to see if it can solve some of our API consistency issues. A couple of the items we're after are:
- stopping the use of "anonymous" classes, for example, in the below, `address` needs to reference a named object, not define the properties inline
```yaml
Customer:
  type: object
  properties:
    name:
      type: string
    address:
      type: object
      properties:
        line1:
          type: string
        line2:
          type: string
```

- enforcing `format` based on property names, e.g in the below snippet, any property that ends with `Date` should have a `format: date` specified, anything ending in `GUID` should have `format: guid` specified. 
```yaml
properties:
  BirthDate:
    type: string
    format: date
  CustomerGUID:
    type: string
    format: guid
```

Are these checks possible with the spectral toolkit? I know they'd need custom rules, but doing a sanity check before even attempting them.
