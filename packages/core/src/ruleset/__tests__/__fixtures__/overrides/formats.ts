import { jsonSchemaDraft4, jsonSchemaDraft7 } from '@spotlight-rules/spotlight-formats';
import { schema } from '@spotlight-rules/spotlight-functions';
import { RulesetDefinition } from '@spotlight-rules/spotlight-core';

import _base from './_base';

export { ruleset as default };

const ruleset: RulesetDefinition = {
  rules: {
    ..._base.rules,
  },
  overrides: [
    {
      files: ['schemas/**/*.draft7.json'],
      formats: [jsonSchemaDraft7],
      rules: {
        // if you stumbled upon this file and want to use this rule in your own ruleset - do NOT.
        // it doesn't cover many cases, and it's only purpose is to serve us as a test artefact
        'valid-number-validation': {
          given: ['$..exclusiveMinimum', '$..exclusiveMaximum'],
          then: {
            function: schema,
            functionOptions: {
              schema: {
                type: 'number',
              },
            },
          },
        },
      },
    },
    {
      files: ['schemas/**/*.draft4.json'],
      formats: [jsonSchemaDraft4],
      rules: {
        // if you stumbled upon this file and want to use this rule in your own ruleset - do NOT.
        // it doesn't cover many cases, and it's only purpose is to serve us as a test artefact
        'valid-number-validation': {
          given: ['$..exclusiveMinimum', '$..exclusiveMaximum'],
          then: {
            function: schema,
            functionOptions: {
              schema: {
                type: 'boolean',
              },
            },
          },
        },
      },
    },
  ],
};
