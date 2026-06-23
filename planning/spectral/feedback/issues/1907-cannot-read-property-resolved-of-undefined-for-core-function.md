---
number: 1907
title: "Cannot read property 'resolved' of undefined for core function schema"
state: "closed"
labels: []
author: "avinashpise"
created: "2021-10-20T10:30:42Z"
updated: "2021-10-20T11:21:08Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1907"
---

# Cannot read property 'resolved' of undefined for core function schema

**Describe the bug**
core function fails to execute using javascript. When trying to Implemented the schema core [function](https://meta.stoplight.io/docs/spectral/ZG9jOjExNg-core-functions#schema). I am getting error like *Cannot read property 'resolved' of undefined for core function schema*

**To Reproduce**

1. Given a custom function to validate email  
 ```
    const {casing, schema} = require("@stoplight/spectral-functions");
    validateEmail(_EmailAddress, _Path){
        let result = [];
        const emailSchema =  { type: "string", format: "email"}
        const response = schema(_EmailAddress, { schema: emailSchema, allErrors: true }, {given: _Path}, {});
        if(response && response.length > 0){
            result.push(...response);
        }         
        
        return result;
    },
```
2. Call validateEmail function with valid details
```
    validateEmail("abc@xyz.com", ["info","contact","email"]);
``` 
after the execution of validateEmail, it returns the expected result.

3. Call validateEmail function with invalid details
```
    validateEmail("abcxyz.com", ["info","contact","email"]);
```
after the execution of validateEmail, it returns the below message.
```
{
    "errorType": "TypeError",
    "errorMessage": "Cannot read property 'resolved' of undefined",
    "stack": [
        "TypeError: Cannot read property 'resolved' of undefined",
        "    at schema (@stoplight/spectral-functions/dist/schema/index.js:81:19)",
        "    at schema (@stoplight/spectral-core/dist/ruleset/rulesetFunction.js:65:16)",
		.
		.
		.
		.
        "    at Object.lintNode (@stoplight/spectral-core/dist/runner/lintNode.js:21:48)",
        "    at cb (@stoplight/spectral-core/dist/runner/runner.js:44:32)",
        "    at mapped.<computed> (@stoplight/spectral-core/dist/runner/runner.js:88:21)",
        "    at safeCall (nimma/dist/legacy/cjs/runtime/proxy-callbacks.js:7:5)"
    ]
}
```

**Expected behavior**
It should return error saying `property should match format "email"`

**Environment (remove any that are not applicable):**
 - Library version:  6.0.0
 - OS:  Windows 10
