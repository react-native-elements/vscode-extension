import snip from "../snip";
import { status } from "./rneBadge";

export const description = "Mini Badge";

export const docKey = "badge";

export const body = snip`
<Badge status="\${#${status}}"  />
`;
