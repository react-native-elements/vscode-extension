import snip from "../snip";

export const description = "CheckBox";

export const docKey = "checkbox";

export const previewURL = "";

export const body = snip`
<CheckBox
  title='$#'
  iconType="material"
  checkedIcon='radio-button-checked'
  uncheckedIcon='radio-button-unchecked'
  checkedColor='$#'
  checked={$#}
/>
`;
