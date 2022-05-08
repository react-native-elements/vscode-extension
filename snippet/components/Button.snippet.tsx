makeSnippet(
  ({ Tab, TabView }) => (
    <Tab __options={["value", "scrollable", "containerStyle"]} $>
      <Tab __options={["value", "scrollable", "containerStyle"]} $></Tab>
      <Tab.Item __options={["title"]}>#</Tab.Item>
      <TabView __options={[]}>
        <TabView.Item>$</TabView.Item>
      </TabView>
    </Tab>
  ),
  "rneTab",
  "RNE Tab"
);

makeSnippet(({ Button }) => <Button __options={["type"]}>$</Button>);

makeSnippet(({ LinearProgress }) => (
  <LinearProgress __options={["value", "variant"]} />
));
