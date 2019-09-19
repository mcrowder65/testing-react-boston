import React from "react";
import MuiButton from "@material-ui/core/Button";

export const Button = ({
  variant = "contained",
  color = "primary",
  style = { marginTop: 10, width: 500, height: 100, fontSize: 35 },
  ...props
}) => {
  return <MuiButton style={style} variant={variant} color={color} {...props} />;
};
