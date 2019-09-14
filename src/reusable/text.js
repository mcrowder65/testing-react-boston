import React from "react";
import Typography from "@material-ui/core/Typography";
import { theme } from "./theme";

export const Text = ({ children, fontSize = theme.textSize }) => {
  return <Typography style={{ fontSize }}>{children}</Typography>;
};
