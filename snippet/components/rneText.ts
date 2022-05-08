import snip from "../snip";

export const size = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const description = "Text";

export const body = snip`
<Text \${#${size}} $1styles={{$#}}>
    $0
</Text>
`;
