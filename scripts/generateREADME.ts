import * as fs from "fs";
import * as path from "path";
import loadSnippets from "../src/snippets";

const commands: Array<Record<string, any>> = [];

const root = path.resolve(__dirname, "..");

const snippets = loadSnippets();
for (const snippet of Object.values(snippets)) {
  const { prefix } = snippet;

  commands.push({
    command: `extension.${prefix}`,
    title:
      "Insert " +
      snippet.description.replace(/^\s*React Native Elements\s*/i, "") +
      " Component",
    category: "React Native Elements Snippets",
  });
}

const packageJsonPath = path.join(root, "package.json");
const packageJson = require("./../package.json");

packageJson.contributes.commands = commands;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
