import { transformSync, PluginItem, types as t } from "@babel/core";
import fs from "fs";
import glob from "glob";
import Props from "./prop-def.json";
import path from "path";

const a = parse(path.join(__dirname, "../components/Button.snippet.tsx"));
console.log(a);

function parse(filename: string) {
  const file = fs.readFileSync(filename, "utf8");
  const d = [];
  const compiled = transformSync(file, {
    filename,
    presets: ["@babel/preset-typescript"],
    plugins: [
      function myCustomPlugin(): PluginItem {
        return {
          visitor: {
            JSXOpeningElement(path) {
              if (
                t.isJSXIdentifier(path.node.name) ||
                t.isJSXMemberExpression(path.node.name)
              ) {
                let ComponentName: string;
                if (t.isJSXIdentifier(path.node.name)) {
                  ComponentName = path.node.name.name as keyof typeof Props;
                } else {
                  if (t.isJSXIdentifier(path.node.name.object)) {
                    ComponentName = path.node.name.object
                      .name as keyof typeof Props;
                  }
                }

                const ComponentProps = Props[ComponentName];

                path.node.attributes.forEach((attr, index) => {
                  if (t.isJSXAttribute(attr)) {
                    if (attr.name.name === "__options") {
                      const { value } = attr;
                      if (t.isJSXExpressionContainer(value)) {
                        const { expression } = value;
                        if (t.isArrayExpression(expression)) {
                          const { elements } = expression;
                          const extendedProps: t.JSXAttribute[] = [];
                          elements.forEach((propName) => {
                            if (t.isStringLiteral(propName)) {
                              const { defaultValue, type } =
                                // @ts-ignore
                                ComponentProps?.[propName.value] || {};
                              const propType = type?.name?.replaceAll('"', "");
                              const propDefault = defaultValue?.value;
                              extendedProps.push(
                                filter(propName.value, propType, propDefault)
                              );
                            }
                          });
                          path.node.attributes.splice(
                            index,
                            1,
                            ...extendedProps
                          );
                        }
                      }
                    }
                  }
                });
              }
            },
            ExpressionStatement(path) {
              const { node } = path;
              if (node.expression.type === "CallExpression") {
                const imps = new Set();
                let desc = "";
                let key = "";
                const [m, n, o] = node.expression.arguments;
                if (t.isStringLiteral(n)) {
                  key = n.value;
                }
                if (t.isStringLiteral(o)) {
                  desc = o.value;
                }
                if (t.isArrowFunctionExpression(m)) {
                  const { params } = m;
                  if (params[0].type === "ObjectPattern") {
                    params[0].properties.forEach((prop) => {
                      if (prop.type === "ObjectProperty") {
                        const { key } = prop;
                        if (key.type === "Identifier") {
                          imps.add(key.name);
                        }
                      }
                    });
                  }
                  path.replaceWith(m.body);
                }
                d.push({ key, desc, imps: [...imps] });
                path.addComment("trailing", "");
              }
            },
          },
        };
      },
    ],
  });
  compiled?.code
    .trim()
    .split("/**/")
    .map((snippet, index) => {
      let counter = 0;
      const body = snippet
        .replace(/;$/, "")
        .replace(/\$(?!#|\{)/g, () => "$" + String(counter++))
        .replace(/#/g, () => String(counter++))
        .trim();

      d[index] && (d[index]["body"] = body);
    });

  return d;
}

function filter(propName = "", propType = "", propDefault = "") {
  if (propType === "boolean") {
    return t.jsxAttribute(t.jsxIdentifier(`\${#:${propName}}`));
  }
  let val = "$#";
  if (propType?.includes("|")) {
    val = `"\${#|${propType.replaceAll(" | ", ",")}|}"`;
  }
  return t.jsxAttribute(
    t.jsxIdentifier(propName),
    t.jsxExpressionContainer(t.identifier(val))
  );
}

export function main(basePath: string) {
  const files = glob.sync(path.join(basePath, "*.tsx"));

  return files.map(parse);
}
