---
number: 2280
title: "oas3-unused-components and friends should support checking remote refs as an option"
state: "open"
labels: ["enhancement", "triaged"]
author: "fgabolde"
created: "2022-09-16T13:28:13Z"
updated: "2024-05-31T12:36:37Z"
comments: 0
reactions_total: 1
thumbs_up: 1
url: "https://github.com/stoplightio/spectral/issues/2280"
---

# oas3-unused-components and friends should support checking remote refs as an option

I've been using spectral for linting a couple of long specs that we have written at work. A while back, we defined some common schemas for both specs, so we extracted those into a schemas.yml file and referenced it in the specs with `$ref: schemas.yml/#FooBar`. Unfortunately, when we did this, I failed to realize that spectral would no longer report unused components for those. I'm assuming the reasoning is that external components might be actually used, so when you're linting one spec, you might be reporting as unused some components that belong to the other one. This is reasonable, but now I am removing a large chunk of one of the specs as we got rid of a set of deprecated operations, and I am very much not looking forward to manually going through all the components referenced in the operations being removed.

I'm looking for the ability to tell spectral that the set of specs I'm passing it should cover the entirety of the components. Currently we have separate jobs for linting the specs:

```yaml
linting spec one:
  script:
    spectral lint --fail-severity=warn --format junit -o report.xml spec-one.yml
  artifacts:
    when: always
    reports:
      junit:
        - report.xml

linting spec two:
  script:
    spectral lint --fail-severity=warn --format junit -o report.xml spec-two.yml
  artifacts:
    when: always
    reports:
      junit:
        - report.xml
```

I don't mind e.g. merging both of these jobs if that's what it takes to report components unused across all of my specs:

```yaml
linting both specs:
  script:
    spectral lint --fail-severity=warn --format junit -o report.xml --unused-remote spec-one.yml spec-two.yml
  artifacts:
    when: always
    reports:
      junit:
        - report.xml
```
