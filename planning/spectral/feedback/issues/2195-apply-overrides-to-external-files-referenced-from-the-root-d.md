---
number: 2195
title: "Apply overrides to external files referenced from the root document"
state: "open"
labels: ["triaged"]
author: "dpashkevich"
created: "2022-06-27T20:32:29Z"
updated: "2024-08-13T11:54:13Z"
comments: 7
reactions_total: 13
thumbs_up: 13
url: "https://github.com/stoplightio/spectral/issues/2195"
---

# Apply overrides to external files referenced from the root document

**User story.**
As a developer on a large API project, I can do apply rule overrides not just to the root document, but to external files as well, so that I can maintain the file structure that makes sense for my team.

**Is your feature request related to a problem?**
This is a feature request to effectively fix the caveat that was discovered in #2096 and currently documented at https://meta.stoplight.io/docs/spectral/e5b9616d6d50c-custom-rulesets#caveats:

> Please bear in mind that overrides are only applied to the _root_ documents. If your documents have any external dependencies, i.e. $refs, the overrides won't apply.
> 
> **Example:**
> Given the following 2 YAML documents
> ```yaml
> # my-document.yaml
> openapi: "3.1.0"
> paths: {}
> components:
>   schemas:
>     User:
>       $ref: "./User.yaml"
> ```
>
> ```yaml
> # User.yaml
> title: ""
> type: object
> properties:
>   id:
>     type: string
> required:
>   - id
> ```
> 
> and the ruleset below
> 
> ```json
> {
>   "rules": {
>     "empty-title-property": {
>       "message": "Title must not be empty",
>       "given": "$..title",
>       "then": {
>         "function": "truthy"
>       }
>     }
>   },
>   "overrides": [
>     {
>       "files": ["User.yaml"],
>       "rules": {
>         "empty-title-property": "off"
>       }
>     }
>   ]
> }
> ```
>
> running `spectral lint my-document.yaml` will result in:
> ```
> /project/User.yaml
> 1:8 warning empty-title-property Title must not be empty title
> ✖ 1 problem (0 errors, 1 warning, 0 infos, 0 hints)
> ```
> while executing `spectral lint User.yaml` will output
> ```
> No results with a severity of 'error' or higher found!
> ```

This is a very odd an unexpected behavior. It's common to have things such as schema definitions in external files on large API spec projects, but looks like today there's no way to properly apply linter rule overrides to these files.

The only workaround is to keep your shared components in one large `my-document.yaml` file. This will work:
```yaml
    {
      "files": ["openapi.yaml#components/schemas/User"],
      "rules": {
        "empty-title-property": "off"
      }
    }
  ]
```

But as I said, it's undesirable when describing a large API (e.g. a public API). Our team was refactoring a API spec project and were surprised to find out that we can no longer apply overrides to the same shared components we used to have, once we extracted them to external files.

**Describe the solution you'd like**

Given the setup described above (`my-document.yaml` with a root document, `User.yaml` with a User model, and the corresponding `"overrides"` block in .spectral.json), running `spectral lint my-document.yaml` should result in no errors:

```
No results with a severity of 'error' or higher found!
```

When Spectral resolves $refs, it should keep track of the original pointers and check if there are `overrides` defined for these locations.
