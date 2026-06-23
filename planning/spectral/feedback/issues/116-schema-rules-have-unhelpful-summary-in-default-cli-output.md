---
number: 116
title: "Schema Rules have unhelpful summary in default CLI output"
state: "closed"
labels: []
author: "philsturgeon"
created: "2019-03-28T11:44:10Z"
updated: "2019-05-21T12:45:22Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/116"
---

# Schema Rules have unhelpful summary in default CLI output

Linting this document:

```yaml
openapi: 3.0.8
info:
  title: occaecat ex exercitation consequat
  version: sunt Duis aliqua qui
x-testcase: 'should not work without required property: paths'
```

Results in stylish format output:

```
linting ../openapi3-examples/fail/fuzz1/331be1bf-781d-407f-93d6-1f4b390ae32b.yaml
OpenAPI 3.x detected

/home/mike/node/openapi3-examples/fail/fuzz1/331be1bf-781d-407f-93d6-1f4b390ae32b.yaml
 1:1    error  oas3-schema       Validate structure of OpenAPIv3 specification
 1:1  warning  api-servers       OpenAPI `servers` must be present and non-empty array
 2:6  warning  info-contact      Info object should contain `contact` object
 2:6  warning  info-description  OpenAPI object info `description` must be present and non-empty string

✖ 4 problems (1 error, 3 warnings, 0 infos)
```

But the json format output gives the more helpful message for the error:

```json
	{
		"code": "oas3-schema",
		"path": [],
		"message": "should have required property 'paths'",
		"severity": 0
	},
```

_Originally posted by @MikeRalphson in https://github.com/stoplightio/spectral/pull/112#issuecomment-477554960_
