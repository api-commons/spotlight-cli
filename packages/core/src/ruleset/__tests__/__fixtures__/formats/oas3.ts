import { oas3 } from '@spotlight-rules/spotlight-formats';
import { truthy } from '@spotlight-rules/spotlight-functions';
import type { RulesetDefinition } from '@spotlight-rules/spotlight-core';

export { ruleset as default };

const ruleset: RulesetDefinition = {
  formats: [oas3],
  rules: {
    'oas3-valid-rule': {
      message: 'should be OK',
      given: '$.info',
      then: {
        function: truthy,
      },
    },
  },
};
