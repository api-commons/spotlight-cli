---
number: 2462
title: "Integrate Spectral with Sonarqube"
state: "open"
labels: ["enhancement", "triaged"]
author: "michaelsonnleitner"
created: "2023-04-29T12:12:20Z"
updated: "2024-11-10T15:07:59Z"
comments: 5
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2462"
---

# Integrate Spectral with Sonarqube

**User story.**
As a Developer, I would like to get issues displayed in Sonarqube if my openapi spec does not apply to the provided spectral ruleset. 

**Is your feature request related to a problem?**
Sonarqube is a common tool in java developer lifecycle and has no Openapi Rules per default. There are also no additional plugins available which would do that job. So currently no openapi yamls can be checked. Spectral can lint openapi yamls but has no integration to sonarqube.

**Describe the solution you'd like**
create an sonarqube plugin which integrates spectral during code analyse.
