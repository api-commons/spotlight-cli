---
number: 2814
title: "Spectral fails to lint file on Windows with () in filename"
state: "open"
labels: []
author: "thompp"
created: "2025-04-30T19:45:37Z"
updated: "2025-04-30T19:55:32Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2814"
---

# Spectral fails to lint file on Windows with () in filename

**Describe the bug**
Spectral fails to lint file on Windows with () in filename.

**To Reproduce**

1. Given an OpenAPI file that has issues that would fail spectral rules where the filename contains open and close parenthesis such as my-json(1).json _or_ my-yaml(1).yaml
2. Run this CLI command: spectral link my-json(1).json _or_ spectral lint my-yaml(1).yaml
3. Notice that even though the file has issues that should cause rule failures to be reported, that none are in fact reported.
4. Rename the file to remove the (1) and any errors/warnings are reported as expected

**Expected behavior**
The existence of parenthesis in the filename should not impact spectral's ability to process an OAS file, or if it does, it should output a single warning or error indicating that the file could not be processed due to the name.

**Environment**
 - Library version: 6.15
 - OS: Windows 10
