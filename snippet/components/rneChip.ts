import snip from "../snip";
import { type } from "./rneChipIcon";

export const description = "Simple Chip";

export const docKey = "chip";

export const body = snip`
<Chip
    title="$#"
    type="\${#${type}}"
/>
`;
