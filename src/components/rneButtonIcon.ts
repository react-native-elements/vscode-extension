import snip from "../snip";

export const position = ["left", "right", "bottom", "top"];

export const description = `Button with Icon`;

export const docKey = "button";

export const body = snip`
<Button
    onPress={$#}\${#:
    iconPosition="\${#${position}}"}
    icon={{name:'$#',color:'$#'}}
    title={$#} 
 $0/>
`;
