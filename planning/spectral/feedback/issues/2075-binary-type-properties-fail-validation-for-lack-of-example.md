---
number: 2075
title: "binary type properties fail validation for lack of example"
state: "open"
labels: ["t/bug", "triaged", "OpenAPI"]
author: "acabarbaye"
created: "2022-02-28T16:41:35Z"
updated: "2024-05-31T12:35:14Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2075"
---

# binary type properties fail validation for lack of example

Whenever an object has a property of binary (i.e. type: string, format: binary) validation will fail with the following error message

```
 oas3-valid-schema-example  "example" property type must be string  components.schemas....
```

Although the field example is present. This is really tied to the property being of type binary; remove the "format: binary" and the specification document will pass validation.
