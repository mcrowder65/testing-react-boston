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
      <Switch />
      <a
        href="https://github.com/mcrowder65/testing-react-boston/blob/master/src/slides/wrong/switch.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
      <a
        href="https://github.com/mcrowder65/testing-react-boston/blob/master/src/slides/wrong/__tests__/switch.test.js"
        target="_blank"
        rel="noopener noreferrer"
      >
        Test
      </a>
    </Container>
  );
};

export default Wrong;
