import snip from "../snip";

export const iconType = [
  "material",
  "material-community",
  "simple-line-icon",
  "zocial",
  "font-awesome",
  "octicon",
  "ionicon",
  "foundation",
  "evilicon",
  "entypo",
  "antdesign",
  "font-awesome-5",
];

export const docKey = "icon";

export const description = "Icon ";

export const body = snip`
<Icon
  name="$#"
  type="\${#${iconType}}"
  size={$#}
  color="$#"
  $0
/>
`;
