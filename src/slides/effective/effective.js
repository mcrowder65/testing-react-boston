import React from "react";
import { Container } from "../../reusable/container";
import { Text } from "../../reusable/text";
import { Ul } from "../../reusable/ul";
import { Li } from "../../reusable/li";

const Effective = () => {
  return (
    <Container flexDirection="column">
      <Text align="center">Effectively testing a React component</Text>
      <Ul>
        <Li>Simulate events, test the output, don't care about the input</Li>
        <Li>
          When testing with React.Context providers, utilize{" "}
          <a
            href="https://github.com/mcrowder65/testing-react-boston/blob/211e70bb9bad3a2adc964a29e969c82213e0fdab/test/utils.js#L6"
            target="_blank"
            rel="noopener noreferrer"
          >
            a wrapper around render
          </a>
        </Li>
        <Li>
          When using class components, consider render the only public function
        </Li>
      </Ul>
    </Container>
  );
};

export default Effective;
