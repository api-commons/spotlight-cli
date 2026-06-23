---
number: 2069
title: "Speactral javascript - New Document from yaml throw error"
state: "closed"
labels: []
author: "zlil"
created: "2022-02-20T21:45:55Z"
updated: "2022-02-21T15:17:13Z"
comments: 6
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2069"
---

# Speactral javascript - New Document from yaml throw error

Hey,

I'm trying to create a new Document from YAML string and I am receiving and error:
Cannot read properties of undefined (reading 'Yaml')

I've double-checked the string i'm receiving in online YAML linters and no errors were found.


```
const JSYAML = require('js-yaml')
const parseYamlToDoc = (yamlString) => {
 try { 
 JSYAML.load(yamlString) // this line is passed successfully, just need to check YAML is fine and no error thrown
return new Document(yamlString, Parsers.Yaml)
} catch (error) {
console.log(error) // here i'm receiving Cannot read properties of undefined (reading 'Yaml')
}
```

if I'm taking the exact same string and trying to parse it using 
`const yamlObj = parseYaml(specStr)`
everything works just fine.

so what's the problem actually with New Document, please?
