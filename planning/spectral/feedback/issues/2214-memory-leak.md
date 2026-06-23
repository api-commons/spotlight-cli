---
number: 2214
title: "Memory Leak"
state: "open"
labels: ["t/bug", "p/medium", "triaged", "reviewed-medium"]
author: "samirachamplin"
created: "2022-07-25T21:38:13Z"
updated: "2024-05-31T12:36:33Z"
comments: 0
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2214"
---

# Memory Leak

**Describe the bug**

There appears to be a memory leak with spectral. The resident memory on the machine continues to rise with each validation, and eventually runs out of space and crashes.

**To Reproduce**

Repeatedly lint a document with `spectral.run()` in a loop.

Here is the example code snippet that was used:
```
export async function validate(spec: string): Promise<ISpectralDiagnostic[]> {
  const spectral = new Spectral();
  const ruleset = new Ruleset({extends: [oas]})
  spectral.setRuleset(ruleset);
  while (true) {
    const result = await spectral.run(spec);
    console.log(result.length);
  }
  return spectral.run(spec);
}
```

**Expected behavior**
We would expect resident memory to be cleared so the app doesn't crash.

**Screenshots**

See `RES` where the residential memory continues to rise. These were captured with `htop`.

<img width="304" alt="Screen Shot 2022-07-22 at 1 46 41 PM" src="https://user-images.githubusercontent.com/10061125/180868749-42ea12d5-7821-4c79-b524-5428aa2b1b8c.png">

<img width="302" alt="Screen Shot 2022-07-22 at 2 39 10 PM" src="https://user-images.githubusercontent.com/10061125/180868754-0c390814-29af-4971-bdab-175954f0ecce.png">

<img width="292" alt="Screen Shot 2022-07-22 at 2 39 21 PM" src="https://user-images.githubusercontent.com/10061125/180868763-0227572f-a72f-485a-b016-3e419aecf4bf.png">

**Environment (remove any that are not applicable):**
- "@stoplight/spectral-core": "^1.12.2",
- "@stoplight/spectral-formats": "^1.2.0",
- "@stoplight/spectral-functions": "^1.6.1",
- "@stoplight/spectral-rulesets": "^1.9.0",
- OS: macOS Big Sur
