import React from "react";
import { Li } from "../reusable/li";
import { Container } from "../reusable/container";
import { Ul } from "../reusable/ul";

const Agenda = () => {
  return (
    <Container>
      <Ul>
        <Li>What is React Testing Library?</Li>
        <Li>What does React Testing Library encourage?</Li>
        <Li>What does React Testing Library do best?</Li>
        <Li>React Testing Library apis</Li>
        <Li>How to write tests wrong</Li>
        <Li>How do you effectively test a React component?</Li>
        <ul>
          <Li>Contrived, Smaller example</Li>
          <Li>Real world example</Li>
        </ul>
        <Li>Writing effective tests that will stand the test of time</Li>
      </Ul>
    </Container>
  );
};

export default Agenda;
