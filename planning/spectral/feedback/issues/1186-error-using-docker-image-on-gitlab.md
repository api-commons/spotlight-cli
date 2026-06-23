---
number: 1186
title: "Error using docker image on Gitlab"
state: "closed"
labels: ["t/bug"]
author: "vincent-paing"
created: "2020-05-28T10:08:42Z"
updated: "2020-09-21T19:45:14Z"
comments: 9
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1186"
---

# Error using docker image on Gitlab

**Describe the bug**
When running with the docker image on Gitlab, it throws an error saying 
```
Unknown arguments: c, sh
```

**To Reproduce**

I have the config set up as follows:
```yml
stages:
  - lint

lint:
  stage: lint
  image: stoplight/spectral
  script:
    - spectral lint ./*.yaml
```

**Expected behavior**
it Shoudn't crash

**Environment (remove any that are not applicable):**
 - Giltab runner version : 12.1.0

**Additional context**
Here's the whole log
```
Running with gitlab-runner 12.1.0 (de7731dd)
  on Autoscalling runner 8a6fef31
Using Docker executor with image stoplight/spectral ...
Pulling docker image stoplight/spectral ...
Using docker image sha256:1138f1564cd3ae6b28b639d00b4ecde1f7c1013436f76fd8622b07c5892790a2 for stoplight/spectral ...
Running on runner-8a6fef31-project-661-concurrent-0 via runner-8a6fef31-gitlab-docker-machine-1590659054-9111b302...
Fetching changes with git depth set to 50...
Initialized empty Git repository in [REDACTED]
Created fresh repository.
From [REDACTED]
 * [new ref]         refs/pipelines/9489 -> refs/pipelines/9489
 * [new branch]      develop             -> origin/develop
Checking out 8d691582 as develop...

Skipping Git submodules setup
spectral <command>

Commands:
  spectral lint [documents..]  lint JSON/YAML documents from files or URLs

Options:
  --version  Show version number  [boolean]
  --help     Show help  [boolean]

Unknown arguments: c, sh
ERROR: Job failed: exit code 1
````
