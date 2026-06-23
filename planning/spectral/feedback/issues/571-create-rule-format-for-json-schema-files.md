---
number: 571
title: "Create rule format for JSON schema files"
state: "closed"
labels: ["enhancement"]
author: "rossmcdonald"
created: "2019-09-18T19:47:48Z"
updated: "2019-09-20T17:50:08Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/571"
---

# Create rule format for JSON schema files

I believe there is only support today for OpenAPI formats. We should also allow users to run rules against JSON schema formats (or just generic objects, whichever is easiest).

The context here is that we need to allow Studio users to run rules on JSON schema files. I was thinking we could allow users to set a `format` attribute (`json-schema`, for example) on the rule to have it target JSON schema models.
