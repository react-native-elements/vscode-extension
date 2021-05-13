import fs from "fs";

const dir = "./src/components/";

const files = fs
  .readdirSync(dir)
  .filter((file) => {
    return !file.includes("index");
  })
  .map((file) => {
    const filenameNoExt = file.replace(/\.[^.]+$/, "");
    return filenameNoExt;
  });
const imports = files.map((e) => `import * as ${e} from "./${e}";`).join("\n");

fs.writeFileSync(
  dir + "index.ts",
  `${imports}

export default {${files.join(",\n")}};`
);
