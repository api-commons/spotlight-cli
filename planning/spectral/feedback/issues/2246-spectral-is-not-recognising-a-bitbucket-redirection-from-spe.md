---
number: 2246
title: "Spectral is not recognising a bitbucket redirection from .spectral.yml file"
state: "closed"
labels: ["t/bug", "released", "p/medium", "ruleset-migrator"]
author: "infraos89"
created: "2022-08-17T10:51:32Z"
updated: "2022-09-13T14:10:22Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2246"
---

# Spectral is not recognising a bitbucket redirection from .spectral.yml file

**Describe the bug**
Spectral is not recognising bitbucket redirection from .spectral.yml file

**To Reproduce**
From a given bitbucket repository we are redirecting to our spectral project in a .spectral.yml file:

```
formats:
  - oas3
extends:
  - spectral:oas
  - http://domain/bitbucket/projects/API/repos/spectral-rules/raw/.spectral.yml?at=refs%2Fheads%2Fmaster
```

The spectral file has in the "extends" section references to other files with spectral rules (oas-rules.yml & oas-schema.yml), as well as its own rules:

```
#####################################################################

formats:
  - oas3
extends:
  - [spectral:oas, recommended]
  - [oas-rules.yml, recommended]
  - [oas-schema.yml, recommended]
documentationUrl: https://docu/API/testing_api/rules

#####################################################################
```

Image of the spectral project:

![image](https://user-images.githubusercontent.com/48118257/185100970-bad1529d-7e91-49c5-91e4-8ce0b2fd16e9.png)

This is the message error shown when we try to use the redirection link to another repo in Stoplight:

`ENOENT: no such file or directory, open 'c:\Users\Documents\Stoplight Studio\apiproject-v1.git\oas-rules.yml'`


**Expected behavior:**

It must work fine since we were working with an old version of Stoplight/spectral without any problem. This error started to show when we upgrade the Stoplight version from 2.3.0-stable.5931 to the actual one.
Seems that the Spectral version 6 is causing the problem, and don't know if there is any approach to fix this redirection in order to work as it used to.

**Environment:**

Stoplight Studio 2.8.1-stable.7704
OS: Windows 10
