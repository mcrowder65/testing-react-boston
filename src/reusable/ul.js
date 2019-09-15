import React from "react";
import styled from "styled-components";
const H1 = styled.h1`
  font-weight: normal;
`;
export const Ul = props => {
  return (
    <ul>
      <H1>{props.children}</H1>
    </ul>
  );
};
