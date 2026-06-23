---
number: 1114
title: "[AsyncAPI] Identify abandoned channels when specifying multiple files"
state: "closed"
labels: []
author: "jonaslagoni"
created: "2020-04-22T13:36:11Z"
updated: "2020-04-29T13:55:46Z"
comments: 13
reactions_total: 1
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/1114"
---

# [AsyncAPI] Identify abandoned channels when specifying multiple files

**User story.**
As a developer I would like to check all my AsyncAPI documents for wrongfully specified or abandoned channels. 

**Is your feature request related to a problem?**
When you have multiple AsyncAPI documents it becomes hard to manually figure out if a channel was wrongfully specified or abandoned.

**Describe the solution you'd like**
Given the following two AsyncAPI documents
```yaml
...
channels:
  smartylighting/streetlights/1/0/event/{streetlightId}/Iighting/measured:
    parameters:
      streetlightId:
        $ref: './components/parameters.yml#/streetlightId'
    subscribe:
      message:
        $ref: './components/messages.yml#/lightMeasured'
...
```
```yaml
channels:
  smartylighting/streetlights/1/0/event/{streetlightId}/lighting/measured:
    parameters:
      streetlightId:
        $ref: './components/parameters.yml#/streetlightId'
    publish:
      message:
        $ref: './components/messages.yml#/lightMeasured'
```
The 🦅 might see the uppercase 'i' in the one channel and lowercase 'L' in the other however in different fonts they become one and the same: 
**smartylighting/streetlights/1/0/event/{streetlightId}/lighting/measured
smartylighting/streetlights/1/0/event/{streetlightId}/Iighting/measured**

I would like to see an error or warning saying that those two channels are abandoned.

**Additional context**
Quickly scanned your ruleset documentation but didn't find any information on how to specify multiple document rulesets, is it supported in Spectral? 

Furthermore this multi document rulesets could be applied to matching channels with different parameter types, payloads etc. 

_**Edit**_
Just to clarify further, when using this rulecheck all of one's AsyncAPI documents would need to be provided for the verification to be complete, so it shouldn't be a standard ruleset which is always checked. Wouldn't mind implementing this myself, I just need to figure out how and if multiple document rulesets can be done.
