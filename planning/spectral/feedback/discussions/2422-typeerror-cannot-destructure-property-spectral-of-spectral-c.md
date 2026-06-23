---
number: 2422
title: "TypeError: Cannot destructure property 'Spectral' of 'spectral_core_1.default' as it is undefined."
category: "Q&A"
author: "AmitDhingra134"
created: "2023-03-16T11:49:46Z"
upvotes: 3
comments: 2
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2422"
---

# TypeError: Cannot destructure property 'Spectral' of 'spectral_core_1.default' as it is undefined.

When I am trying to integrate spiral stoplightio in a javascript application in VS code then its showing me below error on line number 9:

 **TypeError: Cannot destructure property 'Spectral' of 'spectral_core_1.default' as it is undefined.** 

Code : 

1. import * as fs from "node:fs";
2. import { fileURLToPath } from "node:url";
3. import * as path from "node:path";
4. import { join } from "path";
5. import { bundleAndLoadRuleset } from "@stoplight/spectral-ruleset-bundler/with-loader";
6. //const { bundleAndLoadRuleset } = require("@stoplight/spectral-ruleset-bundler/with-loader");
7. import Parsers from "@stoplight/spectral-parsers"; // make sure to install the package if you intend to use default parsers!
8. import spectralCore from "@stoplight/spectral-core";
9. **const { Spectral, Document } = spectralCore;**
10. import spectralRuntime from "@stoplight/spectral-runtime";
11. const { fetch } = spectralRuntime;
12. 
13. const __dirname = path.dirname(fileURLToPath(import.meta.url));
14. //file:///C:/path/
15. const myDocument = new Document(
16.   // load an API specification file from your project's root directory. You can use the openapi.yaml example from here: https://github.com/stoplightio/Public-APIs/blob/master/reference/plaid/openapi.yaml
17.   fs.readFileSync(join(__dirname, ".openapi.yaml"), "utf-8").trim(),
18.   Parsers.Yaml,
19.   ".openapi.yaml",
20. );
21. const spectral = new Spectral();
22. // load a ruleset file from your project's root directory.
23. const rulesetFilepath = path.join(__dirname, ".spectral.yaml");
24. console.log(rulesetFilepath);
25. spectral.setRuleset(bundleAndLoadRuleset(rulesetFilepath, { fs, fetch }));
26. console.log(myDocument);
27. spectral.run(myDocument).then(console.log);

Please help

Thanks
AD
