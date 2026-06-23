---
number: 1593
title: "Warning on an unmatched JsonPath"
state: "open"
labels: ["triaged"]
author: "MarcusAckermann"
created: "2021-05-04T09:59:02Z"
updated: "2024-05-31T12:35:41Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1593"
---

# Warning on an unmatched JsonPath

When executing `spectral lint -r developer.yaml openapi2.json` on the files in the attached spectral.zip I get the following warning:

`5:38  warning  schemas-upper-camel-case       Schemas must be named in UpperCamelCase.                                 Components.schemas.Emissions_EN16258_2012`

The JsonPath for that rule is `$.components.schemas[*].properties` but `Components.schemas.Emissions_EN16258_2012` does not match this JsonPath which can be verified by http://jsonpath.com/.

This seems to be a false positive.

[spectral.zip](https://github.com/stoplightio/spectral/files/6420256/spectral.zip)
