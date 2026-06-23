import { oas2, oas3 } from "@api-commons/spotlight-formats";
import { oas } from "@api-commons/spotlight-rulesets";
export default {
  overrides: [
    {
      files: ["apis/*.json"],
      extends: oas,
      formats: [oas2, oas3],
    },
  ],
};
