import React from "react";
import { Text } from "./text";
import { theme } from "./theme";

export const Li = ({ children, fontSize = theme.textSize }) => {
  return (
    <li>
      <Text fontSize={fontSize}>{children}</Text>
    </li>
  );
};
