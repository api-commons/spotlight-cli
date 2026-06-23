---
number: 1710
title: "Support of OAS version 3.1.0"
state: "closed"
labels: []
author: "fidgi"
created: "2021-07-03T17:24:38Z"
updated: "2021-07-04T20:06:08Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1710"
---

# Support of OAS version 3.1.0

**User story.**
As an API designer, I can use spectral lint to validate an OAS 3.1.0 document , so that I can do a better job .

**Is your feature request related to a problem?**
I've check spectral lint against OAS 3.1.0 demo yaml from Redoc [demo yaml from Redoc](https://github.com/Redocly/redoc/blob/f4ea368f78a693fd70d48b5e0e5ffce3560432f4/demo/openapi-3-1.yaml)
and got the following result : 
`
$ npx @stoplight/spectral lint https://raw.githubusercontent.com/Redocly/redoc/f4ea368f78a693fd70d48b5e0e5ffce3560432f4/demo/openapi-3-1.yaml 

https://raw.githubusercontent.com/Redocly/redoc/f4ea368f78a693fd70d48b5e0e5ffce3560432f4/demo/openapi-3-1.yaml
 1:1  warning  unrecognized-format  The provided document does not match any of the registered formats [oas2, oas3, asyncapi2, json-schema, json-schema-loose, json-schema-draft4, json-schema-draft6, json-schema-draft7, json-schema-2019-09]

✖ 1 problem (0 errors, 1 warning, 0 infos, 0 hints)
`

same result with my own OAS 3.1.0 yaml

**Describe the solution you'd like**
OAS 3.1.0 support

**Additional context**
N/A
