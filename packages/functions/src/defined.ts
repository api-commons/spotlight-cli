import { createRulesetFunction } from '@api-commons/spotlight-core';

import { optionSchemas } from './optionSchemas';

export default createRulesetFunction<unknown, null>(
  {
    input: null,
    options: optionSchemas.defined,
  },
  function defined(input) {
    if (typeof input === 'undefined') {
      return [
        {
          message: '#{{print("property")}}must be defined',
        },
      ];
    }

    return;
  },
);
