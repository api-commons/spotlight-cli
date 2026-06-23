---
number: 2397
title: "During pipeline run getting error like exit code 1 but no linting done"
state: "closed"
labels: []
author: "mihirsurting"
created: "2023-02-09T21:40:00Z"
updated: "2023-02-24T16:49:39Z"
comments: 3
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2397"
---

# During pipeline run getting error like exit code 1 but no linting done

I am running the spectral linting in to my Azure DevOps pipeline for Open API Linting. Following is the error that is coming and no linting errors found. 


Script contents:
npx @stoplight/spectral-cli lint /home/vsts/work/1/s/apiartifacts/apis/**/*.{json,yaml,yml} -r /home/vsts/work/1/s/tools/.spectral.yaml -o /home/vsts/work/1/s/tools/test-results/spectral-results.xml -f junit --verbose true
========================== Starting Command Output ===========================
##[debug]which 'bash'
##[debug]found: '/usr/bin/bash'
##[debug]which '/usr/bin/bash'
##[debug]found: '/usr/bin/bash'
##[debug]/usr/bin/bash arg: --noprofile
##[debug]/usr/bin/bash arg: --norc
##[debug]/usr/bin/bash arg: /home/vsts/work/_temp/91e168ca-2a8a-4718-a300-32e45e078726.sh
##[debug]exec tool: /usr/bin/bash
##[debug]arguments:
##[debug]   --noprofile
##[debug]   --norc
##[debug]   /home/vsts/work/_temp/91e168ca-2a8a-4718-a300-32e45e078726.sh
/usr/bin/bash --noprofile --norc /home/vsts/work/_temp/91e168ca-2a8a-4718-a300-32e45e078726.sh
npm WARN exec The following package was not found and will be installed: @stoplight/spectral-cli@6.6.0
npm WARN deprecated sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
Found 89 rules (73 enabled)
Linting /home/vsts/work/1/s/apiartifacts/apis/bill-cu-uwp-graph/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/bill-cu-uwp-graph/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/billingaccounts-cu-ce-exp/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/billingaccounts-cu-ce-exp/specification.yaml
Linting /home/vsts/work/1/s/apiartifacts/apis/billingaccounts-cu-ce-exp/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/collections-cu-uwp-graph/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/collections-cu-uwp-graph/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/optins-cu-uwp-root/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/optins-cu-uwp-root/specification.yaml
Linting /home/vsts/work/1/s/apiartifacts/apis/optins-cu-uwp-root/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/paycancel-cu-uwp/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/paycancel-cu-uwp/specification.yaml
Linting /home/vsts/work/1/s/apiartifacts/apis/paycancel-cu-uwp/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/payment-cu-uwp-graph/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/payment-cu-uwp-graph/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/paymentplan-cu-uwp-graph/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/paymentplan-cu-uwp-graph/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/recurringpay-cu-uwp-graph/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/recurringpay-cu-uwp-graph/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/registerreads-cu-ami-exp/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/registerreads-cu-ami-exp/specification.yaml
Linting /home/vsts/work/1/s/apiartifacts/apis/registerreads-cu-ami-exp/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/user-cu-uwp-graph/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/user-cu-uwp-graph/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/user-cu-uwp-sys/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/user-cu-uwp-sys/specification.yaml
Linting /home/vsts/work/1/s/apiartifacts/apis/user-cu-uwp-sys/tags.json
Linting /home/vsts/work/1/s/apiartifacts/apis/webapp-cu-uwp-exp/apiInformation.json
Linting /home/vsts/work/1/s/apiartifacts/apis/webapp-cu-uwp-exp/specification.yaml
Linting /home/vsts/work/1/s/apiartifacts/apis/webapp-cu-uwp-exp/tags.json
##[debug]Exit code 1 received from tool '/usr/bin/bash'
##[debug]STDIO streams have closed for tool '/usr/bin/bash'
##[error]Bash exited with code '1'.
