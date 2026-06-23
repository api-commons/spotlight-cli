---
number: 2848
title: "[Question] [OpenAPI] Regarding `application/x-www-form-urlencoded` request body schema and example validation"
state: "open"
labels: []
author: "Marckman"
created: "2025-09-03T09:35:31Z"
updated: "2025-09-03T10:09:50Z"
comments: 1
reactions_total: 5
thumbs_up: 4
url: "https://github.com/stoplightio/spectral/issues/2848"
---

# [Question] [OpenAPI] Regarding `application/x-www-form-urlencoded` request body schema and example validation

Hi Spectral community!

Just opening this in hopes of getting some clarification on how OpenAPI documents are validated.

While doing some tests with [Microcks](https://microcks.io/), I found an interesting scenario: for operations with a request body of `application/x-www-form-urlencoded` content type, documenting examples as objects leads to improper serialization, whereas defining them as strings with the appropriate format (as per OpenAPI [example spec](https://spec.openapis.org/oas/v3.0.3.html#example-object), e.g. `name1=value1&name2=value2`) actually made the tests work.

Now, if I run spectral with [Microcks' ruleset](https://github.com/microcks/microcks-spectral-ruleset) after the change, it complains because the schema definition is still of type object; if I change it to string, this could potentially cause other problems, e.g. with code generation.

So for the actual question: could this be a validation problem, or is there a better way of documenting these operations?

Please see [the original issue](https://github.com/microcks/microcks/issues/1699) for more context.

Thanks in advance,
M
