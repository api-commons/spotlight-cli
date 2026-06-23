---
number: 1409
title: "Can I use spectral as a linter for a JSON schema?"
category: "Q&A"
author: "blake-mealey"
created: "2020-11-23T18:14:13Z"
upvotes: 1
comments: 1
answered: true
url: "https://github.com/stoplightio/spectral/discussions/1409"
---

# Can I use spectral as a linter for a JSON schema?

Hi,

I'm trying to implement some build-time validation for a collection of [Azure Pipelines YAML templates](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema%2Cparameter-schema) and it seems like this project should work for me but I can't figure out how to configure it properly.

I have a (very large) JSON schema file from Azure DevOps (it generates a unique one per organization since it includes installable extensions) saved to `schema.json` and I created this spectral config file:

```yml
# .spectral.yml
rules:
  azure-pipelines:
    description: 'Must follow the azure-pipelines schema'
    given: '$'
    then:
      function: schema
      functionOptions:
        schema:
          $ref: schema.json
```

Then I run the linter: `spectral lint **/*.pipeline.yml`

This sort of works, but it has a few issues:

1. It gives me this warning for all my pipeline files:
```
3:1  warning  unrecognized-format  The provided document does not match any of the registered formats [oas2, oas3, asyncapi2, json-schema, json-schema-loose, json-schema-draft4, json-schema-draft6, json-schema-draft7, json-schema-2019-09]
```

2. It always gives the message I include in my config file (Must follow the azure-pipelines schema) no matter what the issue is

Is there a way to remove the first warning, and is there a way to make it print a meaningful warning/error for each possible issue?

## ✅ Accepted answer — @P0lip

Hey!
Sure, you can totally do it.
To get rid of the warning, you can pass `--ignore-unknown-format`
LMK whether this was something you were looking for.
