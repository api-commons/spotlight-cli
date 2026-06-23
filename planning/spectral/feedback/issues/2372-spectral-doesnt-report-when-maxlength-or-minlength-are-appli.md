---
number: 2372
title: "Spectral doesnt report when maxLength or minLength are applied against non string parameters"
state: "open"
labels: ["enhancement", "triaged"]
author: "savage-alex"
created: "2022-12-22T09:55:23Z"
updated: "2024-05-31T12:34:44Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2372"
---

# Spectral doesnt report when maxLength or minLength are applied against non string parameters

Given a parameter that is NOT a string
When maxLength and or minLength are applied
Then the designer is not informed. 

I was able to apply this to integers, numbers and booleans when testing.

This applies for single items or items within an array
