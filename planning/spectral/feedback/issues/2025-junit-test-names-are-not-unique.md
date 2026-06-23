---
number: 2025
title: "JUnit test names are not unique "
state: "closed"
labels: []
author: "fgreinacher"
created: "2022-01-18T11:02:27Z"
updated: "2022-01-20T16:21:11Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2025"
---

# JUnit test names are not unique 

_Originally posted by @m-denton in https://github.com/stoplightio/spectral/issues/935#issuecomment-576752875:_

> Not sure if this fits here or not but it would also be nice to have the names of these errors appended with a timestamp or other unique identifier (simple number incrementation). This is requested as when loading the junit output into tools like Gitlab CI, if there are multiple juinit entries with the same name, only one of those messages will show in the console. For example, see the following (redacted most of the messages so mismatch on the failure count):
> 
> ```
> <?xml version="1.0" encoding="utf-8"?>
> <testsuites>
> <testsuite package="org.spectral" time="0" tests="103" errors="0" failures="103" name="<classname>.yaml">
> <testcase time="0" name="org.spectral.oas3-valid-content-schema-example" classname="<classname>"><failure message="<message> (oas3-valid-content-schema-example)></failure></testcase>
> <testcase time="0" name="org.spectral.oas3-valid-content-schema-example" classname="<classname>"><failure message="<message> (oas3-valid-content-schema-example)></failure></testcase>
> <testcase time="0" name="org.spectral.oas3-schema" classname="<classname>"><failure message="<message> (oas3-schema) at path #/components/responses/GetPartyTypesOk]]></failure></testcase>
> <testcase time="0" name="org.spectral.oas3-valid-schema-example" classname="<classname>"><failure message="<message> (oas3-valid-schema-example)></failure></testcase>
> <testcase time="0" name="org.spectral.oas3-valid-schema-example" classname="<classname>"><failure message="<message> (oas3-valid-schema-example)></failure></testcase>
> <testcase time="0" name="org.spectral.oas3-valid-schema-example" classname="<classname>"><failure message="<message> (oas3-valid-schema-example)></failure></testcase>
> </testsuite>
> </testsuites>
> ```
> 
> Produces this:
> ![image](https://user-images.githubusercontent.com/20402477/72820956-6d207b80-3c35-11ea-8fac-7fb3523dbf57.png)
> 
> 
> Notice it shows _3 failed/error test results.._ when in reality, there was 1 true error, then 5 warnings. Since the names are the same in the junit output, Gitlab is bucketing them into the same message which can be deceiving when you may be expecting more warnings/errors.
