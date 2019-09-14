import React from "react";
import MuiButton from "@material-ui/core/Button";
import { theme } from "./theme";

export const Button = ({
  variant = "contained",
  color = "primary",
  style = theme.buttonSize,
  ...props
}) => {
  return <MuiButton style={style} variant={variant} color={color} {...props} />;
};
