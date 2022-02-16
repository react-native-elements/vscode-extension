import { transformSync, PluginItem, types as t } from "@babel/core";
import fs from "fs";
import glob from "glob";
import Props from "./prop-def.json";
import path from "path";

export function main(basePath: string) {
  const files = glob.sync(path.join(basePath, "*.tsx"));

  return files.map(parse);
}

function parse(filename: string) {
  const file = fs.readFileSync(filename, "utf8");
  const imports: string[] = [];
  let description = "",
    docKey = "";
  const compiled = transformSync(file, {
    filename,
    presets: ["@babel/preset-typescript"],
    plugins: [
      function myCustomPlugin(): PluginItem {
        return {
          visitor: {
            ImportDeclaration(path) {
              path.remove();
            },
            ExportNamedDeclaration(path) {
              if (
                t.isExportNamedDeclaration(path) &&
                t.isVariableDeclaration(path.node.declaration)
              ) {
                path.node.declaration.declarations.forEach((declaration) => {
                  const { id, init } = declaration;
                  if (t.isArrowFunctionExpression(init)) {
                    const { params } = init;
                    const param = params[0];
                    if (t.isObjectPattern(param)) {
                      param.properties.forEach((p) => {
                        if (t.isObjectProperty(p) && t.isIdentifier(p.key)) {
                          imports.push(p.key.name);
                        }
                      });
                    }
                    path.replaceWith(init.body);
                  } else if (t.isIdentifier(id)) {
                    if (t.isStringLiteral(init)) {
                      if (id.name === "description") {
                        description = init.value;
                      }
                      if (id.name === "docKey") {
                        docKey = init.value;
                      }
                      path.remove();
                    } else {
                      path.remove();
                    }
                  }
                });
              }
            },
            JSXOpeningElement(path) {
              let ComponentName: keyof typeof Props;
              if (t.isJSXIdentifier(path.node.name)) {
                ComponentName = path.node.name.name as keyof typeof Props;

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
          },
        };
      },
    ],
  });
  let counter = 0;
  return {
    prefix: filename.split("/").pop()?.replace(".tsx", ""),
    imports,
    body: compiled?.code
      ?.replace("export {};", "")
      .replace(/;$/, "")
      .replace(/\$(?!#|\{)/g, () => "$" + String(counter++))
      .replace(/#/g, () => String(counter++))
      .trim(),
    description,
    docKey,
  };
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
