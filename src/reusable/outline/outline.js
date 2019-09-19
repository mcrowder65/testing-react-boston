import React from "react";
import { useLocalStorageSetState } from "mooks";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Route, withRouter } from "react-router";
import Drawer from "./drawer";
import TitleAndLinks from "./title-and-links";
import useWindowSize from "@rehooks/window-size";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  main: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  content: props => {
    const isDesktop = !props.isPhone;
    let width =
      isDesktop && props.isDrawerOpen
        ? props.windowWidth - theme.drawerWidth
        : props.windowWidth;
    if (props.isPhone) width = props.windowWidth;
    return {
      marginTop: 50,
      width: width - 50
    };
  },
  toolbar: theme.mixins.toolbar
}));

function Outline({ routes, ...props }) {
  const [isDrawerOpen, setDrawerOpen] = useLocalStorageSetState(
    true,
    "drawer-status"
  );
  React.useEffect(
    () => {
      if (props.location.pathname === "/") {
        props.history.push("/about-me");
      }
    },
    [props.location.pathname, props.history]
  );
  const theme = useTheme();
  const isPhone = useMediaQuery(`(max-width: ${theme.maxWidth}px)`);

  const windowSize = useWindowSize();
  const classes = useStyles({
    windowWidth: windowSize.innerWidth,
    isDrawerOpen,
    isPhone
  });
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <TitleAndLinks setDrawerOpen={setDrawerOpen} routes={routes} />
        </Toolbar>
      </AppBar>
      <Drawer routes={routes} isDrawerOpen={isDrawerOpen} />
      <main className={classes.main}>
        <div className={classes.content}>
          {routes.map((route, index) => {
            return (
              <React.Fragment key={`${route.path}-${index}`}>
                <Route exact path={route.path} component={route.component} />
                {(route.subcomponents || []).map((subroute, i) => {
                  return (
                    <Route
                      exact
                      path={`${route.path}${subroute.path}`}
                      component={subroute.component}
                      key={`${route.path}-${subroute.path}-${i}`}
                    />
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </main>
      <div />
    </div>
  );
}
Outline.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      component: PropTypes.any,
      subcomponents: PropTypes.arrayOf(
        PropTypes.shape({
          path: PropTypes.string,
          component: PropTypes.any
        })
      )
    })
  ).isRequired
};
Outline.defaultProps = {
  routes: []
};
export default withRouter(Outline);
