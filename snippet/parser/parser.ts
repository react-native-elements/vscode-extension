// import {} from "./declaration.parser";
import { parse } from "./component.parser";
import path from "path";

const snips = parse(path.join(__dirname, "../components.tsx"));

console.log(snips);
