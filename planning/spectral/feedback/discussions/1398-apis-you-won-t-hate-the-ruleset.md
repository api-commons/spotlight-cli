---
number: 1398
title: "APIs You Won't Hate - The Ruleset"
category: "Show and tell"
author: "philsturgeon"
created: "2020-11-06T19:46:52Z"
upvotes: 3
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1398"
---

# APIs You Won't Hate - The Ruleset

I've been working on an [API's You Wont Hate](https://github.com/openapi-contrib/style-guides/blob/master/apisyouwonthate.yml) themed [custom Spectral ruleset](https://meta.stoplight.io/docs/spectral/docs/guides/4-custom-rulesets.md) that'll give you some rather opinionated feedback on how to build a better API, mostly taking rules from the book, or from general best practice figured out since then, all by looking at your OpenAPI descriptions.

It's got some fairly fun rules in there which you might want to add to your ruleset as you start automating your API Style Guide:

**No HTTP Basic** 

```yaml
  no-http-basic:
    description: "Consider a more secure alternative to HTTP Basic."
    message: "HTTP Basic is a pretty insecure way to pass credentials around, please consider an alternative."
    severity: warn
    given: $.components.securitySchemes[*]
    then:
      field: scheme
      function: pattern
      functionOptions:
        notMatch: basic
```

**Make your errors either follow JSON:API or RFC 7807**

```yaml

  unknown-error-format:
    description: "Every error response SHOULD support either RFC 7807 (https://tools.ietf.org/html/rfc6648) or the JSON:API Error format."
    formats:
      - oas3
    severity: warn
    given: $.paths.[*].responses[?(@property.match(/^(4|5)/))].content.*~
    then:
      function: enumeration
      functionOptions:
        values:
        - application/vnd.api+json
        - application/problem+xml
        - application/problem+json
```

Here are some idea for rules that I'd love folks to take a swing at here:

1. Make sure every post/put/delete/patch endpoint has some sort of security

2. [Numeric IDs are awful](https://phil.tech/2015/auto-incrementing-to-destruction/), use something else like maybe UUID (but don't specify the format they _have_ to use. Just complain about numeric ID"

3. No global versions in server URL, path, or headers. Might need a few rules here.

4. Mime type should have "; charset=utf-8" on the end or how do we know if its UTF-8?

5. No "(e/E)rror" string in 2xx, in either the JSON property names or any of the text is outputs.

Anyone that successfully makes one of these custom rules will have 100 trees donated to our [community forest](https://ecologi.com/stoplightinc) in their name.
