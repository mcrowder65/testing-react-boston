import React from "react";
import { Container } from "../reusable/container";
import { Ul } from "../reusable/ul";
import { Li } from "../reusable/li";
import { Text } from "../reusable/text";

const Encourage = () => {
  return (
    <Container>
      <Text align="center">What does React Testing Library encourage?</Text>
      <Ul>
        {/*<Li>Don't get caught up in the implementation</Li>*/}
        {/*<Li>Confidence</Li>*/}
        <Li>Testing on the output and simulating events through the DOM</Li>
        <Li>
          The more your tests resemble the way your software is used, the more
          confidence they can give you.
        </Li>
      </Ul>
    </Container>
  );
};

export default Encourage;
