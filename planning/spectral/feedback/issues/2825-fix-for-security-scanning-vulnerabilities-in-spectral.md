---
number: 2825
title: "Fix for Security scanning vulnerabilities in Spectral"
state: "open"
labels: []
author: "vish-pri"
created: "2025-06-11T05:59:23Z"
updated: "2025-06-11T05:59:23Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2825"
---

# Fix for Security scanning vulnerabilities in Spectral

Hi Team, 
I did a security scanning on the Spectral codebase in the develop branch and the following vulnerabilities were identified. Could you please have a look and let know if they are already accepted or can be fixed?

Security Scanning:
1. Improper neutralization of data within XPath expressions (XPath Injection) - https://cwe.mitre.org/data/definitions/643.html in oasExample.ts
2. Uncontrolled resource consumption - https://cwe.mitre.org/data/definitions/400.html
/packages/rulesets/src/arazzo/functions/arazzoCriterionValidation.ts:42
3. Improper neutralization of directives in dynamically evaluated code ('Eval Injection')
 https://cwe.mitre.org/data/definitions/95.html 
 packages/ruleset-bundler/src/loader/browser.ts:19
4. Improper neutralization of directives in dynamically evaluated code ('Eval Injection')- https://cwe.mitre.org/data/definitions/95.html
packages/ruleset-bundler/src/__tests__/index.test.ts:89

Dependency Scan:
1. ip SSRF improper categorization in isPublic - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-29415 - Vulnerable Package
ip:2.0.1
2. ws affected by a DoS when handling a request with many HTTP headers - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-37890 - Vulnerable Package
ws:8.11.0
3. path-to-regexp outputs backtracking regular expressions - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-45296 - Vulnerable Package
path-to-regexp:2.4.0
4. Improperly Controlled Modification of Object Prototype Attributes ('Prototype Pollution') - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2022-46175 - json5:2.2.1
5. Regular Expression Denial of Service (ReDoS) in cross-spawn - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-21538 - cross-spawn:7.0.3
6. tar-fs Vulnerable to Link Following and Path Traversal via Extracting a Crafted tar File - https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-12905 - tar-fs:2.1.1

Thanks in advance!
