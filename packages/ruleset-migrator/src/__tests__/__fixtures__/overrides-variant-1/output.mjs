import { oas2, oas3 } from "@spotlight-rules/spotlight-formats";
import { oas } from "@spotlight-rules/spotlight-rulesets";
export default {
  overrides: [
    {
      files: ["apis/*.json"],
      extends: oas,
      formats: [oas2, oas3],
    },
  ],
};
