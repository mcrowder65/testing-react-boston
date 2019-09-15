import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";
import { Li } from "../reusable/li";
import { Ul } from "../reusable/ul";

const What = () => {
  return (
    <Container>
      <Text>What is React Testing Library?</Text>
      <div>
        <Ul>
          <Li>Solution for testing React components</Li>
          <Li>Can and should be used anywhere Enzyme is</Li>
          <Li>
            The more your tests resemble the way your software is used, the more
            confidence they can give you.
          </Li>
        </Ul>
      </div>
    </Container>
  );
};

export default What;
