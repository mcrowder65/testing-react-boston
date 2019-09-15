import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { GitHub, Twitter } from "../social";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router";
import { useTheme } from "@material-ui/core";

function TitleAndLinks(props) {
  const theme = useTheme();
  const isPhone = useMediaQuery(`(min-width: ${theme.maxWidth}px)`);
  const headerTitle = props.routes.find(route =>
    props.location.pathname.includes(route.path)
  );
  return (
    <Grid container justify="space-between" alignItems="center" direction="row">
      <Grid item>
        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h6" noWrap>
              {isPhone ? headerTitle && `${headerTitle.name} | ` : ""}
              @mcrowder65
            </Typography>
          </Grid>
          <Grid item>
            <Twitter />
          </Grid>
          <Grid item>
            <GitHub />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="end"
          onClick={() => props.setDrawerOpen(state => !state)}
        >
          <Menu />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default withRouter(TitleAndLinks);
