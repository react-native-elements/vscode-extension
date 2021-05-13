import * as fs from "fs";
import * as path from "path";
import loadSnippets from "../src/newSnip";

const table: Array<string> = [];
const markdown: Array<string> = [];
const commands: Array<Record<string, any>> = [];

const root = path.resolve(__dirname, "..");

const headingUrl = (heading: string): string =>
  "#" +
  heading
    .replace(/&[^;]+;/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^-a-z0-9]/gi, "")
    .trim()
    .toLowerCase();

(async () => {
  await loadSnippets().then(async (e) => {
    for (const snippet of Object.values(e)) {
      const { prefix } = snippet;

      commands.push({
        command: `extension.${prefix}`,
        title:
          "Insert " +
          snippet.description.replace(/^\s*React Native Elements\s*/i, "") +
          " Component",
        category: "React Native Elements Snippets",
      });

      const description = snippet.description.replace(
        /^\s*React Native Elements\s*/i,
        ""
      );
      const heading = `\`${prefix}\``;
      table.push(`- [${heading}](${headingUrl(heading)})`);
      markdown.push(`### ${heading}`);
      markdown.push(`#### ${description} Component`);
      markdown.push(
        "```javascript\n" + snippet.body().replace(/^\n|\n$/gm, "") + "\n```"
      );
    }

    const packageJsonPath = path.join(root, "package.json");
    const packageJson = require("./../package.json");

    packageJson.contributes.commands = commands;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    const readmePath = path.join(root, "README.md");

    const oldReadme = fs.readFileSync(readmePath, "utf8");
    const startComment = /<!--\s*snippets\s*-->/.exec(oldReadme);
    const endComment = /<!--\s*snippetsend\s*-->/.exec(oldReadme);
    if (startComment && endComment && endComment.index > startComment.index) {
      const newReadme = `${oldReadme.substring(
        0,
        startComment.index + startComment[0].length
      )}
${table.join("\n")}
${markdown.join("\n\n")}
${oldReadme.substring(endComment.index)}`;

      if (newReadme !== oldReadme) {
        fs.writeFileSync(readmePath, newReadme, "utf8");
      }
    }
  });
})();
