import React from "react";
import { shallow } from "enzyme";
import Switch from "../switch";

describe("getChecked", () => {
  [true, false].forEach(checked => {
    test(`When passing checked as ${checked}, it returns ${checked}`, () => {
      const checkedIsTrue = shallow(<Switch checked={checked} />);
      expect(checkedIsTrue.instance().getChecked()).toEqual(checked);
    });
  });
});

describe("toggle", () => {
  test("when passing toggle as a prop, it uses it", () => {
    const toggle = jest.fn();
    const component = shallow(<Switch toggle={toggle} />);
    component.instance().toggle();
    expect(toggle).toHaveBeenCalled();
  });
  test("when toggle is not passed as a prop, it sets checked in local state", () => {
    const component = shallow(<Switch />);
    expect(component.instance().state.checked).toEqual(false);
    component.instance().toggle();
    expect(component.instance().state.checked).toEqual(true);
  });
});
