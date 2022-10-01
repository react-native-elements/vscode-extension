import { withDefaultConfig } from "react-docgen-typescript";
import fs from "fs";
import path from "path";

const root = path.resolve(__dirname, "..", "..");

console.log(root);
const parser = withDefaultConfig({});

const declarations = parser.parse(
  path.join(root, "node_modules/@rneui/base/dist/index.d.ts")
);
console.log(declarations);
// const propDeclaration = declarations.reduce((acc, cur) => {
//   acc[cur.displayName] = cur.props;
//   return acc;
// }, {});

// fs.writeFileSync(
//   path.join(__dirname, "prop-def.json"),
//   JSON.stringify(propDeclaration, null, 2)
// );
