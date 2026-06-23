---
number: 1030
title: "Can't show more than one message from a custom function, even though the response is an array"
state: "closed"
labels: ["t/bug", "documentation"]
author: "RobPhippen"
created: "2020-03-24T16:22:08Z"
updated: "2020-03-26T21:10:52Z"
comments: 6
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/1030"
---

# Can't show more than one message from a custom function, even though the response is an array

**Describe the bug**
Custom functions can return an array of objects, but only the first element can be displayed.

**To Reproduce**
1. Create this function, called `functions/fail_func.js`
``` javascript
module.exports = (targetVal) => {
    return [
      {
        message: 'Message 1',
      },
      {
        message: 'Message 2',
      },
    ]
};
```

2. Create this function definition in `.spectral.yml`
``` yaml
functions:
  - fail_func

rules:
  fail-rule:
    description: Hope to show two errors
    given: $
    severity: error
    message: "{{error}}"
    then:
      function: fail_func
```

3. Run `spectral lint myopenapi.yaml`
Get message
```
 1:1  error  fail-rule   Message 1
```

**Expected behavior**
at step 3, I expect to see both 'Message 1' and 'Message 2'


**Comment**
If that is **not** the expected behaviour, then perhaps the response from a custom function should not be an array?
