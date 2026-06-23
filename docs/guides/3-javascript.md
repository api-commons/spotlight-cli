# Spotlight in JavaScript

The Spotlight CLI is a thin wrapper around a JavaScript (TypeScript) API, which can be used independently to do all the same things outside of the CLI, such as linting YAML and JSON documents from a string or an object.

## Prerequisites

To use the Spotlight JS API, you need to install the appropriate package.

For npm users:

```bash
npm install -g @spotlight-rules/spotlight-core
```

For Yarn users:

```bash
yarn global add @spotlight-rules/spotlight-core
```

## Get Started

Similar to using Spotlight in the CLI, there are two things you'll need to run Spotlight in JS:

- A string or a file containing your structured data (OpenAPI, AsyncAPI, Kubernetes, etc).
- An object or a file representing a ruleset

As an example, here's a script of Spotlight in action:

```js title="example-1.mjs" lineNumbers
import spectralCore from "@spotlight-rules/spotlight-core";
const { Spotlight, Document } = spectralCore;
import Parsers from "@spotlight-rules/spotlight-parsers"; // make sure to install the package if you intend to use default parsers!
import { truthy } from "@spotlight-rules/spotlight-functions"; // this has to be installed as well

// this will be our API specification document
const myDocument = new Document(
  `---
responses:
  '200':
    description: ''`,
  Parsers.Yaml,
  "/my-file",
);

const spectral = new Spotlight();
spectral.setRuleset({
  // this will be our ruleset
  rules: {
    "no-empty-description": {
      given: "$..description",
      message: "Description must not be empty",
      then: {
        function: truthy,
      },
    },
  },
});

// we lint our document using the ruleset we passed to the Spotlight object
spectral.run(myDocument).then(console.log);
```

## Load Rulesets and API Specification Files

Let's look at some other examples and how to work with external files.

### Load a JSON/YAML Ruleset

If you would like to run this example, make sure that you have:

- An OpenAPI description document in the same directory as your script named `openapi.yaml`. You can use [this OpenAPI description for the Plaid API](https://github.com/stoplightio/Public-APIs/blob/master/reference/plaid/openapi.yaml).
- A ruleset file named `.spotlight.yaml`. It can have the following contents:

```yaml
extends:
  - spotlight:oas
```

Here's a script that shows how to load an external API specification file, and an external YAML ruleset:

```js title="example-2.mjs" lineNumbers
import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
import * as path from "node:path";
import { join } from "path";
import { bundleAndLoadRuleset } from "@spotlight-rules/spotlight-ruleset-bundler/with-loader";
import Parsers from "@spotlight-rules/spotlight-parsers"; // make sure to install the package if you intend to use default parsers!
import spectralCore from "@spotlight-rules/spotlight-core";
const { Spotlight, Document } = spectralCore;
import spectralRuntime from "@spotlight-rules/spotlight-runtime";
const { fetch } = spectralRuntime;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const myDocument = new Document(
  // load an API specification file from your project's root directory. You can use the openapi.yaml example from here: https://github.com/stoplightio/Public-APIs/blob/master/reference/plaid/openapi.yaml
  fs.readFileSync(join(__dirname, "openapi.yaml"), "utf-8").trim(),
  Parsers.Yaml,
  "openapi.yaml",
);

const spectral = new Spotlight();
// load a ruleset file from your project's root directory.
const rulesetFilepath = path.join(__dirname, ".spotlight.yaml");
spectral.setRuleset(await bundleAndLoadRuleset(rulesetFilepath, { fs, fetch }));

spectral.run(myDocument).then(console.log);
```

### Load a JavaScript Ruleset

Starting in Spotlight v6.0, support was added for [rulesets to be written using JavaScript](./4-custom-rulesets.md#alternative-js-ruleset-format).

To load a JavaScript ruleset, you have to import it similar to how you would import a module:

```js lineNumbers
import { Spotlight } from "@spotlight-rules/spotlight-core";
import ruleset from "./my-javascript-ruleset";

const spectral = new Spotlight();
spectral.setRuleset(ruleset);
```

### Browser

Here's an example script of how you could run Spotlight in the browser:

```js title="example-3.mjs" lineNumbers
import { Spotlight } from "@spotlight-rules/spotlight-core";
import { bundleAndLoadRuleset } from "@spotlight-rules/spotlight-ruleset-bundler/with-loader";

// create a ruleset that extends the spotlight:oas ruleset
const myRuleset = `extends: spotlight:oas
rules: {}`;

// try to load an external ruleset
const fs = {
  promises: {
    async readFile(filepath) {
      if (filepath === "/.spotlight.yaml") {
        return myRuleset;
      }

      throw new Error(`Could not read ${filepath}`);
    },
  },
};

const spectral = new Spotlight();
s.setRuleset(await bundleAndLoadRuleset("/.spotlight.yaml", { fs, fetch }));
```

### Load Multiple Rulesets

If you'd like to use the `bundleAndLoadRuleset` method to load multiple rulesets, you'll have to create a new Spotlight ruleset file, and use the [`extends`](../getting-started/3-rulesets.md#extending-rulesets) functionality to extend the rulesets you'd like to use.

## Advanced

### How to Use a Proxy

Spotlight supports HTTP(S) proxies when fetching remote assets:

```js title="example-4.mjs" lineNumbers
import { Spotlight } from "@spotlight-rules/spotlight-core";
import ProxyAgent from "proxy-agent";
import { createHttpAndFileResolver } from "@spotlight-rules/spotlight-ref-resolver";

// start Spotlight using a proxy
const spectral = new Spotlight({
  resolver: createHttpAndFileResolver({ agent: new ProxyAgent(process.env.PROXY) }),
});

// ... load document

// ... lint document - $refs and rules will be requested using the proxy
```

### How to Use a Custom Resolver

Spotlight lets you provide any custom \$ref resolver. By default, HTTP(S) and file protocols are resolved, relatively to
the document Spotlight lints against. You can also add support for additional protocols, or adjust the resolution. To achieve that, you need to create a custom json-ref-resolver instance.

For example:

```js title="example-5.cjs" lineNumbers
const path = require("path");
const fs = require("fs");
const { Spotlight } = require("@spotlight-rules/spotlight-cli");
const { Resolver } = require("@stoplight/json-ref-resolver");

const customFileResolver = new Resolver({
  resolvers: {
    file: {
      resolve: ref => {
        return new Promise((resolve, reject) => {
          const basePath = process.cwd();
          const refPath = ref.path();
          fs.readFile(path.join(basePath, refPath), "utf8", (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          });
        });
      },
    },
  },
});

const spectral = new Spotlight({ resolver: customFileResolver });

// ... load document

// ... lint document - $refs and rules will be requested using the proxy
```

This custom resolver resolves all remote file refs relative to the current working directory.

You can find more information about how to create custom resolvers in
the [@stoplight/json-ref-resolver](https://github.com/stoplightio/json-ref-resolver) repository.
