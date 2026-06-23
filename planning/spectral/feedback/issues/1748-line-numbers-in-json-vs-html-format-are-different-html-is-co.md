---
number: 1748
title: "Line numbers in JSON vs HTML format are different - HTML is correct"
state: "closed"
labels: ["wontfix"]
author: "treehousetim"
created: "2021-07-19T19:01:58Z"
updated: "2021-08-31T13:51:51Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1748"
---

# Line numbers in JSON vs HTML format are different - HTML is correct

**Line numbers of errors are wrong in JSON output**
Line number is off by +1 when reporting an error in my OpenAPI source document
Character number is off by +1 when reporting an error in my OpenAPI source document.

**To Reproduce**

Using NPM with package.json lines:

```
"_test_html": "spectral lint www/build/openapi.json -o www/test-results.html -v -f html",
"_test_json": "spectral lint www/build/openapi.json -o www/test-results.json -v -f json",
```
with this open api spec

```json
{
  "openapi": "3.0.3",
  "servers": [
    {
      "url": "http://127.0.0.1:8000/v/0.0.1/"
    }
  ],
... [truncated]
```

Creates this output

## JSON
``` json
{
	"code": "oas3-server-trailing-slash",
	"path": [
		"servers",
		"0",
		"url"
	],
	"message": "Server URL should not have a trailing slash.",
	"severity": 1,
	"range": {
		"start": {
			"line": 4,
			"character": 13
		},
		"end": {
			"line": 4,
			"character": 45
		}
	},
	"source": "/Users/timgallagher/Desktop/xampp/wius/api-gateway/swagger/www/build/openapi.json"
},
```

## HTML
```html
<tr style="display:none" class="f-0">
    <td>5:14</td>
    <td class="severity clr-warning">warning</td>
    <td>Server URL should not have a trailing slash.</td>
</tr>
```

**Expected behavior**
I would expect both output formats to be the same.
I would expect JSON to show the same numbers as HTML as the error/warning is actually on line 4 not 5 and at character position 13 not 14.

**Environment (remove any that are not applicable):**
 - Spectral version 5.9.1
 - OS: Mac OSX 11.2.3
