/// <reference lib="dom" />

export type Fetch = Window['fetch'] | typeof import('@spotlight-rules/spotlight-runtime').fetch;

export type IO = {
  fs: {
    promises: {
      readFile: typeof import('fs').promises.readFile;
    };
  };
  fetch: Fetch;
};
