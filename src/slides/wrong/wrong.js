import React from "react";
import Switch from "./switch";
import { Container } from "../../reusable/container";
import { Text } from "../../reusable/text";

const Wrong = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Container>
      <Text>Controlled</Text>
      <Switch checked={checked} toggle={() => setChecked(!checked)} />
      <Switch checked={checked} toggle={() => setChecked(!checked)} />
      <Text>Uncontrolled</Text>
      <Switch />
    </Container>
  );
};

export default Wrong;
