---
number: 2385
title: "Spectral Schema checking issue with property name \"type\" is used in a schema example"
state: "open"
labels: ["t/bug", "p/medium", "triaged", "c/spectral"]
author: "savage-alex"
created: "2023-01-24T13:55:54Z"
updated: "2024-05-31T12:34:48Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2385"
---

# Spectral Schema checking issue with property name "type" is used in a schema example

Given a response body schema that returns an array of items and the item contains a property called `type` and it contains another property called default that is type boolean
When a schema level example is provided
Spectral gives an error incorrectly

![image](https://user-images.githubusercontent.com/25430683/214312960-76c293e0-3215-411d-a836-a6b35499e453.png)

In the example you can see where the type was set to boolean (its just a property and a value) there was no error
when type has any other value the default boolean property is errored. 

This doesnt happen on in-lined examples. Only schema level examples.

Example OpenAPI here that shows the issue: https://app.swaggerhub.com/apis/AdvancedComputerSoft/broken-example-default-property/1.0.0
