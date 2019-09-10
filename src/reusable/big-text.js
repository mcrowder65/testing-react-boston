import React from "react";
import { Text } from "./text";
import { theme } from "./theme";

export const BigText = ({ children, fontSize = theme.bigTextSize }) => {
  return <Text fontSize={fontSize}>{children}</Text>;
};
