---
number: 2498
title: "Reference to documentationUrl in message"
category: "Q&A"
author: "VG1UONW"
created: "2023-07-06T11:46:24Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2498"
---

# Reference to documentationUrl in message

Hi!

Is there any way to reference documentationUrl in message property? 
For me it is important to see link to documentation in a console to address an issue.
I am specifying rules in yaml file and so far I see only this option:
```
...
  rule-name:
    message: |
      Some useful message
      https://google.com
    documentationUrl: https://google.com
...
```
Is there a fancy way to achieve this without duplicating url in message and documentaionUrl properties?

Thanks!

## ✅ Accepted answer — @P0lip

Hey!
Unfortunately, that is not available at the moment, although we'd accept a feature request!
Do feel free to file an issue :)
