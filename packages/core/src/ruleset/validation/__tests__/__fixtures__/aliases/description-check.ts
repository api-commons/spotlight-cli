import { pattern } from '@spotlight-rules/spotlight-functions';
import { DiagnosticSeverity } from '@stoplight/types';
import { RulesetDefinition } from '@spotlight-rules/spotlight-core';

export { ruleset as default };

const ruleset: RulesetDefinition = {
  aliases: {
    infoSection: ['$.info.section'],
  },
  rules: {
    'check-description': {
      message: 'API version must be 1.0.0',
      given: '#infoSection',
      severity: DiagnosticSeverity.Error,
      then: {
        field: 'description',
        function: pattern,
        functionOptions: {
          match: 'Stoplight',
        },
      },
    },
  },
};
