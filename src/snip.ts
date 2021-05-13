import { CompiledSnippet } from "./types";

export default function snip(
  strings: TemplateStringsArray,
  ...expressions: any[]
): CompiledSnippet {
  const parts = [];
  for (let i = 0; i < strings.length - 1; i++) {
    parts.push(strings[i]);
    parts.push(
      Array.isArray(expressions[i])
        ? `|${expressions[i].join(",")}|`
        : String(expressions[i])
    );
  }
  parts.push(...strings.slice(expressions.length));
  const body = parts.join("").replace(/\s+$/gm, "");

  const makeSnippet = (): string => {
    let lastIndex = 0;
    const parts = [];
    const ifRx = /^\s*\{\{\s*#if\s*(\S+)\s*(===\s*(\S+)\s*)\}\}([^\n]*\n)?/gm;
    const endifRx = /^\s*\{\{\s*\/if\s*\}\}([^\n]*\n)?/gm;
    let start, end;
    while ((start = ifRx.exec(body))) {
      endifRx.lastIndex = start.index + start[0].length;
      if ((end = endifRx.exec(body))) {
        let value;
        try {
          value = start[3] ? JSON.parse(start[3]) : true;
        } catch (error) {
          throw new Error(`value is not JSON: ${start[3]}`);
        }
        parts.push(body.substring(lastIndex, start.index));
        // if (options[parameter] === value) {
        //   parts.push(body.substring(start.index + start[0].length, end.index));
        // }
        lastIndex = end.index + end[0].length;
      }
    }
    parts.push(body.substring(lastIndex));

    let counter = 0;
    return parts
      .join("")
      .replace(/^\n|\n$/g, "")
      .replace(/#/g, () => String(++counter));
  };
  return makeSnippet;
}
