---
number: 520
title: "Output Message - Differenciate the container from its content"
state: "closed"
labels: ["enhancement"]
author: "Amachua"
created: "2019-09-04T08:49:32Z"
updated: "2020-05-14T22:49:42Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/520"
---

# Output Message - Differenciate the container from its content

**User story.**
As a API Designer, When I defined a field that doesn't match a regular expression, Then the value of the property can be prompted in the output.

**Additional information** 

When I use the following OpenAPI specification

```YAML
openapi: 3.0.0

x-format-version: "1.0"

info:
  title: Dummy title
  description: Dummy description
  version: 1.0.0

paths:
  /some/path:
    get:
      description: Dummy description
      parameters:
        - in: header
          name: some_header
          description: Some header description.
          schema:
            type: string
        - in: header
          name: someHeader
          description: Some header description.
          schema:
            type: string
        - in: header
          name: some-header
          description: Some header description.
          schema:
            type: string
      responses:
        "200":
          description: All is good
```
And I use the following rule:
```YAML
  header-parameter-names-kebab-case:
    type: style
    severity: error
    recommended: true
    description: A parameter in the header should be written in kebab-case
    message: "'{{property.value}}' is not kebab-cased: {{error}}"
    given: $..parameters[?(@.in === 'header')]
    then:
      field: name
      function: pattern
      functionOptions:
        match: ^[a-z0-9]+((-[a-z0-9]+)+)?$
```

Then I would like to have as output something like this:
```
   16:17     error  [header-parameter-names-kebab-case] 'some_header' is not kebab-cased: must match the pattern '^[a-z0-9]+((-[a-z0-9]+)+)?$'
      -> paths,/some/path,get,parameters,0,name
   21:17     error  [header-parameter-names-kebab-case] 'someHeader' is not kebab-cased: must match the pattern '^[a-z0-9]+((-[a-z0-9]+)+)?$'
      -> paths,/some/path,get,parameters,1,name
```

At the end I would like to have another property (_property.value_ in the sample) that can be used in the message in addition to the existing ones (property, error and description if I'm not wrong) and that can be use to give back the value of the field (easier for a functional to understand the output message).

If the issue is unclear, please do not hesitate to ask for more information. :)
