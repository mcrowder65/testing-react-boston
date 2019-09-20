import React from "react";
import Switch from "../../wrong/switch.hook";
import { fireEvent, render } from "@testing-library/react";

test("that it renders", () => {
  render(<Switch />);
});

test("Switch will toggle on and off when toggle and checked are not provided", () => {
  const { getByLabelText } = render(<Switch />);
  expect(getByLabelText("checkbox").checked).toEqual(false);
  fireEvent.click(getByLabelText("checkbox"));
  expect(getByLabelText("checkbox").checked).toEqual(true);

  fireEvent.click(getByLabelText("checkbox"));
  expect(getByLabelText("checkbox").checked).toEqual(false);
});

test("Switch will utilize my toggle and checked when provided", () => {
  function Wrapper() {
    const [checked, setChecked] = React.useState(false);
    return (
      <Switch
        checked={checked}
        toggle={() => setChecked(prevChecked => !prevChecked)}
      />
    );
  }

  const { getByLabelText } = render(<Wrapper />);
  expect(getByLabelText("checkbox").checked).toEqual(false);

  fireEvent.click(getByLabelText("checkbox"));
  expect(getByLabelText("checkbox").checked).toEqual(true);

  fireEvent.click(getByLabelText("checkbox"));
  expect(getByLabelText("checkbox").checked).toEqual(false);
});
