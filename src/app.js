import React from "react";
import "babel-polyfill";
import { Router as BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import AboutMe from "src/slides/about-me";
import Slides from "src/reusable/outline/outline";
import { IntlProvider } from "react-intl";

// import Agenda from "src/slides/agenda";
import What from "./slides/what";
import Encourage from "./slides/encourage";
import Best from "./slides/best";
import Wrong from "./slides/wrong/wrong";
import Effective from "./slides/effective/effective";
import Contrived from "./slides/effective/contrived";
import RealWorldExample from "./slides/effective/real-world-example";
import TestOfTime from "./slides/test-of-time";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import { theme } from "./reusable/theme";
import Queries from "./slides/apis/queries";
import FiringEvents from "./slides/apis/firing-events";
// import AsyncUtilities from "./slides/apis/async-utilities";
import translations from "./translations";

const browserHistory = createBrowserHistory();
const routes = [
  { path: "/about-me", name: "About me", component: AboutMe },
  // { path: "/agenda", name: "Agenda", component: Agenda },
  {
    path: "/wrong-tests",
    name: "The wrong way to write tests",
    component: Wrong
  },
  {
    path: "/what",
    name: "What is React Testing Library?",
    component: What
  },
  {
    path: "/encourage",
    name: "What does React Testing Library encourage?",
    component: Encourage
  },
  {
    path: "/best",
    name: "What does React Testing Library do best?",
    component: Best
  },
  {
    path: "/apis",
    name: "React Testing Library Apis",
    subcomponents: [
      { path: "/queries", name: "Queries", component: Queries },
      {
        path: "/firing-events",
        name: "Firing Events",
        component: FiringEvents
      }
      // {
      //   path: "/async-utilities",
      //   name: "Async Utilities",
      //   component: AsyncUtilities
      // }
    ]
  },
  {
    path: "/effective",
    name: "Effectively testing a React component",
    component: Effective,
    subcomponents: [
      { path: "/index", name: "Effective", component: Effective },
      { path: "/contrived", name: "Contrived", component: Contrived },
      { path: "/real-world", name: "Real World", component: RealWorldExample }
    ]
  },

  {
    path: "/test-of-time",
    name: "Writing tests that stand the test of time",
    component: TestOfTime
  }
];

function App() {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <BrowserRouter history={browserHistory}>
        <IntlProvider locale="en" messages={translations}>
          <div>
            <Slides routes={routes} />
          </div>
        </IntlProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
