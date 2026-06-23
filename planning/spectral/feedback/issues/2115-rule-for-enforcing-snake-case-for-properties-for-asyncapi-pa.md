---
number: 2115
title: "Rule for enforcing snake_case for properties for AsyncAPI payloads"
state: "open"
labels: ["enhancement", "triaged", "AsyncAPI"]
author: "jonaslagoni"
created: "2022-04-07T17:52:49Z"
updated: "2024-05-31T12:36:28Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2115"
---

# Rule for enforcing snake_case for properties for AsyncAPI payloads

**User story.**
As a user, I want to force the snake_case format for all properties.

**Describe the solution you'd like**
I think it makes sense for the rule to only focus on a single format, but maybe in the future, it makes sense?

I want this rule to be part of the built-in ruleset.

**Additional context**

The way I am currently enforcing it, is through the rule:
```yml
...
functions: [..., snake-case-properties]
rules: 
  ...
  asyncapi-properties-must-follow-snake-case:
    given: $.channels.[*][subscribe,publish].message..properties
    severity: error
    then:
      function: snake-case-properties
```
And with the function:
```js
function snake_case_string(str) {
  return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(s => s.toLowerCase())
    .join('_');
}

export default (properties, _, { path }) => {
  const results = [];
  for (const [property, _] of Object.entries(properties)) {
    const expectedPropertyName = snake_case_string(property);
    if (property !== expectedPropertyName) {
      results.push({
        message: `Property MUST follow snake-case. Expected property "${property}" to be called "${expectedPropertyName}"`,
        path: [...path, property],
      });
    }
  }
  return results;
};
```
