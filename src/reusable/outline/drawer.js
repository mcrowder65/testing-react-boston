import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiDrawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: theme.drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

function Drawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiDrawer
        aria-label="drawer"
        anchor="right"
        open={props.isDrawerOpen}
        className={classes.drawer}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {props.routes.map((route, index) => (
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
      </MuiDrawer>
    </div>
  );
}

export default withRouter(Drawer);
