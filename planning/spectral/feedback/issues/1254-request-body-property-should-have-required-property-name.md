---
number: 1254
title: "request body property should have required property 'name'"
state: "closed"
labels: ["t/bug", "p/high"]
author: "DerManoMann"
created: "2020-06-24T06:03:27Z"
updated: "2020-07-10T07:13:16Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1254"
---

# request body property should have required property 'name'

**Describe the bug**
A OAS3 yaml spec with the following `requestBodies` item triggers an error:

```
error  oas3-schema                         `product_in_body` property should have required property `name`
```

Spec:
```
 ...
  requestBodies:
    product_in_body:
      description: 'new or updated product'
      required: true
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Product'
   ...
```


**Expected behavior**
The [specs](http://spec.openapis.org/oas/v3.0.3#request-body-object) only define `description`, `required` and `content` as fields.
Of those, only `content` is marked as required.

**Environment (remove any that are not applicable):**
- spectral 5.4.0
- PHP 7.4.7 on ubuntu
