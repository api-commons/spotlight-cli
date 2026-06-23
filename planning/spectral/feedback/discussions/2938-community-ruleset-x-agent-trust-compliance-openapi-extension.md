---
number: 2938
title: "Community ruleset: x-agent-trust compliance (OpenAPI Extensions Registry)"
category: "Rulesets"
author: "razashariff"
created: "2026-04-12T07:58:19Z"
upvotes: 1
comments: 0
answered: false
url: "https://github.com/stoplightio/spectral/discussions/2938"
---

# Community ruleset: x-agent-trust compliance (OpenAPI Extensions Registry)

Published a Spectral ruleset for checking OpenAPI specs against the [`x-agent-trust`](https://spec.openapis.org/registry/extension/x-agent-trust.html) extension in the OpenAPI Extensions Registry.

**Install:**

```bash
npm install spectral-x-agent-trust
```

**Use:**

```yaml
# .spectral.yaml
extends:
  - spectral-x-agent-trust/ruleset
```

**9 rules covering:**

| Rule | Severity |
|------|----------|
| `x-agent-trust-present` | error -- Agent-Signature apiKey schemes must include x-agent-trust |
| `x-agent-trust-algorithm-present` | error -- algorithm field required |
| `x-agent-trust-algorithm-strong` | error -- flags HS256, none as insecure |
| `x-agent-trust-levels-present` | error -- trustLevels array required |
| `x-agent-trust-levels-nonempty` | error -- at least one trust level |
| `x-agent-trust-keys-url` | error -- issuerKeysUrl required |
| `x-agent-trust-keys-url-https` | warn -- HTTPS for absolute URLs |
| `x-agent-trust-sensitive-ops` | warn -- sensitive operations should declare minimum trust level |
| `x-agent-trust-no-parameter` | error -- Agent-Signature as parameter is an anti-pattern (per registry guidance) |

The `x-agent-trust-no-parameter` rule enforces the anti-pattern guidance from the registry entry itself: the Agent-Signature header should be declared via securitySchemes, not as a regular operation parameter.

**npm:** [spectral-x-agent-trust](https://www.npmjs.com/package/spectral-x-agent-trust)
**Source:** [razashariff/spectral-x-agent-trust](https://github.com/razashariff/spectral-x-agent-trust)
**Registry entry:** [spec.openapis.org/registry/extension/x-agent-trust.html](https://spec.openapis.org/registry/extension/x-agent-trust.html)

For a deeper audit including OWASP MCP Top 10 checks, the [Cybersecify](https://www.npmjs.com/package/cybersecify) scanner covers the full scope.

Happy to take feedback on the rules or severity levels.
