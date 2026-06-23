import ruleset from './indirect.3';
import {falsy} from "@api-commons/spotlight-functions";

export default {
  extends: ruleset,
  rules: {
    'bar-rule': {
      given: '$',
      then: {
        function: falsy,
      },
    },
  },
};
