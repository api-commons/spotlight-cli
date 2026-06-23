---
number: 2892
title: "Line number displayed incorrectly when linting naming conventions in OAS"
state: "open"
labels: []
author: "pitskovich"
created: "2026-02-18T14:58:55Z"
updated: "2026-02-18T14:58:55Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2892"
---

# Line number displayed incorrectly when linting naming conventions in OAS

**Describe the bug**
If there is an issue with naming conventions (i.e. camelCase), spectral shows the error on the line number of the schema referred by the property name, but technically it should show the line number where the property name is defined. 

**To Reproduce**
OAS file 

1. Given this OpenAPI document which has Object property names not in camel case,
2. Run the spectral linter
3. spectral shows the error on the line number of the schema referred by the property name

**Expected behavior**
Line number where the property name is defined should be shown
