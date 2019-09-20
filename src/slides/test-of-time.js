import React from "react";
import { Container } from "../reusable/container";
import { Li } from "../reusable/li";
import { Ul } from "../reusable/ul";
import { Text } from "../reusable/text";

const TestOfTime = () => {
  return (
    <Container flexDirection="column">
      <Text>Writing tests that will stand the test of time</Text>
      <Ul>
        <Li>
          The more your tests resemble the way your software is used, the more
          confidence they can give you.
        </Li>
      </Ul>
    </Container>
  );
};

export default TestOfTime;
