---
number: 2463
title: "I wish there were a simpler way to configure a custom rule to operate on any schema node"
category: "General"
author: "jedwards1211"
created: "2023-04-30T18:14:54Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2463"
---

# I wish there were a simpler way to configure a custom rule to operate on any schema node

Admittedly I'm new to this and may not know how to do something, but I went to look at the `oas3-valid-schema-example` rule to see how it's configured to only operate on schemas, and I was surprised that it does that using complicated JSONPath operations:

```
      given: [
        "$.components.schemas..[?(@property !== 'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]",
        "$..content..[?(@property !== 'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]",
        "$..headers..[?(@property !== 'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]",
        "$..parameters..[?(@property !== 'properties' && @ && (@ && @.example !== void 0 || @.default !== void 0) && (@.enum || @.type || @.format || @.$ref || @.properties || @.items))]",
      ],
```

I wish I could just say something like `nodeTypes: ['schema']` instead of using these complicated filter paths.

According to the company I work for many customers use the OpenAPI any schema `{}` by mistake instead of actually meaning any schema, and I'd like to make a lint rule to warn about that unless they add an explicit `x-any: true` marker property.  But matching objects that are schemas without any validation properties with JSONPaths isn't going to be straightforward.

Before discovering spectral I had started writing my own lint tool from scratch using some of my company's own traversal tools that made it easy to target any schema nodes, and it was a lot easier.
