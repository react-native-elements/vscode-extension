import snip from "../snip";

export const description = "Speed Dial Wrapper";

export const body = snip`
<SpeedDial
    isOpen={$#}
    onOpen={$#}
    onClose={$#}
    icon={{ name: '$#' }}
    openIcon={{ name: '$#' }}
>
  $0
</SpeedDial>
`;

export const docKey = "speeddial";
