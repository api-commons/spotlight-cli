---
number: 2384
title: "Error with ajv depedency"
category: "General"
author: "gituserjava"
created: "2023-01-15T04:48:01Z"
upvotes: 2
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2384"
---

# Error with ajv depedency

I am using spectral (v 6.6.0) within another node JS backend. During `npm install` I am getting the below error. Please advise.

I have `ajv version 6.12.3`, `ajv-errors version 1.0.1`, `ajv-keywords version 3.5.2` currently in my Node JS application not sure if these versions are conflicting with the versions coming from spectral. Could you please advise how I can fix this error?

````
[1m [31mERROR [39m [22m in [1m. /node_modules/ajv-draft-04/dist/index.js
Can't resolve 'ajv/dist/core' in ' /opt/comp/bamboo/agents/ awsagent-1/xml-data/build-dir/MY-PROJECT-BUILD/node_modules /aiv-draft-04/dist'
@ . /node_modules/@stoplight/spectral-functions/dist/schema/aiv.is 8:52-75
@ . /node_modules/@stoplight/spectral-functions/dist/schema/index.js 6:14-30
@ . /node_modules/@stoplight/spectral-functions/dist/index.js 19:46-65
@./src/bin/.my-ruleset.js 1:46-86
@ ./src/plugins/vp/index.js 1:254-287
@./src/index.js 18:0-50 40:2-24

````

I am getting similar error for `ajv/dist/vocabularies/discriminator`, `ajv/dist/vocabularies/core/ref`, `ajv/dist/vocabularies/applicator`, `ajv/dist/vocabularies/format`, `ajv/dist/vocabularies/validation/limitlength`
etc
