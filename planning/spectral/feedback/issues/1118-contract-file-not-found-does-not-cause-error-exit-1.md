---
number: 1118
title: "Contract file not found does not cause error(exit 1)"
state: "closed"
labels: ["t/bug"]
author: "rogersolsvik"
created: "2020-04-23T11:41:17Z"
updated: "2020-04-23T14:03:07Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1118"
---

# Contract file not found does not cause error(exit 1)

**Describe the bug**
When Spectral does not find the contract file to lint, it "exits 0", seemingly happy with that result.
The output message is "No results with a severity of 'error' or higher found!"

This sometimes causes us to miss out on updating our build job for contract validation if the contract has changed name or is re-located.

**To Reproduce**

1. Given a OpenApi file that does not exist
2. Run this CLI command 'spectral lint no_contract.yaml'
3. See no errors

**Expected behavior**
I would expect Spectral to exit the process with status "1" as you have provided a file that does not exist. I currently see no use cases where the current behaviour is preferred.

**Environment (remove any that are not applicable):**
 - Library version: 5.2.0
 - OS: Linux, MacOS
