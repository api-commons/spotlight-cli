---
number: 2456
title: "Getting \"Invalid ruleset provided\" using ruleset from url"
state: "open"
labels: ["question", "triaged"]
author: "bruno-vc"
created: "2023-04-18T13:08:52Z"
updated: "2024-05-31T12:34:25Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2456"
---

# Getting "Invalid ruleset provided" using ruleset from url

### Discussed in https://github.com/stoplightio/spectral/discussions/2418

<div type='discussions-op-text'>

<sup>Originally posted by **BrunoVazCosta** March 10, 2023</sup>
Hi everyone, I hope you all are well.

I'm getting an error with my ruleset hosted remotely.

`docker run --rm -v ${pwd}/tmp:/usr/src/spectral -e PROXY=http://proxy.company.com.br:8080 docker-registry.company.com.br/devops/spectral:6.6.0 lint -r https://gitlab.cloud.company.com.br/me/api-design-rules/raw/master/oas.yaml openapi-ser-v1.0.0.yaml -v`

The error
`Error running Spectral!
Error #1: Invalid ruleset provided
          at assertRuleset              ../../../snapshot/project/packages/ruleset-migrator/src/validation/index.ts:15     throw new Error('Invalid ruleset provided');
          at read                       ../../../snapshot/project/packages/ruleset-migrator/src/index.ts:25                assertRuleset(ruleset);
          at processTicksAndRejections  node:internal/process/task_queues:96
          at async migrateRuleset       ../../../snapshot/project/packages/ruleset-migrator/src/index.ts:38                const ruleset = await read(filepath, fs, fetch);
          at async getRuleset           ../../../snapshot/project/packages/cli/src/services/linter/utils/getRuleset.ts:49  const migratedRuleset = await migrateRuleset(rulesetFile, {`

For my ruleset I've tried (with `---` at the 1st line and without it)
`extends: [[spectral:oas]]`
`extends: [spectral:oas]`
`extends: "spectral:oas"`

Please, could you give me a help?</div>
