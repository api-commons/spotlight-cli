import { RulesetDefinition } from '@api-commons/spotlight-core';
import shared from './shared';

export default {
  extends: [[shared, 'off']],
  rules: {
    'description-matches-stoplight': 'error',
  },
} as RulesetDefinition;
