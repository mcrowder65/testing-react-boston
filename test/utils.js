import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Router as BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

export const render = component => {
  const history = createBrowserHistory();
  return rtlRender(
    <BrowserRouter history={history}>{component}</BrowserRouter>
  );
};
