---
number: 2626
title: "fix: Generated Assets suffix for CPU Architecture x64 is not correct"
state: "closed"
labels: []
author: "Vad1mo"
created: "2024-05-28T23:10:09Z"
updated: "2024-06-07T15:18:25Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2626"
---

# fix: Generated Assets suffix for CPU Architecture x64 is not correct

The generated release assets contain a CPU architecture suffix **x64** that is not usable (for automated processing)

Example:

- spectral-alpine-arm64 
- /spectral-alpine-**x64**
- spectral-linux-arm64

![image](https://github.com/stoplightio/spectral/assets/1492007/ca5eb66d-cee5-4c20-9af2-746c99f87a8d)


In all cases, x64 is not a correct suffix for a CPU architecute. It can not be used to determine the right architecture. 

Example for correct X86 64 bit architecture is AMD64

```sh
root@np2-4efec-bthtl:/# dpkg --print-architecture
amd64
root@np2-4efec-bthtl:/# uname -p
x86_64
root@np2-4efec-bthtl:/# lscpu
Architecture:            x86_64
```

ARM64 in M2

```sh
root@b4d451187ea2:/# dpkg --print-architecture
arm64
root@b4d451187ea2:/# uname -p
unknown
root@b4d451187ea2:/# lscpu | grep Architecture
Architecture:                       aarch64

```


Because in automation tools and workflows, often `dpkg --print-architecture` is used ([see here](https://github.com/search?q=dpkg+--print-architecture+language%3ADockerfile&type=code&l=Dockerfile))
**Example, Dockerfile**

```Dockerfile
RUN curl -fsSL -o /usr/bin/spectral https://github.com/stoplightio/spectral/releases/download/$SPECTRAL_VERSION/spectral-linux-$(dpkg --print-architecture) && chmod +x /usr/bin/spectral
```

I suggest to generate the Assets with the `amd64` for the x86 64 bit architecture.
