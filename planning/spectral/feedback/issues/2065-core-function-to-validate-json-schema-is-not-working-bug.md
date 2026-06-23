---
number: 2065
title: "Core function to validate json schema is not working. [bug] "
state: "closed"
labels: []
author: "avinashpise"
created: "2022-02-17T07:54:23Z"
updated: "2022-02-17T14:27:01Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2065"
---

# Core function to validate json schema is not working. [bug] 

**Describe the bug**
core function fails to execute using javascript. When trying to Implemented the schema core [function](https://meta.stoplight.io/docs/spectral/ZG9jOjExNg-core-functions#schema). I am getting error like *Cannot read property 'resolved' of undefined for core function schema*

**To Reproduce**

1. Given a custom function to validate email  
 ```
    const {casing, schema} = require("@stoplight/spectral-functions");
    validateEmail(_EmailAddress, _Path){
        let result = [];
        const emailSchema =  { type: "string", format: "email"}
        const response = schema(_EmailAddress, { schema: emailSchema, allErrors: true }, {path: _Path,rule:""});
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
    const assignAjvInstance = (_a = instances.get(documentInventory)) !== null && _a !== void 0 ? _a : instances.set(documentInventory, (0, ajv_1.createAjvInstances)()).get(documentInventory);
                                                                                                                 ^

TypeError: Invalid value used as weak map key
    at WeakMap.set (<anonymous>)
    at schema (C:\Projects\lint\node_modules\^[[4m@stoplight^[[24m\spectral-functions\dist\schema\index.js:24:114)
    at schema (C:\Projects\lint\node_modules\^[[4m@stoplight^[[24m\spectral-core\dist\ruleset\rulesetFunction.js:66:16)
    at validateEmail (C:\Projects\lint\index.js:8:26)
    at Object.<anonymous> (C:\Projects\lint\index.js:3:1)
^[[90m    at Module._compile (internal/modules/cjs/loader.js:1068:30)^[[39m
^[[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)^[[39m
^[[90m    at Module.load (internal/modules/cjs/loader.js:933:32)^[[39m
^[[90m    at Function.Module._load (internal/modules/cjs/loader.js:774:14)^[[39m
^[[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)^[[39m
```

**Expected behavior**
It should return zero errors, but here code stops working and getting above mentioned error.

**Environment:**
 - Library version:  6.0.0
 - OS:  Windows 10

@P0lip
