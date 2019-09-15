import React from "react";
import { Li } from "../reusable/li";
import { Container } from "../reusable/container";
import { Text } from "../reusable/text";

const AboutMe = () => {
  const code = "https://testingreactboston.netlify.com";
  return (
    <Container flexDirection="column">
      <Text>
        <a href={code} target="_blank" rel="noopener noreferrer">
          {code.replace("https://", "")}
        </a>
      </Text>
      <h1 style={{ fontWeight: "normal" }}>
        <ul>
          <Li>I am Matt Crowder</Li>
          <Li>@mcrowder65 </Li>
          <Li>Wife and dog</Li>
          <Li>NoVaJS co organizer</Li>
          <Li>Aspiring public speaker</Li>
          <div>
            <Li>Things I enjoy:</Li>
            <ul>
              <Li>lifting</Li>
              <Li>running</Li>
              <Li>programming</Li>
            </ul>
          </div>
        </ul>
      </h1>
    </Container>
  );
};

export default AboutMe;
