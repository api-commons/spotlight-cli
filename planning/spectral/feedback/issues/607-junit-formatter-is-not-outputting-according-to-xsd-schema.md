---
number: 607
title: "Junit formatter is not outputting according to XSD Schema"
state: "closed"
labels: ["t/bug"]
author: "CasperJ"
created: "2019-09-29T19:23:32Z"
updated: "2019-10-02T20:26:26Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/607"
---

# Junit formatter is not outputting according to XSD Schema

**Describe the bug**
When using the JUnit formatter (`--format=junit --output=test.xml`) then the output XML is not aligned with the XSD Schema (https://github.com/windyroad/JUnit-Schema/blob/master/JUnit.xsd).

JUnit only supports "error" or "failure", not "warning", "hint" etc.

**To Reproduce**

1. Given an OpenAPI document that doesn't have an `operationId` should create a `warning`
2. Run this CLI command `lint myopapi.yaml --format=junit --output=test.xml`
3. See test.xml
```xml
<?xml version="1.0" encoding="utf-8"?>
<testsuites>
    <testsuite package="org.spectral" time="0" tests="2" errors="2" name="openapi.yaml">
        <testcase time="0" name="org.spectral.operation-description" classname="openapi">
            <warning message="Operation `description` must be present and non-empty string."><![CDATA[line 13, col 9, Warning - Operation `description` must be present and non-empty string. (operation-description)]]></warning>
        </testcase>
        <testcase time="0" name="org.spectral.operation-operationId" classname="openapi">
            <warning message="Operation should have an `operationId`."><![CDATA[line 13, col 9, Warning - Operation should have an `operationId`. (operation-operationId)]]></warning>
        </testcase>
    </testsuite>
</testsuites>
``` 

**Expected behavior**
 - testsuites/testsuite/testcase/warning is not a valid element. must be either "error" or "failure"
 - testsuites/testsuite@tests should not be equal "2" - ti should be the total number of tests run
 - if all tests succeeds then a file should still be outputted (which should include the number of tests passed)

**Additional context**
I would love to work on fixing this bug, but for now its here for reference ;)
