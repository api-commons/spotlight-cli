---
number: 678
title: "Make it easier to detect unsupported formats"
state: "closed"
labels: ["enhancement"]
author: "nulltoken"
created: "2019-10-13T05:42:46Z"
updated: "2019-12-16T17:47:13Z"
comments: 0
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/678"
---

# Make it easier to detect unsupported formats

**User story.**
As a API Manager, I can easily distinguish that some of the files I'm trying to lint are unfit, so that I can refine my selection process (if I'm blindly globbing too widely) or even fix my files (would that be required).

Given the following file

**nope.yaml**:
```yaml
%YAML 1.2
---
openapi: 30.0

nope: indeed
```
Running Spectral against it provides me with ~~a less than rich experience~~ an experience that could be greatly improved :wink:

```bash
$ yarn spectral lint ./nope.yaml
No errors or warnings found!

Done in 1.30s.
```

Indeed, I may think that my file is perfect and that it passed all the many built-in checks Spectral comes up with.

Whereas the sad reality is that it went through NO rule at all.

Spectral cli only hints when a _supported_ format is found.

This might become a bit more confusing now that Spectral accepts multiple paths and even globs.

**Describe the solution you'd like**

I'd really like to turn that into a positive visual indicator for the user. One idea would be to turn this into a "rule-like" feedback (that the user could optionally control through a ruleset (silencing it or raising its default severity error, for instance))

```
$ yarn spectral lint ./nope.yaml
c:/nope.yaml
  1:1   info  unrecognized-format   Provided file format doesn't match any of the built-in validator

✖ 1 problem (0 errors, 0 warnings, 1 infos)
```

**Embedded free bonus point:** Getting this feedback trough the standard pipeline would seamlessly feed the new JUnit formatter.

**Additional context**

An :apple: a day keeps the :man_health_worker: away
