import snip from "../snip";

export const description = "Bottom Sheet";

export const docKey = "bottomsheet";

export const body = snip`
<BottomSheet
  isVisible={$#}
  containerStyle={{ backgroundColor: '$#' }}
>
    $0
</BottomSheet>
`;
