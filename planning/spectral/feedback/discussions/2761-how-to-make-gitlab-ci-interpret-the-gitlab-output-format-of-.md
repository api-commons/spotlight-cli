---
number: 2761
title: "How to make Gitlab CI interpret the \"gitlab\" output format of Spectral CLI ?"
category: "Q&A"
author: "pidj"
created: "2024-12-16T10:03:19Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2761"
---

# How to make Gitlab CI interpret the "gitlab" output format of Spectral CLI ?

Hi folks,
I have a question, for whoever would have the answer and be kind enough to reply :-)

I use the Spectral CLI to lint OpenAPI/AsyncAPI files. In the available output formats, one of them is "gitlab", which generates a report in JSON. Given the name of that formatter, I expect it's meant at being interpreted by Gitlab CI/CD in some way (e.g. for a MR report), but I can't figure out how.
My first guess was to feed this as a "report artifact" of a Gitlab job, but if it's correct, which one among the list provided by Gitlab (https://docs.gitlab.com/ee/ci/yaml/artifacts_reports.html) ?

Thank you in advance if anyone of you know what to do with this JSON output of the "gitlab" formatter ! :-)
