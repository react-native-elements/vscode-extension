import snip from "../snip";

export const color = ["primary", "secondary"];

export const docKey = "linearprogress";

export const description = "Linear Progress";

export const body = snip`
<LinearProgress color="\${#${color}}"  variant="determinate"  value={$#} $0/>
`;
