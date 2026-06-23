import shared from './shared';
import {RulesetDefinition} from "@api-commons/spotlight-core";

export default {
  extends: [[shared, 'all']],
  rules: {
    'description-matches-stoplight': 'off',
  },
} as RulesetDefinition;
