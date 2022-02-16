import { main } from "./parser/parser";
import fs from "fs";
import path from "path";

const basePath = path.join(__dirname, "..", "components");

const snippet = main(basePath);

fs.writeFileSync(
  path.join(__dirname, "../src/components.ts"),
  "export default " + JSON.stringify(snippet)
);
