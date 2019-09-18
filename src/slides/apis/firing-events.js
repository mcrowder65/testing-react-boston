import React from "react";
import { Container } from "../../reusable/container";
import { Text } from "../../reusable/text";

const FireEmoji = () => (
  <span role="img" aria-label="fire-emoji">
    🔥
  </span>
);
const FiringEvents = () => {
  return (
    <Container>
      <Text align="center">Firing Events</Text>
      <Text align="center">
        <FireEmoji />
        Any browser event can be simulated with fireEvent <FireEmoji />
      </Text>
    </Container>
  );
};

export default FiringEvents;
