import { withDefaultConfig } from "react-docgen-typescript";
import fs from "fs";
import path from "path";

const root = path.resolve(
  // __dirname,
  // "..",
  // "..",
  "node_modules/@rneui/base-old"
);

console.log(root);
const parser = withDefaultConfig({});

const declarations = parser.parse(path.join(".", "a.tsx"));
const propDeclaration =
  [] ||
  declarations.reduce((acc, cur) => {
    acc[cur.displayName] = cur.props;
    return acc;
  }, {});

console.log(declarations, propDeclaration);
// fs.writeFileSync(
//   path.join(__dirname, "prop-def.json"),
//   JSON.stringify(propDeclaration, null, 2)
// );
