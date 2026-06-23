---
number: 2051
title: "Spectral not seeing problems with a badly $ref'ed document"
state: "open"
labels: ["t/bug", "triaged", "json-refs"]
author: "philsturgeon"
created: "2022-02-05T13:11:40Z"
updated: "2024-05-31T12:35:13Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2051"
---

# Spectral not seeing problems with a badly $ref'ed document

**Describe the bug**

Box has a very invalid OpenAPI document, but Spectral doesn't seem to notice. It's got $ref's in all the wrong places, which should be warnings at least.

**To Reproduce**

1. Given this OpenAPI/AsyncAPI document https://raw.githubusercontent.com/box/box-openapi/main/content/openapi.yml
2. Run this CLI command `spectral lint https://raw.githubusercontent.com/box/box-openapi/main/content/openapi.yml` with `extends: spectral:oas`
3. See there's lots of errors in various files but the only one for the main openapi.yml is `18:13  warning  oas3-unused-component  Potentially unused component has been detected.  components.schemas.$ref`.

**Expected behavior**

Errors about $ref in invalid locations. The spec is clear about where they can and cannot go.

**Screenshots**

<img width="1440" alt="Screen Shot 2022-02-05 at 12 38 51 PM" src="https://user-images.githubusercontent.com/67381/152643542-849c9dbc-0264-4b16-86e5-cd8c1476bf90.png">
<img width="869" alt="Screen Shot 2022-02-05 at 12 42 34 PM" src="https://user-images.githubusercontent.com/67381/152643545-4b754a3c-3eb9-4272-8dd1-c564ce3d197f.png">
<img width="1164" alt="Screen Shot 2022-02-05 at 12 49 07 PM" src="https://user-images.githubusercontent.com/67381/152643546-3a8a9c09-ac3e-41a0-9934-1652c87b83b6.png">
