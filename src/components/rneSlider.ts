import snip from "../snip";

export const description = "Slider";

export const body = snip`
<Slider
    value={$#}
    onValueChange={$#}
    maximumValue={$#}
    minimumValue={$#}
    thumbProps={{$#}}
/>
`;

export const docKey = "slider";
