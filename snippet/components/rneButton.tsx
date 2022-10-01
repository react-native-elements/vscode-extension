makeSnippet(
  ({ Button }) => <Button __options={["onPress", "title"]} $ />,
  "Button"
);

makeSnippet(
  ({ Button }) => (
    <Button __options={["iconPosition", "onPress", "icon", "title"]} $ />
  ),
  "ButtonIcon"
);
