---
number: 847
title: "Trouble validating array examples"
state: "closed"
labels: []
author: "cbetta"
created: "2019-12-11T12:04:19Z"
updated: "2019-12-11T15:22:54Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/847"
---

# Trouble validating array examples

Im having an issue trying to validate an array example. My spec is as follows.

```yml
allowed_invitee_roles:
        x-box-field-variant: 3
        type: array
        example: 
          - editor
        nullable: false
        enum:
          - editor
          - viewer
          - previewer
          - uploader
          - previewer uploader
          - viewer uploader
          - co-owner
        description: |-
          A list of the types of roles that user can be invited at
          when sharing this folder.
        items:
          type: string
```

The error I get is as follows:

```
error  valid-example-in-schemas         "allowed_invitee_roles.example" property should be equal to one of the allowed values: editor, viewer, previewer, uploader, previewer uploader, viewer uploader, co-owner. Did you mean editor?
```

I am lost as to what to do. I've tried to set the example value to `"editor"`, `[editor]` and many more, but without any luck.
