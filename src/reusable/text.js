import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  text: props => {
    let fontSize = props.isPhone ? theme.phoneFontSize : props.fontSize;
    if (fontSize === undefined) fontSize = theme.textSize;
    return {
      fontSize: fontSize * props.fontMultiplier
    };
  }
}));
export const Text = ({ children, fontSize, fontMultiplier }) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(`(max-width: ${theme.maxWidth}px)`);
  const classes = useStyles({ fontSize, isPhone, fontMultiplier });
  return <Typography className={classes.text}>{children}</Typography>;
};
Text.defaultProps = {
  fontMultiplier: 1
};
