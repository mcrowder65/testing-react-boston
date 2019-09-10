import React from "react";
import { Text } from "./text";

export const Li = ({ children, fontSize = 50 }) => {
  return (
    <li>
      <Text fontSize={fontSize}>{children}</Text>
    </li>
  );
};
