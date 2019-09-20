import React from "react";
import { Container } from "../../reusable/container";
import { Text } from "../../reusable/text";
import { Ul } from "../../reusable/ul";
import { Li } from "../../reusable/li";

const Effective = () => {
  return (
    <Container>
      <Text align="center">Effectively testing a React component</Text>
      <Ul>
        <Li>Simulate events, test the output</Li>
        <Li>
          When using class components, consider render the only public function
        </Li>
      </Ul>
    </Container>
  );
};

export default Effective;
