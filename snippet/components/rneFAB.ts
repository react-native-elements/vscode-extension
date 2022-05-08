import snip from "../snip";

export const size = ["small", "large"];

export const placement = ["left", "right"];

export const description = "Floating Action Button";

export const docKey = "fab";

export const body = snip`
<FAB 
    title="$#" 
    placement="\${#${placement}}" 
    size="\${#${size}}" 
    $0/>
`;
