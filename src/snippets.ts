import Components from "./components";
import { Snippet } from "./types";

export default function loadSnippets(): Record<string, Snippet> {
  const result = {};
  Components.map((file) => {
    const { prefix, description, body, docKey, imports } = file;
    if (!prefix || typeof prefix !== "string") {
      throw new Error(
        `src/components/${prefix}: prefix must be a string if exported`
      );
    }
    if (!description || typeof description !== "string") {
      throw new Error(
        `src/components/${prefix}: must export a string description`
      );
    }
    if (!body || (typeof body !== "string" && typeof body !== "function")) {
      throw new Error(
        `src/components/${prefix}: must export a function or string body`
      );
    }
    result[prefix] = {
      prefix,
      description,
      body,
      docKey,
      previewURL: prefix,
      imports: imports,
    };
  });
  return result;
}
