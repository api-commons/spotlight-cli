---
number: 1478
title: "Report duplicated values in enum"
state: "closed"
labels: []
author: "Amachua"
created: "2021-01-14T09:52:45Z"
updated: "2021-02-03T14:35:07Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1478"
---

# Report duplicated values in enum

**User story.**
As an API Designer, when I define an enumeration with duplicated value, then I want that a warning is raised.

**Describe the solution you'd like**
When I use the following `dummy.yml` file
```yaml
openapi: 3.0.0

info:
  title: Dummy title
  description: Dummy description
  version: 1.0.0

paths:
  /dummy:
    get:
      description: Dummy description
      parameters:
        - in: header
          name: some_header
          description: Some header description.
          schema:
            type: string
            enum: [dummy, dummy, not_so_dummy]
      responses:
        "200":
          description: All is good
        "400":
          description: All is good
```

And I run the command line
```bash
yarn spectral lint .\dummy.yml
```
Then I want to have an issue that is raised as the entry `dummy` appears too times in the `some_header` parameter.

**Rule proposition**

I've already prepared the following rule so that it could be included (if found useful), in the next version of Spectral.

```yaml
  enum-duplicated-entry:
    type: validation
    severity: warn
    recommended: true
    formats: ["oas3"]
    message: "A duplicated entry in the enum was found. Error: {{error}}"
    given: $..enum
    then:
      function: schema
      functionOptions:
        schema:
          type: array
          uniqueItems: true
```

Should I open a Pull request to add it in your ruleset? :)
