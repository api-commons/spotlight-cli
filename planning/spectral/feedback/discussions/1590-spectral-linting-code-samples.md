---
number: 1590
title: "Spectral linting code samples"
category: "Q&A"
author: "tjperry07"
created: "2021-04-29T20:30:14Z"
upvotes: 1
comments: 1
answered: false
url: "https://github.com/stoplightio/spectral/discussions/1590"
---

# Spectral linting code samples

I am using the Spectral VS code plugin to lint my APIs. I use the vendor extension x-code-sample. Spectral returns over 1K errors because it's trying to lint the code samples in the folder. Not the API file, but the referenced code samples.

I keep my code samples in a different folder and reference them. Is there a way I can stop it from linting code samples?


```yaml
      x-code-samples:
        - lang: bash
          label: cURL
          source: 
            $ref: code_samples/hosted-authentication/curl-get-oauth-authorize.txt
```


<img width="937" alt="Screen Shot 2021-04-29 at 3 28 38 PM" src="https://user-images.githubusercontent.com/5667652/116614530-a8f9c480-a8ff-11eb-9a04-915e65c2b6c1.png">
