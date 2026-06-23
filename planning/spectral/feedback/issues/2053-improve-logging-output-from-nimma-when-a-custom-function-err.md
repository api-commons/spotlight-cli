---
number: 2053
title: "Improve logging output from Nimma when a custom function errors"
state: "closed"
labels: ["enhancement", "released", "CLI"]
author: "SensibleWood"
created: "2022-02-08T11:14:41Z"
updated: "2022-03-03T20:30:59Z"
comments: 6
reactions_total: 3
thumbs_up: 3
url: "https://github.com/stoplightio/spectral/issues/2053"
---

# Improve logging output from Nimma when a custom function errors

**User story.**

As a user of Spectral
When I write a custom function that is erroneous 
I want to see more verbose logging than "Error running Nimma"
That helps me diagnose the problem with my code

**Is your feature request related to a problem?**

I've across to v6 of Spectral and gone about rewriting my custom functions in the revised style. In doing so I (naturally) wrote some poor code that was incorrect.

However, Spectral told me virtually nothing about my mistake other than telling me "Error running Nimma". After poking around in the Nimma package I found that the errors are correctly collected, but not echoed out to the console in any useful way. I added ```console.error(__filename, this.errors)``` in a couple of places and Bob's your uncle and Fanny is your mother's sister I had the logging I need.

**Describe the solution you'd like**

I'm sure these logs are available to be echoed out so some means to see them when they happen would be very useful

**Additional context**

Given this clearly broken function:

```javascript
import { createRulesetFunction } from '@stoplight/spectral-core';

export default createRulesetFunction({
  input: null,
  options: {
    type: 'object',
    additionalProperties: false,
    properties: {
      value: true,
    },
    required: ['value'],
  },
}, (input, options) => {
  const { value } = options;

  const results = input.filter((server) => server.url.brokenFunction);

  if (results.length !== 0) {
    return [
      {
        message: `This is just for debug`,
      },
    ];
  }
});
```

And this here ruleset:

```yaml
extends: spectral:oas
functions: [empty]
rules:
  operation-operationId: off
  oas3-api-servers: off
  info-contact: off
  test-empty:
    message: This is broken
    severity: error
    given: "$.servers"
    then:
      function: empty
      functionOptions:
        value: "abc"
```

I get this result even with the `--verbose` flag on:

```bash
➜  spectral-ruleset git:(develop) ✗ ./node_modules/.bin/spectral lint --ruleset rulesets/debug.yaml test/broken-build.yaml.txt --verbose
Found 51 rules (37 enabled)
Linting /Users/chris/Documents/git/github/spectral-ruleset/test/broken-build.yaml.txt
Error running Nimma
➜  spectral-ruleset git:(develop) ✗
```
