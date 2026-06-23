---
number: 2205
title: "Rule to look at two different section in the API schema"
category: "Q&A"
author: "pemba-sherpa-sage"
created: "2022-07-08T14:18:43Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2205"
---

# Rule to look at two different section in the API schema

I am trying to write a rule where I need to look at the property name at two different levels (one directly under schema and another one under Properties). The rule should make sure if `x-mappedTo` ( Cat in the below example) exists in the schema level, the properties should have x-mappedTo as well and vice-versa. Has anyone written a similar kind of rule? I am looking for ideas.

```yaml
components:
      Pet:
        type: object
        x-mappedTo: Cat. <----
        properties:
          id:
            type: integer
            format: int64
            x-mappedTo: CatId.  <----
          name:
            type: string
            x-mappedTo: CatName     <----
````
