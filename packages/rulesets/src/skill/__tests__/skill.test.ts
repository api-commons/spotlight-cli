import { Spotlight, Document } from '@spotlight-rules/spotlight-core';
import { Markdown } from '@spotlight-rules/spotlight-parsers';
import { httpAndFileResolver } from '@spotlight-rules/spotlight-ref-resolver';
import skillRuleset from '../index';

// Mirrors the committed samples in ../__fixtures__ (the jest env mocks `fs`, so the
// content is inlined here to keep the test hermetic).
const GOOD = `---
name: pdf-extractor
description: Extract text, tables, and metadata from PDF files so they can be analyzed and summarized.
license: Apache-2.0
version: 1.0.0
metadata:
  category: documents
allowed-tools:
  - Read
  - Bash
---

# PDF Extractor

Extracts structured content from PDF documents.

## Usage
Ask Claude to extract content from a PDF file in the working directory.

## Examples
- "Pull the tables out of report.pdf"
- "Summarize invoice.pdf into bullet points"
`;

const BAD = `---
name: My_Bad Skill
description: Does stuff.
allowed-tools: Read
version: v2
---

# My Bad Skill

# Another Title

## Setup
Some text here.
`;

async function run(content: string) {
  const s = new Spotlight({ resolver: httpAndFileResolver });
  s.setRuleset(skillRuleset as never);
  return s.run(new Document(content, Markdown as never, 'SKILL.md'));
}

describe('spotlight:skill', () => {
  it('passes a well-formed SKILL.md with no findings', async () => {
    const results = await run(GOOD);
    expect(results).toEqual([]);
  });

  it('flags the issues in a poorly-formed SKILL.md', async () => {
    const results = await run(BAD);
    const codes = [...new Set(results.map((r) => r.code))].sort();
    expect(codes).toEqual(
      expect.arrayContaining([
        'skill-allowed-tools-array',
        'skill-description-length',
        'skill-has-usage-section',
        'skill-license',
        'skill-name-kebab-case',
        'skill-single-title',
        'skill-version-semver',
      ]),
    );
  });

  it('maps a frontmatter finding to the correct source line', async () => {
    const results = await run(BAD);
    const nameRule = results.find((r) => r.code === 'skill-name-kebab-case');
    // frontmatter "name:" is the 2nd line of the file → 0-based line 1
    expect(nameRule?.range.start.line).toBe(1);
  });
});
