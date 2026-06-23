---
number: 84
title: "Implement rule to process the \"operationId\" field in Swagger"
state: "closed"
labels: ["released"]
author: "AnastasiaTW"
created: "2019-01-23T05:10:59Z"
updated: "2019-02-21T04:15:04Z"
comments: 1
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/84"
---

# Implement rule to process the "operationId" field in Swagger

### **I'm submitting a...**
  - [ ] bug report

### What is the current behavior?

When the "operationId" field in Swagger specification is filled with Russian text, Stoplight doesn't mark it as a mistake. However "operationId" is to form the URL address and must contain English words only.

### What is the expected behavior?

An error occurred for the "operationId" field with Russian text.

### What is the motivation / use case for changing the behavior?

The "operationId" field is also to name the API method. When I wrote Russian text in this field, I couldn't open pages with methods but could open only the "ROOT" page.
