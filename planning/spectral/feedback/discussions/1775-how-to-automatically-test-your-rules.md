---
number: 1775
title: "How to automatically test your rules"
category: "Ideas"
author: "lkleeven"
created: "2021-08-11T08:55:01Z"
upvotes: 2
comments: 3
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1775"
---

# How to automatically test your rules

Hi all,

We just started working with spectral and started on writing our own OpenAPI specification rules. So far things are going fine, but some of the rules are hard to define and need quite a few manual tests to verify. Given that we want to share these rules among a large number of teams we want to be sure that our rules work as expected, and keep working as expected.

Is there any way of setting up automatic tests that test your rules? For instance run against a spec and check that a rule is/isn't triggered and do this for a number of specs.
If there isn't are there any plans for providing such a feature?
