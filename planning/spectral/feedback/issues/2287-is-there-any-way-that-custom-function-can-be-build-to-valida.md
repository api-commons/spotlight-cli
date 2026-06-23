---
number: 2287
title: "Is there any way that custom function can be build to validate only RE2 regular expression syntax"
state: "closed"
labels: []
author: "avinashpise"
created: "2022-09-20T12:38:17Z"
updated: "2022-09-30T14:56:29Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2287"
---

# Is there any way that custom function can be build to validate only RE2 regular expression syntax

**User story.**
As a Open API specification Developer,I can validate only RE2 regulare expression syntax.

**Is your feature request related to a problem?**
Spectral tool support to write a custom function to apply custom rules. We can build the custom rule using the core function such a schema, casing or pattern. Here if we use the schema funtion to validate the json schema, i belive it supports only PCRE syntaxt to validate the schema defination and not the RE2 syntax.
for Eg. if schema contains the lookahead pattern, then through error 
**Describe the solution you'd like**
Is there any way that RE2 syntax support can be incuded? any flag or any setting which can be passed to core function and it will validate only PCRE or RE2 or both.
