---
number: 2350
title: "Deprecate documentation rules"
state: "open"
labels: ["enhancement", "triaged"]
author: "philsturgeon"
created: "2022-11-28T15:47:47Z"
updated: "2024-05-31T12:34:41Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2350"
---

# Deprecate documentation rules

**User story.**
As a Spectral CLI user who has never hard of Stoplight, I can validate the bare necessities of my OpenAPI documents, without getting any Stoplight-centric rules or opinions about what would make good quality OpenAPI-documentation in your tooling, so that I can focus on just making OAS that works. If I am interested in making better documentation and/or Stoplight specific displays I can use https://github.com/stoplightio/spectral-documentation. 

**Is this related to a problem?** 

These rules do not related to whether OpenAPI is valid or not, so moving them into an optional ruleset helps reduce noise for new users who don't know any different, giving them more time to focus on building their APIs.

**Describe the solution you'd like**

Many of the most opinionated rules were either removed in previous versions, or bumped down to `recommended: false`, but there are more we could remove now that spectral-documentation is complete.

- info-contact
- contact-properties
- info-description
- info-license
- license-url
- openapi-tags
- openapi-tags-alphabetical
- operation-description
- operation-operationId-valid-in-url
- operation-singular-tag
- operation-tags
- operation-success-response
- oas2-parameter-description
- oas3-parameter-description
- tag-description
