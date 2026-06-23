---
number: 2565
title: "Error: Cannot find module '/snapshot/project/node_modules/tslib/tslib.js' spectral [v6.9.0~v6.11.0] on ARM64"
state: "open"
labels: ["triaged"]
author: "GuoGuoSun2000"
created: "2023-12-16T09:07:11Z"
updated: "2024-05-31T09:24:17Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2565"
---

# Error: Cannot find module '/snapshot/project/node_modules/tslib/tslib.js' spectral [v6.9.0~v6.11.0] on ARM64

**Describe the bug**
A clear and concise description of what the bug is: 

sudo docker run --rm -it --name spectral-demo spectral:v6.11.0 /bin/bash
pkg/prelude/bootstrap.js:1876
      throw error;
      ^

Error: Cannot find module '/snapshot/project/node_modules/tslib/tslib.js'
1) If you want to compile the package/file into executable, please pay attention to compilation warnings and specify a literal in 'require' call. 2) If you don't want to compile the package/file into executable and want to 'require' it from filesystem (likely plugin), specify an absolute path in 'require' call using process.cwd() or process.execPath.
    at createEsmNotFoundErr (node:internal/modules/cjs/loader:967:15)
    at finalizeEsmResolution (node:internal/modules/cjs/loader:960:15)
    at resolveExports (node:internal/modules/cjs/loader:488:14)
    at Module._findPath (node:internal/modules/cjs/loader:528:31)
    at Module._resolveFilename (node:internal/modules/cjs/loader:932:27)
    at Function._resolveFilename (pkg/prelude/bootstrap.js:1955:46)
    at Module._load (node:internal/modules/cjs/loader:787:27)
    at Module.require (node:internal/modules/cjs/loader:1012:19)
    at Module.require (pkg/prelude/bootstrap.js:1855:31)
    at require (node:internal/modules/cjs/helpers:102:18) {
  code: 'MODULE_NOT_FOUND',
  path: '/snapshot/project/node_modules/tslib/package.json',
  pkg: true
}

Node.js v18.5.0

**To Reproduce**

1. Get the latest sources: 
curl -fsSL -o spectral-v6.11.0.tar.gz https://github.com/stoplightio/spectral/archive/refs/tags/v6.11.0.tar.gz
2. decompress the zip file and change the current folder to spectral-6.11.0
tar -xzvf spectral-v6.11.0.tar.gz
cd spectral-6.11.0/
3. Run this docker build command:
sudo docker build -t spectral:v6.11.0 .
waiting for the build operation complete successfully
4. Run the container:
sudo docker run --rm -it --name spectral-demo spectral:v6.11.0 /bin/bash
then errors occured, every time.

What can I do to solve this problem?

**Environment (remove any that are not applicable):**
 - My Computer is macOS M1
lscpu 
Architecture:          aarch64
  CPU op-mode(s):      64-bit
  Byte Order:          Little Endian
CPU(s):                2
  On-line CPU(s) list: 0,1
Vendor ID:             ARM
  Model:               0
  Thread(s) per core:  1
  Core(s) per cluster: 2

 - OS
cat /etc/os-release 
NAME="CentOS Stream"
VERSION="9"
ID="centos"
ID_LIKE="rhel fedora"
VERSION_ID="9"
PLATFORM_ID="platform:el9"
PRETTY_NAME="CentOS Stream 9"
ANSI_COLOR="0;31"
LOGO="fedora-logo-icon"
CPE_NAME="cpe:/o:centos:centos:9"
HOME_URL="https://centos.org/"
BUG_REPORT_URL="https://bugzilla.redhat.com/"
REDHAT_SUPPORT_PRODUCT="Red Hat Enterprise Linux 9"
REDHAT_SUPPORT_PRODUCT_VERSION="CentOS Stream"
