---
number: 2295
title: "Secondary Rate Limit When Linting Files"
category: "Q&A"
author: "mh-jkoo"
created: "2022-09-26T14:24:03Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2295"
---

# Secondary Rate Limit When Linting Files

Hello,

I'm fairly new to OpenAPI, Stoplight and Spectral so apologies in advance for my lack of knowledge.

I'm adding to my company's API codebase and when linting yaml files in our repo, GitHub fails the job stating:

`Error: You have exceeded a secondary rate limit. Please wait a few minutes before you try again.`

This is the job that I'm trying to run:

`
name: Validate OpenAPI yaml files in the repo 
uses: stoplightio/spectral-action@v1.12.2
with:
    file_glob: '/reference/**/*.{yaml,yml}'
`

I'm wondering if there's any way to add a delay in between linting individual files? Or is there any other practice/method for avoiding a secondary rate limit?

Thanks,

Justen
