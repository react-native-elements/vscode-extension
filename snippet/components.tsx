import React from "react";
import { makeSnippet, $0 } from "./config";

makeSnippet(
  ({ Avatar }) => <Avatar title="$0" __options={["size", "rounded"]} $ />,
  "rneAvatar"
);

makeSnippet(
  ({ Avatar, Badge }) => (
    <>
      <Avatar
        source={{
          uri: "$0",
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
  ),
  "rneBadgeAvatar"
);

makeSnippet(
  ({ Badge, Text }) => <Badge __options={["status"]} $ />,
  "rneBadge"
);

makeSnippet(
  ({ Badge }) => <Badge __options={["status"]} value="$0" $ />,
  "rneBadgeValue"
);

makeSnippet(
  ({ BottomSheet }) => (
    <BottomSheet
      __options={["isVisible", "onBackdropPress"]}
      containerStyle={{ backgroundColor: "$0" }}
      $
    >
      $0
    </BottomSheet>
  ),
  "rneBottomSheet"
);

makeSnippet(
  ({ Button }) => <Button __options={["onPress", "title"]} $ />,
  "rneButton"
);

makeSnippet(
  ({ Button }) => <Button __options={["icon", "iconPosition", "onPress"]} $ />,
  "rneButtonIcon"
);

makeSnippet(
  ({ Button }) => <Button __options={["type", "title", "onPress"]} $ />,
  "rneButtonType"
);

makeSnippet(
  ({ ButtonGroup }) => (
    <ButtonGroup __options={["onPress", "selectedIndex", "button"]} $ />
  ),
  "rneButtonGroup"
);

makeSnippet(
  ({ Card }) => (
    <Card>
      <Card.Title>$0</Card.Title>
      {/* \${#:
<Card.Divider/>}
<Card.Image source={$0}>
 \${#:
  <Text style={{marginBottom: 10}}>
  $0 
  </Text>
  }
      $0
</Card.Image> */}
    </Card>
  ),
  "rneCard"
);

makeSnippet(
  ({ CheckBox }) => (
    <CheckBox
      title="$0"
      iconType="\${#${iconType}}"
      checkedIcon="$0"
      uncheckedIcon="$0"
      checkedColor="$0"
      checked={$0}
    />
  ),
  "rneCheckbox"
);

makeSnippet(
  ({ Chip }) => <Chip __options={["type", "title"]} />,
  "rneChip",
  "Chip component"
);

makeSnippet(
  ({ Chip }) => (
    <Chip
      __options={["type", "title"]}
      icon={{
        name: "$0",
        type: "$0",
        color: "$0",
      }}
    />
  ),
  "rneChipIcon"
);

makeSnippet(({ Divider }) => <Divider />, "rneDivider");

makeSnippet(
  ({ FAB }) => <FAB __options={["placement", "size", "title"]} $ />,
  "rneFab"
);

makeSnippet(
  ({ Icon }) => <Icon name="$0" __options={["size", "type", "color"]} $ />,
  "rneIcon"
);

makeSnippet(
  ({ Image }) => (
    <Image
      source={{ uri: "$0" }}
      style={{ width: $0, height: $0 }}
      // \${#:PlaceholderContent={$0}}
    />
  ),
  "rneImage"
);

makeSnippet(({ LinearProgress }) => (
  <LinearProgress __options={["color"]} variant="determinate" value={$0} $ />
));

makeSnippet(
  ({ LinearProgress }) => <LinearProgress color="\${#${color}}" $ />,
  "rneLinearProgress"
);

makeSnippet(
  ({ CheckBox }) => (
    <CheckBox
      title="$0"
      iconType="material"
      checkedIcon="radio-button-checked"
      uncheckedIcon="radio-button-unchecked"
      checkedColor="$0"
      checked={$0}
    />
  ),
  "rneCheckBox"
);

makeSnippet(({ SearchBar }) => (
  <SearchBar placeholder="$0" onChangeText={$0} value={$0} />
));
makeSnippet(
  ({ Slider }) => (
    <Slider
      value={$0}
      onValueChange={$0}
      maximumValue={$0}
      minimumValue={$0}
      thumbProps={{ $0 }}
    />
  ),
  "rneSlider"
);

makeSnippet(
  ({ SpeedDial }) => (
    <SpeedDial
      isOpen={$0}
      onOpen={$0}
      onClose={$0}
      icon={{ name: "$0" }}
      openIcon={{ name: "$0" }}
    >
      $0
    </SpeedDial>
  ),
  "rneSpeedDial"
);

makeSnippet(
  ({ SpeedDial }) => (
    <SpeedDial.Action icon={{ name: "$0" }} title="$0" onPress={$0} />
  ),
  "rneSpeedDialAction"
);

makeSnippet(
  ({ Text }) => (
    <Text __options={["h1", "h2", "h3"]} $1styles={{ $0 }}>
      $0
    </Text>
  ),
  "rneText"
);
