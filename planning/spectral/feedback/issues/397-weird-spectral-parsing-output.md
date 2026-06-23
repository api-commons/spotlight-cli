---
number: 397
title: "Weird spectral parsing output"
state: "closed"
labels: ["t/bug"]
author: "nulltoken"
created: "2019-07-20T19:48:35Z"
updated: "2019-08-14T19:13:11Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/397"
---

# Weird spectral parsing output

**Describe the bug**

Following yaml seems weirdly parsed by Spectral

**To Reproduce**

**repro/output.openapi.yaml**
```
openapi: 3.0.0
servers:
  - url: "https://ex-ample.com"
x-format-version: "1.0"
info:
  title: Five
  description: Issue repro 5
  contact:
    email: e@e.com
  version: 0.0.0
paths: {}
components:
  schemas:
    AModel:
      description: Yet another self descriptive explanation
      type: object
      required:
        - identifier
      properties:
        identifier:
          type: string
        a_date:
          description: a date
          type: date
          example: 2020-05-11
```

**Run**
```
$ yarn spectral lint repro/output.openapi.yaml -o repro/log.txt -f json -q
yarn run v1.15.2
 C:\REDACTED\node_modules\.bin\spectral lint repro/output.openapi.yaml -o repro/log.txt -f json -q
Encountered error when running rule 'valid-example' on node at path '$,components,schemas,AModel,properties,a_date':
Error: schema is invalid: data/type should be equal to one of the allowed values, data/type should be array, data/type should match some schema in
anyOf
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

**repro/log.txt**
```
[
	{
		"code": "oas3-schema",
		"path": [
			"components",
			"schemas",
			"AModel"
		],
		"message": "/components/schemas/AModel should have required property '$ref'",
		"severity": 0,
		"range": {
			"start": {
				"line": 24,
				"character": 11
			},
			"end": {
				"line": 35,
				"character": 29
			}
		},
		"source": "repro/output.openapi.yaml"
	}
]
```

**Expected behavior**
- Nothing in stderr/stdout
- Log should contain an error about unknown `date` type
- Log should not contain the error `/components/schemas/AModel should have required property '$ref'` (which wording seems a tad weird ;-) )

**Environment (remove any that are not applicable):**
 - Library version: 4.0.1
 - OS: Windows 7
