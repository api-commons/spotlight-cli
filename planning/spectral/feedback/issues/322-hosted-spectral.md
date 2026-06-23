---
number: 322
title: "Hosted Spectral "
state: "closed"
labels: []
author: "brianmrock"
created: "2019-07-06T18:34:02Z"
updated: "2019-07-11T08:54:54Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/322"
---

# Hosted Spectral 

## User Story

As a potential non-technical Stoplight user, I want to try out some of the products without signing up for an account or downloading CLI tools (what is a CLI?!). Getting feedback from Stoplight on my specifications might convince me to sign up for an account.

## Details

On the public-facing Spectral project website (SO-5) we should allow people tocopy and paste specs or provide a URL, and it will generate reports like https://www.ssllabs.com/ssltest/

## Acceptance Criteria
- No custom ruleset support just use Spectral's autodetect for OAS2/3
- Anonymous users can get feedback on a chunk of YAML /JSON 
- Anonymous users can get feedback on a URL
- Common sense security logic to avoid letting downloaded content be executed
- Common sense file size limitations (find the biggest OpenAPI file we know about and set the limit 10% higher)
- A list of warnings and errors will show up on a report 
- Report should have “private permalink” (non auto increment) so I can share the report with anyone who has the link
