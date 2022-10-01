// import {} from "./declaration.parser";
import { parse } from "./parser/component.parser";
import path from "path";
import fs from "fs";

const snips = parse(path.join(__dirname, "components.tsx"));

fs.writeFileSync("out.js", "export default" + JSON.stringify(snips));
