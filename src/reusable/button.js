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
  const styleToApply = isPhone ? { marginTop: 10 } : style;
  return (
    <MuiButton
      style={{
        ...styleToApply,
        // Edge case where in tests for some reason backgroundColor comes back as ButtonFace
        backgroundColor: color === "primary" && theme.palette.primary.main
      }}
      variant={variant}
      color={color}
      {...props}
    />
  );
};
