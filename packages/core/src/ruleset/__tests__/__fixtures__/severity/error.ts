import { RulesetDefinition } from '@spotlight-rules/spotlight-core';
import shared from './shared';

export default {
  extends: [[shared, 'off']],
  rules: {
    'description-matches-stoplight': 'error',
  },
} as RulesetDefinition;
