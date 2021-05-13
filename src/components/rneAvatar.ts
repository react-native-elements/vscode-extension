import snip from "../snip";

export const size = ["small", "medium", "large", "xlarge"];

export const rounded = [true, false];

export const description = `Avatar`;

export const docKey = "avatar";

export const body = snip`
<Avatar  title="$0" size="\${#${size}}" rounded={\${#${rounded}}}/>
`;
