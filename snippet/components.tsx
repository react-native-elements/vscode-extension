import React from "react";
import { makeSnippet, $ } from "./config";

makeSnippet(
  ({ Avatar }) => <Avatar title="$" __options={["size", "rounded"]} $ />,
  "rneAvatar"
);

makeSnippet(
  ({ Badge }) => <Badge __options={["status"]} $ />,
  "rneBadge",
  "Badge Component"
);

makeSnippet(
  ({ Badge }) => <Badge __options={["status"]} value="$" $ />,
  "rneBadgeValue"
);

makeSnippet(
  ({ Avatar, Badge }) => (
    <>
      <Avatar
        source={{
          uri: "$",
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
  ({ BottomSheet }) => (
    <BottomSheet
      __options={["isVisible", "onBackdropPress"]}
      containerStyle={{ backgroundColor: "$" }}
      $
    >
      $
    </BottomSheet>
  ),
  "rneBottomSheet"
);

makeSnippet(
  ({ Button }) => <Button title={$} __options={["onPress"]} $ />,
  "rneButton"
);

makeSnippet(
  ({ Button }) => <Button icon={$} __options={["iconPosition", "onPress"]} $ />,
  "rneButtonIcon"
);

makeSnippet(
  ({ Button }) => <Button title={$} __options={["type", "onPress"]} $ />,
  "rneButtonType"
);

makeSnippet(
  ({ Button }) => <Button title={$} __options={["onPress", "color"]} $ />,
  "rneButtonColor"
);

makeSnippet(
  ({ ButtonGroup }) => (
    <ButtonGroup __options={["onPress", "selectedIndex"]} button={$} $ />
  ),
  "rneButtonGroup"
);

makeSnippet(
  ({ Card, Text }) => (
    <Card>
      <Card.Title>$</Card.Title>
      <Card.Image source={$}></Card.Image>
      <Text style={{ marginBottom: 10 }}>$</Text>
    </Card>
  ),
  "rneCard"
);

makeSnippet(
  ({ CheckBox }) => (
    <CheckBox
      title={$}
      __options={["iconType", "checked"]}
      checkedIcon={$}
      uncheckedIcon={$}
      checkedColor={$}
    />
  ),
  "rneCheckbox"
);

makeSnippet(
  ({ Chip }) => <Chip __options={["type"]} title={$} />,
  "rneChip",
  "Chip component"
);

makeSnippet(
  ({ Chip }) => (
    <Chip
      __options={["type"]}
      title={$}
      icon={{
        name: $,
        type: $,
        color: $,
      }}
    />
  ),
  "rneChipIcon"
);

makeSnippet(({ Divider }) => <Divider $ />, "rneDivider");

makeSnippet(
  ({ FAB }) => <FAB __options={["placement", "size"]} title={$} $ />,
  "rneFab"
);

makeSnippet(
  ({ Icon }) => <Icon name="$" __options={["size", "type"]} color={$} $ />,
  "rneIcon"
);

makeSnippet(
  ({ Image }) => (
    <Image source={{ uri: "$" }} style={{ width: $, height: $ }} />
  ),
  "rneImage"
);

makeSnippet(
  ({ LinearProgress }) => (
    <LinearProgress __options={["color"]} variant="determinate" value={$} $ />
  ),
  "rneLinearProgressDeterminate"
);

makeSnippet(
  ({ LinearProgress }) => <LinearProgress color="\${#${color}}" $ />,
  "rneLinearProgress"
);

makeSnippet(
  ({ CheckBox }) => (
    <CheckBox
      title="$"
      iconType="material"
      checkedIcon="radio-button-checked"
      uncheckedIcon="radio-button-unchecked"
      checkedColor="$"
      checked={$}
    />
  ),
  "rneRadio"
);

makeSnippet(({ SearchBar }) => (
  <SearchBar placeholder="$" onChangeText={$} value={$} />
));

makeSnippet(
  ({ Slider }) => (
    <Slider
      value={$}
      onValueChange={$}
      maximumValue={$}
      minimumValue={$}
      thumbProps={{ $ }}
    />
  ),
  "rneSlider"
);

makeSnippet(
  ({ SpeedDial }) => (
    <SpeedDial
      isOpen={$}
      onOpen={$}
      onClose={$}
      icon={{ name: "$" }}
      openIcon={{ name: "$" }}
    >
      $
    </SpeedDial>
  ),
  "rneSpeedDial"
);

makeSnippet(
  ({ SpeedDial }) => (
    <SpeedDial.Action icon={{ name: "$" }} title="$" onPress={$} />
  ),
  "rneSpeedDialAction"
);

makeSnippet(
  ({ Text }) => (
    <Text __options={["h1", "h2", "h3"]} style={{ $ }}>
      $
    </Text>
  ),
  "rneText"
);
