import { DiagnosticSeverity } from '@stoplight/types';
import { pattern } from '@spotlight-rules/spotlight-functions';
import { RulesetDefinition } from '@spotlight-rules/spotlight-core';

import _base from './_base';

export { ruleset as default };

const ruleset: RulesetDefinition = {
  extends: _base,
  overrides: [
    {
      files: ['legacy/**/*.json'],
      rules: {
        'value-matches-stoplight': {
          message: 'Value must contain Stoplight',
          given: '$..value',
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
    },
  ],
};
