import React from "react";
import { shallow } from "enzyme";
import Switch from "../switch";

describe("getChecked()", () => {
  test(`When passing checked, it returns checked`, () => {
    let checked = true;
    let component = shallow(<Switch checked={checked} />);
    expect(component.instance().getChecked()).toEqual(checked);

    checked = false;
    component = shallow(<Switch checked={checked} />);
    expect(component.instance().getChecked()).toEqual(checked);
  });
});

describe("toggle()", () => {
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
