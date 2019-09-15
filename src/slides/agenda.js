import React from "react";
import { Li } from "../reusable/li";
import { Container } from "../reusable/container";

const Agenda = () => {
  return (
    <Container flexDirection="column">
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
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
        </ul>
      </h1>
    </Container>
  );
};

export default Agenda;
