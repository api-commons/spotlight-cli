---
number: 2504
title: "Reference to documentationUrl in message"
category: "Ideas"
author: "VG1UONW"
created: "2023-07-11T08:54:49Z"
upvotes: 2
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2504"
---

# Reference to documentationUrl in message

Hi!

I'd like to make a proposal for new feature.

**User story**

As a developer I would like to have a reference to _documtnationUrl_ in _message_. To not to duplicate URLs when there is a need to print in a console.

**Is your feature request related to a problem?**

It is annoying and producing duplicated strings when the same URL is specified in two places within one rule, when there is a need to render it in the error message.

**Describe the solution you'd like**

Instead of this:
```
  rule-name:
    message: |
      Some useful message
      https://google.com
    documentationUrl: https://google.com
```
Would be nice to have like this:
```
  rule-name:
    message: |
      Some useful message
      {{documentationUrl}}
    documentationUrl: https://google.com
```

Thanks!
