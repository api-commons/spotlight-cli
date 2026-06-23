---
number: 172
title: "Add --quiet switch "
state: "closed"
labels: ["enhancement", "good first issue", "released"]
author: "michaeljmcd"
created: "2019-04-30T14:52:37Z"
updated: "2019-06-17T10:28:34Z"
comments: 5
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/172"
---

# Add --quiet switch 

### **I'm submitting a...**
  - [ ] bug report
  - [x] feature request

### What is the current behavior?

Running Spectral lint with JSON output and then piping standard output to another program fails because the logging to standard output gets sent along with the JSON output and fails to parse. 

For example, imagine an invalid OpenAPI document consisting only of:

```
openapi: 3.0.1
```

Running an incredibly simple pipeline like this fails:

```
$ spectral lint --format=json c.yaml | jq '.[]'                                                    
parse error: Invalid numeric literal at line 1, column 8 
```

Because stdout looks like this:

```
Linting c.yaml                                                                        
OpenAPI 3.x detected                                                          
[                                                                                     
        {                                                                             
                "code": "info-contact",   
```

### What is the expected behavior?

Standard output with JSON output should be parseable so that `spectral` can be used in scripts.

### What is the motivation / use case for changing the behavior?

Using Spectral in a script. It is possible to work around this by dumping the JSON to a temp file with `-o`, but that complicates some scripts.

### Please tell us about your environment:

  - Version: 2.1.0
  - Framework: [ ]
  - Language: [all]

```
> $ spectral --version
@stoplight/spectral/2.1.0 linux-x64 node-v10.12.0
```

### Other information

N/A
