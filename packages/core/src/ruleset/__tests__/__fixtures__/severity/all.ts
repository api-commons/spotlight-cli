import shared from './shared';
import {RulesetDefinition} from "@spotlight-rules/spotlight-core";

export default {
  extends: [[shared, 'all']],
  rules: {
    'description-matches-stoplight': 'off',
  },
} as RulesetDefinition;
