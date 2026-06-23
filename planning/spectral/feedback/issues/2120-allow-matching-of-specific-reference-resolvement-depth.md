---
number: 2120
title: "Allow matching of specific reference resolvement depth"
state: "open"
labels: ["enhancement", "triaged"]
author: "jonaslagoni"
created: "2022-04-07T21:48:56Z"
updated: "2024-05-31T12:36:30Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2120"
---

# Allow matching of specific reference resolvement depth

**User story.**
As a user, I want to decide the level of reference matching for a rule.

**Is your feature request related to a problem?**
In AsyncAPI we can define messages as references:
```yml
---
channels:
  some/channel:
    subscribe:
      message:
        $ref: ./some/message.yml
```

And the message object that is being referenced, can also contain a reference.

```yml
---
payload:
  $ref: ./some/schema.yml
```

I am unable to lint the reference within the referenced message object because I am not able to control the depth at which references should/should not be resolved. 

**Describe the solution you'd like**
The only way I can think this can be solved is through a depth level that you can "target" reference resolvement 🤔 Not quite sure how easy it is to achieve though!

For example, given:
```yml
rules:
  ...
  asyncapi-message-payload-must-use-references:
    given: $.channels.[*][subscribe,publish].message
    resolved: "depth-1"
```

It would resolve the first reference only:
```yml
---
channels:
  some/channel:
    subscribe:
      message:
        payload:
          $ref: ./some/schema.yml
```

Maybe someone have a better way to achieve this? 🤔
