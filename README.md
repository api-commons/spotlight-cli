<p align="center"><a href="https://spotlight-rules.com"><img src="https://raw.githubusercontent.com/api-commons/spotlight-cli/main/spotlight-rules-logo.png" alt="Spotlight Rules" height="90"></a></p>

# Spotlight CLI

[![npm version](https://img.shields.io/npm/v/@spotlight-rules/spotlight-cli?color=blue)](https://www.npmjs.com/package/@spotlight-rules/spotlight-cli)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue)](./LICENSE)

**Spotlight** is a flexible JSON/YAML linter for API descriptions, with
out-of-the-box support for **OpenAPI** v2/v3.x, **AsyncAPI**, and **Arazzo**, plus
fully custom rulesets for your own API style guides.

It is part of [**Spotlight Rules**](https://spotlight-rules.com) — an
openly-governed, well-maintained build of the linter under
[API Commons](https://github.com/api-commons) — alongside
[spotlight-spec](https://github.com/api-commons/spotlight-spec) (the standalone
ruleset specification) and
[spotlight-vscode](https://github.com/api-commons/spotlight-vscode) (the editor
extension).

> **Provenance.** Spotlight CLI originated as a fork of
> [Stoplight Spectral](https://github.com/stoplightio/spectral) (Apache 2.0) and
> is released as an independent 1.0 under API Commons. Built-in rulesets are
> referenced with the `spotlight:` aliases (`spotlight:oas`,
> `spotlight:asyncapi`, `spotlight:arazzo`) and rulesets are discovered from
> `.spotlight.*` files. See [FORK.md](./FORK.md) for attribution and changes.

## Features

- **Custom rulesets** — write rules to lint any JSON or YAML document.
- **Ready-to-use rulesets** — validate **OpenAPI v2 & v3.x**, **AsyncAPI**, and **Arazzo v1**.
- **API style guides** — enforce consistency across all your APIs.
- **Built-in functions** — pattern checks, casing, length, enumerations, and more.
- **Custom functions** — write your own for advanced cases.

## Installation

```bash
npm install -g @spotlight-rules/spotlight-cli
# or
yarn global add @spotlight-rules/spotlight-cli
```

This installs the `spotlight` command.

## Usage

### 1. Create a ruleset

Spotlight needs a **ruleset** to lint files. A ruleset is a JSON, YAML, or
JavaScript file (commonly `.spotlight.yaml`) containing a collection of rules.
To start from the built-in rulesets:

```bash
echo 'extends: ["spotlight:oas", "spotlight:asyncapi", "spotlight:arazzo"]' > .spotlight.yaml
```

> The ruleset format is documented in
> [spotlight-spec](https://github.com/api-commons/spotlight-spec).

### 2. Lint

```bash
# ruleset auto-discovered in the working directory
spotlight lint myapi.yaml

# or point at a specific ruleset
spotlight lint myapi.yaml --ruleset myruleset.yaml
```

## Documentation

Guides and reference live in [`docs/`](./docs):

- [Getting started](./docs/getting-started/1-concepts.md)
- [Rulesets](./docs/getting-started/3-rulesets.md) ·
  [Custom rulesets](./docs/guides/4-custom-rulesets.md) ·
  [Custom functions](./docs/guides/5-custom-functions.md)
- [Using the CLI](./docs/guides/2-cli.md) ·
  [JavaScript API](./docs/guides/3-javascript.md) ·
  [Continuous integration](./docs/guides/8-continuous-integration.md)

The ruleset format is specified independently in
[spotlight-spec](https://github.com/api-commons/spotlight-spec), with a JSON
Schema you can use for validation and editor autocomplete.

## Support

Questions, bugs, and feature requests:
[open an issue](https://github.com/api-commons/spotlight-cli/issues).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Credits

Spotlight CLI builds on the excellent work of **Stoplight** and the **Spectral**
contributors, whose Apache-2.0 project it forks. The ruleset format, built-in
rulesets, and much of this codebase originate there — see [FORK.md](./FORK.md)
and [NOTICE](./NOTICE) for full attribution.

## License

Apache License 2.0 — see [LICENSE](./LICENSE).

---

Part of [Spotlight Rules](https://spotlight-rules.com) — a project of [API Evangelist](https://apievangelist.com), maintained openly under [API Commons](https://apicommons.org).
