import parentRuleset from './indirect.2';
import { falsy } from '@api-commons/spotlight-functions';
import { RulesetDefinition } from '@api-commons/spotlight-core';

const ruleset: RulesetDefinition = {
  extends: parentRuleset,
  rules: {
    'foo-rule': {
      given: '$',
      then: {
        function: falsy,
      },
    },
  },
};

export { ruleset as default };
