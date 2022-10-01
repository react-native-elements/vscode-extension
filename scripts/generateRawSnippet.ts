// import {} from "./declaration.parser";
import { parse } from "../snippet/parser/component.parser";
import path from "path";
import fs from "fs";

const snips = parse(path.join(__dirname, "../snippet/components.tsx"));

fs.writeFileSync(
  path.join("src", "components.ts"),
  "export default" + JSON.stringify(snips)
);
