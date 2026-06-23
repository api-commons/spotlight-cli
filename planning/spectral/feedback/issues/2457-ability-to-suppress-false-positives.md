---
number: 2457
title: "Ability to suppress false positives"
state: "closed"
labels: []
author: "tillig"
created: "2023-04-18T19:26:42Z"
updated: "2023-08-08T20:59:58Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2457"
---

# Ability to suppress false positives

**User story.**

As a developer, I can suppress a specific rule violation, so that I can ignore false positives or exceptions to the rules.

**Is your feature request related to a problem?**

There are times when you have a linting rule that you definitely want applied everywhere, except there's a schema with one operation that _just can't conform_. Maybe it can't be changed, maybe you can't quite get the regex right, but whatever the case is, _that one violation_ really isn't a violation. It needs to be suppressed or otherwise ignored.

However, you don't want to turn the whole rule off, because you want to keep linting _everything else_ with that rule. You just need the line-item suppression.

**Describe the solution you'd like**

A way to configure a set of suppressions for a given schema. This may take the form of...

- Another section in the `.spectral.yml` file with suppressions.
- A separate `.spectral.exclusions.yml` or similar file, so you can decouple the ruleset from the suppressions.
- Meta-markup like `{ "$suppress": "rule-name-here" }` inside the JSON schema.

...or some other mechanism to indicate "don't warn/err on this specific violation."

**Additional context**

`IRuleResult` has a `path` (JsonPath) property, so the source of the error is known. Perhaps that's the way to specify the exclusion - a JsonPath value along with a list of rules to suppress at that site.

Alternatively, I've seen some systems generate a "fingerprint" based on the file, source location, etc., some sort of hash - that might be a second step, though I think it'd be a more far-reaching change than just using the JsonPath value.

I did see that #1145 was opened a couple years ago and then closed, but it doesn't look like anything was addressed. This is sort of a duplicate of that one.
