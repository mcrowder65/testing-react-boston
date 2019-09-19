import React from "react";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./redux/reducers";
import { createStore, compose } from "redux";
import { createBrowserHistory } from "history";
import { initialState } from "./redux/initial-state";
import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider as ThemeProvider } from "@material-ui/core/styles";
import { Router as BrowserRouter } from "react-router";
import { IntlProvider } from "react-intl";
import { getTheme } from "./redux/selectors";
import { connect, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

const browserHistory = createBrowserHistory();
const composeEnhancers =
  (process.env.NODE_ENV !== "prod" &&
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const persistConfig = {
  key: "theme",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, initialState, composeEnhancers());
const persistor = persistStore(store);

function UnconnectedComponent(props) {
  const theme = createMuiTheme(props.theme);
  return (
    <PersistGate persistor={persistor} loading={null}>
      <ThemeProvider theme={theme}>
        <BrowserRouter history={browserHistory}>
          <IntlProvider locale={props.locale} messages={props.translations}>
            {props.children}
          </IntlProvider>
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  );
}

const mapStateToProps = state => ({ theme: getTheme(state) });
const ConnectedComponent = connect(mapStateToProps)(UnconnectedComponent);

function Providers(props) {
  return (
    <Provider store={store}>
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
