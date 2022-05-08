import snip from "../snip";

export const description = "Image";

export const docKey = "image";

export const body = snip`
<Image
  source={{ uri: '$#' }}
  style={{ width: $#, height: $# }}
  \${#:PlaceholderContent={$#}}
/>
`;
