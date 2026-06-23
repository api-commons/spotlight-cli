---
number: 2958
title: "The automated release is failing 🚨"
state: "closed"
labels: ["semantic-release"]
author: "stoplight-bot"
created: "2026-05-20T09:38:22Z"
updated: "2026-05-21T09:24:12Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2958"
---

# The automated release is failing 🚨

## :rotating_light: The automated release from the `develop` branch failed. :rotating_light:

I recommend you give this issue a high priority, so other packages depending on you can benefit from your bug fixes and new features again.

You can find below the list of errors reported by **semantic-release**. Each one of them has to be resolved in order to automatically publish your package. I’m sure you can fix this 💪.

Errors are usually caused by a misconfiguration or an authentication problem. With each error reported below you will find explanation and guidance to help you to resolve it.

Once all the errors are resolved, **semantic-release** will release your package the next time you push a commit to the `develop` branch. You can also manually restart the failed CI job that runs **semantic-release**.

If you are not sure how to resolve this, here are some links that can help you:
- [Usage documentation](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/README.md)
- [Frequently Asked Questions](https://github.com/semantic-release/semantic-release/blob/master/docs/support/FAQ.md)
- [Support channels](https://github.com/semantic-release/semantic-release#get-help)

If those don’t help, or if this issue is reporting something you think isn’t right, you can always ask the humans behind **[semantic-release](https://github.com/semantic-release/semantic-release/issues/new)**.

---

### Invalid npm token.

The [npm token](https://github.com/semantic-release/npm/blob/master/README.md#npm-registry-authentication) configured in the `NPM_TOKEN` environment variable must be a valid [token](https://docs.npmjs.com/getting-started/working_with_tokens) allowing to publish to the registry `https://registry.npmjs.org/`.

Please verify your authentication configuration.

---

Good luck with your project ✨

Your **[semantic-release](https://github.com/semantic-release/semantic-release)** bot :package::rocket:

<!-- semantic-release:github -->
