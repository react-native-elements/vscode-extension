import { withDefaultConfig } from "react-docgen-typescript";

function parseDeclarations() {
  const parser = withDefaultConfig({});

  const declarations = parser.parse(
    "./node_modules/@react-native-elements/base/src/index.ts"
  );

  const propDeclaration = declarations.reduce((acc, cur) => {
    acc[cur.displayName] = cur.props;
    return acc;
  }, {} as Record<string, any>);

  return propDeclaration;
}
