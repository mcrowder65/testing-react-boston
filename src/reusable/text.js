import React from "react";
import { theme } from "./theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
export const Text = ({ children, fontSize = theme.textSize }) => {
  const isPhone = useMediaQuery("(max-width: 500px)");
  return (
    <Typography style={{ fontSize: isPhone ? 20 : fontSize }}>
      {children}
    </Typography>
  );
};
