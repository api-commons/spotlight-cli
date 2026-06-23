---
number: 1006
title: "access root element from custom function"
state: "closed"
labels: []
author: "romsDKT"
created: "2020-03-10T22:31:25Z"
updated: "2020-03-11T10:14:29Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1006"
---

# access root element from custom function

Hello,

I'd like to create a custom function to check if all paths has a bearer security set (oas3).
I already have a working one but i have to send the root element ($) to **access both paths and securityDefinitions.**
```yaml
security-definition-jwt-on-all-calls:
    description: 'All paths must be securized by oauth2 or bearer scheme'
    message: "{{error}}"
    given: "$"
    severity: error
    recommended: true
    then:
      function: allPathsJwtSecured
```
The result is that i can't have one message per path in output, so the returned range id from line 0 char 0.

I also tried to add a jsonPath in my function return like:
```javascript
return [
            {
                message: `No JWT for path`,
                path: "$.paths['${path}']['${method}']"
            }
];
```
But the console outputs an error.

I'd prefer to have something like that:
```yaml
security-definition-jwt-on-call:
    description: 'All paths must be securized by oauth2 or bearer scheme'
    message: "{{error}}"
    given: "$.paths.*[?( @property === 'get' || @property === 'put' || @property === 'post' || @property === 'delete' || @property === 'options' || @property === 'head' || @property === 'patch' || @property === 'trace' )]"
    severity: error
    recommended: true
    then:
      function: pathJwtSecured
```
So i can have the correct range in the output.
But the problem is that i can't access to securityDefinitions in my custom function.

Do you have any solutions ?
