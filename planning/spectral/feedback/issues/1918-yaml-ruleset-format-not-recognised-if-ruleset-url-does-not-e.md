---
number: 1918
title: "YAML ruleset format not recognised if ruleset URL does not end with .yml"
state: "closed"
labels: []
author: "ngayemdm"
created: "2021-10-28T08:10:09Z"
updated: "2021-11-12T10:28:24Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1918"
---

# YAML ruleset format not recognised if ruleset URL does not end with .yml

**Describe the bug**
When fetching a custom YAML ruleset by an URL not ending with .yml, spectral misinterprets the format and returns an error message like "Unexpected token (Note that you need plugins to import files that are not JavaScript)"

**To Reproduce**

1. Place the openapi file in this archive [contract.openapi.yml.zip](https://github.com/stoplightio/spectral/files/7432259/contract.openapi.yml.zip) in the current folder
2. Run this CLI command 
```
docker run --rm -v $(pwd):/tmp:ro stoplight/spectral:6.1 --ruleset "https://gist.githubusercontent.com/ngayemdm/2bae1bc0083a4413b427fbeeee4139be/raw/ed9b90807ffec2750fafa
9e7c6f48eeb2b01e7d4/customer-ruleset.yml?fake_private_token=qwerty" lint /tmp/contract.openapi.yml  -v
```
3. See error

**Expected behavior**
The ruleset should be detected as a YAML file and the OpenAPI file should be analysed.

**Environment (remove any that are not applicable):**
 - Library version: 6.1.0 (using Docker image)
 - OS: Ubuntu 20.04.2 LTS

**Additional context**
No problems detected when using the docker image stoplight/spectral:5.9 with command 
```
docker run --rm -v $(pwd):/tmp:ro stoplight/spectral:5.9 --ruleset "https://gist.githubusercontent.com/ngayemdm/2bae1bc0083a4413b427fbeeee4139be/raw/ed9b90807ffec2750fafa
9e7c6f48eeb2b01e7d4/customer-ruleset.yml?fake_private_token=qwerty" lint /tmp/contract.openapi.yml  -v
```
