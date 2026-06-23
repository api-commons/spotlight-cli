import { ISpotlightDiagnostic, Ruleset } from '@spotlight-rules/spotlight-core';
import type { DiagnosticSeverity } from '@stoplight/types';

export type FormatterOptions = {
  failSeverity: DiagnosticSeverity;
};

export type FormatterContext = {
  ruleset: Ruleset;
  spotlightVersion: string;
};

export type Formatter = (results: ISpotlightDiagnostic[], options: FormatterOptions, ctx?: FormatterContext) => string;
