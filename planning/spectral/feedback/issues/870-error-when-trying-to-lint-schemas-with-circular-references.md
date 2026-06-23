---
number: 870
title: "Error when trying to lint schemas with circular references"
state: "closed"
labels: ["t/bug"]
author: "rafael-andrade-3010"
created: "2019-12-20T13:20:52Z"
updated: "2020-04-28T21:48:47Z"
comments: 7
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/870"
---

# Error when trying to lint schemas with circular references

When we run the command spectral lint in our project, we are having the following error

` 1:1  error  invalid-ref  ENOENT: no such file or directory, open '<path>/openapi-simplifed.yaml'`

We are running the command like this

`spectral lint schemas-2/*.yaml`

You can try to run the spectral lint in this sample to test.
[github-error-sample.zip](https://github.com/stoplightio/spectral/files/3988420/github-error-sample.zip)

Thanks
