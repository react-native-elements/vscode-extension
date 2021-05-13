import snip from "../snip";
import { status } from "./rneBadge";
import { size } from "./rneAvatar";

export const description = "Avatar with Badge";

export const docKey = "badge";

export const body = snip`
<View>
  <Avatar
    source={{
      uri: '$#',
    }}
    size="\${#${size}}"
  />
  <Badge
    status="\${#${status}}"
    containerStyle={{ position: 'absolute', top: -4, right: -4 }}
  />
</View>
`;
