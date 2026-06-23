---
number: 2413
title: "Date time in non ISO format are not flagged in examples"
state: "closed"
labels: ["enhancement", "OpenAPI"]
author: "savage-alex"
created: "2023-02-24T16:20:16Z"
updated: "2023-03-23T16:19:07Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2413"
---

# Date time in non ISO format are not flagged in examples

Given the following query parameter

![image](https://user-images.githubusercontent.com/25430683/221230883-b434b4bf-66e8-4b85-bca3-a8d2a90331d4.png)

I would like to be informed that the example isnt valid date time like it does when a date is missing
![image](https://user-images.githubusercontent.com/25430683/221231042-f938bd54-1862-48b3-90ad-633b99fbb668.png)
so that my examples are valid date times and not missing the T and time zone component
