---
number: 2392
title: "Custom rulesets when using docker"
category: "Q&A"
author: "mifriis"
created: "2023-02-02T09:22:34Z"
upvotes: 2
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/2392"
---

# Custom rulesets when using docker

I have a folder with:

* opentest.yaml
* .spectral.yaml
* /functions

In that folder i have tried running these docker commands with the terminal in the same folder:

* `docker run --rm -it -v $(pwd):/tmp stoplight/spectral lint "opentest.yaml"` which i understand the docs as running the container as found in dockerhub, against the opentest.yaml spec file. However it's missing a rule set: 
```
No ruleset has been found. Please provide a ruleset using the --ruleset CLI argument, or make sure your ruleset file matches .?spectral.(js|ya?ml|json)%
```
* `docker run --rm -it -v $(pwd):/tmp stoplight/spectral lint "opentest.yaml" --ruleset ".spectral.yaml"` fails because the spectral ruleset is not inside the container: 
```
Error running Spectral!
Use --verbose flag to print the error stack.
Error #1: ENOENT: no such file or directory, open '/usr/src/spectral/.spectral.yaml'
```

So how do i specify a custom ruleset when using the container approach? I would prefer not to have to execute on my local machine, so docker is a great option that you have added.

## ✅ Accepted answer — @bruno-vc

hey @mifriis, those commands worked for me using powershell:

docker run -it -v /c/linting/tmp:/usr/src/spectral my-private-registry.com.br/devops/spectral:6.6.0 lint -r "rule-oas.yaml" "openapi.yaml"

docker run -it -v ${pwd}/tmp:/usr/src/spectral my-private-registry.com.br/devops/spectral:6.6.0 lint -r "rule-oas.yaml" "openapi.yaml"
