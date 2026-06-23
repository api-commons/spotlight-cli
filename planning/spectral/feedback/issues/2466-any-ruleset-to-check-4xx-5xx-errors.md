---
number: 2466
title: "Any ruleset to check 4xx - 5xx errors"
state: "closed"
labels: ["question"]
author: "satishbkodali"
created: "2023-05-08T13:51:34Z"
updated: "2023-07-27T06:19:12Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2466"
---

# Any ruleset to check 4xx - 5xx errors

We need to write a ruleset that each operation should have one success and one error defined.
for success we are using the inbuilt `operation-success-response` rule.

Is there any thing for error response too?

I tried to use the following ruleset

```
error-responses-defined:
    description: Ensure that all operations have at least one error response
    formats:
      - oas3
    severity: error
    given: $.paths..responses
    then:
      field: '@key'
      function: pattern
      functionOptions: 
        match: "/^[4-5]/"
```

But it fails for following scenarios
1. If i don't  have any 4xx or 5xx defined in my responses, it won't throw error or warning.
2. If i have 2xx defined, it will throw the error for that saying
```
17:15    error  error-responses-defined  Ensure that all operations have at least one error response                paths./users.get.responses[200]
``` 

So how to make this ruleset to check for 4xx or 5xx
