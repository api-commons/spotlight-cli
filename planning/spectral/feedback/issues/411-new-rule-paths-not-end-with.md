---
number: 411
title: "new rule: paths not end with / "
state: "closed"
labels: ["enhancement", "good first issue"]
author: "philsturgeon"
created: "2019-07-30T19:13:19Z"
updated: "2019-08-22T13:34:33Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/411"
---

# new rule: paths not end with / 

A rule I liked in Speccy was that paths should not end with a /. This is an opinion based in a bit of logic. 

Some web servers and web application frameworks will tream /foo and /foo/ as identical, but some don't, so writing them into your description document can cause a bit of confusion. Should you specifically add /foo/ ? That means people who type /foo (most people) will get a 404...

Lets push people towards documenting the most simple case. There is no reason to have a trailing slash on your API calls anyway, so why roll the dice on an implementation maybe supporting a thing you dont need.
