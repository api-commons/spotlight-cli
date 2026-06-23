import { pattern } from '@spotlight-rules/spotlight-functions';
import { DiagnosticSeverity } from '@stoplight/types';
import { RulesetDefinition } from '@spotlight-rules/spotlight-core';

export { ruleset as default };

const ruleset: RulesetDefinition = {
  aliases: {
    infoSection: ['$.info'],
  },
  rules: {
    'check-initial-version': {
      message: 'API version must be 1.0.0',
      given: '#infoSection',
      severity: DiagnosticSeverity.Error,
      then: {
        field: 'version',
        function: pattern,
        functionOptions: {
          match: '^1\\.0\\.0$',
        },
      },
    },
  },
};
