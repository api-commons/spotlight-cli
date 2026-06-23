---
number: 2364
title: "Handling of missing documents"
category: "Q&A"
author: "andrecedik"
created: "2022-12-07T14:17:53Z"
upvotes: 3
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2364"
---

# Handling of missing documents

I've tried to find out if this is just a bug, a missing feature, or something else. Since I wasn't "successful" here's a little description of what's been bugging me.

If you're using the CLI by running `spectral lint` and not adding a document/file name that should be checked, you receive the error message `No documents provided.` (among documentation of how to use the command). This is to be expected.

Unfortunately, if you provide a filename to a file that isn't available, maybe you're in the wrong folder or due to a typo (e.g. `.yml`instead of `.yaml`), you will receive an output that shows you how many rules have been found and how many of those are enabled. It also shows the message `No results with a severity of 'error' found!`. 

It would be great if the user receives an error message that the file can't be found instead of returning a message that makes it seem that the document/file has been validated.
