---
number: 214
title: "Can not install due to jsonpath"
state: "closed"
labels: []
author: "Lakitna"
created: "2019-05-17T13:58:35Z"
updated: "2019-06-28T13:13:00Z"
comments: 14
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/214"
---

# Can not install due to jsonpath

### **I'm submitting a...**
  - [x] bug report
  - [ ] feature request

### What is the current behavior?

When trying to install spectral using `npm install @stoplight/spectral` I get the following error:

```
npm ERR! code 128
npm ERR! Command failed: C:\Program Files\Git\cmd\git.EXE clone --mirror -q https://github.com/stoplightio/jsonpath.git C:\Data\npm\cache\_cacache\tmp\git-clone-9c9fbadd\.git --config core.longpaths=true
npm ERR! warning: templates not found in C:\Users\USER\AppData\Local\Temp\pacote-git-template-tmp\git-clone-818f94da
npm ERR! fatal: unable to access 'https://github.com/stoplightio/jsonpath.git/': SSL certificate problem: self signed certificate in certificate chain
npm ERR!
```

I'm behind a corporate proxy which is why there is a self-signed certificate.

### What is the expected behavior?

It installs without errors

### What is the motivation / use case for changing the behavior?

Spectral is unusable for me without a fix. I literally can't download it via NPM.

### Please tell us about your environment:

  - Version: 1.x or above
  - OS: Windows 10
  - Package manager: NPM
  - Node version: 8.13.0

### Other information

Running things behind a corporate proxy is a known bad experience. In this case, things break because of the hard https reference to a forked repository.

Does this have to be a reference to the fork? What's wrong with `jsonpath@1.0.0`?
