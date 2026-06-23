---
number: 1340
title: "Serve spectral linting via API"
state: "closed"
labels: []
author: "stevendoll"
created: "2020-09-14T17:43:34Z"
updated: "2021-05-11T15:30:23Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1340"
---

# Serve spectral linting via API

**User story.**
As an API Platform Manager , I can access Spectral via API, so that I can integrate business and quality rules into my platform processes.

**Describe the solution you'd like**
Spectral is available via command line and directly in javascript. That works well if I use it locally. But how to we integrate this with our API registry, business/security policies, or CI/CD pipelines? Ideally we would like to POST with the yaml text in the payload, and get back something like:

    { 
        errors: 
        [
            { 
                lineNumber: 5,
                errorCode: "Missing404Response",
                description: "A 404 response is required when a path parameter is present."
            },
            { 
                lineNumber: 22,
                errorCode: "CreationRequires201Response",
                description: "A 201 response with a location header is required when a resource is created."
            },

        ]
        warnings:
            { 
                lineNumber: 105,
                warningCode: "Query parameter that is required",
                description: "Requiring a query parameter is discouraged. A better practice is to make it optional and include a sensible default."
            },
    }

We're also interested in the ref$ expansion that spectral can do.
