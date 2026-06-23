import { RulesetDefinition } from '@spotlight-rules/spotlight-core';
import shared from './shared';
import { truthy } from '@spotlight-rules/spotlight-functions/src';

export default {
  extends: [[shared, 'off']],
  rules: {
    'overridable-rule': {
      given: '$.foo',
      then: {
        function: truthy,
      },
    },
  },
} as RulesetDefinition;
