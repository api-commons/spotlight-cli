---
number: 1131
title: "Unable to Write Rules to Check Properties"
state: "closed"
labels: ["t/bug"]
author: "andrei572"
created: "2020-04-28T23:47:59Z"
updated: "2020-04-29T12:53:02Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1131"
---

# Unable to Write Rules to Check Properties

Is there possibly a (known) issue with jsonpath in spectral rules? I am trying to create a custom rule that would check all properties in a spec for a description present using the `truthy` function, except for the ones that are references, and I am unable to successfully iterate over $..properties.* and check for the presence of $ref. Spectral seems to be selecting OAS schemas that don't even have the `properties` key.

This seems like like it should work to find all properties that are not references: $..properties.*[?(!@['$ref'])].

But it doesn't.
