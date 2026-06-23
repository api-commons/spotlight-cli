---
number: 1342
title: "Custom function not working"
state: "closed"
labels: ["t/bug"]
author: "alexrainman"
created: "2020-09-16T13:43:53Z"
updated: "2020-09-16T15:43:46Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1342"
---

# Custom function not working

I am following the [documentation](https://meta.stoplight.io/docs/spectral/docs/guides/5-custom-functions.md) to create custom functions.

My function is on the functions/ folder and look like this:

```js
module.exports = (targetVal) => {
    var responses = Object.keys(targetVal);
    if (!responses.includes("401")) {
      return [
        {
          message: 'operations must define a 401 response.',
        },
      ];
    }
  };
```

And my custom rule looks like this:

```yml
operation-success-response:
    description: "Operations must define a 401 response."
    recommended: true
    given: $.paths.*[?( @property === 'get' || @property === 'put' || @property === 'post' || @property === 'delete' || @property === 'options' || @property === 'head' || @property === 'patch' || @property === 'trace' )]
    then:
      - field: responses
        function: oasOpResponse401Required
```

What is missing?
