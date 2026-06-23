---
number: 1606
title: "Forced 'format' when running via the CLI (rather than autodetect)"
state: "closed"
labels: []
author: "andylockran"
created: "2021-05-07T09:23:09Z"
updated: "2021-10-25T08:34:18Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1606"
---

# Forced 'format' when running via the CLI (rather than autodetect)

**User story.**
As a api developer, I can force spectral to use a particular specification format, so that I can override the autodetected format.

**Is your feature request related to a problem?**

I use AWS API Gateway, and they've got a fairly heavily bastardised version of OAS 3.0 in use (as well as using jsonschema draft-4 for their model validation, rather than OAS3.0 validation).

I've generated a jsonschema that articulates some of their non-standard implementation rules:
https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-known-issues.html
but as it describes the document with a standards-compliant OAS header, there's no way currently to force spectral to use a non-standard format to validate a document that appears to be standard.

**Describe the solution you'd like**
A new CLI flag to be able to force the format used to evaluate a document.  Since --format already defines the output format, I'd want the maintainers suggestion on what the flag should be called before I prepare a PR.

**Additional context**
Add any other context or screenshots about the feature request here.
