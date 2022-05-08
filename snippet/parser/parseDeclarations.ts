import { withDefaultConfig } from "react-docgen-typescript";
import fs from "fs";
import path from "path";

const root = path.resolve(__filename, "../../..");

console.log(root);
const parser = withDefaultConfig({});

const declarations = parser.parse(
  path.join(root, "node_modules/@rneui/base/dist/Button/Button.d.ts")
);
console.log(declarations);
const propDeclaration = declarations.reduce((acc, cur) => {
  acc[cur.displayName] = cur.props;
  return acc;
}, {} as Record<string, any>);

fs.writeFileSync(
  path.join(__dirname, "prop-def.json"),
  JSON.stringify(propDeclaration, null, 2)
);
