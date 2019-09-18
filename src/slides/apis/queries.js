import React from "react";
import { Container } from "../../reusable/container";
import { Text } from "../../reusable/text";
import { Ul } from "../../reusable/ul";
import { Li } from "../../reusable/li";

const SmallerLi = ({ fontMultiplier = 0.7, children }) => {
  return <Li fontMultiplier={fontMultiplier}>{children}</Li>;
};
const Queries = () => {
  return (
    <Container>
      <Text align="center">Queries</Text>
      <Text align="center" fontMultiplier={0.7}>
        get || getAll || query || queryAll || find || findAll{" "}
      </Text>
      <Ul>
        <SmallerLi>ByLabelText</SmallerLi>
        <SmallerLi>ByPlaceHolderText</SmallerLi>
        <SmallerLi>ByText</SmallerLi>
        <SmallerLi>ByAltText</SmallerLi>
        <SmallerLi>ByTitle</SmallerLi>
        <SmallerLi>ByDisplayValue</SmallerLi>
        <SmallerLi>ByRole</SmallerLi>
        <SmallerLi>ByTestId</SmallerLi>
      </Ul>
    </Container>
  );
};

export default Queries;
