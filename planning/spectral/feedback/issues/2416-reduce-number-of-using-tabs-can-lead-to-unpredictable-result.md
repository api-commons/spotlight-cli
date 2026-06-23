---
number: 2416
title: "Reduce number of \"Using tabs can lead to unpredictable results\" messages to 1 per file"
state: "closed"
labels: ["enhancement"]
author: "pavelkornev"
created: "2023-03-03T15:11:45Z"
updated: "2024-11-11T06:45:09Z"
comments: 5
reactions_total: 2
thumbs_up: 2
url: "https://github.com/stoplightio/spectral/issues/2416"
---

# Reduce number of "Using tabs can lead to unpredictable results" messages to 1 per file

**User story.**
In our org we have lots of legacy APIs which are using tabs as indentation. In this case Spectral produces lots of Warnings from the parser with a message `Using tabs can lead to unpredictable results`.

When I say "lots of", I mean it's really abnormally massive number... for the [attached real-world OpenAPI file](https://github.com/stoplightio/spectral/files/10883301/test.json.zip) Spectral generates **21931** parser Warnings (**22 THOUSANDS** for a single file). 

```
  ...
  630:1   warning  parser  Using tabs can lead to unpredictable results
  630:2   warning  parser  Using tabs can lead to unpredictable results
  630:3   warning  parser  Using tabs can lead to unpredictable results
  630:4   warning  parser  Using tabs can lead to unpredictable results
  631:1   warning  parser  Using tabs can lead to unpredictable results
  631:2   warning  parser  Using tabs can lead to unpredictable results
  631:3   warning  parser  Using tabs can lead to unpredictable results
  631:4   warning  parser  Using tabs can lead to unpredictable results
  632:1   warning  parser  Using tabs can lead to unpredictable results
  632:2   warning  parser  Using tabs can lead to unpredictable results
  632:3   warning  parser  Using tabs can lead to unpredictable results
  632:4   warning  parser  Using tabs can lead to unpredictable results
  632:5   warning  parser  Using tabs can lead to unpredictable results
  633:1   warning  parser  Using tabs can lead to unpredictable results
  633:2   warning  parser  Using tabs can lead to unpredictable results
  633:3   warning  parser  Using tabs can lead to unpredictable results
  ...
```

The problem with this is that other more serious issues simply invisible in this massive spam from this Warning...

**Related issues:**
https://github.com/stoplightio/spectral/issues/1550

**Describe the solution you'd like**
Return a single Warning of this kind per file. Normally, the file is using either tabs, or spaces. In case of tabs, it doesn't make sense to spam the output with the same issue for each occurrence. If developer decides to change indentation in the file, most likely (s)he will use IDE feature for that which will change it for the whole file anyway, not just in one single occurrence.

**BTW**, Could you please give us some guidance on what kind of unpredictable results the users may face if they use tabs in their OpenAPI files? This is the most frequently asked question when they see this issue from the tooling.


Thank you.
