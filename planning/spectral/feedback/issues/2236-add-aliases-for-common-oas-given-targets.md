---
number: 2236
title: "Add aliases for common OAS `given` targets"
state: "closed"
labels: ["documentation", "chore"]
author: "heitortsergent"
created: "2022-08-10T15:01:18Z"
updated: "2022-12-19T16:49:36Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2236"
---

# Add aliases for common OAS `given` targets

**Chore summary**
We have the [`aliases` feature](https://meta.stoplight.io/docs/spectral/e5b9616d6d50c-custom-rulesets#aliases) to help users target certain parts of a spec without having to remember the JSONPath expression, and we have 2 already created [here](https://github.com/stoplightio/spectral/blob/4447d81ace5aab90e7cd48a8e182103b6a90ee81/packages/rulesets/src/oas/index.ts#L32-L38) for OAS.

We can expand this list of aliases to cover more common targets that people use in their rulesets to make it easier for users to create and maintain rulesets.

**Tasks**
- [ ] Add new aliases: [Notion page with list of possible aliases](https://www.notion.so/stoplight/List-of-Aliases-9ff1454f3599450aa11d4588fda75f2d)
- [ ] Add docs
