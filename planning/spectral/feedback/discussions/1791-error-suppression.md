---
number: 1791
title: "Error Suppression?"
category: "Q&A"
author: "sjstraw"
created: "2021-08-27T13:19:35Z"
upvotes: 1
comments: 2
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1791"
---

# Error Suppression?

Hi, all - 

We'd love to apply Spectral to help our devs use our API style guide for new development.  But we aren't starting from scratch; there will be a bunch of APIs which won't adhere to our rules at first, so we will need to go through the process of recreating those APIs and deprecating the old ones.

As this goes on, we will have to tolerate specific non-conforming APIs for awhile while catching new APIs which don't conform.

What facilities does Spectral have that would allow us to suppress errors on specific APIs, so that CI passes, while we clean things up over time?

The docs for Spectral don't seem to mention suppression.  However, it might be possible to define rules or functions which intentionally ignore some content.  What's the best way to do this?

## ✅ Accepted answer — @P0lip

Hey!
Have you considered using [overrides](https://github.com/stoplightio/spectral/blob/develop/docs/guides/4-custom-rulesets.md#overrides)?
I believe this might be a perfect fit for your use case.
