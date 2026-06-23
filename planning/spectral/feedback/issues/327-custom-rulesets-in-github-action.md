---
number: 327
title: "Custom Rulesets in GitHub Action"
state: "closed"
labels: ["enhancement", "p/urgent"]
author: "brianmrock"
created: "2019-07-06T19:28:33Z"
updated: "2020-04-28T16:09:07Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/327"
---

# Custom Rulesets in GitHub Action

**User Story**

As a slightly technical user who is dipping my toe into the world of API Specs, I would like to get feedback in PRs about my specs, and I want that to be as easy as possible, so enabling a GitHub Action and having the whole thing done would be perfect.

**Details**

We have a GitHub Action: https://github.com/stoplightio/spectral-action which is stuck on Spectral v4. We need to upgrade it to v5.x, improve the README so its obvious how it works, and make it look for spectral rulesets in the root.

We should also document it. I think taking this section:

    https://stoplight.io/p/docs/gh/stoplightio/spectral/docs/guides/workflows.md#continuous-integration

and turning it into an "Automation & CI" guide, would mean we can show how it works with CircleCI and GitHub Actions, and folks can use one of those two approaches for inspiration for other CI implementations. 

Test out any instructions you write down! 😅

**Acceptance Criteria**
- Action is upgraded to support Spectral v5.x
- Detect `.spectral.{json|yml|yaml}` in the root folder like the CLI / Studio does
- A custom ruleset URLs or filepath via SPECTRAL_RULESET variable
- Add docs to spectral (maybe docs/continuous-integration.md), with a section on GitHub Actions where a user can follow instructions to set it up in a few minutes
- Release a v1.0.0 of the GitHub Action
- Add a license (Apache 2.0)

**Out of Scope**

Custom rules, custom functions, multiple rulesets, etc.
