---
number: 2415
title: "Use a custom resolver with the basePath being the path to the contract being linted"
category: "Q&A"
author: "Mobyh"
created: "2023-03-02T14:34:46Z"
upvotes: 2
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2415"
---

# Use a custom resolver with the basePath being the path to the contract being linted

When a $ref is pointing to a file that needs to go outside of the current directory: ../../models/etc/etc Spectral throws the following validation exception: ERROR invalid-ref ENOENT: no such file or direcotry...

The issue I notice is that the default resolver uses the path to the application as a base, but even when using a custom resolver only the ref itself can be accessed, and not the path of the file.

There should be a way to tell the custom resolver to use the contract file's path as a basepath so that refs with relative paths that go outside of the current directory work properly.
