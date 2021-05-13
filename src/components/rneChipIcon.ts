import snip from "../snip";

export const type = ["solid", "outline"];

export const description = "Chip with Icon";

export const docKey = "chip";

export const body = snip`
<Chip
    title="$#"
    type="\${#${type}}"
    icon={{
        name: "$#",
        type: "$#",
        color: "$#",
    }}  
/>
`;
