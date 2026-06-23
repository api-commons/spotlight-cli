---
number: 2059
title: "Problem in paths reported for rule violations involving schema references within oneOf"
state: "closed"
labels: ["released"]
author: "padamstx"
created: "2022-02-11T18:57:15Z"
updated: "2022-07-21T17:56:38Z"
comments: 7
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2059"
---

# Problem in paths reported for rule violations involving schema references within oneOf

**Describe the bug**
The spectral-core code related to mapping "resolved" paths to "unresolved" paths appears to get tripped up when dealing with schema references within a oneOf list.   The testcase mentioned below contains a fairly simple OpenAPI document (api.yaml) along with a custom rule which verifies that each schema contains a valid description.
The custom rule's function logs the individual paths that are visited, along with the individual violations that
are found.
The API contains a handful of re-usable (named) schemas, with one (Soda) that lacks a description.
This Soda schema is referenced from within the Drink schema's oneOf list and is reachable in three
different ways:
1. the post requestBody
2. the post response
3. the get response

**To Reproduce**
A testcase that demonstrates this problem can be found here:
https://github.com/padamstx/spectral-dedup-issue
The README.md contains detailed instructions to reproduce, but a summary is:
- clone the repo mentioned above
- `spectral lint api.yaml`

**Expected behavior**
Based on the way in which the api.yaml file is defined, I'd expect a single error to be displayed
by spectral with the path `components.schemas.Soda`

**Screenshots**
sample debug output from the custom function:
```sh
$ spectral lint api.yaml
Visiting path: paths./v1/drinks.post.requestBody.content.application/json.schema
Visiting path: paths./v1/drinks.post.requestBody.content.application/json.schema.oneOf.0
Visiting path: paths./v1/drinks.post.requestBody.content.application/json.schema.oneOf.0.properties.type
Visiting path: paths./v1/drinks.post.requestBody.content.application/json.schema.oneOf.0.properties.fruit
Visiting path: paths./v1/drinks.post.requestBody.content.application/json.schema.oneOf.1
>> Violation at: paths./v1/drinks.post.requestBody.content.application/json.schema.oneOf.1
Visiting path: paths./v1/drinks.post.requestBody.content.application/json.schema.oneOf.1.properties.type
Visiting path: paths./v1/drinks.post.requestBody.content.application/json.schema.oneOf.1.properties.name
Visiting path: paths./v1/drinks.post.responses.201.content.application/json.schema
Visiting path: paths./v1/drinks.post.responses.201.content.application/json.schema.oneOf.0
Visiting path: paths./v1/drinks.post.responses.201.content.application/json.schema.oneOf.0.properties.type
Visiting path: paths./v1/drinks.post.responses.201.content.application/json.schema.oneOf.0.properties.fruit
Visiting path: paths./v1/drinks.post.responses.201.content.application/json.schema.oneOf.1
>> Violation at: paths./v1/drinks.post.responses.201.content.application/json.schema.oneOf.1
Visiting path: paths./v1/drinks.post.responses.201.content.application/json.schema.oneOf.1.properties.type
Visiting path: paths./v1/drinks.post.responses.201.content.application/json.schema.oneOf.1.properties.name
Visiting path: paths./v1/drinks.get.responses.201.content.application/json.schema
Visiting path: paths./v1/drinks.get.responses.201.content.application/json.schema.properties.drinks
Visiting path: paths./v1/drinks.get.responses.201.content.application/json.schema.properties.drinks.items
Visiting path: paths./v1/drinks.get.responses.201.content.application/json.schema.properties.drinks.items.oneOf.0
Visiting path: paths./v1/drinks.get.responses.201.content.application/json.schema.properties.drinks.items.oneOf.0.properties.type
Visiting path: paths./v1/drinks.get.responses.201.content.application/json.schema.properties.drinks.items.oneOf.0.properties.fruit
Visiting path: paths./v1/drinks.get.responses.201.content.application/json.schema.properties.drinks.items.oneOf.1
>> Violation at: paths./v1/drinks.get.responses.201.content.application/json.schema.properties.drinks.items.oneOf.1
Visiting path: paths./v1/drinks.get.responses.201.content.application/json.schema.properties.drinks.items.oneOf.1.properties.type
Visiting path: paths./v1/drinks.get.responses.201.content.application/json.schema.properties.drinks.items.oneOf.1.properties.name

/home/padams/work/test/spectral-dedup-issue/api.yaml
 62:11  error  schema-description  Schema must have a non-empty description.  components.schemas.Drink.oneOf[1]
 75:17  error  schema-description  Schema must have a non-empty description.  components.schemas.Drinks.properties.drinks.items

✖ 2 problems (2 errors, 0 warnings, 0 infos, 0 hints)
```

**Environment:**
This problem was found in spectral v6.2.1 running on Linux (Fedora 34)

**Additional context**
This problem was originally discovered during development of custom rules as part of the IBM openapi-validator project (https://github.com/IBM/openapi-validator), which is tightly integrated with spectral.
