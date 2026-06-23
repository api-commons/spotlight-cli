import { oas3 } from '@api-commons/spotlight-formats';
import { truthy } from '@api-commons/spotlight-functions';
import type { RulesetDefinition } from '@api-commons/spotlight-core';

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
