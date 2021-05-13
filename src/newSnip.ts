import Components from "./components";
import { Snippet } from "./types";

export default async function loadSnippets(): Promise<Record<string, Snippet>> {
  const result = {};
  Object.entries(Components).map(([filename, file]: [string, Snippet]) => {
    const filenameNoExt = filename.replace(/\.[^.]+$/, "");
    const {
      prefix = filenameNoExt,
      description,
      body,
      docKey,
      previewURL,
    } = file;
    if (!prefix || typeof prefix !== "string") {
      throw new Error(
        `src/components/${filename}: prefix must be a string if exported`
      );
    }
    if (!description || typeof description !== "string") {
      throw new Error(
        `src/components/${filename}: must export a string description`
      );
    }
    if (!body || (typeof body !== "string" && typeof body !== "function")) {
      throw new Error(
        `src/components/${filename}: must export a function or string body`
      );
    }
    result[filenameNoExt] = {
      prefix,
      description,
      body,
      docKey,
      previewURL,
    };
  });
  return Promise.resolve(result);
}
