import { RulesetDefinition } from '@api-commons/spotlight-core';

import _scope from './scope';

export { ruleset as default };

const ruleset: RulesetDefinition = {
  extends: [
    [_scope, 'all'],
  ],
};