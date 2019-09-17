import React from "react";
import Switch from "./switch";
import { Container } from "../../reusable/container";

const Wrong = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Container>
      <Switch checked={checked} toggle={() => setChecked(!checked)} />
      <Switch checked={checked} toggle={() => setChecked(!checked)} />
      <Switch />
    </Container>
  );
};

export default Wrong;
