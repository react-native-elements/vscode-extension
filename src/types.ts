export type SnippetOptions = {
  language: "javascriptreact" | "typescriptreact";
  formControlMode: "controlled" | "uncontrolled";
};

export interface CompiledSnippet {
  (): string;
}

export type SnippetBody = CompiledSnippet;

export type Snippet = {
  prefix?: string;
  description: string;
  body: SnippetBody;
  docKey?: string;
  previewURL?: string;
};
