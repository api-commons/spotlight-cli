import { RulesetDefinition } from '@api-commons/spotlight-core';
import shared from './shared';
import { truthy } from '@api-commons/spotlight-functions/src';

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
