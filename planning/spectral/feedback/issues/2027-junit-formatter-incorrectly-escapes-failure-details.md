---
number: 2027
title: "JUnit formatter incorrectly escapes failure details"
state: "closed"
labels: ["released"]
author: "fgreinacher"
created: "2022-01-18T15:01:15Z"
updated: "2022-01-21T12:11:39Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2027"
---

# JUnit formatter incorrectly escapes failure details

**Describe the bug**

The JUnit formatter runs failure details through `xmlEscape` although these are contained within a `CDATA` section:

https://github.com/stoplightio/spectral/blob/develop/packages/cli/src/formatters/junit.ts#L51-L55

This [is unnecessary](https://stackoverflow.com/a/223782) and can cause visualization problems when rendering the results in a post-processing tool.

**To Reproduce**

Run spectral with JUnit formatter against a spec with errors:

```xml
<testcase time="0" name="org.spectral.json:api-ContentType-Error" classname="path/to/spec">
    <failure message="SHOULD have a content type 'application/vnd.api+json'.">
        <![CDATA[
line 126, col 19, SHOULD have a content type &apos;application/vnd.api+json&apos;. (json:api-ContentType-Error) at path             #/paths/~1info/get/responses/200/content
        ]]>
    </failure>
</testcase>
```

**Expected behavior**

```xml
<testcase time="0" name="org.spectral.json:api-ContentType-Error" classname="path/to/spec">
    <failure message="SHOULD have a content type 'application/vnd.api+json'.">
        <![CDATA[
line 126, col 19, SHOULD have a content type 'application/vnd.api+json'. (json:api-ContentType-Error) at path             #/paths/~1info/get/responses/200/content
        ]]>
    </failure>
</testcase>
```

**Prososal**

Do what's suggested in the [SO thread](https://stackoverflow.com/a/36331725) and drop `xmlEscape` in favor of something like `replace("]]>", "]]]]><![CDATA[>")`.
