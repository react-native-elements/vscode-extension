import * as vscode from "vscode";
import loadSnippets from "./snippets";
import getExistingImports from "./getExistingImports";
class RNECompletionItem extends vscode.CompletionItem {
  imports: string[] | undefined;
}

export async function activate(
  context: vscode.ExtensionContext
): Promise<void> {
  const config = vscode.workspace.getConfiguration("rne.snippets");
  if (config.get("showNotesOnStartup")) {
    const message =
      "RNE Snippets: automatic imports for snippets have been re-enabled now that the VSCode completions API has been improved.";
    vscode.window.showInformationMessage(message);
    config.update(
      "showNotesOnStartup",
      false,
      vscode.ConfigurationTarget.Global
    );
  }

  const snippets = loadSnippets();

  function getAdditionalTextEdits({
    imports,
  }: {
    imports: string[] | undefined;
  }): vscode.TextEdit[] {
    const document = vscode.window.activeTextEditor?.document;
    if (!document || !imports) return [];

    let existingImports: Set<string> | null;
    let insertPosition: vscode.Position = new vscode.Position(0, 0);
    let coreInsertPosition: vscode.Position | null = null;
    try {
      ({
        existingImports,
        insertPosition,
        coreInsertPosition,
        // universeInsertPosition,
      } = getExistingImports(document));
    } catch (error) {
      existingImports = null;
    }

    const additionalTextEdits: vscode.TextEdit[] = [];
    const finalExistingImports = existingImports;
    if (finalExistingImports) {
      const coreImports = imports.filter(
        (comp: string) => !finalExistingImports.has(comp)
      );
      if (coreImports.length) {
        if (coreInsertPosition) {
          additionalTextEdits.push(
            vscode.TextEdit.insert(
              coreInsertPosition,
              ", " + coreImports.join(", ")
            )
          );
        } else {
          additionalTextEdits.push(
            vscode.TextEdit.insert(
              insertPosition,
              `import { ${coreImports.join(", ")} } from '@rneui/themed'\n`
            )
          );
        }
      }
    }
    return additionalTextEdits;
  }

  for (const snippet of Object.values(snippets)) {
    const { prefix, description, imports } = snippet;
    context.subscriptions.push(
      vscode.commands.registerCommand(`extension.${prefix}`, async () =>
        vscode.window.withProgress(
          {
            cancellable: true,
            location: vscode.ProgressLocation.Notification,
            title: `Inserting RNE ${description}...`,
          },
          async (
            progress: vscode.Progress<{
              message?: string | undefined;
              increment?: number | undefined;
            }>,
            token: vscode.CancellationToken
          ) => {
            const body = (
              typeof snippet.body === "function" ? snippet.body() : snippet.body
            ).replace(/^\n|\n$/gm, "");

            if (token.isCancellationRequested) return;

            const additionalTextEdits = getAdditionalTextEdits({
              imports: imports,
            });

            if (token.isCancellationRequested) return;

            const editor = vscode.window.activeTextEditor;
            if (!editor) return;
            await editor.insertSnippet(
              new vscode.SnippetString(body),
              editor.selection
            );
            editor.edit((edit: vscode.TextEditorEdit) => {
              for (const additionalEdit of additionalTextEdits) {
                edit.insert(additionalEdit.range.start, additionalEdit.newText);
              }
            });
          }
        )
      )
    );
  }

  const getCompletionItems = ((): RNECompletionItem[] => {
    const result = [];
    for (const snippet of Object.values(snippets)) {
      const { prefix, description, docKey, previewURL, imports } = snippet;

      const body = (
        typeof snippet.body === "function" ? snippet.body?.() : snippet.body
      ).replace(/^\n|\n$/gm, "");

      let extendedDoc = `**${description.trim()}**`;

      extendedDoc += docKey
        ? `\n\n **Documentation:** [Click here](https://reactnativeelements.com/docs/${docKey})`
        : "";
      extendedDoc += `\n\n **Preview:** \n\n ![${prefix}](${
        previewURL ||
        `https://cdn.jsdelivr.net/gh/react-native-elements/vscode-extension/img/${prefix}.png`
      }) `;

      const completion = new RNECompletionItem(prefix);
      completion.insertText = new vscode.SnippetString(body);
      completion.documentation = new vscode.MarkdownString(extendedDoc);
      completion.imports = imports;
      result.push(completion);
    }
    return result;
  })();

  for (const language of ["javascript", "javascriptreact", "typescriptreact"]) {
    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(language, {
        provideCompletionItems(
          /* eslint-disable @typescript-eslint/no-unused-vars */
          document: vscode.TextDocument,
          position: vscode.Position,
          token: vscode.CancellationToken,
          context: vscode.CompletionContext
          /* eslint-enable @typescript-eslint/no-unused-vars */
        ): vscode.ProviderResult<RNECompletionItem[]> {
          return getCompletionItems;
        },
        async resolveCompletionItem(
          item: RNECompletionItem,
          /* eslint-disable @typescript-eslint/no-unused-vars */
          token: vscode.CancellationToken
          /* eslint-enable @typescript-eslint/no-unused-vars */
        ): Promise<RNECompletionItem> {
          item.additionalTextEdits = getAdditionalTextEdits(item);
          return item;
        },
      })
    );
  }
}
