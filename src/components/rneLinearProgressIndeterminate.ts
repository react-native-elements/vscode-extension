import snip from "../snip";

export const color = ["primary", "secondary"];

export const docKey = "linearprogress";

export const description = "Linear Progress indeterminate variant";

export const body = snip`
<LinearProgress color="\${#${color}}" $0/>
`;
