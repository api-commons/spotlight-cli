import parentRuleset from './indirect.2';
import { falsy } from '@spotlight-rules/spotlight-functions';
import { RulesetDefinition } from '@spotlight-rules/spotlight-core';

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
