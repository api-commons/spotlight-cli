---
number: 23
title: "Add a force property to rule definitions"
state: "closed"
labels: ["enhancement", "discussion", "future work"]
author: "casserni"
created: "2018-10-02T21:45:25Z"
updated: "2018-12-11T06:03:24Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/23"
---

# Add a force property to rule definitions

Should we add a force property to rule definitions? What this means is that if `force: true`, the rule toggle will be disabled in the ui more importantly spectral would apply that rule regardless of the configuration file.

#### Use Cases
- An organization might have a set of presets, or a subset of our own presets that they want to apply to every project without allowing their developers to disable.
- Schema validation is technically a rule, so without this it could potentially be disabled in the ui or through the raw configuration file

#### Current Thoughts
- since in phase one of spectral we are not displaying the code view, we can blacklist certain rules to not show in the ui and then they can't get disabled that way
    - issue with this is that a more advanced user can still tinker with the configuration file through git
    - I also want to avoid "hiding" the rules from users, as it might create a confusion around what is being applied during linting/validation
- allow users to disable/enable what they want, if for whatever reason they wanted to disable oas2 schema validation entirely they should be allowed to
    - in the case of an organization, if a developer disables a rule enabled by their organization preset, we can flash a little message or have an extra confirm box to inform them that they are doing something they probably shouldn't be
    - along with the above, maybe instead of a force property we include an `important: true` which does the above confirm box flow


#### ...Discuss
