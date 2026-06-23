---
number: 2131
title: "Generate reports with aggregated errors, warnings and potentially a OAS Score"
state: "closed"
labels: ["enhancement"]
author: "roubles"
created: "2022-04-19T19:34:36Z"
updated: "2023-03-23T16:09:00Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2131"
---

# Generate reports with aggregated errors, warnings and potentially a OAS Score

**User story.**
Today spectral works as run time linter. The ask in this user story is to add a report with aggregated errors, warnings and potentially scoring functionality.

As a developer, I want to be able to run spectral with a **--report** flag and after all the linter errors, warnings we get a report that aggregates errors and _scores_ the spec.

| Rule                         | Count | Penalty | Aggregated Penalty |
|------------------------------|-------|---------|--------------------|
| operation-success-response   | 4     | 2       | 8                  |
| operation-operationId-unique | 2     | 1       | 2                  |
| path-keys-no-trailing-slash  | 2     | 3       | 6                  |

_**Your OAS score is 84.**_

Using an overall score for a spec file will give better visibility on the health of an OAS spec and can help teams set benchmarks for developers to meet to onboard specs in their CI pipelines. It also provides much better visibility on executive dashboards to see the overall health of OAS specs in a company.

The thought here is errors could have a default penalty, warnings could have another default penalty and so on..., but the penalty per rule can be overridden in the rule's json:
```
    'path-keys-no-trailing-slash': {
      message: 'Path must not end with slash.',
      recommended: true,
      type: 'style',
      penalty: 3,
      given: '$.paths',
      then: {
        field: '@key',
        function: pattern,
        functionOptions: {
          notMatch: '.+\\/$',
        },
      },
```

**Is your feature request related to a problem?**
Today spectral just spits out errors, warnings, hints and infos. And a lot of the errors, warnings are redundantly repeated. We want a way to aggregate the errors into a meaningful score.

**Describe the solution you'd like**
A mechanism in spectral to aggregate errors, warnings, infos, hints, into a report with an aggregate OAS score for the spec file.
