import React from "react";
import { useLocalStorageSetState } from "mooks";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Route, withRouter } from "react-router";
import Drawer from "./drawer";
import TitleAndLinks from "./title-and-links";

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
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

  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <TitleAndLinks setDrawerOpen={setDrawerOpen} routes={routes} />
        </Toolbar>
      </AppBar>
      <Drawer routes={routes} isDrawerOpen={isDrawerOpen} />
      <main className={classes.content}>
        <div style={{ marginTop: 100 }}>
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
      component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
        PropTypes.node
      ]).isRequired,
      subcomponents: PropTypes.arrayOf(
        PropTypes.shape({
          path: PropTypes.string,
          component: PropTypes.oneOfType([
            PropTypes.element,
            PropTypes.func,
            PropTypes.node
          ])
        })
      )
    })
  ).isRequired
};
Outline.defaultProps = {
  routes: []
};
export default withRouter(Outline);
