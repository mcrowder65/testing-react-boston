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
      <Ul>
        <SmallerLi>getByLabelText</SmallerLi>
        <SmallerLi>getByPlaceHolderText</SmallerLi>
        <SmallerLi>getByText</SmallerLi>
        <SmallerLi>getByAltText</SmallerLi>
        <SmallerLi>getByTitle</SmallerLi>
        <SmallerLi>getByDisplayValue</SmallerLi>
        <SmallerLi>getByRole</SmallerLi>
        <SmallerLi>getByTestId</SmallerLi>
      </Ul>
    </Container>
  );
};

export default Queries;
