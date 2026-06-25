import { truthy, pattern, length, schema } from '@spotlight-rules/spotlight-functions';

// spotlight:skill — governance for agent skills (Anthropic "SKILL.md" Agent Skills).
// The document is parsed by the markdown parser into { frontmatter, body, headings,
// links, code, words }. These rules govern the YAML frontmatter (metadata) and the
// markdown body structure. Run with: spotlight lint SKILL.md --ruleset spotlight:skill
//
// Note: rules are intentionally NOT format-scoped — Spectral skips format-scoped rules
// when a document's format is unknown, and a skill is selected by ruleset, not detection.

// Custom function: assert a top-level body section (## Heading) is present.
const headingPresent = (
  input: { headings?: Array<{ text?: string; depth?: number }> } | undefined,
  opts: { name: string; maxDepth?: number },
) => {
  const want = String(opts.name).toLowerCase();
  const max = opts.maxDepth ?? 3;
  const found = (input?.headings ?? []).some((h) => (h.depth ?? 6) <= max && String(h.text ?? '').toLowerCase() === want);
  if (!found) return [{ message: `Skill body should have a "${opts.name}" section (e.g. "## ${opts.name}").` }];
  return undefined;
};

const ruleset = {
  documentationUrl: 'https://spotlight-rules.com/spec/',
  rules: {
    'skill-name': {
      description: 'A skill must declare a name in its frontmatter.',
      message: '{{error}}',
      given: '$.frontmatter',
      severity: 'error',
      then: { field: 'name', function: truthy },
    },
    'skill-name-kebab-case': {
      description: 'Skill name should be lower kebab-case (matches the skill directory name).',
      given: "$.frontmatter.name",
      severity: 'warn',
      then: { function: pattern, functionOptions: { match: '^[a-z0-9]+(?:-[a-z0-9]+)*$' } },
    },
    'skill-description': {
      description: 'A skill must declare a description — it is how agents decide when to use the skill.',
      given: '$.frontmatter',
      severity: 'error',
      then: { field: 'description', function: truthy },
    },
    'skill-description-length': {
      description: 'Skill descriptions should be specific enough to drive good selection (at least 40 characters).',
      given: '$.frontmatter.description',
      severity: 'warn',
      then: { function: length, functionOptions: { min: 40, max: 1024 } },
    },
    'skill-license': {
      description: 'A skill should declare a license so consumers know the terms of reuse.',
      given: '$.frontmatter',
      severity: 'warn',
      then: { field: 'license', function: truthy },
    },
    'skill-allowed-tools-array': {
      description: 'If a skill declares allowed-tools, it must be an array of tool names.',
      given: "$.frontmatter['allowed-tools']",
      severity: 'warn',
      then: { function: schema, functionOptions: { schema: { type: 'array', items: { type: 'string' } } } },
    },
    'skill-has-usage-section': {
      description: 'A skill body should document how to use it under a "Usage" section.',
      given: '$',
      severity: 'warn',
      then: { function: headingPresent, functionOptions: { name: 'Usage' } },
    },
    'skill-body-length': {
      description: 'Skill bodies should stay focused — very long instructions degrade agent performance (max ~5000 words).',
      given: '$.words',
      severity: 'info',
      then: { function: schema, functionOptions: { schema: { type: 'integer', maximum: 5000 } } },
    },
  },
};

export { ruleset as default };
