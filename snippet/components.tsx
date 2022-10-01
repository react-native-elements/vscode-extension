makeSnippet(
  ({ Avatar }) => <Avatar title="$#" __options={["size", "rounded"]} $ />,
  "rneAvatar"
);

makeSnippet(
  ({ Avatar, Badge }) => (
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
  ),
  "rneBadgeAvatar"
);

makeSnippet(({ Badge }) => <Badge __options={["status"]} $ />, "rneBadge", "");

makeSnippet(
  ({ Badge }) => <Badge __options={["status"]} value="$#" $ />,
  "rneBadgeValue"
);

makeSnippet(
  ({ BottomSheet }) => (
    <BottomSheet
      __options={["isVisible", "onBackdropPress"]}
      containerStyle={{ backgroundColor: "$#" }}
      $
    >
      $#
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

makeSnippet(({ ButtonGroup }) => (
  <ButtonGroup __options={["onPress", "selectedIndex", "button"]} $ />
));

makeSnippet(({ Card }) => (
  <Card>
    <Card.Title>$#</Card.Title>
    {/* \${#:
<Card.Divider/>}
<Card.Image source={$#}>
 \${#:
  <Text style={{marginBottom: 10}}>
  $# 
  </Text>
  }
      $#
</Card.Image> */}
  </Card>
));

makeSnippet(({ CheckBox }) => (
  <CheckBox
    title="$#"
    iconType="\${#${iconType}}"
    checkedIcon="$#"
    uncheckedIcon="$#"
    checkedColor="$#"
    checked={$0}
  />
));


makeSnippet(({Chip})=><Chip

    __options={['type','title']}
/>)

makeSnippet(({Chip})=><Chip
__options={['type','title']}

    icon={{
        name: "$#",
        type: "$#",
        color: "$#",
    }}  
/>)

makeSnippet(({Divider})=><Divider  />)


makeSnippet(({FAB,})=><FAB 
    title="$#" 
    __options={['placement','size']}
    $/>
);
makeSnippet(({Icon})=>
    <Icon
  name="$#"
  type="\${#${iconType}}"
  size={$#}
  __op
  color="$#"
  $0
/>
)

makeSnippet(({Image})=><Image
  source={{ uri: '$#' }}
  style={{ width: $#, height: $# }}
  // \${#:PlaceholderContent={$#}}
/>)

makeSnippet(({LinearProgress})=><LinearProgress color="\${#${color}}"  variant="determinate"  value={$#} $0/>
)

makeSnippet(({LinearProgress})=><LinearProgress color="\${#${color}}" $0/>
)

makeSnippet(({CheckBox})=><CheckBox
  title='$#'
  iconType="material"
  checkedIcon='radio-button-checked'
  uncheckedIcon='radio-button-unchecked'
  checkedColor='$#'
  checked={$#}
/>)

makeSnippet(()=><SearchBar
    placeholder="$#"
    onChangeText={$#}
    value={$#}
    $0
/>
)makeSnippet(()=>
<Slider
    value={$#}
    onValueChange={$#}
    maximumValue={$#}
    minimumValue={$#}
    thumbProps={{$#}}
/>
)makeSnippet(()=>
<SpeedDial
    isOpen={$#}
    onOpen={$#}
    onClose={$#}
    icon={{ name: '$#' }}
    openIcon={{ name: '$#' }}
>
  $0
</SpeedDial>
)makeSnippet(()=>
<SpeedDial.Action
    icon={{ name: '$#' }}
    title="$#"
    onPress={$#}
  />
  )makeSnippet(()=>

  <Text \${#${size}} $1styles={{$#}}>
    $0
</Text>)