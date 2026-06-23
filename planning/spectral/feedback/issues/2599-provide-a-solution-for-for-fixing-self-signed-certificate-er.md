---
number: 2599
title: "Provide a solution for for fixing self-signed certificate errors in VSCode"
state: "closed"
labels: []
author: "ghost"
created: "2024-03-15T17:06:40Z"
updated: "2024-05-03T14:42:44Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2599"
---

# Provide a solution for for fixing self-signed certificate errors in VSCode

When I use VSCode with a url for the RuleSet file, I get:
Unable to read ruleset at ... failed, reason: self signed certificate in certificate chain
While most extensions will work in VSCode by pointing to the OS certificate store (using the win-ca or other method), this extension uses some other method for storing trusted root certificates. 

We use Netskope, which generates a custom certificate for the ruleset file url. But how to do we get Spectral to trust the root cert for this cusom CA? 

Can you please document a method for adding a root certificate to the Spectral root certificate store? Or fix Spectral to use the same certificate store used by VSCode?

Until then, we can not use Spectral in our environment as designe.d
