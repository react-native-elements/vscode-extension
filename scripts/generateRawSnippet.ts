import { main } from "./parser/parser";
import fs from "fs";
import path from "path";

const basePath = path.join(__dirname, "../src");

const snippet = main(basePath);

fs.writeFileSync(
  path.join(basePath, "components.ts"),
  "export default " + JSON.stringify(snippet)
);
