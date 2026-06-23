---
number: 1755
title: "Vulnerabilities introduced in your package"
state: "closed"
labels: []
author: "paimon0715"
created: "2021-07-23T14:17:43Z"
updated: "2021-07-29T11:11:38Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1755"
---

# Vulnerabilities introduced in your package

Hi, @P0lip @nulltoken, I’d like to report two vulnerabilities introduced in your package **@stoplight/spectral**:
### Issue Description
Vulnerabilities [**CVE-2021-23337**](https://snyk.io/vuln/SNYK-JS-LODASHTEMPLATE-1088054) and [**CVE-2020-28500**](https://snyk.io/vuln/SNYK-JS-LODASH-1018905) are detected in package **lodash<4.17.21** and lodash@4.17.20 is directly referenced by **_@stoplight/spectral@5.9.1_**. We noticed that the vulnerabilities has been removed since **_@stoplight/spectral@6.0.0-alpha1_**.
  
   However, @stoplight/spectral's popular previous version **_@stoplight/spectral@5.9.1_** ([41,392 downloads per week](https://www.npmjs.com/package/@stoplight/spectral/v/5.9.1?activeTab=versions)) is still transitively referenced by a large amount of latest versions of active and popular downstream projects (about **32 downstream projects**, e.g., ibm-openapi-validator 0.46.1, orval 5.4.12, insomnia-send-request 2.3.0, insomnia-inso 2.3.0, smartlint 1.1.11, @bladedancer/central-spec-hook@1.0.2, etc.).
As such, issue [**CVE-2021-23337**](https://snyk.io/vuln/SNYK-JS-LODASHTEMPLATE-1088054) and [**CVE-2020-28500**](https://snyk.io/vuln/SNYK-JS-LODASH-1018905) can be propagated into these downstream projects and expose security threats to them.
   
   These projects cannot easily upgrade **@stoplight/spectral** from version **_5.9.1_** to _**(>=6.0.0-alpha1)**_. For instance, **_@stoplight/spectral@5.9.1_** is introduced into the above projects via the following package dependency paths:
(1)`@bladedancer/central-spec-hook@1.0.2 ➔ @bladedancer/api-builder-plugin-spectral@1.0.0 ➔ @stoplight/spectral@5.9.1 ➔ lodash@4.17.20`
    **......**
    
The projects such as **@bladedancer/api-builder-plugin-spectral**, which introduced @stoplight/spectral@5.9.1, are not maintained anymore. These unmaintained packages can neither upgrade **@stoplight/spectral** nor be easily migrated by the large amount of affected downstream projects.  
 On behalf the downstream users, could you help us remove the vulnerability from package @stoplight/spectral@5.9.1?

### Suggested Solution

Since these inactive projects set a version constaint **5.9.\*** for **@stoplight/spectral** on the above vulnerable dependency paths, if **@stoplight/spectral** removes the vulnerability from 5.9.1 and releases a new patched version **_@stoplight/spectral@5.9.2_**, such a vulnerability patch can be automatically propagated into the 32 affected downstream projects.


In **_@stoplight/spectral@5.9.2_**, you can kindly try to perform the following upgrade:
`lodash 4.17.20 ➔ 4.17.21`;  
**Note:**
**_lodash@4.17.21(>=4.17.21)_** has fixed the vulnerabilities ([**CVE-2021-23337**](https://snyk.io/vuln/SNYK-JS-LODASHTEMPLATE-1088054) and [**CVE-2020-28500**](https://snyk.io/vuln/SNYK-JS-LODASH-1018905))

Thank you for your contributions.

Best regards,
Paimon
