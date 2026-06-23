---
number: 2381
title: "Allow creating a rule that combines other rules using OR"
state: "open"
labels: ["enhancement", "triaged"]
author: "altmank"
created: "2023-01-12T18:27:53Z"
updated: "2024-05-31T12:34:47Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2381"
---

# Allow creating a rule that combines other rules using OR

**User story.**
As a spectral user, I can create rules that combine other rules and evaluate them using OR, so that I can define rules where one of multiple possible approaches is valid but only 1 is required.

**Is your feature request related to a problem?**
I cannot create a rule currently that forces a parameter to have an example but allow the example to be in the schema or in the top level parameter object.

Example:
![image](https://user-images.githubusercontent.com/22986384/212148890-10fdc617-09d7-4afa-a085-37f2701ce92a.png)


**Describe the solution you'd like**
I can define each of these rules individually, to look for example in the schema object, or in the parameter object, and then add a truthy function on them, but I cannot check both of these together using OR logic.

**Additional context**
Add any other context or screenshots about the feature request here.
