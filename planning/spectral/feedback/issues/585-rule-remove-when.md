---
number: 585
title: "Rule: remove when"
state: "closed"
labels: ["breaking"]
author: "P0lip"
created: "2019-09-23T20:38:43Z"
updated: "2019-10-24T18:13:13Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/585"
---

# Rule: remove when

**Chore summary**
Remove `when` member from `IRule` interface.
```ts
  when?: {
    // the `path.to.prop` to field, or special `@key` value to target keys for matched `given` object
    // EXAMPLE: if the target object is an oas object and given = `$..responses[*]`, then `@key` would be the response code (200, 400, etc)
    field: string;

    // a regex pattern
    pattern?: string;
  };
```

It's used only by `parameter-description` rule and does not really seem to be needed, as a jsonpath expression could be used instead.
Moreover, we don't really have that property documented anywhere, therefore the impact is likely to be low.
