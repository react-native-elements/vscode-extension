makeSnippet(({ Avatar }) => (
  <Avatar title="$#" __options={["size", "rounded"]} $ />
));

makeSnippet(({ Avatar, Badge }) => (
  <>
    <Avatar
      source={{
        uri: "$#",
      }}
      __options={["size"]}
      $
    />
    <Badge
      __options={["status"]}
      containerStyle={{ position: "absolute", top: -4, right: -4 }}
      $
    />
  </>
));
