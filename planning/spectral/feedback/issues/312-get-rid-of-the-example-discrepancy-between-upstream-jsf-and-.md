---
number: 312
title: "Get rid of the \"example\" discrepancy between upstream JSF and SL/JSF"
state: "closed"
labels: []
author: "brianmrock"
created: "2019-07-06T18:03:39Z"
updated: "2019-07-16T14:44:03Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/312"
---

# Get rid of the "example" discrepancy between upstream JSF and SL/JSF

**User Story**

As I Stoplight developer I want to use the upstream JSON Schema Faker and be able to leverage both example and examples properties.

**Background**

That change was added in order to support generating json examples in the next platform. 

First commit that initiated the work can be found here https://github.com/stoplightio/json-schema-faker/commit/4e3646e244c902ab7ff2b69e3d76e2e2de4df55a

**Repos using @stoplight/json-schema-faker**
- prism
- yogi (not sure whether we still use this repo anywhere...)
- platform
- studio

**Ideas for removing the discrepancy**
- merge the change to the upstream
- try to leverage https://github.com/json-schema-faker/json-schema-faker/tree/master/docs 

```
3.5 - extend keywords with custom generators
jsf.define('myProp', (value, schema) => schema);
```
