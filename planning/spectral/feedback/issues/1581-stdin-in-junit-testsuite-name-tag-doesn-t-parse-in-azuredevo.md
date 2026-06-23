---
number: 1581
title: "<STDIN> in junit testsuite name tag doesn't parse in AzureDevOps Test Result Publishing"
state: "closed"
labels: ["t/bug"]
author: "andylockran"
created: "2021-04-20T13:19:37Z"
updated: "2021-05-17T15:35:41Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1581"
---

# <STDIN> in junit testsuite name tag doesn't parse in AzureDevOps Test Result Publishing

**Describe the bug**
I've used spectral to output the junit.xml file as part of a pipeline on Azure DevOps.

The AzureDevOps CI process has a pipeline step to product a test results summary page, as derived from a junit-compliant output.

Unfortunately the spectral output isn't accepted as being junit-compliant due to the error below:

2021-04-20T13:03:01.1685016Z ##[warning]Failed to read /azp/agent/_work/9/s/SPECTRAL-1618923773.xml. Error : '<', hexadecimal value 0x3C, is an invalid attribute character. Line 3, position 84.

This appears to be the <[[CDATA xxx ]]> section in the junit output, as it's rejecting the `<` from being valid xml. 

I'm trying to workout if this is invalid junit output, or a problem with the ADO junit parser.

 - Spectral version: 5.9.1
 - OS: Ubuntu

**Additional context**
If the junit schema is valid, and this is a problem with ADO, many apologies.
