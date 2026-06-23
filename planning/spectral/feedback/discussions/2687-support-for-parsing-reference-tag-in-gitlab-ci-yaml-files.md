---
number: 2687
title: "Support for Parsing !reference Tag in GitLab CI YAML Files"
category: "General"
author: "chussenot"
created: "2024-09-16T08:23:07Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2687"
---

# Support for Parsing !reference Tag in GitLab CI YAML Files

Hi everyone,

I recently submitted a [pull request](https://github.com/stoplightio/yaml-ast-parser/pull/8) to add support for the `!reference` tag in GitLab CI YAML files. This tag is used extensively to optimize and reuse YAML content in GitLab CI pipelines, but it's currently not supported by the [yaml-ast-parser](https://github.com/stoplightio/yaml-ast-parser), which causes issues when using Spectral for validation.

The MR adds this capability by allowing the AST parser to recognize and handle the !reference tag, whether it is used as a scalar or reference node. The goal is to improve compatibility with GitLab CI configurations.

It would be great to have a discussion around this and any feedback on the approach. Is there anyone else facing similar issues with Spectral's inability to handle `!reference` tags in GitLab YAML files?

Looking forward to your thoughts and feedback!
