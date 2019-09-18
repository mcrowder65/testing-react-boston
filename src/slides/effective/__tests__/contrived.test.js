import React from "react";
import { render } from "test/utils";
import SwitchHook from "../../wrong/switch.hook";
import { fireEvent } from "@testing-library/react";

test("that it renders", () => {
  render(<SwitchHook />);
});

test("SwitchHook will utilize my toggle and checked when provided", () => {
  function Wrapper() {
    const [checked, setChecked] = React.useState(false);
    return (
      <SwitchHook
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

test("SwitchHook will toggle on and off when toggle and checked are not provided", () => {
  const { getByLabelText } = render(<SwitchHook />);
  expect(getByLabelText("checkbox").checked).toEqual(false);

  fireEvent.click(getByLabelText("checkbox"));
  expect(getByLabelText("checkbox").checked).toEqual(true);

  fireEvent.click(getByLabelText("checkbox"));
  expect(getByLabelText("checkbox").checked).toEqual(false);
});
