import React from "react";
import { Container } from "../../reusable/container";
import { Text } from "../../reusable/text";
import { Li } from "../../reusable/li";
import { Ul } from "../../reusable/ul";

const FiringEvents = () => {
  return (
    <Container>
      <Text align="center">Firing Events</Text>
      <Ul>
        <Li>fireEvent</Li>
        <Ul>
          <Li>asdf</Li>
        </Ul>
      </Ul>
    </Container>
  );
};

export default FiringEvents;
