import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Router as BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import rootReducer from "../src/redux/reducers";
import { initialState } from "../src/redux/initial-state";
import { getTheme } from "../src/redux/selectors";
import ThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import { Provider } from "react-redux";
import { createStore } from "redux";
import translations from "../src/translations";
import { IntlProvider } from "react-intl";
const store = createStore(rootReducer, initialState);
const locale = "en";
export const render = component => {
  const history = createBrowserHistory();
  return rtlRender(
    <Provider store={store}>
      <ThemeProvider theme={getTheme(store.getState())}>
        <BrowserRouter history={history}>
          <IntlProvider locale={locale} messages={translations[locale]}>
            {component}
          </IntlProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
