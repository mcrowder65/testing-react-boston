import React from "react";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

const Best = () => {
  return (
    <Container>
      <Text align="center">What does it do best?</Text>
      <Text fontMultiplier={5} align="center">
        Testing React
      </Text>
    </Container>
  );
};

export default Best;
