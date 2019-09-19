import React from "react";
import { fireEvent } from "@testing-library/react";
import { render } from "test/utils";
import RealWorldExample from "src/slides/effective/real-world-example";
import { theme } from "../../../reusable/theme";
test("that it renders", () => {
  render(<RealWorldExample />);
});
test("when clicking it does something", () => {
  const { getByLabelText, getByTitle } = render(<RealWorldExample />);
  const button = getByLabelText("update primary color");
  expect(button).toHaveStyle(
    `background-color: #${theme.palette.primary.main}`
  );
  const newColor = `#9c27b0`;
  fireEvent.click(getByTitle(newColor));

  fireEvent.click(getByLabelText("update primary color"));
  expect(button).toHaveStyle(`background-color: ${newColor}`);
});
