---
number: 1834
title: "Install Spectral version 5.9.2"
category: "Q&A"
author: "tainarareis"
created: "2021-09-16T20:12:26Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1834"
---

# Install Spectral version 5.9.2

I need to install a specific version of Spectral: version 5.9.2. And I need to do it using curl. Do you have any suggestions of how can I do it?

At the future, if I want to avoid that the users of my solution to install the latest version instead of the version I created my custom ruleset, how can I fix the version?

## ✅ Accepted answer — @P0lip

Hey!
> I need to install a specific version of Spectral: version 5.9.2. And I need to do it using curl. Do you have any suggestions of how can I do it?

You can try the links provided [here](https://github.com/stoplightio/spectral/releases/tag/v5.9.2).
For instance, if you're interested in the Linux binary, you can execute the following command:

`curl -L  --output "spectral" https://github.com/stoplightio/spectral/releases/download/v5.9.2/spectral-linux`.

If macOS or Windows is the OS of your choice, simply replace `-linux` with `-macos` or `-cli.exe` respectively.

> At the future, if I want to avoid that the users of my solution to install the latest version instead of the version I created my custom ruleset, how can I fix the version?

I'm afraid I'm not sure I understand this part.
Would you like to ensure users run the 5.9.2 version?
Rulesets, in general, aren't tied to any version of Spectral, therefore there's no way to specify a recommended version of Spectral in the ruleset if that's what you mean.

---

Out of curiosity, is there any particular reason you want to stick with 5.9.2?
