import snip from "../snip";

export const type = ["solid", "clear", "outline"];

export const description = `Button with types`;

export const docKey = "button#type";

export const body = snip`
<Button onPress={$#} type="\${#${type}}" title={$#} $0 />
`;
