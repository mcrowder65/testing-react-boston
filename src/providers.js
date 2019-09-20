import React from "react";
import { createBrowserHistory } from "history";
import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider as ThemeProvider } from "@material-ui/core/styles";
import { Router as BrowserRouter } from "react-router";
import { IntlProvider } from "react-intl";
import { getTheme } from "./redux/selectors";
import { connect, Provider } from "react-redux";

const browserHistory = createBrowserHistory();

function UnconnectedComponent(props) {
  const theme = createMuiTheme(props.theme);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter history={browserHistory}>
        <IntlProvider locale={props.locale} messages={props.translations}>
          {props.children}
        </IntlProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({ theme: getTheme(state) });
const ConnectedComponent = connect(mapStateToProps)(UnconnectedComponent);

function Providers(props) {
  return (
    <Provider store={props.store}>
      <ConnectedComponent
        translations={props.translations}
        locale={props.locale}
        routes={props.routes}
      >
        {props.children}
      </ConnectedComponent>
    </Provider>
  );
}

export default Providers;
