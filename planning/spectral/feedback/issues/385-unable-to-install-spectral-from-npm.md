---
number: 385
title: "Unable to install spectral from npm"
state: "closed"
labels: ["t/bug"]
author: "dobl1"
created: "2019-07-16T09:34:58Z"
updated: "2019-07-16T14:33:39Z"
comments: 4
reactions_total: 0
thumbs_up: 0
url: "https://github.com/stoplightio/spectral/issues/385"
---

# Unable to install spectral from npm

**Describe the bug**
Unable to install spectral from npm.

**To Reproduce**
I am running `npm install -g @stoplight/spectral` 

**Expected behavior**
I get this error, seems to be related to `better-ajv-errors@0.6.4`, more precisely babel
```
npm ERR! prepareGitDep 1>
npm ERR! prepareGitDep > husky@0.14.3 install C:\Users\blancd\AppData\Roaming\npm-cache\_cacache\tmp\git-clone-334fa5d6\node_modules\husky
npm ERR! prepareGitDep > node ./bin/install.js
npm ERR! prepareGitDep
npm ERR! prepareGitDep husky
npm ERR! prepareGitDep setting up Git hooks
npm ERR! prepareGitDep done
npm ERR! prepareGitDep
npm ERR! prepareGitDep
npm ERR! prepareGitDep > core-js@2.6.9 postinstall C:\Users\blancd\AppData\Roaming\npm-cache\_cacache\tmp\git-clone-334fa5d6\node_modules\core-js
npm ERR! prepareGitDep > node scripts/postinstall || echo "ignore"
npm ERR! prepareGitDep
npm ERR! prepareGitDep Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
npm ERR! prepareGitDep
npm ERR! prepareGitDep The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
npm ERR! prepareGitDep > https://opencollective.com/core-js
npm ERR! prepareGitDep > https://www.patreon.com/zloirock
npm ERR! prepareGitDep
npm ERR! prepareGitDep Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
npm ERR! prepareGitDep
npm ERR! prepareGitDep
npm ERR! prepareGitDep > core-js-pure@3.1.4 postinstall C:\Users\blancd\AppData\Roaming\npm-cache\_cacache\tmp\git-clone-334fa5d6\node_modules\core-js-pure
npm ERR! prepareGitDep > node scripts/postinstall || echo "ignore"
npm ERR! prepareGitDep
npm ERR! prepareGitDep Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!
npm ERR! prepareGitDep
npm ERR! prepareGitDep The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
npm ERR! prepareGitDep > https://opencollective.com/core-js
npm ERR! prepareGitDep > https://www.patreon.com/zloirock
npm ERR! prepareGitDep
npm ERR! prepareGitDep Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)
npm ERR! prepareGitDep
npm ERR! prepareGitDep
npm ERR! prepareGitDep > better-ajv-errors@0.6.4 prepare C:\Users\blancd\AppData\Roaming\npm-cache\_cacache\tmp\git-clone-334fa5d6
npm ERR! prepareGitDep > yarn build
npm ERR! prepareGitDep
npm ERR! prepareGitDep yarn run v1.17.3
npm ERR! prepareGitDep $ yarn run clean && yarn build:modern && yarn build:legacy
npm ERR! prepareGitDep $ rm -rf lib
npm ERR! prepareGitDep $ BABEL_ENV=modern babel src -d lib/modern/
npm ERR! prepareGitDep info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
npm ERR! prepareGitDep info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
npm ERR! prepareGitDep
npm ERR! prepareGitDep 2> npm WARN install Usage of the `--dev` option is deprecated. Use `--only=dev` instead.
npm ERR! prepareGitDep npm WARN deprecated kleur@2.0.2: Please upgrade to kleur@3 or migrate to 'ansi-colors' if you prefer the old syntax. Visit <https://github.com/lukeed/kleur/releases/tag/v3.0.0\> for migration path(s).
npm ERR! prepareGitDep npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
npm ERR! prepareGitDep 'BABEL_ENV' is not recognized as an internal or external command,
npm ERR! prepareGitDep operable program or batch file.
npm ERR! prepareGitDep error Command failed with exit code 1.
npm ERR! prepareGitDep error Command failed with exit code 1.
npm ERR! prepareGitDep npm ERR! code ELIFECYCLE
npm ERR! prepareGitDep npm ERR! errno 1
npm ERR! prepareGitDep npm ERR! better-ajv-errors@0.6.4 prepare: `yarn build`
npm ERR! prepareGitDep npm ERR! Exit status 1
npm ERR! prepareGitDep npm ERR!
npm ERR! prepareGitDep npm ERR! Failed at the better-ajv-errors@0.6.4 prepare script.
npm ERR! prepareGitDep npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm ERR! prepareGitDep
npm ERR! prepareGitDep npm ERR! A complete log of this run can be found in:
npm ERR! prepareGitDep npm ERR!     C:\Users\blancd\AppData\Roaming\npm-cache\_logs\2019-07-16T09_01_41_987Z-debug.log
npm ERR! prepareGitDep
npm ERR! premature close
```

**Environment**
 - Windows 10
 - node v10.15.1
 - npm 6.4.1
