---
number: 2114
title: "Rule for enforcing suffix for date/time properties for AsyncAPI payloads"
state: "open"
labels: ["enhancement", "triaged", "AsyncAPI"]
author: "jonaslagoni"
created: "2022-04-07T17:42:54Z"
updated: "2024-05-31T12:36:27Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2114"
---

# Rule for enforcing suffix for date/time properties for AsyncAPI payloads

**User story.**
As a user I want to enforce a specific suffix for date/time properties, to ensure consistency.

**Describe the solution you'd like**
More precisely I want to force `_at` suffix for each property, but it might be better to not force a specific suffix?

I want this rule to be part of the built-in ruleset.

**Additional context**
The way I am currently enforcing it, is through the rule:
```yml
...
functions: [..., use-suffix-for-date-time]
rules: 
  ...
  asyncapi-date-time-must-use-at-suffix:
    given: $.channels.[*][subscribe,publish].message..properties
    severity: error
    then:
      function: use-suffix-for-date-time
```

And with the function:

```js
// Based on https://json-schema.org/understanding-json-schema/reference/string.html#dates-and-times
export default (properties, _, { path }) => {
  const results = [];
  for (const [propertyName, property] of Object.entries(properties)) {
    const formats = ["date-time", "time", "date"];
    const formatsForMessage = formats.map(format => `"${format}"`).join(',');
    if(property.format && formats.includes(property.format)) {
      const lastThreeChars = propertyName.slice(propertyName.length-3, propertyName.length);
      if(lastThreeChars !== '_at'){
        results.push({
          message: `Formats ${formatsForMessage} MUST end with "_at". Expected property "${propertyName}" to be called "${propertyName}_at"`,
          path: [...path, propertyName],
        });
      }
    }
  }
  return results;
};
```
