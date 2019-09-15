import React from "react";
import { Container } from "../reusable/container";
import { Ul } from "../reusable/ul";
import { Li } from "../reusable/li";
import { Text } from "../reusable/text";

const Encourage = () => {
  return (
    <Container>
      <Text>What does React Testing Library encourage?</Text>
      <Ul>
        <Li>Don't get caught up in the implementation</Li>
        <Li>Confidence</Li>
        <Li>Less calls from Pager Duty</Li>
        <Li>Focus on the end result</Li>
      </Ul>
    </Container>
  );
};

export default Encourage;
