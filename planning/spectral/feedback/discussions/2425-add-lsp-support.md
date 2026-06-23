---
number: 2425
title: "Add LSP support"
category: "Ideas"
author: "SkypLabs"
created: "2021-05-08T13:50:12Z"
upvotes: 1
comments: 6
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2425"
---

# Add LSP support

**User story.**

As a developer, I can use any source code editor or IDE supporting the [Language Server Protocol (LSP)](https://en.wikipedia.org/wiki/Language_Server_Protocol) to get feedback from Spectral without having to run the CLI tool over and over.

**Is your feature request related to a problem?**

It is frustrating to have to regularly run the CLI tool to get linting information from Spectral whereas they could be displayed directly inside the source code editor / IDE (Vim in my case).

**Describe the solution you'd like**

Adding a language server to Spectral.

This way, Spectral would become the very first OpenAPI LSP as far as I know!

**Additional context**

* https://microsoft.github.io/language-server-protocol/
* https://github.com/Microsoft/vscode-languageserver-node
