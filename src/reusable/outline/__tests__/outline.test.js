import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "test/utils";
import Outline from "src/reusable/outline/outline";

test("that it renders", () => {
  render(<Outline />);
});
test("when clicking the drawer button it opens", () => {
  const { getByLabelText } = render(<Outline />);
  fireEvent.click(getByLabelText("Open drawer"));
  expect(getByLabelText("drawer")).toBeInTheDocument();
});

test(`WHEN clicking a route that has subcomponents, THEN subcomponents appear`, () => {
  const routes = [
    {
      path: "/component",
      name: "Component!",
      subcomponents: [
        {
          path: "/one",
          name: "First subcomponent",
          component: () => <div>I am a subcomponent</div>
        },
        {
          path: "/two",
          name: "Second subcomponent",
          component: () => <div>I am also a subcomponent</div>
        }
      ]
    }
  ];
  const { getByLabelText, getByText } = render(<Outline routes={routes} />);
  fireEvent.click(getByLabelText("Open drawer"));
  fireEvent.click(getByLabelText("Component!"));

  // i am a subcomponent will display on the DOM since it's the first subcomponent
  expect(getByText(/i am a subcomponent/i)).toBeInTheDocument();
  expect(window.location.pathname).toEqual("/component/one");

  // Both names should appear
  expect(getByText(/first subcomponent/i)).toBeInTheDocument();
  expect(getByText(/second subcomponent/i)).toBeInTheDocument();

  fireEvent.click(getByLabelText("/component/two"));

  // since we clicked on the second subcomponent, it should display AND the browser
  // url should correspond to that component
  expect(getByText(/i am also a subcomponent/i)).toBeInTheDocument();
  expect(window.location.pathname).toEqual("/component/two");
});
