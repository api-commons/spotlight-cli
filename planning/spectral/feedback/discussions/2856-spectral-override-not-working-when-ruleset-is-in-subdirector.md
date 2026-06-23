---
number: 2856
title: "Spectral override not working when ruleset is in subdirectory - rule still triggers despite being turned off"
category: "Q&A"
author: "sidneyamani"
created: "2025-10-10T10:50:45Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2856"
---

# Spectral override not working when ruleset is in subdirectory - rule still triggers despite being turned off

Hi everyone,

I'm having an issue with Spectral where my override configuration doesn't seem to work when my ruleset file is located in a subdirectory. The rule I'm trying to disable still triggers even though I've specified it should be turned off for a specific file.

Here's my minimal reproducible example:
**Project structure:**
```
spectral-test/
├── foo/
│   └── rules.yml
└── bar/
    └── api.yml
```
**foo/rules.yml:**
```yaml
rules:
  test-rule:
    description: no test in schemas
    message: "No 'test' in schemas"
    severity: error
    given:
      - $.components.schemas.*.properties
    then:
      field: '@key'
      function: pattern
      functionOptions:
        notMatch: /test/i

overrides:
  - files:
      - '**/api.yml'
    rules:
      test-rule: 'off'
```
**bar/api.yml:**
```yaml
openapi: 3.0.0
info:
  version: latest
  title: test
paths: {}
components:
  schemas:
    Schema:
      type: object
      description: A schema
      properties:
        test_name:
          type: string
          description: Name of schema
```
**The Problem**
When I run Spectral from the project root:
```bash
pnpm dlx @stoplight/spectral-cli@6.15.0 lint -vvv -r foo/rules.yml bar/api.yml
```
I get:
```
Found 1 rules (1 enabled)
Linting /Users/sidney/work/spectral-test/bar/api.yml

/Users/sidney/work/spectral-test/bar/api.yml
 13:19  error  test-rule  No 'test' in schemas  components.schemas.Schema.properties.test_name

✖ 1 problem (1 error, 0 warnings, 0 infos, 0 hints)
```
The test-rule is still being applied even though I have an override that should turn it off for bar/api.yml.

**What I tried**

I tried to replace '**/api.yml' with  'bar/api.yml', Same result. However if I use `../**/api.yml` or '../bar/api.yml' it works.

**Questions**

- Do I have to put the ruleset file at the root directory for '**/api.yml' overrides to work properly?
- Could this be a bug with how Spectral processes overrides when the ruleset is in a subdirectory? I'd expect '**/api.yml' to match subdirectories.

I'm using Spectral CLI version 6.15.0.
Any help would be appreciated! Thanks in advance.
