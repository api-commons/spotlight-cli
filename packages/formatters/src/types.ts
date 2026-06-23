import { ISpectralDiagnostic, Ruleset } from '@spotlight-rules/spotlight-core';
import type { DiagnosticSeverity } from '@stoplight/types';

export type FormatterOptions = {
  failSeverity: DiagnosticSeverity;
};

export type FormatterContext = {
  ruleset: Ruleset;
  spectralVersion: string;
};

export type Formatter = (results: ISpectralDiagnostic[], options: FormatterOptions, ctx?: FormatterContext) => string;
