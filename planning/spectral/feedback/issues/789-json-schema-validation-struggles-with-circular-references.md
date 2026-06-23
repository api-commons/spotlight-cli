---
number: 789
title: "JSON Schema Validation struggles with circular references"
state: "closed"
labels: ["t/bug"]
author: "philsturgeon"
created: "2019-11-19T17:08:49Z"
updated: "2020-04-18T15:19:40Z"
comments: 5
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/789"
---

# JSON Schema Validation struggles with circular references

I am building an AsyncAPI ruleset over here: https://github.com/openapi-contrib/style-guide/pull/4

The `schema` function should support Draft 4, 6 and 7, but when I run `spectral lint -r asyncapi.yml examples/asyncapi.yml` I get this error: 

```
Encountered error when running rule 'asyncapi-schema' on node at path '$':
Error: id "http://json-schema.org/draft-07/schema" resolves to more than one schema

/Users/phil/src/style-guide/examples/asyncapi.yml
 1:1  warning  asyncapi-servers  Define at least one server.
 2:6  warning  info-contact      Info object should contain `contact` object.
```

I'm not sure what that means, but to be able to use the [AsyncAPI v2.0.0 metaschema](https://github.com/asyncapi/asyncapi/blob/master/versions/2.0.0/schema.json) we need JSON Schema Draft 7.
