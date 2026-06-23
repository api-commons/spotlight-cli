---
number: 2021
title: "Cannot find module 'nimma/legacy' from SpectralCore Runner"
state: "closed"
labels: []
author: "Amachua"
created: "2022-01-14T15:57:08Z"
updated: "2022-01-18T17:01:17Z"
comments: 2
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/2021"
---

# Cannot find module 'nimma/legacy' from SpectralCore Runner

**Describe the bug**

When I load a YAML file and a custom spectral ruleset, then I would like that the spectral runner successfully finalize the analysis of the file (see following code) as it is currently blocked due to nimma.

```javascript
export const repro = async (specificationPath: string, rulesetPath: string): Promise<boolean> => {

  const spectral = new Spectral({ resolver: httpAndFileResolver });

  const ruleset = await getRuleset(rulesetPath);

  spectral.setRuleset(ruleset);

  const document = new Document(
    await readParsable(specificationPath, { encoding: 'utf8' }),
    Parsers.Yaml,
    specificationPath,
  );

  await spectral.runWithResolved(
    document,
    {
      ignoreUnknownFormat: false,
    });

  return true;
};
```

To help you on the investigation, I have created a complete standalone repro case that is available at https://github.com/Amachua/spectral-repro.
