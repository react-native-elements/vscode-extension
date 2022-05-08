import snip from "../snip";

export const description = "Basic Card";

export const docKey = "card";

export const body = snip`
<Card>
  <Card.Title>$#</Card.Title>
  \${#:
  <Card.Divider/>}
  <Card.Image source={$#}>
   \${#:
    <Text style={{marginBottom: 10}}>
    $# 
    </Text>
    }
        $#
  </Card.Image>
</Card>
`;
