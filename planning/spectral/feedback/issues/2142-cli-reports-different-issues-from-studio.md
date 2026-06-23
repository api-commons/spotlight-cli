---
number: 2142
title: "CLI reports different issues from studio"
state: "closed"
labels: ["t/bug"]
author: "petkostas"
created: "2022-04-29T12:55:14Z"
updated: "2024-01-21T18:50:20Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2142"
---

# CLI reports different issues from studio

**Describe the bug**
I have a set of OAS split specifications while running studio and checking any of the OAS files I get different kinds of linting errors between the studio (local) and spectral cli
Even if I fix the errors in the studio, I keep getting some inconsistencies between the CLI and the studio.
Additionally, it seems that spectral encounters problems when using properties that are named similar to OAS keywords (in the above example enum which is used as a field name for the API payload). The CLI **does** not complain about the enum.

**To Reproduce**

Unfortunately, I cannot share the OAS, but I might try to reproduce it with a generic one.

**Expected behavior**
Spectral CLI and Stoplight studio align in the reported errors.

**Screenshots**
Studio:
![spectral_studio](https://user-images.githubusercontent.com/3758537/165947414-d5f06a18-9eed-4602-aaa4-d6bba60bbdd4.png)

CLI:
![spectral_cli](https://user-images.githubusercontent.com/3758537/165947491-20458640-4e7a-4ab7-a534-7a9b4fb48fb4.png)

**Environment (remove any that are not applicable):**
 - Library version: 6.3.0
 - OS: Ubuntu Linux
 - Browser: not relevant.

**Additional context**
Add any other context about the problem here.
