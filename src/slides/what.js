import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";
import { Li } from "../reusable/li";
import { Ul } from "../reusable/ul";

const What = () => {
  return (
    <Container flexDirection="column">
      <Text>What is React Testing Library?</Text>
      <div>
        <Ul>
          <Li>Solution for testing React components</Li>
          <Li>
            Anywhere enzyme is used, React Testing Library can be used, and is
            probably a better fit
          </Li>
        </Ul>
      </div>
    </Container>
  );
};

export default What;
