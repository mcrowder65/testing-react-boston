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
