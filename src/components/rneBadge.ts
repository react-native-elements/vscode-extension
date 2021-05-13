import snip from "../snip";

export const description = "Badge";

export const docKey = "badge";

export const status = ["success", "error", "primary", "warning"];

export const body = snip`
<Badge value="$#" status="\${#${status}}" $0/>
`;
