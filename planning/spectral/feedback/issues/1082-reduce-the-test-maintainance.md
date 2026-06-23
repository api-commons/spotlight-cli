---
number: 1082
title: "Reduce the test maintainance"
state: "closed"
labels: ["tech-debt", "chore", "v6"]
author: "nulltoken"
created: "2020-04-13T14:26:21Z"
updated: "2021-06-10T13:10:26Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1082"
---

# Reduce the test maintainance

**Chore summary**
From https://github.com/stoplightio/spectral/pull/1079#discussion_r407344886

From @nulltoken:
>Just off-topic thought: This current test set up compels us to duplicate tests and use two different libs to intercept fetch calls and, depending on the the scope, use 3 different suffixes for test files (jest, karma or void).
>This makes contributing and reviewing a little bit harder than it should be.
>I feel there might be a better way to do this.
>Thoughts?

**From @P0lip**
>>@P0lip Just off-topic thought: This current test set up compels us to duplicate tests and use two different libs to intercept fetch calls and, depending on the the scope, use 3 different suffixes for test files (jest, karma or void).
>
>Yeah, that is true.
>>    I feel there might be a better way to do this.
>
>We could simply drop nock and use fetch-mock everywhere, I believe.
>Nock is pretty cool though as it's an actual server.


**Tasks**
- [ ] Decrease reliance on built-in rulesets in tests - this makes it more challenging to update OAS (and possibly AsyncAPI) ruleset
- [ ] Use fetch-mock everywhere
- [ ] Find a way to avoid test duplication between node based and browser based testing (when dealing with `window.fetch` for instance)
- [ ] Remove test duplicates as much as possible
