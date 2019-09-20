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
          <a
            href="https://github.com/mcrowder65/testing-react-boston/blob/master/test/utils.js#L6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Utilize a wrapper around render
          </a>
        </Li>
      </Ul>
    </Container>
  );
};

export default TestOfTime;
