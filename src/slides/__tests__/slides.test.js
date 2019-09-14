import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "test/utils";
import Slides from "src/slides/slides";

test("that it renders", () => {
  render(<Slides />);
});

test("when clicking the drawer button it opens", () => {
  const { getByLabelText } = render(<Slides />);
  fireEvent.click(getByLabelText("Open drawer"));
  expect(getByLabelText("drawer")).toBeInTheDocument();
});
