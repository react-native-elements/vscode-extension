makeSnippet(
  ({ Tab }) => (
    <Tab __options={["value", "scrollable", "containerStyle"]} $>
      <Tab.Item __options={["title"]}>#</Tab.Item>
    </Tab>
  ),
  "rneTab",
  "RNE Tab"
);

makeSnippet(({ Button }) => <Button __options={["type"]}>$</Button>);

makeSnippet(({ LinearProgress }) => (
  <LinearProgress __options={["value", "variant"]} />
));
