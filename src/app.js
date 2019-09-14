import React from "react";
import "babel-polyfill";
import { Router as BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import AboutMe from "./slides/about-me";
import Slides from "./slides";
import Agenda from "./slides/agenda";

const browserHistory = createBrowserHistory();
const routes = [
  { path: "/about-me", name: "About me", component: AboutMe },
  { path: "/agenda", name: "Agenda", component: Agenda }
];

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <div>
        <Slides routes={routes} />
      </div>
    </BrowserRouter>
  );
}

export default App;