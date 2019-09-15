import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  text: props => {
    let size = props.isPhone ? theme.phoneFontSize : props.fontSize;
    if (size === undefined) size = theme.textSize;

    return {
      fontSize: size
    };
  }
}));
export const Text = ({ children, fontSize }) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(`(max-width: ${theme.maxWidth}px)`);
  const classes = useStyles({ fontSize, isPhone });
  return <Typography className={classes.text}>{children}</Typography>;
};
