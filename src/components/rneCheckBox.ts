import snip from "../snip";
import { iconType } from "./rneIcon";

export const description = "CheckBox";

export const docKey = "checkbox";

export const body = snip`
<CheckBox
  title='$#'
  iconType="\${#${iconType}}"
  checkedIcon='$#'
  uncheckedIcon='$#'
  checkedColor='$#'
  checked={$#}
/>
`;
