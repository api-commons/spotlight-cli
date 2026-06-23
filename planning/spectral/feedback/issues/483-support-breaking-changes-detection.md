---
number: 483
title: "Support breaking changes detection"
state: "closed"
labels: []
author: "RomainSimiand"
created: "2019-08-26T08:50:29Z"
updated: "2021-04-07T15:27:17Z"
comments: 4
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/483"
---

# Support breaking changes detection

**User story.**
As an API designer, I can check if my new API specification is introducing breaking changes, so that I can warn my API consumers or make changes to avoid these changes.

**Is your feature request related to a problem?**
Linting my API specs against both generic OAI2/3 and my company's guidelines is amazing, but I wish I could also be warned by spectral when my API specs are introducing breaking changes. This is inheritent of most API guidelines I'm aware of and would definitely become handy.

**Describe the solution you'd like**
The best way would be to allow spectral to compare my current specs with the previous main one.

**Additional context**
I understand this could introduce some complexity in spectral itself,and that various tools already exist for that purpose, but regarding the OAI ecosystem, I strongly feel tools like spectral should cover this use case. It's active, is flexible, and imho should become the one stop tool for API designers.

Hope this makes sense, and dosen't sound too much of a stretch regarding spectral's original purpose.

Thanks!
