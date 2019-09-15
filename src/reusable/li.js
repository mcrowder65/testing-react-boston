import React from "react";
import { Text } from "./text";
import { theme } from "./theme";
import styled from "styled-components";
const H1 = styled.h1`
  font-weight: normal;
`;
export const Li = ({ children, fontSize = theme.textSize }) => {
  return (
    <li>
      <H1>
        <Text fontSize={fontSize}>{children}</Text>
      </H1>
    </li>
  );
};
