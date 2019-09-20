import React from "react";
import { fireEvent } from "@testing-library/react";
import RealWorldExample from "src/slides/effective/real-world-example";
import { theme } from "../../../reusable/theme";
import { render } from "../../../../test/utils";

test("that it renders", () => {
  render(<RealWorldExample />);
});

test(`WHEN updating to a new primary color
THEN the button changes to the new primary color
AND WHEN rerendering the component the new primary color stays`, () => {
  const { getByLabelText, getByTitle, rerender, unmount } = render(
    <RealWorldExample />
  );

  const getButton = () => getByLabelText("update primary color");

  expect(getButton()).toHaveStyle(
    `background-color: #${theme.palette.primary.main}`
  );

  const newColor = `#9c27b0`;
  fireEvent.click(getByTitle(newColor));

  fireEvent.click(getButton());
  expect(getButton()).toHaveStyle(`background-color: ${newColor}`);

  // simulate a page refresh
  unmount();
  rerender(<RealWorldExample />);

  expect(getButton()).toHaveStyle(`background-color: ${newColor}`);
});
