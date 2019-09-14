import React from "react";
import { Li } from "../reusable/li";
import { Container } from "../reusable/container";

const Agenda = () => {
  return (
    <Container flexDirection="column">
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <Li>What is react-testing-library?</Li>
          <Li>What does react-testing-library encourage?</Li>
          <Li>What does react-testing-library do best?</Li>
          <Li>How to write tests wrong</Li>
          <Li>How do you effectively test a React component?</Li>
          <ul>
            <Li>Contrived, Smaller example</Li>
            <Li>Real world example</Li>
          </ul>
          <Li>react-testing-library apis</Li>
          <Li>Writing effective tests that will stand the test of time</Li>
        </ul>
      </h1>
    </Container>
  );
};

export default Agenda;
