import React from "react";
import MuiButton from "@material-ui/core/Button";
import { useMediaQuery, useTheme } from "@material-ui/core";

export const Button = ({
  variant = "contained",
  color = "primary",
  style = { marginTop: 10, width: 500, height: 75, fontSize: 35 },
  ...props
}) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(`(max-width: ${theme.maxWidth}px)`);
  return (
    <MuiButton
      style={isPhone ? { marginTop: 10 } : style}
      variant={variant}
      color={color}
      {...props}
    />
  );
};
