---
number: 1143
title: "A more detailed example for `except:` in `.spectral.yml`"
state: "closed"
labels: []
author: "lornajane"
created: "2020-05-04T13:44:54Z"
updated: "2020-05-17T14:17:45Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1143"
---

# A more detailed example for `except:` in `.spectral.yml`

**User story.**
As an API publisher, I want to describe our APIs and lint with spectral. Some of our APIs aren't yet perfect, but I don't want to blanket disable those rules. I spotted that since 5.2.0 we have `except` which is an ideal way to give permission for violations BUT I have no idea how to refer to a path with { in it such as `paths/~1accounts/{api_key}/secrets/get`

**Is your feature request related to a problem?**
I'd like to try using `except` in a common `.spectral.yml` file that Stoplight Studio can understand rather than moving to one-ruleset-per-spec which was our previous plan. I'm struggling to find enough support on using this new feature though :/

**Describe the solution you'd like**
More examples! I am happy to ask lots of questions and the corral the examples into a docs PR if that's a better use of your expertise though :) I have a wide selection of varying API specs that I need to get this working for.

**Additional context**
I am _assuming_ that Stoplight Studio will update spectral and working on `except` will work out fairly soon. If not, it would be good to know and I think we'll just stick with asking people to run a script or push their branch to get the linting working correctly.
