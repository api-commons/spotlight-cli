---
number: 1888
title: "can't fetch spectral custom ruleset over https with self signed certificate in certificate chain"
state: "closed"
labels: []
author: "OnimeNoKyo"
created: "2021-10-06T16:58:45Z"
updated: "2022-06-29T22:20:39Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1888"
---

# can't fetch spectral custom ruleset over https with self signed certificate in certificate chain

Describe the bug

Spectral-cli fails to fetch custom ruleset that is loaded over HTTPS.

To Reproduce

    With spectral-cli v5.9.2
    Given any OpenAPI document
    Run this CLI command

spectral lint -r https://internal-bitbucket-repository/raw/rulesets/main-ruleset.yaml open-api.yml

    See error

Could not parse https://internal-bitbucket-repository/raw/rulesets/main-ruleset.yaml: request to https://internal-bitbucket-repository/raw/rulesets/main-ruleset.yaml failed, reason: self signed certificate in certificate chain

Expected behavior

    With spectral-cli v5.9.2
    Given any OpenAPI document
    Run this CLI command (same as above)

spectral lint -r https://internal-bitbucket-repository/raw/rulesets/main-ruleset.yaml open-api.yml

    See good results

OpenAPI 3.x detected
No results with a severity of 'error' or higher found!

Environment (remove any that are not applicable):

    Library version: 5.9.2
    OS: reproduced on Windows 10
