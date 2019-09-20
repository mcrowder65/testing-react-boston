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

export default Effective;
