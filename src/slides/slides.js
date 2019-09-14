import { useLocalStorageSetState } from "mooks";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/icons/Menu";
import { Route, withRouter } from "react-router";
import { GitHub, Twitter } from "src/reusable/social";
Slides.propTypes = {
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
Slides.defaultProps = {
  routes: []
};

function Slides({ routes, ...props }) {
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
  const headerTitle = routes.find(route =>
    props.location.pathname.includes(route.path)
  );
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar aria-label="drawer">
          <Typography variant="h6" noWrap>
            {headerTitle && headerTitle.name} | @mcrowder65
          </Typography>
          <Twitter />
          <GitHub />
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="end"
            onClick={() => setDrawerOpen(state => !state)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
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
      <Drawer variant="persistent" open={isDrawerOpen} anchor="right">
        <List>
          {routes.map((route, index) => (
            <React.Fragment key={`drawer-${route.path}-${index}`}>
              <ListItem
                style={{
                  backgroundColor: props.location.pathname.includes(route.path)
                    ? "lightgray"
                    : undefined
                }}
                button
                onClick={() => {
                  props.history.push(
                    `${route.path}${
                      route.subcomponents ? route.subcomponents[0].path : ""
                    }`
                  );
                }}
              >
                <ListItemText primary={`#${index + 1} ${route.name}`} />
              </ListItem>
              <Divider />
              {route.subcomponents ? (
                <Collapse
                  component="li"
                  in={props.location.pathname.includes(route.path)}
                >
                  <List>
                    {(route.subcomponents || []).map((subroute, i) => {
                      return (
                        <ListItem
                          key={`subdrawer-${subroute.path}-${i}`}
                          button
                          style={{
                            backgroundColor: props.location.pathname.includes(
                              subroute.path
                            )
                              ? "lightblue"
                              : undefined
                          }}
                          onClick={() => {
                            props.history.push(`${route.path}${subroute.path}`);
                          }}
                        >
                          <Grid container justify="flex-end">
                            <Grid item>
                              <ListItemText>{subroute.name}</ListItemText>
                            </Grid>
                          </Grid>
                        </ListItem>
                      );
                    })}
                  </List>
                  <Divider />
                </Collapse>
              ) : null}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default withRouter(Slides);