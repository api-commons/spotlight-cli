---
number: 2791
title: "Mutating extends ruleset in javascript"
category: "Q&A"
author: "ethanyu-toast"
created: "2025-02-27T16:34:56Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2791"
---

# Mutating extends ruleset in javascript

Hello, 

I'm working on finding a way for an external team to add a ruleset on top of our existing standards for our own tooling. From what I've gathered from the docs, the only way for that to work is for the external ruleset to extend our existing one. Is there a way to mutate the extends in javascript guarantee that our ruleset is always extended and add it in if it isn't? 

If not, the only other workaround I can think of is manipulating the yaml ruleset file to include that extends line. Doing it in javascript would be much cleaner though (I think). Thanks.
