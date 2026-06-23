---
number: 1663
title: "How to specify error location"
category: "Q&A"
author: "gk12277"
created: "2021-06-09T04:20:23Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1663"
---

# How to specify error location

Hi everyone,
I want to show error when `special_key` is missing from the yaml file

```yaml
foo:
  special_key:
    - abcd
```

This is my spectral ruleset

```yaml
  special_key_missing:
    description:
      Special Key missing
    severity: error
    given: "$[*]"
    then:
      field: special_key
      function: truthy
```

This works fine and shows error when key is missing but the problem is error is shown in all lines.


[![enter image description here][1]][1]


How can I show the error at a specific line suppose in this case I want to show it at topmost level at `foo` key


  
![image](https://user-images.githubusercontent.com/41449598/121292727-0ffb9780-c908-11eb-954b-afbdde0577c6.png)

## ✅ Accepted answer — @P0lip

Hey!
I'm afraid you cannot do that.
Spectral outputs the range of values that are invalid, and there's no way to point it at a particular line specifically, as it'll always refer to the invalid value.
In your case, the error is actually not shown for all lines, but it's the value of `foo` property that's highlighted.
Note how that red-ish `~` starts right after `:` and not at the beginning.

I have a feeling the VS Code extension could be slightly adjusted to provide such a possibility, but there's not much you can do from the Spectral point of view.
It appears to me that it uses the aforementioned ranges which lead to the behavior you experience.
If it ignored the end boundary of the range, we'd end up having the line on which property foo is placed highlighted.
