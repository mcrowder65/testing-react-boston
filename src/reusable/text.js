import React from "react";
import { Typography } from "@material-ui/core";
import { theme } from "./theme";

export const Text = ({ children, fontSize = theme.textSize }) => {
  return <Typography style={{ fontSize }}>{children}</Typography>;
};
