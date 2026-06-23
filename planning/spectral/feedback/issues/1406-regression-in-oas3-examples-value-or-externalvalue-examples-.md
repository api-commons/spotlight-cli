---
number: 1406
title: "Regression in oas3-examples-value-or-externalValue: examples in examples is asked to be OpenAPI compliant"
state: "closed"
labels: ["t/bug"]
author: "m-mohr"
created: "2020-11-20T12:34:40Z"
updated: "2021-01-06T16:52:22Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1406"
---

# Regression in oas3-examples-value-or-externalValue: examples in examples is asked to be OpenAPI compliant

**Describe the bug**

Examples properties in OpenAPI Examples are reported as invalid although they are the actual examples and contain no value or external value, of course. This seems to be a regression (or just something related) of my fix in #899.

**To Reproduce**

Validate https://raw.githubusercontent.com/Open-EO/openeo-api/draft/openapi.yaml

Response (reports for oas3-unused-components-schema may be valid, reports for oas3-examples-value-or-externalValue are likely invalid):

```
> spectral lint openapi.yaml

OpenAPI 3.x detected

c:/dev/openeo-api/openapi.yaml
 1592:25  warning  oas3-examples-value-or-externalValue  Examples should have either a `value` or `externalValue` field.
 1596:25  warning  oas3-examples-value-or-externalValue  Examples should have either a `value` or `externalValue` field.
 1600:25  warning  oas3-examples-value-or-externalValue  Examples should have either a `value` or `externalValue` field.
 3330:30  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 3398:16  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 4264:21  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 4281:21  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 4347:34  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 4353:32  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 4364:24  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 4680:17  warning  oas3-examples-value-or-externalValue  Examples should have either a `value` or `externalValue` field.
 4734:11  warning  oas3-examples-value-or-externalValue  Examples should have either a `value` or `externalValue` field.
 5414:18  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 5453:23  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 5465:20  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 5479:23  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 5491:28  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 5505:25  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.
 5521:31  warning  oas3-unused-components-schema         Potentially unused components schema has been detected.

✖ 19 problems (0 errors, 19 warnings, 0 infos, 0 hints)
```

**Expected behavior**

No warnings for rule `oas3-examples-value-or-externalValue`.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment (remove any that are not applicable):**
 - Library version: 5.7.1
 - OS: Win10
