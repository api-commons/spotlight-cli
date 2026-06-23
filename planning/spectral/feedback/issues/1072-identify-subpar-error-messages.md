---
number: 1072
title: "Identify subpar error messages"
state: "open"
labels: ["p/high", "triaged", "breaking", "chore"]
author: "P0lip"
created: "2020-04-07T21:27:47Z"
updated: "2024-05-31T12:35:36Z"
comments: 8
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1072"
---

# Identify subpar error messages

**Chore summary**

Although the overall usefulness of errors reported by Spectral has increased over the course of last months, there is still plenty of room for improvement.

Certain errors are still inconsistent, some of them are not particularly human-friendly, to say at least.
Error messages that are not constant are primarily prone to be troublesome since there is a variety of cases to cover, therefore let's focus on them - looking at you, `schema` function.

To help us identify flaws, we can leverage some existing repositories containing plenty of public APIs, such as APIs guru, and similar.

Then, ideally, in the context of Studio, let's play around with specs using form or code view and watch errors produced in the diagnostics panel - see whether they make sense, they are easy to locate, and ideally, easy to resolve by a potentially non-technical person.

While testing the openapi documents and playing around making edits in studio forms/code view, document each subpar spectral error that you come across, along with as basic a spec document example as possible to reproduce the bad error.

**Chore Scope**

Let's accumulate these bad error messages and an example reproduction spec for each one in this issue (we'll use these example specs as test cases when we improve the errors). Fixing the issues is out of scope, we'll create a separate issue once this is done. I suggest time boxing this exercise to a couple of hours.
