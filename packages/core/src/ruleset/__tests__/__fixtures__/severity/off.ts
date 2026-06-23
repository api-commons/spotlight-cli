import { RulesetDefinition } from '@api-commons/spotlight-core';
import shared from './shared';

export default {
  extends: [[shared, 'off']],
  rules: {
    'overridable-rule': true,
  },
} as RulesetDefinition;
