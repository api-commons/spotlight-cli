---
number: 2524
title: "Support for OAS Server Variables"
state: "closed"
labels: ["released"]
author: "mnaumanali94"
created: "2023-08-11T16:54:17Z"
updated: "2023-08-29T19:36:39Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2524"
---

# Support for OAS Server Variables

### **Requirements**

- [ ] Implement a Spectral rule to ensure URLs are valid format even when variables are used

- [ ] Implement a Spectral rule to check that if allowed values (enums) are defined for server variables, the default value should be a part of those allowed values.
    - For instance, if allowed values for `version` are `v1`, `v2`, and `v3`, and the default value is `v4`, then this should throw an error.

- [ ] Implement a rule to ensure that all server variables used in the server URL are defined in the server variables section.
    - For example, if `version` is used in a server URL like `https://api.example.com/{version}`, ensure that `version` is defined as a server variable.

- [ ] Implement a rule to ensure all defined server variables are used in the server URL.
    - If a server variable like `stage` is defined but not used in any server URL, this should trigger a warning.
