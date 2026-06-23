---
number: 3
title: "Spectral Integration - Phase 1"
state: "closed"
labels: ["discussion"]
author: "rossmcdonald"
created: "2018-09-13T16:30:20Z"
updated: "2018-10-05T22:02:35Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/3"
---

# Spectral Integration - Phase 1

## Overview

The purpose of Phase 1 is to be an MVP of integrating Spectral into the Stoplight UI. This will include:

- [x] Add JSON schema validation (required, discussed below) #1 
- [x] A common rule-set that applies to all projects (not extendable), where specific rules can be enabled/disabled through UI. Which rules are enabled/disabled is tied to the session, so it won't live in the project. #5
- [x] Functionality for running rules within the context of the UI (ie, replace sway with Spectral).
- [x] Functionality for returning rule results and categorizing based on severity and lint/validation. Also interpreting the Spectral result format into results needed by UI.

### Validation

- JSON schema validation (tied to the current file-type, ie `oas2`, `oas3`), with a valid/not-valid response
- Items marked as invalid are errors (not warnings)
- Should not be able to disable validation

### Linting

- Should be able to be enabled/disabled #2 
- Be able to mark certain rule severity (error vs warning) #6 
- [future] Should be able to customize/extend functionality
- [future] Should be able to store rules in project

### Open Questions

- [x] How to differentiate which rules apply to which file types? Should we add it it to the rule object, or should there be some other method used (ie, something similar to tslint, where you can group rule names by file type but disconnected from rule definition)?
- [x] Should the default rule set mimic the current sway warning rules?
- [x] How to define validation vs lint rules? Should validations even be customizable?
- [x] How to return validation vs lint results? 
- [x] Should validations just be a rule type (similar to the other lint rules), or should we have a separate rule format for validations?
